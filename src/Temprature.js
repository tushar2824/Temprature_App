import React, { useState } from 'react'

const Temprature = () => {

  const [Celcius,SetCelcius] =useState(0);
  const [Farenhite,SetFarenhite] =useState(32);

    const HandleFarenhite =(e) => {
       const value = e.target.value;
       SetFarenhite(value);
       SetCelcius(ftoc(value));
    };

    const HandleCelcius =(e) => {
      const value = e.target.value;
      SetCelcius(value);
      SetFarenhite(ctof(value));
    };
    const ftoc=(Farenhite)=>
    {
       return (Farenhite - 32)*  5/9;
    };

    const ctof= (Celcius)=>
    {
      return (Celcius * 9) / 5 +32;
    };


  return (
    <div>
      <div>Temprature Convertor</div>
      <div>
        <label>Celcius: </label>

        <input type="text" value={Celcius} onChange={HandleCelcius}/>

      </div>

      <div>Farenhite: </div>

      <input type="text" value={Farenhite} onChange={HandleFarenhite} />
    </div>
  );
};

export default Temprature
