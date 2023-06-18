import result from "@/types/result";
import ResultDesc from "./ResultDesc";
import ResultTitle from "./ResultTitle";
import { useEffect, useState } from "react";

interface Props {
  results: result[];
  correctAnswers: number;
}

export default function Results({ results, correctAnswers }: Props) {
  const [resultIndex, setResultIndex] = useState(0);

  useEffect(() => {
    results.forEach((result, i) => {
      if (result.min <= correctAnswers && result.max >= correctAnswers) {
        setResultIndex(i);
      }
      return result;
    });
  }, [correctAnswers, resultIndex, results]);

  return (
    <>
      <div className="result">
        <ResultTitle title={results[resultIndex].title} />
        <ResultDesc result={results[resultIndex].desc} />

     
      </div>
    </>
  );
}
