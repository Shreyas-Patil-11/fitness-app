import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { Container, Typography, TextField, Button, Paper, Box } from "@mui/material";
import Loader from "../Components/Loader";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiValue, setBmiValue] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const { calculateBmiAndFetchAdvice, bmiDetails } = useContext(Context);

  const handleCalculate = async () => {
    if (weight && height) {
      setLoading(true); // Start loading
      const heightInMeters = height / 100; // Convert height to meters
      const calculatedBmi = weight / (heightInMeters * heightInMeters);
      let category = '';

      if (calculatedBmi < 18.5) {
        category = 'Underweight';
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        category = 'Normal weight';
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        category = 'Overweight';
      } else {
        category = 'Obesity';
      }

      setBmiValue(calculatedBmi.toFixed(2));
      setBmiCategory(category);

      await calculateBmiAndFetchAdvice(parseFloat(weight), parseFloat(height));

      setLoading(false); // End loading
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Paper elevation={6} sx={{ padding: 3, maxWidth: '100%', width: '100%', bgcolor: 'linear-gradient(to right, #a1c4fd, #c2e9fb)', borderRadius: '12px' }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: '#333', fontWeight: 'bold' }}>
          BMI Calculator
        </Typography>
        
        {/* Input Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          mb: 4, 
          maxWidth: { xs: '100%', sm: '70%', md: '60%' }, 
          mx: 'auto' 
        }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Weight (kg)"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            sx={{ 
              bgcolor: '#ffffff', 
              borderRadius: '8px', 
              '& .MuiOutlinedInput-root': { 
                bgcolor: '#ffffff', 
                borderRadius: '8px',
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FF3D3D', // Change outline color to red on focus
                }
              },
              '& .MuiInputLabel-root': {
                color: '#333', // Change label color to red
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#FF3D3D', // Ensure label color remains red on focus
              }
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Height (cm)"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            sx={{ 
              bgcolor: '#ffffff', 
              borderRadius: '8px', 
              '& .MuiOutlinedInput-root': { 
                bgcolor: '#ffffff', 
                borderRadius: '8px',
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FF3D3D', // Change outline color to red on focus
                }
              },
              '& .MuiInputLabel-root': {
                color: '#333', // Change label color to red
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#FF3D3D', // Ensure label color remains red on focus
              }
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 2, bgcolor: '#FF3D3D', '&:hover': { bgcolor: ' #FF6F61' } }}
            onClick={handleCalculate}
          >
            Calculate BMI
          </Button>
        </Box>

        {/* BMI Results */}
        {bmiValue !== null && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            <Typography variant="h6" gutterBottom align="center" sx={{ mt: 3, color: '#333', fontWeight: 'bold' }}>
              Your BMI: {bmiValue}
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: '#555' }}>
              Category: {bmiCategory}
            </Typography>
          </Box>
        )}

        {/* BMI Details */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
            <Loader />
          </Box>
        ) : (
          bmiDetails && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 2,
                backgroundColor: '#e1f5fe',
                borderRadius: 2,
                boxShadow: 3,
                width: '100%', // Keep this box the same size
              }}
            >
              <Typography variant="h6" gutterBottom align="center" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>
                BMI Details
              </Typography>
              {bmiDetails.split('\n').filter(detail => detail.trim() !== '').map((detail, index) => (
                <Typography key={index} variant="body1" sx={{ mb: 1, color: '#333' }}>
                  {index + 1}. {detail}
                </Typography>
              ))}
            </Box>
          )
        )}
      </Paper>
    </Container>
  );
};

export default BmiCalculator;
