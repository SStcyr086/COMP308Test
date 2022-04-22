var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLDate = require('graphql-date');
var VitalModel = require('../models/Vital');
//
// Create a GraphQL Object Type for Student model
const vitalType = new GraphQLObjectType({
    name: 'nurse',
    fields: function () {
      return {
        _id: {
          type: GraphQLString
        },
        bodytemp: {
          type: GraphQLString
          },
        heartrate: {
          type: GraphQLString
          },
        bloodpressure: {
          type: GraphQLString
        },
        respitoryrate: {
          type: GraphQLString
        }    
        
      }
    }
  });
  //
  // create a GraphQL query type that returns all vitals or a vital by id
  const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
      return {
        vitals: {
          type: new GraphQLList(vitalType),
          resolve: function () {
            const vitals = VitalModel.find().exec()
            if (!vitals) {
              throw new Error('Error')
            }
            return vitals
          }
        },
        vital: {
          type: vitalType,
          args: {
            id: {
              name: '_id',
              type: GraphQLString
            }
          },
          resolve: function (root, params) {
            const vitalInfo = VitalModel.findById(params.id).exec()
            if (!vitalInfo) {
              throw new Error('Error')
            }
            return vitalInfo
          }
        }
      }
    }
  });
  //
  // add mutations for CRUD operations
  const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: function () {
      return {
        addVital: {
          type: vitalType,
          args: {
            bodytemp: {
              type: new GraphQLNonNull(GraphQLString)
              },
            heartrate: {
              type: new GraphQLNonNull(GraphQLString)
              },  
            bloodpressure: {
              type: new GraphQLNonNull(GraphQLString)
            },
            respitoryrate: {
              type: new GraphQLNonNull(GraphQLString)
            }
          },
          resolve: function (root, params) {
            const vitalModel = new VitalModel(params);
            const newVital = vitalModel.save();
            if (!newVital) {
              throw new Error('Error');
            }
            return newVital
          }
        
        }
      }
    }
  });
  
  //
  module.exports = new GraphQLSchema({query: queryType, mutation: mutation});
  