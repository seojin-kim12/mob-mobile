import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
// 다른 페이지로 자연스럽게 넘어가기 위해 추가함
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Map, MapMarker } from "react-kakao-maps-sdk";
const {kakao} = window;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HBIOS-SYS';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/HBIOS-SYS.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PuradakGentleGothicR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.1/PuradakGentleGothicR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  @font-face {
    font-family: 'YiSunShinRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YiSunShinRegular.woff') format('woff');
    font-weight: normal; 
    font-style: normal; 
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 83vh;
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
    height: 106.5vh;
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
  min-height: calc(100vh - 145px);
`;

const Title = styled.div`
  margin-top: 30px;
  color: #d2b9f8;
  font-family: 'PuradakGentleGothicR';
  font-size: 30px;
  font-weight: bold;
  text-shadow: 1.5px 1.5px 0 black;
  z-index: 7;
`;

const Review = () => {
  const navigate = useNavigate();
  const target = useRef();

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
      this.y = Math.random() * 640; //세로 영역
      this.size = Math.random() * 20; // 별 크기
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

  // 별 애니메이션
  useEffect(() => {
    for (let i = 0; i < 30; i++) {
      // 별 개수 여기서 조정하면 돼요!!
      const newStar = new Star();
      newStar.set();
    }
  }, []);

// 여러개 마커 표시하기
const positions = [
  {
    title: "영1",
    latlng: { lat: 37.607063, lng: 127.042191 },
  },
  {
    title: "영2",
    latlng: { lat: 37.607162, lng:127.043942 },
  },
  {
    title: "영3",
    latlng: { lat: 37.607796, lng: 127.043181 },
  },
  {
    title: "영4",
    latlng: { lat: 37.606895, lng:127.043163 },
  },
  {
    title: "영5",
    latlng: { lat: 37.6079, lng: 127.042 },
  },
  {
    title: "영6",
    latlng: { lat: 37.606302, lng:127.041209 },
  },
]

// 마커 클릭 이벤트
const [isOpen, setIsOpen] = useState(false);

const toggleInfo = () => {
  setIsOpen(!isOpen);
};

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
            <Title data-aos="fade-down">⌈오시는 길⌋</Title>
            <div id="adver">
              <img
                  alt="경고"
                  src="/images/adver.png"
                  style={{
                    width: "70px",
                    marginTop: "-30px",
                    marginLeft: "-290px",
                    zIndex: "12"
                  }}
                  data-aos="fade-right"
                />
            </div>
            <Map
              center={{ lat: 37.607410, lng:  127.042692 }}
              style={{ width: "350px", height: "300px", marginTop: "-5px", zIndex: '5' }} // 맵의 z-index 값을 5로 변경
              level={3}
            >

            {/* 대표 마크 */}
            <MapMarker
              position={{ lat: 37.607410, lng:  127.042692 }}
              clickable={true}
              onClick={toggleInfo}
            >
              {isOpen && (
                <div style={{ width: "150px" }}>
                  <div style={{ padding: "7px", color: "#000",  fontFamily: 'HBIOS-SYS', fontSize: '10.5px', fontWeight: 'bold' }}>영•기타등등 예비 상담소</div>
                </div>
              )}
              </MapMarker>

              {/* 마크 여러개 표시 */}
              {positions.map((position, index) => (
                <MapMarker
                  key={`${position.title}-${position.latlng}`}
                  position={position.latlng} // 마커를 표시할 위치
                  image={{
                    src: "/images/cursor_img/cursor_red.png", // 마커이미지의 주소입니다
                    size: {
                      width: 30,
                      height: 30
                    }, // 마커이미지의 크기입니다
                  }}
                  title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                />
              ))}
            </Map>
            
            <div id="road">
              <img
                alt="길"
                src="/images/poster_img/road.png"
                style={{
                  zIndex: "3",
                  position: "relative",
                  marginTop: "20px",
                  marginLeft: "170px",
                  width: "180px",
                  height: "200px",
                  opacity: "0.8",
                }}
                data-aos="flip-up"
              />
          </div>

          <div id="intro"                 
            style={{
              position: "relative",
              marginTop: "-203.5px",
              width: "155px",
              height: "196px",
              backgroundColor: "white",
              border: "2.5px solid #d2b9f8",
              opacity: "0.5",
              zIndex: "7"
            }}
            data-aos="flip-down"
             >
            <p
              style={{
                position: "relative",
                zIndex: "10",
                fontFamily: "YiSunShinRegular",
                color: "#8B0000",
                fontWeight: "bold",
                marginTop: "20px",
                fontSize: "14px",
              }}
              data-aos="fade-up"
            >
              환영합니다!
            </p>
            <p
                style={{
                  position: "relative",
                  zIndex: "10",
                  fontFamily: "YiSunShinRegular",
                  fontSize: "12.5px",
                }}
                data-aos="fade-up"
              >
              이곳은 영•기타등등 상담소로<br/> 오시는 방법에 대한 안내입니다.
              <br/>
              <br/>
              이곳으로 오시는 모든 분들께, <br/>
              고민 상담부터 악령 퇴치까지!! <br/><br/>
              모든 근심을 해결해 드릴 것을<br/> 약속드립니다.
            </p>
          </div>
        </BodyWrapper>
        <nav className={menuOpen ? "active" : ""} style={{ zIndex: 100 }}>
          <p style={{ marginTop: "215px" }} onClick={onClickBack}>
            Main
          </p>
          <p onClick={onClickRequest}>Request</p>
          <p onClick={onClickSchedule}>Poster</p>
          <p onClick={onClickReview}>Load</p>
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
export default Review;
