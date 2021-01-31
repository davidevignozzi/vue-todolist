new Vue({

    el: '#app',

    data: {

        list: [],
        value: '',
        currentSentence: 'Nuovo Todo',
    },

    methods: {

        addToList: function() {
            this.list.push(this.currentSentence)
        },

        submit: function () {
            this.list.push(this.value)
        },
        
        removeFromList: function (index) {
            this.list.splice(index, 1)
        },
    },


});
Vue.config.devtools = true;