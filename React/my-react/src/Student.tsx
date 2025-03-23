import React from "react"

interface StudentProps {
    name:string
    age:number
    isStudent:boolean
}
const Student: React.FC<StudentProps> =({name,age,isStudent}) =>{
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>student: {isStudent ? "Yes" : "No"}</p>
      
    </div>
  )
}

export default Student
