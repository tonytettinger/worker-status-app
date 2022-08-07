import { gql, useMutation } from '@apollo/client';
import { GET_EMPLOYEES } from './useGetEmployees';

interface IUpdateEmployeesInput {
  variables: {
    status: string;
    employeeId: number;
  };
}

const UPDATE_EMPLOYEE_STATUS = gql`
  mutation UpdateEmployeeStatus($status: String!, $employeeId: Int!) {
    update_Employees(
      _set: { status: $status }
      where: { id: { _eq: $employeeId } }
    ) {
      returning {
        id
        name
        status
      }
    }
  }
`;

const useUpdateEmployeeStatus = (): ((
  // eslint-disable-next-line no-unused-vars
  updateEmployee: IUpdateEmployeesInput
) => any) => {
  const [updateEmployeeStatus] = useMutation(UPDATE_EMPLOYEE_STATUS, {
    refetchQueries: [{ query: GET_EMPLOYEES }]
  });
  return updateEmployeeStatus;
};

export default useUpdateEmployeeStatus;
