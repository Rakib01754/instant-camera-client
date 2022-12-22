import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader/Loader';
import useTitle from '../../hooks/useTitle/useTitle';
import SingleBuyersRow from './SingleBuyersRow/SingleBuyersRow';

const AllBuyers = () => {
    useTitle('All Buyers')
    const { data: buyers = [], refetch, isLoading } = useQuery({
        queryKey: [' buyers'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-theta.vercel.app/allbuyers`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='my-8 mx-2'>
            <h1 className='font-bold text-4xl my-4'>Total Buyers : {buyers?.length}</h1>
            <table className="min-w-full border-collapse block md:table">
                <thead className="block md:table-header-group">
                    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative text-center">
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell"></th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Name</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Email</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Action</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-group font-bold">
                    {
                        buyers?.map((buyer, idx) => <SingleBuyersRow
                            key={buyer._id}
                            idx={idx + 1}
                            buyer={buyer}
                            refetch={refetch}
                        ></SingleBuyersRow>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default AllBuyers;