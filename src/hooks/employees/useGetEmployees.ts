import { gql, useQuery } from '@apollo/client';

export const GET_EMPLOYEES = gql`
  query GetAllEmployees {
    Employees {
      id
      name
      status
    }
  }
`;

const useGetEmployees = () => {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);
  return { loading, error, data };
};

export default useGetEmployees;
