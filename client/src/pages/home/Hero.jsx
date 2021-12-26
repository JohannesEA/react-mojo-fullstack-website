import styled, { keyframes } from "styled-components";
import Button from "../../components/Button";
import getWindowDimensions from "../../commonFunctions/Dimentions";

const Hero = () => {
  const { width } = getWindowDimensions();

  return (
    <Container>

      {width > 800 &&       <Left>
        <Title>Johannes Erdahl Andresen</Title>
        {/* <Logo src="/assets/logos/logo3.png" alt="hero-logo"/> */}
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Text>

        <ButtonContainer>
          <Button
            text="Kontakt Meg"
            bc="color-2"
            onClick={() => console.log("Kontakt meg")}
          ></Button>
          <Button
            text="Last ned CV"
            bc="color-1"
            shadow="#e1effc"
            onClick={() => console.log("Last ned CV")}
          ></Button>
        </ButtonContainer>
      </Left>}

      {width > 800 && (
        <Right>
          <Image src="/assets/images/johannes.png" alt="johannes-hero-img" />
        </Right>
      )}
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr ;
  min-height: 50vh;
  max-height: 80vh;
  padding: 1em;
  transition: all .3s ease;

  @media (max-width: 800px) {
    min-height: 40vh;
    background: url("/assets/logos/logo1.png") no-repeat center;
    background-size: cover;
    padding: 0px;

  }
`;

const Left = styled.div`
  display: grid;
  padding-top: 8em;
  grid-template-rows: 1fr 1fr .5fr;
`;


const ButtonContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
height: auto;
max-width: 15em;
`;

const Logo = styled.img`
max-height: 20em;
min-width: 30em;
`;



const Title = styled.h1`
  font-size: 2.3rem;
  color: #091922;
  transition: all .3s ease;


  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }

`;

const Text = styled.p`
  font-size: 1.5rem;
  transition: all .3s ease;


  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
`;

const Right = styled.div`
  text-align: center;

`;

const Image = styled.img`
  max-height: 80vh;
margin-bottom: 2.5em;
`;
