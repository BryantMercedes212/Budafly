import React from "react";
import "./Modal.css";


function Modal({ setOpenModal }) {
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
          <h1>AGE VERIFICATION</h1>
          <br></br>
          <p>By clicking enter, I certify that I am over the age of 21 and will comply with the above statement.</p>
        </div>
        <div className="body">
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="enterBtn"
          >
            Enter
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Modal;