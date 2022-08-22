## Features

:warning: At the end of this briefing there are links for sample solutions. We recommend going over them once you are finished with the assignment. You might learn new tricks :smile:.

## What are we building? (Just a reminder)

We are building a webapp where people can have their own space and post stories in it. It is called `Cool story bro`. It has multiple pages

ALREADY DONE | Signup & Login pages (already implemented in the starter kit)
DONE | home page with a list of spaces of different users
DONE | detail page for a space where you can view a users' stories
| page where you can view your own space and stories
| form where you can edit your space
| form where you can post a story

### 1. As a user I want to view a list of spaces belonging to other users

- The default page you see when you go to `/` should be a list of spaces | DONE
- Each space is displayed in the colors their users have customized | DONE
- There is a button linking to the details of that space | DONE

| Criteria                                                                | Points |      | Commits / files                                            |
| ----------------------------------------------------------------------- | ------ | ---- | ---------------------------------------------------------- |
| The frontend route `/` displays a list of spaces                        | 1      | DONE | Backend: created router-folder, files are empty            |
|                                                                         |        |      | Frontend/Feature1: SpacesPage - App.js                     |
| The spaces have a backgroundColor and color as specified by their users | 1      | DONE | Backend: changed colors text/background                    |
|                                                                         |        |      | Frontend/Feature1: SpacesPage - Space/index.js line7       |
| The data is managed using Redux                                         | 2      | DONE | x                                                          |
|                                                                         |        |      | Frontend/Feature1: SpacesPage                              |
| Each space has a `Visit space` button, it links to a space's details    | 1      | DONE | x                                                          |
|                                                                         |        |      | Frontend/Feature2: Added selectors.. - SpacesPage/index.js |
| Total                                                                   | 5      |

---

### 2. As a user interested in people's lives, I want to read people's stories, so I can be informed

- When we click on the `Visit space` button of a space we see the details of a space | DONE
- On this detail page we can see the stories belonging to that space | DONE

| Criteria                                                                | Points |      | Commits / files                                        |
| ----------------------------------------------------------------------- | ------ | ---- | ------------------------------------------------------ |
| The frontend route `/spaces/:id` displays a detail page for a space     | 1      | DONE | Backend/Feature2: added router spaces/:id incl stories |
|                                                                         |        |      | Frontend/Feature2: Added component/page.. - App.js     |
| The stories are displayed with a name, content and an image             | 1      | DONE | Backend/Feature2: added router spaces/:id incl stories |
|                                                                         |        |      | Frontend/Feature2: Added stories in detailspage        |
| The space and its stories are queried from the database using 1 query   | 2      | DONE | Backend/sampleRequests/spacewithstories.js             |
|                                                                         |        |      | x                                                      |
| The space has a backgroundColor and color as specified by their user    | 1      | DONE | Backend: changed colors text/background                |
|                                                                         |        |      | Frontend/Feature1: SpacesPage - Space/index.js line7   |
| The stories are displayed in order, from newest to oldest (`createdAt`) | 2      | DONE | Backend/Feature2: Sorted stories - seeders/stories.js  |
|                                                                         |        |      | Frontend/Feature2: Sorted stories                      |
| Total                                                                   | 7      |

---

### 3. As a user signing up I want a space to be created for me

- When you sign up for a new account, a space should be created for you. | DONE | Backend/auth.js/line54-60
- The space is set up with some default values: | DONE | Backend/auth.js/line54-60
  - title: `<MyName>'s space`
  - description: null
  - backgroundColor: #ffffff (white)
  - color: #000000 (black)
  - userId

| Criteria                                                                                       | Points |      | Files                     |
| ---------------------------------------------------------------------------------------------- | ------ | ---- | ------------------------- |
| When a user sign's up a space is created and saved to the database with the correct attributes | 3      | DONE | Backend/auth.js/line54-60 |
| The space is sent in the response of `/signup` along with the new user                         | 1      | DONE | Backend/auth.js/line68    |
| The space is stored in the redux store in the frontend                                         | 1      | DONE | Frontend/store/...        |
| Total                                                                                          | 5      |

---

### 4. As a logged in user I want to be able to view my space and delete my own stories

- When you are logged in, there should be a link in the navbar to `My space` | DONE
- When you click that link you see the space belonging in to your user and its stories
- Ideally, we add the user's space to the information being fetched when we login | DONE
- That means modifying the `/me` and `/login` endpoints to also send your space in the response | DONE
- Alternatively fetch the data from the endpoint set up for feature #2 (detail page)
- Users also want to be able to delete their own stories.

| Criteria                                                                                                 | Points |      | Commits / files               |
| -------------------------------------------------------------------------------------------------------- | ------ | ---- | ----------------------------- |
| You see a `My space` link in the navbar (but only when you're logged in)                                 | 1      | DONE | x                             |
|                                                                                                          |        |      | Frontend/Feature3             |
| When you click `My space` you see your space and your stories                                            | 1      | DONE | x                             |
|                                                                                                          |        |      | Frontend/Feature4: Added My.. |
| Your space & stories are fetched using the `/me` and `/login` endpoints                                  | 2      | DONE | Backend/Feature4: First part  |
|                                                                                                          |        |      | Frontend/Feature4: First part |
| Your space's details are managed by redux                                                                | 2      | DONE | Backend/Feature4: First part  |
|                                                                                                          |        |      | Frontend/Feature4: First part |
| On `My space`, stories are displayed with a `Delete Story` button which lets them delete their own story | 2.5    | DONE | Backend/Feature4: Added rou.. |
|                                                                                                          |        |      | Frontend/Feature4: Added de.. |
| The story is removed from the space without manually refreshing (CMD + R / CTRL + R)                     | 1.5    | DONE | Backend/Feature4: Added rou.. |
|                                                                                                          |        |      | Frontend/Feature4: Added de.. |
| Total                                                                                                    | 10     |      | -1 voor de zekerheid          |

---

### 5. As a logged in user I want to be able to post stories on space, so I can share my adventures with the world

- You should be able to post a story on your space
- In the `My space` section there should be a button to `Post a cool story bro`
- When you click this button a form appears so you can post a story
- You should only be able to do this when you are logged in

| Criteria                                                                            | Points |      | Commits                                        |
| ----------------------------------------------------------------------------------- | ------ | ---- | ---------------------------------------------- |
| There is a button with `Post a cool story bro` on `My space`                        | 0.5    | DONE | Backend/Feature5: Ugly but working POST story  |
|                                                                                     |        |      | Frontend/Feature5: Ugly but working POST story |
| Clicking the button makes a form appear with the correct inputs for posting a story | 1.5    | x    |                                                |
|                                                                                     |        |      |                                                |
| When a user enters an imageUrl, they can see a preview of the image                 | 1      | DONE | Backend/Feature5: Ugly but working POST story  |
|                                                                                     |        |      | Frontend/Feature5: Ugly but working POST story |
| When the form is submitted a request is sent to the server to create the story      | 3      | DONE |                                                |
|                                                                                     |        |      |                                                |
| The request uses JWT authorization                                                  | 2      | DONE |                                                |
|                                                                                     |        |      |                                                |
| The user sees a success message if the story was posted successfully                | 1      | DONE |                                                |
|                                                                                     |        |      |                                                |
| The success message is an alert, confirm or prompt popup or console.log             | -1     | DONE |                                                |
|                                                                                     |        |      |                                                |
| Total                                                                               | 9      |

---

### 6. As a logged in user I want to be able to edit my space, so I can express myself

- Your space has a title, description backgroundColor and color. You should be able to change those
- In the `My space` section there should be a button to `Edit my space`
- When you click this button a form appears so you can edit your space
- You should only be able to do this if you're logged in

**Hint:** Make the backgroundColor and color inputs using `<input type="color">`, documentation on it can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)

| Criteria                                                                                               | Points |
| ------------------------------------------------------------------------------------------------------ | ------ |
| There is a button with `Edit my space` on `My space` that makes a form appear                          | 1.5    |
| The form has inputs for the spaces attributes                                                          | 0.5    |
| The values in the form start as the current values for your space                                      | 2.5    |
| When the form is submitted a request is sent to update the users space                                 | 2      |
| The request makes use of JWT authorization                                                             | 1      |
| The user can see the results of their update without manually refreshing (CMD + R / CTRL + R) the page | 2.5    |
| Total                                                                                                  | 10     |

---

### 7. Finishing up

- Self assess: Score your assessment yourself using the table below
- Write a reflection about this assessment & your learning process in `REFLECTION.md`:
  - What did you do well, process wise
  - What would you do differently next time to improve, process wise
- Commit your code and use messages when you commit, push it to your respository using `git push origin master`

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ | ---- |
| Student performed an accurate self assessment (max off by + or - 7 points) | 2      | DONE |
| Student can reflect on their process by writing a reflection of ~200 words | 2      | DONE |
| Student has regularly committed changes (at least 1 commit per feature)    | 1      | DONE |
| Student has written clear commit messages                                  | 1      | DONE |
| Total                                                                      | 6      |

### Self assessment

| Section                      | Max Points | Self assessed points | Assessor |
| ---------------------------- | ---------- | -------------------- | -------- |
| 0 Migrations, models & seeds | 8          | 8/8                  | 0/8      |
| 1 Spaces list                | 5          | 5/5                  | 0/5      |
| 2 Space details              | 7          | 7/7                  | 0/7      |
| 3 Space created on signup    | 5          | 5/5                  | 0/5      |
| 4 My space                   | 10         | 9/10                 | 0/10     |
| 5 Posting stories            | 9          | 7.5/9                | 0/9      |
| 6 Editing your space         | 10         | 0/10                 | 0/10     |
| 7 Finishing up               | 6          | 6/6                  | 0/6      |
| Total                        | 60         | 47.5/60              | 0/60     |

## Sample solution

[Client](https://github.com/Codaisseur/cool-story-bro-client)
[Server](https://github.com/Codaisseur/cool-story-bro-server)
