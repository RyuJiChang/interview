import React, { useState } from "react";
import styled from "styled-components";
function Read({ goHome, data }) {
  const [idx, setIdx] = useState(0);

  function moveIdx(e) {
    if (e.target.value === "0") {
      if (idx !== 0) {
        setIdx(idx - 1);
      }
      console.log(idx);
    }
    if (e.target.value === "1") {
      if (idx !== data.length - 1) {
        setIdx(idx + 1);
      }
      console.log(idx);
    }
  }
  return (
    <Main>
      <div className="header">
        <button>R</button>
        <input className="inputTop" value={`${idx + 1}/${data.length}`}></input>
        <button onClick={goHome}>X</button>
      </div>
      <div className="box">
        <button value={0} onClick={moveIdx}>
          ◀
        </button>
        <input className="inputQuestion" value={data[idx].text}></input>
        <button value={1} onClick={moveIdx}>
          ▶
        </button>
      </div>
      <div className="box">
        <input className="inputMemo" value={data[idx].memo}></input>
      </div>
    </Main>
  );
}

export const Main = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  border-radius: 40px;
  button {
    margin: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 20px;
    border-color: #6aafe6;
    background-color: #6aafe6;
    color: #d4dfe6;
  }
  .header {
    display: flex;
    justify-content: space-between;
    div {
      margin-top: 25px;
    }
  }
  .inputQuestion {
    width: 300px;
    height: 150px;
    border-radius: 20px;
  }
  .inputMemo {
    width: 300px;
    height: 200px;
    border-radius: 20px;
  }
  .inputTop {
    border: 0cm;
    outline: none;
    width: 30px;
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
`;

export default Read;
