import React, { useState } from 'react'
/**
 * 
 * @onChange => event handler used primarily with form elements
 *              example <input/>, <textarea/>, <select/>, ,<radio/>
 *               triggers a function everytime the value of the input changes.
 */
function MyComponent2() {
    const [name, setName] = useState("Guest");
    const[quantity,setQuantity] = useState(1);
    const [comment,setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    function handleShippingChange (event) {
        setShipping(event.target.value) 
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)

        
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }
    function handleNameChange (event) {
        setName(event.target.value)
    }

  return (
    <div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'/>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select Option</option>
        <option value="mpesa">Mpesa</option>
        <option value="visa">Visa</option>
        <option value="mastercard"> Mastercard</option>
        </select>
        <p>You selected: {payment}</p>

        <label>
            <input type='radio' value="Pickup" 
            checked={shipping === "Pickup"} 
            onChange={handleShippingChange }/>
           Pick up
        </label>
        <br/>
        <label>
            <input type="radio" value="Delivery" 
            checked={shipping === "Delivery"} 
            onChange={handleShippingChange}/>
           Delivery
        </label>

        <p> Shipping Method: {shipping}</p>
    </div>
  )
}

export default MyComponent2