document.addEventListener('readystatechange', (event) => {
    if (document.readyState === "complete" || document.readyState === "loaded") {
        let preloaderEl = document.getElementById('preloader');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');
    
        let preloaderImg = document.getElementById('preloader-image');

        function logoVisible() {
            preloaderImg.classList.remove('hidden');
            preloaderImg.classList.add('visible');
        }

        function logoHidden() {
            preloaderImg.classList.remove('visible');
            preloaderImg.classList.add('hidden');
        }

        // function logoVisibleRun() {
        //     timeRun = setTimeout(function() {
        //         setTimeout(function() {
        //             logoVisible();
        //         }, 1500);
        //         setTimeout(function() {
        //             logoHidden();
                    
        //         }, 2500);
        //         setTimeout(function() {
        //             preloaderEl.style.display = 'none';
        //             preloaderImg.style.display = 'none';
                    
        //         }, 3000)
        //     }, 100);
        // }
        // logoVisibleRun();



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
                
            }, 3000)
        });




        // var promise = new Promise(function(resolve, reject) {
        //     setTimeout(function() {
        //         console.log(1);
        //         resolve(logoVisible());
        //     }, 2000);
        // });
        
        // promise.then(function(data) {
        //     setTimeout(function() {
        //         console.log(2);
        //         logoHidden();
                
        //     }, 2500);
        // });
        
        // promise.then(function(data) {
        //     setTimeout(function() {
        //         console.log(3);
        //         preloaderEl.style.display = 'none';
        //         preloaderImg.style.display = 'none';
                
        //     }, 3000)
        // });

       
    };
});



// document.addEventListener('readystatechange', (event) => {
//     if (document.readyState === "complete" || document.readyState === "loaded") {
//         let preloaderEl = document.getElementById('preloader');
//         preloaderEl.classList.add('hidden');
//         preloaderEl.classList.remove('visible');
//         let preloaderImg = document.getElementById('preloader-image');

//         function logoVisible() {
//             preloaderImg.classList.remove('hidden');
//             preloaderImg.classList.add('visible');
//         }

//         function logoHidden() {
//             preloaderImg.classList.remove('visible');
//             preloaderImg.classList.add('hidden');
//         }

//         function logoVisibleRun() {
//             timeRun = setTimeout(function() {
//                 setTimeout(function() {
//                     logoVisible();
//                 }, 1500);
//                 setTimeout(function() {
//                     logoHidden();
//                 }, 2500)
//             }, 100);
//         }
//         logoVisibleRun();
//     };
// });
