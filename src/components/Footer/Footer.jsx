import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Logo from '../../assets/logo.png'
import Global from '../../assets/global.png'
import DownArrow from '../../assets/down-arrow-of-angle.png'
import { useTranslation } from "react-i18next";
import './Footer.css'

const Footer = () => {

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);
    const years = ["Қазақша", "Русский"]; 
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleYearSelect = (year) => {
      setSelectedYear(year);
      setIsOpen(false);
    }


  return (
 
    <footer className='footer-full' style={{ width: "100%", height: "200px"}}>
        <div className='container' style={{backgroundColor: "#fff"}}>
          <div className='footer-layout'>
            <div className='footer-logo'>
              <Link to="/">
                <img className='footer__logo' src={Logo} alt="logo" />
              </Link>
              <p style={{marginBottom: "18px", fontWeight: "600", color: "#797979", marginLeft: "0"}}>© 2023.ТОО "I SHANYRAQ"</p>
            </div>
            <div className='footer-menu' style={{display: "flex", alignItems: "start", marginTop: "-5px",  marginBottom: "3rem"}}>
            <div style={{display: "grid",  marginLeft: "7rem", cursor: "pointer", marginTop: "1.5rem"}}>
              <p className='conditions' style={{marginBottom: "1.5rem", fontWeight: "600"}}>Условия</p>
                <h6 style={{marginBottom: "0.5rem"}}>Договор-оферта</h6>
                <h6 style={{marginBottom: "0.5rem"}}>Политика конфиденциальности</h6>
                <h6 style={{marginBottom: "0.5rem"}}>Условия использования</h6>
            </div>
            <div style={{display: "grid",  marginLeft: "5rem", cursor: 'pointer', marginTop: "1.5rem"}}>
              <p className='conditions'  style={{marginBottom: "1.5rem", fontWeight: "600"}}>Контакты</p>
              <h6 style={{marginBottom: "0.5rem"}}>Помощь</h6>
              <h6 style={{marginBottom: "0.5rem"}}>Контакты</h6>
              <h6 style={{marginBottom: "0.5rem"}}>Вакансии</h6>
            </div>
            </div>
              <div className='footer-language'>
                <img src={Global} alt='language'
                style={{width: "22px", height: "22px", marginRight: "15px"}} />
                <button onClick={handleToggle}
                      style={{
                          display: "flex",
                          marginLeft: "-14px",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          width: "110px",
                          height: "36px",
                          fontSize: "16.67px",
                          fontWeight: "600"
                        }}>
                                {selectedYear ? selectedYear : 'Русский'}
                                <img src={DownArrow} style={{width: "12px"}} alt='down-arrow' />
                            </button>
                {isOpen && (
                        <div className='dropHover'
                            style={{
                                position: "absolute",
                                padding: "12px",
                                borderRadius: "7px",
                                textAlign: "center",
                                width: "106px",
                                marginLeft: "35px",
                                height: "70px",
                                backgroundColor: "#fff",
                                boxShadow: "0px 0px 1px 1px rgba(169, 169, 169, 0.5)",
                                marginTop: "100px",
                                cursor: "pointer"
                            }}>
                            {years.map((year) => (
                        <div
                            key={year}
                            onClick={() => handleYearSelect(year)}
                            className='selectDIV'
                            style={{
                                fontSize: "16.67px",
                                padding: "0 0 2px",
                                marginBottom: "5px"
                            }}>
                            {year}
                        </div>  
                        ))}
                        </div>
                        )}
              </div>
          </div>
        </div>
    </footer>

  )
}

export default Footer