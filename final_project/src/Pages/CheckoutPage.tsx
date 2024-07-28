export const revalidate=0; 

// Importing React and necessary components
import CheckoutClient from "../components/Checkout/CheckoutClient";
import Container from "../components/General/Container";
import FormWrapper from "../components/General/FormWrapper";

// Define the Checkout functional component
const Checkout = () => {
  return (
    <div className="p-8">
        <Container>
          {/* Wrapping CheckoutClient component with FormWrap */}
            <FormWrapper>
                <CheckoutClient/>
            </FormWrapper>
        </Container>
    </div>
  );
};

export default Checkout;