// For Mobile devices
// Side bar accordion
const sideBar_acc = document.getElementsByClassName('sideBar-accordion');

for(i = 0; i < sideBar_acc.length; i++){
    sideBar_acc[i].addEventListener('click', function(){
        console.log('active');
        this.classList.toggle('active');
    })
}