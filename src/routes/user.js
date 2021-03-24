import {Router} from 'express';
import UserConstroller from '../controllers/user'

const router =Router();

router.get('/',UserConstroller.getUser);
router.post('/',UserConstroller.postUser);

export default router;