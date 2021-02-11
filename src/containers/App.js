import { connect } from 'react-redux';
import Card from '../components/Card';
import Game from '../components/Game';
import React from 'react';
import { addCard, clearStore, blockEvent } from '../actions/cardActions';
import { newGame } from '../actions/gameActions';

class App extends React.Component {
  render() {
    const { game, card, addCard, clearStore, blockEvent, newGame } = this.props;

    if (game.state === 'greeting') {
      return <Game newGame={newGame} />;
    } else
      return card.cards.map(({ name, image }, index) => (
        <Card
          key={index}
          name={name}
          image={image}
          card={card}
          blockEvent={blockEvent}
          addCard={addCard}
          clearStore={clearStore}
        />
      ));
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
    newGame: () => dispatch(newGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
