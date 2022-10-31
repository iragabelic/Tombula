
  window.onload = function()
  {
    document.getElementById("next").addEventListener("click", Generiraj);
  }

var lista = [];
var sviBrojevi = [];

var previous;
var brojac;

var slucajni;
 


function Generiraj()
{

  do
  {
    slucajni = Math.floor(Math.random() * 90) + 1;

  }
  while(lista.includes(slucajni))

  lista.push(slucajni);

  document.getElementById("lblizvuceni").innerHTML = slucajni;

   
  var i;
  var previous;
  var brojac;

  for(i = 0; i < 91; i++)
  {
     
    document.getElementById(lista[i].toString()).innerHTML = "";

    document.getElementById("lblbrojac").innerHTML = "Izvuceno: " + lista.length;


    previous = lista[i - 1];

    if(previous > 0)
    {
      document.getElementById("lblprevious").innerHTML = "Prethodni broj: " + previous;
    }
    else
    {
      document.getElementById("lblprevious").innerHTML = "Prethodni broj: ";
    }
    


  }

   



}

