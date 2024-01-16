import React, { useState, useRef, useCallback, useEffect } from "react";
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
  background-color: black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

const Title = styled.div`
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
  position: flex;
  top: 0px;
  height: 590px;
  width: 390px;
  left: 0px;
  position: relative;
  text-align: center;
  background-image: url("/images/request_img/paper.png");
  background-size: cover;
  -ms-overflow-style: none;
  scrollbar-width: none;
  font-family: "HBIOS-SYS";

  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  #name {
    margin-top: 15px;
    margin-left: -130px;
  }

  #phone {
    margin-top: 15px;
    margin-left: -130px;
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
    margin-left: -285px;
  }

  .select {
    display: flex;
    flex-direction: column;
    margin-left: 230px;
    margin-top: -20px;
  }

  #content_text {
    margin-top: 15px;
    margin-left: -280px;
  }

  #content {
    margin-top: -20px;
    margin-left: -17px;
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
  margin-left: -190px;

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
  margin-bottom: 50px;

  img {
    transition: all 0.2s linear;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Request = () => {
  const navigate = useNavigate();

  const onClickCheck = () => {
    navigate("/RequestCheck");
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
  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
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
    }
  };

  // 동의 부분 체크박스!!!! 하나만 선택 가능
  const [agree, setAgree] = useState(null);

  const clickCheck2 = (value) => {
    setAgree(value);
  };

  // reset버튼 클릭하면 종이 안에 적었던 내용 초기화
  const resetForm = () => {
    // 이름, 번호 입력 초기화
    document.getElementById("name-rst").value = "";
    document.getElementById("phone-rst").value = "";

    // 코스 선택 체크박스 초기화
    document
      .querySelectorAll(`input[type=checkbox][name="course"]`)
      .forEach((el) => (el.checked = false));

    // 의뢰 내용 초기화
    target.current.value = "";
    target.current.style.height = "15px"; // 의뢰 내용 높이도 초기화

    // 동의 체크박스 초기화
    setAgree(null);
  };

  //스크롤 애니메이션 추가하기 위해 넣음
  useEffect(() => {
    AOS.init({
      duration: 1500,
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
          <Title>
            <div
              style={{
                marginTop: "10px",
                marginLeft: "320px",
                marginBottom: "80px",
              }}
            >
              <img alt="바" src="/images/bar.svg" style={{ width: "30px" }} />
            </div>
            <div
              id="title"
              style={{
                marginTop: "-70px",
                zIndex: "1",
                marginLeft: "-30px",
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
            <div id="title">
              <img
                alt="타이틀"
                src="/images/request_img/request_title.png"
                style={{ width: "150px", marginTop: "30px" }}
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
                  }}
                  checked={agree === "1"}
                  onChange={() => {
                    clickCheck2("1");
                  }}
                />
                <label htmlFor="disagree" style={{ fontSize: "14px" }}>
                  동의하지 않습니다
                </label>
              </div>
            </div>
          </RequestPaper>
          <Button1>
            {/* 제출 버튼 */}
            <img
              className="submitbtn"
              alt="제출 버튼"
              src="/images/request_img/submit_button.png"
              style={{ width: "170px" }}
              onClick={onClickCheck}
            />
          </Button1>
          <Button2>
            {/* 리셋 버튼 */}
            <img
              alt="리셋 버튼"
              src="/images/request_img/reset_button.png"
              style={{ width: "160px", marginLeft: "30px" }}
              onClick={resetForm}
            />
          </Button2>
        </BodyWrapper>
      </Container>
    </motion.div>
  );
};
export default Request;
