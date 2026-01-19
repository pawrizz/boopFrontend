import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.css";
import "./styles/layout.css";
import "./styles/base.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing in index.html');
createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
