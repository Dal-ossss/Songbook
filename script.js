function showSong(title) {
  let lyrics = "";

  if (title === "Amazing Grace") {
    lyrics = "Amazing grace, how sweet the sound\nThat saved a wretch like me\nI once was lost, but now am found\nWas blind, but now I see";
  }

  if (title === "How Great Thou Art") {
    lyrics = "O Lord my God, when I in awesome wonder\nConsider all the worlds Thy hands have made\nI see the stars, I hear the rolling thunder\nThy power throughout the universe displayed";
  }
  if (title === "when we all get to heaven") {
    lyrics = "When we all get to heaven\nWhat a day of rejoicing that will be\nWhen we all see Jesus\nWe'll sing and shout the victory";
  }
  if (title === "To God be the glory") {
    lyrics = "To God be the glory, for the things He hath done\nSo loved He the world, that He gave His Son\nThat whosoever believeth in Him\nShould not perish, but have everlasting life";
  }

  // Hide the song list and search box
  document.getElementById("songList").style.display = "none";
  document.getElementById("search").style.display = "none";
  
  // Show the song title and lyrics
  document.getElementById("lyrics").innerHTML = 
    '<button onclick="goBack()" style="margin-bottom: 15px; padding: 8px 15px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 5px;">← Back to Songs</button>' +
    '<h2>' + title + '</h2>' +
    '<div style="white-space: pre-line; line-height: 1.6;">' + lyrics + '</div>';
}

function goBack() {
  // Show the song list and search box again
  document.getElementById("songList").style.display = "block";
  document.getElementById("search").style.display = "block";
  
  // Clear the lyrics
  document.getElementById("lyrics").innerText = "";
}