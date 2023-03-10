// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _roomList: {lobby: true},
  _data: null,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function() {
    var roomname = prompt('Please enter your room name: ');
    if (!Rooms._roomList[roomname]) {
      Rooms._roomList[roomname] = true;
    }
    RoomsView.renderRoom(roomname);
    return roomname;
  },

};