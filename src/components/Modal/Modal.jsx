import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { ModalContext } from '../../contexts';
import img from "../../img/683.jpg";
import "./Modal.scss";
export const Modal = (props) => {
 const { children, title } = props;
 const { closeModal } = useContext(ModalContext);
 const [closing, setClosing] = useState(false);

 const handleClose = ()=>{
  setClosing(true);

const closeTimeout = setInterval(() => {
  closeModal();
  clearTimeout(closeTimeout)
}, 100);
 }
 const backdropClasses = closing ? 'backdrop backdrop__hide' : 'backdrop';
  return (
    <div className='backdropClasses' onClick={handleClose}>
      <div className='modal' onClick={(event)=> event.stopPropagation()}>
        <div className="modal__header" onClick={handleClose}>
         <img className='modal__header-img' src={img} alt="" />
        </div>
        <div className="modal__body" onClick={handleClose}>
         <div className="div">
         <p className='modal__body-text'>г. Бишкек, Кок-Джар 51</p>
         <a href="tel:+996 (770) 44-11-44 " className="modal__body-link">+996 (770) 44-11-44</a>
         </div>
         <div className="div">
          <p className="modal__body-text">г. Ош, ул. Ленина 306</p>
         <a href="" className="modal__body-link">+996 (551) 44-22-44</a>
         </div>
         <div className="div">
         <p className="modal__body-text">г. Джалал-Абад</p>
         <a href="" className="modal__body-link">+996 (220) 44-22-44</a>
         </div>
         <div className="modal__link">
          <a href="" className="modal__link-l"><i className="fa-brands fa-instagram"></i></a>
          <a href="" className="modal__link-li"><i className="fa-brands fa-facebook"></i></a>
         </div>
         <div className="modal__contact">
          <a href="#" className="modal__contact-link"><i className="fa-solid fa-circle-play"></i> Онлайн консультация</a>
         </div>
         <div className="modal__contactt">
          <a href="#" className="modal__contactt-linc"><i className="fa-brands fa-whatsapp"></i> Написать на WhatsApp</a>
         </div>
        </div>
      </div>
    </div>
    
  )
}
