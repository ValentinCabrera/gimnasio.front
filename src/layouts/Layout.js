import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    const isLogin = true

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}>
            {isLogin && <Header />}
            <div style={{
                flex: 1,
                marginTop: '0px',
                padding: "0px",
                overflowY: "auto",
                overflowX: 'hidden',
            }}>
                <Outlet />
            </div>
        </div>
    )
}