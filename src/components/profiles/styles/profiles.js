import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 80%;
`;
export const Title = styled.h1`
  color: white;
  width: 100%;
  text-align: center;
  font-size: 48px;
  font-weight: 500;
`;
export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;
export const Picture = styled.img`
  border-radius: 5px;
  width: 100%;
  max-width: 150px;
  border: 3px solid black;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
    transform: scale(1.05, 1.05);
    transition: all 0.2s ease-in-out;
  }
`;
export const Item = styled.li`
  list-style-type: none;
  max-width: 200px;
  max-height: 200px;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
