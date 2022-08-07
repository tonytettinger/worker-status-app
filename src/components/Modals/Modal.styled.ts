import styled from 'styled-components';

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  width: 80%;
  background-color: #fff;
  padding: 15rem;
  font-size: 1.8rem;
  font-weight: bold;
`;
