# To Do List
## Description

Complete a to do list app deployed to heroku.
## Context

Create a full stack to do list web app and make tutorials about what your learn.
Goals
- Learn how front end and back end connect.
- Learn how to dissect a new problem/challenge.
- Go through the whole process of creating and deploying a working app in a week.
- Level the project correctly into stretch zone (Goldilocks Status: Achievement Unlocked)
## Specifications
#### User Stories:

The App: As a user...
- [x] I can create to do list items.
  - views (pug)
    - [x] view for all list items
    - [x] form for creating new list items
  - routes (express)
    - [x] `GET /items` route to show all list items
    - [x] `POST /items` route to create a new list item using POST data
  - data model (js, postgres)
    - [x] show items from db in item list view
    - [x] app logic to insert a list item into db after creating
- [x] I can delete unwanted to do list items.
- [x] I can check items off as completed.
- [x] I can rearrange to do list items.
- [x] I can edit the text on existing to do's.

Additional Specs:
- [x] Create the back end using node and express.
- [x] Create a database of to do list items.
- [x] Follow good Git team behaviors (do all your work on branches & submit pull requests for review before merging to master)
- [x] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).

#### Stretch Goals/Nice to Have's:
- [ ] I can log into my account.
- [ ] Autocomplete in the input form.
- [ ] I can create mulitple lists of to do's.
- [ ] Write the app using ES6 and deploy using babel.

---
## License

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
