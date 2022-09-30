import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/system";

const ChecklistIndex = () => {
  const [checklist, setChecklist] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/checklist")
      .then((response) => {
        setChecklist(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {checklist &&
        checklist.map((list) => (
          <Box
            className="checklist-card"
            sx={{
              position: "relative",
              width: 0.4,
              padding: 3,
              marginY: 5,
              borderRadius: 2,
            }}
          >
            <Link to={`checklist/${list._id}`}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  position: "absolute",
                  top: 8,
                  right: -15,
                }}
              >
                <InfoIcon sx={{ color: "gray" }} />
              </Box>
            </Link>
            <h1>{list.title}</h1>
            <h2>{list.description}</h2>
            <input type="checkbox" checked={list.completed} />
          </Box>
        ))}
    </Box>
  );
};

export default ChecklistIndex;
