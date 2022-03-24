var namesOfPeople = [];

   var NamesOfPeopleLength = [];

   

    function enviar()
    {
        var nameVar  = document.getElementById("name1").value;
        namesOfPeople.push(nameVar)
        
    }

    function searching()
    {
        var s = document.getElementById("s1").value;
        var found = 0;
        var j;
        for(j=0; j<namesOfPeople.length; j++)
        {
            if(s==namesOfPeople[j]){
                found++;
            }
        }
        document.getElementById("pesquisar").innerHTML="Nome encontrado "+found+" vez(es)";
        console.log("Nome encontrado "+found+" vez(es)");
    }
    function organizar(){
        namesOfPeople.sort();
        document.getElementById("organizar").innerHTML = namesOfPeople.toString();
    } 
    function mostrar(){
        document.getElementById("mostrar").innerHTML = namesOfPeople.toString();
    }