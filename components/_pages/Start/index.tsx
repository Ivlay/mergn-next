import { NextPage } from 'next';
import styled from 'styled-components';

import { Textarea, Header, Button } from 'components/UI';

const StartPageStyleContainer = styled.div`
  max-width: 900px;
  width: 100%;
  height: 650px;
  margin: 50px auto;
  background-color: #525151;
  border-radius: 10px;
`;

const StyledButton = styled(Button)`
  font-size: 24px;
  padding: 5px 15px;
  width: 200px;
`;

const ContainerItem = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const Start: NextPage = () => {
  return (
    <StartPageStyleContainer>
      <ContainerItem>
        <Header>NEWS</Header>
        <Textarea placeholder="Anything new?" />
        <StyledButton>Submit</StyledButton>
      </ContainerItem>
    </StartPageStyleContainer>
  );
};

export default Start;
