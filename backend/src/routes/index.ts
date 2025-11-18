/**
 * @summary
 * Main API router with version management
 *
 * @module routes
 *
 * @description
 * Implements API versioning strategy and routes all requests
 * to appropriate version-specific routers.
 */

import { Router } from 'express';
import v1Routes from './v1';

const router = Router();

router.use('/v1', v1Routes);

export default router;
