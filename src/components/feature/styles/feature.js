import styled from "styled-components/macro";

export const Container = styled.div`
  diplay: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  padding: 165px 45px;
`;
export const Title = styled.h1`
  max-width: 640px;
  font-size: 50px;
  font-weight: 600;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: normal;
  margin: 26px auto 10px auto;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
