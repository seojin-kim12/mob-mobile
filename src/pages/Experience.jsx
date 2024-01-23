import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'DungGeunMo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'YiSunShinRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YiSunShinRegular.woff') format('woff');
     font-weight: normal; 
     font-style: normal; 
  }

  @font-face {
    font-family: 'WandohopeR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/WandohopeR.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

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
  min-height: 70vh;
  position: relative;
  text-align: center;
  background-image: url("/images/experience_img/back.png");
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
    height: 97vh;
    width: 0px;
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

const Body = styled.div`
  margin-left: -10px;
  width: 400px;
  margin-top: 40px;
  min-height: 90vh;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const SlideTitle = styled.h2`
  font-family: "WandohopeR";
  color: #e6c614;
  font-size: 30px;
  text-shadow: 3px 3px 3px #000;
  margin-bottom: 40px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 1600px;
    margin: 0 auto;
  }

  .slick-slide div {
    cursor: pointer;
  }

  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }
`;

const CardBox = styled.div`
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 300px;
  height: 300px;
  margin-left: 50px;
`;

const CardText = styled.p`
  font-family: "YiSunShinRegular";
  color: #ba2f3c;
  text-shadow: 3px 3px 3px #000;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 3%;
  margin-left: -120px;
  margin-top: 20px;
`;

const CardIntro = styled.p`
  padding-top: 4.5%;
  font-family: "DungGeunMo";
  font-size: 8px;
  white-space: pre-line;
  margin-left: -130px;
  margin-top: -10px;
  font-weight: bold;
`;

const Experience = () => {
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
    window.scrollTo(0, 0);
  });

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

  // 슬라이더에 표시할 데이터
  const slidersData = [
    {
      name: "악령총장",
      image: "/images/experience_img/leader.png",
      intro:
        "터널 안을 단체로 바이크 타고 질주하던 중\n\n맨 앞의 녀석이 바나나 껍질을 밟는 바람에\n\n전원 사망한 폭주족의 두목이다.",
    },
    {
      name: "끌고가는 여자",
      image: "/images/experience_img//woman.gif",
      intro:
        "후카즈메초의 도시괴담 중 하나로\n\n악력이 500kg이고 100m를 20초 안에 헤엄칠 수 있다.",
    },
    {
      name: "요괴대왕",
      image: "/images/experience_img/king.png",
      intro:
        "흉악한 요괴 집단 ⌈백귀⌋의 우두머리\n\n붉은 눈과 날카로운 이빨이 특징이다.",
    },
    // 중복된 데이터를 추가하여 무한 스크롤 구현
    {
      name: "악령총장",
      image: "/images/experience_img/leader.png",
      intro:
        "터널 안을 단체로 바이크 타고 질주하던 중\n\n맨 앞의 녀석이 바나나 껍질을 밟는 바람에\n\n전원 사망한 폭주족의 두목이다.",
    },
    {
      name: "끌고가는 여자",
      image: "/images/experience_img//woman.gif",
      intro:
        "후카즈메초의 도시괴담 중 하나로\n\n악력이 500kg이고 100m를 20초 안에 헤엄칠 수 있다.",
    },
    {
      name: "요괴대왕",
      image: "/images/experience_img/king.png",
      intro:
        "흉악한 요괴 집단 ⌈백귀⌋의 우두머리\n\n붉은 눈과 날카로운 이빨이 특징이다.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <GlobalStyle />
      <Container>
        <BodyWrapper>
          <Body>
            <div
              style={{
                marginTop: "20px",
                marginLeft: "330px",
              }}
            ></div>
            {/* 슬라이더 생성 부분 */}
            <SlideTitle data-aos="flip-up">今まで取り除いた霊</SlideTitle>
            <StyledSlider {...settings}>
              {slidersData.map(({ name, image, intro }, index) => (
                <CardBox key={index}>
                  <CardImg alt="인기 서비스" src={image} />
                  <CardText>{name}</CardText>
                  <CardIntro>{intro}</CardIntro>
                </CardBox>
              ))}
            </StyledSlider>
          </Body>
        </BodyWrapper>
        <nav className={menuOpen ? "active" : ""} style={{ zIndex: 100 }}>
          <p style={{ marginTop: "130px" }} onClick={onClickBack}>
            Main
          </p>
          <p onClick={onClickSchedule}>Schedule</p>
          <p onClick={onClickReview}>Review</p>
          <p onClick={onClickRequest}>Request</p>
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

const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
};

export default Experience;
