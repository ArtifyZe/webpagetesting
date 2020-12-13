//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/play.fine-land.eu";
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 ){ pl = '<br>OP: '+r.players.sample[0].name;  } 
  $('#rest').html(r.players.online+pl);
});