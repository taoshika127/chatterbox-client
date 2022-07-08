// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.handleClick(event);
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    App.stopSpinner();
    //FormView.setStatus(false);
    data.forEach(function(message) {
      MessagesView.renderMessage(message);
      console.log(decodeURI(window.location.search.slice(10)));
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // MessageView.render(MessagesView.$chats)
    var singleMessage = MessageView.render(message);
    MessagesView.$chats.append(singleMessage);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    $('#chats').on('click', '.username', function(event) {
      Friends.toggleStatus(event.target);
    });
  },
};