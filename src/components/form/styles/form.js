import styled from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  width: 100%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.75);
  max-width: 450px;
  box-sizing: border-box;
  padding: 60px 68px 40px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 150px;
`;
export const Base = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 100%;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  padding: 15px 20px;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  background: #333;
  font-size: 16px;
  padding: 5px 20px;
  line-height: 50px;
  height: 50px;
  color: white;
  border: none;
  margin-bottom: 20px;
  border-radius: 4px;
`;
export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;
export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;
export const Link = styled(LinkR)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const Submit = styled.button`
  color: white;
  padding: 16px;
  background: #e50914;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }
`;
