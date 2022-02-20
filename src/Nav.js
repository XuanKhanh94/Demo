import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div id="list-menu">
      <nav className="nav-links">
        <ul className="menu-content">
          <li>
            <Link to="">Home</Link>
          </li>
          <li id="menu-vietnam">
            Music Viet Nam
            <ul className="dropdown-vietnam">
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
            </ul>
          </li>
          <li id="menu-aumy">
            Music Us-Uk
            <ul className="dropdown-aumy">
              <Link to="/doneforme">
                <li>Done for me</li>
              </Link>
              <Link to="/peaches">
                <li>Peaches</li>
              </Link>
            </ul>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/ungdung">Ứng Dụng</Link>
          </li>
          <input type="text" className="inputSearch" placeholder="Search ?" />
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
