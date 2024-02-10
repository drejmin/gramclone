import { Routes, Route } from 'react-router-dom';

import AuthLayout from './_auth/AuthLayout';
import SignUpForm from './_auth/forms/SignUpForm';
import SigninForm from './_auth/forms/SigninForm';
import RootLayout from './_root/RootLayout';

import { Home } from './_root/pages';

import './globals.css';

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* {public routes} */}
            <Route element={<AuthLayout />} >
                <Route path= "/sign-in" element={<SigninForm/>} />
                <Route path= "/sign-up" element={<SignUpForm/>} />
            </Route>

            {/* private routes */}
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>

    </main>
  )
}

export default App