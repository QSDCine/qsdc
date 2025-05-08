// Juego creado sin ánimo de lucro por Wildcrow
const movies = [
    {
        title: ["Los Vengadores", "Avengers", "Vengadores", "The Avengers"],
        description: "Pelicula de superhéroes estrenada en 2012 que consolidaba el inicio de una gran saga.",
        audio: "audio/avengers.mp3",
        hints: [
            "Basada en un grupo de héroes de comic cuyas aventuras se comenzaron a publicar en 1963",
            "Dirigida por Joss Whedon",
            "Es producto de Marvel, la casa de las ideas"
        ]
    },
    {
        title: ["Ice Age"],
        description: "Pelicula de animación del año 2002",
        audio: "audio/iceage.mp3",
        hints: [
            "Trata de las aventuras de una extraña manada",
            "En la película hay una ardilla bastante obsesionada con las bellotas",
            "Many, Sid y Diego son los nombres del trío protagonista"
        ]
    },
    {
        title: ["Ip Man", "Ip-Man", "IpMan"],
        description: "Pelicula de acción estrenada en 2008",
        audio: "audio/ipman.mp3",
        hints: [
            "Protagonizada por Donnie Yen",
            "Basada en la decada de 1930 en Foshan, China",
            "Es la historia del maestro de Bruce Lee"
        ]
    },
    {
        title: ["Harry Potter"],
        description: "Saga de 8 películas de cine fantástico estrenadas en el decenio comprendido entre 2001-2011",
        audio: "audio/harrypotter.mp3",
        hints: [
            "Protagonizadas por Daniel Radcliffe, Rupert Grinty Emma Watson",
            "Basadas en las novelas homónimas de J.K. Rowling",
            "El protagonista tiene una cicatriz en forma de rayo en la frente"
        ]
    },
    {
        title: ["Star Wars", "La Guerra de las Galaxias"],
        description: 'Saga de culto del género de ciencia ficción "space opera" que comenzó en 1977',
        audio: "audio/starwars.mp3",
        hints: [
            'Las primeras 9 películas son consideradas la "saga de los Skaywalker"',
            "El transfondo, y la dirección y guión de algunas de ellas, fue creación de George Lucas",
            "La lucha entre el bien y el mal es más chula con espadas laser"
        ]
    },
    {
        title: ["John Q"],
        description: "Película dramática estrenada en 2002",
        audio: "audio/johnq.mp3",
        hints: [
            "Basada en hechos reales, está protagonizada por Denzel Washington",
            "La acción tiene lugar en un hospital",
            "La película tiene la intención de denunciar los problemas de los servicios de salud públicos"
        ]
    },
    {
        title: ["La Lista de Schindler"],
        description: "Película dramática e histórica estrenada en 1993",
        audio: "audio/lalistadeschindler.mp3",
        hints: [
            "Dirigida por Steven Spielberg y protagonizada por Liam Neeson",
            "John Williams es el encargado de la banda sonora",
            "Se rodó en blanco y negro"
        ]
    },
    {
        title: ["El Señor de los Anillos", "The Lord Of The Rings", "LOTR"],
        description: "Trilogía de acción, fantasía y aventuras estrenada entre 2001 y 2003",
        audio: "audio/elsenordelosanillos.mp3",
        hints: [
            "Dirigida por Peter Jackson",
            "La banda sonora es creación de Howard Shore",
            "Basada en los libros homónimos creados por Tolkien"
        ]
    },
    {
        title: ["Braveheart"],
        description: "Película histórica-dramática estrenada en 1995",
        audio: "audio/braveheart.mp3",
        hints: [
            "Dirigida, producida y protagonizada por Mel Gibson",
            "Cuenta la leyenda de William Wallace",
            "Los hechos tienen lugar desde 1820 a 1314"
        ]
    },
    {
        title: ["Batman"],
        description: "Película de superhéroes estrenada en 1989",
        audio: "audio/batman.mp3",
        hints: [
            "Protagonizada por Michael Keaton, Jack Nicholson y Kim Basinger",
            "Dirigida por Tim Burton",
            "Personaje de DC apodado El Caballero Oscuro de Gotham"
        ]
    },
    {
        title: ["El último Mohicano", "El último de los Mohicanos"],
        description: "Película épica ucrónica de 1992 del género aventuras",
        audio: "audio/elultimomohicano.mp3",
        hints: [
            "Protagonizada por Daniel Day-Lewis",
            "Es una historia sobre Indios durante la ocupación inglesa en América",
            "Obtuvo un oscar al mejor sonido"
        ]
    },
    {
        title: ["Superman"],
        description: "Película de superhéroes de 1978",
        audio: "audio/superman.mp3",
        hints: [
            "Protagonizada por Christopher Reeve",
            "Es la historia de un alienígena en la Tierra",
            "Fue el inicio de una tetralogía"
        ]
    },
    {
        title: ["Jurassic Park", "Parque Jurásico"],
        description: "Película de ciencia ficción y aventuras estrenada en 1993",
        audio: "audio/parquejurasico.mp3",
        hints: [
            "Dirigida por Steven Spielberg",
            "La banda sonora corre a cargo de John Williams",
            "Fue el inicio de una trilogía, basada en el libro homónimo de Michael Crichton"
        ]
    },
    {
        title: ["Austin Powers"],
        description: "Saga de películas de acción y comedia estrenadas entre 1997 y 2002",
        audio: "audio/austinpowers.mp3",
        hints: [
            "Producidas, escritas y protagonizadas por Mike Myers",
            "Mike Myers realiza simultaneamente varios papeles en estas películas",
            "El agente secreto británico más sexy. Si, nena!"
        ]
    },
    {
        title: ["Misión Imposible"],
        description: "Saga de películas de acción que comenzó en 1996",
        audio: "audio/misionimposible.mp3",
        hints: [
            "Protagonizada por Tom Cruise como Ethan Hunt",
            "Es una película de acción y espionaje",
            "El protagonista es miembro del ficticio FMI"
        ]
    },
    {
        title: ["Eduardo Manostijeras"],
        description: "Película fantástica estrenada en 1990",
        audio: "audio/eduardomanostijeras.mp3",
        hints: [
            "Dirigida por Tim Burton",
            "Protagonizada por Winona Ryder y Johnny Depp",
            "La banda sonora es de Danny Elfman"
        ]
    },
    {
        title: ["Beetlejuice", "Bitelchús"],
        description: "Película de comedia negra estrenada en 1988",
        audio: "audio/beetlejuice.mp3",
        hints: ["Dirigida por Tim Burton", "Protagonizada por Michael Keaton", "Si dices su nombre 3 veces aparecerá"]
    },
    {
        title: ["RoboCop"],
        description: "Película de acción y ciencia ficción estrenada en 1987",
        audio: "audio/robocop.mp3",
        hints: [
            "Dirigida por Paul Verhoeven",
            "Protagonizada por Peter Weller",
            "El protagonista es mitad hombre mitad máquina, todo policía"
        ]
    },
    {
        title: ["Waterworld"],
        description: "Película de acción y ciencia ficción post-apocalíptica estrenada en 1995",
        audio: "audio/waterworld.mp3",
        hints: [
            "Protagonizada por Kevin Costner",
            "El nombre del protagonista, Mariner, solo se menciona una vez al final de la cinta y de manera discreta",
            "El protagonista es un mutante"
        ]
    },
    {
        title: ["Predator", "Depredador"],
        description: "Película de acción y ciencia ficción estrenada en 1987",
        audio: "audio/predator.mp3",
        hints: [
            "Protagonizada por Arnold Schwarzenegger",
            "Un equipo de élite debe enfrentarse a una amenaza alienígena",
            "El alienígena es todo un cazador"
        ]
    },
    {
        title: ["Halloween"],
        description: "Saga de películas slasher que comenzó en 1978",
        audio: "audio/halloween.mp3",
        hints: [
            "Creada por John Carpenter",
            "La saga consta de 11 películas",
            "El asesino lleva una máscara de latex del Capitán Kirk de Star Trek"
        ]
    },
    {
        title: ["Viernes 13"],
        description: "Saga de películas slasher que comenzó en 1980",
        audio: "audio/viernes13.mp3",
        hints: [
            "El asesino lleva un machete y una máscara de hockey",
            "Tuvo un crossover con otro malvado protagonista de películas de terror muy famoso",
            "Su historia comienza en Crystal Lake"
        ]
    },
    {
        title: ["The Matrix", "Matrix"],
        description: "Trilogía de ciencia ficción considerada de culto iniciada en 1999",
        audio: "audio/matrix.mp3",
        hints: [
            "Dirigidas por las hermanas Wachowsky",
            "Protagonizadas por Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss y Hugo Weaving",
            'Su protagonista, el señor Thomas Anderson, usa el alias de salteador "Neo"'
        ]
    },
    {
        title: ["Beowulf", "La Leyenda de Beowulf"],
        description: "Película de animación de 2007",
        audio: "audio/beowulf.mp3",
        hints: [
            "Toda la animación se realizó mediante captura de movimiento",
            "La cinta está dirigida por Robert Zemeckis y protagonizada por Ray Winstone, Angelina Jolie, Anthony Hopkins, John Malkovich, Robin Wright Penn, Brendan Gleeson y Crispin Glover",
            "Basada en una leyenda Danesa"
        ]
    },
    {
        title: ["Gladiator", "The Gladiator", "El Gladiador", "Gladiador"],
        description: "Película épica del género péplum y acción estrenada en el año 2000",
        audio: "audio/gladiator.mp3",
        hints: [
            "Dirigida por Ridley Scott",
            "Protagonizada por Russell Crowe y Joaquin Phoenix",
            '"Ave Caesar, los que van a morir te saludan"'
        ]
    },
    {
        title: ["Gru, mi villano favorito", "Gru", "Despicable Me", "Gru mi villano favorito"],
        description: "Película de animación estrenada en 2010",
        audio: "audio/gru.mp3",
        hints: [
            'El protagonista está acompañado de sus ayudantes de color amarillo llamados "minions"',
            "El protagonista adopta a 3 niñas",
            '"Pero que blandito!"'
        ]
    },
    {
        title: ["Shaft"],
        description: "Película de acción del año 2000",
        audio: "audio/shaft.mp3",
        hints: [
            "Protagonizada por Samuel L. Jackson en el papel de un detective...",
            "Secuela de las Noches Rojas de Harlem de 1971",
            "Christian Bale actúa en la película también"
        ]
    },
    {
        title: ["Pulp Fiction"],
        description: "Película thriller estrenada en 1994",
        audio: "audio/pulpfiction.mp3",
        hints: [
            "Escrita y dirigida por Quentin Tarantino",
            "Protagonizada por: John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel y Ving Rhames entre otros.",
            "Oscar a mejor guión original"
        ]
    },
    {
        title: ["Reservoir Dogs"],
        description: "Película de suspense estrenada en 1992",
        audio: "audio/reservoirdogs.mp3",
        hints: [
            "Escrita y dirigida por Quentin Tarantino",
            "Supuso un hito para el cine independiente",
            "Fue el debut de su director"
        ]
    },
    {
        title: ["Amélie", "Amelie"],
        description: "Película de comedia romántica francesa estrenada en 2001",
        audio: "audio/amelie.mp3",
        hints: [
            "La banda sonora fue creada por Yann Tiersen",
            "Ganó 5 Óscar",
            "Es la segunda cinta francesa hablada en francés con mayor éxito en taquilla"
        ]
    },
    {
        title: ["El Rey Escorpión"],
        description: "Película de acción y fantasía estrenada en 2002",
        audio: "audio/elreyescorpion.mp3",
        hints: [
            'Esta protagonizada por Dwayne Johnson "The Rock"',
            'Es una precuela de "La Momia"',
            "Va sobre un gobernante del periodo predinástico de Egipto"
        ]
    },
    {
        title: ["El Rey León"],
        description: "Película de animación estrenada en 1994",
        audio: "audio/elreyleon.mp3",
        hints: [
            "Hans Zimmer, Elton John y Tim Rice son los encargados de la banda sonora",
            "Ganó dos Óscar por su banda sonora",
            "Vive y deja vivir"
        ]
    },
    {
        title: ["Tarzán"],
        description: "Película de animación estrenada en 1999",
        audio: "audio/tarzan.mp3",
        hints: [
            "Ganó un Óscar a la mejor canción",
            "La banda sonora es de Phil Collins",
            "Basada en un libro y una película homónimos"
        ]
    },
    {
        title: ["La Historia Interminable", "The Neverending Story"],
        description: "Película fantástica estrenada en 1984",
        audio: "audio/lahistoriainterminable.mp3",
        hints: [
            "Basada en la novela homónima de Michael Ende",
            "Con el tiempo se produjeron dos secuelas, formando una trilogía",
            "El protagonista, Bastian, junto con Atreyu deberán salvar a la Emperatriz y con ello a Fantasía"
        ]
    },
    {
        title: [
            "La Espada Mágica: En busca de Camelot",
            "La Espada Mágica",
            "La Espada Mágica en busca de Camelot",
            "Quest for Camelot",
            "En busca de Camelot"
        ],
        description: "Película de animación estrenada en 1998",
        audio: "audio/laespadamagica.mp3",
        hints: [
            "Basada en la novela de Vera Chapman",
            "Kayley y Garrett viajan junto con los torpes dragones Cornwall y Davon",
            "El villano se llama Ruber, y quiere destruir al Rey Arturo"
        ]
    },
    {
        title: ["Willow"],
        description: "Película de culto fantástica estrenada en 1988",
        audio: "audio/willow.mp3",
        hints: [
            "Dirigida por Ron Howard y producida por George Lucas",
            "Protagonizada por Warwick Davis y Val Kilmer",
            "Una niña amenaza el reino de terror de la villana de esta película"
        ]
    },
    {
        title: ["El Santo", "The Saint"],
        description: "Película de acción y espionaje estrenada en 1997",
        audio: "audio/elsanto.mp3",
        hints: [
            "Protagonizada por Val Kilmer",
            "Basada en una serie de libros de 1928",
            "El protagonista es Simon Templar (Simón el Mago)"
        ]
    },
    {
        title: ["Mentes Peligrosas", "Dangerous Minds"],
        description: "Película dramática estrenada en 1995",
        audio: "audio/mentespeligrosas.mp3",
        hints: [
            "Protagonizada por Michelle Pfeiffer",
            "Basada en la historia real de la marine LouAnne Johnson",
            "Ganó un Grammy por su canción de apertura"
        ]
    },
    {
        title: ["Hook", "El Capitán Garfio", "Hook: El Capitán Garfio", "Hook (El Capitán Garfio)"],
        description: "Película de aventuras y fantasía estrenada en 1991",
        audio: "audio/hook.mp3",
        hints: [
            "Protagonizada por Robin Williams y Dustin Hoffman",
            "Basada en un libro de J.M. Barrie de 1911",
            "Dirigida por Steven Spielberg"
        ]
    },
    {
        title: ["Tiburón", "Jaws"],
        description: "Película de terror y aventuras estrenada en 1975",
        audio: "audio/tiburon.mp3",
        hints: [
            "Dirigida por Steven Spielberg",
            "Protagonizada por Roy Scheider",
            "El villano de la película es un animal con muchos dientes y mucha mala leche"
        ]
    },
    {
        title: ["Deep Blue Sea"],
        description: "Película de terror y acción estrenada en 1999",
        audio: "audio/deepbluesea.mp3",
        hints: [
            "Protagonizada por Thomas Jane y Samuel L. Jackson",
            "La acción tiene lugar en una plataforma de investigación en mitad del oceano",
            "Los efectos especiales estuvieron a cargo de Industrial Light & Magic"
        ]
    },
    {
        title: ["La Roca"],
        description: "Película de acción estrenada en 1996",
        audio: "audio/laroca.mp3",
        hints: [
            "Dirigida por Michael Bay",
            "Protagonizada por Nicholas Cage, Sean Connery y Ed Harris",
            "Tiene lugar en la prisión de Alcatraz"
        ]
    },
    {
        title: ["Dragonheart"],
        description: "Película de aventuras y fantasía estrenada en 1996",
        audio: "audio/dragonheart.mp3",
        hints: [
            "Protagonizada por Dennis Quaid, contaba con la voz de Sean Connery también",
            "El protagonista, Quaid, se llama Bowen",
            "Es la historia de un hombre y un dragón"
        ]
    },
    {
        title: ["Regreso al Futuro", "Back to the Future"],
        description: "Película de ciencia ficción estrenada en 1985",
        audio: "audio/regresoalfuturo.mp3",
        hints: [
            "Dirigida y escrita por Robert Zemeckis",
            "Protagonizada por Michael J. Fox y Christopher Lloyd",
            "Es una trilogía muy famosa"
        ]
    },
    {
        title: ["Aladdin"],
        description: "Película de animación estrenada en 1992",
        audio: "audio/aladdin.mp3",
        hints: [
            "Inspirada en un cuento de las Mil y una noches",
            "Entre sus filas cuenta con Robin Williams",
            "La banda sonora es de Alan Menken"
        ]
    },
    {
        title: ["Hércules"],
        description: "Película de animación estrenada en 1997",
        audio: "audio/hercules.mp3",
        hints: [
            "Inspirada en un famoso héroe griego",
            "Alan Menken se encarga de la banda sonora en esta película",
            "Basada en la mitología griega"
        ]
    },
    {
        title: ["Mulan"],
        description: "Película de animación estrenada en 1998",
        audio: "audio/mulan.mp3",
        hints: [
            "Basada en una leyenda China",
            "Jackie Chan trabajó doblando voces al chino",
            "La trama esta ambientada en la dinastía Han"
        ]
    },
    {
        title: ["Kung Fu Panda", "Kung-Fu Panda"],
        description: "Película de animación estrenada en 2008",
        audio: "audio/kungfupanda.mp3",
        hints: [
            "Todos los personajes son animales",
            "Protagonizada por Jack Black, Jackie Chan, Dustin Hoffman, Angelina Jolie, Ian McShane, Lucy Liu y David Cross",
            "El protagonista se llama Po"
        ]
    },
    {
        title: ["Terminator"],
        description: "Película de ciencia ficción y acción estrenada en 1984",
        audio: "audio/terminator.mp3",
        hints: ["Dirigida por James Cameron", "Protagonizada por Arnold Schwarzenegger", "Skynet es malvada"]
    },
    {
        title: ["Rambo"],
        description: "Saga de películas de acción que comenzó en 1982",
        audio: "audio/rambo.mp3",
        hints: [
            "Protagonizadas por Sylvester Stallone",
            "Las películas se centran en un veterano de la guerra de Vietnam",
            '"No siento las piernas!"'
        ]
    },
    {
        title: ["El Primer Caballero"],
        description: "Película de drama romántico y aventuras estrenada en 1995",
        audio: "audio/elprimercaballero.mp3",
        hints: [
            "Protagonizada por Richard Gere y Sean Connery",
            "Cuenta una historia de Lancelot y Ginebra",
            "Sean Connery hace el papel del Rey Arturo"
        ]
    },
    {
        title: ["Los Tres Mosqueteros", "Los 3 Mosqueteros"],
        description: "Película de acción y aventuras estrenada en 1993",
        audio: "audio/lostresmosqueteros.mp3",
        hints: [
            "Basada en una novela de Alejandro Dumas",
            "Para el tema principal de la película se contó con Bryan Adams, Rod Stewart y Sting",
            '"Todos para uno y uno para todos"'
        ]
    },
    {
        title: ["Blade"],
        description: "Película de acción y superhéroes estrenada en 1998",
        audio: "audio/blade.mp3",
        hints: [
            "Protagonizada por Wesley Snipes y Stephen Dorff",
            "Es parte de una trilogía",
            "Basada en un personaje de Marvel"
        ]
    },
    {
        title: ["Mensajero del Futuro", "The Postman", "El Mensajero del Futuro"],
        description: "Película de drama y ciencia ficción post-apocalíptica estrenada en 1997",
        audio: "audio/mensajerodelfuturo.mp3",
        hints: [
            "Protagonizada por Kevin Costner",
            "Basada en la novela homónima de David Brin",
            "También fue dirigida por el propio Kevin Costner"
        ]
    },
    {
        title: ["Mad Max"],
        description: "Película de acción policíaca estrenada en 1979",
        audio: "audio/madmax.mp3",
        hints: ["Es el inicio de una trilogía", "Escrita y dirigida por George Miller", "Protagonizada por Mel Gibson"]
    },
    {
        title: ["El Cuervo", "The Crow"],
        description: "Película fantástica de culto estrenada en 1994",
        audio: "audio/elcuervo.mp3",
        hints: [
            "Basada en una serie de comics de James O'Barr",
            "Su protagonista fue el hijo de Bruce Lee, que lamentablemente falleció durante el rodaje de la película",
            "La trama principal de la película es la venganza"
        ]
    },
    {
        title: ["El Quinto Elemento"],
        description: "Película de acción y ciencia ficción estrenada en 1997",
        audio: "audio/elquintoelemento.mp3",
        hints: [
            "Dirigida por Luc Besson",
            "Con Bruce Willis, Mila Jovovich y Gary Oldman en los papeles principales",
            '"Super verde!"'
        ]
    },
    {
        title: ["Rocky"],
        description: "Película dramática estrenada en 1976",
        audio: "audio/rocky.mp3",
        hints: [
            "Escrita y protagonizada por Sylvester Stallone",
            "Considerada una de las mejores películas sobre deportes de la historia",
            "Ganó 3 premios Óscar"
        ]
    },
    {
        title: ["Hellboy"],
        description: "Película de superhéroes sobrenaturales estrenada en 2004",
        audio: "audio/hellboy.mp3",
        hints: [
            "Dirigida por Guillermo del Toro",
            "Protagonizada por Ron Pearlman",
            "Basada en una saga de comics, tuvo una secuela"
        ]
    },
    {
        title: ["Van Helsing"],
        description: "Película de fantasía estrenada en 2004",
        audio: "audio/vanhelsing.mp3",
        hints: [
            "Protagonizada por Hugh Jackman y Kate Beckinsale",
            "Los efectos especiales del filme son producto de la empresa Industrial Light & Magic",
            'Basada en un personaje de la novela "Drácula"'
        ]
    },
    {
        title: ["Robin Hood: Príncipe de los Ladrones", "Robin Hood", "Robin Hood Principe de los Ladrones", "Robin Hood el principe de los ladrones"],
        description: "Película de aventuras estrenada en 1991",
        audio: "audio/robinhood.mp3",
        hints: [
            "Protagonizada Kevin Costner, Morgan Freeman, Alan Rickman y Christian Slater",
            "La banda sonora es producto de Michael Kamen",
            "Basada en un personaje que era un héroe y forajido del folclore inglés medieval"
        ]
    },
    {
        title: ["Conan"],
        description: "Película fantástica de espada y brujería estrenada en 1982",
        audio: "audio/conan.mp3",
        hints: [
            "El guión se basa en las historias de Robert E. Howard",
            "Protagonizada por Arnold Schwarzenegger",
            "Tuvo una secuela, y un reboot protagonizado por Jason Momoa"
        ]
    },
    {
        title: ["El tren de las 3:10", "3:10 to Yuma", "El tren de las 3 y 10", "El tren de las 3 10", "3 10 to yuma"],
        description: "Película western estrenada en 2007",
        audio: "audio/eltrendelas3y10.mp3",
        hints: [
            "Remake de la cinta del año 1957 con el mismo título",
            "Protagonizada por Christian Bale y Russell Crowe",
            "La acción comienza en la habitación de un hotel donde un sheriff vigila a un ladrón de 21 años"
        ]
    },
    {
        title: ["El bueno, el feo y el malo", "el bueno el feo y el malo"],
        description: "Película western estrenada en 1966",
        audio: "audio/elbuenoelfeoyelmalo.mp3",
        hints: [
            "Dirigida por Sergio Leone",
            "Protagonizada por Clint Eastwood",
            "Es la tercera y última película de la llamada Trilogía del dólar"
        ]
    },
    {
        title: ["El último Samurai"],
        description: "Película de acción y aventuras estrenada en 2003",
        audio: "audio/elultimosamurai.mp3",
        hints: [
            "Protagonizada por Tom Cruise",
            "El filme está basado ligeramente en los eventos de la Rebelión Satsuma",
            "En Japón tuvo una recepción extraordinaria y batió el récord de ser la película estadounidense más taquillera en ese país"
        ]
    },
    {
        title: ["El Guardaespaldas"],
        description: "Película romántica estrenada en 1992",
        audio: "audio/elguardaespaldas.mp3",
        hints: [
            "Protagonizada por Kevin Costner y Whitney Houston",
            "Se convirtió en la banda sonora más vendida de todos los tiempos",
            '"I will always love you"'
        ]
    },
    {
        title: ["La Misión"],
        description: "Película de drama histórico estrenada en 1986",
        audio: "audio/lamision.mp3",
        hints: [
            "Protagonizada por Robert De Niro, Jeremy Irons y Liam Neeson",
            "Tiene como telón de fondo el Tratado de Madrid (1750), entre España y Portugal",
            "Ganadora de un Óscar a la mejor fotografía"
        ]
    },
    {
        title: ["Dentro del Laberinto"],
        description: "Película fantástica estrenada en 1986",
        audio: "audio/dentrodellaberinto.mp3",
        hints: [
            "Dirigida por Jim Henson, como en el resto de sus películas, la mayoría de sus personajes están representados por títeres",
            "Protagonizada por Jennifer Connelly y David Bowie",
            "George Lucas produjo la película"
        ]
    },
    {
        title: ["Starman"],
        description: "Película de ciencia ficción estrenada en 1984",
        audio: "audio/starman.mp3",
        hints: [
            "Dirigida por John Carpenter",
            "Protagonizada por Jeff Bridges y Karen Allen",
            "La película inspiró una corta serie de televisión del mismo nombre estrenada en 1986"
        ]
    },
    {
        title: ["Pesadilla antes de Navidad", "Nightmare before Christmas", "The Nightmare before Christmas"],
        description: "Película de animación estrenada en 1993",
        audio: "audio/pesadillaantesdenavidad.mp3",
        hints: [
            'La película se rodó utilizando la técnica de animación de "stop motion"',
            "Producida por Tim Burton",
            "La banda sonora corre a cargo de Danny Elfman"
        ]
    },
    {
        title: ["John Wick"],
        description: "Película de acción estrenada en el año 2014",
        audio: "audio/johnwick.mp3",
        hints: [
            "Fue el inicio de una trilogía que se ha vuelto muy famosa",
            "Protagonizada por Keanu Reeves",
            '"Baba Yagá"'
        ]
    },
    {
        title: ["Pequeña Miss Sunshine"],
        description: "Película de comedia dramática estrenada en el año 2006",
        audio: "audio/pequeñamisssunshine.mp3",
        hints: [
            'Esta grabada en formato de "road movie"',
            "Fue el debut como directores en equipo de Jonathan Dayton y Valerie Faris",
            "Ganó dos Óscars"
        ]
    },
    {
        title: ["Los Ángeles de Charlie"],
        description: "Película de acción estrenada en el año 2000",
        audio: "audio/losangelesdecharlie.mp3",
        hints: [
            "Está basada en una serie de televisión de los años 70",
            "Protagonizada por Cameron Diaz, Lucy Liu y Drew Barrymore",
            "Tuvo una secuela en el año 2003"
        ]
    },
    {
        title: ["Una Mente Maravillosa"],
        description: "Película de drama biográfico estrenada en el año 2001",
        audio: "audio/unamentemaravillosa.mp3",
        hints: [
            "Está basada en la vida de John Forbes Nash, ganador del Premio Nobel de Economía en 1994",
            "Dirigida por Ron Howard",
            "Protagonizada por Russell Crowe, Jennifer Connelly, Paul Bettany y Ed Harris entre otros."
        ]
    },
    {
        title: ["Interstellar", "Interestelar", "Interestellar"],
        description: "Película de ciencia ficción estrenada en el año 2014",
        audio: "audio/interestelar.mp3",
        hints: [
            "Dirigida por Christopher Nolan",
            "Protagonizada por Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine y Matt Damon",
            "La banda sonora está creada por Hans Zimmer"
        ]
    },
    {
        title: ["Forrest Gump", "Forest Gump"],
        description: "Película dramática estrenada en el año 1994",
        audio: "audio/forrestgump.mp3",
        hints: [
            "Basada en la novela homónima del escritor Winston Groom",
            "Dirigida por Robert Zemeckis y protagonizada por Tom Hanks, la banda sonora es de Alan Silvestri",
            "Ganó 6 Óscars"
        ]
    },
    {
        title: ["Godzilla", "Godzila"],
        description: "Película de ciencia ficción estrenada en el año 1998",
        audio: "audio/godzilla.mp3",
        hints: [
            "Es un remake de una película japonesa",
            "Está protagonizada, entre otros, por Matthew Broderick y Jean Reno",
            "Es el rey de los monstruos"
        ]
    },
    {
        title: ["Erin Brockovich"],
        description: "Película dramática briográfica estrenada en el año 2000",
        audio: "audio/erinbrockovich.mp3",
        hints: [
            "Basada en una historia verídica",
            "Dirigida por Steven Soderbergh y producida por Danny DeVito",
            "Protagonizada por Julia Roberts y Aaron Eckhart"
        ]
    },
    {
        title: ["Pretty Woman"],
        description: "Película de comedia romántica estrenada en el año 1990",
        audio: "audio/prettywoman.mp3",
        hints: [
            "Protagonizada por Julia Roberts y Richard Gere",
            "Su canción principal fue realizada por Roy Orbison",
            "Fue dirigida por Garry Marshall"
        ]
    },
    {
        title: ["Ghost"],
        description: "Película de drama romántico estrenada en el año 1990",
        audio: "audio/ghost.mp3",
        hints: ["Protagonizada por Patrick Swayze y Demi Moore", "Ganó dos Óscars", '"Idem"']
    },
    {
        title: ["Dirty Dancing"],
        description: "Película romántica estrenada en el año 1987",
        audio: "audio/dirtydancing.mp3",
        hints: [
            "Protagonizada por Patrick Swayze y Jennifer Grey",
            "Ganó un Óscar a la mejor canción",
            "Tuvo una secuela horrible en 2004"
        ]
    },
    {
        title: [
            "De profesion: Duro (Road House)",
            "De profesión: Duro",
            "De profesión duro",
            "Road House",
            "Roadhouse"
        ],
        description: "Película de acción estrenada en el año 1989",
        audio: "audio/deprofesionduro.mp3",
        hints: [
            "Protagonizada por Patrick Swayze, Sam Elliott y Kelly Lynch",
            "La banda sonora cuenta con Jeff Healey",
            'Tuvo una secuela bajo el eslógan "Last Call"'
        ]
    },
    {
        title: ["Origen (Inception)", "Origen", "Inception", "Origen Inception"],
        description: "Película de ciencia ficción estrenada en el año 2010",
        audio: "audio/origen.mp3",
        hints: [
            "Escrita, producida y dirigida por Christopher Nolan",
            "Protagonizada por Leonardo DiCaprio, Ellen Page, Joseph Gordon-Levitt, Ken Watanabe, Tom Hardy, Marion Cotillard, Cillian Murphy, Tom Berenger y Michael Caine",
            "Obtuvo 4 Óscar"
        ]
    },
    {
        title: ["Little Nicky"],
        description: "Película de comedia estrenada en el año 2000",
        audio: "audio/littlenicky.mp3",
        hints: [
            "Escrita y protagonizada por Adam Sandler",
            "Ozzy Osbourne realiza un cameo",
            "Entre el reparto se encuentran actores como Patricia Arquette, Rhys Ifans, Harvey Keitel y Quentin Tarantino entre otros"
        ]
    },
    {
        title: ["Shrek"],
        description: "Película de animación estrenada en el año 2001",
        audio: "audio/shrek.mp3",
        hints: [
            "La película cuenta con las voces de Mike Myers, Cameron Diaz, Eddie Murphy y John Lithgow, entre otros",
            "La película ganó el Oscar a la Mejor Película de Animación",
            "El tema principal es de Smash Mouth"
        ]
    },
    {
        title: ["Million Dollar Baby"],
        description: "Película dramática estrenada en el año 2004",
        audio: "audio/milliondollarbaby.mp3",
        hints: [
            "Dirigida por Clint Eastwood, quien también participó en la producción, compuso la banda sonora e interpretó uno de los papeles principales",
            "Además de Eastwood, protagonizan la película Hilary Swank y Morgan Freeman",
            "Recibió 4 Óscar"
        ]
    },
    {
        title: ["The Raid (Redada Asesina)", "The Raid", "Redada Asesina", "La Redada Asesina"],
        description: "Película de acción y artes marciales estrenada en el año 2011",
        audio: "audio/theraid.mp3",
        hints: [
            "Escrita y dirigida por Gareth Evans",
            "Protagonizada por Iko Uwais",
            "Tiene una secuela lanzada en 2014"
        ]
    },
    {
        title: ["Sin City"],
        description: "Película de suspense y neo-noir estrenada en el año 2005",
        audio: "audio/sincity.mp3",
        hints: [
            "Dirigida por Robert Rodriguez, Frank Miller y Quentin Tarantino",
            "Son tres historias separadas que convergen por sus protagonistas, tuvo una secuela",
            "Protagonizada por Jessica Alba, Rosario Dawson, Benicio del Toro, Carla Gugino, Brittany Murphy, Clive Owen, Mickey Rourke, Bruce Willis y Elijah Wood"
        ]
    },
    {
        title: ["Big Fish"],
        description: "Película de drama fantástico estrenada en el año 2003",
        audio: "audio/bigfish.mp3",
        hints: [
            "Dirigida por Tim Burton",
            "Protagonizada por Ewan McGregor",
            "La película iba a ser dirigida por Steven Spielberg antes que Burton se encargara del proyecto"
        ]
    },
    {
        title: ["El Hobbit", "The Hobbit", "Hobbit"],
        description: "Trilogía épica de fantasía, acción y aventura estrenada entre los años 2012 y 2014",
        audio: "audio/elhobbit.mp3",
        hints: ["Dirigidas por Peter Jackson", "Basadas en un cuento de Tolkien", "La banda sonora es de Howard Shore"]
    },
    {
        title: ["Los Cazafantasmas", "Cazafantasmas", "Ghostbusters"],
        description: "Película de comedia y ciencia ficción estrenada en 1984",
        audio: "audio/loscazafantasmas.mp3",
        hints: [
            "Protagonizada por Bill Murray, Dan Aykroyd, Sigourney Weaver, Harold Ramis, Rick Moranis, Annie Potts, William Atherton y Ernie Hudson",
            "Su banda sonora fue compuesta por Elmer Bernstein",
            "Tuvo una secuela en 1989"
        ]
    },
    {
        title: ["Pokemon"],
        description: "Película de animación estrenada en 1998",
        audio: "audio/pokemon.mp3",
        hints: [
            "Basada en una famosa serie de anime que comenzó en 1996",
            "La película se compone de 3 segmentos",
            '"Pikachu!"'
        ]
    },
    {
        title: ["La casa de los 1000 cadaveres", "La Familia Firefly", "Los Firefly", "La casa de los mil cadáveres"],
        description: "Película de terror estrenada en 2003",
        audio: "audio/lacasadelos1000cadaveres.mp3",
        hints: ["Escrita y dirigida por Rob Zombie", "Supuso su debut como cineasta", "Protagonizada por Sheri Moon"]
    },
    {
        title: ["Abierto hasta el Amanecer", "From Dusk Till Dawn"],
        description: "Película de culto de acción, comedia negra y terror estrenada en 1996",
        audio: "audio/abiertohastaelamanecer.mp3",
        hints: [
            "Dirigida por Robert Rodriguez y escrita por Quentin Tarantino",
            "Está protagonizada por George Clooney, Quentin Tarantino, Harvey Keitel, Juliette Lewis, Salma Hayek, Danny Trejo y Tom Savini",
            "Su éxito se ha expandido, creando un universo que incluye dos secuelas, un cómic, canciones originales de ZZ Top, y una serie de televisión"
        ]
    },
    {
        title: ["Logan"],
        description: "Película dramática de superhéroes estrenada en 2017",
        audio: "audio/logan.mp3",
        hints: [
            "Protagonizada por Hugh Jackman y Patrick Stewart",
            "Basada en una serie de comics de Marvel",
            "En la campaña promocional se usó una canción de Johnny Cash"
        ]
    },
    {
        title: ["X-Men", "XMen", "X Men"],
        description: "Película de acción de superhéroes estrenada en 2000",
        audio: "audio/xmen.mp3",
        hints: [
            "Dirigida por Bryan Singer",
            "Entre los actores que participaron en la cinta se encuentran Patrick Stewart, Hugh Jackman, Ian McKellen, Halle Berry, Famke Janssen, James Marsden, Rebecca Romijn y Anna Paquin",
            "El éxito de la película dio origen a otras cintas basadas en superhéroes de Marvel"
        ]
    },
    {
        title: ["Los Miserables"],
        description: "Película de musical dramático estrenada en 2012",
        audio: "audio/losmiserables.mp3",
        hints: [
            "Es un remake de la cinta homónima del año 1998 y de una novela escrita por Victor Hugo",
            "El protagonista fue encarcelado 19 años por robar una barra de pan",
            "La protagonizan Hugh Jackman, Russell Crowe, Anne Hathaway, Amanda Seyfried y Eddie Redmayne"
        ]
    },
    {
        title: ["Grease"],
        description: "Película de musical estrenada en 1978",
        audio: "audio/grease.mp3",
        hints: [
            "La cinta está basada en el musical homónimo de 1972 creado por Jim Jacobs y Warren Casey",
            "Protagonizada por John Travolta y Olivia Newton-John",
            "Cuenta la historia de un amor rebelde"
        ]
    },
    {
        title: ["28 Días Despues"],
        description: "Película de terror estrenada en 2002",
        audio: "audio/28diasdespues.mp3",
        hints: ["Dirigida por Danny Boyle", "Está protagonizada por Cillian Murphy", "Es una película de zombies"]
    },
    {
        title: ["Alien"],
        description: "Película de terror y ciencia ficción estrenada en 1979",
        audio: "audio/alien.mp3",
        hints: [
            "Dirigida por Ridley Scott",
            "Está protagonizada por Sigourney Weaver",
            "Ganó un Óscar por sus efectos especiales"
        ]
    },
    {
        title: ["El Atlas de las Nubes"],
        description: "Película de ciencia ficción estrenada en 2012",
        audio: "audio/elatlasdelasnubes.mp3",
        hints: [
            "La película se compone de seis historias interrelacionadas",
            "Dirigida por las hermanas Wachowski",
            "Protagonizada por Tom Hanks, Halle Berry, Jim Broadbent, Hugo Weaving, Jim Sturgess, Doona Bae, Ben Whishaw, Hugh Grant y Susan Sarandon entre otros"
        ]
    },
    {
        title: ["Venganza", "Taken"],
        description: "Película de acción estrenada en 2008",
        audio: "audio/venganza.mp3",
        hints: [
            "Protagonizada por Liam Neeson",
            "Escrita por Luc Besson",
            "Esta basada en la obra literaria del mismo nombre del escritor de novelas de acción Tom Clancy"
        ]
    },
    {
        title: ["Indiana Jones"],
        description: "Saga de películas de acción y aventuras que se inició en 1981",
        audio: "audio/indianajones.mp3",
        hints: [
            "Protagonizada por Harrison Ford",
            "Dirigida por Steven Spielberg y producida por George Lucas",
            "Obtuvo cinco Óscars"
        ]
    },
    {
        title: ["Toy Story"],
        description: "Película de animación estrenada en 1995",
        audio: "audio/toystory.mp3",
        hints: [
            "Fue el primer largometraje de Pixar",
            "Fue la primera cinta animada completamente con efectos digitales en la historia del cine",
            "Son las aventuras de un grupo de juguetes"
        ]
    },
    {
        title: ["La joven del agua"],
        description: "Película fantástica estrenada en 2006",
        audio: "audio/lajovendelagua.mp3",
        hints: [
            "Protagonizada por Paul Giamatti y Bryce Dallas Howard",
            "Escrita y dirigida por M. Night Shyamalan",
            "Es una adaptación de un cuento de hadas que el propio director inventó para sus hijos"
        ]
    },
    {
        title: ["Deadpool"],
        description: "Película de acción de superhéroes estrenada en 2016",
        audio: "audio/deadpool.mp3",
        hints: [
            "Protagonizada por Ryan Reynolds",
            "La película empezó en 2004 pero tuvo muchísimos problemas hasta que consiguió estrenarse en 2016",
            "Es la historia de un personaje de Marvel"
        ]
    },
    {
        title: ["Evolution"],
        description: "Película de comedia estrenada en 2001",
        audio: "audio/evolution.mp3",
        hints: [
            "Protagonizada por David Duchovny, Julianne Moore, Orlando Jones y Seann William Scott",
            "Dirigida por Ivan Reitman",
            "Es la historia de una invasión alienigena"
        ]
    },
    {
        title: ["8 Millas", "8 Mile", "Ocho Millas"],
        description: "Película dramática estrenada en 2002",
        audio: "audio/8millas.mp3",
        hints: [
            "Protagonizada, entre otros, por Eminem, Kim Basinger y Brittany Murphy",
            "Ganó un Óscar a la mejor canción original",
            "Se dijo que estaba en parte inspirado en la vida de Eminem"
        ]
    },
    {
        title: ["Fast And Furious (A todo gas)", "Fast And Furious", "A Todo Gas"],
        description: "Saga de películas de acción que comenzó en 2001",
        audio: "audio/atodogas.mp3",
        hints: [
            "Protagonizadas, entre otros, por Vin Diesel y Paul Walker",
            "Han confirmado que serán 10 películas en total",
            "Los coches son muy importantes en esta saga..."
        ]
    },
    {
        title: ["Pitch Black"],
        description: "Película de ciencia ficción estrenada en el año 2000",
        audio: "audio/pitchblack.mp3",
        hints: [
            "Protagonizada por Vin Diesel",
            "Es la primera parte de una saga",
            "El protagonista puede ver en la oscuridad"
        ]
    },
    {
        title: ["Baby Driver"],
        description: "Película de acción estrenada en el año 2017",
        audio: "audio/babydriver.mp3",
        hints: [
            "Escrita y dirigida por Edgar Wright",
            "Está protagonizada por Ansel Elgort, Kevin Spacey, Lily James, Eiza González, Jon Hamm, Jamie Foxx, y Jon Bernthal",
            "El protagonista es forzado a trabajar para un mafioso"
        ]
    },
    {
        title: ["Drive"],
        description: "Película de suspense y neo-noir estrenada en el año 2011",
        audio: "audio/drive.mp3",
        hints: [
            "Protagonizada por Ryan Gosling",
            "Basada en el libro de título homónimo escrito por James Sallis",
            "Al final de los créditos se indica que la película es un tributo a Alejandro Jodorowsky"
        ]
    },
    {
        title: ["Blade Runner", "Bladerunner"],
        description: "Película de ciencia ficción y neo-noir estrenada en el año 1982",
        audio: "audio/bladerunner.mp3",
        hints: [
            "Dirigida por Ridley Scott",
            "Protagonizada por Harrison Ford y Rutger Hauer",
            "Está basada parcialmente en la novela de Philip K. Dick ¿Sueñan los androides con ovejas eléctricas? (1968)"
        ]
    },
    {
        title: ["Jupiter Ascending (El ascenso de Júpiter)", "Jupiter Ascending", "El ascenso de Júpiter"],
        description: "Película de ciencia ficción estrenada en el año 2015",
        audio: "audio/jupiterascending.mp3",
        hints: [
            "Escrita, producida y dirigida por las hermanas Wachowski",
            "Protagonizada por Mila Kunis y Channing Tatum entre otros",
            "Sean Bean y Eddie Redmayne también actúan en esta película"
        ]
    },
    {
        title: ["Hora Punta", "Rush Hour"],
        description: "Película de comedia y acción estrenada en el año 1998",
        audio: "audio/horapunta.mp3",
        hints: [
            "Fue el inicio de una trilogía",
            "Protagonizada Jackie Chan y Chris Tucker",
            "Dirigida por Brett Ratner"
        ]
    },
    {
        title: ["King Kong"],
        description: "Película de acción y ciencia ficción estrenada en el año 2005",
        audio: "audio/kingkong.mp3",
        hints: [
            "Es un remake de una película de 1933",
            "Protagonizada por Naomi Watts, Jack Black, Adrien Brody y Andy Serkis",
            "Dirigida por Peter Jackson"
        ]
    },
    {
        title: ["Saw"],
        description: "Saga de películas de terror que comenzó en 2004",
        audio: "audio/saw.mp3",
        hints: [
            "El director que comenzó toda la saga fue James Wan",
            "Tobin Bell protagonizó y abanderó la saga durante mucho tiempo",
            '"Quiero jugar a un juego"'
        ]
    },
    {
        title: ["Crepúsculo", "Twilight"],
        description: "Saga de películas de fantasía romántica que comenzó en 2008",
        audio: "audio/crepusculo.mp3",
        hints: [
            "Toda una generación ha quedado marcada por esta saga: algunos la adoran y otros la odian",
            "Basadas en las novelas de Stephenie Meyer",
            "Las estrellas de la película fueron Kristen Stewart, Robert Pattinson, y Taylor Lautner"
        ]
    },
    {
        title: ["Ocean's Eleven", "Oceans Eleven"],
        description: "Película de acción estrenada en 2001",
        audio: "audio/oceanseleven.mp3",
        hints: [
            "Dirigida por Steven Soderbergh",
            "Protagonizada por George Clooney, Brad Pitt, Matt Damon, Andy García y Julia Roberts",
            "Es una remake de la película homónima de 1960 dirigida por Lewis Milestone"
        ]
    },
    {
        title: ["Jungla de Cristal (Die Hard)", "Jungla de Cristal", "La Jungla de Cristal", "Die Hard"],
        description: "Película de acción estrenada en 1988",
        audio: "audio/jungladecristal.mp3",
        hints: [
            "Dirigida por John McTiernan",
            "Protagonizada por Bruce Willis y Alan Rickman",
            "Está basada en la novela Nothing Lasts Forever (1979) de Roderick Thorp, y dió inicio a una saga"
        ]
    },
    {
        title: ["Arma Letal"],
        description: "Película de acción estrenada en 1987",
        audio: "audio/armaletal.mp3",
        hints: [
            "Cuenta las aventuras de una pareja de detectives del departamento de policía de Los Ángeles",
            "Protagonizada por Mel Gibson y Danny Glover",
            "Esta película es la primera de una saga que cuenta con otras tres películas, todas protagonizadas por Gibson y Glover, y estrenadas en 1989, 1992 y 1998"
        ]
    },
    {
        title: ["Master And Commander", "Master & Commander"],
        description: "Película de aventuras estrenada en 2003",
        audio: "audio/masterandcommander.mp3",
        hints: [
            "Es una película basada en las populares novelas de Patrick O'Brian",
            "Protagonizada por Russell Crowe y Paul Bettany",
            "Ganó dos Óscar"
        ]
    },
    {
        title: ["Piratas del Caribe"],
        description: "Saga de películas de aventura que se inició en 2003",
        audio: "audio/piratasdelcaribe.mp3",
        hints: [
            "Las historias siguen las aventuras del Capitán Jack Sparrow",
            "Protagonizada por Johnny Depp, Orlando Bloom y Keira Knightley",
            '"Recordareis este día como el día en que casi capturais al capitán Jack Sparrow"'
        ]
    },
    {
        title: ["La Máscara"],
        description: "Película de comedia estrenada en 1994",
        audio: "audio/lamascara.mp3",
        hints: [
            "La cinta es una libre adaptación del cómic del mismo nombre creado por Mike Richardson para Dark Horse Comics",
            "Protagonizada por Jim Carrey y Cameron Diaz",
            '"Chisssspeante"'
        ]
    },
    {
        title: ["Armageddon", "Armagedon", "Armaggedon", "Armaggeddon"],
        description: "Película de ciencia ficción estrenada en 1998",
        audio: "audio/armageddon.mp3",
        hints: [
            "Dirigida por Michael Bay",
            "Protagonizada por Bruce Willis, Billy Bob Thornton, Ben Affleck, Liv Tyler, Owen Wilson, Will Patton, Michael Clarke Duncan, Peter Stormare y Steve Buscemi",
            "Steven Tyler participó en la banda sonora de la película con su grupo Aerosmith"
        ]
    },
    {
        title: ["Spider-man", "Spiderman", "Spider man"],
        description: "Película de superhéroes estrenada en 2002",
        audio: "audio/spiderman.mp3",
        hints: [
            "Dirigida por Sam Raimi",
            "Fue la primera de una trilogía, protagonizada por Tobey Maguire",
            "Está basada en un personaje de Marvel"
        ]
    },
    {
        title: ["Men In Black", "MIB", "Los Hombres de Negro", "Hombres de Negro"],
        description: "Película de ciencia ficción estrenada en 1997",
        audio: "audio/meninblack.mp3",
        hints: [
            "Protagonizada por Tommy Lee Jones y Will Smith",
            "Ganó un Óscar por Mejor Maquillaje",
            "Fue el inicio de una saga"
        ]
    },
    {
        title: ["Dune"],
        description: "Película de ciencia ficción estrenada en 1984",
        audio: "audio/dune.mp3",
        hints: [
            "Dirigida por David Lynch y basada en la novela homónima de Frank Herbert",
            "Tiene lugar en el desértico planeta Arrakis",
            "Protagonizada por Kyle MacLachlan"
        ]
    },
    {
        title: ["Pesadilla en Elm Street"],
        description: "Película de terror estrenada en 1984",
        audio: "audio/pesadillaenelmstreet.mp3",
        hints: [
            "Protagonizada por Robert Englund junto con Heather Langenkamp, John Saxon y Johnny Depp",
            "Escrita y dirigida por Wes Craven",
            "Dió pie a una saga de 9 películas"
        ]
    },
    {
        title: ["Speed"],
        description: "Película de acción estrenada en 1994",
        audio: "audio/speed.mp3",
        hints: [
            "Protagonizada por Keanu Reeves, Sandra Bullock y Dennis Hopper",
            "Ganó dos premios Óscar",
            "La trama tiene lugar en su mayoría en un autobús"
        ]
    },
    {
        title: ["Resident Evil"],
        description: "Película de suspenso y acción estrenada en 2002",
        audio: "audio/residentevil.mp3",
        hints: [
            "Dirigida por Paul W. S. Anderson",
            "Protagonizada por Milla Jovovich",
            "Basada en un videojuego de Capcom de 1996"
        ]
    },
    {
        title: ["James Bond", "007"],
        description: "Saga de películas de acción y espionaje iniciada en 1962",
        audio: "audio/jamesbond.mp3",
        hints: [
            "Basada en uno de los personajes de Ian Fleming",
            "Es la serie continua de películas más larga en la historia del cine",
            "En todo este tiempo ha habido seis actores que han hecho el papel del protagonista"
        ]
    },
    {
        title: ["Sherlock Holmes"],
        description: "Película de acción, suspense y aventuras estrenada en 2009",
        audio: "audio/sherlockholmes.mp3",
        hints: [
            "Basada en el personaje original de Sir Arthur Conan Doyle",
            "Tuvo una secuela en el año 2011",
            "Dirigida por Guy Ritchie y protagonizada por Robert Downey Jr. y Jude Law"
        ]
    },
    {
        title: ["Lo que el viento se llevó"],
        description: "Película romántica histórica estrenada en 1939",
        audio: "audio/loqueelvientosellevo.mp3",
        hints: [
            "Adaptación de la novela homónima de 1936 de Margaret Mitchell",
            "Dirigida por Victor Fleming",
            "Ganó ocho Óscar"
        ]
    },
    {
        title: ["El Padrino", "The Godfather"],
        description: "Película dramática estrenada en 1972",
        audio: "audio/elpadrino.mp3",
        hints: ["Dirigida por Francis Ford Coppola", "Protagonizada por Marlon Brando", "Ganó tres Óscar"]
    },
    {
        title: ["Space Jam"],
        description: "Película de animación y aventuras estrenada en 1996",
        audio: "audio/spacejam.mp3",
        hints: [
            "Combina acción real y dibujos animados",
            "Fue protagonizada por el jugador de baloncesto Michael Jordan y por los dibujos animados de la Warner Bros., los Looney Tunes",
            "Es la primera película de larga duración de los Looney Tunes"
        ]
    },
    {
        title: ["La Momia", "The Mummy"],
        description: "Película de aventuras estrenada en 1999",
        audio: "audio/lamomia.mp3",
        hints: [
            "Rodada, escrita y dirigida por Stephen Sommers",
            "Interpretada por Brendan Fraser, Rachel Weisz, John Hannah, Oded Fehr y Kevin J. O'Connor, con Arnold Vosloo en el papel del villano",
            "Jerry Goldsmith compuso la banda sonora"
        ]
    },
    {
        title: ["Maverick"],
        description: "Película western estrenada en 1994",
        audio: "audio/maverick.mp3",
        hints: [
            "Interpretada por Mel Gibson, Jodie Foster, James Garner, Alfred Molina y James Coburn",
            "Dirigida por Richard Donner",
            "Basada en la serie de televisión homónima de las décadas de 1950 y 1960"
        ]
    },
    {
        title: ["60 Segundos", "sesenta segundos"],
        description: "Película de acción estrenada en el año 2000",
        audio: "audio/60segundos.mp3",
        hints: [
            "Dirigida por Dominic Sena y escrita por Scott Rosenberg como una adaptación de una película de 1974 del mismo nombre",
            "Protagonizada por Nicolas Cage, Angelina Jolie y Robert Duvall",
            "Los coches son importantes ene sta película... Y el tiempo..."
        ]
    },
    {
        title: ["Orgullo y Prejuicio"],
        description: "Película romántica estrenada en el año 2005",
        audio: "audio/orgulloyprejuicio.mp3",
        hints: [
            "Basada en la novela homónima de Jane Austen publicada en 1813",
            "Dirigida por Joe Wright",
            "Protagonizada por Keira Knightley, Matthew Macfadyen, Tom Hollander, Rosamund Pike, Carey Mulligan, Jena Malone y Donald Sutherland entre otros"
        ]
    },
    {
        title: ["Loca Academia de Policía"],
        description: "Película de comedia estrenada en el año 1984",
        audio: "audio/locaacademiadepolicia.mp3",
        hints: [
            "Protagonizada por Steve Guttenberg, Kim Cattrall, David Graf y G. W. Bailey",
            "Dirigida por Hugh Wilson",
            "Tuvo seis secuelas y una serie de televisión"
        ]
    },
    {
        title: ["El Equipo A", "Equipo A"],
        description: "Película de acción estrenada en el año 2010",
        audio: "audio/elequipoa.mp3",
        hints: [
            "Basada en la serie de los 80 del mismo nombre",
            "Producida por Tony Scott y Ridley Scott",
            "Protagonizada por Liam Neeson, Bradley Cooper, Quinton Jackson y Sharlto Copley"
        ]
    },
    {
        title: ["Comando", "Commando"],
        description: "Película de acción estrenada en el año 1985",
        audio: "audio/comando.mp3",
        hints: [
            "Protagonizada por Arnold Schwarzenegger y Alyssa Milano",
            "Está considerada como uno de los pilares del cine de acción",
            "Durante la película se puede escuchar claramente una canción de los Rolling Stones"
        ]
    },
    {
        title: ["Mary Poppins"],
        description: "Película musical de fantasía estrenada en el año 1964",
        audio: "audio/marypoppins.mp3",
        hints: [
            "Dirigida por Robert Stevenson",
            "Con canciones escritas por los hermanos Sherman",
            "Está protagonizada por Julie Andrews"
        ]
    },
    {
        title: ["La Búsqueda"],
        description: "Película de aventuras y thriller estrenada en el año 2004",
        audio: "audio/labusqueda.mp3",
        hints: [
            "Protagonizada por Nicolas Cage y Diane Kruger",
            "Tuvo una secuela en el año 2007",
            "La historia se centra en Benjamin Franklin Gates"
        ]
    },
    {
        title: ["Las Tortugas Ninja"],
        description: "Película de aventuras estrenada en el año 1990",
        audio: "audio/lastortugasninja.mp3",
        hints: [
            "Basada en una popular serie de televisión y cómic homónimos",
            "Fue el film independiente más taquillero de todos los tiempos, hasta que The Blair Witch Project lo superó",
            "Tuvo dos secuelas"
        ]
    },
    {
        title: ["Los Picapiedra (The Flintstones)", "Los Picapiedra", "The Flintstones"],
        description: "Película de aventuras estrenada en el año 1994",
        audio: "audio/lospicapiedra.mp3",
        hints: [
            "Es una versión en imagen real de la serie homónima de animación que se emitió por televisión entre 1960 y 1966",
            "Protagoniza por John Goodman entre otros",
            "La película acaba con una versión en imagen real de los títulos de crédito originales de la serie animada"
        ]
    },
    {
        title: ["Drácula, de Bram Stoker", "Drácula", "Drácula de Bram Stoker"],
        description: "Película de terror y romance estrenada en el año 1992",
        audio: "audio/dracula.mp3",
        hints: [
            "Dirigida por Francis Ford Coppola",
            "Fue protagonizada por Gary Oldman, Winona Ryder, Keanu Reeves y Antony Hopkins",
            "Obtuvo cuatro Óscar"
        ]
    },
    {
        title: ["XXX"],
        description: "Película de acción estrenada en el año 2002",
        audio: "audio/xxx.mp3",
        hints: ["Dirigida por Rob Cohen", "Fue protagonizada por Vin Diesel y Samuel L. Jackson", "Tuvo dos secuelas"]
    },
    {
        title: ["Desperado"],
        description: "Película de acción estrenada en el año 1995",
        audio: "audio/desperado.mp3",
        hints: [
            "Escrita y dirigida por Robert Rodriguez",
            "Fue protagonizada por Antonio Banderas y Salma Hayek",
            "Es la segunda parte de una trilogía"
        ]
    },
    {
        title: ["E.T. El Extraterrestre", "ET", "ET El Extraterrestre", "E.T."],
        description: "Película de ciencia ficción estrenada en el año 1982",
        audio: "audio/et.mp3",
        hints: [
            "Dirigida por Steven Spielberg",
            "La cinta está basada en un amigo imaginario del propio director, creado tras el divorcio de sus padres",
            "John Williams es el creador de la banda sonora"
        ]
    },
    {
        title: ["El Pacto de los Lobos"],
        description: "Película de suspense y acción estrenada en el año 2001",
        audio: "audio/elpactodeloslobos.mp3",
        hints: [
            "Es una película francesa dirigida por Christophe Gans",
            "Basada en el año 1765",
            "Un investigador es enviado para acabar con una bestia"
        ]
    },
    {
        title: ["Salvar al soldado Ryan"],
        description: "Película bélica épica estrenada en el año 1998",
        audio: "audio/salvaralsoldadoryan.mp3",
        hints: [
            "Ambientada en la invasión de Normandía durante la Segunda Guerra Mundial",
            "Dirigida por Steven Spielberg",
            "Protagonizada por Tom Hanks, Tom Sizemore, Edward Burns, Barry Pepper, Vin Diesel, Giovanni Ribisi, Adam Goldberg y Jeremy Davies"
        ]
    },
    {
        title: ["El Patriota"],
        description: "Película bélica estrenada en el año 2000",
        audio: "audio/elpatriota.mp3",
        hints: [
            "Dirigida por Roland Emmerich",
            "Protagonizada por Mel Gibson y Heath Ledger",
            "Representa la historia de un estadounidense arrastrado a la Revolución estadounidense cuando su familia es amenazada"
        ]
    },
    {
        title: ["Gangs Of New York"],
        description: "Película de drama histórico estrenada en el año 2002",
        audio: "audio/gangsofnewyork.mp3",
        hints: [
            "Dirigida por Martin Scorsese",
            "Protagonizada por Daniel Day-Lewis y Leonardo DiCaprio",
            "Ambientada durante la mitad del siglo XIX en el barrio de Five Points de Nueva York"
        ]
    },
    {
        title: ["Cadena Perpetua"],
        description: "Película de drama estrenada en el año 1994",
        audio: "audio/cadenaperpetua.mp3",
        hints: [
            "Protagonizada por Tim Robbins y Morgan Freeman",
            "Basada en una novela corta de Stephen King",
            "El film abarca una mirada optimista de la vida, contando la historia de dos amigos en una prisión"
        ]
    },
    {
        title: ["American Beauty"],
        description: "Película de drama estrenada en el año 1999",
        audio: "audio/americanbeauty.mp3",
        hints: [
            "Dirigida por Sam Mendes",
            "Protagonizada por Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley, Mena Suvari y Chris Cooper",
            "Ganó cinco premios Óscar"
        ]
    },
    {
        title: ["Malditos Bastardos"],
        description: "Película de drama bélico estrenada en el año 2009",
        audio: "audio/malditosbastardos.mp3",
        hints: [
            "Escrita y dirigida por Quentin Tarantino",
            "Protagonizada por Brad Pitt, Christoph Waltz y Mélanie Laurent",
            "La película es una ficción ucrónica sobre la Alemania nazi"
        ]
    },
    {
        title: ["La Gran Evasión"],
        description: "Película bélica estrenada en el año 1963",
        audio: "audio/lagranevasion.mp3",
        hints: [
            "Protagonizada por Steve McQueen",
            "Basada en los hechos sucedidos en el campo de prisioneros de guerra de Stalag",
            "Es una adaptación del libro homónimo de 1944 escrito por Paul Brickhill"
        ]
    },
    {
        title: ["La delgada linea roja"],
        description: "Película bélica estrenada en el año 1998",
        audio: "audio/ladelgadalinearoja.mp3",
        hints: [
            "La película narra la historia de las tropas militares estadounidenses en la Batalla de Guadalcanal en la Segunda Guerra Mundial",
            "Su banda sonora es de Hans Zimmer",
            "El reparto coral lo forman un considerable número de reconocidos actores: Sean Penn, Adrien Brody, Jim Caviezel, Ben Chaplin, George Clooney, John Cusack, Woody Harrelson, Elias Koteas, Jared Leto, Dash Mihok, Tim Blake Nelson, Nick Nolte, John C. Reilly, Nick Stahl, John Travolta, Thomas Jane, Randall Duk Kim, Miranda Otto y John Savage"
        ]
    },
    {
        title: ["Los Goonies"],
        description: "Película de culto de aventuras estrenada en el año 1985",
        audio: "audio/losgoonies.mp3",
        hints: [
            "Basada en una historia de Steven Spielberg",
            "La película relata el viaje de un grupo de niños amigos en busca de un tesoro perdido",
            "Protagonizada por Sean Astin, Josh Brolin, Jeff Cohen, Jonathan Ke Quan, Corey Feldman, Kerri Green y Martha Plimpton"
        ]
    },
    {
        title: [
            "Birdman o (la inexperada virtud de la ignorancia)",
            "Birdman",
            "La inexperada virtud de la ignorancia",
            "Birdman o la inexperada virtud de la ignorancia"
        ],
        description: "Película de humor negro estrenada en el año 2014",
        audio: "audio/birdman.mp3",
        hints: [
            "Dirigida por Alejandro González Iñárritu",
            "Protagonizada por Michael Keaton, Emma Stone, Edward Norton, Andrea Riseborough, Zach Galifianakis, Naomi Watts y Amy Ryan",
            "La película está rodada en un único plano secuencia"
        ]
    },
    {
        title: ["Mad Max: Fury Road", "Mad Max", "Fury Road", "Mad Max Fury Road", "Mad Max Furia en la Carretera", "Furia en la Carretera"],
        description: "Película de acción post-apocalíptica estrenada en el año 2015",
        audio: "audio/madmaxfuryroad.mp3",
        hints: [
            "Dirigida, producida y coescrita por George Miller",
            "Protagonizada por Tom Hardy junto a Charlize Theron",
            "Ganadora de seis premios Óscar"
        ]
    },
    {
        title: ["La Princesa Prometida"],
        description: "Película de aventuras estrenada en el año 1987",
        audio: "audio/laprincesaprometida.mp3",
        hints: [
            "Dirigida por Rob Reiner",
            "Protagonizada por Cary Elwes, Robin Wright, Chris Sarandon, Mandy Patinkin, Wallace Shawn, Christopher Guest y André el Gigante",
            "Está basada en el libro homónimo de 1973, escrito por William Goldman"
        ]
    },
    {
        title: ["Memorias de África"],
        description: "Película de aventuras romántica estrenada en el año 1985",
        audio: "audio/memoriasdeafrica.mp3",
        hints: [
            "Dirigida por Sydney Pollack",
            "Protagonizada por Meryl Streep y Robert Redford",
            "Está basada en el libro autobiográfico de la escritora danesa Karen Blixen"
        ]
    },
    {
        title: ["Carros de Fuego"],
        description: "Película de drama histórico y deportivo estrenada en el año 1981",
        audio: "audio/carrosdefuego.mp3",
        hints: [
            "Basada en la historia real de los atletas británicos preparándose para competir en los Juegos Olímpicos de París 1924",
            "Vangelis es el creador de la banda sonora",
            "Ganó cuatro Óscars"
        ]
    },
    {
        title: ["El Castigador (The Punisher)", "Punisher", "El Castigador", "The Punisher", "Castigador"],
        description: "Película de superhéroes, acción y drama estrenada en el año 2004",
        audio: "audio/thepunisher.mp3",
        hints: [
            "Protagonizada por Thomas Jane y John Travolta",
            "Basada en un personaje de Marvel",
            "Es un reboot de la película de 1989 protagonizada por Dolph Lundgren"
        ]
    },
    {
        title: ["Solo en casa"],
        description: "Película de comedia familiar estrenada en el año 1990",
        audio: "audio/soloencasa.mp3",
        hints: [
            "Dirigida por Chris Columbus",
            "Protagonizada por Macaulay Culkin, Joe Pesci, Daniel Stern, Catherine O'Hara, Roberts Blossom, John Heard y John Candy",
            "La banda sonora es de John Williams"
        ]
    },
    {
        title: ["El último gran heroe"],
        description: "Película de culto de acción estrenada en el año 1993",
        audio: "audio/elultimogranheroe.mp3",
        hints: [
            "Dirigida por John McTiernan",
            "La película está protagonizada por Arnold Schwarzenegger",
            "La banda sonora es de Michael Kamen"
        ]
    },
    {
        title: ["El hombre de la máscara de hierro"],
        description: "Película dramática y de ficción histórica estrenada en el año 1998",
        audio: "audio/elhombredelamascaradehierro.mp3",
        hints: [
            "Interpretada por Leonardo DiCaprio, Jeremy Irons, John Malkovich, Gabriel Byrne, Gérard Depardieu y Anne Parillaud",
            "Está basada en la obra El vizconde de Bragelonne de Alexandre Dumas",
            'Cuando los ciudadanos de Francia sublevados destruyeron la Bastilla, descubrieron entre sus archivos esta misteriosa entrada: "Prisionero número 64389000..."'
        ]
    },
    {
        title: ["Bailando con lobos"],
        description: "Película dramática y de aventuras estrenada en el año 1990",
        audio: "audio/bailandoconlobos.mp3",
        hints: [
            "Dirigida y protagonizada por Kevin Costner",
            "Está basada en la novela homónima de Michael Blake",
            "Recibió siete premios Óscar"
        ]
    },
    {
        title: ["American History X"],
        description: "Película dramática estrenada en el año 1998",
        audio: "audio/americanhistoryx.mp3",
        hints: [
            "Dirigida por Tony Kaye",
            "Protagonizada por Edward Norton y Edward Furlong",
            "Para rodar la película, Edward Norton ganó 14 kg de masa muscular"
        ]
    },
    {
        title: ["300", "Trescientos"],
        description: "Película épica de acción estrenada en el año 2006",
        audio: "audio/300.mp3",
        hints: [
            "Dirigida por Zack Snyder",
            "Es la adaptación cinematográfica de la serie limitada de cómics del mismo nombre de Frank Miller",
            "Protagonizada por Gerard Butler"
        ]
    },
    {
        title: ["El gran Stan (Big Stan)", "El gran Stan", "Big Stan", "Gran Stan"],
        description: "Película de comedia estrenada en el año 2007",
        audio: "audio/granstan.mp3",
        hints: [
            "Dirigida e interpretada por Rob Schneider",
            "Trata sobre un agente inmobiliario estafador al le que entra el pánico cuando se entera de que va a la cárcel por fraude",
            "David Carradine tiene un papel"
        ]
    },
    {
        title: ["La vida es bella"],
        description: "Película dramática estrenada en el año 1997",
        audio: "audio/lavidaesbella.mp3",
        hints: [
            "Escrita, dirigida y protagonizada por Roberto Benigni",
            "Ganó tres Óscar",
            "La historia está parcialmente basada en la experiencia real de Rubino Romeo Salmoni, uno de los pocos judíos que pudo sobrevivir al Holocausto Nazi"
        ]
    },
    {
        title: ["Flashdance"],
        description: "Película romántica estrenada en el año 1983",
        audio: "audio/flashdance.mp3",
        hints: [
            "Protagonizada por Jennifer Beals y Michael Nouri",
            "Es considerada un clásico de la década de los 80",
            "Su presentación de algunas secuencias siguiendo lineamientos propios de los videos musicales influyeron a otras películas de la época"
        ]
    },
    {
        title: ["Footloose"],
        description: "Película romántica estrenada en el año 1984",
        audio: "audio/footloose.mp3",
        hints: [
            "Protagonizada por Kevin Bacon, Lori Singer, Dianne Wiest, John Lithgow y Frances Lee McCain",
            "Ligeramente inspirada en hechos reales ocurridos en la pequeña comunidad rural religiosa de Elmore City, Oklahoma",
            "La banda sonora es de Tom Snow"
        ]
    },
    {
        title: ["Lady Halcón", "Ladyhawke"],
        description: "Película de fantasía, romance y aventura estrenada en el año 1985",
        audio: "audio/ladyhalcon.mp3",
        hints: [
            "Está protagonizada por Matthew Broderick, Rutger Hauer y Michelle Pfeiffer",
            "Relata la historia de un amor trágico entre dos personas que no pueden estar juntas a causa de un terrible hechizo",
            "Podríamos decir que en realidad The Alan Parsons Project fue la banda que realizó todo el trabajo de la banda sonora"
        ]
    },
    {
        title: ["Ace Ventura"],
        description: "Película de comedia estrenada en el año 1994",
        audio: "audio/aceventura.mp3",
        hints: [
            "Está protagonizada por Jim Carrey",
            "Jim Carrey interpreta a un detective de mascotas un tanto excéntrico",
            "Cannibal Corpse aparece tocando un tema durante la película debido a su amistad con Jim Carrey"
        ]
    },
    {
        title: ["The Watchmen", "Watchmen"],
        description: "Película de acción, drama y ciencia ficción estrenada en el año 2009",
        audio: "audio/watchmen.mp3",
        hints: [
            "Dirigida por Zack Snyder",
            "Adaptación fílmica de la serie limitada de cómics homónima, escrita y dibujada por Alan Moore y Dave Gibbons",
            "Es protagonizada por Jackie Earle Haley, Patrick Wilson, Malin Akerman, Billy Crudup, Jeffrey Dean Morgan, Matthew Goode, Stephen McHattie y Carla Gugino"
        ]
    },
    {
        title: [
            "Masters del Universo",
            "He-Man y los Masters del Universo",
            "HeMan y los Masters del Universo",
            "He Man y los Masters del Universo"
        ],
        description: "Película de culto de acción y fantasía estrenada en el año 1987",
        audio: "audio/mastersdeluniverso.mp3",
        hints: [
            "Protagonizada por Dolph Lundgren, Frank Langella, Jon Cypher, Chelsea Field, Billy Barty y Courteney Cox",
            "Adaptación fílmica de la serie homónima emitida desde 1983 hasta 1985",
            '"Yo tengo el poder!"'
        ]
    },
    {
        title: ["Stardust"],
        description: "Película de fantasía estrenada en el año 2007",
        audio: "audio/stardust.mp3",
        hints: [
            "Dirigida por Matthew Vaughn",
            "Está basada en la novela de mismo título, escrita por Neil Gaiman",
            "Narrada por Ian McKellen, la película está protagonizada por un reparto coral compuesto por Claire Danes, Charlie Cox, Michelle Pfeiffer, Robert De Niro, Sienna Miller, Rupert Everett, Ricky Gervais, Nathaniel Parker, Peter O'Toole, David Kelly, Ben Barnes y Mark Heap"
        ]
    },
    {
        title: [
            "Zohan: Licencia para peinar",
            "El Zohan",
            "Zohan",
            "Licencia para peinar",
            "Zohan licencia para peinar"
        ],
        description: "Película de comedia estrenada en el año 2008",
        audio: "audio/zohan.mp3",
        hints: [
            "El guion fue escrito por Adam Sandler",
            "El protagonista finge su propia muerte tratando de alcanzar su sueño: convertirse en estilista",
            "Protagonizada por Adam Sadler y John Turturro"
        ]
    },
    {
        title: ["La caza del Octubre Rojo"],
        description: "Película bélica estrenada en el año 1990",
        audio: "audio/lacazadeloctubrerojo.mp3",
        hints: [
            "Fue la primera adaptación cinematográfica del Dr. Jack Ryan, interpretado por Alec Baldwin",
            "El papel protagonista se ve eclipsado por la interpretación por parte de Sean Connery como Marko Ramius",
            "Ganó un Óscar por sus efectos de sonido"
        ]
    },
    {
        title: ["Demolition Man"],
        description: "Película de acción y ciencia ficción estrenada en el año 1993",
        audio: "audio/demolitionman.mp3",
        hints: [
            "Protagonizada por Sylvester Stallone, Wesley Snipes y Sandra Bullock",
            "La acción tiene lugar en el año 2032 en Los Ángeles",
            "La película esta basada libremente en la novela Un mundo feliz de Aldous Huxley"
        ]
    },
    {
        title: ["Scream"],
        description: "Película slasher estrenada en el año 1996",
        audio: "audio/scream.mp3",
        hints: [
            "Dirigida por Wes Craven",
            "La película está protagonizada por un elenco conformado por Neve Campbell, David Arquette y Courteney Cox",
            "Al misterioso asesino se le conoce como Ghostface"
        ]
    },
    {
        title: ["Atlantis: El imperio perdido", "Atlantis", "Atlantis el imperio perdido"],
        description: "Película animada de tipo steampunk estrenada en el año 2001",
        audio: "audio/atlantis.mp3",
        hints: [
            "Está basada en la historia de los hermanos Bryze y Jackie Zabel",
            "El guión es de Joss Whedon",
            "Tuvo una secuela directa a dvd en el 2003"
        ]
    },
    {
        title: ["El Mago de Oz"],
        description: "Película musical fantástica estrenada en el año 1939",
        audio: "audio/elmagodeoz.mp3",
        hints: [
            "Protagonizada por Judy Garland, Frank Morgan, Ray Bolger, Jack Haley, Bert Lahr, Billie Burke y Margaret Hamilton",
            "En la actualidad, es considerada una película de culto, a pesar de su proyecto inicial como fábula cinematográfica infantil",
            "Dirigida por Victor Fleming"
        ]
    },
    {
        title: ["Frozen"],
        description: "Película de animación estrenada en el año 2013",
        audio: "audio/frozen.mp3",
        hints: [
            "Ganadora de dos premios Óscar",
            "Inspirada en la historia de La reina de las nieves de Hans Christian Andersen",
            "Con las voces de Kristen Bell, Idina Menzel, Jonathan Groff, Santino Fontana y Josh Gad"
        ]
    },
    {
        title: ["Dredd (Juez Dredd)", "Dredd", "Juez Dredd", "El Juez Dredd"],
        description: "Película de acción y ciencia ficción estrenada en el año 2012",
        audio: "audio/dredd.mp3",
        hints: [
            "Remake de la película homónima protagonizada por Sylvester Stallone en el año 1995",
            "Inspirada en una serie de comics",
            "Protagonizada por Karl Urban y Lena Headey"
        ]
    },
    {
        title: ["2001: Una Odisea en el Espacio", "2001", "2001 una Odisea en el Espacio"],
        description: "Película de culto de ciencia ficción estrenada en el año 1968",
        audio: "audio/2001.mp3",
        hints: [
            "Dirigida por Stanley Kubrick",
            "Marcó un hito por su estilo de comunicación visual, sus revolucionarios efectos especiales, su realismo científico y sus proyecciones vanguardistas",
            "El guion fue escrito por el propio Kubrick y por el novelista Arthur C. Clarke, basándose en un cuento de este último titulado El centinela, escrito en 1948"
        ]
    },
    {
        title: ["You're Next (Eres el siguiente)", "You're Next", "You are next", "Eres el siguiente"],
        description: "Película de terror estrenada en el año 2013",
        audio: "audio/youarenext.mp3",
        hints: [
            "Protagonizada por Sharni Vinson, Nicholas Tucci, Wendy Glenn, A.J. Bowen y Joe Swanberg",
            "La película tuvo su estreno mundial en el Programa Madness de Medianoche del Festival Internacional de Cine de Toronto 2011",
            "Los villanos llevan máscaras de animales"
        ]
    },
    {
        title: ["Hero (Héroe)", "Hero", "Héroe"],
        description: "Película dramática de artes marciales estrenada en el año 2002",
        audio: "audio/hero.mp3",
        hints: [
            "Protagonizada Jet Li",
            "Es un film del género wuxia (héroes de las artes marciales)",
            "Quentin Tarantino intervino para que se estrenara"
        ]
    },
    {
        title: ["Tiempo de matar"],
        description: "Película de thriller, suspense y drama estrenada en el año 1996",
        audio: "audio/tiempodematar.mp3",
        hints: [
            "Fue protagonizada por Sandra Bullock, Samuel L. Jackson, Matthew McConaughey y Kevin Spacey",
            "Dirigida por Joel Schumacher",
            "Está basada en la novela de John Grisham de título homónimo"
        ]
    },
    {
        title: ["El Lobo de Wall Street"],
        description: "Película biográfica y de comedia negra estrenada en el año 2013",
        audio: "audio/ellobodewallstreet.mp3",
        hints: [
            "Dirigida por Martin Scorsese",
            "Basada en las memorias del mismo nombre de Jordan Belfort",
            "Protagonizada por Leonardo DiCaprio como Belfort, junto a Jonah Hill, Margot Robbie, Jean Dujardin, Rob Reiner, Kyle Chandler y Matthew McConaughey, entre otros"
        ]
    },
    {
        title: ["The Revenant (El Renacido)", "The Revenant", "El Renacido"],
        description: "Película de drama y acción estrenada en el año 2016",
        audio: "audio/therevenant.mp3",
        hints: [
            "Dirigida por Alejandro González Iñárritu, ganó tres Óscar",
            "Está basada en un personaje histórico, Hugh Glass, trampero y explorador de inicios del siglo XIX",
            "Los protagonistas son Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson y Will Poulter"
        ]
    },
    {
        title: ["Bohemian Rhapsody"],
        description: "Película biográfica estrenada en el año 2018",
        audio: "audio/bohemianrhapsody.mp3",
        hints: [
            "Trata sobre el cantante británico Freddie Mercury y el grupo de rock Queen",
            "El guion fue escrito por Anthony McCarten y fue producida por Graham King y Jim Beach, antiguo mánager de Queen",
            "Está protagonizada por Rami Malek, Gwilym Lee, Ben Hardy y Joseph Mazzello"
        ]
    },
    {
        title: ["Le llaman Bodhi (Point Break)", "Point Break", "Le llaman Bodhi"],
        description: "Película de acción estrenada en el año 1991",
        audio: "audio/lellamanbodhi.mp3",
        hints: [
            "Protagonizada por Patrick Swayze y Keanu Reeves",
            "En la actualidad esta considerada como una película de culto",
            "Tuvo un remake horrible en el año 2015"
        ]
    },
    {
        title: ["Romeo Y Julieta", "Romeo + Juliet", "Romeo + Julieta"],
        description: "Película de drama y romance estrenada en el año 1996",
        audio: "audio/romeoyjulieta.mp3",
        hints: [
            "Basada en una obra de William Shakespeare",
            "Protagonizada por Leonardo DiCaprio y Claire Danes",
            "Se llevó la historia a un marco temporal actual"
        ]
    },
    {
        title: ["Titanic"],
        description: "Película de drama y romance estrenada en el año 1997",
        audio: "audio/titanic.mp3",
        hints: [
            "Dirigida y escrita por James Cameron",
            "Protagonizada por Leonardo DiCaprio y Kate Winslet",
            "Ganó once premios Óscar"
        ]
    },
    {
        title: ["Tuno Negro", "El Tuno Negro"],
        description: "Pelicula de terror estrenada en 2001.",
        audio: "audio/tunonegro.mp3",
        hints: [
            "Fue filmada principalmente en Salamanca.",
            "Nescencia Necat.",
            "Se basa en una leyenda urbana para mostrar la existencia de un asesino en serie que acaba con estudiantes universitarios."
        ]
    },
    {
        title: ["Kill Bill"],
        description: "Pelicula de acción y suspenso constituida por dos partes estrenadas en el año 2003 y 2004.",
        audio: "audio/killbill.mp3",
        hints: [
            "Es una historia presentada en 10 capítulos, 5 por volumen, de manera no lineal.",
            "Protagonizada por Uma Thurman y David Carradine junto a Lucy Liu, Michael Madsen, Daryl Hannah y Julie Dreyfus entre otros.",
            "Cinco puntos de presión para explotar un corazón."
        ]
    },
    {
        title: ["Mortal Kombat", "Mortal Combat"],
        description: "Pelicula de fantasía oscura, artes marciales y gore estrenada en 2021.",
        audio: "audio/mortalkombat.mp3",
        hints: [
            "Basada en una famosa saga de videojuegos.",
            "Se hicieron dos películas de acción real en el año 1995 y 1997 que precedieron a esta.",
            "En esta película Sub-Zero y Scorpion se parten la cara. Get over here!!!"
        ]
    },
    {
        title: ["Días Extraños", "Strange Days"],
        description: "Pelicula ciberpunk estrenada en 1995.",
        audio: "audio/diasextraños.mp3",
        hints: [
            "Dirigida por Kathryn Bigelow.",
            "Protagonizada por Ralph Fiennes, Julette Lewis, Angela Bassett, Michael Wincott, Vincent D'Onofrio y Tom Sizemore.",
            "La tecnología SQUID permite experimentar como propios los recuerdos y sensaciones grabados por otros."
        ]
    },
    {
        title: ["Avatar"],
        description: "Pelicula épica de ciencia ficción y animación estrenada en 2009.",
        audio: "audio/avatar.mp3",
        hints: [
            "Está ambientada en el año 2154 y los acontecimientos narran la historia de Pandora.",
            "Protagonizada por Sam Worthington, Zoe Saldaña, Sigourney Weaver y Stephen Lang entre otros.",
            "Dirigida por James Cameron."
        ]
    },
    {
        title: ["Event Horizon", "Horizonte Final"],
        description: "Pelicula de ciencia ficción y terror estrenada en el año 1997.",
        audio: "audio/eventhorizon.mp3",
        hints: [
            "Dirigida por Paul W.S. Anderson, y protagonizada por Laurence Fishburne y Sam Neill.",
            "La música de la película fue escrita y realizada por el dúo británico Orbital y por el músico estadounidense Michael Kamen.",
            "A donde vamos no necesitamos ojos para ver..."
        ]
    },
    {
        title: ["El Fantasma de la Ópera", "Fantasma de la Ópera", "Phantom of the Opera"],
        description: "Película musical de drama romántico estrenada en 2004.",
        audio: "audio/fantasmaopera.mp3",
        hints: [
            "Es una adaptación cinematográfica de la novela homónima de Gastón Leroux.",
            "Protagonizada por Gerard Butler, Emmy Rossum, Patrick Wilson y Miranda Richardson.",
            "Dirigida por Joel Schumacher."
        ]
    },
    {
        title: ["El Silencio de los Corderos", "The Silence Of The Lambs", "Silence Of The Lambs"],
        description: "Película de terror y suspense estrenada en el año 1991.",
        audio: "audio/silenciocorderos.mp3",
        hints: [
            "Basada en la novela homónima de Thomas Harris.",
            "Hasta la fecha, es la única película de terror que ha ganado el Óscar y la tercera en ser candidata, después de El Exorcista y Tiburón.",
            "Protagonizada por Jodie Foster y Anthony Hopkins entre otros."
        ]
    },
    {
        title: ["El Exorcista"],
        description: "Película de terror estrenada en el año 1973.",
        audio: "audio/elexorcista.mp3",
        hints: [
            "Su tema principal está compuesto por Mike Oldfield.",
            "El guión fue escrito por Willam Peter Blatty, basado en su propia novela homónima.",
            "Se considera una película maldita por las desgracias que rodearon el rodaje."
        ]
    },
    {
        title: ["La Profecía", "The Omen"],
        description: "Película de terror estrenada en el año 1976.",
        audio: "audio/laprofecia.mp3",
        hints: [
            "Su banda sonora está compuesta por Jerry Goldsmith.",
            "Dirigida por Richard Donner.",
            "La película está basada en el nacimiento del Anticristo."
        ]
    },
    {
        title: [
            "Dragon Ball: Broly",
            "Dragon ball Broly",
            "Broly",
            "Dragon Ball",
            "Dragon Ball Super: Broly",
            "Dragon Ball Super Broly"
        ],
        description: "Película de animación estrenada en el año 2018.",
        audio: "audio/dragonball.mp3",
        hints: [
            "Basada en una famosa serie de anime de fantasía/aventuras de artes marciales.",
            "Escrita por el creador de la serie: Akira Toriyama.",
            "Fusión! Ya!"
        ]
    },
    {
        title: ["Intocable", "Intocables"],
        description: "Película de drama estrenado en el año 2011.",
        audio: "audio/intocable.mp3",
        hints: [
            "La banda sonora es de Ludovico Einaudi.",
            "Protagonizada por Omar Sy y François Cluzet.",
            "Una oda a la amistad."
        ]
    },
    {
        title: ["Carrie"],
        description: "Película de terror sobrenatural estrenada en el año 1976.",
        audio: "audio/carrie.mp3",
        hints: [
            "Dirigida por Brian De Palma.",
            "Basada en una novela de Stephen King.",
            "Se hizo un remake de la misma en el año 2013, lo protagonizaron Julianne Moore y Chloë Grace Moretz."
        ]
    },
    {
        title: ["La Niebla", "The Mist"],
        description: "Película de terror estrenada en el año 2007.",
        audio: "audio/laniebla.mp3",
        hints: [
            "Basada en una novela corta de Stephen King, sin embargo su final es distinto, a Stephen King le gustó tanto el que hicieron en la película que mencionó varias veces que ojalá se le hubiera ocurrido a él.",
            "Protagonizada por Thomas Jane.",
            "La desoladora música final, The Host of Seraphim, es del grupo australiano Dead Can Dance y fue concebida como un himno fúnebre por toda la humanidad."
        ]
    },
    {
        title: ["Alita: Ángel de Combate", "Alita Ángel de Combate", "Alita", "Ángel de Combate"],
        description: "Película de ciberpunk estrenada en el año 2019.",
        audio: "audio/alita.mp3",
        hints: [
            "Basada en un manga japonés.",
            "La película fue producida por James Cameron, quien también ayudó con el guión, y dirigida por Robert Rodriguez.",
            "Está protagonizada por Rosa Salazar, cuyo personaje fue realizado por WETA Digital con captura de movimiento. Entre los nombres que podemos encontrar en la película están: Christoph Waltz, Jennifer Connelly, Mahershala Ali, Jackie Earle Haley, Ed Skrein, Jai Courney, Michelle Rodríguez y Edward Norton."
        ]
    },
    {
        title: ["Whiplash", "Wiplash", "Whiplas"],
        description: "Película de drama musical estrenada en 2014.",
        audio: "audio/whiplash.mp3",
        hints: [
            "Protagonizada por Miles Teller y J.K. Simmons",
            "Ganadora de 3 premios Óscar.",
            "No es exactamente mi tempo... Dime... ¡¿Te adelantas o te atrasas?!"
        ]
    },
    {
        title: ["Guardianes de la Galaxia", "Los Guardianes de la Galaxia", "Guardians of the Galaxy"],
        description: "Película de ciencia ficción y superhéroes estrenada en 2014.",
        audio: "audio/guardianesgalaxia.mp3",
        hints: [
            "Es producto de la Casa de las Ideas.",
            "Actualmente es una trilogía y fue dirigida por James Gunn.",
            "Yo soy Groot."
        ]
    },
    {
        title: ["Norbit"],
        description: "Película de comedia romántica estrenada en 2007.",
        audio: "audio/norbit.mp3",
        hints: [
            "Eddie Murphy la protagoniza, realizando 3 papeles al mismo tiempo.",
            "Es la historia de un niño abandonado, adoptado por el dueño de un restaurante chino.",
            "Rasputia ha llegado."
        ]
    },
    {
        title: ["Star Trek"],
        description: "Trilogía de películas de ciencia ficción que comenzó en 2009.",
        audio: "audio/startrek.mp3",
        hints: [
            "La trilogía es un reboot cinematográfico de una serie que comenzó en el año 1966.",
            "Protagonizada por Chris Pine, Zachary Quinto, Karl Urban, Zoe Saldaña y Simon Pegg entre otros.",
            "Larga vida y prosperidad."
        ]
    },
    {
        title: [
            "La trilogía de Robert Langdon",
            "Robert Langdon",
            "El Código Da Vinci",
            "Ángeles y Demonios",
            "Inferno"
        ],
        description: "Trilogía de misterio y suspenso que inició en el año 2006.",
        audio: "audio/langdon.mp3",
        hints: [
            "Dirigidas por Ron Howard.",
            "Basadas en las novelas homónimas de Dan Brown.",
            "Protagonizadas por Tom Hanks."
        ]
    },
    {
        title: ["Karate Kid", "The Karate Kid"],
        description: "Saga dramática de artes marciales cuya primera película fue estrenada en el año 1984.",
        audio: "audio/karatekid.mp3",
        hints: [
            "Protagonizada por Ralph Macchio y Noriyuki Pat Morita.",
            "Permitió el surgimiento de una franquicia con 3 películas, así como una serie y dos nuevas adaptaciones cinematográficas.",
            "Está inspirada en los acontecimientos de la vida real de un estudiante de Tum Pai de 8 años en Hawái."
        ]
    },
    {
        title: ["Temblores", "Tremors"],
        description: "Saga de ciencia ficción, terror y comedia que comenzó en 1990.",
        audio: "audio/temblores.mp3",
        hints: [
            "Es una saga que consta de siete películas y una serie de televisión homónima.",
            "El protagonista de la primera película es Kevin Bacon.",
            "¡Malditos graboides!"
        ]
    },
    {
        title: ["REC"],
        description: "Saga de películas de terror que comenzó en 2007.",
        audio: "audio/rec.mp3",
        hints: [
            "Dirigidas por Jaume Balagueró y Paco Plaza.",
            "La infección de estos zombies tiene un origen sobrenatural.",
            "Muchas de las escenas de la saga, especialmente en la primera película, se rodaron sin decirle a los actores lo que sucedería, buscando reacciones reales y no actuadas."
        ]
    },
    {
        title: ["Burlesque"],
        description: "Película musical y romántica estrenada en el año 2010.",
        audio: "audio/burlesque.mp3",
        hints: [
            "Protagonizada por Christina Aguilera, Cher y Stanley Tucci.",
            "Su banda sonora llegó al número 1 de Billboard Soundtracks durante 63 semanas. Logró tener 2 veces el disco de platino y varios discos de oro.",
            "Una chica de pueblo llega a la gran ciudad con la intención de demostrar a todos lo bien que canta."
        ]
    },
    {
        title: ["Moulin Rouge", "Moulin Rouge!"],
        description: "Película de musical estrenada en el año 2001.",
        audio: "audio/moulinrouge.mp3",
        hints: [
            "Protagonizada por Nicole Kidman y Ewan McGregor.",
            "Está basada en gran parte de la ópera de Giuseppe Verdi La Traviata, así como en la novela La Dama de las Camelias, de Alejandro Dumas (Hijo).",
            "Ozzy Osbourne hace un pequeño cameo sonoro, y su voz se utiliza para un grito gutural cuando el hada verde se vuelve mala."
        ]
    },
    {
        title: ["La Niñera Mágica", "Nanny McPhee"],
        description: "Película de comedia y fantasía estrenada en el año 2005.",
        audio: "audio/nannymcphee.mp3",
        hints: [
            "Está protagonizada por Emma Thompson, quien también participó en el guion.",
            "Recibió una secuela en el año 2010.",
            "Es una adaptación de la serie de libros Nurse Matilda."
        ]
    },
    {
        title: ["Warcraft"],
        description: "Película épica de fantasía estrenada en el año 2016.",
        audio: "audio/warcraft.mp3",
        hints: [
            "Está basada en el universo de un popular videojuego.",
            "Está protagonizada por Travis Fimmel, Paula Patton y Ben Foster, entre otros.",
            "En 2023 se convirtió en la segunda película basada en un videojuego más taquillera."
        ]
    },
    {
        title: ["Tenet"],
        description: "Película de ciencia ficción y thriller estrenada en el año 2020.",
        audio: "audio/tenet.mp3",
        hints: [
            "Escrita, dirigida y producida por Christopher Nolan.",
            "Protagonizada por John David Washington, Robert Pattinson, Elizabeth Debicki, Kenneth Branagh y Michael Caine.",
            "Narra la hostoria de un agente de la CIA que busca controlar la flecha del tiempo para prevenir la Tercera Guerra Mundial."
        ]
    },
    {
        title: ["Bullet Train"],
        description: "Película de acción y comedia estrenada en el año 2022.",
        audio: "audio/bullettrain.mp3",
        hints: [
            "Dirigida por David Leitch.",
            "Protagonizada por Brad Pitt, Joey King, Aaron Taylor-Johnson, Brian Tyree Henry, Andrew Koji, Hiroyuki Sanada, Michael Shannon y Sandra Bullock.",
            "Basada en la novela Maria Beetle de Kōtarō Isaka."
        ]
    },
    {
        title: [
            "Dungeons & Dragons: Honor entre ladrones",
            "Dungeons & Dragons Honor entre Ladrones",
            "Dungeons & Dragons",
            "Honor entre ladrones",
            "D&D: Honor entre ladrones",
            "D&D",
            "DND Honor entre Ladrones",
            "DND",
            "DND: Honor entre ladrones",
            "Dnd Honor among thieves",
            "Dungeons and Dragons",
            "Dungeons n Dragons",
            "Dragones y Mazmorras"
        ],
        description: "Película de aventura y fantasía heroica estrenada en 2023.",
        audio: "audio/dnd.mp3",
        hints: [
            "Está basada en el juego de rol más importante del mundo.",
            "Protagonizada por Chris Pine, Michelle Rodriguez, Regé-Jean Page, Justice Smith, Sophia Lillis, Hugh Grant y Daisy Head.",
            "Mejora infinitamente el primer intento de adaptación que se hizo en el año 2000."
        ]
    },
    {
        title: ["El Vacío", "The Void", "Void", "Vacío"],
        description: "Película de terror y ciencia ficción estrenada en 2016.",
        audio: "audio/thevoid.mp3",
        hints: [
            "Es una película Lovecraftiana que tuvo un presupuesto de unos 83000 dólares.",
            "Fue escrita y dirigida por Steven Kostanski y Jeremy Fillespie.",
            "Un culto intenta abrir un portal hacia otro mundo, ajeno a toda lógica terrestre, amenazador y oscuro, donde hay una enorme pirámide hecha de oscuridad."
        ]
    },
    {
        title: ["La Trampa"],
        description: "Película de suspense estrenada en el año 2024.",
        audio: "audio/latrampa.mp3",
        hints: [
            "Escrita y dirigida por M. Night Shyamalan.",
            "Protagonizada por un impresionante Josh Hartnett.",
            "En esta película nos ponen en la perspectiva de un asesino en serie."
        ]
    },
    {
        title: ["Dune"],
        description: "Trilogía épica de ciencia ficción que comenzó en 2021.",
        audio: "audio/dune2.mp3",
        hints: [
            "Esta trilogía está basada en una nueva versión revisada fuel a la novela homónima de 1965 de Frank Herbert.",
            "Dirigida por Denis Villeneuve. Su banda sonora está compuesta por Hans Zimmer.",
            "Gran parte de la trilogía tiene lugar en un planeta llamado Arrakis, donde unos terribles gusanos gigantes dominan el desierto."
        ]
    },
    {
        title: [
            "El Señor de los Anillos: La Guerra de los Rohirrim",
            "El Señor de los Anillos La Guerra de los Rohirrim",
            "LOTR: La guerra de los Rohirrim",
            "LOTR La Guerra de los Rohirrim",
            "La Guerra de los Rohirrim",
            "Rohirrim"
        ],
        description: "Película de animación de género fantástico estrenada en el año 2024.",
        audio: "audio/rohirrim.mp3",
        hints: [
            "Está basada en un fragmento de los Apéndices del Señor de los Anillos, de J.R.R. Tolkien.",
            "La película narra la historia de Helm Mano de Hierro y de su única hija Héra.",
            "Philippa Boyens, coescritora de la trilogía cinematográfica de El Señor de los Anillos, participó en el guion."
        ]
    },
    {
        title: ["La Sirenita"],
        description: "Película de animación estrenada en el año 1989.",
        audio: "audio/lasirenita.mp3",
        hints: [
            "Está basada en el cuento homónimo de Hans Christian Andersen.",
            "Se hizo un remake de acción real en el año 2023.",
            "Es la vigésima octava película en el canon de largometrajes de Walt Disney Animation Studios. Se convirtió en todo un éxito, dando inicio a una nueva época dorada a la compañía y a la que siguieron otros grandes éxitos como La Bella y la Bestia, Aladdín y el Rey León."
        ]
    },
    {
        title: ["La Bella y la Bestia", "Bella y Bestia", "The Beauty and The Beast"],
        description: "Película de acción real de género fantástica y musical estrenada en el año 2017.",
        audio: "audio/bellaybestia.mp3",
        hints: [
            "Es un remake de un clásico de Disney del año 1991.",
            "Está protagonizada por Emma Watson, Dan Stevens, Luke Evans, Ewan McGregor, Ian McKellen, Emma Thompson y Stanley Tucci.",
            "Su historia se basa en la versión revisada y abreviada que Jeanne-Marie Leprince de Beaumont escribió a partir de la historia original de Gabrielle-Suzanne Barbot de Villeneuve."
        ]
    },
    {
        title: ["Barbie"],
        description: "Película de comedia fantástica estrenada en el año 2023.",
        audio: "audio/barbie.mp3",
        hints: [
            "Dirigida por Greta Gerwig.",
            "Basada en una popular línea de muñecas de Mattel.",
            "Está protagonizada por Margot Robbie y Ryan Gosling."
        ]
    },
    {
        title: ["Showgirls", "Showgirl", "Show Girls"],
        description: "Película de drama con tintes eróticos estrenada en 1995.",
        audio: "audio/showgirls.mp3",
        hints: [
            "Dirigida por Paul Verhoeven.",
            "Protagonizada por Elizabeth Berkley, Kyle MacLachlan y Gina Gershon.",
            "El filme narra las peripecias de una chica provinciana llamada Nomi Malone en Las Vegas, donde acude con la intención de convertirse en estrella de los shows de los grandes casinos de la ciudad."
        ]
    },
    {
        title: ["13 Fantasmas", "Trece Fantasmas"],
        description: "Película de terror sobrenatural estrenada en el año 2001.",
        audio: "audio/13fantasmas.mp3",
        hints: [
            "Es una versión de una película de terror homónima estrenada en el año 1960.",
            "La película se basa en la máquina del astrólogo del siglo XV Basileus, quien creó los planos para la máquina en el libro Arcanum mientras estaba bajo una posesión demoníaca, con la intención de completar el Zodiaco Negro y abrir el Ocularis.",
            "El orden en el que los entes están dispuestos se define proporcionalmente a la intensidad del daño que pueden provocar."
        ]
    },
    {
        title: ["Uncharted"],
        description: "Película de acción y aventuras estrenada en el año 2022.",
        audio: "audio/uncharted.mp3",
        hints: [
            "Está basada en una popular saga de videojuegos.",
            "Sic Parvis Magna",
            "Protagonizada por Tom Holland y Mark Wahlberg en los papeles de Nathan Drake y Victor Sullivan."
        ]
    },
    {
        title: ["The Sadness", "Sadness"],
        description: "Película de terror estrenada en el año 2021.",
        audio: "audio/thesadness.mp3",
        hints: [
            "Escrita, dirigida y editada por Rob Jabbaz. Esta película fue su debut.",
            "La historia está fuertemente inspirada en el comic Crossed, de Garth Ennis.",
            "Un virus causa que los infectados se sientan libres de consecuencias, creando maníacos homicidas."
        ]
    },
    {
        title: ["Hellraiser", "Hellriser"],
        description: "Saga de terror cuya primera película se estrenó en el año 1987.",
        audio: "audio/hellraiser.mp3",
        hints: [
            "Fue escrita y dirigida por Clive Barker, basada en su propia novela titulada The Hellbound Heart.",
            "Explora temas como el sadomasoquismo, la relación entre el dolor y el placer, y la moralidad de personajes sometidos al temor y la tentación.",
            "Es considerada un clásico del género y una película de culto. Presenta al personaje Pinhead y la Configuración del Lamento."
        ]
    },
    {
        title: ["Al Filo del Mañana", "Edge Of Tomorrow"],
        description: "Película de ciencia ficción y acción estrenada en el año 2014.",
        audio: "audio/alfilodelmañana.mp3",
        hints: [
            "Inspirada en la novela ligera All You Need Is Kill de Hiroshi Sakurazaka.",
            "Live. Die. Repeat.",
            "Protagonizada por Tom Cruise y Emily Blunt."
        ]
    },
    {
        title: ["Elvis"],
        description: "Película musical de drama estrenada en el año 2022.",
        audio: "audio/elvis.mp3",
        hints: [
            "Escrita y dirigida por Baz Luhrmann.",
            "Protagonizada por Austin Butler y Tom Hanks, entre otros.",
            "Cuenta la vida del rey del rock and roll."
        ]
    },
    {
        title: [
            "Top Gun: Maverick",
            "Top Gun Maverick",
            "Maverick",
            "Top Gun",
            "Top Gun 2",
            "Top Gun 2: Maverick",
            "Top Gun 2 Maverick"
        ],
        description: "Película de acción estrenada en el año 2022.",
        audio: "audio/topgun.mp3",
        hints: [
            "Dirigida por Joseph Kosinski con un guión de Christopher McQuarrie.",
            "Protagonizada por Tom Cruise, Val Kilmer, Miles Teller, Jennifer Connelly, Glen Powell, Lyliana Wray y Ed Harris entre otros.",
            "Es la secuela de una película de 1986."
        ]
    },
    {
        title: ["Midsommar", "Midsomar"],
        description: "Película de terror estrenada en el año 2019.",
        audio: "audio/midsommar.mp3",
        hints: [
            "Escrita y dirigida por Ari Aster.",
            "Una pareja viaja a Suecia con un grupo de amigos para un festival de verano solo para encontrarse en las garras de un culto siniestro.",
            "El diseñador de producción de la película Henrik Svensson, se inspiró en tradiciones de Hårga así como de otros elementos folclóricos para desarrollar el festival sueco de la película."
        ]
    },
    {
        title: ["Batman: El Caballero Oscuro", "Batman el caballero oscuro", "El Caballero Oscuro", "Batman"],
        description: "Trilogía de acción y suspense estrenada entre los años 2005 y 2012.",
        audio: "audio/batmannolan.mp3",
        hints: [
            "Escritas por Christopher y Jonathan Nolan, dirigidas por Christopher Nolan.",
            "Protagonizadas por Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, Morgan Freeman, Liam Neeson y Tom Hardy.",
            "Basada en un popular superhéroe de DC Comics."
        ]
    },
    {
        title: ["The Batman", "Batman"],
        description: "Película de acción y suspense estrenada en el año 2022.",
        audio: "audio/batmanpattinson.mp3",
        hints: [
            "Escrita y dirigida por Matt Reeves.",
            "Protagonizada por Robert Pattinson, Zoë Kravitz, Paul Dano, Jeffrey Wright, John Turturro, Andy Serkis y Colin Farrell.",
            "Su banda sonora está compuesta por Michael Giacchino, aunque se utilizó Something in the Way de Nirvana también. ¡Yo soy la Venganza!"
        ]
    },
    {
        title: ["Jackie Brown"],
        description: "Película de suspense estrenada en el año 1997.",
        audio: "audio/jackiebrown.mp3",
        hints: [
            "Escrita y dirigida por Quentin Tarantino.",
            "Basada en la novela Rum Punch (Cóctel explosivo) de Elmore Leonard.",
            "El filme se inspira en el llamado género cinematográfico Blaxploitation, como Reservoir Dogs y Pulp Fiction."
        ]
    },
    {
        title: ["Malos tiempos en el Royale", "Royale"],
        description: "Película de suspense estrenada en el año 2018.",
        audio: "audio/royale.mp3",
        hints: [
            "Escrita y dirigida por Drew Goddard.",
            "La banda sonora está creada por Michael Giacchino.",
            "Protagonizada por Jeff Bridges, Cynthia Erivo, Dakota Johnson, Jon Hamm, Cailee Spaeny, Lewis Pullman, Nick Offerman y Chris Hemsworth"
        ]
    },
    {
        title: ["Hasta el último hombre", "Hacksaw Ridge"],
        description: "Película bélica y dramática estrenada en el año 2016.",
        audio: "audio/hacksawridge.mp3",
        hints: [
            "Dirigida por Mel Gibson.",
            "Protagonizada por Andrew Garfield, Vince Vaughn, Sam Worthington, Luke Bracey, Hugo Weaving, Ryan Corr, Teresa Palmer, Richard Pyros y Rachel Griffiths.",
            "La película está basada en la historia real de un soldado del Ejército de EE.UU. que se negó a portar armas en el frente, siendo objeto de burla y persecución, y que a pesar de ello, fue condecorado con la Medalla de Honor por haber salvado la vida a más de 75 hombres bajo el constante fuego enemigo."
        ]
    },
    {
        title: [
            "Millennium",
            "Milenium",
            "Millenium",
            "Milennium",
            "Saga Millennium",
            "Los Hombres que no amaban a las Mujeres",
            "La chica que soñaba con una cerilla y un bidón de gasolina",
            "La reina en el palacio de las corrientes de aire"
        ],
        description: "Trilogía de películas de suspense estrenadas en el año 2009.",
        audio: "audio/millennium.mp3",
        hints: [
            "Basadas en una serie de novelas suecas creadas por Stieg Larsson.",
            "Protagonizadas por Noomi Rapace y Mikael Nyqvist.",
            "La trilogía cuenta la historia de Lisbeth Salander y de Mikael Blomkvist."
        ]
    },
    {
        title: ["Señora Doubtfire", "Mrs. Doubtfire", "Mrs Doubtfire", "La señora Doubtfire"],
        description: "Película de comedia estrenada en el año 1993.",
        audio: "audio/doubtfire.mp3",
        hints: [
            "Dirigida por Chris Columbus. Howard Shore realizó la banda sonora.",
            "Fue ganadora de un Óscar y dos globos de oro.",
            "Protagonizada por Robin Williams, Sally Field y Pierce Brosnan entre otros."
        ]
    },
    {
        title: ["Good morning Vietnam", "Good morning, Vietnam"],
        description: "Película bélica, dramática y de comedia estrenada en el año 1987.",
        audio: "audio/vietnam.mp3",
        hints: [
            "Protagonizada por Robin Williams y Forest Whitaker.",
            "Robin Williams improvisó todas las transmisiones de su personaje, Adrian Cronauer.",
            "Durante la guerra de Vietnam, un disc-jokey de la Fuerza Aérea de los Estados Unidos llega a Saigón para entretener a los soldados desplegados en Vietnam."
        ]
    },
    {
        title: ["El Único", "The One"],
        description: "Película de acción y ciencia ficción estrenada en el año 2001.",
        audio: "audio/theone.mp3",
        hints: [
            "Escrita y dirigida por James Wong.",
            "Protagonizada por Jet Li, Jason Statham y Carla Gugino.",
            "Disturbed con su Down with the Sickness rematan esta película repleta de artes marciales y efectos especiales."
        ]
    },
    {
        title: ["Dos Policias Rebeldes", "Bad Boys"],
        description: "Saga de películas de acción y comedia que comenzó en 1995.",
        audio: "audio/badboys.mp3",
        hints: [
            "Fue el debut como director de Michael Bay.",
            "Protagonizadas por Martin Lawrence y Will Smith.",
            "Es una película estadounidense del género buddy cop."
        ]
    },
    {
        title: [
            "Escape from New York",
            "Escape from LA",
            "Escape from L.A.",
            "1997: rescate en Nueva York",
            "1997 rescate en Nueva York",
            "1997 escape de Nueva York",
            "1997: escape de Nueva York",
            "Fuga de Los Ángeles",
            "2013: rescate en LA",
            "2013: rescate en L.A.",
            "2013 rescate en LA",
            "2013 rescate en L.A.",
            "2013 escape de L.A.",
            "2013: escape de L.A.",
            "2013 escape de LA",
            "2013 escape de L.A.",
            "Escape from NY",
            "Escape from N.Y.",
            "Escape from NYLA",
            "Escape from N.Y.L.A."
        ],
        description: "Película de acción y ciencia ficción estrenada en 1981.",
        audio: "audio/escapefrom.mp3",
        hints: [
            "Escrita y dirigida por John Carpenter, quien también realizó la banda sonora.",
            "Protagonizada por Kurt Russell como Snake Serpiente Plissken.",
            "Su secuela se estrenó en 1996, también escrita, dirigida y con la banda sonora de John Carpenter y protagonizada por Kurt Russell."
        ]
    },
    {
        title: ["Chacal", "Jackal", "The Jackal", "El Chacal"],
        description: "Película de acción y suspense estrenada en el año 1997.",
        audio: "audio/chacal.mp3",
        hints: [
            "Protagonizada por Bruce Willis, Richard Gere y Sídney Poitier. Con un pequeño papel de Jack Black.",
            "Es una adaptación de una novela de 1971 así como de una película de 1973.",
            "En esta película un asesino a sueldo es contratado por Rusia para atentar contra los Estados Unidos."
        ]
    },
    {
        title: ["El sexto sentido"],
        description: "Película de suspense estrenada en el año 1999.",
        audio: "audio/sextosentido.mp3",
        hints: [
            "Escrita y dirigida por M. Night Shyamalan.",
            "Protagonizada por Bruce Willis y Haley Joel Osment.",
            "En ocasiones... Veo muertos..."
        ]
    },
    {
        title: ["Cocodrilo Dundee"],
        description: "Película de comedia y aventuras estrenada en el año 1986.",
        audio: "audio/cocodrilodundee.mp3",
        hints: [
            "Protagonizada por Paul Hogan y Linda Kozlowski.",
            "Michael Dundee, apodado Cocodrilo Dundee, es un cazador de cocodrilos en un lugar alejado de Australia. Casualmente llegan noticias sobre él a los Estados Unidos y un periódico de Nueva York decide enviar a un periodista para realizar un reportaje sobre este exótico personaje.",
            "La película también incluyó a un cocodrilo real de agua salada llamado Burt."
        ]
    },
    {
        title: ["Doom"],
        description: "Película de ciencia ficción y acción estrenada en el año 2005.",
        audio: "audio/doom.mp3",
        hints: [
            "Se basa en una popular saga de videojuegos homónima de ciencia ficción y disparos en primera persona creada por id Software.",
            "Protagonizada por Karl Urban, Dwayne Johnson y Rosamund Pike.",
            "BFG 9000: ¿Bio Force Gun o Big Fucking Gun?"
        ]
    },
    {
        title: ["Powder (Pura Energía)", "Pura energía", "Powder", "Powder: Pura Energía", "Powder Pura Energía"],
        description: "Película de fantasía y drama estrenada en el año 1995.",
        audio: "audio/powder.mp3",
        hints: [
            "Escrita y dirigida por Victor Salva, la banda sonora es de Jerry Goldsmith.",
            "Protagonizada por Sean Patrick Flanery, Jeff Goldblum, Mary Steenburgen y Lance Henriksen.",
            "Un niño albino tiene poderes paranormales relacionados con la electricidad."
        ]
    },
    {
        title: ["Insomnio", "Insomnia"],
        description: "Película de suspense estrenada en el año 2002.",
        audio: "audio/insomnio.mp3",
        hints: [
            "Dirigida por Christopher Nolan.",
            "Protagonizada por Al Pacino, Robin Williams y Hilary Swank.",
            "Es una adaptación de la película noruega homónima estrenada en 1997."
        ]
    },
    {
        title: ["Zoolander"],
        description: "Película de comedia estrenada en el año 2001.",
        audio: "audio/zoolander.mp3",
        hints: [
            "Fue escrita, dirigida y protagonizada por Ben Stiller.",
            "Tuvo una secuela estrenada en 2016, también escrita, dirigida y protagonizada por Ben Stiller.",
            "Acero Azul."
        ]
    },
    {
        title: ["La Celda", "The Cell"],
        description: "Película de ciencia ficción y suspense estrenada en el año 2000.",
        audio: "audio/thecell.mp3",
        hints: [
            "Protagonizada por Jennifer Lopez, Vince Vaughn y Vincent DOnofrio.",
            "La banda sonora es de Howard Shore.",
            "La historia sigue a un grupo de científicos que utilizan tecnología experimental para adentrarse en la mente de un asesino en serie en estado de coma, con el objetivo de descubrir el paradero de su última victima seuestrada."
        ]
    },
    {
        title: ["Silent Hill", "Sirento Hiro", "Sairento Hiru", "Sairento Hiro"],
        description: "Película de terror y suspense estrenada en el año 2006.",
        audio: "audio/silenthill.mp3",
        hints: [
            "Protagonizada por Rasha Mitchell, Laurie Holden, Sean Bean, Alice Krige y Jodelle Ferland.",
            "La película está basada en una saga de videojuegos de terror que llevan el mismo nombre.",
            "In my restless dreams… I see that town..."
        ]
    },
    {
        title: ["La Liga de los Hombres Extraordinarios", "LLDLHE"],
        description: "Película de fantasía y acción con toques steampunk estrenada en el año 2003.",
        audio: "audio/laliga.mp3",
        hints: [
            "La película está basada en una serie de cómics homónima.",
            "Protagonizada por Peta Wilson, Sean Connery, Jason Flemyng y Naseeruddin Shah.",
            "Fue la última aparición de Sean Connery en la pantalla grande."
        ]
    },
    {
        title: ["Jeepers Creepers", "Jepers Crepers"],
        description: "Película de terror y suspense que se estrenó en el año 2001.",
        audio: "audio/jeeperscreepers.mp3",
        hints: [
            "Protagonizada por Justin Long y Gina Philips.",
            "Escrita y dirigida por Victor Salva y producida por Francis Ford Coppola.",
            "Cada 23 años, durante 23 días, le toca comer."
        ]
    },
    {
        title: ["Ravenous"],
        description: "Película de terror con toques western estrenada en 1999.",
        audio: "audio/ravenous.mp3",
        hints: [
            "Protagonizada por Guy Pearce y Robert Carlyle.",
            "Tiene lugar en 1847, donde un teniente es aclamado como un héroe por conquistar sin ayuda un fuerte enemigo, sin embargo esconde un terrible secreto.",
            "La moralidad es el último bastión de un cobarde."
        ]
    },
    {
        title: ["Mil maneras de morder el polvo en el oeste", "Mil maneras de morder el polvo"],
        description: "Película de comedia y western estrenada en el año 2014.",
        audio: "audio/milmanerasoeste.mp3",
        hints: [
            "Escrita y dirigida por Seth MacFarlane.",
            "La película está protagonizada por Seth MacFarlane y está acompañado por Charlize Theron, Amanda Seyfried, Liam Neeson, Giovanni Ribisi, Sarah Silverman y Neil Patrick Harris.",
            "En 1882, en un pueblo de Arizona, un cobarde ganadero de ovejas llamado Albert Stark es abandonado por su amado novia Louise tras retirarse de un duelo."
        ]
    },
    {
        title: ["Vampiros de John Carpenter", "Vampiros"],
        description: "Película de terror y western estrenada en el año 1998.",
        audio: "audio/vampiros.mp3",
        hints: [
            "Dirigida por John Carpenter, quien también realizó la banda sonora.",
            "Tuvo dos secuelas, una de ellas protagonizada por Jon Bon Jovi.",
            "Protagonizada por James Woods, Daniel Baldwin, Sheryl Lee y Thomas Ian Griffith."
        ]
    },
    {
        title: ["Rockstar", "Rock Star"],
        description: "Película musical de comedia dramática estrenada en el año 2001.",
        audio: "audio/rockstar.mp3",
        hints: [
            "Está inspirada en la vida real de Tim Ripper Owens, cantante de una banda tributo a Judas Priest, que fue elegido para reemplazar a Rob Halford cuando se fue de la banda.",
            "Se creó una banda ficticia llamada Steel Dragon para los temas de la película.",
            "Protagonizada por Mark Wahlberg, Jennifer Aniston, Timothy Olyphant, Dominic West, Jason Flemyng, Zakk Wylde, Jason Bonham, Myles Kennedy y Timothy Spall."
        ]
    },
    {
        title: ["Rock Of Ages", "La Era del Rock"],
        description: "Película musical y de comedia estrenada en el año 2012.",
        audio: "audio/rockofages.mp3",
        hints: [
            "La película es una adaptación del musical de Broadway homónimo de Chris DArienzo.",
            "Todos los actores cantan todas sus partes propias de la película.",
            "Protagonizada por la cantante de country Julianne Hough y Diego Boneta con un reparto coral que incluye a Tom Cruise, Russell Brand, Catherine Zeta-Jones, Kevin Nash, Paul Giamatti, Malin Åkerman, Alec Baldwin y Mary J. Blige."
        ]
    },
    {
        title: ["Los Inmortales", "Highlander"],
        description: "Película de acción y fantasía estrenada en el año 1986.",
        audio: "audio/losinmortales.mp3",
        hints: [
            "La banda sonora fue realizada por Queen.",
            "Protagonizada por Christopher Lambert, Sean Connery y Clancy Brown.",
            "Solo puede quedar uno."
        ]
    },
    {
        title: ["Dos rubias de pelo en pecho", "White Chicks"],
        description: "Película de comedia estrenada en el año 2004.",
        audio: "audio/rubiaspelo.mp3",
        hints: [
            "Escrita, producida, dirigida y protagonizada por los hermanos Wayans.",
            "Terry Crews improvisó la escena más famosa de la película.",
            "Unos policías deben hacerse pasar por unas pijas para poder atrapar a unos criminales."
        ]
    },
    {
        title: ["Battle Royale"],
        description: "Película de suspense y acción estrenada en el año 2000.",
        audio: "audio/battleroyale.mp3",
        hints: [
            "Dirigida por Kinji Fukasaku y protagonizada por Takeshi Kitano, Tatsuya Fujiwara y Aki Maeda.",
            "Es una adaptación de la novela homónima escrita por Koushun Takami.",
            "Tuvo una secuela en el año 2003."
        ]
    },
    {
        title: ["Verónica"],
        description: "Película de terror estrenada en el año 2017.",
        audio: "audio/veronica.mp3",
        hints: [
            "Escrita y dirigida por Paco Plaza.",
            "Está inspirada en un caso real, el de una joven de 18 años que murió en extrañas circunstancias en el verano de 1991.",
            "La investigación posterior, conocida como Expediente Vallecas, fue la primera en España que barajaba circunstancias paranormales en torno a un caso."
        ]
    },
    {
        title: [
            "Las aventuras de Priscilla, reina del desierto",
            "Las aventuras de Priscilla reina del desierto",
            "Priscilla, reina del desierto",
            "Priscilla reina del desierto"
        ],
        description: "Película de comedia, musical y drama estrenada en el año 1994.",
        audio: "audio/priscilla.mp3",
        hints: [
            "Protagonizada por Terence Stamp, Hugo Weaving y Guy Pearce.",
            "Desde su estreno en el año 1994 fue una película de culto y dio origen en Broadway a un musical.",
            "Ha tenido un profundo impacto en la comunidad gay. La película explora los estereotipos de gays, travestis y transexuales sin ridiculizarlos ni caricaturizarlos. Los personajes tampoco son pecadores, antisociales, malvados, perfectos, mártires o lastimeros, solo un grupo de amigos ganándose la vida."
        ]
    },
    {
        title: ["Leyendas de Pasión"],
        description: "Película dramática con romances y toques western estrenada en el año 1994.",
        audio: "audio/leyendasdepasion.mp3",
        hints: [
            "Basada en la novela homónima que escribió Jim Harrison en 1979.",
            "Ganó un premio Óscar a la mejor fotografía.",
            "Protagonizada por Brad Pitt, Anthony Hopkins, Aidan Quinn, Julia Ormond, Henry Thomas y Karina Lombard."
        ]
    },
    {
        title: ["Sleepy Hollow"],
        description: "Película de terror y fantasía oscura estrenada en el año 1999.",
        audio: "audio/sleepyhollow.mp3",
        hints: [
            "Recibió el premio Óscar a la mejor dirección artística.",
            "Dirigida por Tim Burton.",
            "Protagonizada por Johnny Depp, Christina Ricci, Michael Gambon y Christopher Walken entre otros."
        ]
    },
    {
        title: ["La vida de Brian"],
        description: "Película de comedia y drama estrenada en el año 1979.",
        audio: "audio/vidabrian.mp3",
        hints: [
            "Es el tercer largometraje del grupo de comedia inglés Monty Python.",
            "Algunos gags famosos están protagonizados por un ficticio Frente Popular de Judea y sus rivales políticos.",
            "Trata sobre un judío que nace el mismo día que Jesucristo y, ya de adulto, es varias veces confundido con él."
        ]
    },
    {
        title: ["Entrevista con el Vampiro"],
        description: "Película de terror y drama estrenada en el año 1994.",
        audio: "audio/entrevistavampiro.mp3",
        hints: [
            "Basada en la novela homónima de 1976 de Anne Rice.",
            "Protagonizada por Tom Cruise, Brad Pitt, Christian Slater, Antonio Banderas y Kirsten Dunst.",
            "Relata la historia de Louis de Pointe du Lac desde finales del siglo xviii hasta la década de 1990, su relación con Lestat de Lioncourt y su lucha por sobreponerse a su peculiar condición."
        ]
    },
    {
        title: ["Las amistades peligrosas", "Amistades Peligrosas"],
        description: "Película dramática estrenada en el año 1988.",
        audio: "audio/amistadespeligrosas.mp3",
        hints: [
            "Fue ganadora de 3 Óscars.",
            "Adapta la obra de teatro de Christopher Hampton que es, a su vez, una adaptación de la novela epistolar del siglo XVIII del francés Pierre Choderlos de Laclos.",
            "Protagonizada por Glenn Close, John Malkovich, Michelle Pfeiffer, Swoosie Kurtz, Uma Thurman, Keanu Reeves y Peter Capaldi."
        ]
    },
    {
        title: ["Poltergeist"],
        description: "Película de terror sobrenatural estrenada en el año 1982.",
        audio: "audio/poltergeist.mp3",
        hints: [
            "Fue la primera de una trilogía.",
            "Dirigida por Tobe Hooper.",
            "La película es a menudo citada como maldita por el asesinato de Dominique Dunne y temprana muerte de Heather O'Rourke, así como el hecho de que la actriz JoBeth Williams ha señalado en entrevistas de televisión que los esqueletos utilizados en la conocida escena de la piscina eran reales."
        ]
    },
    {
        title: [
            "Starship Troopers",
            "Starship Troopers: Las brigadas del espacio",
            "Starship Troopers Las brigadas del espacio",
            "Las brigadas del espacio"
        ],
        description: "Película de acción y ciencia ficción estrenada en el año 1997.",
        audio: "audio/starshiptroopers.mp3",
        hints: [
            "Dirigida por Paul Verhoeven.",
            "Protagonizada por Casper Van Dien, Michael Ironside, Dina Meyer y Denise Richards.",
            "Basada en una novela de 1959 escrita por Robert A. Heinlein."
        ]
    },
    {
        title: ["Cisne Negro", "El Cisne Negro", "Black Swan", "The Black Swan"],
        description: "Película de suspense, terror y drama estrenada en el año 2010.",
        audio: "audio/blackswan.mp3",
        hints: [
            "Dirigida por Darren Aronofsky.",
            "Natalie Portman se ganó un Óscar con esta película.",
            "Protagonizada por Natalie Portman, Vincent Cassel, Mila Kunis, Barbara Hershey y Winona Ryder."
        ]
    },
    {
        title: ["π (PI)", "PI", "Pi, Fe en el caos", "Pi Fe en el caos", "Fe en el caos", "π"],
        description: "Película de suspense y ciencia ficción estrenada en el año 1998.",
        audio: "audio/pi.mp3",
        hints: [
            "Dirigida por Darren Aronofsky.",
            "Lanzó la carrera de Clint Mansell como compositor cinematográfico.",
            "Fue filmada en película en blanco y negro de alto contraste."
        ]
    },
    {
        title: ["Encuentros en la tercera fase"],
        description: "Película de ciencia ficción y suspense estrenada en el año 1977.",
        audio: "audio/encuentros.mp3",
        hints: [
            "Escrita y dirigida por Steven Spielberg.",
            "Su banda sonora es de John Williams.",
            "Protagonizada por Richard Dreyfuss, Melinda Dillon, François Truffaut, Teri Garr y Bob Balaban."
        ]
    },
    {
        title: ["Excalibur", "Excalibor"],
        description: "Película de fantasía y aventuras estrenada en el año 1981.",
        audio: "audio/excalibur.mp3",
        hints: [
            "Basada en la obra de Thomas Malory de 1485.",
            "Protagonizada por Nigel Terry, Helen Mirren, Nicol Williamson, Nicholas Clay y Liam Neeson entre otros.",
            "En un principio, John Boorman fue el gran interesado en adaptar al cine la obra de J.R.R. Tolkien, El Señor de los Anillos. Debido a que no consiguió adquirir los derechos de la obra, decidió hacer esta película en su lugar."
        ]
    },
    {
        title: ["Copying Beethoven", "Copiando a Beethoven"],
        description: "Película de ficción dramática estrenada en el año 2006.",
        audio: "audio/beethoven.mp3",
        hints: [
            "Protagonizada por Ed Harris y Diane Kruger.",
            "La película se remonta al año 1824 durante la composición de la Novena Sinfonía.",
            "Varios detalles de la película están representados tal y como ocurrieron en la realidad, como el hecho de que le giraron hacia la audiencia para que viera el aplauso durante el estreno."
        ]
    },
    {
        title: ["Guerra Mundial Z"],
        description: "Película de terror y acción estrenada en el año 2013.",
        audio: "audio/guerramundialz.mp3",
        hints: [
            "Protagonizada por Brad Pitt.",
            "Está basada en la novela homónima de Max Brooks.",
            "La producción de la película acumuló dificultades desde su inicio: tensiones y cambio de guionistas, necesidad de rodas nuevas escenas, problemas con los efectos especiales, y un largo etc. Hasta que Brad Pitt consiguió encaminar el proyecto como productor."
        ]
    },
    {
        title: ["Anticristo", "Antichrist"],
        description: "Película de terror y suspense estrenada en el año 2009.",
        audio: "audio/antichrist.mp3",
        hints: [
            "Escrita y dirigida por Lars von Trier.",
            "Protagonizada por Willem Dafoe y Charlotte Gainsbourg.",
            "Inspirada por The Ring: El círculo y Dark Water."
        ]
    },
    {
        title: ["Danny the Dog", "Unleashed", "La bestia", "Desencadenado"],
        description: "Película de acción y suspense estrenada en el año 2005.",
        audio: "audio/dannythedog.mp3",
        hints: [
            "Escrita por Luc Besson.",
            "Protagonizada por Jet Li, Morgan Freeman, Bob Hoskins y Kerry Condon.",
            "La banda sonora estuvo a cargo del grupo británico de trip-hop, Massive Attack."
        ]
    },
    {
        title: ["La Semilla del Diablo", "Rosemary's Baby", "Rosemarys Baby"],
        description: "Película de terror y suspense estrenada en el año 1968.",
        audio: "audio/semilladiablo.mp3",
        hints: [
            "Escrita y dirigida por Roman Polanski.",
            "Basada en la novela homónima de Ira Levin.",
            "La película narra la historia de una mujer embarazada que sospecha que una secta maligna quiere llevarse a su bebé para usarlo en sus rituales."
        ]
    },
    {
        title: ["La Sustancia", "The Substance"],
        description: "Película de terror y ciencia ficción estrenada en el año 2024.",
        audio: "audio/lasustancia.mp3",
        hints: [
            "Escrita, producida y dirigida por Coralie Fargeat.",
            "Protagonizada por Demi Moore, Margaret Qualley y Dennis Quaid.",
            "¿Alguna vez has soñado con una mejor versión de ti mismo?"
        ]
    },
    {
        title: ["Apocalypse Now", "Apocalipsis ahora", "Apocalipsis now"],
        description: "Película bélica de acción estrenada en el año 1979.",
        audio: "audio/apocalypse.mp3",
        hints: [
            "Fue ganadora de dos premios Óscar.",
            "Dirigida por Francis Ford Coppola.",
            "Protagonizada por Martin Sheen, Marlon Brando, Robert Duvall, Frederic Forrest, Sam Bottoms, Laurence Fishburne, Harrison Ford y Dennis Hopper."
        ]
    },
    {
        title: ["Réquiem por un sueño", "Requiem for a dream"],
        description: "Película dramática estrenada en el año 2000.",
        audio: "audio/requiemforadream.mp3",
        hints: [
            "Escrita y dirigida por Darren Aronofsky.",
            "Basada en la novela homónima de Hubert Selby Jr de 1978.",
            "Protagonizada por Ellen Burstyn, Jared Leto, Jennifer Connelly y Marlon Wayans."
        ]
    },
    {
        title: ["Mandy"],
        description: "Película de terror y acción con influencias lovecraftianas estrenada en el año 2018.",
        audio: "audio/mandy.mp3",
        hints: [
            "Escrita y dirigida por Panos Cosmatos.",
            "Protagonizada por Nicolas Cage, Andrea Riseborough, Linus Roache y Richard Brake.",
            "Es una de las últimas películas anotadas por el compositor islandés Jóhann Jóhannsson, quien falleció en febrero de 2018. La película está dedicada a él."
        ]
    },
    {
        title: ["Color Out Of Space"],
        description: "Película de terror y ciencia ficción lovecraftiana estrenada en el año 2019.",
        audio: "audio/coloroutofspace.mp3",
        hints: [
            "Producida por Spectrevisión, la productora de Elijah Wood. Basada en el relato homónimo de H.P. Lovecraft.",
            "Es el primer largometraje dirigido por Richard Stanley desde La isla del Dr. Moreau en 1996.",
            "Protagonizada por Nicolas Cage,​ Joely Richardson, Madeleine Arthur, Q'orianka Kilcher y Tommy Chong."
        ]
    },
    {
        title: ["El Faro", "The Lighthouse"],
        description: "Película de terror y fantasía estrenada en el año 2019.",
        audio: "audio/elfaro.mp3",
        hints: [
            "Escrita y dirigida por Robert Eggers.",
            "Protagonizada por Willem Dafoe y Robert Pattinson.",
            "Está grabada en blanco y negro, y con una relación de aspecto de 1.19:1."
        ]
    }
];

// Juego creado sin ánimo de lucro por Wildcrow

let usedIndexes = [];
let currentMovie = null;
let currentScore = 0;
let hintPenalty = 0;
let startTime = null;
let intentosRestantes = 3;
let mejorRacha = 0;


const introEl = document.getElementById("intro");
const quizEl = document.getElementById("quiz-container");
const nameInput = document.getElementById("name-input");
const startBtn = document.getElementById("start-btn");

const descriptionEl = document.getElementById("description");
const audioEl = document.getElementById("audio");
const hintsContainer = document.getElementById("hints-container");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const surrenderBtn = document.getElementById("surrender-btn");
const resultMessage = document.getElementById("result-message");
const scoreEl = document.getElementById("score");

const infoBtn = document.getElementById("info-btn");
const infoBox = document.getElementById("info-box");

let playerName = "";
let modo = "normal";

const modoBtn = document.getElementById("modo-btn");
const modoMenu = document.getElementById("modo-menu");
const modoOpciones = document.querySelectorAll(".modo-opcion");
const changelogBtn = document.getElementById("changelog-btn");
const changelogBox = document.getElementById("changelog-box");

let rachaCorrectas = 0;
const streakEl = document.getElementById("streak");

function updateStreak() {
    streakEl.textContent = `Racha: ${rachaCorrectas}`;
}

function limpiarTexto(texto) {
    return texto
        .trim() // Elimina espacios al principio y al final
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}


modoBtn.onclick = () => {
    introEl.style.display = "none";
    modoMenu.style.display = "block";
};

modoOpciones.forEach((btn) => {
    btn.addEventListener("click", () => {
        modo = btn.dataset.modo;

        // Oculta el menú de modos y vuelve a mostrar la intro
        modoMenu.style.display = "none";
        introEl.style.display = "block";

        startBtn.style.display = "inline-block";

        // Cambiar texto del botón para reflejar el modo elegido
        let textoModo = "";
        if (modo === "normal") textoModo = "Modo seleccionado: Normal";
        else if (modo === "contrarreloj") textoModo = "Modo seleccionado: Contrarreloj";
        else if (modo === "extremo") textoModo = "Modo seleccionado: Extremo";
        else if (modo === "locura") textoModo = "Modo seleccionado: Locura";

        modoBtn.textContent = textoModo;
    });
});

document.getElementById("ranking-btn").onclick = () => {
  window.location.href = "ranking.html";
};


infoBtn.onclick = () => {
    changelogBox.style.display = "none";
    infoBox.style.display = infoBox.style.display === "none" ? "block" : "none";
};

changelogBtn.onclick = () => {
    infoBox.style.display = "none";
    changelogBox.style.display = changelogBox.style.display === "none" ? "block" : "none";
};

document.getElementById("offline-btn").onclick = () => {
  window.location.href = "offline.html";
};

nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startBtn.click();
    }
});

answerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        submitBtn.click();
    }
});

startBtn.onclick = () => {
    const name = nameInput.value.trim();
    if (name === "") {
        alert("Por favor, introduce tu nombre para comenzar.");
        return;
    }
    playerName = name;
    introEl.style.display = "none";
    quizEl.style.display = "block";

    if (modo === "contrarreloj") {
        startTime = Date.now();
    }

    loadNextMovie();
};

function loadNextMovie() {
  if (usedIndexes.length === movies.length) {
    currentMovie = null;

    let mensajeFinal = "¡Has completado el juego por ahora, pero pronto habrá más películas!";
    let bonus = 0;
    let tiempoTotalMs = null;

    if (modo === "contrarreloj") {
      tiempoTotalMs = Date.now() - startTime;
      const minutos = Math.floor(tiempoTotalMs / 60000);

      if (minutos <= 60) bonus = 50;
      else if (minutos <= 120) bonus = 30;
      else if (minutos <= 180) bonus = 15;

      currentScore += bonus;
      scoreEl.textContent = `Puntuación de ${playerName}: ${currentScore}`;
      mensajeFinal = `¡Has completado el juego en ${minutos} minutos.\nBonus por tiempo: +${bonus} puntos.`;
    }

    descriptionEl.textContent = mensajeFinal;
    audioEl.style.display = "none";
    hintsContainer.innerHTML = "";
    answerInput.style.display = "none";
    submitBtn.style.display = "none";
    surrenderBtn.style.display = "none";
    resultMessage.textContent = "";
    streakEl.textContent = `Racha más grande: ${mejorRacha}`;

    // Guardar resultado en Firestore
// Guardar resultado en Firestore
if (typeof guardarResultadoEnFirestore === 'function') {
  try {
    guardarResultadoEnFirestore(
      playerName,
      currentScore,
      modo,
      mejorRacha,
      modo === "contrarreloj" ? tiempoTotalMs : null
    );
  } catch (error) {
    console.error("❌ No se pudo guardar el resultado en Firestore:", error);
  }
} else {
  console.warn("⚠️ La función guardarResultadoEnFirestore no está disponible.");
}


    // Mensaje y botón de ranking
    const mensajeExtra = document.createElement("p");
    mensajeExtra.textContent = "Tus datos han sido enviados automáticamente al ranking.";
    mensajeExtra.style.marginTop = "1rem";

    const rankingBtnFinal = document.createElement("button");
    rankingBtnFinal.textContent = "Ver Ranking";
    rankingBtnFinal.onclick = () => {
      window.location.href = "ranking.html";
    };
    rankingBtnFinal.style.display = "block";
    rankingBtnFinal.style.margin = "2rem auto 0 auto";
    rankingBtnFinal.style.padding = "0.75rem 1.5rem";
    rankingBtnFinal.style.fontSize = "1.2rem";
    rankingBtnFinal.style.cursor = "pointer";

    quizEl.appendChild(mensajeExtra);
    quizEl.appendChild(rankingBtnFinal);

    return;
  }

  let index;
  do {
    index = Math.floor(Math.random() * movies.length);
  } while (usedIndexes.includes(index));

  usedIndexes.push(index);
  currentMovie = movies[index];
  hintPenalty = 0;
  intentosRestantes = 3;
  document.getElementById("total-answered").textContent = `Películas respondidas: ${usedIndexes.length}`;

if (modo === "locura") {
  descriptionEl.textContent = ""; // sin descripción
  hintsContainer.innerHTML = ""; // sin pistas
  surrenderBtn.style.display = "none"; // sin botón de rendirse
  intentosRestantes = 1; // solo un intento
} else {
  descriptionEl.textContent = currentMovie.description;
  hintsContainer.innerHTML = "";

  if (modo !== "extremo") {
    currentMovie.hints.forEach((hint, i) => {
      const btn = document.createElement("button");
      btn.textContent = `Mostrar pista ${i + 1}`;
      const div = document.createElement("div");
      div.className = "spoiler";
      div.textContent = hint;

      btn.onclick = () => {
        const isHidden = window.getComputedStyle(div).display === "none";
        div.style.display = isHidden ? "block" : "none";
        if (isHidden && !btn.revealed) {
          hintPenalty++;
          btn.revealed = true;
          updateScore(0);
        }
      };

      hintsContainer.appendChild(btn);
      hintsContainer.appendChild(div);
    });
  }

  surrenderBtn.style.display = "inline-block";
  intentosRestantes = 3; // por defecto
}

const audioUrl = currentMovie.audio;

(async () => {
  try {
    const cache = await caches.open('qsdcine');
    const response = await cache.match(audioUrl);

    if (response) {
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      audioEl.src = objectUrl;
    } else {
      audioEl.src = audioUrl; // fallback
    }

    audioEl.style.display = "block";
    audioEl.play();
  } catch (error) {
    console.error("Error al cargar el audio:", error);
    audioEl.src = audioUrl; // por si acaso
    audioEl.style.display = "block";
    audioEl.play();
  }
})();




  resultMessage.textContent = "";
  answerInput.value = "";
  answerInput.focus();
}

function updateScore(points) {
    if (points) currentScore += points;
    scoreEl.textContent = `Puntuación de ${playerName}: ${currentScore}`;
}

submitBtn.onclick = () => {
    if (!currentMovie) return;

    const answer = limpiarTexto(answerInput.value.trim());
    const titles = Array.isArray(currentMovie.title) ? currentMovie.title : [currentMovie.title];
    const isCorrect = titles.some((t) => limpiarTexto(t) === answer);

        if (modo === "locura") {
  if (isCorrect) {
    let score = 10;
    rachaCorrectas++;
    if (rachaCorrectas > mejorRacha) {
      mejorRacha = rachaCorrectas;
    }

    // Bonus por racha
    if (rachaCorrectas % 10 === 0 && rachaCorrectas <= movies.length) {
      resultMessage.textContent = `¡Correcto! 🔥 Bonificación por racha de ${rachaCorrectas}: +${rachaCorrectas} puntos extra!`;
      score += rachaCorrectas;
    } else {
      resultMessage.textContent = "¡Correcto!";
    }

    resultMessage.className = "correcto";
    updateScore(score);
    updateStreak();
  } else {
    updateScore(-20);
    rachaCorrectas = 0;
    updateStreak();
    const mostrarTitulo = Array.isArray(currentMovie.title) ? currentMovie.title[0] : currentMovie.title;
    resultMessage.textContent = "Incorrecto. Era: " + mostrarTitulo;
    resultMessage.className = "incorrecto";
  }

  setTimeout(loadNextMovie, 2000);
  return;
}
    
    
    if (isCorrect) {
        let score;
        if (modo === "extremo") {
            score = 7;
        } else {
            score = 5 - hintPenalty;
            if (score < 0) score = 0;
        }

        rachaCorrectas++;
        if (rachaCorrectas > mejorRacha) {
            mejorRacha = rachaCorrectas;
        }

        // Bonificación por racha
        if (rachaCorrectas % 10 === 0 && rachaCorrectas <= movies.length) {
            resultMessage.textContent = `¡Correcto! 🔥 Bonificación por racha de ${rachaCorrectas}: +${rachaCorrectas} puntos extra!`;
            score += rachaCorrectas;
        } else {
            resultMessage.textContent = "¡Correcto!";
        }

        resultMessage.className = "correcto";
        updateScore(score);
        updateStreak();
        setTimeout(loadNextMovie, 2000);
    } else {
        if (modo === "extremo") {
            intentosRestantes--;

            if (intentosRestantes <= 0) {
                updateScore(-3);
                rachaCorrectas = 0;
                updateStreak();
                const mostrarTitulo = Array.isArray(currentMovie.title) ? currentMovie.title[0] : currentMovie.title;
                resultMessage.textContent = "Intentos agotados. Era: " + mostrarTitulo;
                resultMessage.className = "incorrecto";
                setTimeout(loadNextMovie, 2000);
            } else {
                updateScore(-3);
                rachaCorrectas = 0;
                updateStreak();
                resultMessage.textContent = `Incorrecto. Intentos restantes: ${intentosRestantes}`;
                resultMessage.className = "incorrecto";
                answerInput.value = "";
                setTimeout(() => answerInput.focus(), 50);
            }
        } else {
            rachaCorrectas = 0;
            updateStreak();
            resultMessage.textContent = "Incorrecto. Sigue intentando...";
            resultMessage.className = "incorrecto";
            answerInput.value = "";
            setTimeout(() => answerInput.focus(), 50);
        }
    }
};

surrenderBtn.onclick = () => {
    if (!currentMovie) return;

    if (modo === "extremo") {
        updateScore(-5);
    } else {
        updateScore(-3); // penalización en modo normal y contrarreloj
    }

    const mostrarTitulo = Array.isArray(currentMovie.title) ? currentMovie.title[0] : currentMovie.title;
    resultMessage.textContent = "La respuesta era: " + mostrarTitulo;
    resultMessage.className = "incorrecto";
    rachaCorrectas = 0;
    updateStreak();
    setTimeout(loadNextMovie, 2000);
};


// Juego creado sin ánimo de lucro por Wildcrow
