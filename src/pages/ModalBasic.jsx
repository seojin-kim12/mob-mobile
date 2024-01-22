import React from "react";
import PropTypes from "prop-types";
import styles from "./ModalBasic.module.css";
import { useNavigate } from "react-router-dom";

function ModalBasic({ setModalOpen }) {
  const navigate = useNavigate();

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.container} data-aos="flip-up">
      <div className={styles.cancel} onClick={closeModal}>
        X
      </div>
      <img
        className={styles.no}
        src="/images/request_img/request.png"
        alt="no"
      />
      <div className={styles.font}>
        동의하지
        <br />
        않으시면
        <br />
        의뢰서가
        <br />
        제출되지
        <br />
        않습니다.
      </div>
    </div>
  );
}

ModalBasic.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};

export default ModalBasic;
