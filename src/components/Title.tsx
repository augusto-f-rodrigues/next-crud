interface TitleProps {
  name: string
}

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="text-4xl font-semibold py-2 px-8">{props.name}</h1>
      <hr className="border-purple-500" />
    </div>
  );
}
