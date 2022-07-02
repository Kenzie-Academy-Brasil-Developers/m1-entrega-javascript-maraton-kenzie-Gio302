let atletas = ["Rafael", "Manoel", "Daniel"]
let daniel = atletas.indexOf ("Daniel")
function positions (atletas) {
let string = "Este é o pódio: "

    if (daniel != 0) {
        
        atletas.splice (1, 0, "Daniel") 
        atletas.splice (3, 1) 

        return string.concat (atletas) 
    }
    else {
        return console.log ("O Daniel é o vencedor") 
}

}

console.log (positions(atletas))
