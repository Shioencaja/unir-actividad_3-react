interface Props {
  result: string;
}

export default function ResultDesc({ result }: Props) {
  return <div className="desc">{result}</div>;
}
