<?php

require_once 'fuckCors.php';
require_once 'Classes/PDOFactory.php';
// require_once 'Classes/Movie.php';
// require_once 'Classes/User.php';
// require_once 'Classes/Movie.php';

// $pdo = (new PDOFactory())->getPdo();

// $query = $pdo->query('SELECT * FROM movie');
// $query->setFetchMode(PDO::FETCH_ASSOC);

// $res = [];

// foreach ($query->fetchAll() as $movie) {
//     $res[] = [
//         'id' => $movie['id'],
//         "title" => $movie['title'],
//         'releaseDate' => $movie['releaseDate'],
//         'description' => $movie['description'],
//         'thumbnail' => $movie['thumbnail']
//     ];
// }

// TODO / Trouver une façon de display les détails du post en particuler a partir de l'ID disponible dans "movieDetails.php" / Faire de même avec les commentaires