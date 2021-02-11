const Card = (props) => {
  const { blockEvent, clearStore, addCard, card } = props;

  const matching = (firstCard, secondCard) => {
    if (firstCard.dataset.name !== secondCard.dataset.name) {
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        clearStore();
      }, 2000);
    } else clearStore();
  };

  const handleClick = (e) => {
    const currentCard = e.currentTarget;
    currentCard.classList.add('flip');

    if (card.isFirst) {
      addCard(currentCard);
    } else {
      blockEvent();
      matching(card.value, currentCard);
    }
  };

  return (
    <div
      className="game-card"
      data-name={props.name}
      onClick={props.card.listener ? handleClick : null}
    >
      <img className="game-image front" src={props.image} alt={props.name} />
      <img className="game-image back" src="./logo192.png" alt="Back face" />
    </div>
  );
};

export default Card;
