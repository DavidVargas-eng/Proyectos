<?php 
    // echo ('antes del if');
    // comprobar recibo de datos
    if ($_SERVER['REQUEST_METHOD']=='POST') {
        // toma de variables
        $idproducto=isset($_REQUEST['idproducto']) ? $_REQUEST['idproducto']: null;
        $nombre=isset($_REQUEST['nombre']) ? $_REQUEST['nombre']: null;
        $precio=isset($_REQUEST['precio']) ? $_REQUEST['precio']: null;
        $marca=isset($_REQUEST['marca']) ? $_REQUEST['marca']: null;

        // echo ('idproducto' . $idproducto);

        // variables
        $hostDB='localhost:3307';
        $nombreDB='pruebas';
        $usuarioDB='root';
        $passwordDB='';

        // conexion
        $hostPDO="mysql:host=$hostDB;dbname=$nombreDB;";
        $miPDO=new PDO($hostPDO, $usuarioDB, $passwordDB);

        // cosulta de insertar
        $miINSERT = $miPDO -> prepare('INSERT INTO productos(idproducto, nombre, precio, marca) values (:idproducto,:nombre,:precio,:marca)');

        // ejecutar insert
        $miINSERT->execute(
        array (
            'idproducto'=>$idproducto,
            'nombre'=>$nombre,
            'precio'=>$precio,
            'marca'=>$marca
        )
        );
        if ($miINSERT) {
            echo ('insertado');
        }
        // Redireccionar a leer
        header ('Location: leer.php');
    } else {
        // echo ('no entra el if');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crud basico</title>
    <style>
        
        input {
            border:1px solid blue;
            text-align: center;
            padding: 1.3rem;
            display: flex;
        }
        .button {
            border-radius: .5rem;
            color: white;
            background-color:blue;
            padding: 1rem;
            text-decoration:none;
        }

        p {
            font-size: 15px;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    
    </style>

</head>
<body>
    <form action="" method="POST">
        <p>
            <label for="idproducto">ID</label>
            <input type="text" id="idproducto" name="idproducto">
        </p>
        <p>
            <label for="nombre">NOMBRE</label>
            <input type="text" id="nombre" name="nombre">
        </p>
        <p>
            <label for="precio">PRECIO</label>
            <input type="text" id="precio" name="precio">
        </p>
        <p>
            <label for="marca">MARCA</label>
            <input type="text" id="marca" name="marca">
        </p>
        <p>
            <input type="submit" value="Guardar" class="button">
        </p>
    </form>
</body>
</html>