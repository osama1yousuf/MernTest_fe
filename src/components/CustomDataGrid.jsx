import { DataGrid } from "@mui/x-data-grid";

const CustomDataGrid = ({ rows, columns, sortState , setSortState }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      sx={{
        "& .header-bg": {
          background: "rgba(87, 188, 144, 0.3)",
          color: "rgba(87, 188, 144, 1)",
          fontSize: "13px",
          zIndex: "1 !important",
        },
        "& .MuiDataGrid-row": {
          background: "rgba(255, 255, 255, 1)",
          minHeight: "110px !important",
          alignItems: "center",
          display: "flex",
          boxShadow: "0px 3px 5px rgba(141, 141, 141, 0.1)",
          margin: "10px 0px",
          borderRadius: "10px",
        },
        "& .MuiDataGrid-cell": {
          borderTop: "none !important",
        },
        "& .MuiDataGrid-root": {
          borderStyle: "none !important",
          borderWidth: "0px !important",
        },
        "& .cell-content": {
          fontSize: "13px",
          color: "rgba(90, 95, 101, 1)",
        },
        "& .MuiDataGrid-virtualScroller ": {
          position: "initial !important",
        },
        "& .MuiDataGrid-main": {
          position: "initial !important",
        },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "transparent" // Or 'transparent' or whatever color you'd like
        }
      }}
      sortModel={sortState}
      onSortModelChange={(newSortModel) => setSortState(newSortModel)}
      autoHeight={true}
      disableColumnMenu={true}
      hideFooter={true}
      components={{
        NoRowsOverlay: () => (
          <h3
            style={{
              width: "100%",
              textAlign: "center",
              padding: "16px",
            }}
          >
            {rows?.length === 0 && "No Data Found"}
          </h3>
        ),
      }}
    />
  );
};

export default CustomDataGrid;
