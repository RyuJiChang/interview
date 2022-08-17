import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Read from "./Read";
function App() {
  const [isRead, setIsRead] = useState(false);
  const [data, setData] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3001/question")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {});
  }, []);

  function readHandler(e) {
    if (
      e.target.textContent === "즐겨찾기" ||
      e.target.textContent === "전체보기"
    ) {
      setIsRead(true);
    } else {
      setIsRead(false);
    }
    console.log(isRead);
  }

  return (
    <Body>
      <main>
        {isRead === false ? (
          <div className="main_body">
            <button className="btn" onClick={readHandler}>
              전체보기
            </button>
            <button className="btn" onClick={readHandler}>
              즐겨찾기
            </button>
            <button className="btn">추가하기(모달)</button>
          </div>
        ) : (
          <Read data={data} goHome={readHandler} />
        )}
      </main>
    </Body>
  );
}

export default App;

export const Body = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);

  .main_body {
    width: 400px;
    height: 600px;
    /* background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); */
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 40px;
  }
  .btn {
    width: 300px;
    height: 100px;
    border: 1px solid skyblue;
    background-color: rgba(0, 0, 0, 0);
    color: skyblue;
    padding: 5px;
    border-radius: 40px;
    font-size: 30px;
  }
  button:hover {
    color: white;
    background-color: skyblue;
  }
`;
