import express from 'express'
import googleCallbackController, { GetUserController } from '../Controllers/AuthUserController.js';
import { verifyUser } from '../Middlewear/AuthMiddlewear.js';


const AuthUserRoutes = express.Router();

router.get("/Get-User", verifyUser, GetUserController);

AuthUserRoutes.get("/google/callback",verifyUser ,googleCallbackController )



export default AuthUserRoutes;