// ********* global constants = so I don't have to repeat myself ************
const BASE_URL = "http://localhost:3000/listings";
const main = document.querySelector('#main');
const listingFormDiv = document.getElementById("listing-form");
const addForm = document.querySelector("#add-listing-form")

  //initialize Listing class
//   const listing = new Listing()
// ********* startup routine => make fetch to get initial data *********** //

document.addEventListener('DOMContentLoaded', () => {
    fetchAllListings()
    // debugger
    addForm.addEventListener("click", createListing);

});
// ************************* requests to backend ************************ //
function fetchAllListings() { 
    fetch(BASE_URL)    // get request
    .then(response => response.json())
    .then(listings => {
        listings.forEach(element => { //iterate through collection of listings
     
            main.innerHTML += `
            <p>******************************************************************************************************************************************</p>
            <h3>Ad Name:</h3><p>${element.ad_name}</p>
            <h3>Business Name:</h3><p>${element.business_name}</p>
            ` 
// <h3>Home Service:</h3><p>${listing.home_service_id}</p>

        });
        
        // attachClicksToLinks()
    })
}

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

function makeForm() {
    // debugger
    event.preventDefault()
    let createForm = document.getElementById("create-form")
    //in our index.html =saving location into a variable createForm, that location is saved
    //<!-- <button class=”submit”>Create</button> --> 
    createForm.innerHTML = ""
    createForm.innerHTML += `
    <form>
    <label>Choose your Home Service:</label>
    <br>
    <select id="home-service-name" size=5>
<option value="1">House Cleaning </option>
<option value="2">Painting </option>
<option value="3">Floors/Sanding </option>
<option value="4">Roofing</option>
<option value="5">Heating</option>
<option value="6">Electricity </option>
<option value="7">Air Conditioning </option>
<option value="8">Window Washing</option>
<option value="9">Carpet Cleaning</option>
<option value="10">Plumbing</option>
<option value="11">Landscaping </option>
<option value="12">House Remodeling/Building Decks</option>
</select>
</option>
<br>
<br>
<label>Ad Name:</label>
<input type="text" id="ad-name">
<br>
<br>
<label>Business Name:</label>
<input type="text" id="business-name">
<br>

<br>

</input>
<input type="submit">
</form>
` 
document.getElementById("create-form").addEventListener("submit", createListing) //triggers that function
// debugger
    // in that location in the innerHTML add string 
}


function clearForm(){
    const listingsUL = document.querySelector("#main ul")
    listingsUL.innerHTML = ""

}
function createListing(){
    event.preventDefault()
    // clearUL()
    const listing = { 
        ad_name: document.querySelector('#ad-name').value, 
    business_name: document.querySelector('#business-name').value,
    home_service_id: document.querySelector('#home-service-name').value
    }
    // const homeservice = home_service.types
    // const homeservice = {
    //     home_service: document.querySelector("#home-service").value
    // }

    const configObj = {
        method: 'POST',
        body: JSON.stringify(listing),
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        }
    }
    
    fetch(BASE_URL, configObj)
    .then(response => response.json())
    .then(listing => {
            main.querySelector("ul").innerHTML += "Here is your new listing: " + 
            `
            <h3>Home Service:</h3> 
            <p>${listing.home_service_id} </p>
            <h3>Ad name:</h3> 
            <p>${listing.ad_name} </p>
            <h3>Business name: </h3> 
            <p>${listing.business_name}</p>
            `
            attachClicksToLinks()
             listingFormDiv.innerHTML = ""
 
     })
     clearForm();
    }
