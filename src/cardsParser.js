const textBlue = `
Abfüller (Productor): Produce hasta 3 [vino]. Recibe [1 pv] por cada tipo de vino que produces.

Adlige (Noble): Paga [1 lira] para recibir [1 lira futura], O entrega [2 liras futuras] para obtener [2 pv].

Agente (Agente): Descubre la carta superior de cada pila. Toma 2 de estas 4 cartas y descarta las demás.

Alleskönner (Todoterreno): Elige 2: Cose un campo O produce hasta 2 [vino] O completa 1 [pedido de vino].

Designer (Diseñador): Construye 1 edificio al precio normal. Si tienes al menos 6 edificios después, recibe [2 pv].

Direttore (Director): Realiza la acción (sin bonificación) de la temporada anterior sin utilizar un trabajador.

Dottore (Doctor): Da [1 pv] para entrenar a 1 [trabajador], O recibe [1 pv] por cada jugador que tenga un total de 6 [trabajador].

Erntehelferin (Ayudante de cosecha): Cosecha hasta 2 campos y recibe [2 liras] o alternativamente, [1 pv].

Ernteexpertin (Experta en cosecha): Cosecha 1 campo y elige entre sacar 1 [carta de vid +] O paga [1 lira] para comprar el yugo.

Erzieherin (Educadora): Paga [3 liras] para entrenar a 1 [trabajador] que puedes usar de inmediato, O descarta 1 [vino] para recibir [2 pv].

Exporteurin (Exportadora): Produce hasta 2 [vino] O cumple con 1 [pedido de vino] O descarta 1 [uva cualquiera] para recibir [1pv].

Gastredner (Orador invitado): Todos los jugadores (incluido tú) pueden pagar [1 lira] para entrenar a 1 [trabajador]. Recibe [1pv] por cada jugador que lo haga.

Gastwirtin (Dueña de la posada): Juega esta carta, luego toma la carta superior de 2 montones de descarte diferentes.

Governatore (Gobernador): Elige hasta 3 jugadores. Cada uno debe darte 1 [visitador de verano]. Recibe [1 pv] por cada uno que no pueda hacerlo.

Gutachter (Evaluador): Recibe [1 lira] por cada una de tus cartas de mano O descarta todas las cartas de mano para recibir [2 pv].

Handler (Comerciante): Cumple 1 [pedido de vino] y recibe [1 pv] extra O Paga [3 liras], coloca [uva tinta] y [1 uva blanca] en tu prensa de vino.

Hilfsarbeiter (Trabajador auxiliar): Cosecha hasta 2 campos O produce hasta 3 [vino]. Paga [1 pv] para hacer ambas cosas.

Hofwinzer (Vinicultor de la finca): Amplía tu bodega con un descuento de [2 liras] O deja que 1 [vino] madure y cumple 1 [entrega de vino].

Kellermeister (Maestro de bodega): Elige 2: Saca 1 [pedido de vino +] O amplía tu bodega al precio normal O recibe [1pv].

Kelterer (Prensador): Saca 1 [visitador de verano +] y recibe [3 liras] O saca 1 [pedido de vino +] y produce hasta 2 [vino].

Keltermeistrerin (Maestra prensadora): Recibe [3 liras] y saca 1 [pedido de vino +] O produce hasta 3 [vino].

Landesherrin (Señora feudal): Tu jugador de la derecha debe elegir entre darte 2 [carta] o [3 liras]. Alternativamente, pierde [1 pv].

Lehrer (Profesor): Produce hasta 2 [vino] O paga [2 liras] para entrenar a 1 [trabajador].

Mentore (Mentor): Todos los jugadores pueden producir hasta 2 [vino]. Saca 1 [carta de vid +] O 1 [visitador de verano +] por cada jugador que lo haga.

Motivatorin (Motivadora): Cada jugador puede recuperar su trabajador grande. Recibe [1 pv] por cada jugador que lo haga.

Onologe (Enólogo): Deja que todos tus [vino] maduren inmediatamente dos veces O paga [3 liras] para ampliar tu bodega.

Politiker (Político): Si tienes menos de [0 pv], recibe [6 liras]. Si tienes [0 pv] o más, saca 1 [carta de vid +], 1 [visitador de verano +] y 1 [pedido de vino +].

Professore (Profesor): Paga [2 liras] para entrenar a 1 [trabajador] O recibe [2pv] si ya tienes un total de 6 [trabajador].

Promoter (Promotor): Descarta 1 [uva cualquiera] O 1 [vino cualquiera] para recibir [1 pv] y [1 lira futura].

Richter (Juez): Saca 2 [visitador de verano +] O entrega 1 [vino] de la bodega mediana o grande para recibir [3 pv].

Schnitterin (Cosechadora): Cosecha hasta 3 campos. Si cosechas todos los 3 campos, recibe [2pv].

Society-Reporterin (Reportera de sociedad): Produce hasta 2 [vino]. Recibe [1 pv] por cada espumante que produzcas.

Studierende (Estudiante): Saca 2 [pedido de vino +], paga [3 liras] para entrenar a 1 [trabajador]. Entrega [1 pv] para hacer ambas cosas.

Vermarketer (Comercializador): Saca 2 [visitador de verano +] y recibe [1 lira] O completa 1 [pedido de vino] y recibe [1 pv] extra.

Weinbauer (Viticultor): Deja que todos tus [vino] maduren inmediatamente dos veces O entrega [1 pv] para expandir tu bodega.

Weinprüfer (Catador de vinos): Entrega 1 [vino] para obtener [4 liras]. Si fue el vino más valioso en el juego, recibe [2 pv].

Wohltäter (Benefactor): Saca 1 [carta de vid +] y 1 [visitador de verano +] O descarta 2 cartas de visitante para recibir [2 pv].

Zymologin (Zimóloga): Produce hasta 2 [vino] con un valor de 4 o más, incluso si no tienes la bodega adecuada.
`;

const textYellow = `
Architekt (Arquitecto): Construye una estructura con descuento de [3 liras] O recibe [1 pv] por una estructura que valga al menos [4 liras].

Auktionator (Subastador): Descarta 2 [carta cualquiera] para recibir [4 liras] O descarta 4 [carta cualquiera] para recibir [3pv].

Bankier (Banquero): Recibe [5 liras]. Cada uno de tus compañeros puede entregar [1 pv] para recibir [3 liras].

Bauzeichner (Dibujante de construcción): Paga [1 pv] / [2 pv] para construir una estructura sin costo de cajas, que valga [2 liras] o [[3 liras] / [4 liras] hasta [6 liras].

Boden-Begutachterin (Evaluadora de suelo): Construye una estructura al precio normal y planta 1 [carta de vid]. Si es una [carta de vid] con un valor de 4, recibe [1 pv].

Conferencier (Conferenciante): Paga [4 liras] para sacar 3 [visitador de invierno] O entrega 1 [vino] y 3 cartas de visitante para recibir [3 pv].

Debutant (Debutante): Recibe [3 liras] O produce hasta 2 [vino].

Familien-Oberhaupt (Jefe de familia): Paga [3 pv] para recibir [9 liras] O paga [6 liras] para recibir [2 pv].

Farmapchter (Granjero): Planta 1 [carta de vid] incluso sin riego y/o enrejado O desarraiga 1 [carta de vid] y luego descártala de tu mano para recibir [2 pv].

Gartenfreund (Amante del jardín): Planta 1 [carta de vid] incluso si te falta enrejado y/o riego, O desarriga 2 [carta de vid] y descártalas para recibir [3pv].

Gastgeber (Anfitrión): Recibe [4 liras] O cosecha un campo.

Gonner (Patrocinador): Recibe [4 liras] O saca 1 [pedido de vino +] y 1 [visitante de invierno +].

Hochzeitsreisende (Recién casados): Paga hasta [2 liras] a 3 compañeros. Recibe [1 pv] por cada uno de estos compañeros.

Hoker (Puta): Saca 1 [carta de vid +], 1 [pedido de vino +] y 1 [visitador de invierno +]. Cada uno de tus compañeros puede sacar 1 [visitador de verano +].

Handwerker (Trabajador manual): Todos los jugadores (incluyéndote) pueden construir una estructura con descuento de [2 liras]. Recibes [1 pv] por cada jugador que lo haga.

Kaufmann (Comerciante): Compra 1 [uva cualquiera] por [2 liras] O entrega 1 [vino cualquiera] para recibir [2 liras] y [1pv].

Kindergärtnerin (Educadora infantil): Saca 1 [carta de vid +] y planta 1 [carta de vid] O intercambia 2 [carta de vid] en tus campos (sin importar los valores más altos).

Kontraktor (Contratista): Elige 2: Recibe [1 pv] O construye una estructura al precio normal O planta 1 [carta de vid].

Kultivatorin (Cultivadora): Planta 1 [carta de vid]. Puedes plantar en un campo cuyo valor máximo de uvas se supere.

Kunsthandwerkerin (Artista artesana): Recibe [1 lira] O construye una estructura con descuento de [1 lira] O planta hasta 2 [carta de vid].

Landvermesser (Topógrafo): Recibe [2 liras] por cada uno de tus campos vacíos O recibe [1 pv] por cada uno de tus campos plantados.

Landwirtin (Granjera): Planta 1 [carta de vid]. Si hay al menos 3 [carta de vid] diferentes en el campo después, recibe [2 pv].

Makler (Corredor): Paga [9 liras] para recibir [3pv] O entrega [2pv] para recibir [6 liras].

Organisatorin (Organizadora): Coloca tu [gallo] en un campo vacío de la lista de orden, recibe el bono y cambia la estación.

Pflanzerin (Plantadora): Planta hasta 2 [carta de vid] y recibe [1 lira] O desarriga 1 [carta de vid], descártala y recibe [2 pv].

Planerin (Planificadora): Coloca 1 [trabajador] en un campo de este invierno. Úsalo al comienzo de este invierno.

Produttore (Productor): Paga [2 liras] para retirar hasta 2 [trabajador] utilizados. Los [trabajador] pueden ser utilizados nuevamente este año.

Schmied (Forjador): Construye una estructura con descuento de [2 liras]. Si la estructura vale [5 liras] o [6 liras], recibe adicionalmente [3 pv].

Siedlerin (Colonizadora): Construye una estructura con descuento de [3 liras] O planta hasta 2 [carta de vid] Entrega [1 pv] para hacer ambas cosas.

Sponsor (Patrocinador): Saca 2 [carta de vid +] O recibe [3 liras]. Entrega [1 pv] para hacer ambas cosas.

Steinmetz (Cantero): Paga [8 liras] para construir dos estructuras de tu elección. (Ignora sus precios normales.)

Tandler (Comerciante): Descarta 2 [carta cualueira] para robar 1 de cada tipo de carta (1 [carta de vid +], 1 [visitador de verano +], 1 [pedido de vino +] y 1 [visitador de invierno +]).

Unterhändler (Negociador): Entrega 1 [uva cualquiera] para recibir [1 lira futura] O entrega 1 [vino cualquiera] para recibir incluso [2 liras futuras].

Verwalter (Administrador): Cada uno de tus compañeros puede darte [2 liras]. Por cada uno que no lo haga, recibes [1 pv].

Volontario (Voluntario): Todos los jugadores (incluyéndote a ti) pueden plantar 1 [carta de vid]. Recibe [2 liras] por cada uno de tus compañeros que lo haga.

Wein-Importeur (Importador de vinos): Saca 3 [visitante de invierno +] si no todos tus compañeros juntos te dan un total de 3 cartas de visitante.

Weinkritiker (Crítico de vinos): Saca 2 [visitante de invierno +] O entrega 1 [vino cualquiera] con un valor de 7 o más para recibir [4 pv].

Züchter (Cultivador): Planta 1 [carta de vid]. Si has plantado un total de al menos 6 [carta de vid], recibe [2 pv].
`

let id = 0
const objects = textBlue.split('\n')
    .filter(line => line.length > 1)
    .map(line => {
        const [germanTitle, rest] = line.split(' (')
        const [spanishTitle, text] = rest.split('): ')
        return {
            id: id++,
            color: 'blue',
            germanTitle: germanTitle.trim(),
            spanishTitle: spanishTitle.trim(),
            spanishText: text.trim()
        };
    });

id = 38
const objectsYellow = textYellow.split('\n')
    .filter(line => line.length > 1)
    .map(line => {
        const [germanTitle, rest] = line.split(' (')
        const [spanishTitle, text] = rest.split('): ')
        return {
            id: id++,
            color: 'yellow',
            germanTitle: germanTitle.trim(),
            spanishTitle: spanishTitle.trim(),
            spanishText: text.trim()
        };
    });

console.log(objectsYellow);