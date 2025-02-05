const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLString } = require('graphql');
const NewsService = require('../services/newsService');

const NewsType = new GraphQLObjectType({
  name: 'News',
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    category: { type: GraphQLString },
    publishedAt: { type: GraphQLString }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    news: {
      type: new GraphQLList(NewsType),
      resolve: async () => {
        return await NewsService.getAllNews();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
