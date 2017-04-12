// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',
  //need more queue view html decoration
  initialize: function() {
    //this all could be replaced by 'add, pop'
    this.collection.on('all', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    // this.$el.empty();
    // this.collection.forEach(function(element) {
    //   this.renderSong(element, this);
    // }, this);
    // return this.$el;
  },

  // renderSong: function(song) {
  //   var newSongView = new SongQueueEntryView({model: song});
  //   this.$el.append(newSongView.render());
  // }
});

// this.$el.children().detach();

//     this.$el.html('<th>Library</th>').append(
//       this.collection.map(function(song) {
//         return new LibraryEntryView({model: song}).render();
//       })
//     );