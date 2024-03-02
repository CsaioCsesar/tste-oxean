import * as React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { filterBy } from "@progress/kendo-data-query";
import produtos from "../produtos.json";

const initialFilter = {
  logic: "and",
  filters: [
    {
      field: "id",
      operator: "contains",
      value: "",
    },
  ],
};
const DataFetching = () => {
  const [filter, setFilter] = React.useState(initialFilter);
  return (
    <Grid
      style={{
        height: "820px",
      }}
      data={filterBy(produtos, filter)}
      filterable={true}
      filter={filter}
      onFilterChange={(e) => setFilter(e.filter)}
    >
      <Column field="id" title="ID" filterable={false} width="60px" />
      <Column field="title" title="Product Name" width="240px" />
      
      <Column field="price" width="180px" filter="numeric" format="{0:c}" />
      <Column field="rating" width="190px" filter="boolean" />
      <Column field="stock" width="190px" filter="boolean" />
      <Column field="category" width="190px" filter="boolean" />
      <Column field="description" width="190px" filter="boolean" />

    </Grid>
  )}
  export default DataFetching;