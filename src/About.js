import "./App.css";

function About() {
  return (
    <div className="contentHome">
      <div className="left-ContentHome">
        <h4>Thông tin về tôi</h4>
        <hr />
        <p>
          Tôi tên: Phan Xuân Khánh <br /> Sinh nhật: 01/01/1994
          <br /> Giới tính: Nam
        </p>
        <hr />
        <p>Tôi là 1 người yêu âm nhạc, đối với mọi người điều thích nhất là được ngủ nhưng tôi thì ngược lại điều tôi thích nhất là được nghe những bản nhạc phù hợp với tâm trạng và được chìm đắm vào những ca từ nhẹ nhàng nhưng tác động cảm xúc. Mưa làm mát tâm hồn còn âm nhạc là giãi bày cảm xúc !!!!</p>
        <hr />
        <iframe src="https://open.spotify.com/embed/playlist/2NdGBpIEht3OjaRwdNUwjt" width="100%" height="260px" frameBorder="0" allow="encrypted-media"></iframe>
      </div>
      <div className="right-ContentHome">
        <h4>Những dòng nhạc yêu thích:</h4>
        <div>
          <p>
            Nhạc EDM <br />
            <meter min="0" max="100" value="85"></meter>
          </p>
          <p>
            Nhạc Trẻ
            <br />
            <meter min="0" max="100" value="95"></meter>
          </p>
          <p>
            Nhạc Dance
            <br />
            <meter min="0" max="100" value="75"></meter>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
