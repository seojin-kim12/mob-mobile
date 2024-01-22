import React, { useState, useRef, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components"; // 이 부분에서 createGlobalStyle만 import하도록 수정
import { useNavigate } from "react-router-dom";
// 다른 페이지로 자연스럽게 넘어가기 위해 추가함
import { motion } from "framer-motion";
// 스크롤 애니메이션을 넣기 위해 import함
// yarn add aos 설치하기
import AOS from "aos";
import "aos/dist/aos.css";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HBIOS-SYS';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/HBIOS-SYS.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 130vh;
  position: relative;
  text-align: center;
  background-color: black;
  background-size: cover;
  -ms-overflow-style: none;
  scrollbar-width: none;
  align-items: center;

  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    width: 0; /* 스크롤바 너비를 0으로 설정하여 숨김 */
  }
`;

const BodyWrapper = styled.div`
  min-height: calc(100vh - 145px);
`;

const Body = styled.div`
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  .arrow {
    position: relative;
    animation: fadeInRight 1s;
  }
  .price {
    position: relative;
    animation: fadeInRight 3s;
  }
`;

const Button3 = styled.div`
  font-family: "HBIOS-SYS";
  font-size: 30px;
  text-decoration-line: none;
  color: white;
  text-shadow: 3px 3px 3px #000;
  vertical-align: top;
  margin-top: 35px;
`;

const Submain = () => {
  const navigate = useNavigate();

  const onClickRequest = () => {
    navigate("/Request");
  };

  const onClickSchedule = () => {
    navigate("/Schedule");
  };

  const onClickReview = () => {
    navigate("/Review");
  };

  const onClickExperience = () => {
    navigate("/Experience");
  };

  const onClickLoad = () => {
    navigate("/Load");
  };

  const onClickBack = () => {
    navigate("/Main");
  };

  //스크롤 애니메이션 추가하기 위해 넣음
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

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
            <div
              id="title"
              style={{
                marginTop: "-110px",
                marginLeft: "40px",
                zIndex: "1",
                position: "fixed",
              }}
            >
              <img
                alt="사진"
                src="/images/submain_img/title.png"
                style={{ width: "300px" }}
                data-aos="flip-up"
              />
            </div>

            <div
              id="ekubo1"
              style={{
                marginTop: "50px",
                zIndex: "1",
                position: "fixed",
              }}
            >
              <img
                alt="사진"
                src="/images/submain_img/ekubo1.gif"
                style={{ width: "50px" }}
                data-aos="fade-right"
              />
            </div>

            <div
              id="ekubo2"
              style={{
                marginTop: "350px",
                marginLeft: "340px",
                zIndex: "1",
                position: "fixed",
              }}
            >
              <img
                alt="사진"
                src="/images/submain_img/ekubo2.gif"
                style={{ width: "50px" }}
                data-aos="fade-left"
              />
            </div>

            <div id="first-line" style={{ marginTop: "120px" }}>
              <img
                alt="소개"
                src="/images/submain_img/introduce.png"
                style={{
                  position: "relative",
                  width: "220px",
                }}
                data-aos="fade-right"
              />
              <img
                alt="프로필사진"
                src="/images/submain_img/reigen.png"
                style={{
                  position: "relative",
                  width: "128px",
                  marginLeft: "10px",
                }}
                data-aos="fade-left"
              />
            </div>

            <div id="second-line" style={{ marginTop: "15px" }}>
              <img
                className="request"
                alt="의뢰사진"
                src="/images/submain_img/request.gif"
                style={{
                  position: "relative",
                  width: "180px",
                }}
                data-aos="fade-right"
                onClick={onClickRequest}
              />
              <img
                alt="스케쥴"
                src="/images/submain_img/schedule.png"
                style={{
                  position: "relative",
                  width: "170px",
                  marginLeft: "10px",
                }}
                data-aos="fade-left"
                onClick={onClickSchedule}
              />
            </div>

            <div id="third-line" style={{ marginTop: "15px" }}>
              <img
                alt="리뷰 남기기"
                src="/images/submain_img/review.png"
                style={{
                  position: "relative",
                  width: "160px",
                }}
                data-aos="fade-right"
                onClick={onClickReview}
              />
              <img
                alt="영제거 경험"
                src="/images/submain_img/experience.png"
                style={{
                  position: "relative",
                  width: "190px",
                  marginLeft: "10px",
                  top: "-18px",
                }}
                data-aos="fade-left"
                onClick={onClickExperience}
              />
            </div>

            <div id="fourth-line" style={{ marginTop: "15px" }}>
              <img
                alt="길찾기"
                src="/images/submain_img/road.png"
                style={{
                  position: "relative",
                  width: "360px",
                  height: "70px",
                }}
                data-aos="fade-up"
                onClick={onClickLoad}
              />
            </div>

            <div id="fifth-line" style={{ marginTop: "20px" }}>
              <img
                className="arrow"
                alt="화살표"
                src="/images/submain_img/arrow.gif"
                style={{
                  position: "relative",
                  width: "140px",
                  height: "70px",
                }}
                data-aos="fade-down"
              />
            </div>

            <div id="sixth-line" style={{ marginTop: "20px" }}>
              <img
                className="price"
                alt="가격표"
                src="/images/submain_img/cost.gif"
                style={{
                  position: "relative",
                  width: "390px",
                }}
                data-aos="fade-up"
              />
            </div>
          </Body>
          <Button3 data-aos="fade-up" onClick={onClickBack}>
            {" "}
            B A C K
          </Button3>
        </BodyWrapper>
      </Container>
    </motion.div>
  );
};
export default Submain;
