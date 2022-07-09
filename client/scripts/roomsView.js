// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.handleClick();
    RoomsView.handleChange();
  },

  render: function(data) {
    // TODO: Render out the list of rooms.
    data.forEach(function(obj) {
      if (!Rooms._roomList[obj.roomname] && obj.roomname) {
        Rooms._roomList[obj.roomname] = true;
        RoomsView.renderRoom(obj.roomname);
      }
    });
    console.log(Rooms._roomList);
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    RoomsView.$select.append('<option class = "roomname">' + roomname + '</option>');
  },

  handleChange: function() {
    // TODO: Handle a user selecting a different room.
    $('#myselect').on('change', FormView.renderMessage);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    RoomsView.$button.on('click', function(event) {
      Rooms.add(event);
    });
  }

};
