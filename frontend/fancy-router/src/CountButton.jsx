import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCounter, type, isLocked }) {
  return (
    <button disabled={isLocked} onClick={setCounter} className="count-btn">
      {type === "decrement" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
