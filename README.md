# [homehero](https://github.com/sandienunez/homehero)

### __homehero__ is a Single Page Application that easily allows you to create, save and view listings for household services in the DC, MD and Northern VA Area.  It was designed as a portfolio project at the Flatiron School. __homehero__ is written in JavaScript, Ruby on Rails, HTML and CSS.

<img width="785" alt="Screen Shot 2020-11-17 at 9 01 57 PM" src="https://user-images.githubusercontent.com/61069416/99478939-50230a80-2923-11eb-84ab-77a412d039cc.png">


## Restful Routes and CRUD Actions

REST => Representation State Transfer => set of conventions for structuring our ROUTES and mapping them to CRUD actions (Create, Read, Update, Delete).

 | METHOD | ROUTE | CONTROLLER ACTION   | Description |
| ------------- |-------------| ----------- | ------------------- |
| GET  |  /listings | #index | Show all listings | 
| POST | /listings | #create | Create a new listing
| GET  | /listings/new | #new | Render form for creating a new listing|
| GET  | /listings/:id/edit | #edit | Render form for editing a listing  |
| GET  | /listings/:id | #show | Show a single listing |
| PATCH | /listings/:id | #update | Update a listing |
| DELETE | /listings/:id | #destroy | DELETE a listing |

### JavaScript and HTML Buttons

<img width="800" alt="Screen Shot 2020-11-17 at 9 02 08 PM" src="https://user-images.githubusercontent.com/61069416/99478971-5ca76300-2923-11eb-814c-3fc03ad7f0e1.png">
<img width="761" alt="Screen Shot 2020-11-17 at 9 02 17 PM" src="https://user-images.githubusercontent.com/61069416/99478973-5dd89000-2923-11eb-8e6c-2de955e94ccf.png">

### Listing Form
<img width="1068" alt="Screen Shot 2020-11-17 at 9 22 38 PM" src="https://user-images.githubusercontent.com/61069416/99479652-8ad97280-2924-11eb-91cd-fe0f55ca60bb.png">


### Create a Listing 

<img width="1002" alt="Screen Shot 2020-11-17 at 10 25 09 PM" src="https://user-images.githubusercontent.com/61069416/99479564-6d0c0d80-2924-11eb-85cd-5040bfdfb7ce.png">

<img width="679" alt="Screen Shot 2020-11-15 at 5 15 24 PM" src="https://user-images.githubusercontent.com/61069416/99479615-82813780-2924-11eb-90a2-0c885f4b06e6.png">



### View Listings
<img width="1417" alt="Screen Shot 2020-11-17 at 10 35 16 PM" src="https://user-images.githubusercontent.com/61069416/99479990-3a164980-2925-11eb-91e7-8242bdd57f83.png">

<img width="1405" alt="Screen Shot 2020-11-17 at 10 25 21 PM" src="https://user-images.githubusercontent.com/61069416/99479984-3682c280-2925-11eb-9252-baaca64b01bb.png">



## Motivation

Due to the recent global pandemic, hundreds of thousands of household businesses in our area, have seen their clientele and jobs reduce drastically.

My goal was to create a website that would bring together all the ad listings of small household businesses in the Washington D.C., Maryland and Virginia area in order to highlight all the amazing small business teams during this crisis. Many people are not sure which businesses are still open and what COVID-19 policies each company is making sure to implement during this time. Homehero does all the heavy lifting for you! Instead of endlessly googling and yelping which small household companies can help you repair your fridge, clean your home, paint your garage, fix your pool, change your pipes and more. Simply click on the "Listings" button to see all the listings in the DC Metro area. If you are a business, then you can easily create your own Listing by clicking on the "Create Listing" button which takes you to the Listing form. Here, you fill out your business name, ad name, write your ad message, write out your COVID-19 policies and choose the type of Home Service that your business offers. 


## Prerequisites
Other than the gems listed in this app's Gemfile, you will need to have [Ruby](https://www.ruby-lang.org/en/downloads/) and [Rails](https://guides.rubyonrails.org/v5.0/getting_started.html) installed on your local machine.

## Local Installation Instructions

Currently, installation of the project can be performed locally with the following steps:

    1. Navigate to the repo on GitHub [here](https://github.com/sandienunez/homehero)
    2. Fork and clone the [GitHub repo](https://github.com/sandienunez/homehero) to your local machine. 
    3. Click the green Clone or Download button and copy the remote URL.
``` 
git@github.com:sandienunez/homehero.git
```
    4. Type git clone then paste the copied URL into your terminal.
    5. Type 'bundle install' to install dependencies. 

## Installing

Change directories into the repo directory. After running bundle install, run rails db:migrate and rake db:seed to create and seed the database. 
```
$ cd homehero
$ bundle install
$ rails db:migrate
$ rake db:seed
```

## Usage

To start the Rails server for this project, run rails s. Then, you can do any of the following:

* Navigate to http://localhost:3000/listings to see the JSON for all of the saved concoctions
* Navigate to http://localhost:3000/listings/[write the concoction number here] to see the JSON for an individual concoction
* Navigate to http://localhost:3000/rails/info/routes to see this project's available routes (or run rails routes in your terminal).
To exit the server, hit Ctrl-C or Cmd-C in your terminal. Additionally, if you wish to play around with the saved data, run rails c in your terminal; to exit, hit Ctrl-D or Cmd-D.

From there, you can create and delete your Homehero listings. You can also read all the listings that have been made!

## Videos and Blog Post
* Click [here](https://www.youtube.com/watch?v=H6S4znIAhTs&feature=youtu.be) to see a demo of the homehero app.

* Click [here](https://www.loom.com/share/69cf2c709e134126a7e2e839a8787e7d) to watch how I coded part of my app.
* Click [here](https://sandienunez.github.io/riding_on_rails_and_javascript_waves_portfolio_project_4) to see the blog post I wrote for this project.

## Built With

* JavaScript
* Ruby on Rails
* SQLite3
* HTML, CSS

## Contributing

Please feel free to raise a new Issue on my repository if you have any problems with my app (installation, usage, bugs, etc), or you have suggestions for a new feature. Pull requests are also welcome [here](https://github.com/sandienunez/homehero).This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
MIT © https://github.com/sandienunez 

## Code of Conduct

Everyone interacting in Homehero’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the https://github.com/sandienunez/homehero/blob/master/app/CODE_OF_CONDUCT.md



