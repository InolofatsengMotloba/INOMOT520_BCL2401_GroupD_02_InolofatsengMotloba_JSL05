// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "Imithandazo", artist: "Kabza De Small", genre: "Amapiano" },
    { title: "Funk 55", artist: "Shakes & Les", genre: "Amapiano" },
    { title: "Masithokoze", artist: "DJ Stokie", genre: "Amapiano" },
    { title: "Bawo Vula", artist: "Sfarzo", genre: "Amapiano" },
    { title: "The Biggest Part of Me", artist: "Brian McKnight", genre: "R&B" },
    { title: "All For Me", artist: "Mariah the Scientist", genre: "R&B" },
    { title: "Gone Girl", artist: "Obongjayar", genre: "Afrobeats" },
    { title: "Soke", artist: "Burna Boy", genre: "Afrobeats" },
    { title: "Law of Attraction", artist: "Dave", genre: "Afrobeats" },
    { title: "Ashawo", artist: "Flavour", genre: "Afrobeats" }
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
    "Rocket": "Amapiano",
    "Groot": "Afrobeats"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const playlists = Object.entries(guardians).map(([guardian, preferredGenre]) => {
        //
        const songOfPrefferedGenre = songs.filter(song => song.genre === preferredGenre);
        return {guardian, songOfPrefferedGenre};
    });

    // Return the playlists array
    return playlists;
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);

const playlistDesign = document.getElementById("playlists");

playlists.forEach(({guardian , songOfPrefferedGenre}) => {
    const playlistElement = document.createElement("div");
    playlistElement.classList.add("playlist");

    const heading = document.createElement("h2");
    heading.textContent = `${guardian}'s Playlist:`;
    playlistElement.appendChild(heading);

    songOfPrefferedGenre.forEach((song) => {
        const songElement = document.createElement("div");
        songElement.classList.add("song");

        const songTitle = document.createElement("span");
        songTitle.textContent = song.title;
        songTitle.classList.add("song-title");
        songElement.appendChild(songTitle);

        const songArtist = document.createElement("span");
        songArtist.textContent = ` - ${song.artist}`;
        songElement.appendChild(songArtist);

        playlistElement.appendChild(songElement);
    });

    // Append the heading and the playlist div to the container
    playlistDesign.appendChild(playlistElement);
});