import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TentTable from "../features/tents/TentTable";
import AddTent from "../features/tents/AddTent";
import Filters from "../features/tents/Filters";

function Tents() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Tents</Heading>
        <Filters />
      </Row>
      <Row>
        <TentTable />
        <AddTent />
      </Row>
    </>
  );
}

export default Tents;
