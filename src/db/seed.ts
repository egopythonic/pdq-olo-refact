import { cwd } from 'node:process';
import { loadEnvConfig } from '@next/env';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

import * as schema from './schema';
import franchiseStoreList from '@/lib/data/franchise-store-list';

loadEnvConfig(cwd());

const main = async () => {
    try {
        const client = new Client({
            connectionString: process.env.POSTGRES_URL,
        });
        await client.connect();
        const db = drizzle(client);

        await db.delete(schema.stores).execute();

        const resProducts = await db
            .insert(schema.stores)
            .values(
                franchiseStoreList.Stores.map((store) => ({
                    name: store.name,
                    alias: store.alias,
                    slug: store.slug,
                    address: store.address,
                    address2: store.address2,
                    city: store.city,
                    state: store.state,
                    zip: store.zip,
                    phone: store.phone,
                    imageUrl: [store.imageUrl],
                    taxRate1: store.taxRate1,
                }))
            )
            .returning();
        console.log({ resProducts });
        await client.end();
    } catch (error) {
        console.error(error);
        throw new Error('Failed to seed database');
    }
};

main();