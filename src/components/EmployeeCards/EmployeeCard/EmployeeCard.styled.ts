import styled, { css } from 'styled-components';
import { EmployeeStatus } from '../../../common/interfaces/employee.interface';

const backgroundColors = (status: EmployeeStatus) =>
  ({
    added: 'blue',
    incheck: 'darkgoldenrod',
    approved: 'green',
    inactive: 'teal',
    active: 'orange'
  }[status.replace('-', '')]);

export const StyledEmployeeCard = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const StyledDeleteButton = styled.button`
  color: white;
  background: tomato;
  border-radius: 5%;
  cursor: pointer;
  padding: 0.5rem 1rem;
  align-self: flex-end;
  margin: 1rem 0;
  text-transform: uppercase;
  font-size: 1.25rem;
`;

export const StyledName = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
`;

export const StyledTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledProgress = styled.div<{
  status: EmployeeStatus;
  isActive: boolean;
}>`
  ${({ status, isActive }) => css`
    font-size: 1.2rem;
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    text-transform: uppercase;
    cursor: pointer;
    color: white;
    margin: 0;
    margin-left: 0.5%;
    height: 3rem;
    width: 20%;
    position: relative;
    display: inline-block;
    text-align: center;
    line-height: 3rem;
    transition: all 0.8s;
    &:before,
    &:after {
      content: '';
      position: absolute;
      transition: all 0.8s;
      z-index: -1;
    }
    &:before {
      height: 50%;
      width: 100%;
      top: 0;
      left: 0;
      background: ${isActive ? backgroundColors(status) : 'grey'};
      -webkit-transform: skew(45deg);
      -moz-transform: skew(45deg);
      transform: skew(45deg);
    }
    &:after {
      height: 50%;
      width: 100%;
      top: 50%;
      left: 0;
      background: ${isActive ? backgroundColors(status) : 'grey'};
      -webkit-transform: skew(-45deg);
      -moz-transform: skew(-45deg);
      transform: skew(-45deg);
    }
    &:hover:before,
    &:hover:after {
      opacity: 0.5;
    }
  `}
`;
