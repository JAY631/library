import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {Link} from 'react-router-dom';
import {getItems, addOrder} from '../../redux/reducers/items';
import './Home.scss'

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
                                            <p>{item.description.length === 0 ? 'no description' : item.description.length > 30 ? item.description.substr(0, 30) + '...' : item.description} </p>
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

        </div>
    )
        ;
};

export default Home;