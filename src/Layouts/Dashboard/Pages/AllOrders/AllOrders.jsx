import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders, setOders] = useState([]);
  //showing All Order to Admin
  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => setOders(data));
  }, []);
  console.log(orders);
    return (
        <div className='overflow-x-auto'>
      <table className='table w-3/4 mx-auto my-10 table-compact'>
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
                  {
                      orders?.map((ord,i)=><tr key={i} ord={ord}>
                        <th>{i+1}</th>
                        <td>{ord?.productname}</td>
                        <td><img className='w-32' src={ord?.image} alt="" /></td>
                        <td><button className="btn btn-sm btn-outline btn-success">Detail</button></td>
                      </tr>)
          }
          
        </tbody>
          </table>
          
    </div>
    );
};

export default AllOrders;