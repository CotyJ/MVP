Hello and welcome to the Pathfinder Character Database!

See package.JSON for dependancies for this project.

To get started navigate into myValuableProject in your terminal and execute the command:
npm install

To see the website running on a localhost port right away, try:
npm run build
npm run start-server



--- Useful Scripts ---

build          - Runs the webpack and transpiles code into bundle.js
build:watch    - Same as 'build' but watches the webpack for changes and rebuilds automatically
kill           - Kills the port process in case of ERR PORT IN USE
start-server   - Initiates nodemon to restart the server on changes to the file
test           - Runs Jest to test
test:coverage  - Runs Jest test coverage report



--- Using PCD ---

On the left side, you can filter the characters shown in the gallery (on the right):
  By Class
  By Ancestry
  By Background
  By Skills/Feats (Future Dev)
  By entering their name (Future Dev)

At the bottom of the filters, you can also create a new character by clicking on the button.
  This opens a new window where you can select the characteristics, and then submit your character.

In the Gallery itself, you can click on a character to see more details about them.



--- Future Plans ---

Adding full support for other characteristics

  Charactes currently only consist of:
    Ancestries
    Backgrounds
    Classes
    Levels

  Want to add:
    Description
    Equipment
    Feats
    Photo(s)
    Skills
    Spells

Using SQL queries to for the search filter instead of state variables.



There are hundreds of spells, and thousands of feats. Currently there is no API for accessing this data,
so anything that will be gathered will have to be gathered via script or by hand.

My ultimate goal is to have a functional character viewer and generator.
  The site should be able to create a full character from start to finish, as well as creating
  a user-friendly version with all of the relevant data presented neatly, that has all calculations
  for any numerical values.

Eventually I would like to add some kind of note-taking or journaling experience so characters can have
their stories fleshed out by adding to them over their adventures.






Created By: Coty Janeway
All other legal blah blah for Paizo
