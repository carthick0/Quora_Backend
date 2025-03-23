const topicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Topic name is required"],
        unique: true,
        trim: true
    }
}, 
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });  // Timestamps

const Topic = mongoose.model("Topic", topicSchema);
export default Topic;
