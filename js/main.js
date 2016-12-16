function getdate(){
  var today = new Date();
  var dia = today.getDate();
  var diaDa = today.getDay();
  var semana ={
    '1':'Domingo',
    '2':'Segunda-feira',
    '3':'Terça-feira',
    '4':'Quarta-feira',
    '5':'Quinta-feira',
    '6':'Sexta-feira',
    '7':'Sábado',
  }
  var meses = {
    '1':'Janeiro',
    '2':'Fevereiro',
    '3':'Março',
    '4':'Abril',
    '5':'Maio',
    '6':'Junho',
    '7':'Julho',
    '8':'Agosto',
    '9':'Setembro',
    '10':'Outubro',
    '11':'Novembro',
    '12':'Dezembro'
  };
  var mês = today.getMonth();
  var ano = today.getFullYear();
  var horas = today.getHours();
  var minutos = today.getMinutes();
  var segundos = today.getSeconds();
  if(segundos<10){
    segundos = "0"+segundos;
  }
  var h1 = document.getElementsByTagName("h1");
  var html = semana[(diaDa+1)]+"<br>"+dia+" de "+meses[(mês+1)]+" de "+ano+"<br>"+horas+"h "+minutos+"m "+segundos+"s";
  h1[0].innerHTML = html;
  setTimeout(function(){getdate()}, 500);
}
getdate();
