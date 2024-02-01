import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
// 다른 페이지로 자연스럽게 넘어가기 위해 추가함
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'WandohopeR';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/WandohopeR.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'MYYeongnamnu';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/MYYeongnamnu.woff2') format('woff2');
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
      color: white;
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
  margin-top: 15px;
  font-family: "WandohopeR";
  font-size: 30px;
`;

const ReviewBox = styled.div``;

const LookBox = styled.div`
  margin-top: -530px;

  #chatboxes {
    z-index: 99;
    width: 250px;
    height: 382px;
    margin-left: 50px;

    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      /* WebKit 브라우저의 스크롤바를 숨김 */
      width: 0;
      background: transparent;
    }
  }

  #chat {
    height: 70px;
  }

  input {
    position: relative;
    height: 18px;
    border: none;
    outline: none;
    background-color: transparent;
    margin-left: 10px;
    font-family: "WandohopeR";
    text-align: left;
    font-size: 12px;
    top: -49px;
    left: 28px;
    width: 120px;
  }
`;

const ChatBox = styled.div`
  position: relative;
  top: -510px;
  background-color: transparent;

  input {
    position: relative;
    height: 18px;
    border: none;
    outline: none;
    background-color: transparent;
    margin-left: 10px;
    font-family: "WandohopeR";
    text-align: left;
    font-size: 15px;
    top: -28px;
    margin-left: -218px;
    width: 160px;
  }
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
            <ReviewBox>
              <img
                alt="리뷰박스"
                src="/images/review_img/smartphone.png"
                style={{ width: "360px" }}
              />
            </ReviewBox>
            <ChatBox>
              <img
                alt="챗박스"
                src="/images/review_img/chat.png"
                style={{ width: "240px", marginLeft: "-40px" }}
              />
              <img
                alt="챗박스"
                src="/images/review_img/btn.png"
                style={{
                  position: "relative",
                  width: "50px",
                  marginLeft: "-55px",
                  top: "-7.5px",
                }}
              />
              <input
                type="text"
                placeholder="자유롭게 채팅해 주세요."
                value={inputText}
                onChange={handleInputChange}
              />
            </ChatBox>
            <LookBox>
              <div id="chatboxes">
                <div id="chat">
                  <img
                    alt="챗보이는박스"
                    src="/images/review_img/chatbox.png"
                    style={{ position: "relative", width: "215px" }}
                  />
                  <input id="text" value="안녕하신가?" />
                </div>
                <div id="chat">
                  <img
                    alt="챗보이는박스"
                    src="/images/review_img/chatbox.png"
                    style={{ position: "relative", width: "215px" }}
                  />
                  <input id="text" value="걍 테스트해보는거임" />
                </div>
                <div id="chat">
                  <img
                    alt="챗보이는박스"
                    src="/images/review_img/chatbox.png"
                    style={{ position: "relative", width: "215px" }}
                  />
                  <input id="text" value="안녕하신가?지는 별로 안" />
                </div>
                <div id="chat">
                  <img
                    alt="챗보이는박스"
                    src="/images/review_img/chatbox.png"
                    style={{ position: "relative", width: "215px" }}
                  />
                  <input id="text" value="개귀찮아" />
                </div>
                <div id="chat">
                  <img
                    alt="챗보이는박스"
                    src="/images/review_img/chatbox.png"
                    style={{ position: "relative", width: "215px" }}
                  />
                  <input id="text" value="글자수 제한 해두셈" />
                </div>
                <div id="chat">
                  <img
                    alt="챗보이는박스"
                    src="/images/review_img/chatbox.png"
                    style={{ position: "relative", width: "215px" }}
                  />
                  <input type="text" value="하하하하하하하" />
                </div>
              </div>
            </LookBox>
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
          src={imageSrc}
          style={{
            width: "30px",
            position: "fixed",
            marginTop: "20px",
            marginLeft: "340px",
            zIndex: 100,
          }}
          onClick={() => {
            setMenuOpen((menuOpen) => !menuOpen);
            handleClick();
          }}
        />
      </Container>
    </motion.div>
  );
};
export default Review;
