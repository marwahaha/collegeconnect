Sinch Javascript SDK Beta 0.9.8
-------------------------------
Welcome to Sinch js SDK Beta.

Copyright 2014, Rebtel Networks AB


Features
--------
 - Sinch SDK for web
 - PSTN Calling
 	- Make calls using WebRTC
 - Web calling 
 	- Make and receive calls using WebRTC
 	- Limited to browsers now, compatability with native clients coming
 - Instant messaging
 	- Multi-device compatible
 	- One or more recipients
 	- Delivery receipts
 - Partner user management
 	- Authentication ticket for session creation
 	- Allows full user management for partner
 - Sinch user management
 	- Create user, update password and basic profile
 	- Authenticate as user

Note: While browser/browser calling works fine. Browser/native calling is in the works.

Please note that this is a beta version of the Sinch JavaScript SDK which is still undergoing final testing before its official release. Should you encounter any bugs, glitches, lack of functionality or other problems using our SDK, please send us an email to dev@sinch.com
Your help in this regard is greatly appreciated.


Quick start
-----------

* Include Sinch JS SDK with:
	<script src="//cdn.sinch.com/latest/sinch.min.js"></script>

* Read the user-guide for introduction and the reference docs for details. 

* Look at the sample apps for inspiration.


Getting Started
---------------
Have a look at the Sample App in the samples/ folder, where you'll find:
	- SinchIMsample, our Instant Messaging sample app
	- SinchPSTNsample, our PSTN calling sample app
	- SinchWEBsample, our Web to Web calling sample app

Both of these sample apps demonstrate user management, session handling and more. The interesting stuff can be found in the .js files.

In order to get started follow these steps: 

 1) Try open SinchIMsample/index.html in a web-browser (Chrome or Firefox). Open the developer console. 
 2) In the browser window you should see a web form where you can either create a new user or login as a user. 
 3) Try creating a user
 4) An error message "Illegal Authorization Header" error is shown. This is because the sample app don't use your app key yet. 
 5) Go to www.sinch.com, create an account and a new application (or use an already existing app)
 6) Replace MY_APPLICATION_KEY in IMsample.js with your application key. 
 7) Try creating a user, now it should work!
 8) Open the same page in a separate window and create another user
 9) You can now try sending messages between these two users.

Note: Currently there is a bug interfering when multiple tabs are open at the same time. Please prefer to use multiple browsers and/or Incognito mode when developing.

Have a look at the source code in IMsample.js, enable the onLogMessage callback if you're curious about the activity under the hood. It's a good way to have logging enabled during development for easy error tracking.

You can also activate session loading by enabling the if-statement on line 36, by removing "false" from the if-statement. The PSTN sample application has this activated by default, so please see the PSTNsample.js file for reference.

As for the PSTN sample app, you may have to load the application from a web server (may be local), depending on the security settings for WebRTC in your browser. When trying PSTN calls please ensure you replace "MY_APPLICATION_KEY" with your actual key. 


Documentation
-------------
The user-guide is available in the docs/ folder. Simply open index.html and read about:
	- Instructions for first-time developers
	- Using Sinch in your app for sending and receiving messages
	- Using Sinch in your app for making PSTN calls
	- Chapter on authentication 
	- Session Management 
	- Other information about Sinch, such as creating your app, note on export regulations and more.

Reference documentation is available in docs/ folder. Simply open index.html and read about: 
	 - SinchClient (starting point)
	 - MessageClient
	 - CallClient


Known issues
------------

- There is an issue running too many instances at the same time. No more than 3-4 instances can be run at the same time in the same browser. 
  (if problem experienced, restart browser and only run one instance and try again with fewer instances)
- After three failed login attempts on one user accounts, that account is locked for a while. 
- Restore messages missed since last login is currently disabled. 
- When browser close, any ongoing PSTN calls are not terminated properly but relies on B-side doing a time-out. (~ 1 minute)








