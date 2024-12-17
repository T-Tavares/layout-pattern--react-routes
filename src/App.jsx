import './App.css';
import {Routes, Route} from 'react-router-dom';

import HomeLayout from './layouts/HomeLayout/HomeLayout';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';

import Home from './pages/Home/Home';
import PromoPage from './pages/PromoPage/PromoPage';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardFeature from './pages/DashboardFeature/DashboardFeature';

/* 
    Routes that hold Layouts should not be self-closing. 
    Because they need children to be passed to The Outlet component.
*/

function App() {
    // prettier-ignore
    return (
        <>
            <Routes>
                {/* // --------------------- HOME LAYOUT -------------------- // */}
                <Route path="/" element={<HomeLayout />}>                              {/* Layout Route Component */}
                    <Route path="home-page" element={<Home />} />                      {/* Outlet Route Component */}
                    <Route path="promo-page" element={<PromoPage />} />                {/* Outlet Route Component */}
                </Route>
                {/* // ------------------ DASHBOARD-LAYOUT ------------------ // */}
                <Route path="/dashboard-layout" element={<DashboardLayout />}>         {/* Layout Route Component */}
                    <Route path="dashboard" element={<Dashboard />} />                 {/* Outlet Route Component */}
                    <Route path="dashboard-feature" element={<DashboardFeature />} />   {/* Outlet Route Component */}
                </Route>
            </Routes>
        </>
    );
}

export default App;
