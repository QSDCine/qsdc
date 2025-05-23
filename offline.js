document.addEventListener("DOMContentLoaded", async () => {
  const progresoEl = document.getElementById("progreso");
  const botonDescarga = document.getElementById("descargar-btn");
  const successMsg = document.getElementById("success");
  const errorMsg = document.getElementById("error");
  const volverJuegoBtn = document.getElementById("volver-juego-btn");
  const volverJuegoOnlineBtn = document.getElementById("volver-juego-online");
  const offlineWarning = document.getElementById("offline-warning");
  const onlineUI = document.getElementById("online-ui");


  // Comprobación offline
  setTimeout(() => {
    if (!navigator.onLine) {
      if (offlineWarning) offlineWarning.style.display = "block";
      if (onlineUI) onlineUI.style.display = "none";
      if (volverJuegoBtn) {
        volverJuegoBtn.addEventListener("click", () => {
          window.location.href = "index.html";
        });
      }
    } else {
      if (volverJuegoOnlineBtn) {
        volverJuegoOnlineBtn.addEventListener("click", () => {
          window.location.href = "index.html";
        });
      }
    }
  }, 100); // Delay para asegurar carga

  const audios = ["audio/2001.mp3","audio/28diasdespues.mp3","audio/300.mp3","audio/60segundos.mp3",
    "audio/8millas.mp3","audio/atodogas.mp3","audio/abiertohastaelamanecer.mp3",
    "audio/aceventura.mp3","audio/aladdin.mp3","audio/alien.mp3","audio/amelie.mp3",
    "audio/americanbeauty.mp3","audio/americanhistoryx.mp3","audio/armaletal.mp3",
    "audio/armageddon.mp3","audio/atlantis.mp3","audio/austinpowers.mp3","audio/avengers.mp3",
    "audio/babydriver.mp3","audio/bailandoconlobos.mp3","audio/batman.mp3","audio/beetlejuice.mp3",
    "audio/beowulf.mp3","audio/bigfish.mp3","audio/birdman.mp3","audio/blade.mp3",
    "audio/bladerunner.mp3","audio/bohemianrhapsody.mp3","audio/braveheart.mp3",
    "audio/cadenaperpetua.mp3","audio/carrosdefuego.mp3","audio/comando.mp3","audio/conan.mp3",
    "audio/crepusculo.mp3","audio/deprofesionduro.mp3","audio/deadpool.mp3","audio/deepbluesea.mp3",
    "audio/demolitionman.mp3","audio/dentrodellaberinto.mp3","audio/desperado.mp3",
    "audio/dirtydancing.mp3","audio/dracula.mp3","audio/dragonheart.mp3","audio/dredd.mp3",
    "audio/drive.mp3","audio/dune.mp3","audio/et.mp3","audio/eduardomanostijeras.mp3",
    "audio/elatlasdelasnubes.mp3","audio/elbuenoelfeoyelmalo.mp3","audio/elcuervo.mp3",
    "audio/elequipoa.mp3","audio/elguardaespaldas.mp3","audio/elhobbit.mp3",
    "audio/elhombredelamascaradehierro.mp3","audio/ellobodewallstreet.mp3","audio/elmagodeoz.mp3",
    "audio/elpactodeloslobos.mp3","audio/elpadrino.mp3","audio/elpatriota.mp3",
    "audio/elprimercaballero.mp3","audio/elquintoelemento.mp3","audio/elreyescorpion.mp3",
    "audio/elreyleon.mp3","audio/elsanto.mp3","audio/elsenordelosanillos.mp3",
    "audio/eltrendelas3y10.mp3","audio/elultimogranheroe.mp3","audio/elultimomohicano.mp3",
    "audio/elultimosamurai.mp3","audio/erinbrockovich.mp3","audio/evolution.mp3","audio/flashdance.mp3",
    "audio/footloose.mp3","audio/forrestgump.mp3","audio/frozen.mp3","audio/gangsofnewyork.mp3",
    "audio/ghost.mp3","audio/gladiator.mp3","audio/godzilla.mp3","audio/granstan.mp3","audio/grease.mp3",
    "audio/gru.mp3","audio/halloween.mp3","audio/harrypotter.mp3","audio/hellboy.mp3","audio/hercules.mp3",
    "audio/hero.mp3","audio/hook.mp3","audio/horapunta.mp3","audio/iceage.mp3","audio/indianajones.mp3",
    "audio/interestelar.mp3","audio/ipman.mp3","audio/jamesbond.mp3","audio/johnq.mp3","audio/johnwick.mp3",
    "audio/jungladecristal.mp3","audio/jupiterascending.mp3","audio/kingkong.mp3","audio/kungfupanda.mp3",
    "audio/labusqueda.mp3","audio/lacasadelos1000cadaveres.mp3","audio/lacazadeloctubrerojo.mp3",
    "audio/ladelgadalinearoja.mp3","audio/laespadamagica.mp3","audio/lagranevasion.mp3",
    "audio/lahistoriainterminable.mp3","audio/lajovendelagua.mp3","audio/lalistadeschindler.mp3",
    "audio/lamascara.mp3","audio/lamision.mp3","audio/lamomia.mp3","audio/laprincesaprometida.mp3",
    "audio/laroca.mp3","audio/lavidaesbella.mp3","audio/ladyhalcon.mp3","audio/lastortugasninja.mp3",
    "audio/lellamanbodhi.mp3","audio/littlenicky.mp3","audio/loqueelvientosellevo.mp3",
    "audio/locaacademiadepolicia.mp3","audio/logan.mp3","audio/losangelesdecharlie.mp3",
    "audio/loscazafantasmas.mp3","audio/losgoonies.mp3","audio/losmiserables.mp3","audio/lospicapiedra.mp3",
    "audio/lostresmosqueteros.mp3","audio/madmax.mp3","audio/madmaxfuryroad.mp3",
    "audio/malditosbastardos.mp3","audio/marypoppins.mp3","audio/masterandcommander.mp3",
    "audio/mastersdeluniverso.mp3","audio/matrix.mp3","audio/maverick.mp3","audio/memoriasdeafrica.mp3",
    "audio/meninblack.mp3","audio/mensajerodelfuturo.mp3","audio/mentespeligrosas.mp3",
    "audio/milliondollarbaby.mp3","audio/misionimposible.mp3","audio/mulan.mp3","audio/oceanseleven.mp3",
    "audio/orgulloyprejuicio.mp3","audio/origen.mp3","audio/parquejurasico.mp3",
    "audio/pequeñamisssunshine.mp3","audio/pesadillaantesdenavidad.mp3","audio/pesadillaenelmstreet.mp3",
    "audio/piratasdelcaribe.mp3","audio/pitchblack.mp3","audio/pokemon.mp3","audio/predator.mp3",
    "audio/prettywoman.mp3","audio/pulpfiction.mp3","audio/rambo.mp3","audio/regresoalfuturo.mp3",
    "audio/reservoirdogs.mp3","audio/residentevil.mp3","audio/robinhood.mp3","audio/robocop.mp3",
    "audio/rocky.mp3","audio/romeoyjulieta.mp3","audio/salvaralsoldadoryan.mp3","audio/saw.mp3",
    "audio/scream.mp3","audio/shaft.mp3","audio/sherlockholmes.mp3","audio/shrek.mp3","audio/sincity.mp3",
    "audio/soloencasa.mp3","audio/spacejam.mp3","audio/speed.mp3","audio/spiderman.mp3","audio/starwars.mp3",
    "audio/stardust.mp3","audio/starman.mp3","audio/superman.mp3","audio/tarzan.mp3","audio/terminator.mp3",
    "audio/thepunisher.mp3","audio/theraid.mp3","audio/therevenant.mp3","audio/tiburon.mp3",
    "audio/tiempodematar.mp3","audio/titanic.mp3","audio/toystory.mp3","audio/unamentemaravillosa.mp3",
    "audio/vanhelsing.mp3","audio/venganza.mp3","audio/viernes13.mp3","audio/watchmen.mp3",
    "audio/waterworld.mp3","audio/willow.mp3","audio/xmen.mp3","audio/xxx.mp3","audio/youarenext.mp3",
    "audio/zohan.mp3","audio/tunonegro.mp3","audio/killbill.mp3","audio/mortalkombat.mp3","audio/diasextraños.mp3","audio/avatar.mp3",
    "audio/eventhorizon.mp3","audio/fantasmaopera.mp3","audio/silenciocorderos.mp3","audio/elexorcista.mp3","audio/laprofecia.mp3","audio/dragonball.mp3",
    "audio/intocable.mp3","audio/carrie.mp3","audio/laniebla.mp3","audio/alita.mp3","audio/whiplash.mp3","audio/guardianesgalaxia.mp3","audio/norbit.mp3",
    "audio/startrek.mp3","audio/langdon.mp3","audio/karatekid.mp3","audio/temblores.mp3","audio/rec.mp3","audio/burlesque.mp3","audio/moulinrouge.mp3",
    "audio/nannymcphee.mp3","audio/warcraft.mp3","audio/tenet.mp3","audio/bullettrain.mp3","audio/dnd.mp3","audio/thevoid.mp3",
    "audio/latrampa.mp3","audio/dune2.mp3","audio/rohirrim.mp3","audio/lasirenita.mp3","audio/bellaybestia.mp3","audio/barbie.mp3",
    "audio/showgirls.mp3","audio/13fantasmas.mp3","audio/uncharted.mp3","audio/thesadness.mp3","audio/hellraiser.mp3","audio/alfilodelmañana.mp3",
    "audio/elvis.mp3","audio/topgun.mp3","audio/midsommar.mp3","audio/batmannolan.mp3","audio/batmanpattinson.mp3","audio/jackiebrown.mp3",
    "audio/royale.mp3","audio/hacksawridge.mp3","audio/millennium.mp3","audio/doubtfire.mp3","audio/vietnam.mp3","audio/theone.mp3",
    "audio/badboys.mp3","audio/escapefrom.mp3","audio/chacal.mp3","audio/sextosentido.mp3","audio/cocodrilodundee.mp3",
    "audio/doom.mp3","audio/powder.mp3","audio/insomnio.mp3","audio/zoolander.mp3","audio/thecell.mp3","audio/silenthill.mp3",
    "audio/laliga.mp3","audio/jeeperscreepers.mp3","audio/ravenous.mp3","audio/milmanerasoeste.mp3","audio/vampiros.mp3",
    "audio/rockstar.mp3","audio/rockofages.mp3","audio/losinmortales.mp3","audio/rubiaspelo.mp3","audio/battleroyale.mp3",
    "audio/veronica.mp3","audio/priscilla.mp3","audio/leyendasdepasion.mp3","audio/sleepyhollow.mp3","audio/vidabrian.mp3",
    "audio/entrevistavampiro.mp3","audio/amistadespeligrosas.mp3","audio/poltergeist.mp3","audio/starshiptroopers.mp3",
    "audio/blackswan.mp3","audio/pi.mp3","audio/encuentros.mp3","audio/excalibur.mp3","audio/beethoven.mp3",
    "audio/guerramundialz.mp3","audio/antichrist.mp3","audio/dannythedog.mp3","audio/semilladiablo.mp3",
    "audio/lasustancia.mp3","audio/apocalypse.mp3","audio/requiemforadream.mp3","audio/mandy.mp3","audio/coloroutofspace.mp3",
    "audio/elfaro.mp3"];
  const totalAudios = audios.length;
  const estimacionMB = Math.ceil(totalAudios * 1.95);
  progresoEl.textContent = `0 MB de ${estimacionMB} MB`;

try {
  const cache = await caches.open("qsdcine");
  const cachedRequests = await cache.keys();

cachedRequests.forEach(req => console.log(req.url));


const faltan = audios.some(audio =>
  !cachedRequests.some(req => decodeURIComponent(req.url).endsWith(audio))
);

  


  if (!faltan) {
      
    if (successMsg) {
      successMsg.style.display = "block";
      successMsg.textContent = "✅ Todos los audios están descargados";
    }
    if (botonDescarga) {
      botonDescarga.disabled = true;
      botonDescarga.textContent = "Completado";
    }
  }
} catch (err) {
  console.error("Error comprobando la caché:", err);
}


  let descargados = 0;

botonDescarga.addEventListener("click", async () => {
  descargados = 0;
  botonDescarga.textContent = "Descargando...";
  botonDescarga.disabled = true;
  if (successMsg) successMsg.style.display = "none";
  if (errorMsg) errorMsg.style.display = "none";
  progresoEl.textContent = `0 MB de ${estimacionMB} MB`;

  try {
    const cache = await caches.open("qsdcine");

    for (let i = 0; i < audios.length; i++) {
      try {
        const response = await fetch(audios[i]);
        if (!response.ok) throw new Error(`Fallo en ${audios[i]}`);

        await cache.put(audios[i], response.clone());
        descargados++;
        const progresoMB = (descargados * 1.95).toFixed(1);
        progresoEl.textContent = `${progresoMB} MB de ${estimacionMB} MB`;
      } catch (err) {
        console.error("Error al descargar archivo:", err);
        if (errorMsg) errorMsg.style.display = "block";
        botonDescarga.textContent = "Reintentar";
        botonDescarga.disabled = false; // Permitir reintentar
        return; // Detener descarga si falla uno
      }
    }

    // Si todo va bien
    if (successMsg) successMsg.style.display = "block";
    botonDescarga.textContent = "Completado";
    botonDescarga.disabled = true;

  } catch (error) {
    console.error("Error general en la descarga:", error);
    if (errorMsg) errorMsg.style.display = "block";
    botonDescarga.textContent = "Reintentar";
    botonDescarga.disabled = false;
  }
});

});

