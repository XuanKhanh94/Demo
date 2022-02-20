import { Link } from "react-router-dom";
import "./style-music.css";
function ConMuaNgangQua() {
  return (
    <div className="contentMusic">
      <div className="contentMusicLeft">
        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/17R7_nZls0g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>{" "}
      </div>
      <div className="contentMusicRight">
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

export default ConMuaNgangQua;
