import Buttton from "./Button/Buttton"
import Card from "./Card"
import Student1 from "./Conditions"
import Student from "./Student"

function App() {


  return (
    <>
     <Card/> 
     <Card/>
     <Buttton/>
     <Student name="spongeBob" age={30} isStudent ={true}/>
     <Student name="Patrick" age={42} isStudent={false}/>
     <Student name="Alvin" age={20} isStudent={true}/>
     <Student name="David" age={25} isStudent={false}/>
     <Student1 name="Dickson" age={21}/>
    </>
  )
}

export default App
