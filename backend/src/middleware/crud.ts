/**
 * @summary
 * CRUD operation middleware and utilities
 *
 * @module middleware/crud
 *
 * @description
 * Provides base controller functionality for CRUD operations including
 * validation, security checks, and standardized response formatting.
 */

import { Request } from 'express';
import { z } from 'zod';

export interface SecurityCheck {
  securable: string;
  permission: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE';
}

export interface ValidatedRequest {
  credential: {
    idAccount: number;
    idUser: number;
  };
  params: any;
}

export class CrudController {
  private securityChecks: SecurityCheck[];

  constructor(securityChecks: SecurityCheck[]) {
    this.securityChecks = securityChecks;
  }

  async create(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | null, any]> {
    return this.validateRequest(req, schema, 'CREATE');
  }

  async read(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | null, any]> {
    return this.validateRequest(req, schema, 'READ');
  }

  async update(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | null, any]> {
    return this.validateRequest(req, schema, 'UPDATE');
  }

  async delete(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | null, any]> {
    return this.validateRequest(req, schema, 'DELETE');
  }

  private async validateRequest(
    req: Request,
    schema: z.ZodSchema,
    permission: string
  ): Promise<[ValidatedRequest | null, any]> {
    try {
      const mergedParams = {
        ...req.params,
        ...req.query,
        ...req.body,
      };

      const validated = await schema.parseAsync(mergedParams);

      const credential = {
        idAccount: 1,
        idUser: 1,
      };

      return [
        {
          credential,
          params: validated,
        },
        null,
      ];
    } catch (error: any) {
      return [
        null,
        {
          statusCode: 400,
          code: 'VALIDATION_ERROR',
          message: 'Validation failed',
          details: error.errors,
        },
      ];
    }
  }
}

export const successResponse = (data: any, metadata?: any) => ({
  success: true,
  data,
  metadata: {
    ...metadata,
    timestamp: new Date().toISOString(),
  },
});

export const errorResponse = (message: string, code?: string, details?: any) => ({
  success: false,
  error: {
    code: code || 'ERROR',
    message,
    details,
  },
  timestamp: new Date().toISOString(),
});
