import React from 'react';
import "./Obout.scss"
import image from "../../img/emakom.png";
import {useNavigate, useParams} from 'react-router-dom';
const Obout = () => {
    const navigate = useNavigate()
    return (
        <section className='about'>
            <div className='container'>
            <button className='navigate' onClick={()=>{
                    navigate(-1)
                }}><i className="fa-solid fa-arrow-left-long"></i></button>
                <div className='row'>
                    <div className='about__product'>
                        <div className='about__product-title'>
                            <h2 className='about__product-title h2'>
                                О компании Эмаком
                            </h2>
                        </div>
                        <div className='about__product-image'>
                            <img className='about__product-image img' src={image} alt=""/>
                        </div>
                        <div className='about__product-page'>
                            <b className='abut__product-page b'>Миссия “Эмаком Холдинг”</b>
                        </div>
                        <div className='about__product-text'>
                            <p className='about__product-text'>Компания “Эмаком” работает на строительном рынке
                                Кыргызстана с 2017 года. Приоритетным направлением деятельности компании является
                                строительство современного доступного жилья преимущественно в сегменте индустриального
                                домостроения. Компания реализует проекты в городах Ош, Бишкек, Джалал- Абад и в
                                Кызыл-Кие.</p>
                        </div>
                        <div className='about__product-text'>
                            <p className='about__product-text'>“Эмаком” —это динамично развивающаяся строительная
                                компания , за короткий срок успевшая занять одно из лидирующих мест на строительном
                                рынке Кыргызстана. Одним из основных направлений компании является предоставление
                                доступного семейного жилья.</p>
                        </div>
                        <div className='about__product-wrapper'>
                            <p className=''>Миссия компании «Эмаком» изменять жизнь жителей нашей страны к лучшему,
                                строить качественное, комфортное, и самое главное, доступное жилье с развитой
                                инфраструктурой.</p>
                        </div>
                        <div className='about__product-wrapper'>
                            <p className=''>Мы строим в первую очередь для любимых жителей страны.</p>
                        </div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/lU_njgVp8JY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/z6Md3FtKuM4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='about__section'></div>
                    <div className='about__flex'>
                        <div className='about__flex-bottom'>
                            <h2>Чем мы отличаемся?</h2>
                        </div>
                        <div className='about__flex-direction'>
                            <p>Наличие собственных производств позволяет компании контролировать качество, а также
                                осуществлять контроль над своевременной поставкой строительных материалов. Как
                                следствие, происходит оптимизация строительного процесса: повышается качество жилья,
                                сокращаются сроки</p>
                            <p>строительства.</p>
                        </div>
                    </div>


                    {/* Column1 */}

                    <div className='col-3'>
                        <div className='about__justify'>
                            <p className='about__justify-end'><i className="fas fa-stream"></i></p>
                            <h2 className='about__justify-title'>17 за 2 года</h2>
                            <p className='about__justify-text'>
                                У нас не бывает сбоев по срокам реализации проектов, поэтому мы можем строить по 17
                                объектов за 2 года
                            </p>
                        </div>
                    </div>
                    {/* Column2 */}
                    <div className='col-3'>
                        <div className='about__justify'>
                            <p className='about__justify-end'><i className="fa-solid fa-forward"></i></p>
                            <h2 className='about__justify-title'>Скорость стройки</h2>
                            <p className='about__justify-text'>В отличии от других стройкомпаний, у нас не бывает
                                долгостроев</p>
                        </div>
                    </div>
                    {/* Column3 */}
                    <div className='col-3'>
                        <div className='about__justify'>
                            <p className='about__justify-end'><i className="fas fa-thumbs-up"></i></p>
                            <h2 className='about__justify-title'>Качество строительства</h2>
                            <p className='about__justify-text'>Мы пристально следим за качеством каждого этапа
                                строительства </p>
                        </div>

                    </div>
                    {/* Column4 */}
                    <div className='col-3'>
                        <div className='about__justify'>
                            <p className='about__justify-end'><i className="fas fa-money-check-alt"></i></p>
                            <h2 className='about__justify-title'>Цены</h2>
                            <p className='about__justify-text'>Мы строим для людей, а не олигархов, поэтому стремимся к
                                балансу цены и качества</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
        ;
};

export default Obout;