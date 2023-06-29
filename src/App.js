import React from "react";
import "./App.css";
import DataTable from "react-data-table-component";
import { res } from "./res";
import Card from "@mui/material/Card";
import { CardContent, Typography, Grid } from "@mui/material";

function App() {
  const customStyles = {
    rows: {
      style: {
        minHeight: "108px", // override the row height
        width: "100%",
        fontSize: "16px",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#F0F0F0",
        borderBottom: "3px solid #666B73",
        fontSize: "16px",
        fontWeight: "bolder", // override the cell padding for head cells
      },
    },
    cells: {
      style: {
        width: "30%",
        paddingLeft: "16px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  const Columns = [
    {
      name: "Postion",
      selector: (row) => row.position,
    },
    {
      name: "Job Title",
      selector: (row) => row.title,
    },
    {
      name: "Skills",
      selector: (row) => row.skills,
    },
    {
      name: "Job Description",
      selector: (row) => row.jobDescription,
    },
  ];

  return (
    <>
      <Card>
        <CardContent sx={{ padding: "0px" }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            View Applicants
          </Typography>
          <Grid width="100%">
            <DataTable
              persistTableHead
              columns={Columns}
              noDataComponent={
                <Typography mt={2}>There are no past orders</Typography>
              }
              data={res}
              customStyles={customStyles}
              highlightOnHover
            />
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default App;
