const { Timestamp } = require('bson');
const mongooose = require('mongoose');

const interviewSchema = mongooose.Schema({
    interview1: [
        {
            question:{
                type: String
            },
            comment:{
                type: String
            },
            rating:{
                type: Number
            },
            cretedBy:{
                type:mongooose.Schema.Types.ObjectId,
                ref:'candidate',
            }
        }
    ],
    interview2: [
        {
            question:{
                type: String
            },
            comment:{
                type: String
            },
            rating:{
                type: Number
            },
            cretedBy:{
                type:mongooose.Schema.Types.ObjectId,
                ref:'candidate',
            }
        }
    ],

    interview3: [
        {
            question:{
                type: String
            },
            comment:{
                type: String
            },
            rating:{
                type: Number
            },
            cretedBy:{
                type:mongooose.Schema.Types.ObjectId,
                ref:'candidate',
            }
        }
    ],


}, {Timestamp: true} );

const interview = mongooose.model('interview', interviewSchema);
module.exports= interview;