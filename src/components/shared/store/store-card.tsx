import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Store } from '@/types'

const StoreCard = ({ store }: { store: Store }) => {

    return (
        <Card className="w-full max-w-sm">
            <CardHeader className="p-0 items-center">
                <Link href={`/store/${store.slug}`}>
                    <Image
                        alt={store.name}
                        className="aspect-square object-cover rounded"
                        height={300}
                        src={store.ImageUrl || "/assets/store-cards/store-1.png"}
                        width={300}
                    />
                </Link>
            </CardHeader>
            <CardContent className="p-4 grid gap-4">
                <div>
                    <p className="text-xs">{store.brand}</p>
                </div>
                <div>
                    <Link href={`/store/${store.slug}`}>
                        <h2 className="text-sm font-medium">{store.name}</h2>
                    </Link>
                </div>
                {/* <div className="flex-between gap-4">
                    <p>{store.rating} stars</p>
                    {store.stock > 0 ? (
                        <p className="font-bold">${store.price}</p>
                    ) : (
                        <p className="text-destructive">Out of Stock</p>
                    )}
                </div> */}
            </CardContent>
        </Card>
    )
}

export default StoreCard