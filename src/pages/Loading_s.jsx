import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

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
  height: 115vh;
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

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BodyWrapper = styled.div`
  min-height: 80vh;

  p {
    color: #7baffc;
    font-family: 'HBIOS-SYS';
    font-weight: "bold";
    font-size: "12px";
  }

  .img {
    animation: rotate_image 6s linear infinite;
    transform-origin: 50% 50%;
  }

  @keyframes rotate_image {
    100% {
        transform: rotate(360deg);
    }
  }
`;

const Loading_s = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GlobalStyle />
      <Container>
        <BodyWrapper>
            <img class="img"
              src="/images/cursor_img/cursor_blue.png"
              alt="사진"
              style={{ marginTop: "120%", width: "130px", marginBottom: "10%" }}
            />
            <p>로딩 중입니다.</p>
            <p>잠시만 기다려 주세요!</p>
        </BodyWrapper>
      </Container>
    </motion.div>
  );
};

export default Loading_s;
