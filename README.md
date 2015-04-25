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

### Further Development

Implement the ability to switch users.
Improve interface.
Implement responsive layout.
