import { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      {checklist &&
        checklist.map((list) => (
          <>
            <h1>{list.title}</h1>
            <h2>{list.description}</h2>
            <input type="checkbox" checked={list.completed} />
          </>
        ))}
    </div>
  );
};

export default ChecklistIndex;
