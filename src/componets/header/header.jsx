
import Logo from "../../assets/img/logo1.png"

import { navData } from "../data"

function Header() {
    return (

        <header>
            <div className="container">
                <div className="content">
                    <div className="content-logo">
                        <a href="#!" className="logo"><img src={Logo} width="86px" height="85" alt="Logo icon" /></a>
                        <a href="#!"><h1 className="logo-text">Devionyx</h1></a>
                    </div>
                    <div className="header-content_link">
                        {navData.map((el) => (
                            <a key={el.id} className="header-content_links" href={el.path}>{el.text}</a>
                        ))}
                    </div>

                </div>
                <div className="diolog">
                    <h1 className="diolog-title">Assalomu alaykum</h1>
                    <p className="diolog-text">Men — Abdullayev Kamronbek. 2024-yildan boshlab IT sohasiga qadam qo‘yganman va hozirda
                        IT Park’da o‘qish orqali bilim va ko‘nikmalarimni chuqurlashtirib bormoqdaman. Hozirgi kunda dasturlash
                        yo‘nalishida mutaxassis sifatida faoliyat yuritaman va shu kungacha 6 ta veb-sahifa yaratganman. Shuningdek,
                        yaqinda “Devionyx” nomli blogimni yo‘lga qo‘ydim. Ushbu blog orqali IT sohasida to‘plagan bilimlarimni boshqalar
                        bilan bo‘lishish, foydali ma’lumotlar yetkazish va odamlarning texnologiyaga oid kundalik muammolarini yengillashtirishni
                        maqsad qilganman. Agar bu matnni boshqa tilga tarjima qilish yoki blog sahifangizga moslab qisqaroq versiyasi kerak bo‘lsa,
                        bemalol ayting!</p>
                </div>
                <div className="header-btn_btn">
                     <a href="https://t.me/Devionyx" className="btn-a"><button  className="header-btn" type="button">A'zo Bo'lish</button></a>
                </div>
               
            </div>
        </header>
    )
}
export default Header;