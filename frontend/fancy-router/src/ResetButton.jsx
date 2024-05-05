import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCounter }) {

  const handleClick = (e) => {
    setCounter(0);
    e.currentTarget.blur();
  }

  return (
    <button className="reset-btn">
      <ResetIcon onClick={handleClick} className="reset-btn-icon" />
    </button> 
  );
}
