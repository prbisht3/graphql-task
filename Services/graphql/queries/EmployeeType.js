
const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLInt } = require('graphql');
const EmployeeType = new GraphQLObjectType({
    name: 'EmployeeType',
    description: "This represent an Employee",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)}
    })
});

module.exports = EmployeeType;