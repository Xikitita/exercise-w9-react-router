// TODO: Import necessary modules and data
import { useParams } from "react-router-dom";
import songsData from "../data/songs.json";

// TODO: Destrcutrue props to receive information coming in from the parent comp
function SongInfo() {
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)

  const { songTitle } = useParams();

  const songInfo = songsData.songs.find(
    (song) =>
      song.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/["(", ")", "'", "."]/g, "") === songTitle
  );

  if (!songInfo) return <p>Song not found!</p>;

  return (
    <>
      <div>
        <h2>Song Information</h2>
        {/* TODO: Display song details or a "Song not found!" message */}
        <h5>Title</h5>
        <p>{songInfo.title}</p>
        <h5>Artist</h5>
        <p>{songInfo.artist}</p>
        <h5>Year</h5>
        <p>{songInfo.year}</p>
        <h5>Album Name</h5>
        <p>{songInfo.album}</p>
      </div>
    </>
  );
}

export default SongInfo;
