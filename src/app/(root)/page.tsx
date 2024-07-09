import StoreList from "@/components/shared/store/store-list";
import { getStores } from "@/lib/actions/store.actions";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import franchiseStoreList from "@/lib/data/franchise-store-list";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${APP_NAME} - ${APP_DESCRIPTION}`,
}

export default async function Home() {
  const stores = await getStores()
  return (
    <div>
      <div className="space-y-8">
        <h2 className="h2-bold">Stores</h2>
        <StoreList data={stores} />
      </div>
    </div>
  );
}
