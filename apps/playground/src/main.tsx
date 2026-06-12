import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SbuiProvider } from '@dgithiomi/sbui-web';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SbuiProvider>
            <App />
        </SbuiProvider>
    </StrictMode>
);
