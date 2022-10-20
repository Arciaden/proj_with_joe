import {
  FormControl,
  TextareaAutosize,
  TextField,
  Button,
  Checkbox
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useChecklistContext } from "../hooks/useChecklistContext";

const CreateCheckListForm = () => {
  const { dispatch } = useChecklistContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      url: "http://localhost:4000/checklist",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        title,
        description,
      },
    };
    axios
      .request(config)
      .then((response) => {
        setIsLoading(false);
        setSuccess(true);
        dispatch({ type: "CREATE_CHECKLIST", payload: response.data})
        setTitle("");
        setDescription("");
      })
      .catch((error) => setError(true));
  };

  return (
    <Box>
      <form className="create-form" onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            id="outlined-basic"
            label="Checklist Title"
            ariant="outlined"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            sx={{ marginBottom: 2}}
          />
        </FormControl>
        <FormControl>
          <TextareaAutosize
            aria-label="Checklist Description"
            placeholder="Checklist Description"
            style={{ width: 400, height: 200, marginBottom: 20 }}
            onChange={(e) => {
                setDescription(e.target.value);
            }}
            value={description}
          />
        </FormControl>
        <Button variant="contained" type="submit">
          Contained
        </Button>
      </form>
    </Box>
  );
};

export default CreateCheckListForm;
