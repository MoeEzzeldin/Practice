const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLString } = require('graphql');
const NewsService = require('../services/newsService');

// Define News Type
const NewsType = new GraphQLObjectType({
  name: 'News',
  fields: {
    news_id: { type: GraphQLInt },
    source: { type: GraphQLString },
    time_published: { type: GraphQLString },
    author: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    url: { type: GraphQLString },
    url_image: { type: GraphQLString },
    content: { type: GraphQLString },
  }
});

// Define Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    news: {
      type: new GraphQLList(NewsType),
      args: {
        location_id: { type: GraphQLInt },
        category_id: { type: GraphQLInt }
      },
      resolve: async (_, args) => {
        return await NewsService.getNews(args);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
