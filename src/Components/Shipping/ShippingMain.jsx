import React, { useState } from 'react';
import shipping_image from "../../assets/shipping-section1.png";
import DataTable from 'react-data-table-component';
import axios from 'axios';

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




const ShippingMain = () => {

    const [myApplication, setMyApplication] = useState(null);
    const [value, setValue] = useState(null)
    const getMyApplication = async (id) => {
        try {
            const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/applications/getSpecificApplication/${id}`, {
                headers: {
                    token: localStorage.getItem("currentUserToken")
                }
            })
            result && console.log(result);
            result && setMyApplication([result?.data?.result[0]]);
        }
        catch (error) {
            return error;
        }
    }

    return (
        <div>
            <div className='py-12 flex items-center justify-between'>
                <div>
                    <h1 className='max-md:text-[8vw] text-[30px] text-[#191720] font-bold'>
                        Track Your
                    </h1>
                    <p className='text-[#F7A325] max-md:text-[8vw] text-[30px] font-bold'>Goods</p>
                    <div className='flex items-center gap-1 border-4 border-black p-1 rounded-xl mt-4'>
                        <input type="text" name="id" id="id"
                            className="border-0 outline-0 rounded-xl"
                            onChange={(e) => {
                                setValue(e.target.value)
                            }}
                        />
                        <button className='py-2 px-6 text-black font-bold bg-[#F7A325] rounded-xl'
                            onClick={() => {
                                value && getMyApplication(value);
                            }}
                        >Track</button>
                    </div>
                </div>
                <div className='max-md:hidden'>
                    <img src={shipping_image} alt="img" />
                </div>
            </div>
            {
                myApplication && <div>
                    <div className="head font-bold my-2">Result</div>
                    <DataTable
                        columns={columns}
                        data={myApplication}
                    />
                </div>
            }
        </div>
    );
}

export default ShippingMain;
