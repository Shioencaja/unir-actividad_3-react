import question from "@/types/question";

interface Props {
  questions: question[];
  selectedAnswer: any;
  questionsAnswered: number;
}

export default function Questions({
  questions,
  selectedAnswer,
  questionsAnswered,
}: Props) {
  return (
    <>
      <div className="questions-ctr">
        <div className="progress">
          <div
            className="bar"
            style={{
              width: `${(questionsAnswered / questions.length) * 100}%`,
            }}
          ></div>
          <div className="status">
            {questionsAnswered} de 3 preguntas respondidas
          </div>
        </div>
        {questions.map((question, i) => (
          <div className="single-question" key={i}>
            {questionsAnswered === i && (
              <>
                <div className="question">{question.q}</div>
                <div className="answers">
                  {question.answers.map((answer, i) => (
                    <div
                      className="answer"
                      key={i}
                      onClick={() => selectedAnswer(answer.is_correct)}
                    >
                      {answer.text}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
