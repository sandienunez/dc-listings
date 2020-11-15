// ********* global constants = so I don't have to repeat myself ************
const BASE_URL = "http://localhost:3000/listings";
const main = document.querySelector('#main');
const listingFormDiv = document.getElementById("listing-form");
const addForm = document.querySelector("#add-listing-form")
const showListingsButton = document.getElementById("listings");
// debugger 
  //initialize Listing class
//   const listing = new Listing()
// ********* startup routine => make fetch to get initial data *********** //

document.addEventListener('DOMContentLoaded', () => {
    // fetchAllListings() = immediately load all listings
    // debugger
    document.getElementById("create-listing-form").addEventListener("submit", createListing);
    showListingsButton.addEventListener("click", pullFromDB());
    // showListingsButton.addEventListener("click", ()=>{console.log("I was clicked")})
// debugger
    // addForm.addEventListener("click", createListing);
    // pullFromDB();

 
   

});
    // document.getElementById("listing-Form").addEventListener("submit", pullFromDB)

// ************************* requests to backend ************************ //
// Fetch Request to GET listings
// function fetchAllListings() { 
//     fetch(BASE_URL)    // get request
//     .then(response => response.json())
//     .then(listings => {
//         listings.forEach(element => { //iterate through collection of listings
     
//             main.innerHTML += `
//             <p>******************************************************************************************************************************************</p>
//             <h3>Home Service:</h3><p>${element.home_service.types} </p>
//             <h3>Ad Name:</h3><p>${element.ad_name}</p>
//             <h3>Business Name:</h3><p>${element.business_name}</p>
//             <input type="button" id="delete" onClick="removeListing()" value="Delete"/><br/>
//             ` 
//         });
//      //Add listing to the DOM

//         // getListingsForDropdown(listing)

//         // attachClicksToLinks()
//     })
// }

// ************************* helpers for generating HTML and adding event listeners ************************ //
// function makeListingObjects(listing) {
//     return (`
//     <h3>${listing.ad_name}<h3>
//     <p>${listing.business_name}</p>
//     `)
// }
   // html string with interpolation, give anchor tags id, interpolate stuff about listing

function makeForm() {
    // debugger
    event.preventDefault()
    let createForm = document.getElementById("create-listing-form")
    //in our index.html =saving location into a variable createForm, that location is saved
    //<!-- <button class=”submit”>Create</button> --> 
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
<label>Upload Company Logo:</label>
<br>
<input type="file" id="logo-image">
<br>
<br>
<br>
<label>Test Logo:</label>
<br>
<input type="file" id="test-image">
<br>
<br>
<label>Write your Ad Message here:</label>
<br>
<input type="text" id="ad-message">
<br>
<br>
<label>Upload an accompanying image for your Ad:</label>
<br>
<input type="file" id="ad-image">
<br>
<br>
<p><span id="home-service-updated-at" </span></p>
<br>
<input type="submit"></p>
</input>
</form>
</div>
` 

 //triggers that function
// debugger
    // in that location in the innerHTML add string 
}

function showMyImage(fileInput) {
    var files = fileInput.files;
      //console.log(files);
      for (var i = 0; i < files.length; i++) {           
          var file = files[i];
          console.log(file.name);
          var imageType = /image.*/;     
          if (!file.type.match(imageType)) {
              continue;
          }           
          var img=document.getElementById("preview");            
          img.file = file;    
          var reader = new FileReader();
          reader.onload = (function(aImg) { 
              return function(e) { 
                  aImg.src = e.target.result; 
              }; 
          })(img);
          reader.readAsDataURL(file);
         preview.style.display = 'block';
          //$("#banner_name").text(file.name);

      }
}
function clearForm(){
    let listingsUL = document.getElementById("create-listing-form")
    // debugger
    listingsUL.innerHTML = ""

}


// Fetch request to POST new listings
function createListing(){
    event.preventDefault()
    // clearUL()
    
    const listing = { 
        ad_name: document.getElementById('ad-name').value, 
    business_name: document.getElementById('business-name').value,
    home_service_id: document.getElementById('service-list').value,
    logo_image: document.getElementById('logo-image').value,
    ad_message: document.getElementById('ad-message').value,
    ad_image: document.getElementById('ad-image').value,
    home_service_updated_at: document.getElementById('home-service-updated-at').value,
    test_image: document.getElementById('test-image').value,

    // home_service_updated_at: new Date()
 }

    // debugger

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
            // console.log(listings)
            // let dateStr = JSON.parse(json);
            // let date = new Date(dateStr); 
        })

     clearForm();
    //  document.getElementById("listing-Form").addEventListener("submit", pullFromDB)


    }

// ************************* //FETCH to Delete listing ************************ //
function removeListing(){
    //   debugger
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
        // debugger
        event.target.parentElement.remove()
    
}


function pullFromDB(){
    // console.log("I was clicked")
    // event.preventDefault()
   let listingLocation = document.getElementById("main")
    listingLocation.innerHTML = ""


    fetch(`${BASE_URL}`)
    .then(res => res.json())
    .then(listings => {
     
        listings.forEach(listing => {
            // debugger
            let id = listing.id
            let ad_name = listing.ad_name
            let business_name = listing.business_name
            let home_service_id = listing.home_service_id
            let home_service_type = listing.home_service.types 
            let logo_image = listing.logo_image
            let ad_message = listing.ad_message
            let ad_image = listing.ad_image 
            let home_service_updated_at = new Date(listing.home_service.updated_at).toLocaleTimeString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year : 'numeric', hour: 'numeric', hour12: true, minute: 'numeric' })
            let l = new Listing(id, ad_name, business_name, home_service_id, home_service_type, logo_image, ad_message, ad_image, home_service_updated_at)
            // debugger
            l.displayFromDb()

        })
    })
}
