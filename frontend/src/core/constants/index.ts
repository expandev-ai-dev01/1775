export const API_ENDPOINTS = {
  EXTERNAL: {
    HEALTH: '/health',
  },
  INTERNAL: {
    MOVEMENTS: '/movements',
  },
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_preferences',
} as const;

export const QUERY_KEYS = {
  MOVEMENTS: 'movements',
  PRODUCTS: 'products',
  STOCK: 'stock',
} as const;
