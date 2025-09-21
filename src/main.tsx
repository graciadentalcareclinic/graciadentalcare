import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TranslationProvider } from './lib/TranslationProvider';

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<TranslationProvider>
			<App />
		</TranslationProvider>
	</React.StrictMode>
);
