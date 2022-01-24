import { Link } from "react-router-dom";

function Search() {
  return (
    <form className="form-header" action="" method="POST">
      <input
        className="au-input au-input--xl"
        type="text"
        name="search"
        placeholder="Search for datas &amp; reports..."
      />
      <button className="au-btn--submit" type="submit">
        <i className="zmdi zmdi-search"></i>
      </button>
    </form>
    //HEADER DESKTOP
  );
}

export default Search;
