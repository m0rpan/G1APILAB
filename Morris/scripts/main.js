const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=Y9sXckxAGaC1yOfpfizascRog15R1porQvOO0Cf4fFM');
  const json = await response.json();
  console.log(json);
})();