import { useSearchParams } from "react-router-dom";

import PropTypes from "prop-types";

import Select from "./Select";

function SortBy({ options, type }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortedBy = searchParams.get(type) || "";

  function handleChange(e) {
    searchParams.set(type, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select options={options} curValue={sortedBy} onChange={handleChange} />
  );
}
SortBy.propTypes = {
  options: PropTypes.array,
  type: PropTypes.string,
};
export default SortBy;
