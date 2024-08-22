# HTTP Basics Solution

## Endpoints

### Get all the artists

Request components:

- Method: GET
- URL: /artists
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about all the artists

  ```json
  [
    {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    }
  ]
  ```

### Get a specific artist's details based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about a specific artist and their albums

  ```json
  {
    "artistId": 1,
    "name": "Red Hot Chili Peppers",
    "albums": [
      {
        "albumId": 1,
        "name": "Stadium Arcadium"
      }
    ]
  }
  ```

### Add an artist

Request components:

- Method: POST
- URL: /artists
  - Content-Type: application/json
- Body: information about the artist to be created

  ```json
  {
    "name": "Led Zeppelin"
  }
  ```

Response components:

- Status Code: 201
- Headers:
  - Content-Type: application/json
- Body: information about the newly created artist

  ```json
  {
    "artistId": 2,
    "name": "Led Zeppelin"
  }
  ```

### Edit a specified artist by artistId

Request components:

- Method: PUT or PATCH
- URL: /artists/:artistId
- Headers:
  - Content-Type: application/json
- Body: information about the artist to be edited

  ```json
  {
    "name": "Led Zeppelin"
  }
  ```

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about the edited artist

  ```json
  {
    "artistId": 2,
    "name": "Led Zeppelin"
  }
  ```

### Delete a specified artist by artistId

Request components:

- Method: DELETE
- URL: /artists/:artistId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: message of success

  ```json
  {
    "message": "Successfully deleted"
  }
  ```

### Get all albums of a specific artist based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId/albums
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about all the albums of a specific artist

  ```json
  [
    {
      "albumId": 1,
      "name": "Stadium Arcadium",
      "artistId": 1
    }
  ]
  ```

### Get a specific album's details based on albumId

Request components:

- Method: GET
- URL: /albums/:albumId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about a specific album and their songs

  ```json
  {
    "albumId": 1,
    "name": "Stadium Arcadium",
    "artistId": 1,
    "artist": {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    },
    "songs": [
      {
        "songId": 1,
        "name": "Dani California",
        "trackNumber": 1
      }
    ]
  }
  ```

### Add an album to a specific artist based on artistId

Request components:

- Method: POST
- URL: /artist/:artistId/albums
- Headers:
  - Content-Type: application/json
- Body: information about the album to be created

  ```json
  {
    "name": "Stadium Arcadium"
  }
  ```

Response components:

- Status Code: 201
- Headers:
  - Content-Type: application/json
- Body: information about the newly created album

  ```json
  {
    "albumId": 1,
    "name": "Stadium Arcadium",
    "artistId": 1
  }
  ```

### Edit a specified album by albumId

Request components:

- Method: PUT or PATCH
- URL: /albums/:albumId
- Headers:
  - Content-Type: application/json
- Body: information about the album to be edited

  ```json
  {
    "name": "Stadium Arcadium"
  }
  ```

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about the edited album

  ```json
  {
    "albumId": 1,
    "name": "Stadium Arcadium",
    "artistId": 1
  }
  ```

### Delete a specified album by albumId

Request components:

- Method: DELETE
- URL: /albums/:albumId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: success message

  ```json
  {
    "message": "Successfully deleted"
  }
  ```

### Get all songs of a specific artist based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId/songs
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about all the songs of a specific artist

  ```json
  [
    {
      "name": "Dani California",
      "lyrics": "...",
      "trackNumber": 1,
      "songId": 1,
      "albumId": 1
    }
  ]
  ```

### Get all songs of a specific album based on albumId

Request components:

- Method: GET
- URL: /albums/:albumId/songs
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about all the songs of a specific album

  ```json
  [
    {
      "name": "Dani California",
      "lyrics": "...",
      "trackNumber": 1,
      "songId": 1,
      "albumId": 1
    }
  ]
  ```

### Get all songs of a specified trackNumber

Request components:

- Method: GET
- URL: /trackNumbers/:trackNumber/songs
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: information about all the songs that have a specified trackNumber

  ```json
  [
    {
      "name": "Dani California",
      "lyrics": "...",
      "trackNumber": 1,
      "songId": 1,
      "albumId": 1
    }
  ]
  ```

### Get a specific song's details based on songId

Request components:

- Method: GET
- URL: /songs/:songId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about a specific song

  ```json
  {
    "songId": 1,
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "...",
    "albumId": 1,
    "artist": {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    },
    "album": {
      "albumId": 1,
      "name": "Stadium Arcadium",
      "artistId": 1
    }
  }
  ```

### Add a song to a specific album based on albumId

Request components:

- Method: POST
- URL: /albums/:albumId/songs
- Headers:
  - Content-Type: application/json
- Body: information about the song to be created

  ```json
  {
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "..."
  }
  ```

Response components:

- Status Code: 201
- Headers:
  - Content-Type: application/json
- Body: information about the newly created song

  ```json
  {
    "songId": 1,
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "...",
    "albumId": 1
  }
  ```

### Edit a specified song by songId

Request components:

- Method: PUT or PATCH
- URL: /songs/:songId
- Headers:
  - Content-Type: application/json
- Body: information about the song to be edited

  ```json
  {
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "..."
  }
  ```

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about the edited song

  ```json
  {
    "songId": 1,
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "...",
    "albumId": 1
  }
  ```

### Delete a specified song by songId

Request components:

- Method: DELETE
- URL: /songs/:songId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: success message

  ```json
  {
    "message": "Successfully deleted"
  }
  ```
