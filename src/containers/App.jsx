import { connect } from 'react-redux';
import Card from '../components/Card';
import Game from '../components/Game';
import React from 'react';
import { addCard, clearStore, blockEvent, addMatched } from '../actions/cardActions';
import { changeState } from '../actions/gameActions';

class App extends React.Component {
  render() {
    const { game, card, addCard, clearStore, blockEvent, changeState, addMatched } = this.props;

    if (game.state === 'finished') {
      return <Game />;
    } else
      return (
        <div className="game">
          {card.cards.map(({ name, image, id }) => (
            <Card
              id={id}
              addCard={addCard}
              blockEvent={blockEvent}
              addMatched={addMatched}
              clearStore={clearStore}
              image={image}
              name={name}
              card={card}
              key={id}
              changeState={changeState}
            />
          ))}
          <br />
          <button className="game-button" onClick={() => window.location.reload()}>
            <code>RESTART</code>
          </button>
        </div>
      );
  }
}

const mapStateToProps = (store) => {
  return { card: store.card, game: store.game };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => dispatch(addCard(card)),
    clearStore: () => dispatch(clearStore()),
    blockEvent: () => dispatch(blockEvent()),
    changeState: (state) => dispatch(changeState(state)),
    addMatched: (firstCardId, secondCardId) => dispatch(addMatched(firstCardId, secondCardId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
