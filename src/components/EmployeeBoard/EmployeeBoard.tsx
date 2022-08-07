import React from 'react';
import useGetEmployees from '../../hooks/employees/useGetEmployees';
import EmployeeCard from '../EmployeeCards/EmployeeCards';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import StyledEmployeeBoard from './EmployeeBoard.styled';
import Modal from '../Modals/Modal';
import Loader from '../Loaders/Loader';

const EmployeeBoard = () => {
  const { data, loading } = useGetEmployees();
  const employees = data?.Employees;

  return (
    <StyledEmployeeBoard>
      {loading && (
        <Modal>
          <Loader />
          <div>Fetching Employee data</div>
        </Modal>
      )}
      <h1>Employee Management System</h1>
      <EmployeeCard employees={employees || []} />
      <EmployeeForm />
    </StyledEmployeeBoard>
  );
};

export default EmployeeBoard;
