
== Open Todo API Description
This project adds an external API to a todo app forked from open-todo


Setup Instructions

Clone this repository.

Setup database

Then copy config/application.example.yml to config/application.yml and add database information.
```
DEV_DATABASE_USERNAME:
DEV_DATABASE_PASSWORD:
TEST_DATABASE_USERNAME:
TEST_DATABASE_PASSWORD:
```

Run bundle install to install all relevant gems.

Run rspec to test the application.

###Usage Instructions

First start the app and make an account by going to the web app, https://dysart-open-todo.herokuapp.com/



Once you have a token, you can use the following endpoints and json formats to see and create additional users, lists, and items. Users, Lists and items can be changed or deleted via the API.


Returns json for a list of user ids and usernames

```
curl https://dysart-open-todo.herokuapp.com/api/users
GET /api/users/
```

Returns a list of all open and viewable lists and their items for a user. If you are the user, you will also see your private lists.

```
curl https://dysart-open-todo.herokuapp.com/api/users/1/lists

```
