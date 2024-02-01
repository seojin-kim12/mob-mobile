import React, { useEffect, useState } from "react";
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
    height: 105.4vh;
    background-color: rgba(0, 0, 0, 0.9);
    margin-left: 590px;
    margin-top: -720px;

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

const Body = styled.div``;

const Title = styled.div`
  margin-top: 50px;
  color: #d2b9f8;
  font-family: "WandohopeR";
  font-size: 30px;
  font-weight: bold;
`;

const Review = () => {
  const navigate = useNavigate();

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
    if (e.target.value.length <= 10) {
      setInputText(e.target.value);
    }
  };

  return (
    // 다른 페이지로 자연스럽게 넘어가기 위해 추가함
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GlobalStyle />
      <Container>
        <BodyWrapper>
          <Body>
            <Title data-aos="flip-up">チャットしてください</Title>
          </Body>
        </BodyWrapper>
        <nav className={menuOpen ? "active" : ""} style={{ zIndex: 100 }}>
          <p style={{ marginTop: "230px" }} onClick={onClickBack}>
            Main
          </p>
          <p onClick={onClickSchedule}>Schedule</p>
          <p onClick={onClickRequest}>Request</p>
          <p onClick={onClickExperience}>Experience</p>
          <p onClick={onClickRoadView}>RoadView</p>
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
