import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: white; /* Your chosen color */
  min-height: 100vh; /* Make sure it covers the full height of the viewport */
`;

const Heading = styled.h1`
  font-size: 48px;
  color: #01999a;
  text-align: center;
  font-family: "JosefinSans";
`;

const Subheading = styled.h2`
  font-family: "JosefinSans";
  font-size: 20px;
  text-align: center;
  color: #1bc6c6;
`;

const Intro = styled.p`
  font-size: 16px;
  color: #800f2f;
  font-family: "JosefinSans";
  text-align: center;
  /* Your styles for intro paragraph */
`;
const StyledButton = styled.button`
  background-color: #fcabe3;
  color: white;
  border: solid white;
  padding: 10px 20px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  cursor: pointer; /* Pointer/hand icon */
  text-align: center; /* Center the text */
  text-decoration: none; /* No underline */
  display: inline-block; /* Inline block element */
  flex-direction: column;
  font-size: 36px; /* Font size */
  font-family: "JosefinSans";
  margin: 4px 2px; /* Margin around the button */
  transition-duration: 0.4s; /* Transition for hover effect */

  &:hover {
    background-color: white;
    color: #01999a;
    border: solid #fcabe3;
  }
`;

// <!-- HTML !-->
// <button class="button-74" role="button">Button 74</button>

const TestButton = styled.button`
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #fff;
  }

  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }

  /* @media $/ {
    min-width: 120px;
    padding: 0 25px; */
  /* } */
`;

// Define the 'Home' functional component.
const Home = () => {
  // Define text content for the heading and subheading.
  const text = {
    heading: "WHO",
    subheading: "ARE YOU DINING WITH?",
  };

  return (
    <PageContainer>
      <Navbar />
      <main>
        <Heading>{text.heading}</Heading>
        <Subheading>{text.subheading}</Subheading>
        <Intro>
          <TestButton as={Link} to="/occasion">
            Testing
          </TestButton>
          <StyledButton as={Link} to="/occasion">
            Family
          </StyledButton>
          <StyledButton as={Link} to="/occasion">
            Friends
          </StyledButton>
          <StyledButton as={Link} to="/occasion">
            Business
          </StyledButton>
          <StyledButton as={Link} to="/occasion">
            Date
          </StyledButton>
          <StyledButton as={Link} to="/occasion">
            Celebration
          </StyledButton>
          <StyledButton as={Link} to="/occasion">
            Other
          </StyledButton>
        </Intro>
      </main>
      <Footer />
    </PageContainer>
  );
};
export default Home;

/*// Access the 'handleLogout' function from the 'userStore'.
  const storeHandleLogout = userStore((state) => state.handleLogout);

  // Use the 'useNavigate' hook to programmatically navigate between routes.
  const navigate = useNavigate();

  // Get 'isLoggedIn' and 'accessToken' from the 'userStore'.
  const { isLoggedIn, accessToken } = userStore();
  console.log(isLoggedIn);
  console.log(accessToken);

  // useEffect hook to check user authentication status.
  useEffect(() => {
    if (!isLoggedIn) {
      // If the user is not logged in, show an alert and navigate to the login route.
      alert("no permission - here");
      navigate("/"); // You can change this to the login route
    }
  }, [isLoggedIn]);

  // Function to handle the click event of the logout button.
  const onLogoutClick = () => {
    storeHandleLogout(); // Call the 'handleLogout' function from 'userStore'.
    // Additional logic after logout can be added here.
    alert("Log out successful");
    navigate("/"); // You can change this to the login route
  };

  // Render the component content.
  return (
    <>
      <nav>
        { Create a navigation menu with links to various routes. }
        <ul className="app-ul">
          <li className="app-li">
            <Link to="/home">Home</Link>
          </li>
          <li className="app-li">
            <Link to="/tasks">Tasks</Link>
          </li>
          <li className="app-li">
            {Create a button for logging out and attach the 'onLogoutClick' event handler. }
            <button onClick={onLogoutClick}>Sign Out</button>
          </li>
        </ul>
      </nav>
      {Render the 'Logos' component. }
      <Logos />
      { Display the heading and subheading. }
      <h1 className="heading">{text.heading}</h1>
      <h2>{text.subheading}</h2>
      { (Note: 'text.intro' is not defined in the code.) }
      { Display additional content (text.intro is missing). }
      <p>{text.intro}</p>
    </>*/
