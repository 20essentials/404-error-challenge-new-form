const createArrayNumberCards = limit => {
  let newArray = [];
  let valor = null;
  const [lowerLimit, higherLimit] = limit;
  for (let min = lowerLimit; min <= higherLimit; min++) {
    do {
      valor =
        Math.floor(Math.random() * (higherLimit - lowerLimit + 1)) + lowerLimit;
    } while (newArray.includes(valor));
    newArray = [...newArray, valor];
  }
  return newArray;
};

const ArtisansKeyCapRow = ({ limit }) => {
  const arrayCards = createArrayNumberCards(limit);

  return (
    <section className='artisan-row'>
      <aside className='artisan-row-back'>
        {arrayCards.map(imageNumber => (
          <article className='card' key={crypto.randomUUID()}>
            <img src={`artisans/n${imageNumber}.avif`} />
          </article>
        ))}
      </aside>
      <aside className='artisan-row-front'>
        {arrayCards.map(imageNumber => (
          <article className='card' key={crypto.randomUUID()}>
            <img src={`artisans/n${imageNumber}.avif`} />
          </article>
        ))}
      </aside>
    </section>
  );
};

export default ArtisansKeyCapRow;
