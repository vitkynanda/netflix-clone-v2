import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  height: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  height: 70px;
  border: 0;
  padding: 10px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: flex;
  height: 70px;
  align-items: center;
  background: red;
  color: white;
  border: 0;
  font-size: 26px;
  padding: 0 32px;
  cursor: pointer;

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }

  &:hover {
    background: #f40612;
  }
  img {
    width: 24px;
    margin-left: 10px;
    filter: brightness(0) invert(1);

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-algib: center;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
