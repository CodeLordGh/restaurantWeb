export default function StarRating({ stars, size }) {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    marginRight: `${size / 6}px`,
  };

  function Star({ number }) {
    const halfNumber = number - 0.5;
    return stars >= number ? (
      <img src="/star-full.svg" style={style} alt="number" />
    ) : stars >= halfNumber ? (
      <img src="/star-half.svg" style={style} alt="number" />
    ) : (
      <img src="/star-empty.svg" style={style} alt="number" />
    );
  }

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((number) => (
        <Star key={number} number={number} />
      ))}
    </div>
  );
}

StarRating.defaultProps = {
  size: 18,
};
