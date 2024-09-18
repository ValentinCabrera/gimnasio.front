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
                marginTop: '64px',
                padding: "30px",
                overflowY: "auto",
            }}>
                <Outlet />
            </div>
        </div>
    )
}