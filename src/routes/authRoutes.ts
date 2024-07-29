import { Router } from 'express';
import { registerUser, loginUser } from '@controllers/authController';

const router: Router = Router();

router.post('/register', registerUser);
router.post('/sign-in', loginUser);

export default router;
