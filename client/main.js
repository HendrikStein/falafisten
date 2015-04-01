Meteor.subscribe('menu');

if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);
}

Template.main.helpers({
    counter: function () {
        return Session.get('counter');
    }
});
