import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import router from './Routes/Routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <div className='max-w-[1440px] mx-auto bg-gradient-to-r from-green-500 via-green-300'>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
    </div>
    </div>
  );
}

export default App;
