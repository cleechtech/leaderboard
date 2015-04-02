Meteor.subscribe('PlayersList');

Template.players_list.helpers({
  'player': function(){
    // descending score order
    // if score is the same sort ascending alphabetically
    return PlayersList.find({}, {sort: {score: -1, name: 1} });
  }
});

Template.players_list.events({
  'click .increment': function(e, tmpl){
    Meteor.call("update_player_score", this._id, 5);
  },
  'click .decrement': function(){
    Meteor.call("update_player_score", this._id, -5);
  },
  'click .remove': function(){
    Meteor.call('remove_player', this._id);
  }
});