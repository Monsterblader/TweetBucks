# TweetBucks

This is the prototype for a peer-to-peer digital payment system that uses [Twitter](https://twitter.com) to facilitate transactions.  It uses a simplified version of [block chaining](http://en.wikipedia.org/wiki/Bitcoin#Block_chain) to validate transactions.

## Getting Started

To send a payment to another user, send a tweet in the following format:

--- @(username) $$ (amount without punctuation)

Naturally, the actual 'transactions' are not implemented in Twitter.  They are implemented when the user logs into the application.

### The Technology

I chose Angular as my framework because I want to practice it, as it is ubiquitous, and because I just completed two challenges using it, so I have established a rhythm.

For front-end only development, I use an IDE that has a live-update plug in for Chrome.  I used its built-in Angular project template.

I incorporated a library/API, Oauth.io, that handles Oauth.

I am hosting this project on Heroku since, like using Angular, I have a routine, so it is faster.

### Further Development

Implement the ability to switch users.
Improve interface.
Implement responsive layout.

### P2P Payments

I would expect that any reasonable way to implement payments would be via an API.  In order to provide persistence, the first step would be to create a server for security and access.

PayPal, Planet Payment, and other companies enable direct payments via their API's.  PayPal also facilitates payments via e-mail.

### Other Features

It's already on its way to being a Twitter client.  Expanding the application to handle full Twitter functionality would be pretty easy.

Additional redundancy and/or security.  Block chains are successful because a record of each transaction is duplicated many times, making it all but impossible to misrepresent a past payment.

