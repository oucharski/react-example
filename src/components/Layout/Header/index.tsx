type HeaderProps = {
  children: string;
};

export const Header = (props: HeaderProps) => {
  return <h1>🦁 {props.children}</h1>;
};
