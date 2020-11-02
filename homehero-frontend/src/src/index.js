a// ********* global constants = so I don't have to repeat myself ************
const BASE_URL = "http://localhost:3000/listings";
const main = document.getElementById('main');
const listingFormDiv = document.getElementById("listing-form")



// ********* startup routine => make fetch to get initial data *********** //

document.addEventListener('DOMContentLoaded', () => {
    fetchAllListings()
});



// ************************* requests to backend ************************ //



function fetchAllListings() { 
    fetch(BASE_URL + '/listings')    // get request
    .then(response => response.json())
    .then(listings => {

        main.innerHTML += listings.map((listing) => displayListings(listing)).join("")
        //iterate through collection of listings
        attachClicksToLinks()
    })
    // .then(data => displayListings(json));
}
        // console.log(json)
    
// ************************* helpers for generating HTML and adding event listeners ************************ //


function displayListings(listing) {
    return (`
    <h3>${listing.add_name}<h3>
    <p>${listing.business_name}</p>
    `)
}

// html string with interpolation, give anchor tags id, interpolate stuff about listing
    

