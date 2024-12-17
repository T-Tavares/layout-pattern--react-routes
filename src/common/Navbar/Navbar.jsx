import ss from './Navbar.module.css';
import {Link} from 'react-router-dom';

/* 
    Observe the address bar when you click on the links.
    If no Outlet is present the space will be empty.
*/

function Navbar() {
    // prettier-ignore
    return (
        <div className={ss.navbar}>
            <Link to="/">Home Layout Without Outlet</Link>            {/* If nothing on the route the space will be empty */}
            <Link to="/home-page">Home</Link>                         {/* Outlet Link */}
            <Link to="/promo-page">Promo</Link>                       {/* Outlet Link */}
            <Link to="/dashboard-layout/dashboard">Dashboard</Link>   {/* Go to Dashboard Layout */}
        </div>
    );
}

export default Navbar;
