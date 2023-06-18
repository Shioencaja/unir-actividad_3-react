import result from "@/types/result";
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
        <div className="title">{results[resultIndex].title}</div>
        <div className="desc">{results[resultIndex].desc}</div>
      </div>
    </>
  );
}
