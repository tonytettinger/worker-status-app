import { gql, useMutation } from '@apollo/client';
import { GET_EMPLOYEES } from './useGetEmployees';

const ADD_EMPLOYEE = gql`
  mutation addEmployee($name: String) {
    insert_Employees(objects: { name: $name }) {
      returning {
        name
      }
    }
  }
`;

const useAddEmployee = () => {
  const [addEmployee] = useMutation(ADD_EMPLOYEE, {
    refetchQueries: [{ query: GET_EMPLOYEES }]
  });
  return addEmployee;
};

export default useAddEmployee;
