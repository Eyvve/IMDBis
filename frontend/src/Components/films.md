## liste des films IMDBis

- RE4
- SW holiday special
- suicide room
- Soinc
- pti quinquin
- whiplash
- grave
- Full of it
- FB's day off
-

## structure DB

table MOVIE

- movie.id | _int_ **(AI)**
- movie.title | _varchar_
- movie.description | _text_
- movie.reseaseDate | _varchar_
- movie.thumbnail | _varchar_

table USER

- user.id | _int_ **(AI)**
- user.name | _varchar_
- user.password | _varchar_

table COMMENT

- comment.id | _int_ **(AI)**
- comment.userId | _int_
- comment.movieId | _int_
- comment.content | _text_

## requêtes

GET

- getAllMovies
- getMovie
- getAllCommentsForMovie
- Login

POST

- postComment
- Register / Login
