import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// main.tsx
import App from './App'; // 👈 확장자 없이

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
