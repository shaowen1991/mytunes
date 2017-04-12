// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    //when add been triggered
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      } 
    }, this);
    //when ended been triggered
    this.on('ended', function() {
      console.log('trigger collection ended');
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
    //when dequeue been triggered
    this.on('dequeue', function(song) {
      console.log('trigger collection dequeue');
      this.remove(song);
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

});