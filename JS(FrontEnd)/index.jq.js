$(function(){
    $('p').append(" India")
    $('p').prepend("Hey ")
    $('p').before('<p> I am before </p>')
    $('p').after('<p> I am after </p>')
    $('p').css('color', 'red')
    $('#myId').css('background-color','pink')
    $('.myClass').addClass('a')


    $('#myId').mouseenter(
        function(){
            $(this).css('background-color','yellow')
        }
    )
    $('#myId').mouseleave(
        function(){
            $(this).css('background-color','blue')
        }
    )

    $('#myInput').keydown(
        function(){
            $(this).css('background-color','aqua')
        }
    )
    $('#myInput').keyup(
        function(){
            $(this).css('background-color','wheat')
        }
    )

})