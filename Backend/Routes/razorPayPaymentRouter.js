import express from 'express';
import { verifyUser } from '../Middlewear/AuthMiddlewear.js';
import { CreateRazorPayOrder, verifyRazorPayOrder } from '../Controllers/RazorpayPaymentController.js';


const razorPayPaymentRouter = express.Router();

razorPayPaymentRouter.post("/create-order",verifyUser, CreateRazorPayOrder);

razorPayPaymentRouter.post("/verify-order", verifyUser, verifyRazorPayOrder);

export default razorPayPaymentRouter 