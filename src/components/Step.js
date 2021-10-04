export default function Step({ number, title, ...others }) {
  console.log('number', others);

  return (
    <div>
      <div>{number}</div>
      <h3>{title}</h3>
    </div>
  );
}
