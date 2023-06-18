import question from "@/types/question";
import QuestionHeader from "./QuestionHeader";

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
        <QuestionHeader
          questions={questions}
          questionsAnswered={questionsAnswered}
        />
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
