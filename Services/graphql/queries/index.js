const { GraphQLList, GraphQLObjectType } = require('graphql');
const Employee = require('../../../Models/Employee')
const EmployeeType = require('./EmployeeType')

const QueryRootType = new GraphQLObjectType ({
    name: 'AppSchema',
    description: "Schema Query Root",
    fields: () => ({
        Employees: {
            type: new GraphQLList(EmployeeType),
            description: "List of all Employees",
            resolve: async function () {
              return await  Employee.find({}, (err, auth) => {
              });
            }
        }
    })
});

module.exports = QueryRootType