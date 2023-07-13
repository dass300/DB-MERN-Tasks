import "./searchlist.css";
export const SearchList = ({ searchList }) => {
  return (
    <div className="searchList-container">
      {Object.values(searchList).map((data) => (
        <div key={data.id} className="searchList-items">
          <button>
            <img
              width={"42px"}
              height={"42px"}
              style={{ objectFit: "contain" }}
              src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
              alt=""
            />
          </button>
          <p className="title">{data.title} </p>
        </div>
      ))}
    </div>
  );
};
