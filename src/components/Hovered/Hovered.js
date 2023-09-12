import React, { useState } from 'react'
import Step1 from '../../assets/step1.png'
import Step2 from '../../assets/step2.png'
import Step3 from '../../assets/step3.png'
import { useTranslation } from "react-i18next";

const Hovered = () => {

  const { t, i18n } = useTranslation();
  const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

  
  return (
            <div 
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "70px"
                }}>
                    
                    <div className='image-container'>
                        {hoveredItem === 'item1' && (<img src={Step1} className='image' style={{width: "550px", height: "550px", marginRight: "10px",  marginTop: "2rem"}} />) 
                        || hoveredItem === 'item2' && (<img src={Step2} className='image' style={{width: "550px", height: "550px", marginRight: "10px",  marginTop: "2rem"}} />) 
                        || hoveredItem === 'item3' && (<img src={Step3} className='image' style={{width: "550px", height: "550px", marginRight: "10px",  marginTop: "2rem"}} />) 
                        || (<img src={Step1} style={{width: "550px", height: "550px", marginRight: "10px",  marginTop: "2rem"}} />)}
                    </div>
                <div style={{display: "grid"}}>

                <div 
                    onMouseEnter={() => handleMouseEnter('item1')}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        maxWidth: "540px",
                        marginTop: "45px",
                        marginBottom: "25px"
                    }}>
                        <h1 className='steps'>
                                <span className='isHover' style={{cursor: "pointer"}}>ШАГ 1: ОТПРАВЬТЕ ЗАЯВКУ НА АТТЕСТАЦИЮ</span>  
                        </h1>
                        <h5 className='step-info-1'>
                            Заполните заявку и наши <br/>
                            менеджеры свяжутся с вами <br/> для уточнения деталей, времени <br/> провидения аттестации и <br/> информации о плате.
                        </h5>
                </div>
                <div 
                    onMouseEnter={() => handleMouseEnter('item2')}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        maxWidth: "540px",
                        marginTop: "-2rem",
                        marginBottom: "25px"
                    }}>
                        <h1 className='steps'>
                                <span className='isHover' style={{cursor: "pointer"}}>ШАГ 2: ПРОЙДИТЕ ТЕСТИРОВАНИЕ</span>  
                        </h1>
                        <h5 className='step-info-2'>
                            Пройдите тестирование, чтобы подтвердить свою <br/>
                            квалификацию и пройдти на собеседование. <br/> 
                            Нужно ответить на 20 вопросов из 100, если Вы обучались  
                            онлайн или на 3 вопроса из 100, если очно.
                        </h5>
                </div>
                <div 
                    onMouseEnter={() => handleMouseEnter('item3')}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        maxWidth: "540px",
                        marginTop: "-2rem"
                    }}>
                        <h1 className='steps'>
                                <span className='isHover' style={{cursor: "pointer"}}>ШАГ 3: СОБЕСЕДОВАНИЕ С КОМИССИЕЙ</span>  
                        </h1>
                        <h5 className='step-info-3'>
                           Проведите собеседование с комиссией, где вы сможете
                           продемонстрировать свой знания, опыт и профессиональные 
                           навыки в области ЖКХ. Общайтесь с экспертами, ответьте на 
                           вопросы и подтвердите свою готовность стать
                           сертифицированным специалистом. Комиссия будет 
                           состоять из 3 человек и 2 наблюдателей из НПП РК
                           "Атамекен" и акимата.
                        </h5>
                </div>
                </div>
            </div>
  )
}

export default Hovered