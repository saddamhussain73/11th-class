

import ChildComponent from "./ChildComponent";


// const ParentComponent = () => {
//     let carImage = <img src="/Suzuki_Alto_-_PNG.png" alt="Suzuki Alto" height={500} width={500} />;
//     let carName = "Suzuki Alto";
//     let carPrice = "PKR 25.5 - 32.5 lacs";
//     let carReviews ="457 Reviews";

//     let carImage2 = <img src="/Honda_City_Front.jpg" alt="Honda City"height={500} width={500} />;
//     let carName2 = "Honda City";
//     let carPrice2 = "PKR 25.5 - 32.5 lacs";
//     let carReviews2 ="457 Reviews";

//     let carImage3 = <img src="/Corolla-X-Cars.jpg" alt="Toyota Corolla" height={500} width={500} />;
//     let carName3 = "Toyota Corolla";
//     let carPrice3 = "PKR 25.5 - 32.5 lacs";
//     let carReviews3 ="457 Reviews";

//     let carImage4 = <img src="/Civic-Cover.jpg" alt="Honda Civic" height={500} width={500} />;
//     let carName4 = "Honda Civic";
//     let carPrice4 = "PKR 25.5 - 32.5 lacs";
//     let carReviews4 ="457 Reviews";

  
  
    
//     return (
//       <div className="justify-items-center">
//         <h1 className="text-center text-5xl font-bold">Featured New Cars Using props</h1>
        
//         <ChildCOmponent image={carImage} name={carName} price={carPrice} reviews={carReviews} />
//         <ChildCOmponent image={carImage2} name={carName2} price={carPrice2} reviews={carReviews2} />
//         <ChildCOmponent image={carImage3} name={carName3} price={carPrice3} reviews={carReviews3} />
//         <ChildCOmponent image={carImage4} name={carName4} price={carPrice4} reviews={carReviews4} />
       
//       </div>
//     );
//   };
// export default ParentComponent;

const ParentComponent = () => {
  const cars = [
    {
      image: <img src="/Suzuki_Alto_-_PNG.png" alt="Suzuki Alto" className="w-full h-auto object-cover" />,
      name: "Suzuki Alto",
      price: "PKR 25.5 - 32.5 lacs",
      reviews: "457 Reviews",
    },
    {
      image: <img src="/Honda_City_Front.jpg" alt="Honda City" className="w-full h-auto object-cover" />,
      name: "Honda City",
      price: "PKR 25.5 - 32.5 lacs",
      reviews: "457 Reviews",
    },
    {
      image: <img src="/Corolla-X-Cars.jpg" alt="Toyota Corolla" className="w-full h-auto object-cover" />,
      name: "Toyota Corolla",
      price: "PKR 25.5 - 32.5 lacs",
      reviews: "457 Reviews",
    },
    {
      image: <img src="/Civic-Cover.jpg" alt="Honda Civic" className="w-full h-auto object-cover" />,
      name: "Honda Civic",
      price: "PKR 25.5 - 32.5 lacs",
      reviews: "457 Reviews",
    },
  ];

  return (
    <div className="p-6 md:p-12 lg:p-16 bg-gray-100">
      {/* Header */}
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800">
        Featured New Cars Using props
      </h1>
      
      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <ChildComponent
            key={index}
            image={car.image}
            name={car.name}
            price={car.price}
            reviews={car.reviews}
           />
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;