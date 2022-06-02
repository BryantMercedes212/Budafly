import React from "react";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button> */}
        {/* </div> */}
        <div className="title">
          <h1>AGE VERIFICATION</h1>
        </div>
        <div className="body">
          <p>By clicking enter, I certify that I am over the age of 21.</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="continueBtn"
          >
            Enter
          </button>
          <button>Exit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
