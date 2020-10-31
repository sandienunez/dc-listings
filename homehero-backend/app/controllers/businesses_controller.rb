class BusinessesController < ApplicationController

    def index
        businesses = Business.all
        render json: businesses
      end
    
      def create
        new_business = Business.create(business_params)
      end

    
end 

private

  def business_params
    params.require(:business).permit(:name_of_business, :household_service, :business_hours, :covid_policy, :yelp_review_url, :mission_text, :contact_info)
  end
end

