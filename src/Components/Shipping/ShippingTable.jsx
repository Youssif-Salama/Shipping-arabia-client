import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';



const situations = ["", "submit", "prepared", "on way", "arrived", "confirmed"]
const columns = [
    {
        name: 'ID',
        selector: row => row._id,
        width: "200px"
    },
    {
        name: 'ReceiverName',
        selector: row => row.ReceiverName,
    },
    {
        name: 'Email',
        selector: row => row.Email,
    },
    {
        name: 'Phone',
        selector: row => row.Phone,
    },
    {
        name: 'Branch',
        selector: row => row.Branch,
    },
    {
        name: 'situation',
        selector: row => situations[row.situation],
    },
    {
        name: 'Governorate',
        selector: row => row.Destination?.Governorate,
    },
    {
        name: 'Country',
        selector: row => row.Destination?.country,
    },
    {
        name: 'Address',
        selector: row => row.Destination?.Address,
    },
];

const ShippingTable = () => {

    const [myApplication, setMyApplication] = useState(null);
    const getMyApplication = async () => {
        try {
            const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/applications`, {
                headers: {
                    token: localStorage.getItem("currentUserToken")
                }
            })
            result && console.log(result);
            result && setMyApplication(result?.data?.result);
        }
        catch (error) {
            return error;
        }
    }

    useEffect(() => {
        getMyApplication();
    }, [])
    return (
        <div className='py-12'>
            <div className="head font-bold my-2">All Applications</div>
            {
                myApplication && <div>
                    <DataTable
                        columns={columns}
                        data={myApplication}
                    />
                </div>
            }
        </div>
    );
}

export default ShippingTable;
