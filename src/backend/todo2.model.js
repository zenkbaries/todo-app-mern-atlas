
import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
    listName: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const List = mongoose.model('List', listSchema);

export default List;

// module.exports = mongoose.model("Tasks", TaskSchema);
