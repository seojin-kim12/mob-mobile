import React, { useState, useEffect } from "react";
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  text-align: center;
  background-color: white;
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
  font-family: "HBIOS-SYS";
  .scrollbox {
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }
`;

const RequestCheck = () => {

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

  // 바 이미지 바꾸기
  const [imageSrc, setImageSrc] = useState("/images/bar-black.svg"); // 초기 상태는 선택이 되지 않은 상태를 나타내기 위함
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부를 state로 관리

  const handleClick = () => {
    if (isClicked) {
      setImageSrc("/images/bar-black.svg");
      setIsClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
    } else {
      setImageSrc("/images/bar-white.svg");
      setIsClicked(true); // true일 땐 변경될 이미지 src
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
            {" "}
            <div id="cut1">
              <img
                alt="간판"
                src="/images/request_img/ring.png"
                style={{
                  width: "270px",
                  marginLeft: "-90px",
                  marginTop: "0px",
                }}
                data-aos="fade-right"
              />
              <div
                style={{ marginTop: "-264px", marginLeft: "75px" }}
                data-aos="fade-up"
              >
                띠<br />
                <br />링
              </div>
            </div>
            <div id="cut2">
              <img
                alt="간판"
                src="/images/request_img/ok.png"
                style={{
                  width: "300px",
                  marginLeft: "70px",
                  marginTop: "200px",
                }}
                data-aos="fade-left"
              />
              <div
                style={{ marginTop: "-270px", marginLeft: "-100px" }}
                data-aos="fade-up"
              >
                그 의뢰
                <br />
                ...
                <br />
                받아 <br />
                들이지!
              </div>
            </div>
          </Body>
        </BodyWrapper>
      </Container>
    </motion.div>
  );
};
export default RequestCheck;
