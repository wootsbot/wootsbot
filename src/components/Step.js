export default function Step({ number, title, ...others }) {
  return (
    <div>
      <div>{number}</div>
      <h3>{title}</h3>
    </div>
  );
}
