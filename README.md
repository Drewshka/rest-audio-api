## Installation

#### Clone

1. Clone this repo to your local machine using `git@github.com:Drewshka/rest-audio-api.git`

#### Setup

1. Navigate to the client folder in your terminal and install npm like this:

```
 $ npm install
```

2. Navigate to the server folder in your terminal and install npm like this:

```
 $ npm install
```
3. Install MySQL and MySQL workbench on your computer in case you don't have it installed already:

```
 https://www.mysql.com/downloads/
```

4. Create a database in your workbench called 'audio'

5. Navigate to your server in terminal:

```
 $ npm run migrate
```

and then..

```
 $ npm run seed
```

6. The table 'audioFiles' should now be created with the seeded data

#### Run

1. Navigate to the client folder..:

```
 $ npm start
```

2. Navigate to the server folder..:

```
 $ nodemon server.js
```
