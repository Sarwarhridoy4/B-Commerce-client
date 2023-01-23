import React, { useEffect, useState } from "react";

const AllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  //showing ordered items in cart
  useEffect(() => {
    fetch(`http://localhost:5000/customers`)
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  console.log(customers);
  return (
    <div className='overflow-x-auto'>
      <table className='table w-3/4 mx-auto my-10 table-compact'>
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Detailse</th>
          </tr>
        </thead>
        <tbody>
                  {
                      customers?.map((cus,i)=><tr key={i} cus={cus}>
                        <th>{i+1}</th>
                        <td>{cus?.name}</td>
                        <td>{cus?.email}</td>
                        <td><button className="btn btn-sm btn-outline btn-success">Detail</button></td>
                      </tr>)
          }
          
        </tbody>
          </table>
          <div className="w-9/12 mx-auto">
          <button className="btn btn-warning">Add Customer</button>
          </div>
    </div>
  );
};

export default AllCustomers;
