angular.module('itunes')
   .service('itunesService', itunesService);

   function itunesService($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in.
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here


    this.getArtistName = function(artist) {
      var url = 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
      return $http.jsonp(url)
         .then(function(results) {
            return results.data.results;
         })
   }
};
         //    $q method
//     	var deferred = $q.defer();
//     	$http({
//     		method: 'JSONP',
//     		url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
//     	}).then(function(results) {
//     		var results = results.data.results;
//             var parsedArray = [];
//               for(var i = 0; i < results.length; i++) {
//                 var songObj = {
//                     Play: results[i].previewUrl,
//                     Song: results[i].trackName,
//                     Artist: results[i].artistName,
//                     Album: results[i].collectionName,
//                     AlbumArt: results[i].artworkUrl100,
//                     TrackLength: results[i].trackTimeMillis,
//                     Type: results[i].kind,
//                     SongPrice: results[i].trackPrice,
//                     AlbumPrice: results[i].collectionPrice
//                 }
//                 parsedArray.push(songObj);
//               }
//               deferred.resolve(parsedArray);
//         }, function(error) {
//             deferred.reject(error);
//         });
//         return deferred.promise;
//     };
// };
