import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './components/home';

Vue.use(VueRouter);

const router = new VueRouter();

module.exports = function(app)
{
    router.map({
        '/home': {
            component: function(resolve) {
                resolve(home);
            }
        }
    });

    router.redirect({
        '/': 'home'
    });

    router.start(app, '#app');
}