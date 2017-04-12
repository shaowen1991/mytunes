// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    // console.log('trigger enqueue');
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // console.log('trigger dequeue');
    this.trigger('dequeue', this);
  },
  
  ended: function() {
    // console.log('trigger ended');
    this.trigger('ended', this);
  }
});
