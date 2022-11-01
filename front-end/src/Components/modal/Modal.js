import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, handleModalChange }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You at least 21?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Nope
          </button>
          <button
            onClick={() => {
              handleModalChange();
            }}
            id="cancelBtn"
          >
            Of Course
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
