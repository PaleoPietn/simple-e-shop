import CartButton from "./CartButton";
import HomeButton from "./HomeButton";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="shadow">
      <div className="container mx-4 px-4 py-4 flex items-center justify-between">
        <div>
          <HomeButton />
        </div>

        <div className="flex flex-1 justify-center">
          <SearchBar />
        </div>

        <div>
          <CartButton />
        </div>
      </div>
    </header>
  );
}
