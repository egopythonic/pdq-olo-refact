import {
    boolean,
    integer,
    numeric,
    pgTable,
    text,
    timestamp,
    uniqueIndex,
    uuid,
} from 'drizzle-orm/pg-core'

// STORES
export const stores = pgTable(
    'store',
    {
        storeID: uuid('id').defaultRandom().primaryKey().notNull(),
        name: text('name').notNull(),
        alias: text('alias').notNull(),
        slug: text('slug').notNull(),
        address: text('address').notNull(),
        address2: text('address2').notNull(),
        city: text('city').notNull(),
        state: text('state').notNull(),
        zip: text('zip').notNull(),
        phone: text('phone').notNull(),
        imageUrl: text('imageUrl').array().notNull(),
        taxRate: text('taxRate').notNull().default('0.0'),
    },
    (table) => {
        return {
            storeSlugIdx: uniqueIndex('store_slug_idx').on(table.slug),
        }
    }
)