import React from 'react';
import { createRoot } from 'react-dom/client';
import '../global.css';
import { App } from './app';

const container = document.getElementById('index');
const root = createRoot(container);
root.render(<App />);
