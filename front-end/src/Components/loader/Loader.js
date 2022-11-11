import "./Loader.css";

function Loader() {
  return (
    <div className="load">
      <iframe
        src="https://giphy.com/embed/oNURVPre6pzRrUqUSB"
        width="560"
        height="560"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <div className="topOfLoad"> </div>
    </div>
  );
}

export default Loader;
