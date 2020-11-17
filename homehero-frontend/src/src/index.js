// ********* global constants = so I don't have to repeat myself ************
const BASE_URL = "http://localhost:3000/listings";
const main = document.querySelector('#main');
const listingFormDiv = document.getElementById("listing-form");
const addForm = document.querySelector("#add-listing-form");
const showListingsButton = document.getElementById("listings");

// ********* startup routine => make fetch to get initial data *********** //

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("create-listing-form").addEventListener("submit", createListing);
    document.getElementById("service-list").addEventListener("submit", help)
});


function makeForm() {
    event.preventDefault()
    let createForm = document.getElementById("create-listing-form")
    createForm.innerHTML = ""
    createForm.innerHTML += `
    <div id="listing-Form" > 
    <form>

    <label>Choose your Home Service:</label>
    <br>
    <select id="service-list" size=5>
<option value="1"><br> House Cleaning </br> </option>
<option value="2">Painting </option>
<option value="3">Floors & Sanding </option>
<option value="4">Roofing</option>
<option value="5">Heating</option>
<option value="6">Electricity </option>
<option value="7">Air Conditioning </option>
<option value="8">Window Washing</option>
<option value="9">Carpet Cleaning</option>
<option value="10">Plumbing</option>
<option value="11">Landscaping </option>
<option value="12">House Remodeling & Deck Construction</option>
</select>
</option>
<br>
<br>
<label>Ad Name:</label>
<br>
<input type="text" id="ad-name">
<br>
<br>
<label>Business Name:</label>
<br>
<input type="text" id="business-name">

<br>
<br>
<br>
<label>Write your Ad Message here:</label>
<br>
<textarea id="ad-message" cols="50" rows="10"></textarea>
<br>
<br>
<br>
<p><span id="home-service-updated-at" </span></p>
<br>
<input type="submit"></p>
</input>
</form>
</div>
` 
}


function clearForm(){
    let listingsUL = document.getElementById("create-listing-form")
    listingsUL.innerHTML = ""

}


// Fetch request to POST new listings
function createListing(){
    event.preventDefault()
    
    const listing = { 
        ad_name: document.getElementById('ad-name').value, 
    business_name: document.getElementById('business-name').value,
    home_service_id: document.getElementById('service-list').value,
    ad_message: document.getElementById('ad-message').value,
    home_service_updated_at: document.getElementById('home-service-updated-at').value,
 }

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
        .then(listings => {
            pullFromDB(listings)
        })

     clearForm();
    }

// ************************* //FETCH to Delete listing ************************ //
function removeListing(){
    let listingId = event.target.parentElement.id      
    event.preventDefault()
   
    const configObj = {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Accept':'application/json'
        }
    }
        
    fetch(BASE_URL + `/${listingId}`,configObj)
        event.target.parentElement.remove()
    
}

// ************************* //FETCH listing object data from DB & oo-js ************************ //

function pullFromDB(){
   let listingLocation = document.getElementById("main")
    listingLocation.innerHTML = ""

    fetch(`${BASE_URL}`)
    .then(res => res.json())
    .then(listings => {
     
        listings.forEach(listing => {
            let id = listing.id
            let ad_name = listing.ad_name
            let business_name = listing.business_name
            let home_service_id = listing.home_service_id
            let home_service_type = listing.home_service.types 
            let ad_message = listing.ad_message
            let home_service_updated_at = new Date(listing.home_service.updated_at).toLocaleTimeString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year : 'numeric', hour: 'numeric', hour12: true, minute: 'numeric' })
            let l = new Listing(id, ad_name, business_name, home_service_id, home_service_type, ad_message, home_service_updated_at)
            l.displayFromDb()
        })
    })
}

