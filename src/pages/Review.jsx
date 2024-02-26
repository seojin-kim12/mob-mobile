import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
// 다른 페이지로 자연스럽게 넘어가기 위해 추가함
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'HBIOS-SYS';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/HBIOS-SYS.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'WandohopeR';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/WandohopeR.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  position: relative;
  text-align: center;
  background-size: cover;
  background-color: #180952;
  -ms-overflow-style: none;
  scrollbar-width: none;
  align-items: center;

  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  nav {
    z-index: 99;
    display: flixed;
    align-items: center;
    height: 105.2vh;
    background-color: rgba(0, 0, 0, 0.9);
    margin-left: 590px;
    margin-top: -730px;

    p {
      display: none;
      align-items: center;
      font-family: "HBIOS-SYS";
      color: #d2b9f8;
      font-size: 1.5em;
      margin-left: 30px;
      margin-top: 50px;
    }

    transition: 0.6s ease;
    &.active {
      margin-left: 190px;
      width: 200px;
      p {
        display: flex;
      }
    }
  }
`;

const BodyWrapper = styled.div`
  min-height: calc(100vh - 145px);
`;

const Title = styled.div`
  margin-top: 30px;
  color: #d2b9f8;
  font-family: "WandohopeR";
  font-size: 30px;
  font-weight: bold;
  z-index: 1;
`;

const Chatboxes = styled.div`
  margin-top: -515px;
  height: 480px;
  overflow-y: auto;
  overflow-x: hidden;
`;
const Chatbox = styled.div`
  #box {
    position: relative;
    width: 190px;
    height: auto;
    margin-left: 80px;
    margin-top: 0px;
    border: 0.5mm solid #ab8dd8;
    background-color: rgba(171, 141, 216, 0.3);
    font-family: "HBIOS-SYS";
    text-align: left;
    font-size: 13px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 5px;
    color: white;
    border-radius: 5px;
  }
  margin-left: -5px;
  margin-bottom: -40px;
`;

const ChatWrite = styled.div`
  position: fixed;
  z-index: 2;

  #content {
    margin-top: -55px;
    margin-left: 15px;
  }

  textarea {
    width: 240px;
    height: 25px;
    margin-left: 5px;
    margin-top: 50px;
    border: 0.5mm solid #ab8dd8;
    background-color: #8f67cb;
    font-family: "HBIOS-SYS";
    text-align: left;
    font-size: 13px;
    padding-top: 5px;
    color: white;
  }
`;

const Review = () => {
  const navigate = useNavigate();
  const target = useRef();

  const onClickBack = () => {
    navigate("/Submain");
  };

  const onClickSchedule = () => {
    navigate("/Schedule");
  };

  const onClickRequest = () => {
    navigate("/Request");
  };

  const onClickExperience = () => {
    navigate("/Experience");
  };

  const onClickRoadView = () => {
    navigate("/Road");
  };

  // 메뉴바 슬라이드
  const [menuOpen, setMenuOpen] = useState(false);

  //스크롤 애니메이션 추가하기 위해 넣음
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    // 맨 위로 이동하도록
    window.scrollTo(0, 0);
  }, []);

  // 글자 수 제한
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    if (e.target.value.length <= 22) {
      setInputText(e.target.value);
    }
  };

  // textarea 자동 높이 조절 부분(하지만 뒤로가기 눌렀을 때 textarea 높이가 줄어들도록은 구현 못 함)
  const handleKeyDown = (e) => {
    const adminText = target.current;

    // 엔터키를 누를때마다 줄바꿈 되도록 하는 코드
    if (adminText && e.key === "Enter") {
      e.preventDefault(); // Prevent default behavior (adding a new line)

      // 2줄 제한하는 코드
      const currentLines = adminText.value.split("\n").length;
      if (currentLines >= 2) {
        return;
      }

      const currentScrollHeight = adminText.scrollHeight;
      adminText.value = `${adminText.value}\n`;

      // 스크롤 높이가 변경되었을 때만 높이 조정
      if (adminText.scrollHeight !== currentScrollHeight) {
        adminText.style.height = `${adminText.scrollHeight}px`;
      }
    }
  };

  // 별 클래스
  class Star {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.size = 0;
      this.time = 0;
    }
    set() {
      this.x = Math.random() * 370; //가로영역
      this.y = Math.random() * 640; //세로 영역
      this.size = Math.random() * 20; // 별 크기
      this.time = Math.random() * 7;

      const background = document.getElementById("main");
      const starDiv = document.createElement("div");
      starDiv.className = "star"; // CSS 클래스 이름 설정

      starDiv.style.left = this.x + "px";
      starDiv.style.top = this.y + "px";
      starDiv.style.width = this.size + "px";
      starDiv.style.height = this.size + "px";

      background.appendChild(starDiv);
    }
  }

  // 별 애니메이션
  useEffect(() => {
    for (let i = 0; i < 15; i++) {
      // 별 개수 여기서 조정하면 돼요!!
      const newStar = new Star();
      newStar.set();
    }
  }, []);

  return (
    // 다른 페이지로 자연스럽게 넘어가기 위해 추가함
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GlobalStyle />
      <Container id="main">
        <BodyWrapper>
          <Title data-aos="flip-up">チャットしてください</Title>

          <img
            alt="채팅 전체 박스"
            src="/images/review_img/reviewbox_l.svg"
            style={{ width: "300px", marginTop: "20px", zIndex: "1" }}
          />
          <Chatboxes>
            <ChatWrite>
              <div id="content">
                <textarea
                  ref={target}
                  id="target"
                  placeholder="자유롭게 채팅해 주세요."
                  onKeyDown={handleKeyDown}
                />
                <img
                  id="chat_btn"
                  alt="채팅 버튼"
                  src="/images/review_img/chat_btn.svg"
                  style={{
                    position: "relative",
                    width: "25px",
                    marginLeft: "-33px",
                    top: "-5px",
                    cursor: "pointer",
                  }}
                  onClick={() => window.location.reload()}
                />
              </div>
            </ChatWrite>

            <Chatbox>
              <img
                alt="채팅 전체 박스"
                src="/images/cursor_img/cursor_pink.png"
                style={{
                  position: "relative",
                  width: "60px",
                  top: "40px",
                  left: "-100px",
                }}
              />
              <div id="box">하하하하하하하하하하하하ㅏ핳하하</div>
            </Chatbox>

            <Chatbox>
              <img
                alt="채팅 전체 박스"
                src="/images/cursor_img/cursor_pink.png"
                style={{
                  position: "relative",
                  width: "60px",
                  top: "40px",
                  left: "-100px",
                }}
              />
              <div id="box">하하하하하하하하하하하하ㅏ핳하하</div>
            </Chatbox>

            <Chatbox>
              <img
                alt="채팅 전체 박스"
                src="/images/cursor_img/cursor_pink.png"
                style={{
                  position: "relative",
                  width: "60px",
                  top: "40px",
                  left: "-100px",
                }}
              />
              <div id="box">하하하하하하하하하하하하ㅏ핳하하</div>
            </Chatbox>

            <Chatbox>
              <img
                alt="채팅 전체 박스"
                src="/images/cursor_img/cursor_pink.png"
                style={{
                  position: "relative",
                  width: "60px",
                  top: "40px",
                  left: "-100px",
                }}
              />
              <div id="box">하하하하하하하하하하하하ㅏ핳하하</div>
            </Chatbox>

            <Chatbox>
              <img
                alt="채팅 전체 박스"
                src="/images/cursor_img/cursor_pink.png"
                style={{
                  position: "relative",
                  width: "60px",
                  top: "40px",
                  left: "-100px",
                }}
              />
              <div id="box">하하하하하하하하하하하하ㅏ핳하하</div>
            </Chatbox>

            <Chatbox>
              <img
                alt="채팅 전체 박스"
                src="/images/cursor_img/cursor_pink.png"
                style={{
                  position: "relative",
                  width: "60px",
                  top: "40px",
                  left: "-100px",
                }}
              />
              <div id="box">하하하하하하하하하하하하ㅏ핳하하</div>
            </Chatbox>
            <Chatbox>
              <img
                alt="채팅 전체 박스"
                src="/images/cursor_img/cursor_pink.png"
                style={{
                  position: "relative",
                  width: "60px",
                  top: "40px",
                  left: "-100px",
                }}
              />
              <div id="box">하하하하하하하하하하하하ㅏ핳하하</div>
            </Chatbox>
            <Chatbox>
              <img
                alt="채팅 전체 박스"
                src="/images/cursor_img/cursor_pink.png"
                style={{
                  position: "relative",
                  width: "60px",
                  top: "40px",
                  left: "-100px",
                }}
              />
              <div id="box">하하하하하하하하하하하하ㅏ핳하하</div>
            </Chatbox>
            <Chatbox>
              <img
                alt="채팅 전체 박스"
                src="/images/cursor_img/cursor_pink.png"
                style={{
                  position: "relative",
                  width: "60px",
                  top: "40px",
                  left: "-100px",
                }}
              />
              <div id="box">하하하하하하하하하하하하ㅏ핳하하</div>
            </Chatbox>
            <Chatbox>
              <img
                alt="채팅 전체 박스"
                src="/images/cursor_img/cursor_pink.png"
                style={{
                  position: "relative",
                  width: "60px",
                  top: "40px",
                  left: "-100px",
                }}
              />
              <div id="box">하하하하하하하하하하하하ㅏ핳하하</div>
            </Chatbox>
          </Chatboxes>
        </BodyWrapper>
        <nav className={menuOpen ? "active" : ""} style={{ zIndex: 100 }}>
          <p style={{ marginTop: "240px" }} onClick={onClickBack}>
            Main
          </p>
          <p onClick={onClickRequest}>Request</p>
          <p onClick={onClickSchedule}>Poster</p>
          <p onClick={onClickExperience}>Experience</p>
        </nav>
        <img
          alt="바"
          src="/images/bar-purple.svg"
          style={{
            width: "30px",
            position: "fixed",
            marginTop: "20px",
            marginLeft: "340px",
            zIndex: 100,
          }}
          onClick={() => {
            setMenuOpen((menuOpen) => !menuOpen);
          }}
        />
      </Container>
    </motion.div>
  );
};
export default Review;
