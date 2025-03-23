import Button from "./Button";
import List from "./List";
import ProfilePicture from "./ProfilePicture";
//import UserGreeting from "./UserGreeting"

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 102 },
    { id: 2, name: "Orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "Pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "Potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 45 },
    { id: 9, name: "kales", calories: 105 },
    { id: 10, name: "cabbages", calories: 159 },
    { id: 11, name: "carrots", calories: 63 },
  ];
  return (
    <>
      {/* <UserGreeting isLoggedIn={true} /> 
      <UserGreeting isLoggedIn={true} username="John" />  */}
      {fruits.length > 0 && <List items={fruits} category="fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="vegetables" />
      )}

      <Button/>

      <ProfilePicture/>
    </>
  );
}

export default App;
