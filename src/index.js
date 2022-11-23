//Archivo de punto de entrada

import App from './containers/App.svelte';

const app = new App({
    //target, a donde voy a empujar la app
    target: document.querySelector('main')
});

export default app;