import Courser from "../../assets/img/courser.png"
import Design from "../../assets/img/design.png"
import Telegram from "../../assets/img/tg-icon.png"
import GitHub from "../../assets/img/GitHub.png"
import Istagram from "../../assets/img/ista-icon.png"
import OnlineBuy from "../../assets/img/BUy.png"
function Body() {
    return(
        <body>
            <div className="container">
                <main>
                    <section className="achievements">
                        <div className="card">
                            <div className="courser-card">
                                <img src={Courser} width="700px" height="493px" alt="" />
                                <div className="courder-info">
                                    <h2 className="courser-info_text">12-May , 2025 sanasida Meta va Coursera hamkorligida taqdim etilgan 9 ta kursdan iborat "Meta Front-End Developer"
                                        professional dasturini muvaffaqiyatli yakunlaganman.</h2>
                                </div>
                            </div>
                            <div className="design-card">
                                <div className="courder-info">
                                    <h2 className="courser-info_text">Sizlar bilan kichik bir yutug‘imni ko’rsatmoqchiman — "WEB DESIGN" kursini 75 ball bilan muvaffaqiyatli yakunlaganman! </h2>
                                </div>
                                <img src={Design} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="shop-info">
                        <div className="shop-info_title">
                            <h1 className=""> Men-tajribali dasturchi bo'lib, zamonaviy, tezkor va xavfsiz web-saytlar yaratish bilan shug‘ullanaman. Agar sizga:</h1>
                        </div>
                        <div className="shop-info_alls">
                            <span className="shop-spam">    </span>
                            <div className="shop-info_alls-text">
                                <h2 className="shop-info_alls-texts">Yuzaga chiroyli va mobil qurilmalarga moslashtirilgan Front-end dizayn.  Kuchli, ishonchli va tez ishlaydigan Back-end tizimi.
                                    Admin panel, foydalanuvchi ro‘yxatga olish to‘lov integratsiyasi kabi murakkab funksiyalar.WordPress asosidagi blog,
                                     portfel yoki biznes sayti kerak bo‘lsa — xizmatim siz uchun!
                                     </h2>
                            </div>
                        </div>
                    </section>
                    <section className="footer">
                        <div className="footer-links">
                            <div className="footer-card">
                                <img src={OnlineBuy} className="footer-card_img" alt="" />
                                <h2 className="footer-card_title">
                                Men bilan ishlagan mijozlar sifat, tezlik va aloqa madaniyatidan mamnun qolishadi. Har bir loyiha menga muhim — sizning talablaringizga mos yechimlarni taklif qilaman.
                                </h2>
                            </div>
                            <div className="footer-title">
                                <h1 className="footer-titile_text">
                                💼 Proyektga buyurtma berish yoki maslahat olish uchun quyidagi havola orqali bog‘laning:
                                </h1>
                            </div>
                            <div className="footer-btn">
                                <a href="https://t.me/Devionyx"><button className="Telegram-btn" type="button"> Telegram</button></a>
                                <a href="https://github.com/fenux02"><button className="GitHub-btn" type="button">  Git-Hub</button></a>
                                <a href="https://t.me/Abdllyv_dev"><button className="Istagram-btn" type="button">+998 91 091 77 25</button></a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </body>
    )
}
export default Body;