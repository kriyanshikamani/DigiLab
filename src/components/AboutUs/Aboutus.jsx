import React,{useContext} from "react";
import about_image from "../../assets/about_image.png";
import CountUp from "react-countup";
import SharedContext from "../../context/SharedContext";

const NumberCounter = ({ end, duration }) => {
  return (
    <span className="text-3xl text-blue-950 font-extrabold">
      <CountUp end={end} duration={duration} separator="" />+
    </span>
  );
};

const Aboutus = () => {

const {data}=useContext(SharedContext);

  return (
    <div className="relative">
      <img src={about_image} alt="About Us" className="w-full" />

      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-2 my-9">
          <div className="min-w-1/2  p-5 bg-white border-2 border-blue-900 rounded-md shadow">
            <h5 className="mb-2 text-2xl font-bold text-gray-900">OUR VISION</h5>
            <p className="font-normal text-gray-700">Be the most trusted healthcare partner, enabling healthier lives.</p>
          </div>
          <div className="min-w-1/2 mx-5 p-5 bg-white border-2 border-blue-900 rounded-md shadow">
            <h5 className="mb-2 text-2xl font-bold text-gray-900">OUR MISSION</h5>
            <p className="font-normal text-gray-700">To be the undisputed market leader by providing accessible, affordable, timely and quality healthcare diagnostics, applying insights and cutting edge technology to create value for all stakeholders.</p>
          </div>
        </div>

        <div>
          <h5 className="mb-2 text-2xl font-bold text-gray-900">Our Journey</h5>
          <p className="font-normal text-gray-700">Late Dr. Major S.K. Lal, commenced the business of providing pathology services and maintaining a blood bank in the year 1949 through sole proprietorship M/s Central Clinical Laboratory and M/s Blood Bank Transfusion Centre. The business of diagnostic and related healthcare tests and services now continues to be provided by our Company.</p>
        </div>

        <div className="my-5">
          <h5 className="mb-2 text-2xl font-bold text-gray-900">Why DigiLab</h5>
          <div className="grid grid-cols-3 md:grid-cols-6 ">
            {data.map((item, index) => (
              <div key={index} className="col-span-1 md:col-span-2 p-3 flex items-center">
                <img className="w-24 h-24 rounded-full shadow-lg mr-3  hover: hover:scale-110 transition duration-300" src={item.imageSrc} alt={item.text} />
                <div>
                  <div>
                    <NumberCounter end={item.number} duration={30} />
                  </div>
                  <p className="mb-3 font-normal text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
