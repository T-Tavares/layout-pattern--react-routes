import {Outlet} from 'react-router-dom';
import ss from './HomeLayout.module.css';
import Navbar from '../../common/Navbar/Navbar';

/* 
    Even though I'm importing the Sidebar Component and passing Outlet as "Children"
    I still prefere to have the divs to set out the layout structure and limits.
*/

function HomeLayout() {
    return (
        <div className={ss.homeLayout}>
            <div className={ss.navbar}>
                <Navbar />
            </div>
            <div className={ss.outlet}>
                <Outlet />
            </div>
            <div className={ss.footer}>Footer</div>
        </div>
    );
}

export default HomeLayout;
