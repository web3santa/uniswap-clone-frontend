const SwapTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-gray-200 divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">From</th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">To</th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Amount</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
               
                </tbody>
            </table>
        </div>
    );
}
export default SwapTable