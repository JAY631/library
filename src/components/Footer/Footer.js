import React from 'react';
import {Link} from 'react-router-dom';
import "./footer.scss";

const Footer = () => {
return (
    <footer className='main-footer'>
        <div className='container'>
            <div className='row'>

                {/* Изменил адреса в футере */}
                <h3>Hаши контакты</h3>                    
                <div className='col-4 '>
                    <div className='main-footer__wrap-end'>
                        <p>Адрес</p>
                        <h4>г. Бишкек, Кок-Джар, 51</h4>
                        <ul>
                            <p>Телефон</p>
                            <li>+996 (770) 44-11-44</li>
                            <li>+996 (707) 44-11-44</li>
                            <li>+996 (990) 44-11-44</li>
                        </ul>
                    </div>
                    <div className='main-footer__wrap-end'>
                        <p>Aдрес</p>
                        <h4>г. Ош, ул. Ленина, 306</h4>
                        <h4>г. Ош, пр. Масалиева, 25а</h4>
                        <ul>
                            <p>Телефон</p>
                            <li><a>+996 (778) 44-22-44</a></li>
                            <li><a>+996 (553) 44-22-44</a></li>
                            <li><a>+996 (705) 44-22-44</a></li>
                        </ul>
                    </div>                    
                    <div className='main-footer__wrap-end'>
                            <p>Адрес</p>
                            <h4>Большая Серпуховская 12/11стр 2</h4>
                            <ul>
                                <p>Телефон</p>
                                <li><a>+7 977 402 11 44</a></li>
                                <li><a>+7 977 267 11 44</a></li>
                            </ul>
                    </div>
                    <div className='main-footer__wrap-end'>
                            <p>Адрес</p>
                            <h4>г. Джалал-Абад</h4>
                            <ul>
                                <p>Телефон</p>
                                <li><a>+996 (220) 442244</a></li>
                                <li><a>+996 (770) 442244</a></li>
                            </ul>
                    </div>
                    <div className='main-footer__wrap-end'>
                            <p>Адрес</p>
                            <h4>г. Кызыл-кия</h4>
                            <ul>
                                <p>Телефон</p>
                                <li><a>+996 (775) 33-06-06</a></li>
                                <li><a>+996 (557) 33-06-06</a></li>
                            </ul>
                    </div>
                </div>
                {/* Конец изменений */}
                
            </div>

            <div className='row'>
                <p className='piece'>Почта</p>
                <a href=''>manager.emakom@gmail.com</a>

            </div>
            <hr/>
            <div className='row'>
                <div className='col-4'>
                    <h4>О нас</h4>
                    <ul>
                        <li>Миссия компании «Эмаком» — изменять жизнь</li>
                        <li>жителей нашей страны к лучшему, строить качественное,</li>
                        <li>комфортное, и самое главное, доступное жилье с</li>
                        <li>развитой инфраструктурой.</li>
                    </ul>
                </div>
                <div className=' col-4'>
                    <h4>Карта Сайта</h4>
                    <ul>
                        <li><Link className='map' to={'/obout'}>About</Link></li>
                    </ul>
                </div>
            </div>
            <hr className='scss'/>
            <div className='row'>
                <div className='one-piece'>
                    <p className='slider'>
                        &copy;{new Date().getFullYear()}-Эмаком. Все права защищены
                    </p>

                </div>
                <div className='one-piece'>
                    <div className='link'>
                        <a target="_blank"
                            href='https://api.whatsapp.com/send/?phone=996502441144&text&app_absent=0'><i
                            className="fa-brands fa-whatsapp"></i></a>
                        <a target="_blank" href='https://www.instagram.com/emakom_kg/?hl=ru'><i
                            className="fa-brands fa-instagram"></i></a>
                        <a target="_blank" href='https://www.facebook.com/emakomholding/'><i
                            className="fa-brands fa-facebook"></i></a>
                    </div>
                </div>

            </div>
        </div>
    </footer>
)
    ;
};

export default Footer;