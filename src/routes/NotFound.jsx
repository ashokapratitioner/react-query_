import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2em" }}>
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        Sorry, the page you are looking for does not exist. Click here to return
        to <Link to="/">home</Link> page.
      </Typography>
    </div>
  );
};

export default NotFound;
