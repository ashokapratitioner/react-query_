import { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TodoItem = memo(({ data }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: 15 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          Name: {data.title}
        </Typography>
        <Typography variant="body2" component="p">
          Status: {data.completed ? "Completed" : "Not completed"}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default TodoItem;
