/**
 * Created by Hendrik Stein on 01.04.15.
 *
 * Server data publications
 */
Meteor.publish('menu',function() {
   return Menu.find();
});