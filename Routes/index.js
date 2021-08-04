const { GraphQLObjectType,GraphQLSchema } = require('graphql');
const mutation = require('../Services/graphql/mutations/index')
const QueryRootType = require('../Services/graphql/queries/index')

const AppSchema = new GraphQLSchema({
   query: QueryRootType,
   mutation: new GraphQLObjectType({
       name: 'Mutation',
       fields: mutation
   })
});

module.exports = AppSchema;