var alunos = [];
function konosuba() {/*
    var nome1 = document.getElementById("aluno1").value;
    var nome2 = document.getElementById("aluno2").value;
    var nome3 = document.getElementById("aluno3").value;
    var nome4 = document.getElementById("aluno4").value;
    alunos.push(nome1);
    alunos.push(nome2);
    alunos.push(nome3);
    alunos.push(nome4);*/

for(var c = 1;c<=4;c++){
    var temp = document.getElementById("aluno" + c).value;
alunos.push(temp);
}

    console.log(alunos);
    var display = [];
    for (var k = 0;  k<4 ; k++) {
       display.push(alunos[k]+'<br>')
    }
    document.getElementById("display").innerHTML = display
function eh_bom_confia() {
    var organizado = [];
    alunos.sort();

    for (var k = 0;  k<4 ; k++) {
        organizado.push(alunos[k]+'<br>')
     }
     document.getElementById("display_organizado").innerHTML = organizado;
}