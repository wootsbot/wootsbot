export type StepProps = {
  number?: number;
  title?: string;
};

export default function Step({ number, title, ...others }: StepProps) {
  return (
    <div>
      <div>{number}</div>
      <h3>{title}</h3>
    </div>
  );
}
