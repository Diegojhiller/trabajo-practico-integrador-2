import { Router } from 'express';
import { register, login, logout, getProfile, updateProfile } from '../controllers/authen.controllers.js';
import { authMiddleware } from '../middlewares/authen.Middleware.js';

const authenRouter = Router();

authenRouter.post('/register', register);
authenRouter.post('/login', login);
authenRouter.post('/logout', authMiddleware, logout);
authenRouter.get('/profile', authMiddleware, getProfile);
authenRouter.put('/profile', authMiddleware, updateProfile);

export default authenRouter;