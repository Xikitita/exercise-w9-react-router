// TODO: Import necessary modules and data
import { songs } from "../data/songs.json";
import { Link } from "react-router-dom";

const Home = () => {
  // TODO: Implement logic to display the list of songs

  const showSongs = songs.map((song) => (
    <p key={song.rank}>
      <Link
        to={`/song/${song.title
          .replace(/ /g, "-")
          .replace(/["(", ")", "'", "."]/g, "")
          .toLowerCase()}`}>
        {song.title}
      </Link>
    </p>
  ));

  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        {/* TODO: Display the list of songs with links */}
        <div>{showSongs}</div>
      </div>
    </>
  );
};

export default Home;
