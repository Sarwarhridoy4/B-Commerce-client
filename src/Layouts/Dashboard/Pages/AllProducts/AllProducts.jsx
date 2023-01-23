import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
  //showing All Product to Admin
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
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
            <th>Detailse</th>
          </tr>
        </thead>
        <tbody>
                  {
                      products?.map((prod,i)=><tr key={i} ord={prod}>
                        <th>{i+1}</th>
                        <td>{prod?.name}</td>
                        <td><img className='w-32' src={prod?.img} alt={prod?.name} /></td>
                          <td><strong>$ {prod?.price}</strong></td>
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

export default AllProducts;