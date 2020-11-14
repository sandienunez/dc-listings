class ListingsController < ApplicationController
    def index
        listings = Listing.all.reverse
        render json: listings 
      end

      def show
        listing = Listing.find(params[:id])
        render json: listing
      end
    
      def create
        listing = Listing.new(listing_params)
          if listing.save
            render json: listing, status: :accepted
            #  binding.pry
          else  
            render json: {errors: listing.errors.full_messages}
          end
      end

      def update
        listing = Listing.find(params[:id])
        render json: listing
      end
    
      def destroy
       listing = Listing.find(params[:id])
      #  binding.pry
        listing.destroy
      end 

private

  def listing_params
        params.require(:listing).permit(:ad_name, :business_name, :home_service_id, :logo_image_url)

  end
    # params.require(:listing).permit(:ad_name, :business_name, :logo_image_url, :listing_id, :location, :add_message, :add_image_url, :home_service_id)


end 