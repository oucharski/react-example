import "./Body.css";

type BodyProps = {
  children?: any;
};

export const Body = (props: BodyProps) => {
  return <div className="Body">{props.children}</div>;
};
