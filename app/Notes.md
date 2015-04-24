Description
You’ll be building TweetBucks, a hypothetical application,
 to satisfy my urgent need to exchange money with any of my
 numerous Twitter followers. I should be able to log in with
 my Twitter account send money to someone by tweeting at them.
 They should be able to do the same by tweeting at me.

You can assume strongly that those personalities following me
 are far more trustworthy than your run of the mill internet
 bandit. For that reason, I’m comfortable with keeping an
 internal ledger of the payments made, without actually
 transferring money. Better yet, since I’ve recently learned of
 something called the “blockchain”, I believe that ledgers
 should be public things and would prefer that Twitter itself
 remain the system of record for these transactions.
Transactions of the form payer X sends Y bitcoins to payee Z are broadcast to this network using readily available software applications.

Yes, this seems like a good idea.

As a clarifying note: I should be able to pay someone either
 from the application or through any other Twitter client.

What I’m concerned with
I’d like this to be largely a front end web application.
 There will be a server-side component to this project, but
 I do not care what it is written in, or how complex it is.
 If you have the opportunity to avoid writing a server
 application altogether, that would probably be best.
 Boilerplates are an acceptable foundation, but I’d like an
 explanation for why you used a particular technology if you
 choose to do so.

The application should be fairly easy to use.

I do not expect you to facilitate real payment in the time
 allotted, but I would like you to think of five ways in which
 you could feasibly add real p2p payments to the application.
 You should also put some thought into how the experience could
 be improved or what other features might be worth adding, given
 additional time and adequate consumer interest.

Be creative and surprise me with your ideas! I’m very much looking
 forward to tweeting money at my mass of adoring followers.

Hosting and Delivery

Hosting doesn’t matter, but you should deploy a live version of
 the application, and I want to know why you chose the hosting
 option that you did.

Please keep the project and commit history on Github. I’d love
 to look through your code as it evolved.
Time

I’d like you to finish this in the next three or four days. If
 that is impossible because you have other commitments in that
 time, just let me know. I understand that this is short notice,
 but I don’t want you to spend more time on it than that, and we
 want to move quickly ;)

Twitter API - send messages to, get all messages from that reference user.
Form field - recipient, quanity.
Have a standard format/keywords.  Be able to identify sender, recipient, activity, quantity.
identity of coin/unit of payment.
account - user, balance
Messages need to have ID - If transaction sent from Twitter - possible to edit
 or delete and send new with ID?
'database' - twitter name, password/access, account balance, 

The flow-
App
User enters target and qty.
App checks user's account balance.
if sufficient, send.
