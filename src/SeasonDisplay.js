const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());
  const text = season === "winter" ? "Burr,it is chilly" : "lets hit the beach";
  const icon = season === "winter" ? "snowflake" : "sun";
  return (
    <div className={`${season} season-display`}>
      <i className={`${icon} icon icon-left massive`} />
      <h1>{text}</h1>
      <i className={`${icon} icon icon-right massive`} />
    </div>
  );
};

export default SeasonDisplay;
