// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.
  friendList: {},

  _data: null,

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  toggleStatus: function(username) {
    if (!Friends.friendList.hasOwnProperty(username)) {
      Friends.friendList[username] = true;
    } else {
      Friends.friendList[username] = !Friends.friendList[username];
    }
  },

};