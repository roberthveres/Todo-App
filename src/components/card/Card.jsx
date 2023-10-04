import "./Card.css";
import Button from "../button/Button";

const Card = (props) => {
  return <div className="card">
    {props.children}
    </div>;
};

export default Card;
