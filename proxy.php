<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$apiToken = "94a987ff03b84e61ae1aef5e21602b71";

$url = "https://api.football-data.org/v4/competitions/WC/matches?season=2026";

$options = [
    "http" => [
        "method" => "GET",
        "header" => "X-Auth-Token: " . $apiToken
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if ($response === false) {
    http_response_code(500);
    echo json_encode(["error" => "Impossible de récupérer les matchs"]);
    exit;
}

echo $response;
?>