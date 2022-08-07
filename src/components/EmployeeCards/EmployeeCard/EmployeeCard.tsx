import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {
  StyledProgress,
  StyledEmployeeCard,
  StyledDeleteButton,
  StyledTopRow,
  StyledName
} from './EmployeeCard.styled';
import useUpdateEmployeeStatus from '../../../hooks/employees/useUpdateEmployeeStatus';
import {
  IEmployeeProps,
  EmployeeStatus,
  employeeStatuses
} from '../../../common/interfaces/employee.interface';
import useDeleteEmployee from '../../../hooks/employees/useDeleteEmployee';

const EmployeeCard = ({ status, name, id }: IEmployeeProps) => {
  const updateEmployee = useUpdateEmployeeStatus();
  const deleteEmployee = useDeleteEmployee();
  const progressOnClick = (selectStatus: string) => {
    updateEmployee({ variables: { employeeId: id, status: selectStatus } });
  };
  const deleteOnClick = () => {
    deleteEmployee({ variables: { employeeId: id } });
  };
  return (
    <StyledEmployeeCard>
      <StyledTopRow>
        <StyledName>{name}</StyledName>
        <StyledDeleteButton onClick={() => deleteOnClick()}>
          Delete
          <FaTrashAlt />
        </StyledDeleteButton>
      </StyledTopRow>
      {employeeStatuses.map((availableStatus: EmployeeStatus, index) => (
        <StyledProgress
          isActive={status === availableStatus}
          status={status}
          onClick={() => progressOnClick(availableStatus)}
          key={`${status}-${index}`}
        >
          {availableStatus}
        </StyledProgress>
      ))}
    </StyledEmployeeCard>
  );
};

export default EmployeeCard;
