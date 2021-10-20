# [React-music-player](#react-music-player)
## 📔 Description
## Table of Contents <!-- omit in toc -->

## Getting Started
1. Clone the repository
   
   ```
   $ git clone https://github.com/haykbit/react-music-player.git
    ```
2. Installing
    ```
    $ yarn install
    ```
3. Start

- Open terminals for client and server

    ```
   $ yarn client  
   ```     
   ```
   $ yarn server
   ``` 

## Dependencies
- [React](https://reactjs.org/)
- [React-Dom](https://reactjs.org/docs/react-dom.html)
- [React-Redux](https://react-redux.js.org/)
- [React-Router-DOM](https://reactrouter.com/web/guides/quick-start)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [React-Spinners](https://github.com/davidhu2000/react-spinners)
- [React-Toastify](https://github.com/fkhadra/react-toastify)
- [React-Beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- [React-easy-sort](https://github.com/ricardo-ch/react-easy-sort)
- [Redux](https://redux.js.org/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [Firebase](https://firebase.google.com/)
- [Cross-env](https://github.com/kentcdodds/cross-env)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [Body-parser](https://github.com/expressjs/body-parser)
- [Helmet](https://github.com/helmetjs/helmet)
- [CORS](https://github.com/expressjs/cors)
- [Lodash](https://lodash.com/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)

## Contents and Branches Naming Strategy

This project has a naming strategy for its different elements to facilitate and unify the work between its Collaborators. These conventions are presented below.

## File Structure
- Front-end
```
📦client
 ┣ 📂node_modules
 ┣ 📂src
 ┃ ┣ 📂__tests__
 ┃ ┃ ┗ 📜web.test.js
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜api.js
 ┃ ┃ ┗ 📜stats-api.js
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┣ 📂albums
 ┃ ┃ ┃ ┣ 📂background
 ┃ ┃ ┃ ┗ 📂icons
 ┃ ┃ ┗ 📂music
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂AddToPlaylist
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┃ ┣ 📜addToPlaylist.css
 ┃ ┃ ┃ ┃ ┣ 📜addToPlaylist.css.map
 ┃ ┃ ┃ ┃ ┗ 📜addToPlaylist.scss
 ┃ ┃ ┃ ┣ 📜AddToPlaylist.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂AlbumExplorer
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┣ 📜AlbumExplorer.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂Buttons
 ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┗ 📜Button.test.js
 ┃ ┃ ┃ ┣ 📜Button.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂CreatePlaylistModal
 ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┗ 📜CreatePlaylistModal.test.js
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┣ 📜CreatePlaylistModal.js
 ┃ ┃ ┃ ┣ 📜FormSchema.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂DeleteConfirmation
 ┃ ┃ ┣ 📂FavSongsPlaylist
 ┃ ┃ ┃ ┣ 📂FavPlaylistStack
 ┃ ┃ ┃ ┃ ┣ 📜FavPlaylistStack.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📜FavSongsPlaylist.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂GeneralList
 ┃ ┃ ┣ 📂IndividualSong
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┃ ┣ 📂Checkboxes
 ┃ ┃ ┃ ┃ ┣ 📜Checkbox.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂Textarea
 ┃ ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┃ ┣ 📜Textarea.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┗ 📜Input.test.js
 ┃ ┃ ┃ ┣ 📜Input.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂LoginForm
 ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📂Navbar
 ┃ ┃ ┣ 📂PasswordRecovery
 ┃ ┃ ┣ 📂PaymentInfo
 ┃ ┃ ┣ 📂Playlist
 ┃ ┃ ┃ ┣ 📂EditPlaylistModal
 ┃ ┃ ┃ ┣ 📂PlaylistContextMenu
 ┃ ┃ ┃ ┣ 📂PlaylistDeleteConfirmation
 ┃ ┃ ┃ ┣ 📂PlaylistStack
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┣ 📜Playlist.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂PlaylistCarrusel
 ┃ ┃ ┣ 📂PlaylistGrid
 ┃ ┃ ┣ 📂PlaylistUser
 ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┗ 📜PlaylistUser.test.js
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┣ 📜PlaylistUser.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂ProfileInfo
 ┃ ┃ ┣ 📂RegisterForm
 ┃ ┃ ┣ 📂RightClickMenu
 ┃ ┃ ┣ 📂SearchEngine
 ┃ ┃ ┣ 📂SongBar
 ┃ ┃ ┣ 📂Spinner
 ┃ ┃ ┣ 📂SubscriptionInfo
 ┃ ┃ ┣ 📂UploadInfo
 ┃ ┃ ┣ 📂UploadedSongsPlaylist
 ┃ ┃ ┃ ┣ 📂SongEditModal
 ┃ ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┃ ┣ 📜FormSchema.js
 ┃ ┃ ┃ ┃ ┣ 📜SongEditModal.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂UploadedPlaylistStack
 ┃ ┃ ┃ ┃ ┣ 📜UploadedPlaylistStack.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📜UploadedSongsPlaylist.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📂UserProfile
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜useLockBodyScroll.js
 ┃ ┃ ┗ 📜useRightClickMenu.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂Artist
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┣ 📜Artist.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂FavSongs
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂IndividualPlaylist
 ┃ ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂MyPlaylists
 ┃ ┃ ┃ ┣ 📂__test__
 ┃ ┃ ┃ ┃ ┗ 📜MyPlaylists.test.js
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┣ 📜MyPlaylists.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂PlaylistUserInfo
 ┃ ┃ ┣ 📂Playlists
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┣ 📂Register
 ┃ ┃ ┗ 📂UploadedSongs
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜action.js
 ┃ ┃ ┃ ┣ 📜reducer.js
 ┃ ┃ ┃ ┣ 📜state.js
 ┃ ┃ ┃ ┗ 📜types.js
 ┃ ┃ ┣ 📂player
 ┃ ┃ ┣ 📂playlist
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┣ 📂song
 ┃ ┃ ┣ 📂user
 ┃ ┃ ┣ 📜reducers.js
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📂cloudinary
 ┃ ┃ ┃ ┣ 📜cloudinary.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂util
 ┃ ┃ ┣ 📜test-util.js
 ┃ ┃ ┗ 📜timeFormatter.js
 ┃ ┣ 📜App.js
 ┃ ┣ 📜App.test.js
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.js
 ┃ ┣ 📜reportWebVitals.js
 ┃ ┗ 📜setupTests.js
 ┣ 📜.env.local
 ┣ 📜.gitignore
 ┗ 📜package.json
```    
**Repeated file structure omitted*

- Back-end
```
📦server
 ┣ 📂node_modules
 ┃ ┗ 📂.bin
 ┃ ┃ ┗ 📜nodemon
 ┣ 📂src
 ┃ ┣ 📂__tests__
 ┃ ┃ ┗ 📜server.test.js
 ┃ ┣ 📂config
 ┃ ┃ ┣ 📜config.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜playlistController.js
 ┃ ┃ ┣ 📜songController.js
 ┃ ┃ ┗ 📜userController.js
 ┃ ┣ 📂db
 ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┗ 📜connect.test.js
 ┃ ┃ ┗ 📜connect.js
 ┃ ┣ 📂middleware
 ┃ ┃ ┣ 📜authMiddleware.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜playlistModel.js
 ┃ ┃ ┣ 📜songModel.js
 ┃ ┃ ┗ 📜userModel.js
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜playlistRoutes.js
 ┃ ┃ ┣ 📜songRoutes.js
 ┃ ┃ ┗ 📜userRoutes.js
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜firebase.js
 ┃ ┃ ┃ ┗ 📜verifyIdToken.js
 ┃ ┃ ┗ 📂tests
 ┃ ┣ 📜index.js
 ┃ ┗ 📜server.js
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜package.json
 ┗ 📜yarn-error.log
```
### Technology used
<details>
<summary>Front-end</summary>

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=Jest&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white)
</details>
<details>
<summary>Back-end</summary>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=Nodemon&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongDB-47A248?style=flat-square&logo=MongoDB&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=Jest&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=PHP&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white)
</details>

