const Home = ({ onGame }) => {
  return (
    <div className="home">
      <div className="title">
        TYPING QUEST: <p>AN ADVENTURE AWAITS</p>
      </div>
      <br />
      <div className="buttonContainer">
        <br />
        <button onClick={() => onGame("playing")} className="btnPlay">
          P L A Y
          <div id="clip">
            <div id="leftTop" class="corner"></div>
            <div id="rightBottom" class="corner"></div>
            <div id="rightTop" class="corner"></div>
            <div id="leftBottom" class="corner"></div>
          </div>
          <span id="rightArrow" class="arrow"></span>
          <span id="leftArrow" class="arrow"></span>
        </button>
      </div>
    </div>
  );
};
export default Home;
