import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from './my/MyContext'

const Counter = () => {

    // usestate -hooks of react for management of states
    // syntax:
    //let/count[stateVariable,function]=useState(initial value)
    // stateVariable - name of the state variable
    // function- function to update state of stateVariable
    // initial_value - starting value of the state variable

    /*
    UseEffect- one of the which is used to show side effects 
    syntax:
    useEffect(function ,dependency)

   function: side effects to be seen any dependency updates
   depedency: Array of useStates that triggers the function    when updated


    */

    let [count, setCount] = useState(0)
    let [data,setData]=useState(100)



    const increase_count = () => {
        console.log(count)
        return setCount(++count)
        // set count le (count++)को value लाई  count ma लगेर set गदछ ।
    }
    useEffect(()=>{
        window.alert("Value is Updated")
    },[count,data])


    let message = useContext(MyContext)

    return (
        <>
        {message }
            <div className='d-flex justify-content-center align-items-center flex-column bg-dark text-white' style={{ height: '80vh' }}>
                <h1>
                    Counter:{count}
                </h1>

                {
                    count < 10 &&
                    // true vhya pachedi ko kaam garxa natra falsew vhya gardaina
                    <button className='btn btn-warning' onClick={increase_count}>Increase Count</button>
                }
                {
                    count > 0 ?
                        <button className='btn btn-success mt-3' onClick={() => setCount(--count)}>Decrease Count</button> :
                        <button className='btn btn-success mt-3' disabled onClick={() => setCount(--count)}>Decrease Count</button>
                }
                <button className='btn btn-danger mt-3' onClick={() => setCount(0)}>Reset</button>


                <h1>
                    Data:{data}
                </h1>

                {
                    data < 1000 &&
                    // true vhya pachedi ko kaam garxa natra falsew vhya gardaina
                    <button className='btn btn-warning' onClick={()=>{setData(data+100)}}>Increase Data </button>
                }
                {
                    data > 100 ?
                        <button className='btn btn-success mt-3' onClick={() => {setData(data-100)}}>Decrease Data</button> :
                        <button className='btn btn-success mt-3' disabled onClick>Decrease Data</button>
                }
                <button className='btn btn-danger mt-3' onClick={() => setData(100)}>Reset</button>
            </div>

        </>
    )
}


export default Counter

