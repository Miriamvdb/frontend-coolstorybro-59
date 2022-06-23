import { Link } from "react-router-dom";

export default function Space(props) {
  return (
    <div
      className="container-space"
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Link to={`/spaces/${props.id}`}>
        <button>Visit space</button>
      </Link>
    </div>
  );
}
