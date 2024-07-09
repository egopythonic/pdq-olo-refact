import StoreList from "@/components/shared/store/store-list";
import franchiseStoreList from "@/lib/data/franchise-store-list";

export default function Home() {
  return (
    <div>
      <div className="space-y-8">
        <h2 className="h2-bold">Stores</h2>
        <StoreList data={franchiseStoreList.Stores} />
      </div>
    </div>
  );
}
