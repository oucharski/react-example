import "./Home.css";
import { useEffect, useState } from "react";
import { colorsList } from "../constants";
import { Header, Button, Counter } from "../components";
import { getRandomFromList } from "../utils";

export const Home = () => {
  const [counter, setCounter] = useState<number>(0);

  const [counter2, setCounter2] = useState<number>(0);

  const onClick = () => {
    setCounter(counter + 1);
  };

  const increaseSecondCounter = () => {
    setCounter2(counter2 + 1);
  };

  const reduceSecondCounter = () => {
    setCounter2(counter2 - 1);
  };

  useEffect(() => {
    const newColor = getRandomFromList(colorsList);
    document.body.setAttribute("style", `background-color:${newColor}`);
  }, [counter]);

  return (
    <>
      <Header>Gamers Counting</Header>
      <Button onClick={onClick}>Are you a gamer?</Button>
      <Counter
        count={counter}
        maxCount={5}
        messageMaxCount={"YOU ARE A NERD! 🧛"}
        preCount={"Gamers have clicked this button"}
        postCount={"tim3s!"}
      />
      <div className="buttons-container">
        <Button onClick={increaseSecondCounter}>I am a person</Button>
        <Button onClick={reduceSecondCounter}>I am not a person</Button>
      </div>
      <Counter
        count={counter2}
        maxCount={10}
        messageMaxCount={"YOU ARE A PERSON! 🧛"}
        preCount={"People have clicked this button"}
        postCount={"times!"}
      />
    </>
  );
};
