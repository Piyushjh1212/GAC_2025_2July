import express from 'express'
import { GetUserController, googleCallbackController } from '../Controllers/AuthUserController.js';
import { verifyUser } from '../Middlewear/AuthMiddlewear.js';


const AuthUserRoutes = express.Router();

AuthUserRoutes.get("/Get-User", verifyUser, GetUserController);

AuthUserRoutes.get("/google/callback",verifyUser ,googleCallbackController )



export default AuthUserRoutes;