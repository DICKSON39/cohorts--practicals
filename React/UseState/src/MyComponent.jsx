import React, { useState} from 'react'

function MyComponent() {

    const [name,setName] = useState("Guest");
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)
    const updateName = () => {
       setName("Dalton Mnyeri")
       
    }

    const updateAge = () => {
        setAge(age + 1)
    }

    const togEmploy = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>

            <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={togEmploy}>Status</button>
        </div>
    )
  
}

export default MyComponent
