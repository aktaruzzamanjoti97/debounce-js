const input = document.getElementById('input')

// debounce handler
function debounce(fn, delay) {
    let timeoutId;

    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            fn()
        }, delay);
    }
}

input.addEventListener('change', debounce(function (e) {
    console.log(input.value);
}, 500))