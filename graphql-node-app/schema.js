const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat, GraphQLList, GraphQLSchema } = require("graphql");
const { sql } = require("./db");
require("dotenv").config();


// Define Location Type
const LocationType = new GraphQLObjectType({
    name: "Location",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        latitude: { type: GraphQLFloat },
        longitude: { type: GraphQLFloat },
        description: { type: GraphQLString },
        created_at: { type: GraphQLString },
    }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        locations: {
            type: new GraphQLList(LocationType),
            async resolve() {
                try {
                    const result = await sql.query("SELECT * FROM Locations");
                    return result.recordset;
                } catch (error) {
                    throw new Error(error);
                }
            },
        },
        location: {
            type: LocationType,
            args: { id: { type: GraphQLInt } },
            async resolve(_, { id }) {
                try {
                    const result = await sql.query(`SELECT * FROM Locations WHERE id = ${id}`);
                    return result.recordset[0];
                } catch (error) {
                    throw new Error(error);
                }
            },
        },
    },
});

// Define Mutation (optional: add, update, delete)
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addLocation: {
            type: LocationType,
            args: {
                name: { type: GraphQLString },
                latitude: { type: GraphQLFloat },
                longitude: { type: GraphQLFloat },
                description: { type: GraphQLString },
            },
            async resolve(_, { name, latitude, longitude, description }) {
                try {
                    const result = await sql.query(`
                        INSERT INTO Locations (name, latitude, longitude, description)
                        OUTPUT INSERTED.*
                        VALUES ('${name}', ${latitude}, ${longitude}, '${description}')
                    `);
                    return result.recordset[0];
                } catch (error) {
                    throw new Error(error);
                }
            },
        },
    },
});

// Export Schema
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
