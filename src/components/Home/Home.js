import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {Link} from 'react-router-dom';
import {getItems, addOrder} from '../../redux/reducers/items';
import './Home.scss'
import image from '../../img/rahat.png'
const Home = () => {
    const items = useSelector(s => s.items.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems())
    }, []);
    return (

        <div>

            <section className='home'>
                <div className='container'>
                    <div className='row'>
                        {
                            items.map((item, idx) => {
                                return <div key={item.id} className='col-4'>
                                    <div className='home__product'>
                                        <img className='home__product-img' src={item.image} alt=""/>
                                        <h3 className='home__product-title'>{item.title}</h3>
                                        <div className='home__product-description'>
                                            <p>{item.description.length === 0 ? 'no description' : item.description.length > 30 ? item.description.substr(0, 30) + '...' : item.description}</p>
                                            <p className='wrapper'>{item.geo}</p>
                                            <Link to={`/product/${idx}`}>Подробнее</Link>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        
                    </div>
                </div>

            </section>
            <section className='flex'>
                <div className='container'>
                    <div className='row'>
                            <div className='col-6'>
                                <div className='flex__wrap'>
                                 <h2 className='flex__wrap-title'>Компания Эмаком</h2>
                                <p className='flex__wrap-text'>Мы хотим сохранить   архитектурный облик города, построив здания, которые станут предметом гордости компании и эталоном будущего строительства.</p>
                                <p className='flex__wrap-text'>Мы верим, что доступность и   качество  наших квартир гарантируют  достойное решение жилищного вопроса горожан.</p>
                                <p className='flex__wrap-text'>Строим города, строим отношения!</p>
                                <Link className='flex__wrap-btn' to={'/obout'}>О компании</Link>
                                </div>
                            </div> 
                            <div className='col-6'>
                                <div className='flex__wrapper'>
                                    <img className='flex__wrapper-image'  src={image} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
           
            </section>
        </div>
    )
        ;
};

export default Home;