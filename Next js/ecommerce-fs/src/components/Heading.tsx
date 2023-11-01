interface HeadingProps {
  title: string;
  center?: boolean;
}

export default function Heading({ title, center }: HeadingProps) {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}
