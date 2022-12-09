import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () =>{
    const user = 'ravi'
    return (
        <div>
            <h1> Welcome Dashboard</h1>

            <Link  to={`/About/john/${user}`}>Dashboard</Link>
        </div>
    )
}
export default Dashboard;