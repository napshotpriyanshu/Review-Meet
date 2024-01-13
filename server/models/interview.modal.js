const { Timestamp } = require('bson');
const mongooose = require('mongoose');

const interviewSchema = mongooose.Schema({
    cretedBy:{
        type:mongooose.Schema.Types.ObjectId,
        ref:'candidate',
    },
    interviewDetails: [
        {
            question:{
                type: String
            },
            rating:{
                type: Number
            },
            comment:{
                type: String
            },
            
        },
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
        },
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
        }
    ],

}, {Timestamp: true} );

interviewSchema.post('remove', async function(next){
    
});

const interview = mongooose.model('interview', interviewSchema);
module.exports= interview;