import {Router} from 'express';
import UserConstroller from '../controllers/user'

const router =Router();

router.get('/',UserConstroller.getUser);
router.post('/',UserConstroller.postUser);
router.delete('/',UserConstroller.postDelete);
router.patch('/',UserConstroller.patchUpdate);

export default router;