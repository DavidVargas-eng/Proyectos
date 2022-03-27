<?php
    $hostDB='localhost:3307';
    $nombreDB='pruebas';
    $usuarioDB='root';
    $passwordDB='';

    $hostPDO="mysql:host=$hostDB;dbname=$nombreDB;";
    $miPDO=new PDO($hostPDO, $usuarioDB, $passwordDB);

    $miConsulta=$miPDO->prepare('SELECT * FROM productos');
    $miConsulta->execute();


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consultar</title>
    <style>
        table {border-collapse:collapse;
            width: 100%
        }
        table td {
            border:1px solid blue;
            text-align: center;
            padding: 1.3rem;
        }
        .button {
            border-radius: .5rem;
            color: white;
            background-color:blue;
            padding: 1rem;
            text-decoration:none;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    
    </style>
</head>
<body>
    <p><a href="nuevo.php" class="button">Crear</a></p>
    <table>
        <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Marca</th>
        
        </tr>
        <?php foreach ($miConsulta as $clave=>$valor):?>
            <tr>
                <td><?=$valor['idproducto'] ?> </td>
                <td><?=$valor['nombre'] ?> </td>
                <td><?=$valor['precio'] ?> </td>
                <td><?=$valor['marca'] ?> </td>

                <td><a href="modificar.php?idproducto=<?=$valor['idproducto']?>" class="button">Modificar</a></td>
                <td><a href="borrar.php?idproducto=<?=$valor['idproducto']?>" class="button">Borrar</a></td>
            </tr>
        <?php endforeach;?>
    
    </table>
</body>
</html>