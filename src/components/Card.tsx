import Title from "./Title";

interface CardProps {
  title: string;
  children: any;
}

export default function Card(props) {
  return (
    <div
      className={`
      w-4/5
    bg-white
    rounded-md
    `}
    >
      <Title name={props.title} />
      <div className="p-6">{props.children}</div>
    </div>
  );
}
