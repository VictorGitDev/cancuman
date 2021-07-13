var nombre;
        nombre = prompt("Ingresa tu nombre");
        alert(nombre);
        alert("Acompañenos a disfrutar de la experiencia ");

        //var nombre = Certus

        //if(nombre == Certus) {
            //alert("es correcto felicidades sea bienvenido");
            //document.write(nombre);
        //}else{
            //alert("incorrecto vuelve a intentarlo no eres bienvenido");
            //document.write
        //}



        let bar_icon = document . querySelector("bar-icon");
        let nav = document . querySelector(".nav");
        let enlaces = document.querySelector(".container-list");
        let contador = true;

        bar_icon.addEventListener("click",function(){
            this.classlist.toggle("active");

            if (contador == true)  {
                enlaces.style.widht = "100%";
                enlaces.style.overflow = "hidden";
                enlaces.style.transition = "0.5s" ;
            nav.style.background = "#f1f4df";
            nav.style.transition = "0.5s";
                contador = false;
            }else{
                contador = true
                 enlaces.style.widht = "0%" ;
                 enlaces.style.overflow = "hidden" ;
                 enlaces.style.transiton = "0.5s" ;
                
                 nav.style.background = "transparent";
                 nav.style.transition = " 0.5s "
            }   
        } );