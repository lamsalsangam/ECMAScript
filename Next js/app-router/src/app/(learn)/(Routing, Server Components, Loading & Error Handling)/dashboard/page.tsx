import { AuthRequiredError } from "@/lib/exceptions";
import { FC } from "react";

interface DashboardProps {}

const session = null;
const Dashboard: FC<DashboardProps> = ({}) => {
  if (!session)
    // throw new Error("Authentication required to access this resources");
    throw new AuthRequiredError();
  return <div>Dashboard This is the auth only page</div>;
};

export default Dashboard;
