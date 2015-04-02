Template.add_player.events({
	'submit form': function(e, tmpl){
		e.preventDefault();
		var player_name = $(e.target).find('[name=player_name]').val();
		$(e.target).find('[name=player_name]').val('');
		
		Meteor.call('add_player', player_name)
	}
});