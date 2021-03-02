import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import monkey from "../../monkey.svg";
import styles from "./DashboardStyles";

function Dashboard() {
  const dashboardStyles = styles();
  return (
    <div className={dashboardStyles.Dashboard}>
      <body>
        <img src={monkey} className={dashboardStyles.Applogo} alt="monkey" />
        <Button variant="contained">
          <Link to="/portfolio">Portfolio</Link>
        </Button>
      </body>
    </div>
  );
}
export default Dashboard;
