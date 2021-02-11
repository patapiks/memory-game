const Game = (props) => {
  const handleClick = () => props.newGame();
  return (
    <div className="game-greeting">
      <h1>Greetings developers!</h1>
      <h3>Start a new game?</h3>
      <br />
      <button className="game-button" onClick={handleClick}>
        <code>START</code>
      </button>
    </div>
  );
};
export default Game;
