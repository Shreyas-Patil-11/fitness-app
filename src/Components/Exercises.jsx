import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography, CircularProgress } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Add loading state
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        let exercisesData = [];
        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`, exerciseOptions);
        }
        setExercises(exercisesData);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };
  
    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box
      id='exercises'
      sx={{ mt: { lg: '110px' }, p: '20px', backgroundColor: '#000000' }} // Dark background
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: '44px', xs: '30px' }, color: '#FFFFFF' }} // White color
        mb="46px"
      >
        Showing Results
      </Typography>
      
      {loading ? ( // Show loader if loading is true
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{ height: '60vh' }}
        >
          <Loader /> {/* Loader */}
        </Stack>
      ) : (
        <>
          <Stack
            direction='row'
            sx={{ gap: { lg: '110px', xs: '50px' }, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {currentExercise.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
          </Stack>

          <Stack mt='100px' alignItems='center'>
            {exercises.length > 9 && (
              <Pagination
                color='primary'
                shape='rounded'
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size='large'
                sx={{ 
                  '& .MuiPaginationItem-root': { // Pagination item styles
                    color: '#FFFFFF' // White color for text
                  },
                  '& .MuiPaginationItem-page.Mui-selected': { // Selected page color
                    backgroundColor: '#FF2625', // Electric Red
                    color: '#FFFFFF',
                  },
                  '& .MuiPaginationItem-ellipsis': { // Ellipsis color
                    color: '#FFFFFF',
                  }
                }}
              />
            )}
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Exercises;
