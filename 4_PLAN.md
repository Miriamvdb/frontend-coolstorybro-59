## Backend

0. Create new instance on elephantSQL and add it on config.js
1. Generate new models and migrations for Space and Story
2. Add validations to models and migrations
3. Set up relations

`space belongsTo user`
`user hasOne space`

`story belongsTo space`
`space hasMany stories`

4. Create seeds for space and story
5. Query relations (keep it simple)
6. Create new router folder and import it on index.js

## Feature 1

```js
const innitialState = {
  spaces: [] || null,
  spaceDetails: {} || null,
};
```

1. Set up the endpoint in the backend and test it (http) | DONE
2. Create a new component/page, add to app.js, register a page | DONE
3. Create a new slice in the reducer and import in index (create file selectors, thunks, slice) | DONE
4. Write a thunk to fetch data (spaces) | DONE
5. Import the thunk in the page, pass it to useEffect and dispatch it | DONE
6. Check the response | DONE
7. Go back to thunk, dispatch it to the reducer | DONE
8. Write a case in the reducer | DONE
9. Create a selector to select spaces | DONE
10. Import the selector on the page, pass it to useSelector | DONE
11. Map the data | DONE

## Feature 2

1. Set up the endpoint in the backend and test it (http) | DONE
2. Create a new component/page, add to app.js, register a page | DONE
3. Create a new property in the reducer `spaceDetails` | DONE
4. a. Write a thunk to fetch data (spaceDetails) | DONE
   b. Import the thunk in the page, pass it to useEffect and dispatch it | DONE
   c. Check the response | DONE
   d. Go back to thunk, dispatch it to the reducer | DONE
5. Write a case in the reducer | DONE
6. Create a selector to select spaceDetails | DONE
7. Import the selector on the page, pass it to useSelector | DONE
8. Display the data | DONE

## Feature 4

- [x] 1. Add an If on your navigation bar, to show the MySpace NavLink just if the token is true;
- [x] 2. Import the userId on the Navigation bar to add on the mySpace route;
- [x] 3. Fix the endpoint (login + me) of the users to send the mySpace + stories with the data of the user;
  - [x] Add a new Space.findOne(userId) inside the /login and the /me endpoint;
  - [x] Add the value on the user object before the response.send to the client;
  - [x] Check the data before pass to the client and inside the client (thunk);
- [x] 4. Inside the thunks, create a new dispatch to the action setMySpace, with the information of the space and its stories;
- [x] 5. Create a selector to pass the mySpace data to the mySpace page;
- [x] 6. Import the mySpace and the user inside the mySpace page using useSelector
- [x] 7. Display the data on the MySpace page;
- [ ] 8. Create the structure of the page (div, buttons, etc)
- [ ] 9. Delete the Story:
  - [x] Create the endpoint to delete the story;
  - [ ] Create the thunk to delete the story;
  - [ ] Dispatch the delete thunk from the MySpace page;
- [ ] 10. Create the useEffect to monitor the data and refresh the page when the story is deleted without refresh manually;
  - [ ] Inside the deleteStory thunk make a request to the endPoint: router.get('/details/:id’)
  - [ ] Check the data;
  - [ ] Dispatch the response.data to the setMySpace reducer
  - [ ] Create the mySpace Selector - In this case was created;
  - [ ] Import the mySpace selector on the MySpace page using useSelector - In this case was done;
  - [ ] Add the useEffect to monitor the mySpace;
