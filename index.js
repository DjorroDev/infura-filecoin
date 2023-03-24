let request = require('request')

// Call the Infura API and check that the address is valid.
let options = {
    url: 'https://filecoin.infura.io',
    method: 'post',
    headers: {
        'content-type': 'application/json'
    },
    auth: {
        user: '2NSAay0LhygYQTyqaUBIzN2WlTa',
        pass: 'a94f07921b598d192190d270c8141825'
    },
    body: `{
 	"jsonrpc": "2.0",
 	"id": 0,
 	"method": "Filecoin.WalletBalance",
 	"params": ["f3tfhgkbq6h55fqhumadd7wvogx3bbhgm3ifg6mk6hq35ob3fex2uei7hfbo2nwqkzudjzjidmshxpvo3ja4iq"]
 }`
}

// Call the Infura API and check that the address is valid.

request(options, (error, response, body) => {
    if (error) {
        console.error('Error: ', error)
    } else {
        console.log('Response: ', body)
    }
})
