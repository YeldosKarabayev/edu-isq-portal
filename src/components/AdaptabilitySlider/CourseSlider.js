import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Check from '../../assets/check-button.png'
import '../../pages/MainPage/MainPage.css'
import '../../App.css'

const styles = {
    content: {
        borderRadius: "30px"
    }
  };


const CourseSloder = () => {
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

        <Slider {...settings}
        style={styles} >
            <div className='hover-block' style={{display: "flex",marginLeft: "10px", marginRight: "10px"}}>
                    <p style={{fontSize: "50px", fontWeight: "600"}}>Председатель <br/> ОСИ</p>
                    <p style={{
                        cursor: "pointer",
                        fontSize: "42px", 
                        fontWeight: "600", 
                        color: "#FFB000",
                        marginTop: "40px" 
                    }}><span>О курсе</span></p>
                </div>
                <div className='hover-block'>
                    <p style={{fontSize: "50px", fontWeight: "600"}}>Менеджер по управлению жилыми и нежилымизданиями</p>
                    <p style={{
                        cursor: "pointer",
                        fontSize: "42px", 
                        fontWeight: "600", 
                        color: "#FFB000",
                        marginTop: "40px" 
                    }}><span>О курсе</span></p>
                </div>
                <div className='hover-block'>
                    <p style={{fontSize: "60px", fontWeight: "600"}}>Член совета <br/>дома</p>
                    <p style={{
                        cursor: "pointer",
                        fontSize: "42px", 
                        fontWeight: "600", 
                        color: "#FFB000",
                        marginTop: "40px" 
                    }}><span>О курсе</span></p>
                </div>

                <div className='hover-block'>
                    <p style={{fontSize: "60px", fontWeight: "600"}}>Доверенное лицо <br/>ПТ</p>
                    <p style={{
                        fontSize: "42px", 
                        fontWeight: "600", 
                        color: "#FFB000",
                        marginTop: "20px",
                        cursor: "pointer" 
                    }}><span>О курсе</span></p>
                </div>
                <div className='hover-block'>
                    <p style={{fontSize: "50px", fontWeight: "600"}}>Член ревезионный <br/>комиссии</p>
                    <p style={{
                        fontSize: "42px", 
                        fontWeight: "600", 
                        color: "#FFB000",
                        marginTop: "40px",
                        cursor: "pointer" 
                    }}><span>О курсе</span></p>
                </div>
                <div className='hover-block'>
                    <p style={{fontSize: "50px", fontWeight: "600"}}>Инициативный <br/>собственник</p>
                    <p style={{
                        cursor: "pointer",
                        fontSize: "42px", 
                        fontWeight: "600", 
                        color: "#FFB000",
                        marginTop: "40px" 
                    }}><span>О курсе</span></p>
                </div>
        </Slider>

      );
    };
export default CourseSloder