/*let grade = "B"

switch (grade) {
    case ("A"): console.log("Voce passou")
        break
    case ("B"): console.log("Parabens")
        break
    case ("C"): console.log("Bom trabalho")
        break
    case ("D"): console.log("Passou raspando")
        break
    case ("E"): console.log("Reprovado")
        break
    default: console.log(grade + " não é uma nota")
}*/

let grade = 100;

switch (true) {
    case (grade>=90): console.log("Voce passou")
        break
    case (grade>=80): console.log("Parabens")
        break
    case (grade>=70): console.log("Bom trabalho")
        break
    case (grade>=60): console.log("Passou raspando")
        break
    case (grade >=50): console.log("Reprovado")
        break
    default: console.log(grade + " não é uma nota")
}