const AesteticPPM = ()=>{
    let elemento = document.getElementById("modal-consola-text");
    let ppm = parseInt(elemento.textContent);
    indice = 0;
    let intervalo2 = setInterval(function(){
        if(ppm == indice){
            elemento.textContent = indice;
            clearInterval(intervalo2);
        }
        else{
            elemento.textContent = indice;
        }

        indice++;
    }, 40);
};

const codigo = [
"Los videojuegos han evolucionado desde simples píxeles a mundos virtuales inmersivos. La competencia en eSports alcanza niveles profesionales. Cada partida desafía estrategia y reflejos. Los juegos son más que entretenimiento; son una forma de arte que conecta a personas de todo el mundo.",
"La música es el latido del alma, el lenguaje universal que une corazones. Desde la clásica sinfonía hasta el ritmo frenético del rock, cada nota cuenta una historia. Los artistas expresan emociones y experiencias a través de melodías que trascienden barreras culturales y lingüísticas.",
"El gimnasio es el santuario del cuerpo y la mente. Cada mancuerna levantada, cada kilómetro recorrido en la cinta, es un paso hacia una mejor versión de uno mismo. El sudor y el esfuerzo son monedas de cambio por salud y bienestar. En el gimnasio, el único límite es la determinación de cada individuo.",
"Minecraft es un universo de infinitas posibilidades, donde la creatividad es el único límite. Desde construir imponentes castillos hasta explorar cuevas oscuras en busca de tesoros, cada jugador forja su propio camino en este mundo pixelado. La comunidad de Minecraft comparte creaciones épicas que inspiran y asombran a jugadores de todo el mundo.",
"La búsqueda de pareja es un viaje lleno de emociones y experiencias. Desde las mariposas en el estómago en el primer encuentro hasta la conexión profunda que surge con el tiempo, encontrar a esa persona especial puede ser un desafío gratificante. El amor trae consigo alegría, complicidad y un sentido de pertenencia que enriquece la vida.",
"El piano es un instrumento que trasciende el mero sonido para convertirse en un medio de expresión. Cada nota resonando en las teclas cuenta una historia, desde la melancolía de una balada hasta la exuberancia de una sonata. Tocar el piano requiere disciplina y pasión, pero las recompensas son melodías que tocan el corazón y el alma.",
"En un mundo apocalíptico, la supervivencia es la única ley que importa. Los recursos escasean, y la lucha por la vida es constante. Entre ruinas y desolación, algunos encuentran esperanza en la camaradería y la resistencia contra la adversidad. En este mundo sombrío, cada día es una batalla por la supervivencia.",
"Los mejores amigos son como hermanos que elegimos. Comparten risas, lágrimas y momentos inolvidables. Son un apoyo incondicional en tiempos difíciles y los primeros en celebrar los logros. La amistad verdadera trasciende el tiempo y la distancia, creando lazos que perduran toda la vida.",
"La muerte es la única certeza en la vida, un misterio que nos acompaña desde el nacimiento. Nos confronta con la finitud de nuestra existencia y nos impulsa a reflexionar sobre el significado de nuestra propia mortalidad. Aunque a menudo causa dolor y tristeza, también nos recuerda la importancia de vivir cada día con plenitud y gratitud.",
"El abandono familiar es un acto devastador que deja cicatrices profundas en el corazón. Rompe los lazos de confianza y seguridad que deberían ser inquebrantables. Las consecuencias emocionales pueden perdurar durante generaciones, recordándonos la importancia del amor y el compromiso dentro de la familia.",
"En la vida, enfrentamos constantemente la dicotomía de ganar o perder. Cada desafío, ya sea personal o profesional, presenta la oportunidad de alcanzar la victoria o experimentar la derrota. Sin embargo, tanto el éxito como el fracaso nos enseñan lecciones valiosas y nos ayudan a crecer como individuos",
"El fútbol es más que un deporte; es una pasión que une a personas de diferentes culturas y países. Desde la emoción de marcar un gol hasta la estrategia de un juego bien ejecutado, el fútbol despierta un fervor que trasciende las barreras del idioma y la geografía. En el campo de juego, los jugadores se convierten en héroes y los aficionados en una sola voz.",
"El béisbol es el pasatiempo nacional que ha cautivado a generaciones. Desde el sonido de la pelota golpeando el guante hasta la emoción de un jonrón en el último inning, cada juego es una experiencia única. Los aficionados se reúnen en los estadios para disfrutar del espectáculo mientras los jugadores persiguen la gloria en el diamante",
"El baloncesto es un juego de ritmo frenético y habilidades atléticas impresionantes. Desde los mates espectaculares hasta los tiros de tres puntos en el último segundo, cada partido es una exhibición de talento y estrategia. Dentro y fuera de la cancha, el baloncesto inspira a jugadores y aficionados por igual.",
"El boxeo es un deporte de resistencia, coraje y determinación. En el cuadrilátero, los púgiles se enfrentan en una batalla de fuerza y habilidad, buscando el triunfo a través de golpes precisos y esquivas rápidas. Más allá de la competencia, el boxeo enseña disciplina y respeto, forjando campeones dentro y fuera del ring.",
"El karate es un arte marcial que va más allá de la fuerza física; es una disciplina que cultiva el cuerpo, la mente y el espíritu. Cada golpe y bloqueo son una expresión de concentración y control. Los practicantes de karate aprenden a defenderse, pero también a respetar a sus oponentes y a sí mismos.",
"La programación es el lenguaje del futuro, donde las ideas se convierten en realidad a través del código. Desde aplicaciones móviles hasta inteligencia artificial, la programación impulsa la innovación en todas las áreas de la tecnología. Los programadores son arquitectos digitales que construyen el mundo en línea en el que vivimos.",
"El sonido de cristales rotos rompe el silencio de la noche mientras los ladrones irrumpen en la tienda de videojuegos. Rápidamente, llenan bolsas con consolas y juegos, ansiosos por escapar antes de que suene la alarma. En la oscuridad, se desvanecen con su botín, dejando tras de sí el caos y la incertidumbre.",
"Las luces se atenúan y el rugido de la multitud llena el aire cuando la banda favorita sube al escenario. Las notas de la guitarra cortan el silencio y la energía se desata en una explosión de música y emoción. En medio de la multitud, te sumerges en el éxtasis del momento, conectando con la banda y con cada persona a tu alrededor.",
"Concentrado y determinado, te enfrentas a la barra cargada con más peso del que nunca has intentado levantar. La tensión en tus músculos es palpable mientras te preparas para el desafío. Con un esfuerzo final, la barra se eleva lentamente, desafiando la gravedad y marcando un nuevo récord personal. En ese momento de triunfo, sientes un torrente de satisfacción y orgullo.",
"Entre edificios en ruinas y calles desiertas, te aventuras en una ciudad que alguna vez estuvo llena de vida. La naturaleza reclama su territorio, cubriendo las estructuras con enredaderas y musgo. Cada paso es una mezcla de emoción y temor mientras te sumerges en la belleza sombría de un mundo que alguna vez fue, pero que ahora yace en silencio.",
"Bajo el resplandor de las estrellas, compartes tus pensamientos más íntimos con tu mejor amigo/a. Las risas y los susurros llenan el aire mientras intercambian historias y sueños. En la quietud de la noche, se fortalece el vínculo que los une, recordándote el valor incomparable de una amistad verdadera.",
"En un instante, la vida cambia para siempre cuando te enfrentas cara a cara con la muerte. El tiempo se detiene mientras reflexionas sobre lo que podría haber sido el último aliento. Sin embargo, de alguna manera, emerges ileso, con una apreciación renovada por la fragilidad de la existencia y la oportunidad de vivir cada día como si fuera el último.",
"El corazón se divide en dos cuando enfrentas la difícil decisión de perseguir una oportunidad profesional que significaría abandonar a tu familia. Los sueños chocan con las responsabilidades mientras te enfrentas al desgarrador dilema de seguir tu ambición o priorizar el vínculo familiar. En medio de la indecisión, el peso de la elección se hace sentir con cada latido.",
"El rugido de la multitud llena el estadio cuando el árbitro pita el final del partido, anunciando la victoria. Abrazos y gritos de alegría llenan el aire mientras el equipo celebra su triunfo. En ese momento de euforia, todos los sacrificios y entrenamientos valieron la pena, dejando una sensación de logro indescriptible en el corazón de cada jugador.",
"El silbato final suena y el marcador muestra la derrota. El campo queda envuelto en un silencio tenso mientras el equipo asimila la amarga realidad de la derrota. Cada jugador lleva consigo la carga de lo que podría haber sido, enfrentando la frustración y el desánimo mientras reflexionan sobre los errores cometidos. Sin embargo, en la adversidad también encuentran la motivación para volver más fuertes.",
"El bate cruza el aire con precisión milimétrica, conectando con la pelota en un choque resonante. El sonido del bateo perfecto se mezcla con los gritos de ánimo mientras la pelota se eleva hacia el cielo. En ese momento suspendido en el tiempo, sabes que has logrado algo especial, un lanzamiento que quedará grabado en la memoria de todos los presentes.",
"El cronómetro se agota y el juego está empatado. Con la presión sobre tus hombros, te lanzas hacia la canasta con determinación. El balón deja tus manos justo cuando suena la bocina, trazando un arco perfecto en el aire. El silencio se rompe con un estruendoso rugido cuando la pelota atraviesa la red, asegurando la victoria en el último segundo. En medio de la celebración, te conviertes en el héroe del día.",
"La multitud retiene el aliento cuando dos púgiles se enfrentan en el ring, intercambiando golpes poderosos. En un instante, un golpe preciso encuentra su objetivo, enviando a su oponente a la lona. El silencio es ensordecedor mientras el árbitro cuenta los segundos. Con cada latido del corazón, el mundo entero parece detenerse, hasta que finalmente suena la campana, anunciando la victoria por nocaut. En medio del éxtasis y el alivio, el ganador se alza como un campeón.",
"Armado con un mapa y una determinación inquebrantable, te aventuras en un viaje épico en busca del tesoro perdido en un vasto mundo abierto. Atraviesas paisajes desafiantes, desde desiertos abrasadores hasta junglas densas, enfrentándote a peligros y desafíos en cada paso del camino. Con cada descubrimiento, te acercas más a tu objetivo, alimentando la emoción de la aventura y la promesa de riquezas más allá de tus sueños más salvajes."
];
const main = document.querySelector(".main-text");
let indice = Math.floor( Math.random()*codigo.length );
main.textContent = codigo[indice];
let letras = main.textContent.split("");
let palabras = 0;
let cronometro = 0;
let correctas = [];
let texto;
let ppm;
document.addEventListener("keypress", (e)=>{
    if(cronometro == 0){
        cronometro = 1;
        var barra = document.getElementById("barra-progreso");
        var porcentajeTexto = document.getElementById("porcentaje");
        var tiempoTotal = 60; // Duración total de la carga en segundos
        var tiempoTranscurrido = 0;
        var intervalo = setInterval(function() {
          tiempoTranscurrido += 1;
          var porcentaje = (tiempoTranscurrido / tiempoTotal) * 100;
          barra.style.width = porcentaje + "%";
          if(porcentaje >= 50){
            porcentajeTexto.style.color = "black";
          }
          porcentajeTexto.textContent = Math.round(porcentaje) + "%"; // Actualizamos el texto del porcentaje
          if (tiempoTranscurrido >= tiempoTotal) {
            clearInterval(intervalo);
            let blur = document.getElementById('blur');
            blur.classList.toggle('active');
            let modal = document.getElementById('modal');
            modal.style.display = "block";
            let modalConsolaTexto = document.getElementById('modal-consola-text');
            modalConsolaTexto.textContent = `${palabras}`;
            AesteticPPM();
            let palabraspm = document.querySelector(".ppm").textContent;
            if(palabras > parseInt(palabraspm)){
                let user_id = document.querySelector(".user_id").textContent;
                datos = {
                    id : parseInt(user_id),
                    ppm_record: palabras
                }
                let info = {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datos)
                }
                fetch(`http://localhost:3986/record`, info) //CAMBIAR EN AMBIENTE REAAAAAAAAAAAAAAAAAAAAAAAAAAAL
                .then(response =>{
                    if(!response.ok){
                        console.log("No se pudo agregar los datos");
                    }
                })
                .catch(error=>{
                    console.error(error);
                })
            }
            let boton = document.getElementById("replay");
            boton.addEventListener("click", ()=>{
                location.reload(); //CAMBIAR EN AMBIENTE REAAAAAAAAAAAAAL
            })
          }
        }, 1000); // Actualizar la barra de carga cada segundo
    }
    if (letras.length > 0){
        if(letras[0] == e.key){
            if(e.key == " "){
                palabras += 1;
                console.log(palabras);
            }
            correctas.push(letras[0]);
            letras.shift();
            texto = `<span style="background-color: lightgreen; color: black;">${correctas.join("")}</span>${letras.join("")}`;
            main.innerHTML = texto;

        }
        else{
            let incorrecta = letras.join("")[0];
            texto = `<span style="background-color: lightgreen; color: black;">${correctas.join("")}</span><span style="background-color: red">${incorrecta}</span>${letras.slice(1).join("")}`;
            main.innerHTML = texto;
        }
    }
})

document.addEventListener("keyup", (e)=>{
    if (letras.length == 0){
        codigo.splice(indice, 1);
        main.classList.add("desaparecer");
        indice = Math.floor( Math.random()*codigo.length );
        main.textContent = codigo[indice];
        main.classList.add("aparecer");
        letras = main.textContent.split("");
        correctas = [];
        palabras += 1;
        console.log(palabras);
    }
});

// Texto que quieres mostrar como si se estuviera escribiendo
let bienvenida = "¡Empieza a teclear ahora mismo!";

// Elemento donde se mostrará el texto
let tituloElemento = document.getElementById('bienvenida');
// Índice para iterar sobre el texto
let index = 0;

// Intervalo para agregar cada letra al título
let intervalo = setInterval(function() {
// Agregar una letra al título
tituloElemento.textContent += bienvenida[index];
// Incrementar el índice
index++;
// Verificar si se ha completado la escritura del texto
if (index >= bienvenida.length) {
    clearInterval(intervalo); // Detener el intervalo
}
}, 50); // Velocidad de escritura en milisegundos