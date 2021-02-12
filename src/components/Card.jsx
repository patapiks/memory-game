import cn from 'classnames';

const Card = (props) => {
  const { addMatched, blockEvent, clearStore, addCard, card, id } = props;

  if (card.matched.length === 16) {
    setTimeout(() => {
      props.changeState('finished');
    }, 2000);
  }

  const classCard = cn({
    'game-card': true,
    flip: card.uiState.includes(props.id),
  });

  const matching = (firstCard, secondCard) => {
    addCard(secondCard);
    if (firstCard.dataset.name !== secondCard.dataset.name) {
      setTimeout(() => {
        clearStore();
      }, 2000);
    } else {
      addMatched(firstCard.id, secondCard.id);
      clearStore();
    }
  };

  const handleClick = (e) => {
    const currentCard = e.currentTarget;

    if (card.isFirst) {
      addCard(currentCard);
    } else {
      blockEvent();
      matching(card.value, currentCard);
    }
  };

  return (
    <div
      id={id}
      className={classCard}
      data-name={props.name}
      onClick={props.card.listener ? handleClick : null}
    >
      <img className="game-image front" src={props.image} alt={props.name} />
      <img className="game-image back" src="./logo192.png" alt="Back face" />
    </div>
  );
};

export default Card;
