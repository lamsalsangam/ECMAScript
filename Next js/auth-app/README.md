# Auth App

### Dependencies

```bash
npm i axios bcryptjs jsonwebtoken nodemailer mongoose
```

Axios : For making it easy for the production.

Bcryptjs : It is the library which is commonly used to encrypt the stuff. It is used here to encrypt the password and for the token also(which will be complex and long encrypted string.)

JSONwebtoken : For sending the token securly not to be stored in the local storage but sending and securing the cookies from the server side so it doesn't get manipulated in the front-end side.

Nodemailer : Simple library to shoot out an email (Gmail, AWS,etc.)

Mongoose : Library that helps to talk to the mongodb it is the wrapper around the mongodb drivers.

---

src/app/api -> For creating the API point [Backend]

src/dbConfig -> Making an connection with the database

src/models -> To create the database schemas

src/helpers -> have the helper function for the API endpoint
