$(document).ready(function () {
    'use strict';
    var el = $('#form-select-name');
if (el.length) {
    $.magnificPopup.open({
        items: {
            src: el
        },
        type: 'inline'
    });
}
    var name;

    $("#btnJoin").click(function() {
        name = $("#inputName").val();
        $(".mfp-close").trigger("click");
    })

    // Set up the connection

    var field, socket, output;

    socket = io.connect(window.location.href);

    // Get a reference to the input

    field = $('textarea#message');

    // Get a reference to the output

    output = $('div.conversation');

    // Handle message submit

    $('a#submitbutton').on('click', function () {

        // Create the message

        var msg;

        msg = field.val();

        socket.emit('send', { message: name+": "+ msg });

        field.val('');

    });

    // Handle incoming messages

    socket.on('message', function (data) {

        // Insert the message

        output.append('<p>' + data + '</p>');

    });

});