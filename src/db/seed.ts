import { cwd } from 'node:process'
import { loadEnvConfig } from '@next/env'

import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'

import * as schema from './schema'
import franchiseStoreList from '@/lib/data/franchise-store-list'

loadEnvConfig(cwd())

const main = async () => {
    try {
        const client = new Client({
            connectionString: process.env.POSTGRES_URL,
        })
        await client.connect()
        const db = drizzle(client)

        await db.delete(schema.stores)

        const resProducts = await db
            .insert(schema.stores)
            .values(franchiseStoreList.Stores)
            .returning()
        console.log({ resProducts })
        await client.end()
    } catch (error) {
        console.error(error)
        throw new Error('Failed to seed database')
    }
}

main()