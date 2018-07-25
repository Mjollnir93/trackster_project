var Trackster = {};
const API_KEY = '0c9fada55cecff54e6d6f6664a0e3ccf'

$(document).ready(function() {
  $('#search-button').click(function() {
    Trackster.searchTracksByTitle($('#search-input').val());
  });
});


/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {


     for (var trackIndex = 0; trackIndex < length; trackIndex++) {

        var htmlTrackRow =
        '<div class="row track">'
         '<div class="col-xs-1 col-xs-offset-1 play-button">'
           '<a href="https://youtu.be/eI_O5_tJ1hA" target="_blank">'
            '<i class="fa fa-play-circle-o fa-2x"></i>'
            '</a>'
            '</div>'
            '<div class="col-xs-4">23. United</div>'
            '<div class="col-xs-2">Throbbing Gristle</div>'
            '<div class="col-xs-2">Greatest Hits</div>'
            '<div class="col-xs-2">23</div>'
            '</div>'
     }

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax( {
    url:'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    })
};
