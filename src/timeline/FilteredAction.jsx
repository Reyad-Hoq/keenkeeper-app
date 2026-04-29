import { IoMdArrowDropdown } from "react-icons/io";

const FilteredAction = ({ setSortingType }) => {

  return (
    <div >
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
    </div>
  );
};

export default FilteredAction;