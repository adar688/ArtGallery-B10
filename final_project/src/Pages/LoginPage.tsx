export const revalidate=0; 

// Importing necessary modules and components
import getCurrentUser from "@/actions/getCurrentUser";
import LoginForm from "../components/Login/LoginForm";
import Container from "../components/General/Container";
import FormWrapper from "../components/General/FormWrapper";


// Define the Login functional component
const Login = async () => {
  // Fetch current user information
  const currentUser = await getCurrentUser();
  // Render the Login component
  return ( 
  <Container>
    <FormWrapper>
        <LoginForm currentUser={currentUser} />
    </FormWrapper>
  </Container>
  );
}

export default Login; 