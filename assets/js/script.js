// test one -- run most basic fetch from Nasa Image Libary and console.log the results
// This fetch fails for "Invalid Search Parameter api_key"
fetch("https://images-api.nasa.gov/search?q=hubble&page=1", {
    api_key: "DEMO_KEY"
}).then(function(response){
    return response.json()
}).then(function(data){
    for(var i = 0; i < 10; i++) {
        console.log(data.collection.items[i])
    }
})

//Solution 1 -- remove https and use http -- failed this is not the problem
// Solution 2 -- make sure I have all the characters for the api_key from email. -- this is not the problem
//solution 3 -- replace the api-key with DEMO_KEY -- because this failed I know the problem is the code and not the key

// solution 4 -- check endpoint requirements.

// Final Solution was to pass the API key through the options parameter



