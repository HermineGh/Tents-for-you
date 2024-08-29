import { useSearchParams } from "react-router-dom";

import { useTents } from "./useTents";

import Spinner from "../../ui/Spinner";
import TentRow from "./TentRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";

function TentTable() {
  const { isLoading, tentsData } = useTents();
  const [searchParams] = useSearchParams();

  //spinner
  if (isLoading) return <Spinner />;
  if (!tentsData) return <Empty resource="tents" />;

  //filter
  let tents;
  const type = searchParams.get("filter") || "all";
  if (type === "all") tents = tentsData;
  if (type === "no-discount")
    tents = tentsData.filter((el) => el.discount === 0);
  if (type === "with-discount")
    tents = tentsData.filter((el) => el.discount > 0);

  //sortBy
  const sortBy = searchParams.get("sortBy") || "";
  const [sortName, direction] = sortBy.split("-");
  const sortDirection = direction === "asc" ? 1 : -1;
  const sortedTent = tents.sort(
    (a, b) => (a[sortName] - b[sortName]) * sortDirection
  );
  return (
    <Table columns=" 0.9fr 0.8fr 1fr 0.8fr 0.7fr 1fr">
      <Table.Header>
        <div></div>
        <div>Tent</div>
        <div>Guests</div>
        <div>Price</div>
        <div>Discount</div>
      </Table.Header>
      <Table.Body
        // data={tents}
        data={sortedTent}
        render={(tent) => <TentRow tent={tent} key={tent.id} />}
      />
    </Table>
  );
}

export default TentTable;
