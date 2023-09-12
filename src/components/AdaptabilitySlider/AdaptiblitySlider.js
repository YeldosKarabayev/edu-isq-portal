import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Check from '../../assets/check-button.png'
import '../../pages/MainPage/MainPage.css'
import '../../App.css'


const styles = {
    content: {
        borderRadius: "20px",
        alignItems: "center",
        fontSize: "50px",
        display: "flex",
    }
  };

const AdaptiblitySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };
    
      return (
        <div style={{marginTop: "50px", width: "100%", fontSize: "50px", justifyContent: "center", alignItems: "center"}}>
        <Slider {...settings} 
            style={styles}>
                <div className='block-information'>
                    <img style={{width: "100px", height: "100px"}} src={Check} alt='' />
                    <p className='content__block-information' style={{fontSize: "3.5rem"}}>
                        Получаешь ценные инсайты для упрвления домом
                    </p>
                </div>
                <div className='block-information'>
                    <img style={{width: "100px", height: "100px"}} src={Check} alt='' />
                    <p className='content__block-information' style={{fontSize: "3.5rem"}}>
                        Подключешь новые дома и расширяешь свою сеть управления
                    </p>
                </div>
                <div className='block-information'>
                    <img style={{width: "100px", height: "100px"}} src={Check} alt='' />
                    <p className='content__block-information' style={{fontSize: "3.5rem"}}>
                        Осуществляешь интеграцию с платежными системами для удобного управления финансами
                    </p>
                </div>
                <div className='block-information'>
                    <img style={{width: "100px", height: "100px"}} src={Check} alt='' />
                    <p className='content__block-information' style={{fontSize: "3.5rem"}}>
                        Увеличеваешь чек на свои услуги, предостовляя дополнительные ценные возможности
                    </p>
                </div>
        </Slider>
        </div>
      );
    };

export default AdaptiblitySlider