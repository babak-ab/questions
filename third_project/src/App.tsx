import Headers from "./components/Header";
import "./App.css";
import { useEffect, useState } from "react";
import VerticalLayout from "./components/VerticalLayout";
import HorizontalLayout from "./components/HorizontalLayout";

export interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface TriviaResponse {
  response_code: number;
  results: TriviaQuestion[];
}

class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "HttpError"; // useful for debugging
    this.status = status;
  }
}

function decodeHtml(html: string): string {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
export function TriviaQuiz() {
  const [questions, setQuestions] = useState<TriviaQuestion[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchTrivia() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10");

        // ✅ Handle all non-2xx statuses
        if (!response.ok) {
          throw new HttpError(
            response.status,
            `HTTP error! Status: ${response.status} (${response.statusText})`
          );
        }

        const data: TriviaResponse = await response.json();

        // ✅ API-specific error check (OpenTDB has `response_code`)
        if (data.response_code !== 0) {
          throw new Error("OpenTDB API returned a non-success code.");
        }

        setQuestions(data.results);
      } catch (err) {
        if (err instanceof HttpError) {
          setError(`Failed to fetch: ${err.message}`);
        } else if (err instanceof Error) {
          setError(`Unexpected error: ${err.message}`);
        } else {
          setError("Unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchTrivia();
  }, []);
  if (loading) {
    return (
      <HorizontalLayout spacing="2">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
        <p>Loading Questions...</p>
      </HorizontalLayout>
    );
  }

  if (error) {
    return (
      <HorizontalLayout spacing="2">
        <div
          className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
          role="alert"
        >
          <svg
            className="shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">{error}!</span>
          </div>
        </div>
      </HorizontalLayout>
    );
  }

  if (!questions) {
    return (
      <HorizontalLayout spacing="2">
        <div
          className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
          role="alert"
        >
          <svg
            className="shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">No Data!</span>
          </div>
        </div>
      </HorizontalLayout>
    );
  }

  return (
    <div className="space-y-4 p-4">
      {questions.map((q, i) => (
        <div key={i} className="border rounded p-4">
          <h2 className="font-semibold">
            {i + 1}. {decodeHtml(q.question)}
          </h2>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="flex h-screen w-auto m-0 p-0  flex">
      <VerticalLayout border={false} fillWidth={true} align="left" spacing="4">
        <Headers />
        <div className="p-10">
          <TriviaQuiz />
        </div>
      </VerticalLayout>
    </div>
  );
}

export default App;
