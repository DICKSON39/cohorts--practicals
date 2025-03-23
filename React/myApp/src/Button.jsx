import React from 'react'

function Button() {
    let count = 0;

    const handleclicked = (e) => e.target.textContent = "Ouch😀😀"
    
    const handleclcking = (name) => {
        if(count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} times`)
        }
        else {
            console.log(`${name} stop clicking me`)
        }
    }

    const handleClick = () => console.log("Ouch")
   const handleclick2 = (name) => console.log(`${name} stop clicking me`);
    
  return (
   <>
   <button onClick={() => handleclcking("User")}>Counting </button>
   <button onClick={() =>handleclick2("Dalton")}>Warning😒😒</button>
   <button onClick={ handleClick}>Click Me😂😂</button>
   <button onDoubleClick={(e) => handleclicked(e)}>Clicked</button>
   </>
  )
}

export default Button
