<?php

// C'est juste pour faire les testes avec ionic et bien comprendre comment ça fonctionne
require('co/connexionDB.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
$data = json_decode(file_get_contents('php://input'), true);
// curl -d '{"api":"nom"}' -H "Content-Type: application/json" -X POST http://localhost/ionic/PremierProjet/Server/API.php
if(isset($data)){
    if($data['api'] == 'newRegister'){
        header("HTTP/1.1 202 Ok");
        //Pour faire l'exemple pour la réponse en tableau 
        $array = ['InscriptionMessage' => 'Inscription ok...'];
        echo json_encode($array);
    }elseif($data['api'] =='newClient'){
        header("HTTP/1.1 202 Ok");
        $array = ['ConnexionMessage' => 'Connexion'];
        echo json_encode($array);
        
    }
    elseif($data['api'] =='getLieu'){
        $test = new connexionDB;
            // Pour convertir le SQL et pouvoir le visual sur la page index-connect ionic
            header("HTTP/1.1 202 Ok");
            $test->getConnexion();
            echo json_encode($test->getAll());
        
    }else{
        header("HTTP/1.1 404 Not Found");
        echo 'api Incorrect';
    }
}else{
    header("HTTP/1.1 404 Not Found");
    echo 'Nada';
}