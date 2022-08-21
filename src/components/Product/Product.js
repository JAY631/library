import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {getProduct} from '../../redux/reducers/items';
import "./Product.scss";

const Product = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const product = useSelector(s => s.items.product);
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getProduct(params.idx))
    }, []);
    return (
        <section className='product'>
            <div className='container'>
                <button className='navigate' onClick={()=>{
                    navigate(-1)
                }}><i className="fa-solid fa-arrow-left-long"></i></button>
                <div className='product__row'>
                    <h3 className='product__title'>{product.title}</h3>
                    <img width={600} height="450" className='product__img' src={product.image} alt=""/>
                    <div className='product__row-column3'>
                        <div className='row'>
                            <div className='col-3'><p><b>Город:</b>{product.city}</p></div>
                            <div className='col-3'><p><b>Адрес:</b>{product.geo}</p></div>
                            <div className='col-3'><p><b>Срок сдачи:</b>{product.term}</p></div>
                            <div className='col-3'><p><b>Цена за кв. метр:</b>{product.price}</p></div>
                        </div>
                    <div>
                        
                      
                    </div>
                    </div>
                    <p className='product__text'>
                            {product.description}
                        </p>
                </div>
            </div>

        </section>
    )
        ;
};

export default Product;
