<?php
class connexionDB {
    // Oui c'est le un peu près model de créer pour "GRETA"
    private $host    = 'localhost';  // nom de l'host  
    private $name    = 'mydb';    // nom de la base de donnée
    private $user    = 'root';       // utilisateur
    private $pass    = '';       // mot de passe (il faudra peut-être mettre '' sous Windows)
    private $connexion;
    
    // public $id;
    // public $table;
    public function getConnexion(){
        $this->connexion = null; 
        try{
            $this->connexion = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->name,
             $this->user, $this->pass, array(PDO::MYSQL_ATTR_INIT_COMMAND =>'SET NAMES UTF8', 
              PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, PDO::ATTR_EMULATE_PREPARES, false));
          }catch (PDOException $e){
              echo 'false';

          }
        }
        public function getAll (){
            $sql = 'SELECT * FROM ui_lieu';
            $query = $this->connexion->prepare($sql);
            $query->execute();
            return $query->fetchAll(PDO::FETCH_ASSOC);
        }
    }
