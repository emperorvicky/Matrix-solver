"use client"
import React, { useState } from "react"

interface MyState {
  val1:string,
  val2:string,
  val3:string,
  val4:string,
  val5:string,
  val6:string,
  val7:string,
  val8:string,
  val9:string
}

export default function Home() {
  const [val, SetVal] = useState<MyState>({
    val1:'',
    val2:'',
    val3:'',
    val4:'',
    val5:'',
    val6:'',
    val7:'',
    val8:'',
    val9:''
  })
  const [genVal, setGenVal] = useState<number | undefined>(undefined)
  const [open, setOpen] = useState(false)

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    SetVal(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSolving = () => {
    // const defaultZero = (value: number | undefined ) => (value !== undefined ? value : 0)
    const defaultZero = (value: string): number => {
      const parsedValue = parseFloat(value);
      return isNaN(parsedValue) ? 0 : parsedValue;
    };
    const finalValue = defaultZero(val.val1) *((defaultZero(val.val5) * defaultZero(val.val9)) - (defaultZero(val.val6) * defaultZero(val.val8))) - defaultZero(val.val2) * ((defaultZero(val.val4) * defaultZero(val.val9)) - (defaultZero(val.val6) * defaultZero(val.val7))) + defaultZero(val.val3) *((defaultZero(val.val4) * defaultZero(val.val8)) - (defaultZero(val.val5) * defaultZero(val.val7)))
    setGenVal(finalValue)
    setOpen(!open)
  }


  return (
    <main>
     <header id="top"  className='bg-blue-500 p-4 shadow-md  w-full fixed top-0 z-20 '>
     <div className='container text-center  px-4 py-2'>
      <p className="uppercase text-white text-2xl font-bold">Matrix Solver</p>
     </div>
     </header>
  <div className="mt-[10rem]">
    <div>
 <p className="text-xl text-center pt-3 relative bottom-[3rem] uppercase font-bold">3 x 3 Matrix </p>
    </div>
 <div className="w-full max-w-md mx-auto ">

      <table className="table-fixed mx-auto">

        <tbody>
          <tr>
        <td className="td">
      <input name="val1" 
        value={val.val1}  
        onChange={handleChange} 
        type="text" 
        inputMode="numeric" 
        pattern="[0-9]*" 
        className="input-col"/>   
        </td>

        <td className="td">
        <input name="val2" 
          value={val.val2}  
          onChange={handleChange} 
          type="text" 
          inputMode="numeric" 
          pattern="[0-9]*" 
          className="input-col"/>   
        </td>
        <td className="td">
        <input name="val3" 
          value={val.val3}  
          onChange={handleChange} 
          type="text" 
          inputMode="numeric" 
          pattern="[0-9]*" 
          className="input-col"/>   
        </td>
          </tr>
          <tr>
          <td className="td">
          <input name="val4" 
        value={val.val4}  
        onChange={handleChange} 
        type="text" 
        inputMode="numeric" 
        pattern="[0-9]*" 
        className="input-col"/>
          </td> 
          <td className="td">
          <input name="val5" 
        value={val.val5}  
        onChange={handleChange} 
        type="text" 
        inputMode="numeric" 
        pattern="[0-9]*" 
        className="input-col"/>
          </td> 
          <td className="td">
      <input name="val6" 
        value={val.val6}
        onChange={handleChange} 
        type="text" 
        inputMode="numeric" 
        pattern="[0-9]*" 
        className="input-col"/>
          </td> 
          </tr>
          <tr>
          <td className="td">
          <input name="val7" 
        value={val.val7}  
        onChange={handleChange} 
        type="text" 
        inputMode="numeric" 
        pattern="[0-9]*" 
        className="input-col"/>
          </td> 
          <td className="td">
          <input name="val8" 
        value={val.val8}  
        onChange={handleChange} 
        type="text" 
        inputMode="numeric" 
        pattern="[0-9]*" 
        className="input-col"/>
          </td> 
          <td className="td">
          <input name="val9" 
        value={val.val9}  
        onChange={handleChange} 
        type="text" 
        inputMode="numeric" 
        pattern="[0-9]*" 
        className="input-col"/>
          </td> 
          </tr>
        </tbody>
      </table>
    </div>

    <div className="text-center mt-5">
      <button className="rounded bg-green-400 py-2 px-4 cursor-pointer hover:bg-green-200 text-white" onClick={handleSolving}>{open? "hide" : "submit"} </button>
    </div> 
  { open ?
    <div className="relative left-[46rem] top-[2rem]">
    <p className="text-xl">y = {genVal? genVal :""}</p>
    </div> : ''  
 }
 </div> 


    </main>

  )
}
