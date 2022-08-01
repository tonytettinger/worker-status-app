import { gql, useMutation } from '@apollo/client';
import { GET_EMPLOYEES } from './useGetEmployees';

const DELETE_EMPLOYEE = gql`
  mutation deleteEmployee($employeeId: Int!) {
    delete_Employees(where: { id: { _eq: $employeeId } }) {
      __typename
    }
  }
`;

const useDeleteEmployee = () => {
  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE, {
    refetchQueries: [{ query: GET_EMPLOYEES }, 'GetEmployees']
  });
  return deleteEmployee;
};

export default useDeleteEmployee;
