import ss from './Sidebar.module.css';
import {Link} from 'react-router-dom';

function Sidebar() {
    // prettier-ignore
    return (
        <div className={ss.sidebar}>
            <Link to="/home-page">Back to Home</Link>                                 {/* Back to Home Layout */}
            <Link to="/dashboard-layout/dashboard">Dashboard</Link>                   {/* Outlet Link */}
            <Link to="/dashboard-layout/dashboard-feature">Dashboard Feature</Link>   {/* Outlet Link */}
            <Link to="/dashboard-layout">Dashboard Without Outlet</Link>              {/* If nothing on the route the space will be empty */}
        </div>
    );
}

export default Sidebar;
