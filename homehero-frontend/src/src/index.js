// ********* global constants = so I don't have to repeat myself ************
const BASE_URL = "http://localhost:3000/listings";
const main = document.getElementById('main');
const listingFormDiv = document.getElementById("listing-form")
const addForm = document.querySelector("#add-listing-form")


// ********* startup routine => make fetch to get initial data *********** //

document.addEventListener('DOMContentLoaded', () => {
    fetchAllListings()
    debugger
    addForm.addEventListener("click", displayListingForm);

});
// ************************* requests to backend ************************ //
function fetchAllListings() { 
    fetch(BASE_URL + '/listings')    // get request
    .then(response => response.json())
    .then(listings => {

        main.innerHTML += listings.map((listing) => makeListingObjects(listing)).join("")
        //iterate through collection of listings
        attachClicksToLinks()
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


function displayListingForm(){
    
    event.preventDefault()
console.log("click")
}

function makeListingForm(){
    return (`
            <form>
                <input type="text" id="ad-name">
                <label>Ad Name:</label>
                <input type="text" id="business-name">
                <label>Ad Name:</label>
                </input>
                <input type="submit">
            </form>
            `)
}

// Strategy:
// 1. grab node in console = confirm yu can get it in the console 
// 2. call add event listener = listen for event to be triggered
// 3. call that function (make it empty to begin with )
// 4. make a function that displaysForm 

function test() {
    event.preventDefault()
    let createForm = document.getElementById("create-form")
    //in our index.html =saving location into a variable createForm, that location is saved
    createForm.innerHTML = ""
    createForm.innerHTML += `
    <form>
        <input type="text" id="ad-name">
        <label>Ad Name:</label>
        <input type="text" id="business-name">
        <label>Ad Name:</label>
        </input>
        <input type="submit">
    </form>
    `
    // in that location in the innerHTML add string 
}
