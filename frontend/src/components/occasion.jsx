import React, { useEffect } from 'react';
import Navbar from './navbar'; // Ensure the path is correct
import Footer from './footer'; // Ensure the path is correct
import styled from 'styled-components';
import { useRestaurantStore } from '../stores/restaurantStore'; // Ensure the path is correct
import { Link } from 'react-router-dom'; 

// Styled components, change to fit our stylingschema
const PageContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: #FFF0F3; /* Your chosen color */
  min-height: 100vh; /* Make sure it covers the full height of the viewport */
`;

const TitleContainer = styled.div`
  text-align: center; /* Centers the title text */
  margin-bottom: 20px; /* Adds some space between the title and the buttons */
  color: #800F2F;
  font-family: Montserrat, sans-serif;
`;

const NextButton = styled.button`
background-color: #FFCCD5;
  color: #800F2F;
  padding: 10px 20px; /* Some padding */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer/hand icon */
  text-align: center; /* Center the text */
  text-decoration: none; /* No underline */
  display: inline-block; /* Inline block element */
  font-size: 16px; /* Font size */
  margin: 4px 2px; /* Margin around the button */
  transition-duration: 0.4s; /* Transition for hover effect */


  &:hover {
    background-color: #FF8FA3;
    color: #590D22;
  }

  &:active {
    transform: translateY(1px);
    
  }
`;

const OccasionButton = styled.button`
background-color: #FFCCD5;
  color: #800F2F;
  padding: 10px 20px; /* Some padding */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer/hand icon */
  text-align: center; /* Center the text */
  text-decoration: none; /* No underline */
  display: inline-block; /* Inline block element */
  font-size: 16px; /* Font size */
  margin: 4px 2px; /* Margin around the button */
  transition-duration: 0.4s; /* Transition for hover effect */
  background-color: ${props => props.selected ? '#FF8FA3' : '#FFCCD5'};

  &:hover {
    background-color: #FF8FA3;
    color: #590D22;
  }

  &:active {
    transform: translateY(1px);
  }
`; 
const OccasionSelectorContainer = styled.div`
  display: flex; /* Enables Flexbox */
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  justify-content: space-around; /* Distributes space around items */
  align-items: flex-start; /* Aligns items to the start */
  gap: 10px; /* Adds a gap between buttons */
  width: 100%; /* Ensures the container takes full width */
  max-width: 1200px; /* Sets a max-width for the container */
  margin: 0 auto; /* Centers the container in the parent */
`;



const OccasionSelector = () => {
  const { occasions, selectedOccasion, fetchOccasions, fetchMoodsForOccasion, setSelectedOccasion } = useRestaurantStore();

  useEffect(() => {
    setSelectedOccasion(null);
    fetchOccasions();
  }, [fetchOccasions, setSelectedOccasion]);

  const handleOccasionSelect = async (occasion) => {
    setSelectedOccasion(occasion);
    await fetchMoodsForOccasion(occasion); // Pass the occasion directly
  };

  return (
    <>
      <PageContainer>
        <Navbar />
        <TitleContainer>
          <h2>What's the occasion? Is it to</h2>
        </TitleContainer>
        <OccasionSelectorContainer>
          {occasions && occasions.length > 0 ? (
            occasions.map((occasion, index) => (
              <OccasionButton
                key={index}
                onClick={() => handleOccasionSelect(occasion)}
                selected={selectedOccasion === occasion}
              >
                {occasion}
              </OccasionButton>
            ))
          ) : (
            <p>Loading occasions...</p> // or some other placeholder
          )}
        </OccasionSelectorContainer>
        {selectedOccasion && (
         <Link to="/mood">
         <NextButton>
           Next
         </NextButton>
       </Link>
        )}
        <Footer />
      </PageContainer>
    </>
  );
};

export default OccasionSelector;