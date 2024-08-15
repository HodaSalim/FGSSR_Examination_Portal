import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

export function Footer() {
  const iconsStyle = { color: "white", fontSize: "1.5em" };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>كلية الدراسات العليا للبحوث الإحصائية</h4>
          <p>جامعة القاهرة</p>
          <p>العنوان: شارع الجامعة، الجيزة، مصر</p>
          <p>الهاتف: +20 2 123456789</p>
          <p>البريد الإلكتروني: info@stats.cu.edu.eg</p>
        </div>

        <div className="footer-right">
          <h4>تابعونا</h4>
          <ul className="social-links">
            <li>
              <a href="#">
                <FaFacebook style={iconsStyle} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaXTwitter style={iconsStyle} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram style={iconsStyle} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn style={iconsStyle} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2024 كلية الدراسات العليا للبحوث الإحصائية، جامعة القاهرة. جميع
          الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
