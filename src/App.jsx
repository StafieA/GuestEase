import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Wild</Heading>
        <Heading as="h2">CheckIn/Out</Heading>
        <Button>Check In</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="No of guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
