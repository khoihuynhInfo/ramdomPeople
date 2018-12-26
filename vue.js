var demo = new Vue({
    el: '#list-people',
    data: {
        isLoading: true,
        peoples: []
    },
    created: function () {
        // after view loaded and readly
        // call api at here so good greet
        this.fetchPeoples();
    },
    methods: {
        fetchPeoples: async function () {
            try {
                const response = await fetch(`
                    https://randomuser.me/api/?results=15
                `);
                const responseJson = await response.json();
                this.peoples = [...responseJson.results];
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    watch: {
        peoples: function (newList) {
            (typeof newList === 'object' && newList) && (setTimeout(() => {
                this.isLoading = false;
            }, 1000));
        }
    }
})


