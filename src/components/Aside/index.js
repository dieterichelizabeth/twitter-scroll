import Search from "./Search";
import Trends from "./Trending";

function Aside() {
  return (
    <aside className="px-4 pt-2 aside--display">
      <Search />

      <Trends />
    </aside>
  );
}

export default Aside;
