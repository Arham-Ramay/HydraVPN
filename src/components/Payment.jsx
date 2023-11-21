import React from "react";
import pic from "../assets/2.png";
import pic1 from "../assets/Payment Icons.png";
import pic2 from "../assets/PaymentIcon.png";
import pic3 from "../assets/PaymentIcon4.png";
import pic4 from "../assets/PaymentIcon1.png";

const Payment = () => {
  return (
    <div className="md:px-12 px-8 bg-[#101828]">
      <div className="container flex justify-between items-center mx-auto gap-8 flex-wrap md:flex-nowrap">
        <div className="text-white w-full">
          <p className="text-2xl font-bold">2.Enter Details to continue</p>
          <p className="text-xs">
            With the provided email you will be able to access Hydra VPN Premium
            services.
          </p>

          <div className="  border-gray-200 text-white">
            <form className="space-y-6 pt-2" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-white focus:border-white block w-full p-2.5  bg-[#101828] dark:border-white dark:placeholder-white dark:text-white"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-white block w-full p-2.5 bg-[#101828] dark:placeholder-white dark:text-white sm:w-full sm:mx-auto"
                  required
                />
                <p className="text-xs pt-2">
                  We keep your information private and contact you only due to
                  our services.
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* second portion */}
        <div className="w-full">
          <div className="flex justify-between items-center text-white pb-4 text-lg font-semibold ">
            <p>Discount</p>
            <p className="text-red-500">-$2.86/mo</p>
          </div>
          <div className="flex justify-between items-center text-white pb-4 text-lg font-semibold ">
            <p>Subtotal</p>
            <p>-$2.00/mo</p>
          </div>
          <hr className="mx-2 my-4" />
          <div className="flex justify-between items-center text-white pb-4">
            <p className="text-2xl font-bold items-center flex">
              Total
              <span className="text-xs text-red-500">Apply promo code</span>
            </p>
            <p className="text-2xl font-bold">-$2.00/mo</p>
          </div>
          <div className="flex justify-between items-center text-white ">
            <p className="text-lg font-bold">Encrypted & Secured</p>
            <button className="bg-red-600 px-5 py-1 text-white rounded-lg ">
              Pay Now
            </button>
          </div>
        </div>
      </div>
      {/* payment part */}
      <div className="text-white md:w-1/2 w-full mt-6 pb-5 ">
        <p className="text-2xl font-bold mb-2">3.Payment Method</p>
        <div className="border rounded-md border-blue-500 p-5">
          <div className="flex justify-between items-center md:px-3">
            <div className="flex gap-3 items-center">
              <input type="radio" checked />
              <p>Credit Card</p>
            </div>
            <div className="flex items-center gap-0.5 flex-wrap md:flex-nowrap">
              <img src={pic} alt="" />
              <img src={pic4} alt="" />

              <img src={pic3} alt="" />

              <img src={pic2} alt="" />
            </div>
          </div>
          <hr className="mx-2 my-4" />
          <div>
            <label>Card No</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Card No "
                className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-white focus:border-white block w-full p-2.5  bg-[#101828] dark:border-white dark:placeholder-white dark:text-white pl-12"
              />
              <img
                src={pic}
                alt="Icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-6 "
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 flex-wrap md:flex-nowrap">
            <div className="w-full mt-2">
                <label>Expiry Date</label>
                <input
                type="date"
                className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-white focus:border-white block w-full p-2.5  bg-[#101828] dark:border-white dark:placeholder-white dark:text-white"
              />
            </div>
            <div  className="w-full">
                <label>Security Code</label>
                <input
                type="number"
                placeholder="123"
                className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-white focus:border-white block w-full p-2.5  bg-[#101828] dark:border-white dark:placeholder-white dark:text-white"
              />
            </div>
          </div>
          
        </div>
        <div className="flex justify-between items-center border p-2 mt-2 rounded-md">
            <div className="flex gap-3 items-center">
              <input type="radio" />
              <p>Paypal</p>
            </div>
            <div>
             

              <img src={pic1} alt=""/>
              
            </div>
          </div>
      </div>
    </div>
  );
};

export default Payment;
