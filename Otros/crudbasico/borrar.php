<?php 
    $hostDB='localhost:3307';
    $nombreDB='pruebas';
    $usuarioDB='root';
    $passwordDB='';

    $hostPDO="mysql:host=$hostDB;dbname=$nombreDB;";
    $miPDO=new PDO($hostPDO, $usuarioDB, $passwordDB);

    // Consulta estudiante
    $idproducto=isset($_REQUEST['idproducto']) ? $_REQUEST['idproducto']: null;

    // Eliminiar
    $miConsulta=$miPDO -> prepare('DELETE FROM productos WHERE idproducto=:idproducto');

    // Ejecucion
    $miConsulta->execute([
        idproducto=>$idproducto
    ]);

    // Redireccionamiento
    header('Location: leer.php'); 
?>