# REST-api for Angular course in SoftUni

## Getting started
Let's make our first API request to the REST-api!

In the example below, we're trying to get information about the REST-api:

```https://localhost:3000/api/test```

Here is the response we get:

```
{
    "name": "rest-api",
    "version": "1.0.0",
    "description": "REST-api for back-end of Angular course workshop in SoftUni",
    "main": "index.js",
}
```

If your response looks slightly different don't panic. This is probably because more data has been added to the API since I made this documentation.

## Base URL
The Base URL is the root URL for all of the API, if you ever make a request to the API and you get back a 404 NOT FOUND response then check the Base URL first.

The Base URL for the API is:

```https://localhost:3000/api```

The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

## Authentication
This API isn't open API. Authentication is required to store and get data. You can use the connected REACT-app to make registration and sign in. This also means that I've limited what you can do. If you find a mistake, then just write an issue.

# Endpoints: Users

* ```/auth/register``` -- signing up;
* ```/auth/login``` -- signing in;
* ```/auth/logout``` -- logging out;

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

```name``` : [string] -- The email of the person is required and must be unique;

```email``` : [string] -- The email of the person is required and must be unique;

```username``` : [string] -- The username of the person is required and must be unique, also there is a minimum length of 5 chars, allowed are latin letters and numbers;

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

### URL --> ```/users/login```

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
Creates new Theme with the first post of the author and returns the theme as json.

### URL --> ```/themes```

### Method --> ```POST```

### Body -->

```
{
    "themeName": "Some Caption Title",
    "postText": "Some Post text"
}
```

Required:

```themeName``` : [string] -- The Title of your new Captin, which you want to create
```postText``` : [string] -- The text of your post. This post will be append as first comment on your Caption.

### Success Response:

Code: 200

Content: 
``` 
{
    "_id": "5f86c38abfa44331a0ff0093",
    "subscribers": ["5f86c1f0a112c130e89964af"],
    "posts": ["5f86c38abfa44331a0ff0094"],
    "themeName": "Summer",
    "userId": "5f86c1f0a112c130e89964af",
    "area": "Sunset"
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

# Endpoints: Posts

* ```/themes/:postId```


<!-- users
.post /register - register new user
.post /login - login user
.post /logout - logout user

.get /profile - get user info
.post /profile - post user info
.put /profile - edit user info

themes
.get /themes - lists all themes
.post /themes - create new theme only for registered users

posts:
.get themes/id - get all posts for theme
.post themes/id - create post in theme by id only for registered users
.put themes/id/posts/id - edit post only possible for author
.delete themes/id/posts/id - delete post only possible for author -->


<!-- http://localhost:3000/api/users/register --  {"name":"SomeName","email":"some@email.com","username":"someUsername","password":"12345","rePassword":"12345"} -->
<!--http://localhost:3000/api/themes -- {"themeName":"Some Theme", "userId":"5f85bf709a517d36f4abe656", "post": "Some Post" } -->
<!-- http://localhost:3000/api/themes/5f858dd2d895ad23602db9d4  -- {"userId":"5f8580d25d1da62568dd38fd", "postText": "Some Post textsdfasdf" } -->
