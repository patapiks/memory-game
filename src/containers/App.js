import { connect } from 'react-redux';
import Card from '../components/Card';
import React from 'react';
import { addCard, clearStore, blockEvent } from '../actions/cardActions';
import _ from 'lodash';

class App extends React.Component {
  static defaultProps = {
    cards: _.shuffle([
      { name: 'USA', image: './logo01.png' },
      { name: 'Brown', image: './logo02.png' },
      { name: 'Blue', image: './logo03.png' },
      { name: 'Light', image: './logo04.png' },
      { name: 'Pens', image: './logo05.png' },
      { name: '@', image: './logo06.png' },
      { name: 'Laptop', image: './logo07.png' },
      { name: 'Lion', image: './logo08.png' },
      { name: 'USA', image: './logo01.png' },
      { name: 'Brown', image: './logo02.png' },
      { name: 'Blue', image: './logo03.png' },
      { name: 'Light', image: './logo04.png' },
      { name: 'Pens', image: './logo05.png' },
      { name: '@', image: './logo06.png' },
      { name: 'Laptop', image: './logo07.png' },
      { name: 'Lion', image: './logo08.png' },
    ]),
  };
  render() {
    const { card, addCard, clearStore, blockEvent } = this.props;

    return (
      <div className="game">
        {this.props.cards.map(({ name, image }, index) => (
          <Card
            key={index}
            name={name}
            image={image}
            card={card}
            blockEvent={blockEvent}
            addCard={addCard}
            clearStore={clearStore}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return { card: store.card };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => dispatch(addCard(card)),
    clearStore: () => dispatch(clearStore()),
    blockEvent: () => dispatch(blockEvent()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
