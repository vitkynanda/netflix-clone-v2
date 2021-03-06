import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  flex-direction: column;
  max-width: 815px;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  max-width: 670px;
  margin: auto;
  width: 100%;
  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  max-height: 1200px;
  font-size: 26px;
  line-height: normal;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 2.2em 0.8em 1.2em;
  user-select: none;
  white-space: pre-wrap;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
