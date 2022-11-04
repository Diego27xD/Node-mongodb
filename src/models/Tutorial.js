import mongoose from "mongoose";

const Tutorial = mongoose.model("Tutorial",
    new mongoose.Schema({
        title: String,
        author: String,
        tags: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Tag"
            }
        ]
    })
)

export default Tutorial;