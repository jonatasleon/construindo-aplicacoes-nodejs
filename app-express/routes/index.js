import { Router } from 'express';
import stormtrooperRoutes from './stormtroopers';

const router = Router();

router.use('/stormtroopers', stormtrooperRoutes);

export default router;
