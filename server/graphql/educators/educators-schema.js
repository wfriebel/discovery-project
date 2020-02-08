const { gql } = require('apollo-server-express');

const EducatorsSchema = gql`
  type Query {
    getEmployees: getEmployeesResponse
  }

  type getEmployeesResponse {
    name: String
  }
`;

module.exports = EducatorsSchema;