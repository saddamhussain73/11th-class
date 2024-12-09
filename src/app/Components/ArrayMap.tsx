



const ArrayMap = () => {
    const carData = [
      {
        carName: "Suzuki Alto",
        carImage: <img src="/Suzuki_Alto_-_PNG.png" alt="Suzuki Alto" className="w-full h-auto object-cover rounded-md" />,
        price: "PKR 25.5 - 32.5 lacs",
        carReviews: "457 Reviews",
      },
      {
        carName: "Honda City",
        carImage: <img src="/Honda_City_Front.jpg" alt="Honda City" className="w-full h-auto object-cover rounded-md" />,
        price: "PKR 25.5 - 32.5 lacs",
        carReviews: "457 Reviews",
      },
      {
        carName: "Toyota Corolla",
        carImage: <img src="/Corolla-X-Cars.jpg" alt="Toyota Corolla" className="w-full h-auto object-cover rounded-md" />,
        price: "PKR 25.5 - 32.5 lacs",
        carReviews: "457 Reviews",
      },
      {
        carName: "Honda Civic",
        carImage: <img src="/Civic-Cover.jpg" alt="Honda Civic" className="w-full h-auto object-cover rounded-md" />,
        price: "PKR 25.5 - 32.5 lacs",
        carReviews: "457 Reviews",
      },
    ];
  
    return (
      <div className="p-6 md:p-12 lg:p-16 bg-gray-100">
        {/* Header */}
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800">
          Featured New Cars Using Map Function
        </h1>
  
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {carData.map((veh, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden text-center p-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Car Image */}
              <div className="mb-4">{veh.carImage}</div>
  
              {/* Car Name */}
              <p className="text-blue-900 text-lg font-semibold hover:text-red-700 transition duration-300">
                {veh.carName}
              </p>
  
              {/* Car Price */}
              <p className="text-green-500 text-base mt-2 hover:text-red-700 transition duration-300">
                {veh.price}
              </p>
  
              {/* Car Reviews */}
              <p className="text-orange-500 text-sm mt-1 hover:text-red-700 transition duration-300">
                {veh.carReviews}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ArrayMap;
  
// const ArrayMap=()=> {

//     //     const carName =[
//     //         { carImag: <img src="/Civic-Cover.jpg" alt="Civic" /> ,carName: "toyota", price:200 },
        
//     //         { carName: "honda", price:300 },
//     //         { carName: "suzuki", price:400 },
//     //         { carName: "nisan ", price: 600 },
//     //         {}
//     //     ]
    
//     //     return(
//     // <div>
//     //        {
//     //         carName.map((veh)=>{
//     //             return(
//     //                 <div className="flex-col justify-items-center my-4 bg-red-400 text-white">
//     //                 <h1 className=" text-5xl"> {veh.carName} </h1>
//     //                 <h2 className="text-3xl "> {veh.price} </h2>
//     //                 <h3> {veh.carImag} </h3>
                    
//     //                 </div>
//     //             )
//     //         }
//     //     )
//     //        }
//     //        </div>
//     //     )
//     // }
    
    
    
//     const carName =[
       
    
//         { carName: "Suzuki Alto",carImage: <img src="/Suzuki_Alto_-_PNG.png" alt="Suzuki_Alto" height={500} width={500} />, price:"PKR 25.5 - 32.5 lacs",carReviews:"457 Reviews" },
//         { carName: "Honda City",carImage: <img src="/Honda_City_Front.jpg" alt="Honda City" height={500} width={500} />, price:"PKR 25.5 - 32.5 lacs",carReviews:"457 Reviews" },
//         { carName: "Toyota Corolla",carImage: <img src="/Corolla-X-Cars.jpg" alt="Toyota Corolla" height={500} width={500} />, price:"PKR 25.5 - 32.5 lacs,",carReviews:"457 Reviews" },
//         { carName: "Honda Civic",carImage: <img src="/Civic-Cover.jpg" alt="Honda Civic" height={500} width={500} />, price:"PKR 25.5 - 32.5 lacs",carReviews:"457 Reviews" },
        
       
//     ]
    
//     return(
//     <div className="flex-auto justify-items-center text-center text-5xl font-extrabold mt-20">
//       <h1>Featured New Cars Using Map Function</h1>
//        {
//         carName.map((veh ,index)=>{
//             return(
                
//                 <div key={index} className="bg-white inline-block text-center my-5 p-2 mx-6 text-black font-bold text-2xl border border-blue-800 ">
//                      <p> {veh.carImage} </p>
//                 <p className="text-blue-900  hover:text-red-700"> {veh.carName} </p>
//                 <p className="text-green-500 hover:text-red-700" > {veh.price} </p>
//                 <p className="text-orange-500 hover:text-red-700" > {veh.carReviews} </p>
//                 </div>
//             )
//         }
//     )
//        }
//        </div>
//     )
//     }
//     export default ArrayMap;