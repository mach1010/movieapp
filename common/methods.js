Meteor.methods({
	addMovie: function (newMovie) {
		// form validation
		if (newMovie.title == "") {
			throw new Meteor.Error(413, "Missing Title!!!!!!!!!");
		}
		if (newMovie.director == "") {
			throw new Meteor.Error(413, "Missing Director!!!!!!");
		}
		
		// Insert movie (simulate on client, do it on server)
		return Movies.insert(newMovie);
	}
});
