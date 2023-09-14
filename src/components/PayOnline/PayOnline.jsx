import React from 'react'
import gpay from "../../assets/gpay.jpg";
import paytm from "../../assets/paytm.jpg";
const PayOnline = () => {
  return (
    <div className="container bg-white p-6 mx-auto mt-4">
    <div className="bg-white shadow-md p-6 rounded-lg">
    <div className="container mx-auto mt-8 flex justify-center">
      <div className="w-1/4 pr-4">
        <img src={gpay}/> {/* Render your first image card component */}
        <h2 className='font-bold text-2xl'>Pay with GPay</h2>
      </div>
      <div className="w-1/4 pl-4">
      <img src={paytm}/> {/* Render your second image card component */}
      <h2 className='font-bold text-2xl'>Pay with Paytm</h2>
      </div>
    </div>
    </div>
    </div>
  )
}

export default PayOnline