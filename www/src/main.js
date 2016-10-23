import Vue from 'vue';
import VueResource from 'vue-resource';

import router from './route';
import interceptors from './http/interceptors';
import App from './components/app';


var app = {
    initialize: function() 
    {
        this.bindEvents();
    },

    bindEvents: function() 
    {
        document.addEventListener('deviceready', this.onDeviceReady, false)
    },

    onDeviceReady: deviceReady
};

app.initialize();

function deviceReady()
{
    Vue.use(VueResource);

    let app = Vue.extend(App);

    Vue.http.options.emulateJSON = true;
    
    Vue.http.interceptors.push(interceptors);

    router(app);
}
