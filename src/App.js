import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/Home';
import Courses from './components/Courses';
import NoPage from './components/Layout/Layout';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import NotFound from './components/Payments/NotFound';
import CoursePage from './components/CoursePage';
import Profile from './components/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';

function App() {
  // To disable right click
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/course/:id" element={<CoursePage />} />
          <Route exact path="/request" element={<Request />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/updateprofile" element={<UpdateProfile />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgetpassword" element={<ForgetPassword />} />
          <Route
            exact
            path="/resetpassword/:token"
            element={<ResetPassword />}
          />

          <Route exact path="/subscribe" element={<Subscribe />} />
          <Route exact path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route exact path="/paymentfail" element={<PaymentFail />} />
          <Route exact path="/notfound" element={<NotFound />} />

          <Route exact path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
