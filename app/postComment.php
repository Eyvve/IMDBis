<?php

require_once './vendor/autoload.php';
require_once 'FuckCors.php';
require_once 'Classes/PDOFactory.php';
require_once 'Classes/Comment.php';

$token = $_COOKIE['hetic_token'] ?? '';
$username = $_POST['username'] ?? '';
// Je me suis rappelé trop tard que c'était stocké en cookie :'( 
$content = $_POST['content'] ?? '';
$movieId = $_POST['movieId'] ?? '';

if (!$token) {
    echo json_encode([
        'status' => 'error',
        'message' => 'You need a bearer token to post here'
    ]);
    exit;
}

if (!$content || !$username) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Your meaningless comment needs a username and a content'
    ]);
    exit;
}

$pdo = (new PDOFactory())->getPdo();

try {
    $jwt = \Firebase\JWT\JWT::decode($token, new \Firebase\JWT\Key($appSecret, 'HS256'));


    $comment = (new Comment())
        ->setContent($content)
        ->setMovieId($movieId)
        ->setUserId($jwt->userId);

    $update = $pdo->prepare('INSERT INTO comment (userId, movieId, content) VALUES (:userId, :movieId, :content)');
    $update->bindValue('userId', $comment->getUserId(), PDO::PARAM_INT);
    $update->bindValue('content', $comment->getContent(), PDO::PARAM_STR);
    $update->bindValue('movieId', $comment->getMovieId(), PDO::PARAM_INT);

    if ($update->execute()) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Comment saved',
        ]);
    }
} catch (\Firebase\JWT\ExpiredException $expiredException) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Expired Token'
    ]);
} catch (Exception $e) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid Token'
    ]);
} finally {
    exit;
}
