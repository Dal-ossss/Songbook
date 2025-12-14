function showSong(title) {
  let lyrics = "";

  if (title === "Amazing Grace") {
    lyrics = "Amazing grace how sweet the sound...";
  }

  if (title === "How Great Thou Art") {
    lyrics = "O Lord my God, when I in awesome wonder...";
  }

  document.getElementById("lyrics").innerText = lyrics;
}
