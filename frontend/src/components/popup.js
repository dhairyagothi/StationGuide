window.onload = function() {
    document.getElementById('popup').style.display = 'flex';
};
//load on website pop up


document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    if (email) {
        alert(`Welcome ! To Station Sarthi , May you have a wonderful Journey ${email}`);
        document.getElementById('popup').style.display = 'none';
    }
    
});