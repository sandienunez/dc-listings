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

        main.innerHTML += listings.map((listing) => makeListingObjects(listing)).join("")
        //iterate through collection of listings
        attachClicksToLinks()
    })
    // .then(data => displayListings(json));
}
        // console.log(json)

        function displayListings(){
            event.preventDefault()
            const id = event.target.dataset.id
            clearUL()
            listingFormDiv.innerHTML = ''
        
            fetch(BASE_URL + '/listings/' + id)
            .then(response => response.json())
            .then(listing => {
                const lg = new Lg(listing)
                main.querySelector("ul").innerHTML += lg.renderListing()
                lg.renderULs()
            })
        }
    
// ************************* helpers for generating HTML and adding event listeners ************************ //


function makeListingObjects(listing) {
    return (`
    <h3>${listing.add_name}<h3>
    <p>${listing.business_name}</p>
    `)
}

// html string with interpolation, give anchor tags id, interpolate stuff about listing

function clearUL(){
    const listingsUL = document.querySelector("#main ul")
    listingsUL.innerHTML = ""

}

function displayForm(){
    clearUL()
    ListingFormDiv.innerHTML = ""
    const html = makeListingForm()
    listingFormDiv.innerHTML += html
    document.querySelector("form").addEventListener('submit', createListing)
}

function makeListingForm(){
    return (`
            <form>
                <input type="text" id="ad-name">
                <label>business-name>
                <input type="checkbox" id="completed"></input>
                <input type="submit">
            </form>
            `)
}


function makeListingElement(listing){
    return (`
    <h3>${listing.add_name}<h3>
    <p>${listing.business_name}</p>
    `)
}

function attachClicksToLinks(){
    const listings = document.querySelectorAll("li a")
    
    listings.forEach((listingATag => {
        listingATag.addEventListener('click', displayListings)
    }))

    document.getElementById("add-listing-form").addEventListener('click', displayForm)
    document.getElementById("listings").addEventListener('click', getListings)

    document.querySelectorAll("#delete").forEach(listing => listing.addEventListener('click', removeListing))
    document.querySelectorAll("#update-listing").forEach(listing => listing.addEventListener('click', editListing))

}


oo file

 renderListing() {
        return (`<li id="todo-${this.id}">
                <a href="" data-id="${this.id}">${this.add_name}</a> - ${this.business_name}
                </ul>
                <button id="delete" data-id="${this.id}">Delete</button>
                <button id="update-listing" data-id="${this.id}">Edit</button>
            </li>
            `)
    }

  -----

        // const ls = new Listing(listing)
        // main.querySelector("ul").innerHTML += ls.renderListing()
        // attachClicksToLinks()
        // listingFormDiv.innerHTML = ""
//     }) 
// }

// .then(listing => {
    //          document.listing.innerHTML += "Hello, " + `${listing.ad_name` + "!";
    //      })
    //      clearForm();


// function newUserForm() {
//      const userForm =    `<div class="fullscreen" id="new-user-form">
//                              <h2>Welcome traveler!</h2>
//                              <h2>What is your name?"</h2><br>
//                              <form>
//                                  <input type="text" id="username" username="username" required minlength="2" placeholder="Name" size="30">
//                                  <br><input type="submit" value="Lets go!">
//                              </form>
//                          </div>`;
//      const userName = document.getElementById("user-form");
//      userName.innerHTML = userForm;
//      document.getElementById("new-user-form").addEventListener("submit", createUser)
//     }
//     function createUser() {
//      event.preventDefault();
//         const user = {
//          username: document.getElementById("username").value,
//      }
//         fetch(BASE_URL + "/users", {
//          method: "POST",
//          body: JSON.stringify(user),
//          headers: { 
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             }
//      })
//      .then(response => response.json())
//      .then(user => {
//          document.getElementById("username").innerHTML += "Hello, " + `${user.username}` + "!";
//      })
//      clearForm();
//     }
  -------
// function displayListing(){ // event handler //
//     event.preventDefault()
//     // debugger
//     const listingsUL = document.querySelector("#main ul")
//     listingsUL.innerHTML = ""
//    const homeservice = event.target.querySelector("select").value
   
//     const listing = { 
//     // types: document.querySelector('#types').value,
//     ad_name: document.querySelector('#ad-name').value, //key value pair
//     business_name: document.querySelector('#business-name').value,
//     //add key
//     home_service_id: homeservice
// }
// document.querySelector("add-listing-form").reset(); //remove
//     const configObj = {
//         method: 'POST',
//         body: JSON.stringify(listing),
//         headers: {
//             'Content-Type': 'application/json', 
//             'Accept': 'application/json'
//         }
//     }
//     // debugger
// //post request to db
// //get what i need out of form, post request to backend API

// fetch(BASE_URL, configObj) //fetch resources asynchronously across the network
// //path to the resource you want to fetch
// .then(response => response.json()) //returns a promise containing the HTTP response object (not json
// //To extract the JSON body content from the response, we use the json() method )
// .then(listing => { 
//     console.log(listing)
//     //logic
//     //make nodes h3 set innertext 
//     let displayads = main.innerHTML `
//     <h3> ads here </h3>
//     `
    
// })
// }
  ---------------------


// function displayListingForm(){
    
//     event.preventDefault()
// console.log("click")
// }

// Strategy:
// 1. grab node in console = confirm yu can get it in the console 
// 2. call add event listener = listen for event to be triggered
// 3. call that function (make it empty to begin with )
// 4. make a function that displaysForm 


--------------
  Strategy:
  1. grab node in console = confirm yu can get it in the console 
  2. call add event listener = listen for event to be triggered
  3. call that function (make it empty to begin with )
  4. make a function that displaysForm 



