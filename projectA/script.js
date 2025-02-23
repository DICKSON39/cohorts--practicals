const user = {
    
    id: "USER-123456",
    name: {
        first: "Alice",
        last: "Liddell"
    },
    email: "alice@example.com",
    address: {
        shipping: {
            street: "123 Rabbit Hole",
            city: "Wonderland",
            state: "Fantasy",
            postalCode: "12345",
            country: "WL"
        },
        billing: {
            street: "456 Mad Hatter Lane",
            city: "Tea Party",
            state: "Fantasy",
            postalCode: "67890",
            country: "WL"
        }
    },
    payment: {
        total: "100.00",
        currency: "USD",
        details: {
            subtotal: "75.00",
            tax: "15.00",
            shipping: "10.00"
        },
        transactions: [
            {
                id: "TXN-123", amount: "50.00", description: "Magic Potion"
            },
            {
                id: "TXN-456", amount: "50.00", description: "Enchanted Sword"
            }
        ]
    }
};

const personalInfo = document.getElementById("personal-info");
const shippingAddress = document.getElementById("shipping-address");
const billingAddress = document.getElementById("billing-address");
const transactionsInfo = document.getElementById("transactions");

function injectData() {

    //The function first destructures the user object to extract i, first, last and email
    //It creates a new <div> element (userInfo)
    //The extracted details are added using template literals(``)
    const { id, name: { first, last }, email } = user;
    //create a div (userinfo) with document.createElement
    const userInfo = document.createElement("div")

    // Insert info into the using template literals
    userInfo.innerHTML = `
    <h2> User Id: ${id}</h2>
    <h2> First name: ${first}</h2>
    <h2> Last name: ${last}</h2>
    <h2>Email: ${email}</h2>
    `
    // append userinfo to personalInfo section
    personalInfo.append(userInfo);

    const {address: {shipping: {street, city, state, postalCode, country}} } = user;

    //create a div (shippingAddress) with document.cret
    //insert info using template literals
    shippingAddress.innerHTML = `
    <hr />
    <h3>User street: ${street}</h3>
     <h3>City: ${city}</h3>
      <h3>State: ${state}</h3>
       <h3>Postcode: ${postalCode}</h3>
        <h3>Country: ${country}</h3>
        
    `
    //console.log(street, city, state, postacode, country)

    const {address:{billing: {street:street1, city:city1, state:state1, postalCode:postalCode1, country:country1}}}= user;

    //insetr info using tmplte literals
    billingAddress.innerHTML =`
    <hr />
    <h3> Billing Address</h3>
    <h2>Street: ${street1}</h2>
    <h2>City: ${city1}</h2>
    <h2>State: ${state1}</h2>
    <h2>Postalcode: ${postalCode1}</h2>
    <h2> Country: ${country1}</h2>
    
    `
    const {payment:{transactions}} = user;
    //An ordered list
    const list = document.createElement("ul")

    //Loop through each transaction using .map()
    transactions.map(transactions => 
    {
        //destructuring the transaction to get id, amount and description
        const {id, amount, description} = transactions;
        // create a list element (<li>) for the transaction

        const transactionsDtls = document.createElement("li")
        //add the details to the list element using template literals

        transactionsDtls.innerHTML =`
        <p>Id: ${id}</p>
        <p>Amount: ${amount}</p>
        <p>Description: ${description} </p>
    
        `
        // Append the transaction/list item to the unordered list
        list.append(transactionsDtls)
    })
    //Append the list to the transactions section
    transactionsInfo.appendChild(list)


    

}
injectData();