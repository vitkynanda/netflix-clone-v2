import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.p`
  color: #757575;
  margin-bottom: 40px;
  font-size: 16px;
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    font-weight: bold;
    transition: all 0.5s ease-in-out;
  }
`;

export const Text = styled.p`
  color: #757575;
  margin-bottom: 40px;
  font-size: 13px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
