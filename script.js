new Vue({
    el: '#app',
    data: {
        surpriseClicked: false,
    },
    methods: {
        navigateToSurprise() {
            this.surpriseClicked = true;
            setTimeout(() => {
                window.location.href = 'surprise.html'; // Redirect ke halaman surprise
            }, 2000); // Tunggu 2 detik
        }
    }
});
