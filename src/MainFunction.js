$('.login').click(function(){
    $('form').css('display', 'block');

    $(document).not('form').click(function(){
        $('form').css('display', 'none')
    })
})

// let del_form = $(document).not('form').click(function(){
//     $('form').css('display', 'none')
// })