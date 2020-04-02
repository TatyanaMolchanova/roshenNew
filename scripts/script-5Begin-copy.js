// Preloader
document.addEventListener('readystatechange', (event) => {
    if (document.readyState === "complete" || document.readyState === "loaded") {
        let preloaderEl = document.getElementById('preloader');
        let preloaderImg = document.getElementById('preloader-image');
        let content = document.querySelector('.content');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');

        function logoVisible() {
            preloaderImg.classList.remove('hidden');
            preloaderImg.classList.add('visible');
        }

        function logoHidden() {
            preloaderImg.classList.remove('visible');
            preloaderImg.classList.add('hidden');
        }

        var promise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log(1);
                resolve(logoVisible());
            }, 2000);
        })
        .then(function(data) {
            setTimeout(function() {
                console.log(2);
                logoHidden();
                
            }, 2500);
        })
        .then(function(data) {
            setTimeout(function() {
                console.log(3);
                preloaderEl.style.display = 'none';
                preloaderImg.style.display = 'none';
                content.style.display = 'block';
            }, 3000)
        });
    };
});

$( document ).ready(function() {

   
});

