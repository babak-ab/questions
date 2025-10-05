function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
        M
      </div>
      <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
        Movie
      </span>
    </div>
  );
}

function SearchBar() {
  return (
    <form className=" min-w-[300px]">
      <label
       
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
       
      </div>
    </form>
  );
}

export default function Navbar() {
  return (
    <>
      <header className="">
        <nav className="flex justify-between bg-white border-gray-200 px-1 lg:px-1 py-1 dark:bg-gray-800">
          <Logo />
          <SearchBar />
        </nav>
      </header>
    </>
  );
}
