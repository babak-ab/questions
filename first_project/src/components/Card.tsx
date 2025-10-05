import { useState } from "react";
import { useEffect } from "react";

import StarRate from "./StarRate";

type CardProps = {
  image: string;
  index: number;
  title: string;
  description: string;
  selected: boolean;
  onButtonClick?: (message: string) => void;
  onDeleteButtonClick?: (title: string) => void;
  onSelectedButtonClick?: (title: string) => void;
};
export default function Card(props: CardProps) {
  const [step, setStep] = useState<number>(1);
  const [title, setTitle] = useState(props.title);

  // For inner Update
  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  function handler() {
    if (props.onButtonClick) {
      setStep(step + 1);
    }
  }

  function deleteHandler() {
    console.log(props.title);
    if (props.onDeleteButtonClick) {
      props.onDeleteButtonClick(props.title);
    }
  }

  function selectedHandler(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.checked);
    if (props.onSelectedButtonClick) {
      props.onSelectedButtonClick(props.title);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  return (
    <div className="h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <a href="#">
        <img
          onClick={() => props.onButtonClick && handler()}
          className="rounded-t-lg w-full h-48 object-cover"
          src={props.image}
          alt={props.title}
        />
      </a>
      <div className="p-1 flex-1 flex flex-col justify-between">
        <div>
          <a href="#">
            <div className="flex items-center border justify-between gap-8 ">
              <h5
                className={`flex mb-1 text-2xl font-bold tracking-tight text-gray-900 ${
                  props.selected && "line-through"
                }  dark:text-white`}
              >
                {title} {step}
              </h5>
              <StarRate />
            </div>
          </a>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
          <div className="w-full max-w-sm min-w-[200px] flex space-x-1 p-1 ">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              onChange={selectedHandler}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Default checkbox
            </label>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm min-w-[200px] flex space-x-1 p-1">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Write Title"
          onChange={handleChange}
        />
        <button
          className="rounded-2xl bg-red-600 px-4 py-2 font-bold leading-none text-white"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
