(function(window, document, undefined) {
    window.onload = changer;

    function changer() {
        let title = document.getElementById("website-title")
        let originalTitle = "Welcome"

        let titleText = "Welcome"
        setTimeout(() => {
        let interval = setInterval(() => {
            titleText = titleText.slice(1)
            title.innerHTML = titleText
            console.log(titleText)

            if (titleText.length < 1) {
                titleText = originalTitle
                clearInterval(interval)
                title.innerHTML = titleText
                title.classList.add("blinker-anim")
            }
        }, 250)
    }, 500)

    
    }
})(window, document, undefined);