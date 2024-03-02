import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SOGANGUNIVERSITYTTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/SOGANGUNIVERSITYTTF.woff2') format('woff2');
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
`;

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();

    // 4초 뒤에 main페이지로 이동하기 위해 추가함
    const timeoutId = setTimeout(() => {
      navigate("/Main");
    }, 4850);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GlobalStyle />
      <Container>
        <BodyWrapper>
          <div align="center" style={{ marginTop: "200px" }}>
            <img
              src="/images/loading_img/loading_count.gif"
              alt="사진"
              style={{ marginTop: "13%", width: "170px" }}
            />
            <br />
            <img
              src="/images/loading_img/loading_bar.gif"
              alt="사진"
              style={{ marginTop: "5%", width: "350px" }}
            />
            <p
              style={{
                position: "relative",
                color: "#29ffce",
                fontFamily: "SOGANGUNIVERSITYTTF",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              ※이 사이트는 모바일용으로 제작되었음을 알려드립니다※
            </p>
          </div>
        </BodyWrapper>
      </Container>
    </motion.div>
  );
};

export default Loading;
