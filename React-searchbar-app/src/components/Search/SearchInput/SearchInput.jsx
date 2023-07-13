import "./searchinput.css";
export const SearchInput = ({
  handleChange,
  searchInputValue,
  clearSearch,
}) => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Search here..."
        autoFocus
        onChange={handleChange}
        value={searchInputValue}
      />
      {searchInputValue && (
        <button onClick={clearSearch}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHSzLIBDZmGRTpg7qhJVnb7dXNSmTbB6FnD5WmHXh_A&s"
            alt="/"
          />
        </button>
      )}
    </div>
  );
};
