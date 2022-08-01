import React from 'react';

import { IEmployeeProps } from '../../common/interfaces/employee.interface';
import sortByStringProp from '../../common/utils/utils';
import EmployeeCard from './EmployeeCard/EmployeeCard';
import StyledEmployeeCards from './EmployeeCards.styled';

interface EmployeeCardProps {
  employees: IEmployeeProps[];
}

const EmployeeCards: React.FC<EmployeeCardProps> = ({
  employees
}: EmployeeCardProps) => {
  const sortedEmployees = sortByStringProp(employees, 'name');
  return (
    <StyledEmployeeCards>
      {sortedEmployees.map(({ name, status, id }) => (
        <EmployeeCard
          name={name}
          status={status}
          id={id}
          key={`${id}-${name}`}
        />
      ))}
    </StyledEmployeeCards>
  );
};

export default EmployeeCards;
