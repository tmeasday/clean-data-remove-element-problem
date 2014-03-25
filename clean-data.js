if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return Session.get('greeting');
  };

  Template.hello.events({
    'click input': function () {
      // debugger;
      $.cleanData($('#hello').get());
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
