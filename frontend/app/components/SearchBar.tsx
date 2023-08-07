export default function Searchbar () {
  return(
    <div className="w-full max-w-md text-slate-800">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
      />
    </div>
  )
}