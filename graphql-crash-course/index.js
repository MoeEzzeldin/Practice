import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import _db from './_db.js';


const resolvers = { 
    Query: {
        games: () => {
            return _db.games;
        },
        game(_, args) {
            return _db.games.find(game => game.id === args.id)
        },
        authors: () => {
            return _db.authors;
        },
        author(_, args) {
            return _db.authors.find(author => author.id === args.id)
        },
        reviews: () => {
            return _db.reviews;
        },
        review(_, args) {
            return _db.reviews.find(review => review.id === args.id)
        }
    },
    Game: {
        reviews(parent) {
            return _db.reviews.filter(r => r.game_id === parent.id);
        }
    },
    Author: {
        reviews(parent) {
            return _db.reviews.filter(r => r.author_id === parent.id);
        }
    },
    
}


const server = new ApolloServer({
//typedefs  -- definitions of types of data
    typeDefs,
//resolvers   resolver functions for each type
    resolvers,

})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
} )

console.log(`🚀  Server ready at: ${url}`)