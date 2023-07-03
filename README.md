# Task- A -

- Create an API in NodeJS/Python that allows user login via username, password b. username to be between 6-12 letters.

- password to allow alphabet, numbers, special characters d. minimum password length is 6

## Project - Login API

### Models

- User Model

```yaml
{
  username: { string, mandatory },
  password: { string, mandatory, valid password },
  createdAt: { timestamp },
}
```

## User APIs

### POST /register

- Create a user document from request body.
- **Response format**

```yaml
{
  "data":
    {
      "username": "batman123",
      "password": "batman$123",
      "_id": "64a2b3436627f46d74687342",
      "createdAt": "2023-07-03T11:38:43.853Z",
      "updatedAt": "2023-07-03T11:38:43.853Z",
      "__v": 0,
    },
  "message": "User created successfully",
}
```

### POST /login

- Allow an user to login with their username and password.
- **Response format**

```yaml
{
  "data":
    {
      "_id": "64a2b3436627f46d74687342",
      "username": "batman123",
      "password": "batman$123",
      "createdAt": "2023-07-03T11:38:43.853Z",
      "updatedAt": "2023-07-03T11:38:43.853Z",
      "__v": 0,
    },
  "message": "login successful",
}
```
