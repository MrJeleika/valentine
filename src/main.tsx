import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { No } from './components/No.tsx';
import { Yes } from './components/Yes.tsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: 'no', element: <No /> },
  { path: 'yes', element: <Yes /> }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
