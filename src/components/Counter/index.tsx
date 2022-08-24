import { propsOrSource } from "../../utils";
import "./Counter.css";
import { defaults } from "./defaults";
import { CounterProps } from "./types";

export const Counter = (props: CounterProps) => {
  const { count } = props;

  const maxCount = propsOrSource("maxCount", props, defaults);
  const messageMaxCount = propsOrSource("messageMaxCount", props, defaults);
  const preCount = propsOrSource("preCount", props, defaults);
  const postCount = propsOrSource("postCount", props, defaults);

  if (count <= maxCount) {
    return (
      <p>
        {preCount} <b>{count}</b> {postCount}
      </p>
    );
  }

  return <p className="nerd-paragraph">{messageMaxCount}</p>;
};
