function FinishScreen({ points, totalPointsAttainable, highScore, dispatch }) {
  const scorePercentage = (points / totalPointsAttainable) * 100;

  let emoji;

  if (scorePercentage === 100) emoji = "🥇";
  if (scorePercentage >= 80 && scorePercentage < 100) emoji = "🎉";
  if (scorePercentage >= 50 && scorePercentage < 80) emoji = "🙃";
  if (scorePercentage >= 0 && scorePercentage < 50) emoji = "🙁";
  if (scorePercentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {totalPointsAttainable} ({Math.ceil(scorePercentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
