# PaperTrader

PaperTrader is a free website that allows users to test out their stock and/or ETF trading strategies without the risk of losing their own money. A link to the live site can be found here: https://papertrader.herokuapp.com/#/

## Features

+ Users can create unlimited fake accounts with any amount of cash balance they like to replicate their real brokerage account, or to just try new strategies
+ Search for any stock or ETF before executing a trade
+ Similar to a real brokerage account, the site will prevent trades from being placed when certain fields are not entered or the trade exceeds the cash balance of the account

## Usage
+ Create a new profile through the "Create Profile" Link on the homepage.
+ After creation, you'll be redirected to the "Accounts Page" where you'll click on a link to create a new trading account with any name and amount of cash you'd like to start with.
+ You can then go back to the home page, click "Place Trade", and begin trading!
+ If you would rather try the website before creating a profile, you can select "Guest Login" located on the "Login" page.

## Under the hood
+ Pulling stock data is done using the Alpha Vantage API: https://www.alphavantage.co
+ Charting stock information is done using Apex Charts: https://apexcharts.com
+ All frontend requests are made using React & JavaScript, while all backend requests are made using Ruby on Rails.

