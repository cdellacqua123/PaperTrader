# PaperTrader

[Live link to PaperTrader](https://papertrader.herokuapp.com/#/)

## Overview

PaperTrader is a clone of Investopedia's Stock Simulator, a free website that allows users to test out their stock and/or ETF trading strategies without the risk of losing their own money. PaperTrader uses React & Redux for its frontend and Ruby on Rails for its backend.

## Features

+ Users can create unlimited fake accounts with any amount of cash balance they like to replicate their real brokerage account, or to just try new strategies.
+ Search for any stock or ETF before executing a trade.
+ Similar to a real brokerage account, the site will prevent trades from being placed when certain fields are not entered or the trade exceeds the cash balance of the account.

## Usage
+ Create a new profile through the "Create Profile" Link on the homepage.
+ After creation, you'll be redirected to the "Accounts Page" where you'll click on a link to create a new trading account with any name and amount of cash you'd like to start with.
+ You can then go back to the home page, click "Place Trade", and begin trading!
+ If you would rather try the website before creating a profile, you can select "Guest Login" located on the "Login" page.

## Tech
### Frontend
+ React
+ Redux
+ JavaScript
+ Webpack

### Backend
+ Rails
+ Ruby
+ Jbuilder
+ PostgreSQL

### API's/Libraries
+ [Alpha Vantage API](https://www.alphavantage.co) for pulling stock quotes
+ [Apex Charts](https://apexcharts.com) for charting stock information
+ [Finnhub](https://finnhub.io) for pulling market news


