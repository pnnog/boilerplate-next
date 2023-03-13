type MainProps = {
  title: string;
};

export default function Main({ title }: MainProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
