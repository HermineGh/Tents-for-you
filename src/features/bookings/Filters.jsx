import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function Filters() {
  return (
    <TableOperations>
      <Filter
        type="status"
        values={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        type="sortBy"
        options={[
          { value: "checkInDate-desc", label: "Sort by date (recent first)" },
          { value: "checkInDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalprice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalprice-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default Filters;
