import { IoMdArrowDropdown } from "react-icons/io";

const FilteredAction = ({ setSortingType, setSortOrder, sortOrder }) => {

  return (
    <div className="space-y-3">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn px-10 py-5 rounded-lg shadow">Filtered Timeline <IoMdArrowDropdown />
        </div>
        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={() => setSortingType("")}><a>All</a></li>
          <li onClick={() => setSortingType("call")}><a>Call</a></li>
          <li onClick={() => setSortingType("text")}><a>Text</a></li>
          <li onClick={() => setSortingType("video")}><a>Video</a></li>
        </ul>
      </div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortOrder("newest")}
          className={sortOrder === "newest" ? "bg-[#244D3F] text-white px-3 py-1 rounded" : "bg-gray-200 px-3 py-1 rounded"}
        >
          Newest
        </button>

        <button
          onClick={() => setSortOrder("oldest")}
          className={sortOrder === "oldest" ? "bg-[#244D3F] text-white px-3 py-1 rounded" : "bg-gray-200 px-3 py-1 rounded"}
        >
          Oldest
        </button>
      </div>
    </div>
  );
};

export default FilteredAction;