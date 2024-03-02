import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
// 다른 페이지로 자연스럽게 넘어가기 위해 추가함
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'TTHakgyoansimTtwimteulR';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_keris@1.0/TTHakgyoansimTtwimteulR.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'ClimateCrisisKR-1979';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/ClimateCrisisKR-1979.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'YiSunShinRegular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YiSunShinRegular.woff') format('woff');
  font-weight: normal; 
  font-style: normal; 
}

@font-face {
  font-family: 'HBIOS-SYS';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/HBIOS-SYS.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'BookkMyungjo-Bd';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/BookkMyungjo-Bd.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
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
    height: 98vh;
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
  #title {
    position: relative;
    font-family: "TTHakgyoansimTtwimteulR";
    color: #ffd700;
    font-size: 35px;
    margin-top: 30px;
    margin-left: -80px;
    text-shadow: 1.5px 1.5px 0 black;
    opacity: 0.8;
  }

  #subtitle {
    position: relative;
    font-family: "TTHakgyoansimTtwimteulR";
    color: #ffd700;
    font-size: 15px;
    margin-top: 0px;
    margin-left: -145px;
    text-shadow: 1.5px 1.5px 0 black;
    opacity: 0.8;
  }

  #star {
    position: relative;
    top: 50px;
    p {
      font-family: "BookkMyungjo-Bd";
      color: #cc0000;
      font-size: 30px;
      margin-left: 270px;
      margin-top: -95px;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }
`;

const Schedule = () => {
  const navigate = useNavigate();
  const target = useRef();

  const onClickBack = () => {
    navigate("/Submain");
  };

  const onClickChat = () => {
    navigate("/Review");
  };

  const onClickRequest = () => {
    navigate("/Request");
  };

  const onClickExperience = () => {
    navigate("/Experience");
  };

  // 메뉴바 슬라이드
  const [menuOpen, setMenuOpen] = useState(false);

  //스크롤 애니메이션 추가하기 위해 넣음
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });

    // 맨 위로 이동하도록
    window.scrollTo(0, 0);
  }, []);

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
      this.y = Math.random() * 660; //세로 영역
      this.size = Math.random() * 20; // 별 크기
      this.time = Math.random() * 7;

      const background = document.getElementById("main");
      const starDiv = document.createElement("div");
      starDiv.className = "star2"; // CSS 클래스 이름 설정

      starDiv.style.left = this.x + "px";
      starDiv.style.top = this.y + "px";
      starDiv.style.width = this.size + "px";
      starDiv.style.height = this.size + "px";

      background.appendChild(starDiv);
    }
  }

  // 별 애니메이션
  useEffect(() => {
    for (let i = 0; i < 35; i++) {
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
          <div id="title" data-aos="fade-right">
            영능력계의 샛별!!!
          </div>
          <div id="subtitle" data-aos="fade-left">
            알려지지 않은 기적의 영능력자~
          </div>
          <div id="star">
            <img
              alt="말풍선"
              src="/images/poster_img/star.svg"
              style={{ marginLeft: "230px", marginTop: "-63px" }}
              data-aos="fade-up"
            />
            <p data-aos="fade-up">초 대 박</p>
          </div>
          <div id="planet">
            <img
              alt="행성"
              src="/images/poster_img/planet.svg"
              style={{ zIndex: "2", marginTop: "-50px" }}
            />
          </div>
          <div id="picture">
            <img
              alt="자기 사진"
              src="/images/poster_img/picture.svg"
              style={{
                zIndex: "3",
                position: "relative",
                marginTop: "-520px",
                top: "-40px",
                marginLeft: "-170px",
                width: "250px",
              }}
              data-aos="fade-right"
            />
          </div>
          <div id="road">
            <img
              alt="길"
              src="/images/poster_img/road.png"
              style={{
                zIndex: "3",
                position: "relative",
                marginTop: "-250px",
                top: "-150px",
                marginLeft: "200px",
                width: "150px",
                opacity: "0.8",
              }}
              data-aos="fade-up"
            />
          </div>
          <div id="box">
            <img
              alt="box"
              src="/images/poster_img/box.svg"
              style={{
                position: "relative",
                zIndex: "3",
                position: "relative",
                marginTop: "-130px",
                top: "-10px",
                marginBottom: "20px",
                width: "380px",
              }}
              data-aos="fade-left"
            />
            <p
              style={{
                position: "relative",
                zIndex: "10",
                fontFamily: "YiSunShinRegular",
                color: "#8B0000",
                fontWeight: "bold",
                marginTop: "-130px",

                fontSize: "12px",
              }}
              data-aos="fade-up"
            >
              ⌈세상에는 아직 과학으로는 해명할 수 없는 괴기현상이 분명히
              존재한다!⌋
            </p>
            <p
              style={{
                position: "relative",
                zIndex: "10",
                fontFamily: "YiSunShinRegular",

                fontWeight: "bold",
                marginTop: "-8px",
                fontSize: "12px",
              }}
              data-aos="fade-up"
            >
              어쩔 수 없이 그저 공포의 어둠에 빠져 버린 당신!
              <br />
              그런 혼돈 속에 한 줄기 빛을 비출 수 있도록,
              <br />
              날마다 싸움을 계속하는 자들이 있다는 것을 당신은 알고 있을까..?
              <br />
              고민 상담부터 악령 퇴치까지 모든!
              <br />
              이곳, 영 기타 등등 상담소에서 해결해 드리겠습니다.
            </p>
          </div>
          <div id="price">
            <img
              alt="가격표"
              src="/images/submain_img/cost.gif"
              style={{
                zIndex: "3",
                position: "relative",
                marginTop: "-10px",
                width: "390px",
              }}
              data-aos="fade-up"
            />
          </div>
          <div id="ekubo">
            <img
              alt="에쿠보"
              src="/images/cursor_img/cursor_green.png"
              style={{
                zIndex: "3",
                position: "relative",
                marginTop: "-150px",
                top: "-40px",
                marginLeft: "290px",
                width: "90px",
              }}
              data-aos="fade-right"
            />
            <img
              alt="에쿠보"
              src="/images/cursor_img/cursor_green.png"
              style={{
                zIndex: "3",
                position: "relative",
                marginTop: "-300px",
                top: "-500px",
                marginLeft: "-20px",
                width: "70px",
              }}
              data-aos="fade-up"
            />
          </div>
        </BodyWrapper>
        <nav className={menuOpen ? "active" : ""} style={{ zIndex: 100 }}>
          <p style={{ marginTop: "180px" }} onClick={onClickBack}>
            Main
          </p>
          <p onClick={onClickRequest}>Request</p>
          <p onClick={onClickChat}>Chatting</p>
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
export default Schedule;
