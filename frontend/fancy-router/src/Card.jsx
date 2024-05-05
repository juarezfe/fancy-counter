import { useEffect, useState } from "react";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";

export default function Card() {
  const [counter, setCounter] = useState(0);
  const limit = 5;
  const isLocked = counter === limit ? true : false;

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") {
        setCounter(isLocked ? counter : counter + 1);
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [counter, isLocked]);

  const increment = (e) => {
    setCounter((prev) => (isLocked ? prev : prev + 1));
    e.currentTarget.blur();
  };

  const decrement = (e) => {
    setCounter((prev) => (prev === 0 ? 0 : prev - 1));
    e.currentTarget.blur();
  };

  return (
    <div className={`card ${isLocked && "card--limit"}`}>
      <Title isLocked={isLocked} limit={limit} />
      <Count counter={counter} />
      <ResetButton setCounter={setCounter} />
      <ButtonContainer>
        <CountButton setCounter={decrement} isLocked={isLocked} type="decrement" />
        <CountButton setCounter={increment} isLocked={isLocked} />
      </ButtonContainer>
    </div>
  );
}
