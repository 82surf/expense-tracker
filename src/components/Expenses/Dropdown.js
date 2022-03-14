import './Dropdown.css';

function Dropdown(props) {
  const dropdownHandler = (e) => {
    props.onSelectYear(+e.target.value);
  };

  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor="year-select">
        Filter by Year
      </label>
      <select
        className="dropdown__selectbox"
        name="year"
        id="year-select"
        onChange={dropdownHandler}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}

export default Dropdown;
