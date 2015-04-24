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
Privacy?

The flow-
App
User enters target and qty.
App checks user's account balance.
if sufficient, send.

Result of oauthResult.get:
data: Array[1]
  0: Object
    contributors: null
    coordinates: null
    created_at: "Thu Apr 23 22:22:24 +0000 2015"
    entities: Object
      hashtags: Array[0]
        length: 0
        __proto__: Array[0]
      symbols: Array[0]
        length: 0
        __proto__: Array[0]
      urls: Array[0]
        length: 0
        __proto__: Array[0]
      user_mentions: Array[0]
        length: 0
        __proto__: Array[0]
      __proto__: Object
    favorite_count: 0
    favorited: false
    geo: null
    id: 591366540403978200
    id_str: "591366540403978240"
    in_reply_to_screen_name: null
    in_reply_to_status_id: null
    in_reply_to_status_id_str: null
    in_reply_to_user_id: null
    in_reply_to_user_id_str: null
    lang: "en"
    place: null
    retweet_count: 0
    retweeted: false
    source: "<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>"
    text: "First tweet."
    truncated: false
    user: Object
      contributors_enabled: false
      created_at: "Thu Apr 23 11:42:46 +0000 2015"
      default_profile: true
      default_profile_image: true
      description: ""
      entities: Object
        description: Object
          urls: Array[0]
            length: 0
            __proto__: Array[0]
          __proto__: Object
        __proto__: Object
      favourites_count: 0
      follow_request_sent: false
      followers_count: 0
      following: false
      friends_count: 0
      geo_enabled: false
      id: 3168630986
      id_str: "3168630986"
      is_translation_enabled: false
      is_translator: false
      lang: "en"
      listed_count: 0
      location: ""
      name: "Tweet Bucks"
      notifications: false
      profile_background_color: "C0DEED"
      profile_background_image_url: "http://abs.twimg.com/images/themes/theme1/bg.png"
      profile_background_image_url_https: "https://abs.twimg.com/images/themes/theme1/bg.png"
      profile_background_tile: false
      profile_image_url: "http://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png"
      profile_image_url_https: "https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png"
      profile_link_color: "0084B4"
      profile_location: null
      profile_sidebar_border_color: "C0DEED"
      profile_sidebar_fill_color: "DDEEF6"
      profile_text_color: "333333"
      profile_use_background_image: true
      protected: false
      screen_name: "TweetBucksAL"
      statuses_count: 1
      time_zone: null
      url: null
      utc_offset: null
      verified: false
      __proto__: Object
    __proto__: Object
  length: 1
  __proto__: Array[0]