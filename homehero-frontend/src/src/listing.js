class Listing {
    constructor(id,ad_name,business_name,home_service_id, home_service_type, logo_image, ad_message, ad_image, home_service_updated_at) { //listing object from json
        this.id = id
        this.ad_name = ad_name
        this.business_name = business_name
        this.home_service_id = home_service_id
        this.home_service_type = home_service_type 
        this.logo_image = logo_image
        this.ad_message = ad_message
        this.ad_image = ad_image 
        this.home_service_updated_at = home_service_updated_at
    }

    displayFromDb(){
        let listingLocation  = document.getElementById("main")
    //   debugger
        // let serviceList = document.getElementById("service-list")
        // debugger
        // let selectedText = serviceList.options[serviceList.selectedIndex].text;
        // const serviceList = document.querySelector("#home-service-name").options[this.home_service_id - 1].text
        
        listingLocation.innerHTML += 
        `
        <div id =${this.id}>
        <p>******************************************************************************************************************************************</p>
        <h3>Ad Name:</h3><p>${this.ad_name} </p>
        <h3>Business Name:</h3><p>${this.business_name} </p>
        <h3>Home Service:</h3><p> ${this.home_service_type}</p>
        <h3>Logo Image:</h3><p> ${this.logo_image}</p>
        <h3>Ad Message:</h3><p> ${this.ad_message}</p>
        <h3>Ad Image:</h3><p> ${this.ad_image}</p>
        <h3>Time posted:</h3><p> ${this.home_service_updated_at}</p>


        <input type="button" id="delete" onclick="removeListing()" value="Delete"/><br/>
        <br>
        <div>
        `
        // debugger
    }
}

//             <h3>Home Service:</h3><p>${this.ad_name} </p>
//             <h3>Ad Name:</h3><p>${element.ad_name}</p>
//             <h3>Business Name:</h3><p>${element.business_name}</p>