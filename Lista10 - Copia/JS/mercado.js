function Calculo(){
    var secos = document.getElementById("secos");
    var divSecos = document.getElementById("divSecos");

    var molhados = document.getElementById("molhados");
    var divMolhados = document.getElementById("divMolhados");

    var frageis = document.getElementById("frageis");
    var divFrageis = document.getElementById("divFrageis");
    
    var Div1, Div2, Div3;

    Div1 = Math.round(divSecos.value / secos.value);
    Div2 = Math.round(divMolhados.value / molhados.value);
    Div3 = Math.round(divFrageis.value / frageis.value);

    alert("Os itens secos serão divididos em: " + Div1 + " sacolas");
    alert("Os itens molhados serão divididos em: " + Div2 + " sacolas");
    alert("Os itens frageis serão divididos em: " + Div3 + " sacolas");
}

function MudarCor(i){
    var elemento = document.getElementById("cha");

    if(i == 1){
        elemento.style.backgroundColor='yellow';
    }

    else if(i == 2){
        elemento.style.backgroundColor='lightgray'
    }
}


function MudarCor1(a){
    var elemento = document.getElementById("cho");

    if(a == 1){
        elemento.style.backgroundColor='green'
    }

    else if(a == 2){
        elemento.style.backgroundColor='lightgray'
    }
}


function MudarCor2(b){
    var elemento = document.getElementById("chu");

    if(b == 1){
        elemento.style.backgroundColor='orange'
    }

    else if(b == 2){
        elemento.style.backgroundColor='lightgray'
    }
}

setInterval(function(){
    $('.Nome').fadeOut(1000);
    $('.Nome').fadeIn(1000);
}, 1000);

$(function() {

    $("#secos").focus(function(){
        $("#secos").css("background-color","black");
        $("#secos").css("color","white");
    });
    $("#secos").blur(function(){
        $("#secos").css("background-color","white");
        $("#secos").css("color","black");
    });
    
    $("#divSecos").focus(function(){
        $("#divSecos").css("background-color","black");
        $("#divSecos").css("color","white");
    });
    $("#divSecos").blur(function(){
        $("#divSecos").css("background-color","white");
        $("#divSecos").css("color", "black");
    });
     
})

$(function() {

    $("#molhados").focus(function(){
        $("#molhados").css("background-color","black");
        $("#molhados").css("color","white");
    });
    $("#molhados").blur(function(){
        $("#molhados").css("background-color","white");
        $("#molhados").css("color","black");
    });
    
    
    $("#divMolhados").focus(function(){
        $("#divMolhados").css("background-color","black");
        $("#divMolhados").css("color","white");
    });
    $("#divMolhados").blur(function(){
        $("#divMolhados").css("background-color","white");
        $("#divMolhados").css("color", "black");
    });
     
})

$(function() {

    $("#frageis").focus(function(){
        $("#frageis").css("background-color","black");
        $("#frageis").css("color","white");
    });
    $("#frageis").blur(function(){
        $("#frageis").css("background-color","white");
        $("#frageis").css("color","black");
    });
    
    
    $("#divFrageis").focus(function(){
        $("#divFrageis").css("background-color","black");
        $("#divFrageis").css("color","white");
    });
    $("#divFrageis").blur(function(){
        $("#divFrageis").css("background-color","white");
        $("#divFrageis").css("color", "black");
    });
     
})
$(function(){
    $('#secos').keyup(function() {
        $("#secos").val(secos.value.replace(/\D/g, ''));
      });
    
      $('#divSecos').keyup(function() {
        $("#divSecos").val(divSecos.value.replace(/\D/g, ''));
      });
    
      $('#molhados').keyup(function() {
        $("#molhados").val(molhados.value.replace(/\D/g, ''));
      });
    
      $('#divMolhados').keyup(function() {
        $("#divMolhados").val(divMolhados.value.replace(/\D/g, ''));
      });
    
      $('#frageis').keyup(function() {
        $("#frageis").val(frageis.value.replace(/\D/g, ''));
      });
    
      $('#divFrageis').keyup(function() {
        $("#divFrageis").val(divFrageis.value.replace(/\D/g, ''));
      });
});

