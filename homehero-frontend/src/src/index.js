// ********* global constants = so I don't have to repeat myself ************
const BASE_URL = "http://localhost:3000/listings";
const main = document.querySelector('#main');
const listingFormDiv = document.getElementById("listing-form")
const addForm = document.querySelector("#add-listing-form")

  //initialize Listing class
//   const listing = new Listing()
// ********* startup routine => make fetch to get initial data *********** //

document.addEventListener('DOMContentLoaded', () => {
    fetchAllListings()
    // debugger
    addForm.addEventListener("click", displayListing);

});
// ************************* requests to backend ************************ //
function fetchAllListings() { 
    fetch(BASE_URL)    // get request
    .then(response => response.json())
    .then(listings => {
        listings.forEach(element => {
        debugger
            main.innerHTML += `
            <h3>Ad Name:${element.ad_name}</h3>
            <p>${element.business_name}</p>
            ` 
        });
        // main.innerHTML += listings.map((listing) => makeListingObjects(listing)).join("")
        // //iterate through collection of listings
        // attachClicksToLinks()
    })
    // .then(data => displayListings(json));
}
        // console.log(json)

// ************************* helpers for generating HTML and adding event listeners ************************ //
function makeListingObjects(listing) {
    return (`
    <h3>${listing.ad_name}<h3>
    <p>${listing.business_name}</p>
    `)
}
   // html string with interpolation, give anchor tags id, interpolate stuff about listing

function attachClicksToLinks(){

}

// function displayListingForm(){
    
//     event.preventDefault()
// console.log("click")
// }

// Strategy:
// 1. grab node in console = confirm yu can get it in the console 
// 2. call add event listener = listen for event to be triggered
// 3. call that function (make it empty to begin with )
// 4. make a function that displaysForm 

function makeForm() {
    // debugger
    event.preventDefault()
    let createForm = document.getElementById("create-form")
    //in our index.html =saving location into a variable createForm, that location is saved
    createForm.innerHTML = ""
    createForm.innerHTML += `
    <form>
    <select name="Homeservice" size=5>
<option value="Cleaning">House Cleaning 
<option value="Painting">Painting
<option value="Floors">Floors/Sanding 
<option value="Floors">Roofing
<option value="Floors">Heating
<option value="Floors">Electricity 
<option value="Floors">Air Conditioning 
<option value="Floors">Window Washing
<option value="Floors">Carpet Cleaning
<option value="Floors">Plumbing
<option value="Floors">Landscaping 
<option value="Floors">House Remodeling/Building Decks
</select>
</option>
<br>
<label>Ad Name:</label>
<input type="text" id="ad-name">
<br>
<label>Business Name:</label>
<input type="text" id="business-name">
<br>

</input>

<input type="submit">
</form>
` 
document.querySelector("form").addEventListener("submit", displayListing)
    // in that location in the innerHTML add string 
}

function displayListing(){ // event handler
    event.preventDefault()
    // debugger
    const listingsUL = document.querySelector("#main ul")
    listingsUL.innerHTML = ""
    // debugger 
    event.target.querySelector("select").value
    const listing = { 
    ad_name: document.querySelector('#ad-name').value, //key value pair
    business_name: document.querySelector('#business-name').value
}
 
    
    const configObj = {
        method: 'POST',
        body: JSON.stringify(listing),
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        }
    }
    // debugger
//post request to db
//get what i need out of form, post request to backend API

fetch(BASE_URL, configObj) //fetch resources asynchronously across the network
//path to the resource you want to fetch
.then(response => response.json()) //returns a promise containing the HTTP response object (not json
//To extract the JSON body content from the response, we use the json() method )
.then(listing => { 
    console.log()
    //logic
    //make nodes h3 set innertext 
})
}



