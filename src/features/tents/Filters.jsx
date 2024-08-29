import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function Filters() {
  return (
    <TableOperations>
      <Filter
        type="filter"
        values={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        type="sortBy"
        options={[
          { value: "name-asc", label: "name (a-z)" },
          { value: "name-desc", label: "name (z-a)" },
          { value: "price-asc", label: "price first low" },
          { value: "price-desc", label: "price first high" },
          { value: "guestsNumber-asc", label: "guestsNumber first low" },
          { value: "guestsNumber-desc", label: "guestsNumber first high" },
        ]}
      />
    </TableOperations>
  );
}

export default Filters;
