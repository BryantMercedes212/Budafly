import { useState } from "react";
import "./ProgressBar.css";

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});

  let editedPercentage = "";
  if (done) {
    editedPercentage = done.slice(0, -1);
  }

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${Number(editedPercentage) + 27}%`,
    };
    setStyle(newStyle);
  });

  return (
    <div className="progress">
      <div className="progress-done" style={style}></div>
    </div>
  );
};

export default Progress;
