<?php
    // variables
    $hostDB='localhost:3307';
    $nombreDB='pruebas';
    $usuarioDB='root';
    $passwordDB='';
    $idproducto=isset($_REQUEST['idproducto']) ? $_REQUEST['idproducto']: null;
    $nombre=isset($_REQUEST['nombre']) ? $_REQUEST['nombre']: null;
    $precio=isset($_REQUEST['precio']) ? $_REQUEST['precio']: null;
    $marca=isset($_REQUEST['marca']) ? $_REQUEST['marca']: null;

    // conecta con DB
    $hostPDO="mysql:host=$hostDB;dbname=$nombreDB;";
    $miPDO=new PDO($hostPDO, $usuarioDB, $passwordDB);

    // comprobar se recibimos datos por POST
    if ($_SERVER['REQUEST_METHOD']=='POST') {
        // preparar update
        $miUpdate = $miPDO -> prepare ('UPDATE productos SET idproducto = :idproducto, nombre = :nombre, precio = :precio, marca = :marca WHERE idproducto = :idproducto');
        
        // Ejecuta UPDATE con los datos
        $miUpdate -> execute(
            [
                'idproducto' => $idproducto,
                'nombre' => $nombre,
                'precio'=>$precio,
                'marca'=>$marca
            ]
        );

        // redireccionar a leer
        header('Location: leer.php'); 

    } else {
        // prepara select
        $miConsulta = $miPDO -> prepare ('SELECT * FROM productos WHERE idproducto = :idproducto;');

        // ejecuta consulta
        $miConsulta -> execute(
            [
                'idproducto' => $idproducto
            ]
        );

    }

    // obtiene un resultado
    $libro = $miConsulta -> fetch();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar</title>

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
    <form method="post">
        <!-- <p>
            <label for="idproducto">id</label>
            <input type="text" id="idproducto" name="idproducto" value="">
        </p> -->
        <p>
            <label for="nombre">nombre</label>
            <input type="text" id="nombre" name="nombre" value="<?= $libro['nombre'] ?>">
        </p>
        <p>
            <label for="precio">precio</label>
            <input type="text" id="precio" name="precio" value="<?= $libro['precio'] ?>">
        </p>
        <p>
            <label for="marca">marca</label>
            <input type="text" id="marca" name="marca" value="<?= $libro['marca'] ?>">
        </p>
        <p>
            <input type="hidden" name="idproducto" value="<?= $libro['idproducto'] ?>">
            <input type="submit" value="Modificar" class="button">
        </p>
    </form>
</body>
</html>