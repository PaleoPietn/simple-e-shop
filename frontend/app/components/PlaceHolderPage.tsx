import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlaceHolderPage() {
  return (
    <main className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <FontAwesomeIcon className="fill-current w-12 h-12 md:w-16 md:h-16 mr-4 md:mr-6 text-indigo-500" icon={faPersonDigging} />
        <span className="text-lg md:text-2xl text-gray-900 font-semibold">
          Under Construction
        </span>
      </div>
    </main>
  );
}
