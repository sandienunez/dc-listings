class Listing {
    constructor(id,ad_name,business_name,home_service_id) { //listing object from json
        this.id = id
        this.ad_name = ad_name
        this.business_name =business_name
        this.home_service_id =home_service_id
    }

    displayFromDb(){
        let listingLocation  = document.getElementById("main")
      
        let serviceList = document.querySelector("#service-list").value
        // debugger
        let selectedText = serviceList.options[serviceList.selectedIndex].text;
        // const serviceList = document.querySelector("#home-service-name").options[this.home_service_id - 1].text
        
        listingLocation.innerHTML += `
        ============<br>
        <div id =${this.id}>
        ${this.ad_name}<br>
        ${this.business_name}<br>
        ${this.serviceName}<br>
        <input type="button" id="delete" onClick="removeListing()" value="Delete"/><br/>

        <div>
        `
    }
}