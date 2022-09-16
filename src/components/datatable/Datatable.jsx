import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
// import { useState } from "react";



const Datatable = ({ columns, sources, title }) => {
    const { data, loading, error } = useFetch("/users")
    // const [data, setData] = useState(sources);

    const handleDelete = (id) => {
        // setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/" + title + "/" + params.row.id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New {title}
                <Link
                    to={"/" + title + "/new"}
                    className="link"
                >
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={sources}
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div >
    );
};

export default Datatable;