$(document).ready(function() {
    
    $.getJSON('test.json', function (data) {
        let test = '';

        $.each(data, function(key, value) {

            test += '<tr>';
            test += '<td class="A">' +
                value.company + '</td>';
            test += '<td class="B">' +
                value.contact + '</td>';
            test += '<td class="C">' +
                value.country + '</td>';
            test += '</tr>';

        });

        $('#table tbody').append(test);
        
        $('tbody tr').attr('id', function(index) {
            return (index + 1) + 'c';
        });

        $('#input_A, #input_B, #input_C').on('focus', function(){
            $(this).toggleClass('focus');
        });

        $('#input_A, #input_B, #input_C').on('blur', function(){
            $(this).removeClass('focus');
        });

        $('#input_A').keyup(function() {
            let inputValue_A = $('#input_A').val();

            $('tbody tr').each(function(){
                $(this).css('visibility', 'hidden', 'opacity', '0');

                if (inputValue_A == $(this).attr('id')){
                    $(this).children('td:nth-child(1)').css('visibility', 'visible', 'opacity', '1');
                } else if(!inputValue_A) {
                    $(this).css('visibility', 'visible', 'opacity', '1');
                }
            });
        });

        $('#input_B').keyup(function() {
            let inputValue_B = $('#input_B').val();

            $('tbody tr').each(function(){
                $(this).css('visibility', 'hidden', 'opacity', '0');

                if (inputValue_B == $(this).attr('id')){
                    $(this).children('td:nth-child(2)').css('visibility', 'visible', 'opacity', '1');
                } else if(!inputValue_B) {
                    $(this).css('visibility', 'visible', 'opacity', '1');
                }
            });
        });

        $('#input_C').keyup(function() {
            let inputValue_C = $('#input_C').val();

            $('tbody tr').each(function(){
                $(this).css('visibility', 'hidden', 'opacity', '0');

                if (inputValue_C == $(this).attr('id')){
                    $(this).children('td:nth-child(3)').css('visibility', 'visible', 'opacity', '1');
                } else if(!inputValue_C) {
                    $(this).css('visibility', 'visible', 'opacity', '1');
                }
            });
        });
    });
});
