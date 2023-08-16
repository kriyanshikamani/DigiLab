
import tests from "./Test.json";
import {AiOutlineRight} from "react-icons/ai";
import { Link } from "react-router-dom";


const Test = () => {
  return (
      <div className=" grid grid-cols-3 gap-6 w-3/4 mx-auto text-sm  ">
        {tests.map((test, index) => (
          <div href="#" key={index} className="block max-w-sm p-6 bg-white border-gray-200 rounded-lg border-2 shadow-gray-600 hover:bg-gray-100">
            <div className="flex">
            <span className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{test.Title}</span> 
            <span className="ms-auto "><Link to="/test-description"><AiOutlineRight size={20} className=" rounded-full bg-blue-900 p-1 text-white"/></Link></span>
            </div>
           
            {test.Data.map((itemData, dataIndex) => (
              <div key={dataIndex} className="mb-4">
                <ul>
                  <li className=" text-gray-600">{itemData.Known}</li>
                  <li className=" text-black-900">{itemData.Description}</li>
                </ul>
                <div className=" text-black-900">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold my-4">₹ {itemData.Price}</span>
                    <button className="px-4 py-2 w-full  text-white bg-blue-900 rounded-md hover:bg-blue-600">{itemData.Button}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
  );
};

export default Test;
