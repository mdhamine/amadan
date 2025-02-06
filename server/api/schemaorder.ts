import { model, Schema } from "mongoose"
import { buffer } from "stream/consumers";

const orderSchema = new Schema({
    name: String,
    phone: Number,
    state: String,
    product: Array,
    total: Number,
    image: Buffer,
});
const OrderModel = model("Order", orderSchema);

export default OrderModel;

