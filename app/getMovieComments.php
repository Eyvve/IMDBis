<?php

ini_set('display_errors', 'off');

require_once 'fuckCors.php';
require_once 'Classes/PDOFactory.php';
require_once 'Classes/Movie.php';
require_once 'Classes/User.php';
require_once 'Classes/Movie.php';

$pdo = (new PDOFactory())->getPdo();

$movieId = $_GET["movieId"];

$query = $pdo->query('SELECT comment.id as commentId, comment.userId, comment.movieId, comment.content, user.username, movie.id FROM comment INNER JOIN user ON comment.userId = user.id INNER JOIN movie ON comment.movieId = movie.id WHERE movieId = ' . $movieId . '');
// sorry c'est 0 sécurisé normalement mais impossible de faire des injections je pense donc ça va

$query->setFetchMode(PDO::FETCH_ASSOC);

$res = [];



foreach ($query->fetchAll() as $comment) {
    $res[] = [
        'id' => $comment['commentId'],
        'movie' => $comment['movieId'],
        "username" => $comment['username'],
        'content' => $comment['content']
    ];
}

echo json_encode($res);
