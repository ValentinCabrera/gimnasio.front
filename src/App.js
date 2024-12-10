import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./dashboards/Dashboard";
import { UserProvider } from "./contexts/UserContext";
import PrivateRoute from './dashboards/PrivateRoute';
import PrivateDashboard from './dashboards/PrivateDashboard';
import RoutesDash from './dashboards/Dashboard';

export default function App() {

  return (
      <UserProvider>
        <RoutesDash/>
      </UserProvider>

  )
}
