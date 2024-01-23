/*global kakao*/
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
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
  min-height: calc(100vh - 145px);
`;

const Body = styled.div`
  .scrollbox {
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }
`;

const Road = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <BodyWrapper>
          <Body></Body>
        </BodyWrapper>
      </Container>
    </motion.div>
  );
};

export default Road;
