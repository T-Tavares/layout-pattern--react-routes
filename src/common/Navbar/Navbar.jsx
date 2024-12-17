import ss from './Navbar.module.css';
import {Link} from 'react-router-dom';

function Navbar() {
    // prettier-ignore
    return (
        <div className={ss.navbar}>
            <Link to="/home-page">Home</Link>                         {/* Outlet Link */}
            <Link to="/promo-page">Promo</Link>                       {/* Outlet Link */}
            <Link to="/dashboard-layout/dashboard">Dashboard</Link>   {/* Go to Dashboard Layout */}
        </div>
    );
}

export default Navbar;
