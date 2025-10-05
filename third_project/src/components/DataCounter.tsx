import { useState, useEffect, useReducer } from "react";
import VerticalLayout from "./VerticalLayout";
import HorizontalLayout from "./HorizontalLayout";

function convertToString(today: Date) {
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
}
type CurrentDateProps = {
  value: number; // number of days to add (e.g., 0 = today, 1 = tomorrow, -1 = yesterday)
};
export function CurrentDate({ value }: CurrentDateProps) {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + value);

    setToday(tomorrow);
  }, [value]);

  return <p>{convertToString(today)}</p>;
}

type CounterAction =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "SET"; payload: number }
  | { type: "RESET"; payload?: undefined };

function reducer(state: number, action: CounterAction): number {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT": {
      if (state - 1 < 0) {
        return 0;
      } else {
        return state - 1;
      }
    }
    case "SET":
      if (state < 0) {
        return 0;
      } else {
        return action.payload;
      }
    case "RESET":
      return 0;
    default:
      return state;
  }
}

export default function Slider() {
  const [step, setStep] = useState(10);
  //const [value, setValue] = useState(1);
  const [value, dispatch] = useReducer(reducer, 0);

  function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    setStep(parseInt(e.target.value));
  }
  function handlePlusClicked() {
    // setValue(value + step);
    dispatch({ type: "INCREMENT", payload: 0 });
  }

  function handleMinesClicked() {
    dispatch({ type: "DECREMENT", payload: 0 });
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;

    if (/^-?\d+$/.test(text)) {
      //setValue(parseInt(text));
      dispatch({ type: "SET", payload: Number(text) });
    } else {
      dispatch({ type: "SET", payload: 0 });
      //setValue(0);
    }
  }

  return (
    <>
      <VerticalLayout spacing="2" padding="4">
        <HorizontalLayout>
          <input
            id="minmax-range"
            type="range"
            min="1"
            max="100"
            value={step}
            step="1"
            onChange={(e) => handleSliderChange(e)}
            className="
          w-64 h-2
          bg-gray-200
          rounded-lg
          appearance-none
          cursor-pointer
          accent-blue-500
        "
          />
          <label htmlFor="range" className="text-lg font-medium">
            Value: {step}
          </label>
        </HorizontalLayout>
        <HorizontalLayout spacing="4" padding="4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={() => handlePlusClicked()}
          >
            +
          </button>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={value < 0 ? "" : value}
            onChange={handleChange}
          />

          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={() => handleMinesClicked()}
          >
            -
          </button>
        </HorizontalLayout>
        <CurrentDate value={value}></CurrentDate>
      </VerticalLayout>
    </>
  );
}
