import React, { useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext";
import EmptyAlert from "../../EmptyAlert/EmptyAlert";
import Loading from "../../Loading/Loading";

const MyCart = () => {
  const { user, setLoading, loading } = useContext(AuthContext);
  // console.log(user);
  const [datas, setdatas] = useState([]);
  //showing ordered items in cart
  useEffect(() => {
    fetch(`https://server-sarwarhridoy4.vercel.app/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setdatas(data));
  }, [user?.email]);
  if (loading) {
    return <Loading></Loading>;
  }
  setLoading(false);
  const length = datas.length;
  // console.log(length);
  // console.log(datas);

  // deleting a cart item with id
  const handelDeleteTask = (_id) => {
    // console.log(task);
    fetch(`https://server-sarwarhridoy4.vercel.app/orders/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(true);
        toast.success(`item deleted.`);
        setLoading(false);
      });
  };
  return (
    <div className='overflow-x-auto'>
      <table className='table max-w[60vw] mx-auto my-10'>
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>SL</th>
            <th>UserName</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {length !== 0 &&
            datas.map((data, i) => (
              <tr key={i} data={data}>
                <th>{i + 1}</th>
                <td>{data?.username}</td>
                <td>{data?.productname}</td>
                <td>${data?.price}</td>
                <td>
                  <img
                    className='w-20'
                    src={data?.image}
                    alt={data?.productname}
                  />
                </td>
                <td className=''>
                  <button className='btn btn-xs btn-success m-2'>Buy</button>
                  <button
                    onClick={() => handelDeleteTask(data?._id)}
                    className='btn btn-xs btn-error m-2'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          {length === 0 && <EmptyAlert></EmptyAlert>}
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
