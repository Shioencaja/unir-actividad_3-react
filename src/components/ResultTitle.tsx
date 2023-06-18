interface Props {
  title: string;
}

export default function ResultDesc({ title }: Props) {
  return <div className="title">{title}</div>;
}
