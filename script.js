function showSong(title) {
  let lyrics = "";

  if (title === "Amazing Grace") {
    lyrics = "Amazing grace, how sweet the sound\nThat saved a wretch like me\nI once was lost, but now am found\nWas blind, but now I see";
  }

  if (title === "How Great Thou Art") {
    lyrics = "O Lord my God, when I in awesome wonder\nConsider all the worlds Thy hands have made\nI see the stars, I hear the rolling thunder\nThy power throughout the universe displayed";
  }

  document.getElementById("lyrics").innerText = lyrics;
}