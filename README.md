# EmPowerSoft-Contest-2015

This project won 4th place in the EmPowerSoft contest in 2015. It was build by me and my classmate.

Stack: NodeJs, MongoDB, Express, Bootstrap, fullPageJs, Jade, Less

To run the project, first install dependencies using npm install. Open MongoDB and run npm app.js.

It features a landing page for a construction firm, a "shop" and an administration panel. To setup an admin account, register and in mongo run db.users.update({email:”account_email”},{$set:{isAdmin:true}})
