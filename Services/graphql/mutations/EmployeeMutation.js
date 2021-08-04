var {GraphQLNonNull, GraphQLString, GraphQLInt} = require('graphql');
var EmployeeType = require('../queries/EmployeeType');
var Employee = require('../../../Models/Employee')

const addEmployee = {
    type: EmployeeType,
    args: {
        name: {
            name: 'name',
            type: new GraphQLNonNull(GraphQLString)
        },
        age: {
            name: 'age',
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async function (root, params) {
        const employeeModel = new Employee(params);
        const newEmployee = await employeeModel.save();
        if(!newEmployee) {
            throw new Error('Error')
        }
        return newEmployee
    }
}

const updateEmployee = {
    type: EmployeeType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            name: 'name',
            type: GraphQLString
        },
        age: {
            name: 'age',
            type: GraphQLInt
        }
    },
    resolve: async function(root, param) {

       let updateEmployee = {
        ...(param.name ? { name: param.name } : {}),
        ...(param.age ? { age: param.age } : {})
       };
       const updatedEmployee = await Employee.findByIdAndUpdate(param._id, updateEmployee, {new: true})
       if(!updatedEmployee) {
           throw new Error('Error')
       }
       return updatedEmployee
    }
}
module.exports = {addEmployee, updateEmployee}