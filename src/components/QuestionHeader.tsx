import question from "@/types/question";

interface Props {
  questions: question[];
  questionsAnswered: number;
}

export default function QuestionHeader({
  questions,
  questionsAnswered,
}: Props) {
  return (
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
  );
}
