// ********* global constants = so I don't have to repeat myself ************
const BASE_URL = "http://localhost:3000/listings";
const main = document.querySelector('#main');
const listingFormDiv = document.getElementById("listing-form");
const addForm = document.querySelector("#add-listing-form");
const showListingsButton = document.getElementById("listings");

// ********* startup routine => make fetch to get initial data *********** //

document.addEventListener('DOMContentLoaded', () => {
    // debugger
    document.getElementById("create-listing-form").addEventListener("submit", createListing);
});


function makeForm() {
    event.preventDefault()
    let createForm = document.getElementById("create-listing-form")
    createForm.innerHTML = ""
    createForm.innerHTML += `
    <div id="listing-form" > 
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
<label>Link Business Website Here:</label>
<br>
<input type="text" id="business-site-url">
<br>
<br>
<label>Write your Ad Message here. Please include your COVID-19 protocols that your team has taken to ensure that CDC guidelines are being met:</label>
<br>
<br>
<textarea id="ad-message" cols="50" rows="10"></textarea>
<br>
<br>
<br>
<p><span id="updated-at" </span></p>
<br>
<input type="submit"></p>
</input>
</form>
</div>
` 
let hideCreateListingButton = document.getElementById("add-listing-form"); 
hideCreateListingButton.style.visibility="hidden";
}


function clearForm(){
    let listingsUL = document.getElementById("create-listing-form")
    listingsUL.innerHTML = ""
    let showCreateListingButton = document.getElementById("add-listing-form"); 
    showCreateListingButton.style.visibility="visible";
}


// Fetch request to POST new listings
function createListing(){
    event.preventDefault()
    
    const listing = { 
        ad_name: document.getElementById('ad-name').value, 
    business_name: document.getElementById('business-name').value,
    business_site_url: document.getElementById('business-site-url').value,
    home_service_id: document.getElementById('service-list').value,
    ad_message: document.getElementById('ad-message').value,
    updated_at: document.getElementById('updated-at').value
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
        .then(listing => { // singular listing = one thing we got back 
            pullFromDB(listing)
        })

     clearForm();
    }
    

// ************************* //FETCH to Delete listing ************************ //
function removeListing(){
    let listingId = event.target.parentElement.id    
    // debugger  
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

    fetch(`${BASE_URL}`) //get request
    .then(res => res.json())
    .then(listings => {
     
        listings.forEach(listing => {
            let id = listing.id
            let ad_name = listing.ad_name
            let business_name = listing.business_name
            let business_site_url = listing.business_site_url
            let home_service_id = listing.home_service_id
            let home_service_type = listing.home_service.types 
            let ad_message = listing.ad_message
            let updated_at = new Date(listing.updated_at).toLocaleTimeString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year : 'numeric', hour: 'numeric', hour12: true, minute: 'numeric' })
            let l = new Listing(id, ad_name, business_name, home_service_id, home_service_type, ad_message, updated_at, business_site_url)
            l.displayFromDb()
        })
    })
}

