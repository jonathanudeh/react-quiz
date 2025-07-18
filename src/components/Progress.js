import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, points, totalPointsAttainable, answer } =
    useQuiz();

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Questions <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPointsAttainable}
      </p>
    </header>
  );
}

export default Progress;
