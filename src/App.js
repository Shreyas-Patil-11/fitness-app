// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Home from './Pages/Home';
import ExerciseDetails from './Pages/ExerciseDetails';
import BmiCalculator from './Pages/BmiCalculation';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import '@fontsource/anton'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
import ContextProvider from './Context/Context'; // Import the ContextProvider

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Anton, Arial, sans-serif',
      fontWeight: "100"
    },
  });

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Box width='400px' sx={{width:{xl: '1488px'}}} m="auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetails />} />
            <Route path="/bmi" element={<BmiCalculator />} />
          </Routes>
          <Footer />
        </Box>
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;
