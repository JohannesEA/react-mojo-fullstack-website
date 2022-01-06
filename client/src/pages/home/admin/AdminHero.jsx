import { useState } from "react";
import styled from "styled-components";
import getWindowDimensions from "../../../commonFunctions/Dimentions";
import {
  Form,
  Input,
  ErrorMessage,
  ConfirmMessage,
  ButtonContainer,
  Label,
} from "./Forms";
import Button from "../../../components/Button";
import LoadingAnimation from "../../../components/LoadingAnimation";

const AdminHero = () => {
  const { width } = getWindowDimensions();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({ title: "", subtitle: "" });

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;

    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <Container>
      <Title>Edit Hero Section</Title>

      <Form>
        <Label>Tittel</Label>

        <Input
          type="text"
          name="title"
          placeholder="Tittel.."
          onChange={handleChange}
        />
        <Label>Undertittel</Label>
        <Input
          type="text"
          name="subtitle"
          placeholder="Undertittel.."
          onChange={handleChange}
        />
        <Label>Bilde</Label>
        <Input
          type="file"
          name="img"
          placeholder="Bilde.."
          onChange={handleChange}
        />
        <Label>CV</Label>
        <Input
          type="file"
          name="cv"
          placeholder="CV.."
          onChange={handleChange}
        />

        <ButtonContainer>
          {" "}
          <Button text="Send" bc="color-2" onClick={handleClick} />
        </ButtonContainer>

        {isLoading && <LoadingAnimation />}
        {error && <ErrorMessage>Error</ErrorMessage>}
        {success && <ConfirmMessage>Success</ConfirmMessage>}
      </Form>
    </Container>
  );
};

export default AdminHero;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: black;
`;
