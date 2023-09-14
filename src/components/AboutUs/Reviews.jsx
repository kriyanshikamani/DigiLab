// src/Reviews.jsx
import { useContext } from "react";
import SharedContext from "../../context/SharedContext";

const Reviews = () => {
  const {customers}=useContext(SharedContext);
  return (
    <div  className="container bg-white p-6 mx-auto mt-4">
      
      <main className="container mx-auto w-1/2 py-8">
        <h1 className="text-3xl font-bold mb-4">Customer Reviews</h1>
        <div className="grid gap-4">
          {customers.map(({ id, name, time,review, rating, imageSrc }) => (
            <div key={id} className="p-4  flex items-start">
              <img src={imageSrc} alt={name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <a href="#" className="text-xl font-bold mb-2">{name}</a>
                <p className="text-blue-800 text-sm">{time}</p>
                <p className="text-gray-600 mb-4">{review}</p>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => {
                    if (index + 1 <= Math.floor(rating)) {
                      // Full star
                      return <span key={index} className="text-yellow-500 text-xl">&#9733;</span>;
                    } else if (index < Math.ceil(rating)) {
                      // Half star
                      return <span key={index} className="text-yellow-500 text-xl">&#9733;&#189;</span>;
                    } else {
                      // Empty star
                      return <span key={index} className="text-gray-400 text-xl">&#9733;</span>;
                    }
                  })}
                  <span className="ml-1 text-gray-600">{Math.floor(rating)}/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Reviews;
