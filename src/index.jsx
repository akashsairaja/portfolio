import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import Loader from './components/Loader';
import App from './screens';

// Import custom styles
import './scss/style.scss';

const RootApp = () => (
	<Suspense fallback={<Loader/>}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	</Suspense>
);

// Create root using React 18 createRoot API
const root = ReactDOM.createRoot(document.getElementById('root-react'));
root.render(<RootApp />);
