const Game = (props) => {
  return (
    <div className="game">
      <div className="game-greeting">
        <h1>Congratulations!</h1>
        <br />
        <h3>Let's play again?</h3>
        <br />
        <button className="game-button" onClick={() => window.location.reload()}>
          <code>START</code>
        </button>
      </div>
    </div>
  );
};
export default Game;
