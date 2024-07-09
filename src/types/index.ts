import { stores } from '@/db/schema'
import { InferSelectModel } from 'drizzle-orm'

// PRODUCTS
export type Store = InferSelectModel<typeof stores>