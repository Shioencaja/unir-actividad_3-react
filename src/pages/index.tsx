import Questions from "@/components/Questions";
import Results from "@/components/Results";
import data from "@/data/data";
import question from "@/types/question";
import result from "@/types/result";

import { useState, useEffect, use } from "react";

interface Props {
  questions: question[];
  results: result[];
}

export default function Home({ questions, results }: Props) {
  const [questionsAnswered, setQuestionAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    console.log("Questions answered", questionsAnswered);
    console.log("Correct answers", correctAnswers);
  }, [correctAnswers, questionsAnswered]);

  function selectedAnswer(is_correct: boolean) {
    if (is_correct) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setQuestionAnswered(questionsAnswered + 1);
  }

  function reset() {
    setQuestionAnswered(0);
    setCorrectAnswers(0);
  }
  return (
    <>
      <div className="ctr">
        {questionsAnswered < questions.length && (
          <Questions
            questions={questions}
            selectedAnswer={selectedAnswer}
            questionsAnswered={questionsAnswered}
          />
        )}

        {questionsAnswered === questions.length && (
          <Results results={results} correctAnswers={correctAnswers} />
        )}
        <button type="button" className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      questions: data.questions,
      results: data.results,
    },
  };
}
