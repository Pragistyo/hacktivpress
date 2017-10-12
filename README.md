# hacktivpress
This Program is a Blog article. It aims to have login-register feature, and then CRUD.

This programs aim to use mongoDB as database, mongoose as ODM, and VUE jS 2.0 ++ as front end Javascript framework

## How to run

  1. clone the repo
  2. get into *server* directory, and then :

    npm install
    nodemon app.js

  3. get into *client* directory, and then :

    npm install
    npm run dev

  4. This is a project for livecode phase2 hacktiv8, if its not work yet/ many bugs, please forgive me.


## API END POINT

  The API of the back end

 For login-register feature
| Route | HTTP | Desription|
|-------|------|-----------|
| `/signup/` | POST | Create member username, email, password |
| `/signin/` | POST | Signin member to system |

For blog CRUD feature
| Route | HTTP | Description | Data Need |
| ----- | ---- | ----------- | --------- |
| `/blog` | GET | Get all articles | |
| `/blog/:id` | GET | Get detail articles | |
| `/blog` | POST | Create article | |
| `/blog/:id` | PUT | Update Articles | |
| `/blog/:id` | DELETE | Delete Articles | |

## FAQ

  please PM me if you later want me to fix this project.
