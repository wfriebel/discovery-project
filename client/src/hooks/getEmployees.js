import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

const GET_EMPLOYEES_QUERY = gql`
  query getEmployees {
    getEmployees {
      name
    }
  }
`

export const useEmployees = () => {
  return useQuery(GET_EMPLOYEES_QUERY)
}