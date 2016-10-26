<template>
    <div>
        <xg-header></xg-header>
        <div>
            <button v-on:click="login()">登录</button>
        </div>
        <xg-main-tabs></xg-main-tabs>
    </div>
    
</template>
<script>
    import MainHeader from './header';
    import MainTabs from './main_tabs';
    import CONSTANT from '../constant';

    export default {
        data() {
            return {
                title: 'This is Home Page!'
            }
        },
        components: {
            'xg-header': MainHeader,
            'xg-main-tabs': MainTabs
        },
        methods: {
            login: function() {
                let url = CONSTANT.URL.LOGIN;
                let resource = this.$resource(url);

                let params = {
                    username: '18999999991',
                    password: '111111'
                };

                resource.save(null, params)
                    .then((response) => {
                        console.log(response);
                    })
            }
        }
    }
</script>