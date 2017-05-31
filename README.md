# Yum - Food orders

#### Order food daily from the best chef in town!

## [License](LICENSE)

Copyright (C) 2017 JR Technologies.

Yum is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License
as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

Yum is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
See the GNU General Public License for more details.

## Credits

This software was developed suring the Training Bootcamp 2017 at JR Technologies.

Team members:
* Lazos Christos
* Venizelos Kostas
* Manatakis Ioannis
* Piperidi Sofia Anna

Also contributed to this project: Vasilis Antonakis, Alex Ntousakis, Angie Spyrou, Thymios Floros, Dimitris Ntilis, George Filippakis, 
Stavros Apostolakis, Stefanos Markakis, Andreas Kolokotronis, Isidoros Kefakis, Kostas Asargiotakis, Dimitris Marmatakis, Stelios Iliadis

## Requirements

**Runtime:**

* JRE 1.7 or higher
* Mysql server
* SMTP account

**Build:**

* npm (on windows, dont forget to add AppData/Roaming/npm to your PATH env variable)
```
npm install npm@latest -g
```
* netbeans (with NB spring boot plugin installed)

## Installation

* clone the git repository

* in the `bin` folder, you will find a file `application.properties`. Fill in the configuration settings as follow:
	* Modify `server.port = 80` if needed
	* Modify `spring.datasource.url` to point to your mysql server.
	* Modify the username and password of the datasource to match with your mysql user.
	* Modify `spring.mail.host`, `spring.mail.port`, `spring.mail.username` and `spring.mail.password` to match with your SMTP account.
	* If your SMTP server needs extra authentication or encryption, you can use the following properties `spring.mail.properties.mail.smtp.*` below.
	* Modify `yum.mail.senderEmailAddress` and enter here the email address that should be used as sender to send all automatic emails.
	* Modify `yum.hostname` to reflect the hostname your yum server will be accessible to on the network

* Run the SQL file `Yum/install.sql` into your mysql database.
	
* in a console / command line, run the command:
`java -jar yum-1.0.x.jar`

* Access your server at the hostname you specified (by example: http://localhost/)

* Login as `admin@yum.com` with password `123456`

* Change your email address, first name, last name and password from the GUI (click on the button `Settings` in the dropdown on the top right corner of the screen).

* You are ready to use the Yum application!

## Build

* `npm install -g @angular/cli`

* clone the git repository

#### Front-end and Back-end on separate servers (for coding, debug...)

* configure the client-side by editing the file `yumfe/src/app/app.module.ts` and modifying the line:

`{provide: BASE_PATH, useValue: "http://localhost:8082/api"}` ( replace `localhost:8082` with the hostname of your backend server )

* in the folder `yumfe` run the command

`npm install`

* and then

`ng serve` if you want to run the front-end on a separate server than the backend.

* Start your back-end (probably in netbeans. just run the project)

#### Front-end and Back-end on same server ( for deploy )

* in the `yumfe` folder, run `ng build --prod`

* copy the whole content of the subfolder `dist` inside the folder `Yum/src/main/resources/static` so that the `index.html` and all other files now reside in the static folder.

* Open the folder `Yum` in netbeans

* If you want to change the secret for the JWT token, you can do so in the file `Yum/src/main/java/org/bootcamp/JWTCodec.java` by changing the `key` string.

* Build the project.

* You should now have a file called `target/yum-1.0.x.jar`