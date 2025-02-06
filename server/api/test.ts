import { model } from "mongoose";
import { Schema } from "mongoose";

const testschema = new Schema({
    title: String,
    desc: String,  
});

const testmodel = model("cards", testschema);

export default testmodel;
