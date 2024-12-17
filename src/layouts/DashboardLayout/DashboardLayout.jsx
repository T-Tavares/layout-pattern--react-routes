import ss from './DashboardLayout.module.css';
import {Outlet} from 'react-router-dom';
import Sidebar from '../../common/Sidebar/Sidebar';

/* 
    Even though I'm importing the Sidebar Component and passing Outlet as "Children"
    I still prefere to have the divs to set out the layout structure and limits.
*/

function DashboardLayout() {
    return (
        <>
            <div className={ss.dashboardLayout}>
                <div className={ss.sidebar}>
                    <Sidebar />
                </div>
                <div className={ss.outlet}>
                    <Outlet />
                </div>
                <div className={ss.footer}>Footer</div>
            </div>
        </>
    );
}

export default DashboardLayout;
