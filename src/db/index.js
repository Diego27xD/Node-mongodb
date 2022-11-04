import mongoose from "mongoose";

const connect = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://root:root@localhost:27017/crud-example?authSource=admin",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    );
    const db = mongoose.connection;
    db.on("error", (error) => console.log(error));
    db.on("open", () => console.log("Connected to your Database"));
}

export default connect;
