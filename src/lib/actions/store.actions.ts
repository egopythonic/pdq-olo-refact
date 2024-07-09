'use server'

import { desc } from 'drizzle-orm'

import db from '@/db/drizzle'
import { stores } from '@/db/schema'

export async function getStores() {
    const data = await db.query.stores.findMany({
        orderBy: [desc(stores.createdAt)],
        limit: 4,
    })
    return data
}