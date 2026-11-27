const workerReady = (async () => {
  if (!('serviceWorker' in navigator)) throw new Error('Se necesita HTTPS y un navegador compatible con el modo offline.');
  const registration = await navigator.serviceWorker.register('./service-worker.js');
  const worker = registration.installing || registration.waiting;
  if (worker) {
    await new Promise((resolve, reject) => {
      function check() {
        if (worker.state === 'activated') resolve();
        if (worker.state === 'redundant') reject(new Error('No se pudo guardar la aplicación. Comprueba la conexión y vuelve a abrir esta página.'));
      }
      worker.addEventListener('statechange', check);
      check();
    });
  }
  return navigator.serviceWorker.ready;
})();
workerReady.catch(console.warn);
