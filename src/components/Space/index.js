export default function Space(props) {
  return (
    <div
      className="container-space"
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
