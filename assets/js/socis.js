var socis = {
    pages : [
        [$('.page0')],
        [$('.page1'), $('#fullName'), $('#birthDate'), $('#id')],
        [$('.page2'), $('#location'), $('#zipCode'), $('#email'), $('#phone')],
        [$('.page3'), $('#univInfo'), $('#ocupation'), $('#workplace'), $('#title'), $('#submissionType')],
        [$('.page4'), $('#accountNumber')]
    ],
    currentPage : 0,
    currentUser : []
};

showCurrentDisplay();

$("#start-form").click(function(){
    socis.currentPage = 1;
    showCurrentDisplay();
});

$(".form").submit(function(event){
    getInfo(socis.pages[socis.currentPage]);
    if(socis.currentPage < socis.pages.length - 1){
        socis.currentPage++;
        showCurrentDisplay();
        event.preventDefault();
        return;
    }
    socis.currentPage = 0;
    console.log(socis.currentUser);
});

//show display of the current page in display
function showCurrentDisplay(){
    $('.page').hide();
    socis.pages[socis.currentPage][0].show();
}

//get info according to which page I am in
function getInfo(array){
    for(var i  = 1; i < array.length; ++i){
        socis.currentUser.push(array[i].val());
    }
}