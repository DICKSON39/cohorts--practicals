// Destructuring Assignment in ES6 is afeature  that allows you to etract values from 
//from values from arrays or properties from objects into distinct variables.
const info = {
    fname: 'Dennis',
    sname: 'Muhia',
    idNumber: 3456789,

}

//traditional ways to access values of an object
console.log(info.fname + " " + info.sname);

//Using Destructuring

//const { objectKey:value} = objectName

const {fname: fiirstname, sname: secondname, idNumber: idnumber} = info
console.log(`${fiirstname} ${secondname} ${idnumber}`)

// Array default destructuring
//const [elemen1 = defaultvalue1, element2= defaultvalue2 ] = array

const numbers = [20,40,60]
const [first= 10, second= 20, third =30 ] = numbers

console.log(first);
console.log(second);
console.log(third);

//Objects Default destructuring
//syntax = const {property1 = defaultvalue1, property2 =defaultvalue2} = object
const user ={
    name: 'Alice',
    age: 25
}

const{name, age, country ='Kenya'} = user
console.log(user)
console.log(age)
console.log(country)

// default values wiyth renaming
const user2 = {
    name: 'Dickson',
    age: 22
}

const{name: userName, age:userAge, country: userCountry = "Kenya"} = user2;
console.log(userName)
console.log(userAge)
console.log(userCountry)

///Destructuring in array
// syntax [item1, item2] = array
const numbers2 = [1, 2, 3, 4];

//Traditional way to access value
const firstItem = numbers2[0]
const secondItem = numbers2[1]
console.log(firstItem, secondItem)

//Use destructuring method
const[first1,second1, third1, fourth1, fifth1=45] = numbers2
console.log(first1, second1,third1,fourth1, fifth1) ///1 2 3

const [a=1, b=2]= [undefined, 3]
console.log(a, b)


//Nested destructuring allows you unpack values from objects and arrays.

const userInfo = {
    name: 'Alice',
    address: {
        city: 'wonderland',
        zip: 12345
    }

}

//To access city
console.log(userInfo.address.city) // Wonderland
console.log(userInfo.address.zip) //12345

const{address} = userInfo
console.log(address)//{ city: 'wonderland', zip: 12345 }

const {address: {city, zip}} = userInfo
//to destrure to a second level add : {}
console.log(city)//wonderland
console.log(zip) // 12345

// complex payment object paypal

 const payment= 
 {
    "transaction_id": "TXN123456789",
    "status": "Completed",
    "payment_method": "PayPal",
    "amount": {
      "total": "150.00",
      "currency": "USD",
      "details": {
        "subtotal": "140.00",
        "tax": "5.00",
        "shipping": "5.00"
      }
    },
    "payer": {
      "payer_id": "PAYER12345",
      "email": "payer@example.com",
      "name": {
        "given_name": "John",
        "surname": "Doe"
      },
      "address": {
        "line1": "123 Main St",
        "city": "New York",
        "state": "NY",
        "postal_code": "10001",
        "country_code": "US"
      },
      "funding_source": {
        "method": "Credit Card",
        "card": {
          "type": "Visa",
          "last4": "1234",
          "expiration": "12/2026"
        }
      }
    },
    "payee": {
      "merchant_id": "MERCHANT98765",
      "email": "merchant@example.com"
    },
    "fees": {
      "paypal_fee": "3.00",
      "platform_fee": "2.00"
    },
    "timestamps": {
      "created_at": "2025-02-17T12:00:00Z",
      "updated_at": "2025-02-17T12:05:00Z"
    },
    "invoice_number": "INV-20250217-001",
    "custom_fields": {
      "order_id": "ORDER123456",
      "note_to_payee": "Thanks for your purchase!"
    },
    "redirect_urls": {
      "return_url": "https://example.com/success",
      "cancel_url": "https://example.com/cancel"
    }
  }

  //using dotnotation

  console.log(payment.payee.email)
  const{payee: {email}} = payment
  console.log(email)// merchant@example.com
  const{timestamps: {created_at, updated_at}} = payment
  console.log(created_at + " " + updated_at)//2025-02-17T12:00:00Z 2025-02-17T12:05:00Z
  const{redirect_urls: {return_url, cancel_url}} = payment
  console.log(return_url + " " + cancel_url)// https://example.com/success https://example.com/cancel
  const{invoice_number} = payment
  console.log(invoice_number);//INV-20250217-001
  const{custom_fields: {order_id, note_to_payee}} = payment
  console.log(order_id + " " + note_to_payee ) //ORDER123456 Thanks for your purchase!

  // With  destructuring we get a clean code

  //Destructuring nested arrays

  const numbers3 = [1, [2,3,[5,6]], 4]

  //nested destructuring
  const[first2, [second2, third2,[fourth3, fourth4]], fourth2] = numbers3
  console.log(first2)
  console.log(second2)
  console.log(third2)
  console.log(fourth2)
  console.log(fourth3)
  console.log(fourth4)
  console.log (first2 + " " + second2 +" "+ fourth3 + " " + fourth4 + " " + fourth2 )

// Destructurin in functions parameters

function processNumbers([one, two, three]){
    console.log(one, two, three)
}

const nums = [1, 2, 3];
processNumbers(nums); // 1 2 3