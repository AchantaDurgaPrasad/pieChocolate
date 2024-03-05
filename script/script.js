document.addEventListener("DOMContentLoaded", function(event) {
    var logo = document.getElementById('logo');
    var moveObject = document.getElementById('moveObject');

    moveObject.addEventListener('click', function() {
        logo.classList.add('move-center', 'rotate');
        setTimeout(function() {
            logo.classList.remove('move-center', 'rotate');
        }, 2000); // 2 seconds for 2 rotations
    });
});
