import { useState, useEffect } from "react";

type CardProps = {
  numSelected: number;
  children: React.ReactNode;
  onButtonClick?: () => void;
};

export default function Header(props: CardProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  function handleClicked() {
    if (props.onButtonClick) props.onButtonClick();
  }
  // Format date and time
  const formattedDate = currentTime.toLocaleDateString(); // e.g., 9/20/2025
  const formattedTime = currentTime.toLocaleTimeString(); // e.g., 10:15:30 AM

  return (
    <header className="bg-blue-600 dark:bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={handleClicked}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 
                 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>

        <p className="mb-0 font-normal text-gray-100 dark:text-gray-400">
          {props.numSelected}
        </p>
      </div>
      {props.children}
      <div className="text-sm">
        {formattedDate} {formattedTime}
      </div>
    </header>
  );
}
