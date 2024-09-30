new Vue({
    el: '#app',
    data: {
        surpriseClicked: false,
    },
    methods: {
        navigateToSurprise() {
            this.surpriseClicked = true;
            setTimeout(() => {
                window.location.href = 'surprise.html';
            }, 2000);
        }
    }
});
