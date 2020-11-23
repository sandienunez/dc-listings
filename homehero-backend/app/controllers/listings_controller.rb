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
          # binding.pry
          if listing.save
            render json: listing, status: :accepted
           
          else  
            render json: {errors: listing.errors.full_messages}
          end
      end

      def update
        if listing.update(listing_params)
          render json: listing
        else
          render json: {errors: listing.errors.full_messages}
        end
      end
    
      def destroy
       listing = Listing.find(params[:id])
      #  binding.pry
        listing.destroy
      end 

private

  def listing_params
        params.require(:listing).permit(:ad_name, :business_name, :home_service_id,:ad_message, :updated_at, :business_site_url)
  end
end 