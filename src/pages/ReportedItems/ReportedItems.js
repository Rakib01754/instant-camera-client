import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../components/Loader/Loader';
import useTitle from '../../hooks/useTitle/useTitle';
import SingleReportedRow from './SingleReportedRow/SingleReportedRow';

const ReportedItems = () => {
    useTitle('Reported Items')
    const { data: reportedItems = [], refetch, isLoading } = useQuery({
        queryKey: [' reportedItems'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reported`, {
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
            <h1 className='font-bold text-4xl my-4'>Total Sellers : {reportedItems?.length}</h1>
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
                        reportedItems?.map((item, idx) => <SingleReportedRow
                            key={item._id}
                            idx={idx + 1}
                            item={item}
                            refetch={refetch}
                        ></SingleReportedRow>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default ReportedItems;