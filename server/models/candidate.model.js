const { Timestamp } = require('bson');
const mongooose = require('mongoose');

const candidateSchema = mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    status:{
        type: String,
        enum:['Pending','Not Selected', 'On Hold', 'Selected'],
        default:'Pending',
    },
    cretedBy:{
        type:mongooose.Schema.Types.ObjectId,
        ref:'User',
    }
}, {Timestamp: true} );

const candidate = mongooose.model('candidate', candidateSchema);
module.exports= candidate;