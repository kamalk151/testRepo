import { useState } from "react";

let useCounters = () =>  {

  const [orderCount, setOrderCount] = useState({ count: 0 });
   
   const changeOrderCount = () => {
      setOrderCount({ count: orderCount.count + 1 }) 
    }
   return { orderCount, changeOrderCount };
}

export default useCounters;
