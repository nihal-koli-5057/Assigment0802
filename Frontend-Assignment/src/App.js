// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginForm from './components/LoginForm';
import AddressForm from './components/AddressForm';
import SubmittedData from './components/SubmittedData';
import PrivateRoute from './components/PrivateRoute';
import RegistrationForm from './components/RegistrationForm';
import store from './redux/store/store';
import HomePage from './components/HomePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <PrivateRoute path="/home" element={<HomePage />} />
          <PrivateRoute path="/address" element={<AddressForm />} />
          <PrivateRoute path="/submitted-data" element={<SubmittedData />} />
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<RegistrationForm />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
