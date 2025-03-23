import React from "react";

interface StudentProps {
    name: string
    age:number
}

const Student1: React.FC<StudentProps> = ({name,age}) => {
    if(age < 18) {
        return <p>{name } Is a Minor</p>
    }
    return <p>{name} is an Adult.</p>
};

export default Student1