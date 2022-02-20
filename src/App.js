import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import CafeKhongDuong from "./Nhac-Viet/Cafe-Khong-Duong";
import CoGiangTinh from "./Nhac-Viet/Co-Giang-Tinh";
import ConMuaNgangQua from "./Nhac-Viet/Conmuangangqua";
import DungTinHer from "./Nhac-Viet/Dung-Tin-Her";
import SauHongGai from "./Nhac-Viet/Sau-Hong_gai";
import TheySaid from "./Nhac-Viet/They-Said";
import DoneForMe from "./Nhac-Usuk/Done-for-me";
import Peaches from "./Nhac-Usuk/Peaches";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import UngDung from "./UngDung";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={homePage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/ungdung" component={UngDung} />
          <Route path="/conmuangangqua" component={ConMuaNgangQua} />
          <Route path="/cogiangtinh" component={CoGiangTinh} />
          <Route path="/cafekhongduong" component={CafeKhongDuong} />
          <Route path="/theysaid" component={TheySaid} />
          <Route path="/dungtinher" component={DungTinHer} />
          <Route path="/sauhonggai" component={SauHongGai} />
          <Route path="/doneforme" component={DoneForMe} />
          <Route path="/peaches" component={Peaches} />
        </Switch>
      </div>
    </Router>
  );
}
const homePage = () => (
  <>
    <div className="contentHome">
      <div className="left-ContentHome">
        <h2>Những câu nói yêu thích</h2>
        <p>1.Có gì cũng được trừ có bệnh, không có gì cũng được trừ không có tiền, thiếu gì cũng được trừ thiếu sức khỏe. Sức khỏe không phải là tất cả nhưng không có sức khỏe sẽ chẳng có thứ gì!</p>
        <p>2.Có bốn thứ cần có: Bất luận bạn mạnh yếu ra sao, nhất định cần phải có người yêu mình thực sự, có bạn bè tri kỷ, có sự nghiệp phát triển từng ngày và có một mái nhà ấm áp, tràn ngập yêu thương.</p>
        <p> 3.Có 6 thứ không nên: Không nên đói mới ăn, không nên khát mới uống, không nên buồn ngủ mới đi ngủ, không nên mệt mới nghỉ, không nên bệnh mới đi khám, không nên để già rồi mới hối hận!</p>
        <p>4.Trong tình yêu không ai là có lỗi, mà chỉ có người không biết cách trân quý một người mà thôi.</p>
        <p>5.Đừng nên hỏi tại sao bạn sống. Mà nên hỏi ta phải sống thế nào mới hạnh phúc. Đừng cố tu để thoát khổ, mà hãy tu học để làm mình ngày càng hạnh phúc hơn.</p>
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
  </>
);
export default App;
