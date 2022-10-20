import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import { Checkbox, FormLabel, Button } from "@mui/material";
import axios from "axios";
import { useChecklistContext } from "../hooks/useChecklistContext";

const Checklist = ({ id, title, description, completed }) => {
  const { dispatch } = useChecklistContext();
  const [checked, setChecked] = useState(false);

  // const handleChecked = () => {
  //   setChecked(completed);
  // };
  const handleDelete = () => {
    const config = {
      method: "DELETE",
      url: `http://localhost:4000/checklist/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id,
      },
    };
    axios
      .request(config)
      .then((response) => {
        dispatch({ type: "DELETE_CHECKLIST", payload: response.data });
      })
      .catch((error) => console.log(error));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const config = {
      method: "PATCH",
      url: `http://localhost:4000/checklist/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        title,
        description,
        id,
        completed: checked,
      },
    };

    axios
      .request(config)
      .then((response) => {
        setCheckedState();
        console.log("successfully updated");
      })
      .catch((error) => {
        console.log(error);
        console.log(config);
      });
  };

  const setCheckedState = () => {
    setChecked(completed);
  };

  return (
    <Box
      className="box-shadow"
      sx={{
        position: "relative",
        width: 1,
        marginBottom: 5,
        padding: 3,
        borderRadius: 2,
      }}
    >
      <Box
        onClick={handleDelete}
        sx={{ position: "absolute", top: 8, right: 50 }}
      >
        <DeleteForeverIcon
          sx={{
            transition: "all, .3s",
            color: "#ccc",
            "&:hover": {
              color: "red",
              cursor: "pointer",
            },
          }}
        />
      </Box>
      <Link to={`checklist/${id}`}>
        <Box
          sx={{
            width: 50,
            height: 50,
            position: "absolute",
            top: 3,
            right: 2,
          }}
        >
          <InfoIcon sx={{ color: "lightgray" }} />
        </Box>
      </Link>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <Box sx={{ position: "absolute", right: "2%", bottom: "5%" }}>
        <form onSubmit={handleUpdate}>
          <FormLabel>Completed?</FormLabel>
          <Checkbox
            checked={checked}
            onChange={() => setChecked((state) => !state)}
          />
          <Button type="submit">update</Button>
        </form>
      </Box>
      {/* <Checkbox checked={checked} onChange={handleChecked}/> */}
      <input type="checkbox" checked={completed} />
    </Box>
  );
};

export default Checklist;
