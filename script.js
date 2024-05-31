// For Mobile devices
const sideBar_acc = document.getElementsByClassName('sideBar-accordion');
const body = document.querySelector('body');
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

// For Bigger screens ****************************
let subSel = $('header .sub-menu .under1 .sub-sel');
subSel.hover(function(){
    subSel.removeClass('active');
    $(this).addClass('active');

    let talent = $(this).hasClass('tal');
    let catalog = $(this).hasClass('cat');
    let consultation = $(this).hasClass('con');

    $('.bigScreen-nav .sub-menu .sub2 .talent').css('display', 'none')
    $('.bigScreen-nav .sub-menu .sub2 .catalog').css('display', 'none')
    $('.bigScreen-nav .sub-menu .sub2 .consultations').css('display', 'none')

    switch(true){
        case talent:
            $('.bigScreen-nav .sub-menu .sub2 .talent').css('display', 'flex')
            break;
        case  catalog:
            $('.bigScreen-nav .sub-menu .sub2 .catalog').css('display', 'flex')
            break;
        case  consultation:
            $('.bigScreen-nav .sub-menu .sub2 .consultations').css('display', 'flex')
            break;
    }
})

$('header .bigScreen-nav .search-drop .view-box').click(function(){
    $('header .bigScreen-nav .search-drop .dropdown').toggleClass('active');
})

$('.bigScreen-nav .search-drop .dropdown .option').click(function(){

    switch (true){
        case $(this).hasClass('talent'):
            let talent = $('.bigScreen-nav .search-drop .dropdown .option .talent').text()
            console.log(talent)
            $('header .bigScreen-nav .search-drop .view-box p').text(talent)
    }
})