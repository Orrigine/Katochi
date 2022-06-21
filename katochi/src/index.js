import React from 'react';
import ReactDOM  from 'react-dom/client';
import './css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from "./theme/themeContext";

import './fonts/AdigianaUI.ttf';
import './fonts/ARLRDBD.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider>
    <App />
</ThemeProvider>
);