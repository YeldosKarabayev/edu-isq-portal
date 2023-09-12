import React, {useState} from 'react'
import Modal from 'react-modal'
import { useTranslation } from "react-i18next";


import './MainPage.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Trining from '../../assets/training.png'
import Check from '../../assets/check-button.png'
import Bell from '../../assets/Bell.png'
import close from '../../assets/close.png'


import arrowCurve from '../../assets/curve-arrow.png'
import arrowUpCurve from '../../assets/curve-arrow-up.png'
import Hovered from '../../components/Hovered/Hovered'
import AdaptiblitySlider from '../../components/AdaptabilitySlider/AdaptiblitySlider';
import CourseSloder from '../../components/AdaptabilitySlider/CourseSlider';




const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "50%",
      transform: "translate(-50%, -50%)",
      with: "500px",
      height: "340px",
      borderRadius: "20px"
    }
  };

const MainPage = () => {


    const { t, i18n } = useTranslation();
    Modal.setAppElement('#root');

    const [currentImage, setCurrentImage] = useState(null);

   {/* const handleMouseEnter = (image) => {
        setCurrentImage(image);
    };

    const handleMouseLeave = () => {
        setCurrentImage(null);
    };
*/}

const isMobile = window.innerWidth <= 768 ; // Определяем, является ли экран мобильным


const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };


  const [isHovered, setIsHovered] = useState(null);

 {/* const handleMouseEnter = (item) => {
    setIsHovered(item);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
*/}



    const [currentForm, setCurrentForm] = useState('start');
    const [currentForm1, setCurrentForm1] = useState('start');
    const [currentForm2, setCurrentForm2] = useState('start');
    const [currentForm3, setCurrentForm3] = useState('start');
    const [currentForm4, setCurrentForm4] = useState('start');

    const handleOpenForm = () => {
        setCurrentForm('new');
    };

    const handleCancel = () => {
        setCurrentForm('start');
    };

    const handleOpenForm1 = () => {
        setCurrentForm1('new');
    };

    const handleCancel1 = () => {
        setCurrentForm1('start');
    };

    const handleOpenForm2 = () => {
        setCurrentForm2('new');
    };

    const handleCancel2 = () => {
        setCurrentForm2('start');
    };

    const handleOpenForm3 = () => {
        setCurrentForm3('new');
    };

    const handleCancel3 = () => {
        setCurrentForm3('start');
    };

    const handleOpenForm4 = () => {
        setCurrentForm4('new');
    };

    const handleCancel4 = () => {
        setCurrentForm4('start');
    };


const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



  return (
    <>
        <Header />
        <main style={{marginTop: "30px"}}>
            <div className='container'>
            <div 
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "45px"
                }}>
                <div className='title' >
                        <h1 className='title_h1'>
                                    {t("Пройдите")} <span style={{color: "#FFB000"}}>обучение</span> на <br/> I SHANYRAQ
                        </h1>
                        <p style={{marginBottom: "48px"}}>
                            и уже через 4 недели начни дополнительно зарабатывать <span style={{color: "#FFB000"}}> от 200 000 тенге в месяц</span>, <br/> управляя домом
                        </p>
            </div>
            <img className='img_trining' src={Trining} alt='intro' style={{width: "350px", height: "400px", marginRight: "60px"}} />
            </div>
            <div>
            {isMobile ? (
                    <AdaptiblitySlider />
                ) : (
            <div style={{display: "flex", justifyContent: "space-between", marginTop: "50px", fontWeight: "600"}}>
                <div className='block-content-1'>
                    <img className='img-hover' src={Check} alt='' />
                    <p className='content__block-information'>
                        Получаешь ценные инсайты для упрвления домом
                    </p>
                </div>
                <div  className='block-content-2'>
                    <img className='img-hover' src={Check} alt='' />
                    <p className='content__block-information'>
                        Подключешь новые дома и расширяешь свою сеть управления
                    </p>
                </div>
                <div className='block-content-3'>
                    <img className='img-hover' src={Check} alt='' />
                    <p className='content__block-information'>
                        Осуществляешь интеграцию с платежными системами для удобного управления финансами
                    </p>
                </div>
                <div className='block-content-4'>
                    <img className='img-hover' src={Check} alt='' />
                    <p className='content__block-information'>
                        Увеличеваешь чек на свои услуги, предостовляя дополнительные ценные возможности
                    </p>
                </div>
            </div>
            )}
            </div>
            <div className='title' style={{marginTop: "150px"}}>
                    <h1 className='title_h1'>
                        <span style={{color: "#FFB000"}}>I SHANYRAQ</span> ОБРАЗОВАНИЕ
                    </h1>
                    <p style={{marginBottom: "48px", marginTop: "-1rem",}}>
                        Подборка лучших онлайн и очных курсов для Вас!
                    </p>
            </div>
            {isMobile ? (
                <CourseSloder />
            ) : (
            <div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "70px"}}>
                <div className='hover-block'>
                    <p style={{fontSize: "20px", fontWeight: "600"}}>Председатель <br/>ОСИ</p>
                    <p style={{
                        cursor: "pointer",
                        fontSize: "15px", 
                        fontWeight: "600", 
                        color: "#FFB000",
                        marginTop: "40px" 
                    }}><span>О курсе</span></p>
                </div>
                <div className='hover-block'>
                    <p style={{fontSize: "20px", fontWeight: "600"}}>Менеджер по управлению<br/>жилыми и нежилыми<br/>зданиями</p>
                    <p style={{
                        cursor: "pointer",
                        fontSize: "15px", 
                        fontWeight: "600", 
                        color: "#FFB000",
                        marginTop: "20px" 
                    }}><span>О курсе</span></p>
                </div>
                <div className='hover-block'>
                    <p style={{fontSize: "20px", fontWeight: "600"}}>Член совета <br/>дома</p>
                    <p style={{
                        cursor: "pointer",
                        fontSize: "15px", 
                        fontWeight: "600", 
                        color: "#FFB000",
                        marginTop: "40px" 
                    }}><span>О курсе</span></p>
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "2rem"}}>
                <div className='hover-block'>
                    <p style={{fontSize: "20px", fontWeight: "600"}}>Доверенное лицо <br/>ПТ</p>
                    <p style={{
                        fontSize: "15px", 
                        fontWeight: "600", 
                        color: "#FFB000",
                        marginTop: "40px",
                        cursor: "pointer" 
                    }}><span>О курсе</span></p>
                </div>
                <div className='hover-block'>
                    <p style={{fontSize: "20px", fontWeight: "600"}}>Член ревезионный <br/>комиссии</p>
                    <p style={{
                        fontSize: "15px", 
                        fontWeight: "600", 
                        color: "#FFB000",
                        marginTop: "40px",
                        cursor: "pointer" 
                    }}><span>О курсе</span></p>
                </div>
                <div className='hover-block'>
                    <p style={{fontSize: "20px", fontWeight: "600"}}>Инициативный <br/>собственник</p>
                    <p style={{
                        cursor: "pointer",
                        fontSize: "15px", 
                        fontWeight: "600", 
                        color: "#FFB000",
                        marginTop: "40px" 
                    }}><span>О курсе</span></p>
                </div>
            </div>
            </div>
            )}
            <div style={{
                alignItems: "center",
                marginLeft: "472px",
                marginTop: "5rem"
            }}>
                <button
                    className='hover-btn'
                    >Весь каталог</button>
            </div>
            <div className='title' style={{marginTop: "150px"}}>
                    <h1 className='title_h1'>
                        <span style={{color: "#FFB000"}}>I SHANYRAQ</span> АТТЕСТАЦИЯ
                    </h1>
                    <p style={{marginBottom: "48px", width: "1000px"}}>
                        Пройдите аттестацию с нами и получите официальное право представлять<br/>
                        услуги по управлению многоквартирными домами
                    </p>
            </div>

            <Hovered />

            <div 
                className='title_quesions'>
                    <h1 className='title_h1-quessions'>
                        САМЫЕ <span style={{color: "#FFB000"}}>ПОПУЛЯРНЫЕ ВОПРОСЫ</span>
                    </h1>
            </div>

            {currentForm === 'start' && (
            <div onClick={handleOpenForm}>
            <div className='quesion-block'>
                    <p className='pHover'>Зачем мне проходить аттестацию?</p>
                    <img className='arrowCurve' src={arrowCurve} alt='' />
            </div>
            </div>
            )}
            {currentForm === 'new' && (
            <div  onClick={handleCancel}>
            <div className='quesion-block-item'>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p className='pHover'>Зачем мне проходить аттестацию?</p>
                    <img className='arrowCurve' src={arrowUpCurve} alt='' />
                </div>
                    <h6>Согласно статье 48-1 Закона управляющая компания оказывает услуги по управлению обьектом кондоминиума при наличии в своем составе специалистов, прошедших обучение
                    и обладающих документом, подтверждающим квалификацию на осуществление функций по управлению объектом кондоминиума в соответствии с квалификационными 
                    требованиями, утвержденными приказом и.о. Министра индустрии и инфраструктурного развития Республики Казахстан от 30 марта 2020 года N° 169.</h6>
                    
            </div>
            </div>
            )}

            {currentForm1 === 'start' && (
            <div onClick={handleOpenForm1}>
            <div className='quesion-block'>
                    <p className='pHover'>Зачем мне проходить аттестацию?</p>
                    <img className='arrowCurve' src={arrowCurve} alt='' />
            </div>
            </div>
            )}
            {currentForm1 === 'new' && (
            <div  onClick={handleCancel1}>
            <div className='quesion-block-item'>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p className='pHover' >Зачем мне проходить аттестацию?</p>
                    <img className='arrowCurve' src={arrowUpCurve} alt='' />
                </div>
                    <h6>Согласно статье 48-1 Закона управляющая компания оказывает услуги по управлению обьектом кондоминиума при наличии в своем составе специалистов, прошедших обучение
                    и обладающих документом, подтверждающим квалификацию на осуществление функций по управлению объектом кондоминиума в соответствии с квалификационными 
                    требованиями, утвержденными приказом и.о. Министра индустрии и инфраструктурного развития Республики Казахстан от 30 марта 2020 года N° 169.</h6>
                    
            </div>
            </div>
            )}

            {currentForm2 === 'start' && (
            <div onClick={handleOpenForm2}>
            <div className='quesion-block'>
                    <p className='pHover'>Зачем мне проходить аттестацию?</p>
                    <img className='arrowCurve' src={arrowCurve} alt='' />
            </div>
            </div>
            )}
            {currentForm2 === 'new' && (
            <div  onClick={handleCancel2}>
            <div className='quesion-block-item'>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p className='pHover'>Зачем мне проходить аттестацию?</p>
                    <img className='arrowCurve' src={arrowUpCurve}  alt='' />
                </div>
                    <h6 >Согласно статье 48-1 Закона управляющая компания оказывает услуги по управлению обьектом кондоминиума при наличии в своем составе специалистов, прошедших обучение
                    и обладающих документом, подтверждающим квалификацию на осуществление функций по управлению объектом кондоминиума в соответствии с квалификационными 
                    требованиями, утвержденными приказом и.о. Министра индустрии и инфраструктурного развития Республики Казахстан от 30 марта 2020 года N° 169.</h6>
                    
            </div>
            </div>
            )}

            {currentForm3 === 'start' && (
            <div onClick={handleOpenForm3}>
            <div className='quesion-block'>
                    <p className='pHover' >Зачем мне проходить аттестацию?</p>
                    <img className='arrowCurve' src={arrowCurve}  alt='' />
            </div>
            </div>
            )}
            {currentForm3 === 'new' && (
            <div  onClick={handleCancel3}>
            <div className='quesion-block-item'>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p className='pHover' >Зачем мне проходить аттестацию?</p>
                    <img className='arrowCurve' src={arrowUpCurve} alt='' />
                </div>
                    <h6 >Согласно статье 48-1 Закона управляющая компания оказывает услуги по управлению обьектом кондоминиума при наличии в своем составе специалистов, прошедших обучение
                    и обладающих документом, подтверждающим квалификацию на осуществление функций по управлению объектом кондоминиума в соответствии с квалификационными 
                    требованиями, утвержденными приказом и.о. Министра индустрии и инфраструктурного развития Республики Казахстан от 30 марта 2020 года N° 169.</h6>
                    
            </div>
            </div>
            )}

            {currentForm4 === 'start' && (
            <div onClick={handleOpenForm4}>
            <div className='quesion-block'>
                    <p className='pHover' >Зачем мне проходить аттестацию?</p>
                    <img className='arrowCurve' src={arrowCurve}  alt='' />
            </div>
            </div>
            )}
            {currentForm4 === 'new' && (
            <div  onClick={handleCancel4}>
            <div className='quesion-block-item'>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p className='pHover'>Зачем мне проходить аттестацию?</p>
                    <img className='arrowCurve' src={arrowUpCurve} alt='' />
                </div>
                    <h6 >Согласно статье 48-1 Закона управляющая компания оказывает услуги по управлению обьектом кондоминиума при наличии в своем составе специалистов, прошедших обучение
                    и обладающих документом, подтверждающим квалификацию на осуществление функций по управлению объектом кондоминиума в соответствии с квалификационными 
                    требованиями, утвержденными приказом и.о. Министра индустрии и инфраструктурного развития Республики Казахстан от 30 марта 2020 года N° 169.</h6>
                    
            </div>
            </div>
            )}
    
            <div style={{
                alignItems: "center",
                marginLeft: "450px",
                marginTop: "4rem",
                marginBottom: "6rem"
            }}>
                <button onClick={handleOpenModal}
                    className='hover-btn'>Оставтье заявку
                </button>

                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    style={customStyles} 
                    >
                            <div style={{
                                     display: "flex",
                                     flexDirection: "column",
                                     alignItems: "center",
                                     minWidth: "326px",
                                     position: "relative",
                                     paddingTop: "20px",
                                }}
                                >
                                <div className="grayCircle" onClick={handleCloseModal}>
                                    <img src={close} alt="close" style={{ width: "9px", height: "9px" }} />
                                </div>
                                <div style={{textAlign: "center", alignItems: "center", justifyContent: "center"}}>
                                    <img src={Bell} style={{width: "45px", marginLeft: "130px", marginBottom: "1rem", marginTop: "-1rem"}} alt="delete" />
                                        <p style={{fontWeight: "600"}}>Оставтье заявку</p>
                                        <input 
                                            style={{
                                                fontSize: "16.67px", 
                                                marginTop: "1rem",
                                                width: "300px",
                                                padding: "1rem",
                                                placeholder: "#000",
                                                height: "40px",
                                                backgroundColor: "#EFEFEF",
                                                borderRadius: "5px",
                                                marginBottom: "1rem",
                                                fontWeight: "600"
                                                }}
                                        type='text' placeholder='Имя'  name='name' />
                                        <input 
                                            style={{
                                                fontSize: "16.67px", 
                                                marginTop: "1rem",
                                                width: "300px",
                                                padding: "1rem",
                                                placeholder: "#000",
                                                height: "40px",
                                                backgroundColor: "#EFEFEF",
                                                borderRadius: "5px",
                                                marginBottom: "2rem",
                                                fontWeight: "600"
                                                }}
                                        type='text' placeholder='Телефон'  name='name' />
                                        <button
                                            style={{
                                                fontSize: "16.67px",
                                                width: "300px",
                                                height: "40px",
                                                color: "#fff",
                                                backgroundColor: "#0257FE",
                                                borderRadius: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                            Отпрваить
                                        </button>
                                        
                                </div>
                                </div>
                        </Modal>
            </div>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default MainPage