const http = require('http');
const fs = require('fs');

/* ============================ SERVER DATA ============================ */
let artists = JSON.parse(fs.readFileSync('./seeds/artists.json'));
let albums = JSON.parse(fs.readFileSync('./seeds/albums.json'));
let songs = JSON.parse(fs.readFileSync('./seeds/songs.json'));

let nextArtistId = 2;
let nextAlbumId = 2;
let nextSongId = 2;

// returns an artistId for a new artist
function getNewArtistId() {
  const newArtistId = nextArtistId;
  nextArtistId++;
  return newArtistId;
}

// returns an albumId for a new album
function getNewAlbumId() {
  const newAlbumId = nextAlbumId;
  nextAlbumId++;
  return newAlbumId;
}

// returns an songId for a new song
function getNewSongId() {
  const newSongId = nextSongId;
  nextSongId++;
  return newSongId;
}

/* ======================= PROCESS SERVER REQUESTS ======================= */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => { // finished assembling the entire request body
    // Parsing the body of the request depending on the "Content-Type" header
    if (reqBody) {
      switch(req.headers['content-type']) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ========================== ROUTE HANDLERS ========================== */

    //!!START
    // GET /
    if (req.method === "GET" && req.url === "/") {
      const resBody = "ROOT";
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(resBody);
      return res.end();
    }

    // GET /artists
    if (req.method === "GET" && req.url === "/artists") {
      const resBody = JSON.stringify(Object.values(artists));
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.write(resBody);
      return res.end();
    }

    // GET /artists/:artistId
    if (req.method === "GET" && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");
      const artistId = urlParts[2];
      if (urlParts.length === 3 && artistId) {
        const artist = artists[artistId];
        if (!artist) {
          const resBody = JSON.stringify("Artist not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        console.log('original ', albums)

        const artistAlbums = Object.values(albums).filter(album => album.artistId == artistId);
        const data = {
          ...artist,
          albums: artistAlbums
        };

        console.log('data after creating ', data)

        const resBody = JSON.stringify(data);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // POST /artists
    if (req.method === "POST" && req.url === "/artists") {
      const { name } = req.body;
      if (!name) {
        const resBody = JSON.stringify("Something is wrong with the body.");
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }

      const artist = {
        name,
        artistId: getNewArtistId()
      };

      artists[artist.artistId] = artist;

      const resBody = JSON.stringify(artist);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.write(resBody);
      return res.end();
    }

    // PUT /artists/:artistId
    if ((req.method === "PUT" || req.method === "PATCH") && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");
      const artistId = urlParts[2];
      if (urlParts.length === 3 && artistId) {
        const artist = artists[artistId];
        if (!artist) {
          const resBody = JSON.stringify("Artist not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }
        const { name } = req.body;
        if (!name) {
          const resBody = JSON.stringify("Something is wrong with the body.");
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        artists[artist.artistId].name = name;

        const resBody = JSON.stringify(artist);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // DELETE /artists/:artistId
    if (req.method === "DELETE" && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");
      const artistId = urlParts[2];
      if (urlParts.length === 3 && artistId) {
        const artist = artists[artistId];
        if (!artist) {
          const resBody = JSON.stringify("Artist not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        delete artists[artist.artistId];
        // find all of the artists albums and delete them as well
        const artistAlbums = Object.values(albums).filter(album => album.artistId == artistId);
        artistAlbums.forEach(album => {
          delete albums[album.albumId];
          const albumSongs = Object.values(songs).filter(song => song.albumId == album.albumId);
          albumSongs.forEach(song => {
            delete songs[song.songId];
          });
        });

        const resBody = JSON.stringify("Successfully deleted");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // GET /artists/:artistId/albums
    if (req.method === "GET" && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");
      const artistId = urlParts[2];
      if (urlParts.length === 4 && artistId && urlParts[3] === "albums") {
        const artist = artists[artistId];
        if (!artist) {
          const resBody = JSON.stringify("Artist not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        const artistAlbums = Object.values(albums).filter(album => album.artistId == artistId);
        const resBody = JSON.stringify(artistAlbums);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // GET /albums/:albumId
    if (req.method === "GET" && req.url.startsWith("/albums")) {
      const urlParts = req.url.split("/");
      const albumId = urlParts[2];
      if (urlParts.length === 3 && albumId) {
        const album = albums[albumId];
        if (!album) {
          const resBody = JSON.stringify("Album not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }
        const albumSongs = Object.values(songs).filter(song => song.albumId == albumId);
        const data = {
          ...album,
          songs: albumSongs
        };

        const resBody = JSON.stringify(data);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // POST /artists/:artistId/albums
    if (req.method === "POST" && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");
      const artistId = urlParts[2];
      if (urlParts.length === 4 && artistId && urlParts[3] === "albums") {
        const artist = artists[artistId];
        if (!artist) {
          const resBody = JSON.stringify("Artist not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        const { name } = req.body;
        if (!name) {
          const resBody = JSON.stringify("Something is wrong with the body.");
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        const album = {
          name,
          albumId: getNewAlbumId(),
          artistId: Number(artistId)
        };

        albums[album.albumId] = album;

        const resBody = JSON.stringify(album);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // PUT /albums/:albumId
    if ((req.method === "PUT" || req.method === "PATCH") && req.url.startsWith("/albums")) {
      const urlParts = req.url.split("/");
      const albumId = urlParts[2];
      if (urlParts.length === 3 && albumId) {
        const album = albums[albumId];
        if (!album) {
          const resBody = JSON.stringify("Album not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }
        const { name } = req.body;
        if (!name) {
          const resBody = JSON.stringify("Something is wrong with the body.");
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        albums[album.albumId].name = name;

        const resBody = JSON.stringify(album);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // DELETE /albums/:albumId
    if (req.method === "DELETE" && req.url.startsWith("/albums")) {
      const urlParts = req.url.split("/");
      const albumId = urlParts[2];
      if (urlParts.length === 3 && albumId) {
        const album = albums[albumId];
        if (!album) {
          const resBody = JSON.stringify("Album not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        delete albums[album.albumId];

        const resBody = JSON.stringify("Successfully deleted");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // GET /albums/:albumId/songs
    //songs/:songId/albums
    //artist/:artistId/albums
    if (req.method === "GET" && req.url.startsWith("/albums")) {
      const urlParts = req.url.split("/");
      const albumId = urlParts[2];
      if (urlParts.length === 4 && albumId && urlParts[3] === "songs") {
        const album = albums[albumId];
        if (!album) {
          const resBody = JSON.stringify("Album not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        const albumSongs = Object.values(songs).filter(song => song.albumId == albumId);
        const resBody = JSON.stringify(albumSongs);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // GET /artists/:artistId/songs
    if (req.method === "GET" && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");
      const artistId = urlParts[2];
      if (urlParts.length === 4 && artistId && urlParts[3] === "songs") {
        const artist = artists[artistId];
        if (!artist) {
          const resBody = JSON.stringify("Artist not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        const artistAlbums = Object.values(albums).filter(album => album.artistId == artistId);
        const artistSongs = Object.values(songs).filter(song => {
          return !!artistAlbums.find(album => album.albumId == song.albumId);
        });

        const resBody = JSON.stringify(artistSongs);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // GET /songs/:songId
    if (req.method === "GET" && req.url.startsWith("/songs")) {
      const urlParts = req.url.split("/");
      const songId = urlParts[2];
      if (urlParts.length === 3 && songId) {
        const song = songs[songId];
        if (!song) {
          const resBody = JSON.stringify("Song not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        const resBody = JSON.stringify(song);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // POST /albums/:albumId/songs
   if (req.method === "POST" && req.url.startsWith("/albums")) {
      const urlParts = req.url.split("/");
      const albumId = urlParts[2];
      if (urlParts.length === 4 && albumId && urlParts[3] === "songs") {
        const album = albums[albumId];
        if (!album) {
          const resBody = JSON.stringify("Album not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        const { name, trackNumber, lyrics } = req.body;
        if (!name || !trackNumber || !lyrics) {
          const resBody = JSON.stringify("Something is wrong with the body.");
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        const song = {
          name,
          trackNumber,
          lyrics,
          songId: getNewSongId(),
          albumId: Number(albumId)
        };

        songs[song.songId] = song;

        const resBody = JSON.stringify(song);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // PUT /songs/:songId
    if ((req.method === "PUT" || req.method === "PATCH") && req.url.startsWith("/songs")) {
      const urlParts = req.url.split("/");
      const songId = urlParts[2];
      if (urlParts.length === 3 && songId) {
        const song = songs[songId];
        if (!song) {
          const resBody = JSON.stringify("Song not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }
        const { name, trackNumber, lyrics } = req.body;
        if (!name && !trackNumber && !lyrics) {
          const resBody = JSON.stringify("Something is wrong with the body.");
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        if (name) song.name = name;
        if (trackNumber) song.trackNumber = trackNumber;
        if (lyrics) song.lyrics = lyrics;

        const resBody = JSON.stringify(song);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }

    // DELETE /songs/:songId
    if (req.method === "DELETE" && req.url.startsWith("/songs")) {
      const urlParts = req.url.split("/");
      const songId = urlParts[2];
      if (urlParts.length === 3 && songId) {
        const song = songs[songId];
        if (!song) {
          const resBody = JSON.stringify("Song not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        delete songs[song.songId];

        const resBody = JSON.stringify("Successfully deleted");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(resBody);
        return res.end();
      }
    }
    //!!END

    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.write("Endpoint not found");
    return res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
