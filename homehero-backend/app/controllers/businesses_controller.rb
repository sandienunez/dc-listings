class BusinessesController < ApplicationController

    def index
        businesses = Business.all
        render json: businesses
    end
    
    def create
      new_business = Business.new(business_params)
        if business.save 
          render json: business, status: :accepted
            #binding.pry
        else 
          render json: {errors: business.errors.full_messages}
        end
    end

    def update
      business = Business.find(params[:id])
      render json: business
    end

    def destroy
      business = Business.find(params[:id])
      business.destroy 
    end
    
end 

private

  def business_params
    params.require(:business).permit(:name_of_business, :household_service, :business_hours, :covid_policy, :yelp_review_url, :mission_text, :contact_info)
  end
end

