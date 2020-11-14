function modal_display(display, element){
    console.log(element)
    if(display === true) element.css("display","block");
    else element.css("display","none");
}
$(".week-btn").click(function(){
    modal = $(this).siblings(".chartBar-modal-wrap");
    modal_display(true ,modal);
})
$(".chartBar-modal-wrap").click(function(){
    modal_display(false, $(this));
})