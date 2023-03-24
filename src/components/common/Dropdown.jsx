import React, { useState } from "react";

const Dropdown = ({ selected, setSelected, items }) => {
  const [showList, setShowList] = useState(false);

  const changeSelected = (item) => {
    setSelected(item);
    setShowList(false);
  };
  return (
    <div className="relative">
      <button
        onClick={() => setShowList(true)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-stone-600 capitalize bg-stone-100 focus:ring-4 focus:outline-none focus:ring-nones rounded-sm text-sm px-4 py-2.5 w-full text-center inline-flex items-center"
        type="button"
      >
        {selected}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-full ${
          !showList && "hidden"
        }`}
      >
        <ul
          className="py-1 text-sm text-gray-700"
          aria-labelledby="dropdownDefaultButton"
        >
          {items.map((item, idx) => {
            return (
              <li onClick={() => changeSelected(item)} key={idx}>
                <p className="block px-4 py-2 hover:bg-gray-100 capitalize">
                  {item}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
