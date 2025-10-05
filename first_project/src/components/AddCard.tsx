import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

type CardProps = {
  onButtonClick?: (title: string, desc: string) => void;
};

export default function AddCard(props: CardProps) {
  const [isOpen, setIsOpen] = useState(true);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // ✅ correct spelling

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    console.log("Title:", title);
    console.log("Description:", description);

    if (props.onButtonClick) {
      props.onButtonClick(title, description);
    }
  
  }
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-0">
            <div className="w-full max-w-xs">
              <form
                className="bg-white shadow-md rounded px-8 pt-5 pb-1 mb-0"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="title"
                    type="text"
                    placeholder="Username"
                  ></input>
                </div>
                <div className="mb-6">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-1">
                      Description
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="description"
                      type="text"
                      placeholder="Username"
                    ></input>
                  </div>
                  <div className="mb-6"></div>
                </div>
                <div className="mb-6">
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
