import styled from "styled-components";

export const StyledCompornents = () => {
  return (
    <Container>
      <Title>- StyledCompornents -</Title>
      <Button>Fight!</Button>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid #392eff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  margin: 8px;
  border-radius: 20px;
`;

const Title = styled.p`
  color: #3d84a8;
  margin: 0;
`;

const Button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;
//sytledcompornentではsass記法がそのまま使えるhoverも。
//デメリットとしてはタグなのか、コンポーネントなのか分かりづらい
//その場合はローカルルールなどで頭にSをつけるなどするとわかりやすい
