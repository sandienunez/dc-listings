class ListingsController < ApplicationController
    def index
        listings = Listing.all
        render json: listings 
      end
    
      def create
        listing = Listing.new(listing_params)
        # listing = Listing.create(listing_params)
        if listing.save
            render json: listing, status: :accepted 
        else  
            render json: {errors: listing.errors.full_messages}, status: :unprocessible_entity
        end
       end

      def update
        listing = Listing.find(params[:id])
        render json: listing
      end
    
      def destroy
       listing = Listing.find(params[:id])
        listing.destroy
      end 

private

  def listing_params
    params.require(:listing).permit(:ad_name, :business_name, :logo_image_url, :listing_id, :location, :add_message, :add_image_url)
end

end 