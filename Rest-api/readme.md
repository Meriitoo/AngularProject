# REST-api for Angular project in SoftUni

## Getting started
Let's make our first API request to the REST-api!
Before we run the app we need to install npm install nodemon.

In the example below, we're trying to get information about the REST-api:

```https://localhost:3000/api/test```

Here is the response we get:

```
{
    "name": "rest-api",
    "version": "1.0.0",
    "description": "REST-api for back-end of Angular project in SoftUni",
    "main": "index.js",
}
```

## Base URL
The Base URL is the root URL for all of the API, if you ever make a request to the API and you get back a 404 NOT FOUND response then check the Base URL first.

The Base URL for the API is:

```https://localhost:3000/api```

The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

## Authentication
This API isn't open API. Authentication is required to store and get data. This also means that I've limited what you can do.

# Endpoints: Users

* ```/register``` -- signing up;
* ```/login``` -- signing in;
* ```/logout``` -- logging out;

## Register User
Signs up user and returns the registered data as json.

### URL --> ```/auth/register```

### Method --> ```POST```

### Body -->

```
{
    "name":"Mimito"
    "email":"mimito@gmail.com",
    "telephone":"0892314578",
    "password":"123456",
    "rePassword":"123456"
}
```

Required:

```username``` : [string] -- The email of the person is required and must be unique;

```email``` : [string] -- The email of the person is required and must include @gmail.com to be valid and also there is a minimum length of 5 chars, allowed are latin letters and numbers; 

```password``` : [string] -- The password of the person is required and must be unique, also there is a minimum length of 5 chars, allowed are latin letters and numbers;

Not Required

```tel``` : [string] -- Optional;

### Success Response:

Code: 200

Content: 
``` 
{
    "_id": "5f1875690916010017964978",
    "themes": [],
    "posts": [],
    "tel":"0892318846"
    "email": "merito@gmail.com",
    "username": "Merito",
    "password": "$2b$05$frVlvQQ8r99goLwfd0wtROEiyfasOMfmWmjSQ4.GzJ9W8kShwzqou",
    "created_at": "2020-10-14T08:04:12.196Z",
    "updatedAt": "2020-10-14T08:58:53.589Z"
}
```

## Login User
Signs in user and returns the registered data as json.

### URL --> ```/auth/login```

### Method --> ```POST```

### Body -->

```
{
    "username":"Merito",
    "password":"123456"
}
```

Required:

```username``` : [string] -- The username of the person 

```password``` : [string] -- The password of the person 

### Success Response:

Code: 200

Content: 
``` 
{
    "_id": "5f1875690916010017964978",
    "themes": [],
    "posts": [],
    "tel":"0892318846"
    "email": "merito@gmail.com",
    "username": "Merito",
    "password": "$2b$05$frVlvQQ8r99goLwfd0wtROEiyfasOMfmWmjSQ4.GzJ9W8kShwzqou",
    "created_at": "2020-10-14T08:04:12.196Z",
    "updatedAt": "2020-10-14T08:58:53.589Z"
}
```

## Logout User
Logout user.

### URL --> ```/auth/logout```

### Method --> ```POST```

### Success Response:

Code: 401 Unauthorized

Content: 
``` 
{ 
    "message": "Logged out!"
}
```

# Endpoints: Themes

* ```/themes```
* ```/themes/:themeId```

## Get Themes
Returns all themes as json.

### URL --> ```/themes```

### Method --> ```GET```

### Success Response:

Code: 200

Content: 
``` 
[
    {
        "subscribers": ["5f8580d25d1da62568dd38fd"],
        "posts": ["5f858dd2d895ad23602db9d5"],
        "_id": "5f858dd2d895ad23602db9d4",
        "themeName": "Autmn",
        "userId": "5f8580d25d1da62568dd38fd",
        "area": "The leaves are falling",
        "created_at": "2020-10-13T11:21:54.863Z",
        "updatedAt": "2020-10-13T11:21:54.898Z",
        "__v": 0
    }
]
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Post Theme
Creates new Theme with the first caption of the author and returns the theme as json.

### URL --> ```/themes```

### Method --> ```POST```

### Body -->

```
{
    "themeName": "Some Caption Title",
    "postText": "Some Post text",
    "area": "Some Content text",
}
```

Required:

```themeName``` : [string] -- The Title of your new Caption, which you want to create, required and  must be at least 5 characters long.
```postText``` : [string] -- The text of your post. This post will be append as first caption on your Theme, post must be at least 10 characters long and it is required.
```area``` :: [string] -- This is the content of the caption, like for title you write content, for example, if we have title Summer 2024 the caption must be something like - "Adventures await where the sand meets the sea".

### Success Response:

Code: 200

Content: 
``` 
{
    "_id": "5f86c38abfa44331a0ff0093",
    "subscribers": ["5f86c1f0a112c130e89964af"],
    "posts": ["5f86c38abfa44331a0ff0094"],
    "themeName": "Summer 2024",
    "userId": "5f86c1f0a112c130e89964af",
    "area": "Adventures await where the sand meets the sea",
    "created_at": "2020-10-14T09:23:22.102Z",
    "updatedAt": "2020-10-14T09:23:22.114Z",
    "__v": 0
}
```

## Create Post
Creates new Post of the author and returns the theme as json.

### URL --> ```/themes/:themeId```

### Method --> ```POST```

### Body -->

```
{
    "postText": "Some Post text"
}
```

### Success Response:

Code: 200

Content: 
``` 
{
"_id": "5f858dd2d895ad23602db9d4",
"subscribers": ["5f8580d25d1da62568dd38fd"],
"posts": [
    "5f85ad8f1141b13a04a9139c",
    "5f85b2501141b13a04a9139d"
],
"themeName": "Some Theme",
"userId": "5f8580d25d1da62568dd38fd",
"area": "Some content",
"created_at": "2020-10-13T11:21:54.863Z",
"updatedAt": "2020-10-13T13:57:36.466Z",
"__v": 0
}
```
`
# Endpoints: Locations

## Create Location for mettings
Creates new Location for meetings and returns the location as json, if only you are authenticated.

### URL --> ```/location/create```

### Method --> ```POST```

### Body -->

```
{
    "meetingPlace": "Varna",
    "meetingTime": "10pm",
    "mettingTopic": "Girls night"
}
```

### Success Response:

Code: 200

Content: 
``` 
{
     "_id": "65f9df11648a122f38be306c",
    "meetingPlace": "Varna",
    "meetingTime": "10pm",
    "mettingTopic": "Girls night"
    "__v": 0
}
```


# Endpoints: Winners

## Add winners from game
Everyone can play the game, no authentication needed.

### URL --> ```/winners/create```

### Method --> ```POST```

### Body -->

```
{   
    "firstName" : "Stamat"
    "lastName" : "Ivanov"
    "telephone": "0892318754"
}
```

### Success Response:

Code: 200

Content: 
``` 
{
     "_id": "65fda03f1d77aa3b980ad201",
    "firstName" : "Stamat"
    "lastName" : "Ivanov"
    "telephone": "0892318754"
    "__v": 0
}
```


# Endpoints
--> users:
.post /register - register new user
.post /login - login user
.post /logout - logout user

.get /profile - get user info
.put /profile - edit user info

--> themes:
.get /themes - lists all themes
.post /themes - create new theme only for registered users
.put /theme - subscribe/like for this theme only for registered users

--> posts:
.get themes/id - get latest posts for theme
.post themes/id - create post in theme by id only for registered users

--> locations:
.get location/getAll - lists all created locations only for registered users
.post location/create - add new location only for registered users
.patch location/update/:id - edit the location only for registered users
.delete location/remoce/:id - delete the location only for registered users

--> winners:
.post winners/crate - add the winner, no registration needed
