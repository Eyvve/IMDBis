<?php

require_once 'fuckCors.php';
require_once 'Classes/PDOFactory.php';
require_once 'Classes/Movie.php';

$pdo = (new PDOFactory())->getPdo();

$query = $pdo->query('SELECT * FROM movie');
$query->setFetchMode(PDO::FETCH_ASSOC);

$res = [];

foreach ($query->fetchAll() as $movie) {
    $res[] = [
        'id' => $movie['id'],
        "title" => $movie['title'],
        'releaseDate' => $movie['releaseDate'],
        'description' => $movie['description'],
        'thumbnail' => $movie['thumbnail']
    ];
}

echo json_encode($res);
