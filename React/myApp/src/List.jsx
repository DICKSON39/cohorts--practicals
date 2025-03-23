import React from "react";
import PropTypes  from 'prop-types'

function List(props) {
    const category = props.category;
    const itemList = props.items;
  

  //Sorting
  //itemList.sort((a,b)=> b.name.localeCompare(a.name)) Alphabetical
  //itemList.sort((a,b) => a.name.localeCompare(b.name)) Revee
  // itemList.sort((a, b) => a.calories - b.calories)
  //itemList.sort((a,b) => b.calories - a.calories)

  //Filtering Of fruits with calories
  const highCalFruit = itemList.filter((item) => item.calories >= 100);
  const lowCalFruit = itemList.filter((item) => item.calories < 100);

  const list2 = highCalFruit.map((highCalFruit) => (
    <li key={highCalFruit.id}>
      {highCalFruit.name}: &nbsp; {highCalFruit.calories}
    </li>
  ));

  const listItem1 = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; {item.calories}
    </li>
  ));

  const listItem = lowCalFruit.map((lowCalFruit) => (
    <li key={lowCalFruit.id}>
      {lowCalFruit.name}: &nbsp; {lowCalFruit.calories}
    </li>
  ));
  return (
    <ol className="list-items">
        <h1 className="list-category">{category}</h1>
      <p> Original: {listItem1}</p>
      <hr /> <p>Low Calories  under 100 calories: {listItem}</p>
      <hr /> <p>High Calories more than a hundred: {list2}</p>
    </ol>
  );
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number, name:PropTypes.string, calories:PropTypes.number})),
}

List.defaultProps = {
    category: "category",
    items: []
}

export default List;
