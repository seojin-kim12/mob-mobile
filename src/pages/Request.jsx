import React, { useState, useRef, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
// 다른 페이지로 자연스럽게 넘어가기 위해 추가함
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalBasic from "./ModalBasic";

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
  height: 142vh;
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

  nav {
    z-index: 99;
    display: flixed;
    align-items: center;
    height: 130vh;
    width: 0px;
    background-color: rgba(0, 0, 0, 0.9);
    margin-left: 590px;
    margin-top: -720px;

    p {
      display: none;
      align-items: center;
      font-family: "HBIOS-SYS";
      color: #c71585;
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
  z-index: 5;
  margin-top: 30px;
  margin-left: -20px;
`;

const Title = styled.div`
  margin-top: 10px;
  #titleText {
    color: #c71585;
    font-family: "HBIOS-SYS";
    margin-top: 6px;
  }
`;

const RequestPaper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: relative; /* position 속성 수정 */
  top: 20px;
  left: 7px;
  height: 530px;
  width: 350px;
  text-align: center;
  background-color: rgba(226, 210, 227, 0.8); /* 배경색의 투명도 조절 */
  border: 2px solid white;
  background-size: cover;
  -ms-overflow-style: none;
  scrollbar-width: none;
  font-family: "HBIOS-SYS";

  &::-webkit-scrollbar {
    display: none;
  }

  .bg1 {
    width: 350px;
    height: 20px;
    background-color: #ff00dd;
    border-bottom: 1.5px solid white;
    margin-bottom: 0.5%;
  }

  #name {
    margin-top: 15px;
    margin-left: -100px;
  }

  #phone {
    margin-top: 15px;
    margin-left: -100px;
  }

  input {
    width: 140px;
    height: 18px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background-color: transparent;
    color: black;
    margin-left: 10px;
    font-family: "HBIOS-SYS";
    text-align: left;
    font-size: 13px;
  }

  ::placeholder {
    color: gray;
    font-size: 13px;
  }

  #course {
    margin-top: 15px;
    margin-left: -264px;
  }

  .select {
    display: flex;
    flex-direction: column;
    margin-left: 230px;
    margin-top: -20px;
  }

  #content_text {
    margin-top: 15px;
    margin-left: -259px;
  }

  #content {
    margin-top: -20px;
    margin-left: 15px;
  }

  textarea {
    width: 200px;
    height: 15px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background-color: transparent;
    color: black;
    margin-left: 18px;
    font-family: "HBIOS-SYS";
    text-align: left;
    font-size: 13px;
    padding-bottom: 7px;
  }

  #scret {
    margin-top: 50px;
  }
`;

const Button1 = styled.div`
  margin-top: 30px;
  margin-left: -170px;

  img {
    transition: all 0.2s linear;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;
const Button2 = styled.div`
  margin-top: -44.5px;
  margin-left: 160px;

  img {
    transition: all 0.2s linear;
  }

  &:hover img {
    transform: scale(1.1);
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
    this.y = Math.random() * 800; //세로 영역
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

const Request = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/Submain");
  };

  const onClickSchedule = () => {
    navigate("/Schedule");
  };

  const onClickReview = () => {
    navigate("/Review");
  };

  const onClickRequest = () => {
    navigate("/Request");
  };

  const onClickExperience = () => {
    navigate("/Experience");
  };

  // 체크박스 하나만 선택
  const [selectedCourse, setSelectedCourse] = useState("");
  const target = useRef();

  const clickCheck1 = (target) => {
    document
      .querySelectorAll(`input[type=checkbox][name="course"]`)
      .forEach((el) => (el.checked = false));

    setSelectedCourse(target.value);
    target.checked = true;
  };

  // textarea 자동 높이 조절 부분(하지만 뒤로가기 눌렀을 때 textarea 높이가 줄어들도록은 구현 못 함)
  const handleKeyDown = (e) => {
    const adminText = target.current;

    // 엔터키를 누를때마다 줄바꿈 되도록 하는 코드
    if (adminText && e.key === "Enter") {
      e.preventDefault(); // Prevent default behavior (adding a new line)

      // 7줄 제한하는 코드
      const currentLines = adminText.value.split("\n").length;
      if (currentLines >= 6) {
        return;
      }

      const currentScrollHeight = adminText.scrollHeight;
      adminText.value = `${adminText.value}\n`;

      // 스크롤 높이가 변경되었을 때만 높이 조정
      if (adminText.scrollHeight !== currentScrollHeight) {
        adminText.style.height = `${adminText.scrollHeight}px`;
      }
      // 한 줄에 글자 수가 15자가 넘어갈 때 스크롤 높이 변경
      if (adminText && adminText.value.length > 15) {
        adminText.style.height = "auto";
        adminText.style.height = `${adminText.scrollHeight}px`;
      }
    }
  };

  // 동의 부분 체크박스!!!! 하나만 선택 가능
  const [agree, setAgree] = useState(null);

  const clickCheck2 = (value) => {
    setAgree(value);
  };

  const onClickCheck = () => {
    // 동의 체크 여부에 따라 다르게 동작하도록 설정
    if (agree === "1") {
      // 동의했을 경우 페이지 이동
      window.location.reload();
    } else {
      // 동의하지 않았을 경우 페이지 새로고침
      navigate("/RequestCheck");
    }
  };

  // 메뉴바 슬라이드
  const [menuOpen, setMenuOpen] = useState(false);

  //스크롤 애니메이션 추가하기 위해 넣음
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    window.scrollTo(0, 0);
  });

  // 별 애니메이션
  useEffect(() => {
    for (let i = 0; i < 15; i++) {
      // 별 개수 여기서 조정하면 돼요!!
      const newStar = new Star();
      newStar.set();
    }
  }, []);

  // 모달 창 띄우기
  const [modalOpen, setModalOpen] = useState(false);

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
          <Title>
            <div
              id="title"
              style={{
                marginLeft: "0px",
              }}
              data-aos="flip-up"
            >
              <img
                alt="타이틀"
                src="/images/request_img/title.png"
                style={{ width: "300px" }}
              />
              <p id="titleText">기타사항은 이메일로 문의해주세요</p>
            </div>
          </Title>
          <RequestPaper data-aos="flip-up">
            <div className="bg1">
              <span className="x">
                <img
                  alt="x"
                  src="/images/request_img/bar_x.png"
                  style={{
                    width: "25px",
                    marginTop: "-2.5px",
                    marginLeft: "327px",
                  }}
                  onClick={onClickBack}
                />
              </span>
            </div>
            <div id="title">
              <img
                alt="타이틀"
                src="/images/request_img/request_title.png"
                style={{ width: "150px", marginTop: "20px" }}
              />
            </div>
            {/* 이름 */}
            <div id="name">
              성&nbsp;함 :
              <input
                id="name-rst"
                type="text"
                placeholder="성함을 입력해 주세요."
              />
            </div>
            {/* 번호 */}
            <div id="phone">
              번&nbsp;호 :
              <input
                id="phone-rst"
                type="phone"
                placeholder="번호를 입력해 주세요."
              />
            </div>
            {/* 코스 */}
            <div id="course">
              코&nbsp;스 :
              <div className="select">
                <label>
                  <input
                    type="checkbox"
                    name="course"
                    value="A코스···시범코스"
                    style={{
                      width: "17px",
                      height: "17px",
                      marginRight: "10px",
                      accentColor: "#ff00dd",
                    }}
                    onClick={(e) => clickCheck1(e.target)}
                  />
                  A코스<span style={{ fontSize: "18px" }}>···시범코스</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="course"
                    value="B코스···진심코스"
                    style={{
                      width: "17px",
                      height: "17px",
                      marginTop: "2%",
                      marginRight: "10px",
                      accentColor: "#ff00dd",
                    }}
                    onClick={(e) => clickCheck1(e.target)}
                  />
                  B코스<span style={{ fontSize: "18px" }}>···진심코스</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="course"
                    value="C코스···전력코스"
                    style={{
                      width: "17px",
                      height: "17px",
                      marginTop: "2%",
                      marginRight: "10px",
                      accentColor: "#ff00dd",
                    }}
                    onClick={(e) => clickCheck1(e.target)}
                  />
                  C코스<span style={{ fontSize: "18px" }}>···전력코스</span>
                </label>
              </div>
              {/* 선택된 코스 확인용
              <p>선택된 코스: {selectedCourse}</p> */}
            </div>
            <div id="content_text">내&nbsp;용 :</div>
            {/* 의뢰 내용 */}
            <div id="content">
              <textarea
                ref={target}
                id="target"
                placeholder="의뢰 내용을 적어주세요."
                onKeyDown={handleKeyDown}
              />
            </div>
            <div id="scret">
              <span>해당 의뢰의 비밀 유지에 동의하시겠습니까?</span>
              <div style={{ marginTop: "20px", marginLeft: "-20px" }}>
                <input
                  type="checkbox"
                  name="agree"
                  value="0"
                  style={{
                    width: "15px",
                    height: "15px",
                    accentColor: "#ff00dd",
                  }}
                  checked={agree === "0"}
                  onChange={() => clickCheck2("0")}
                />
                <label htmlFor="agree" style={{ fontSize: "14px" }}>
                  동의합니다
                </label>

                <input
                  type="checkbox"
                  name="agree"
                  value="1"
                  style={{
                    marginLeft: "17%",
                    width: "15px",
                    height: "15px",
                    accentColor: "#ff00dd",
                  }}
                  checked={agree === "1"}
                  onChange={() => {
                    clickCheck2("1");
                  }}
                  onClick={() => setModalOpen(true)}
                />
                <label htmlFor="disagree" style={{ fontSize: "14px" }}>
                  동의하지 않습니다
                </label>
                {modalOpen && (
                  <>
                    <div
                      className="modal-overlay"
                      onClick={() => setModalOpen(false)}
                    />
                    <ModalBasic
                      setModalOpen={setModalOpen}
                      closeModal={() => setModalOpen(false)}
                    />
                  </>
                )}
              </div>
            </div>
          </RequestPaper>
          <Button1>
            {/* 제출 버튼 */}
            <img
              className="submitbtn"
              alt="제출 버튼"
              src="/images/request_img/submit_button.png"
              style={{ width: "170px", marginTop: "30px" }}
              onClick={onClickCheck}
            />
          </Button1>
          <Button2>
            {/* 리셋 버튼 */}
            <img
              alt="리셋 버튼"
              src="/images/request_img/reset_button.png"
              style={{ width: "160px", marginLeft: "30px" }}
              onClick={() => window.location.reload()}
            />
          </Button2>
        </BodyWrapper>
        <nav className={menuOpen ? "active" : ""} style={{ zIndex: 100 }}>
          <p style={{ marginTop: "80px" }} onClick={onClickBack}>
            Main
          </p>
          <p onClick={onClickRequest}>Request</p>
          <p onClick={onClickSchedule}>Poster</p>
          <p onClick={onClickReview}>Road</p>
          <p onClick={onClickExperience}>Experience</p>
        </nav>
        <img
          alt="바"
          src="/images/bar.svg"
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
export default Request;