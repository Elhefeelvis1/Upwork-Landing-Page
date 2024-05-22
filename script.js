// For Mobile devices
const sideBar_acc = document.getElementsByClassName('sideBar-accordion');
let body = document.querySelector('body');
// Side bar accordion
function inputClick(){
    body.classList.toggle('hidden');
}

for(i = 0; i < sideBar_acc.length; i++){
    sideBar_acc[i].addEventListener('click', function(){
        console.log('active');
        this.classList.toggle('active');
    })
}