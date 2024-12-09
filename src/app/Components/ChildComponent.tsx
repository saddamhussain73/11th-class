// const ChildCOmponent = (props: any) => {
//     console.log(props);
   
//      return (
       
//        <div className="bg-white  inline-block text-center my-5 p-2 mx-6 text-black font-bold text-2xl border border-blue-800">
//          <h1 className=" ">{props.image}</h1>
//          <h2 className="text-blue-900  hover:text-red-700"> {props.name} </h2>
//          <p className="text-green-500 hover:text-red-700"> {props.price} </p>
//          <p className="text-orange-500 hover:text-red-700"> {props.reviews} </p>
//        </div>
      
//      );
//    };
//    export default ChildCOmponent;
   

const ChildComponent = (props: any) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden text-center p-4 mx-2 sm:mx-4 md:mx-6 text-black font-medium text-base md:text-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="w-full h-auto mb-4">
        {props.image}
      </div>
      
      {/* Name */}
      <h2 className="text-blue-900 text-xl font-semibold hover:text-red-700 transition duration-300">
        {props.name}
      </h2>

      {/* Price */}
      <p className="text-green-500 text-base md:text-lg mt-2 hover:text-red-700 transition duration-300">
        {props.price}
      </p>

      {/* Reviews */}
      <p className="text-orange-500 text-sm md:text-base mt-1 hover:text-red-700 transition duration-300">
        {props.reviews}
      </p>
    </div>
  );
};

export default ChildComponent;