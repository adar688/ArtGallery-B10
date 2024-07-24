export const revalidate=0; 

import getCurrentUser from "@/actions/getCurrentUser";
import RegisterFrom from "../components/Register/RegisterFrom";
import FormWrapper from "../components/General/FormWrapper";
import Container from "../components/General/Container";


const Register = async () => {
  // Fetch the current user
  const currentUser = await getCurrentUser(); 

  // Render the registration form component with the fetched current user data
  return ( 
  <Container>
    <FormWrapper>
        <RegisterFrom currentUser={currentUser}/> {/* Passed currentUser as props to RegisterForm component */}

    </FormWrapper>
  </Container>
  );
}

export default Register; 