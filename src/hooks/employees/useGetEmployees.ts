import { gql, useQuery } from '@apollo/client';
import { IEmployeeProps } from '../../common/interfaces/employee.interface';

export const GET_EMPLOYEES = gql`
  query GetAllEmployees {
    Employees {
      id
      name
      status
    }
  }
`;

const useGetEmployees = (): IEmployeeProps[] | undefined => {
  const { data } = useQuery(GET_EMPLOYEES);
  return data?.Employees;
};

export default useGetEmployees;
