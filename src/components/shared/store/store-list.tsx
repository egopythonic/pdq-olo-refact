import StoreCard from './store-card'

const StoreList = ({ data }: { data: any }) => {

    return (
        <>
            {data.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map((store: any) => (
                        <StoreCard key={store.id} store={store} />
                    ))}
                </div>
            ) : (
                <div>
                    <p>No stores found</p>
                </div>
            )}
        </>
    )
}

export default StoreList