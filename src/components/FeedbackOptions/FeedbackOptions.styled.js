import styled from 'styled-components';

export const ListBtn = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top: 20px;

  gap: 10px;
`;
export const Button = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  ::first-letter {
    text-transform: uppercase;
  }
  :hover {
    background-color: blue;
    color: white;
  }
`;
