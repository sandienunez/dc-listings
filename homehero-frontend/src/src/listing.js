class Listing {
    constructor(id,ad_name,business_name,home_service_id, home_service_type, ad_message, updated_at, business_site_url) { //listing object from json
        this.id = id
        this.ad_name = ad_name
        this.business_name = business_name
        this.business_site_url = business_site_url
        this.home_service_id = home_service_id
        this.home_service_type = home_service_type 
        this.ad_message = ad_message
        this.updated_at = updated_at
    }

    displayFromDb(){
        let listingLocation  = document.getElementById("main")
        listingLocation.innerHTML += 
        `
        <div id =${this.id}>
        <p>******************************************************************************************************************************************</p>
        <h3>Ad Name:</h3><p>${this.ad_name} </p>
        <h3>Business Name:</h3><p>${this.business_name}</p>
        <h3>Business Website:</h3><p><a href="${this.business_site_url}">${this.business_site_url}</a></p>
        <h3>Home Service:</h3><p> ${this.home_service_type}</p>
        <h3>Ad Message:</h3><p> ${this.ad_message}</p>
        <h3>Time posted:</h3><p> ${this.updated_at}</p>


        <input type="button" id="delete" onclick="removeListing()" value="Delete"/><br/>
        <br>
        <div>
        `
    }


}


