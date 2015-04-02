Meteor.publish('PlayersList', function(){
	return PlayersList.find();
});

Meteor.methods({
	'add_player': function(player){
		PlayersList.insert({
			name: player,
			score: 0
		});
	},
	'remove_player': function(player_id){
		PlayersList.remove(player_id);
	},
	'update_player_score': function(player_id, toAdd){
		PlayersList.update({_id: player_id}, {$inc: {score: toAdd} });
	}
})