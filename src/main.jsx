import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RouterConfig from "@/RouterConfig";
import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>,
)
