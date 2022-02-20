import "./App.css";
import React, { useState } from "react";
function UngDung() {
  const [canh, setCanh] = useState(null);
  const [timeInput, settimeInput] = useState(null);
  const [thoiDiem, setThoiDiem] = useState(null)
  const [dienTich, setDienTich] = useState(false);
  const [chuVi, setChuVi] = useState(null);
  const [inputMang, setinputMang] = useState(null);
  const [inputSapXep, setinputSapXep] = useState(null);
  const [sapXepArray, setSapXepArray] = useState(null);
  const [inputA, setInputA] = useState(null);
  const [inputB, setInputB] = useState(null);
  const [inputC, setInputC] = useState(null);
  const [phuongTrinhBac2, setPhuongTrinhBac2] = useState(null);

  function tinhDienTich() {
    const a = canh * canh;
    setDienTich(a);

  }

  function tinhTime() {
    let ketQua;
    let ngay = new Date(timeInput);
    let ngay1 = ngay.getDate();
    let ngay2 = ngay.getMonth();
    let ngay3 = ngay.getFullYear();
    let date = new Date();
    let date1 = date.getDate();
    let date2 = date.getMonth();
    let date3 = date.getFullYear();
    if (ngay1 == date1 && ngay2 == date2 && ngay3 == date3) {
      date.setDate(date.getDate() + 3);
      date.setMonth(date.getMonth() + 2);
      date.setFullYear(date.getFullYear() + 1);
      ketQua = "Ngày nhập bằng ngày hiện tại" + " " + date;
    } else if (ngay < date) {
      date.setDate(date.getDate() - 2);
      ketQua = "Ngày nhập nhỏ hơn ngày hiện tại" + " " + date;
    } else if (ngay > date) {
      date.setDate(date.getDate() + 5);
      ketQua = "Ngày nhập lớn hơn ngày hiện tại" + " " + date;
    }
    setThoiDiem(ketQua)
  }
  function tangGiamMang() {
    let ketQuaMang;
    let input1 = inputMang;
    let input = input1.split(",").map(Number);
    // let input=[1,2,3,6,5,4,1,2,5,4,8]
    console.log(input);
    let output = [];
    let tangGiam = inputSapXep;
    //từ nhỏ đến lớn
    if (Array.isArray(input)) {
      if (tangGiam == 1) {
        for (let j = 0; j < input.length;) {
          let giaTriNhoNhat = input[0];
          let viTriNhoNhat = 0;
          for (let i = 1; i < input.length; i++) {
            let giaTriSoSanh = input[i];
            if (giaTriNhoNhat > giaTriSoSanh) {
              giaTriNhoNhat = giaTriSoSanh;
              viTriNhoNhat = i;
            }
          }
          input.splice(viTriNhoNhat, 1);
          output.push(giaTriNhoNhat);
        }
        ketQuaMang = "Từ nhỏ đến lớn" + "  " + output;
      }
      //từ lớn đến nhỏ
      if (tangGiam == 2) {
        for (let j = 0; j < input.length;) {
          let giaTriLonNhat = input[0];
          let viTriLonNhat = 0;
          for (let i = 1; i < input.length; i++) {
            let giaTriSoSanh = input[i];
            if (giaTriLonNhat < giaTriSoSanh) {
              giaTriLonNhat = giaTriSoSanh;
              viTriLonNhat = i;
            }
          }
          input.splice(viTriLonNhat, 1);
          output.push(giaTriLonNhat);
        }
        ketQuaMang = "Từ lớn đến nhỏ" + "  " + output;
      }
    } else {
      ketQuaMang = "Mảng nhập không đúng";
    }
    setSapXepArray(ketQuaMang)
  }
  function ptBac2() {
    let a, b, c, delta, x, x1, x2, ketQuaPhuongTrinh;
    a = inputA;
    b = inputB;
    c = inputC;
    delta = b * b - 4 * a * c;
    if (delta < 0) {
      console.log("pt vô nghiệm");
      ketQuaPhuongTrinh = "Phương trình vô nghiệm";
    } else if (delta == 0) {
      x = -b / (2 * a);
      console.log("pt có 1 nghiệm");
      ketQuaPhuongTrinh = "Phương trình có 1 nghiệm" + " " + x;
    } else {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
      console.log("pt có 2 nghiệm");
      ketQuaPhuongTrinh = "Phương trình có 2 nghiệm" + " " + "X1=" + " " + x1 + "  " + ";" + "X2=" + " " + x2;
    }
    setPhuongTrinhBac2(ketQuaPhuongTrinh)
  }
  // function getData(e) {
  //   setCanh(e.target.value);

  // }

  // function handleSort() {
  //   if (!sort) {
  //     alert("Chua nhao dk sort: 1 or 2");
  //     return;
  //   }
  //   if (!value) {
  //     alert("Chua nhao value sort");
  //     return;
  //   }
  //   let input = value.split(",").sort();

  //   if (sort === "1") {
  //     setValue(input.join(","));
  //     return;
  //   }
  //   setValue(input.reverse().join(","));
  // }
  return (
    <>
      <div className="hinhVuong">
        {<p>Diện tích hình vuông: {dienTich}</p>}
        {<p>Chu vi hình vuông: {chuVi}</p>}

        <input type="text" className="inputSearch" onChange={(e) => setCanh(e.target?.value)} />
        <button onClick={() => tinhDienTich()}>Diện tích </button>
        <button onClick={() => setChuVi(canh * 4)}>Chu Vi</button>
      </div>
      {/* tinhNgay */}
      <div className="tinhNgay">
        {<p> {thoiDiem}</p>}

        <input type="datetime-local" className="inputSearch" onChange={(e) => settimeInput(e.target?.value)} />
        <button onClick={() => tinhTime()}>time </button>
      </div>
      {/* sắp xếp mảng */}
      <div className="sapXepMang" style={{ margin: "10px" }}>
        <p>Sắp xếp mảng: {sapXepArray}</p>
        <input type="text" className="inputSearch" onChange={(e) => setinputMang(e.target?.value)} />
        <input type="text" className="inputSearch" onChange={(e) => setinputSapXep(e.target?.value)} />

        <button onClick={() => tangGiamMang()}>Sap Xep </button>
      </div>
      {/* tính phương trình bậc 2 */}
      <div className="ptBac2">
        {<p>{phuongTrinhBac2}</p>}

        <input type="text" className="inputSearch" onChange={(e) => setInputA(e.target?.value)} />
        <input type="text" className="inputSearch" onChange={(e) => setInputB(e.target?.value)} />
        <input type="text" className="inputSearch" onChange={(e) => setInputC(e.target?.value)} />
        <button onClick={() => ptBac2()}>Pt bac 2 </button>
      </div>
    </>
  );
}

export default UngDung;
