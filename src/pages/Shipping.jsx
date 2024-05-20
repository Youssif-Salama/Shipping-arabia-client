import React, { useEffect, useState } from 'react';
import ShippingMain from '../Components/Shipping/ShippingMain';
import ShippingTable from '../Components/Shipping/ShippingTable';

const Shipping = () => {
    return (
        <div className='w-[80%] m-auto'>
            <ShippingMain />
            <ShippingTable />
        </div>
    );
}

export default Shipping;
