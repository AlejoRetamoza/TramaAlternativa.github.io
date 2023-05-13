let opciones = document.getElementById('opciones');
let btn1 =document.getElementById('btn1');
let btn2 =document.getElementById('btn2');
let btn3 =document.getElementById('btn3');
let contenedor = document.getElementById('contenedor');
let body = document.getElementById('body');
let final = document.getElementById('final');


function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

btn1.addEventListener('click',  () => {
    opciones.classList.add('transicion');
    final.classList.add('transicion');
   
    setTimeout(() => {
      contenedor.style.height = "350px";
      contenedor.classList.add('dead');
      opciones.innerHTML = 'Decides empezar a caminar hacia el desconocido con intenciones de satisfacer tu necesidad de información. Entonces, la persona misteriosa avanza abruptamente contra ti y te apuñala salvajemente con una navaja...';

      contenedor.style.opacity = 1;
      opciones.style.opacity = 1;
  

    let mensaje = document.createElement('h4');
    let texto = document.createTextNode('HAS MUERTO');
    mensaje.appendChild(texto);
    final.appendChild(mensaje);
    
    let btn = document.createElement('button');
    let txt = document.createTextNode('Volver a empezar');
    btn.appendChild(txt);
    final.appendChild(btn);
    final.style.opacity = 1;

    btn.addEventListener('click', () => {
        scrollToTop();
        window.addEventListener('scroll', () => {
            if (window.pageYOffset === 0) {
              location.reload();
            }
          });
    });
  }, 1000);
});

let final2 = document.getElementById('final2');

btn2.addEventListener('click',  () => {
    opciones.classList.add('transicion');
    final.classList.add('transicion');
    final.style.height = "600px";
    final.style.justifyContent = "end";
    
    setTimeout(() => {
    opciones.innerHTML = 'Decides hablarle a la figura misteriosa desde donde estas:  <br> - Ey!!, donde estamos?, qué es este lugar?.  <br> Desconocido-Eres parte de ellos verdad?, solo quieres experimentar conmigo... (saca un cuchillo y comienza a correr hacia donde estás) <br> Tú-espera!!, no tengo idea de lo que estás habalndo!.<br> Desconocido-(Se detiene)- Entonces no  vas asesinarme como a los demás?(llorando) <br> Tú- No tengo intenciones de dañarte, solo necesito saber en donde estamos, no recuerdo nada. <br> Desconocido-Estamos en el infierno. <br> En ese momento una criatura de aproximadamente 5 metros de alto con aspecto humanoide aparece detrás del Desconocido y lo aprieta fuertemente con sus manos hasta matarlo.';
    opciones.style.opacity = 1;

    let btn = document.createElement('button');
    let txt = document.createTextNode('Corres costeando el mar');
    btn.appendChild(txt);
    final.appendChild(btn);

    let btn0 = document.createElement('button');
    let txt0 = document.createTextNode('Decides tratar de luchar');
    btn0.appendChild(txt0);
    final.appendChild(btn0);
    
    btn.addEventListener('click',  () => {
      final2.classList.add('transicion');
      final.style.opacity = 0;
      final.style.transition = 0.2;
      opciones.style.opacity = 0;
      opciones.style.transition = 0.2;
      
      setTimeout( () =>{ 
        contenedor.style.height = "150px";
        opciones.remove();
        final.remove();
        final2.classList.add ('dead');
        final2.innerHTML = 'Lamentablemente el mosntruo te supera en volocidad por mucho y te alcanza para luego aplaztarte de la misma forma que al desconocido';
        
        let mensaje = document.createElement('h4');
        let texto = document.createTextNode('HAS MUERTO');
        mensaje.appendChild(texto);
        final2.appendChild(mensaje);
        
        let btn3 = document.createElement('button');
        let txt3 = document.createTextNode('Volver a empezar');
        btn3.appendChild(txt3);
        final2.appendChild(btn3);
    
        btn3.addEventListener('click', () => {
            scrollToTop();
            window.addEventListener('scroll', () => {
                if (window.pageYOffset === 0) {
                  location.reload();
                }
              });
        });
        final2.style.opacity = 1 ;
      }, 1000)
    });

    btn0.addEventListener('click',  () => {
      final2.classList.add('transicion');
      final.style.opacity = 0;
      final.style.transition = 0.2;
      opciones.style.opacity = 0;
      opciones.style.transition = 0.2;
      
      setTimeout(() => { 
        contenedor.style.height = "150px";
        opciones.remove();
        final.remove();
        final2.classList.add ('dead');
        final2.innerHTML = 'Lamentablemente el mosntruo te supera en fuerza por mucho y tus debiles golpes no lo afectan en nada. Tu destino resulta ser el mismo que el del desconocido';
        
        let mensaje = document.createElement('h4');
        let texto = document.createTextNode('HAS MUERTO');
        mensaje.appendChild(texto);
        final2.appendChild(mensaje);
        
        let btn4 = document.createElement('button');
        let txt4 = document.createTextNode('Volver a empezar');
        btn4.appendChild(txt4);
        final2.appendChild(btn4);
    
        btn4.addEventListener('click', () => {
            scrollToTop();
            window.addEventListener('scroll', () => {
                if (window.pageYOffset === 0) {
                  location.reload();
                }

            });
          });
          final2.style.opacity = 1 ;
        }, 1000);
    });
    opciones.style.opacity = 1;
    final.style.opacity = 1;
  }, 1000);
  
});

btn3.addEventListener('click',  () => {
  opciones.classList.add('transicion');
  final.classList.add('transicion');
  
  setTimeout(() => {
  contenedor.style.height = "600px"
  opciones.innerHTML = 'Decides correr costeando el mar, lo mas lejos posible del extraño. Entonces divisas una lancha llegando a la playa a unos metros de donde estabas. <br> Arriba de la lancha puedes observar varias personas que al verte comienzan a indicarte euforicamente que subas de manera urgente con ellos a la lancha, mientras se acercan lo mas rapido posible hacia ti hasta estar lo bastante cerca como para que puedas subir si corres algunos pocos metros mas';

  let btn = document.createElement('button');
  let txt = document.createTextNode('Avanzar y subir a la lancha');
  btn.appendChild(txt);
  final.appendChild(btn);

  let btn0 = document.createElement('button');
  let txt0 = document.createTextNode('No confias y das la vuelta');
  btn0.appendChild(txt0);
  final.appendChild(btn0);

  btn.addEventListener('click',  () => {
    final2.classList.add('transicion');
    final.style.opacity = 0;
    final.style.transition = 0.2;
    final2.style.width = "350px";
    final2.style.marginTop= "20px";

    setTimeout(() => { 
      final.remove();
      final2.innerHTML = 'Te acercas y subes rapidamente a la lancha y esta arranca a toda velocidad lejos de la isla, mientras se alejan logras ver una especie de humano giante observandolos y rugiendo euforicamente con rabia. <br> No puedes creer que lo que estes viendo sea real y preguntas a las personas que te salvaron, qué es esa criatura <br> Uno de ellos responde- Es en lo que te habrias convertido si no subias con nosotros a la lancha, la gente de  esta isla es una secta que experimenta con seres humanos y la mayoria termina transformado en alguna criatura extraña y salvaje. Hasta el momento no habiamos podido encontrar donde realizaban sus actividades, hasta hoy. Eres la primera persona que logramos salvar... <br>  FIN';

      let imgFinal = document.createElement('img')
      imgFinal.src = "victoria1.png"
      final2.appendChild(imgFinal)
    
      let mensaje = document.createElement('h4');
      let texto = document.createTextNode('HAS ESCAPADO CON VIDA');
      mensaje.appendChild(texto);
      final2.appendChild(mensaje);

      final2.style.opacity = 1 ;
    }, 1000);

});

  btn0.addEventListener('click',  () => {
    final2.classList.add('transicion');
    final.style.opacity = 0;
    final.style.transition = 0.2;
    final2.style.marginTop= "20px";
    
    setTimeout(() => { 
      final.remove();
      final2.classList.add ('dead');
      final2.innerHTML = 'Al dar la vuelta nuevamente para elegir otro rumbo al cual dirigirte ves una criatura de aproximadamente 4 m de alto acercandose a pasos agigantados hacia donde estás, tratas de correr hacia alguna parte pero la bestia es demasiado veloz. <br> Antes de que puedas tomar una decisión certera te atrapa y te aplasta hasta la muerte ';
    
      let mensaje = document.createElement('h4');
      let texto = document.createTextNode('HAS MUERTO');
      mensaje.appendChild(texto);
      final2.appendChild(mensaje);
    
      let btn4 = document.createElement('button');
      let txt4 = document.createTextNode('Volver a empezar');
      btn4.appendChild(txt4);
      final2.appendChild(btn4);

      btn4.addEventListener('click', () => {
          scrollToTop();
          window.addEventListener('scroll', () => {
              if (window.pageYOffset === 0) {
                location.reload();
              }
            });
      });
        final2.style.opacity = 1 ;
    }, 1000);
});
  opciones.style.opacity = 1;
  final.style.opacity = 1;
}, 1000);   
});   
   
