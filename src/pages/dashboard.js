import Header from "../components/header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";

const Dashboard = () =>{

    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    )
};

export default Dashboard;