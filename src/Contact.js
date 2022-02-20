import "./App.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="contentHome">
      <div className="left-ContentHome">
        <a href="https://www.facebook.com/xuankhanh23111994/">Facebook</a>
        <a href="https://zalo.me/0988439636">Zalo</a>
        <a href="tel:0916166557">0916 166 557</a>
      </div>
      <div className="right-ContentHome">
        <h3>Bảng xếp hạng</h3>
        <Link to="/conmuangangqua">
          <li>Cơn mưa ngang qua</li>
        </Link>
        <Link to="/cafekhongduong">
          <li>Cafe không đường</li>
        </Link>
        <Link to="/theysaid">
          <li>They said</li>
        </Link>
        <Link to="/sauhonggai">
          <li>Sầu hồng gai</li>
        </Link>
        <Link to="/dungtinher">
          <li>Đừng tin her</li>
        </Link>
        <Link to="/cogiangtinh">
          <li>Cố giang tình</li>
        </Link>
        <Link to="/doneforme">
          <li>Done for me</li>
        </Link>
        <Link to="/peaches">
          <li>Peaches</li>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
