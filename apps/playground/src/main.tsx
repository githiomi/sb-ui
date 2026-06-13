import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SbUiProvider } from '@dgithiomi/sbui-web';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SbUiProvider>
            <App />
        </SbUiProvider>
    </StrictMode>
);
