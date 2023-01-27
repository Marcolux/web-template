console.log('hello world');
console.log('all the time');
var colorLabel = '#ff9d00';
var allTheRadiosNav = document.querySelectorAll('.inputNav');
if (allTheRadiosNav) {
    allTheRadiosNav.forEach(function (label) {
        // const radio = label.children[0] as HTMLInputElement
        // radio.checked ? label.style.backgroundColor = colorLabel : label.style.backgroundColor = 'none'
        label.addEventListener('click', function () {
            console.log(label.checked);
        });
        // radio.addEventListener('change', ()=>{
        //     radio.checked ? label.style.backgroundColor = "#ff9d00" : label.style.backgroundColor = 'none';
        //     radio.checked ? console.log(label.style.backgroundColor) : console.log(radio.checked);
        // })
    });
}
