import React, { useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import "./Star.css";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'YiSunShinRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YiSunShinRegular.woff') format('woff');
    font-weight: normal; 
    font-style: normal; 
  }

  @font-face {
    font-family: 'DungGeunMo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'RixInooAriDuriR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/RixInooAriDuriR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
      
  @font-face {
    font-family: 'LAB디지털';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/LAB디지털.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

const Container = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  position: relative;
  text-align: center;
  background-image: url("/images/main_img/main_bg.png");
  background-size: cover;
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
`;

const BodyWrapper = styled.div`
  min-height: calc(100vh - 145px);
`;

const Body = styled.div`
  position: relative; /* 부모 요소로부터 상대적인 위치로 설정 */
  z-index: 1; /* 배경 이미지 위로 올리기 위한 z-index 설정 */
  /*  그 유명한 요괴 대왕을 쓰러뜨린!! 21세기 샛별, 영능력자 부분 */
  #aa {
    margin-top: 30px;
    font-family: "DungGeunMo";
    font-size: 30px;
    margin-top: 20px;
  }
  #aa2 {
    margin-top: 15px;
    font-family: "DungGeunMo";
    font-size: 30px;
  }
  /* 요괴 대왕 부분 */
  span {
    font-size: 75px;
  }
  /* 당신은 몇번째 손님입니다 부분 */
  #bb {
    font-family: "DungGeunMo";
    font-size: 15px;
    margin-top: -30px;
  }

  #name {
    margin-top: 5px;
    padding-top: 15px;
    padding-bottom: -5px;
  }
  /*  홈페이지에 오신걸 환영합니다!! 부분 */
  h3 {
    font-size: 27px;
    color: #00ffff;
    text-shadow: 1px 1px 1px #000;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  a {
    text-decoration-line: none;
    color: #adff2f;
    text-shadow: 1px 1px 1px #000;
    vertical-align: top;
  }

  .enter img {
    transition: all 0.2s linear;
  }

  .enter:hover img {
    transform: scale(1.2);
  }

  .starr img {
    transition: transform 1s;
  }

  .starr:hover img {
    transform: rotate(360deg);
  }

  .digit_bg {
    position: relative;
    padding-top: -50px;
  }

  .digit {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "LAB디지털";
    font-size: 20px;
    font-weight: bold;
    color: #00ff7f;
    margin-top: 18px;
    text-align: right;
  }
`;

// 별 클래스
class Star {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 0;
    this.time = 0;
  }
  set() {
    this.x = Math.random() * 300; //가로영역
    this.y = Math.random() * 600; //세로 영역
    this.size = Math.random() * 70; // 별 크기
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

const Main = () => {
  const navigate = useNavigate();

  const onClickSubmain = () => {
    navigate("/Submain");
  };

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
          <Body>
            <div align="center">
              <div>
                <div id="title" style={{ marginTop: "60px" }}>
                  <span className="starr">
                    <img
                      alt="사진"
                      src="/images/main_img/red_star.gif"
                      style={{
                        position: "relative",
                        width: "50px",
                        height: "50px",
                        marginBottom: "23px",
                      }}
                    />
                  </span>
                  <span className="starr">
                    <img
                      alt="사진"
                      src="/images/main_img/yellow_star.gif"
                      style={{
                        position: "relative",
                        width: "50px",
                        height: "50px",
                        marginBottom: "23px",
                      }}
                    />
                  </span>

                  <img
                    alt="사진"
                    src="/images/main_img/title_r.png"
                    style={{
                      position: "relative",
                      width: "190px",
                      height: "90px",
                      paddingTop: "-20px;",
                    }}
                  />
                  <span className="starr">
                    <img
                      alt="사진"
                      src="/images/main_img/mint_star.gif"
                      style={{
                        position: "relative",
                        width: "50px",
                        marginBottom: "23px",
                      }}
                    />
                  </span>
                  <span className="starr">
                    <img
                      alt="사진"
                      src="/images/main_img/green_star.gif"
                      style={{
                        position: "relative",
                        width: "50px",
                        height: "50px",
                        marginBottom: "23px",
                      }}
                    />
                  </span>
                </div>

                <div id="aa">
                  그 유명한{" "}
                  <span
                    style={{
                      color: "red",
                      textDecoration: "underline",
                      fontSize: "1em",
                    }}
                  >
                    요괴대왕
                  </span>
                  을<br /> 쓰러뜨린!!
                </div>
                <div id="aa2">
                  21세기 샛별·영능력자
                  <br />
                </div>

                <div id="name">
                  <img
                    alt="사진"
                    src="/images/main_img/name_r.png"
                    style={{ width: "200px" }}
                  />
                  <span
                    style={{
                      fontFamily: "DungGeunMo",
                      fontSize: "40px",
                      marginLeft: "5px",
                    }}
                  >
                    의
                  </span>
                </div>

                <h3 style={{ fontFamily: "YiSunShinRegular" }}>
                  홈페이지에 오신 걸
                  <div style={{ paddingTop: "10px" }}>환영합니다!!</div>
                </h3>

                <div style={{ marginTop: "-13px" }}>
                  <div id="enter">
                    <img
                      alt="사진"
                      src="/images/main_img/left.gif"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginTop: "-5px",
                        marginRight: "-15px",
                        marginBottom: "-4px",
                      }}
                    />

                    <span className="enter">
                      <img
                        alt="사진"
                        src="/images/main_img/enter.png"
                        style={{
                          width: "140px",
                          position: "relative",
                          paddingLeft: "20px",
                        }}
                        onClick={onClickSubmain}
                      />
                    </span>

                    <img
                      alt="사진"
                      src="/images/main_img/right.gif"
                      style={{
                        width: "100px",
                        height: "50px",
                        paddingLeft: "7px",
                        marginBottom: "-4px",
                      }}
                    />
                  </div>
                </div>

                {/* 들어온 숫자 세는 코드 */}
                <br />
                <div id="bb">
                  당신은{" "}
                  <span className="digit_bg">
                    <img
                      src="/images/main_img/count.png"
                      alt="사진"
                      style={{
                        width: "200px",
                        height: "40px",
                        verticalAlign: "bottom",
                      }}
                    />
                    <span className="digit">000000000000015</span>
                  </span>{" "}
                  번째 손님입니다.
                </div>
              </div>
            </div>
          </Body>
        </BodyWrapper>
      </Container>
    </motion.div>
  );
};

export default Main;
