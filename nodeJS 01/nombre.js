console.log("Escribe tu nombre");
var stdin = process.openStdin();

stdin.addListener("data", function(key){
    console.log("key.tostring")
    execute(key)
});