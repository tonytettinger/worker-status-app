import React from 'react';
import useGetEmployees from '../../hooks/employees/useGetEmployees';
import EmployeeCard from '../EmployeeCards/EmployeeCards';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import StyledEmployeeBoard from './EmployeeBoard.styled';

const EmployeeBoard = () => {
  const employees = useGetEmployees();
  return (
    <StyledEmployeeBoard>
      <h1>Employee Management System</h1>
      <EmployeeCard employees={employees || []} />
      <EmployeeForm />
    </StyledEmployeeBoard>
  );
};

export default EmployeeBoard;
