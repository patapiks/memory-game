const Card = (props) => {
  const handleClick = (e) => {
    const { blockEvent, clearStore, addCard, card } = props;
    const currentCard = e.currentTarget;
    currentCard.classList.add('flip');

    if (card.isFirst) {
      addCard(currentCard);
    } else {
      blockEvent();
      const firstCardName = card.value.dataset.name;
      const secondCardName = currentCard.dataset.name;
      if (firstCardName !== secondCardName) {
        setTimeout(() => {
          card.value.classList.remove('flip');
          currentCard.classList.remove('flip');
          clearStore();
        }, 2000);
      } else clearStore();
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
