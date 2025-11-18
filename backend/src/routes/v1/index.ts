/**
 * @summary
 * Version 1 API router
 *
 * @module routes/v1
 *
 * @description
 * Aggregates all v1 API routes including external (public)
 * and internal (authenticated) endpoints.
 */

import { Router } from 'express';
import externalRoutes from './externalRoutes';
import internalRoutes from './internalRoutes';

const router = Router();

router.use('/external', externalRoutes);
router.use('/internal', internalRoutes);

export default router;
