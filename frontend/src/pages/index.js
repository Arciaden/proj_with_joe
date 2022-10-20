import { useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import Checklist from "../components/checklist";
import CreateCheckListForm from "../components/createCheckListForm";
import { useChecklistContext } from "../hooks/useChecklistContext";

const ChecklistIndex = () => {
  const { checklist, dispatch } = useChecklistContext();
  // const [checklist, setChecklist] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/checklist")
      .then((response) => {
        // setChecklist(response.data);
        const checklistData = response.data
        dispatch({ type: "SET_CHECKLIST", payload: checklistData})
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box sx={{ display: "flex", padding: "50px"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "left",
          flexDirection: "column",
          marginX: "50px",
          width: "60%"
        }}
      >
        {checklist &&
          checklist.map((list) => (
            <Checklist
              key={list._id}
              id={list._id}
              title={list.title}
              description={list.description}
              completed={list.completed}
            />
          ))}
      </Box>
        <Box>
        <CreateCheckListForm />
        </Box>
    </Box>
  );
};

export default ChecklistIndex;
