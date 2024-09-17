import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link 
    className="exercise-card" 
    to={`/exercise/${exercise.id}`}
    style={{ textDecoration: 'none' }}  // This will remove the underline
  >
    <img 
      src={exercise.gifUrl} 
      alt={exercise.name} 
      loading="lazy" 
      style={{ width: '100%', borderRadius: '10px' }} // Optional: Add rounded corners
    />
    <Stack direction="row" spacing={1} mt="10px" ml="10px">
      <Button 
        sx={{ 
          color: '#FFFFFF', // White text
          backgroundColor: '#FF2625', // Electric Red
          fontSize: '14px', 
          borderRadius: '20px', 
          textTransform: 'capitalize',
          padding: '5px 10px',
          ':hover': {background:'white', color: '#FF2625'}
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button 
        sx={{ 
          color: '#FFFFFF', // White text
          backgroundColor: '#32CD32', // Vibrant Green
          fontSize: '14px', 
          borderRadius: '20px', 
          textTransform: 'capitalize',
          padding: '5px 10px',
          ':hover': {background:'white', color: '#32CD32'}
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography 
      ml="10px" 
      color="black" // Off-White for better contrast
      fontWeight="bold" 
      sx={{ fontSize: { lg: '24px', xs: '20px' } }} 
      mt="11px" 
      pb="10px" 
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
