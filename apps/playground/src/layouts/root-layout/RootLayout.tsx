import { Outlet } from 'react-router-dom';
import { Sidebar, TopBar } from './components';

export function RootLayout() {
    return (
        <div className="flex h-screen flex-col overflow-hidden bg-canvas text-fg">
            <TopBar />
            <div className="flex min-h-0 flex-1">
                <Sidebar />
                <main className="min-w-0 flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
