import React from "react";
import Provider from "./context/Provider";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Screen from "./screen/Screen";
import Navbar from "./components/navigation/Navbar";
import HomeLanding from "./components/container/home/HomeLanding";
import AboutUs from "./components/container/about/About";
import Product from "./components/container/products/Product";
import ContactUs from "./components/container/contact_us/Contact";
import LoanEligibilityCalculator from "./components/container/scenes/calculator";
import CalculatorPage from "./components/container/scenes/CalculatorPage";
import HomeLoan from "./components/container/scenes/Homeloan";
import Login from "./components/container/auth/Login";
import PhoneSignUp from "./components/container/auth/PhoneSignUp";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Home from "./components/container/home/Home";
import './App.css'
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Screen>
          <Routes>
            <Route path="/" element={<HomeLanding />} />
            <Route path="/home" element={<HomeLanding />} />ok
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/calculator" element={<LoanEligibilityCalculator />} />
            <Route path="/calculatorpage" element={<CalculatorPage />} />
            <Route path="/homeloan" element={<HomeLoan />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/homebackend" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
            />
          </Routes>
        </Screen>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
