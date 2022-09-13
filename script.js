// ===== First variant ===== //

$(document).ready(function() {
    
    $.getJSON('test.json', function (data) {
        let test = '';

        $.each(data, function(key, value) {

            test += '<tr>';
            test += '<td>' +
                value.company + '</td>';
            test += '<td>' +
                value.contact + '</td>';
            test += '<td>' +
                value.country + '</td>';
            test += '</tr>';

        });

        $('#table tbody').append(test);
        
        $('#input_A, #input_B, #input_C').on('focus', function(){
            $(this).toggleClass('focus');
        });

        $('#input_A, #input_B, #input_C').on('blur', function(){
            $(this).removeClass('focus');
        });
        
        $('#input_A').on('keyup', function() {
            let inputValue = $(this);

            $.each( $('tbody tr'), function() {
                if ( $(this).children(':nth-child(1)').text().toLowerCase().indexOf( $(inputValue).val().toLowerCase()) == -1 ) {
                    $(this).addClass('hide');
                }else {
                    $(this).removeClass('hide');
                }
            });
        });

        $('#input_B').on('keyup', function() {
            let inputValue = $(this);

            $.each( $('tbody tr'), function() {
                if ( $(this).children(':nth-child(2)').text().toLowerCase().indexOf( $(inputValue).val().toLowerCase()) == -1 ) {
                    $(this).addClass('hide');;
                }else {
                    $(this).removeClass('hide');;
                }
            });
        });

        $('#input_C').on('keyup', function() {
            let inputValue = $(this);

            $.each( $('tbody tr'), function() {
                if ( $(this).children(':nth-child(3)').text().toLowerCase().indexOf( $(inputValue).val().toLowerCase()) == -1 ) {
                    $(this).addClass('hide');;
                }else {
                    $(this).removeClass('hide');;
                }
            });
        });
    });
});


// ============================================= //


// ===== Second variant ===== //

// $(document).ready(function() {
    
//     $.getJSON('test.json', function (data) {
//         let test = '';

//         $.each(data, function(key, value) {

//             test += '<tr>';
//             test += '<td>' +
//                 value.company + '</td>';
//             test += '<td>' +
//                 value.contact + '</td>';
//             test += '<td>' +
//                 value.country + '</td>';
//             test += '</tr>';

//         });

//         $('#table tbody').append(test);
        
//         $('#input_A, #input_B, #input_C').on('focus', function(){
//             $(this).toggleClass('focus');
//         });

//         $('#input_A, #input_B, #input_C').on('blur', function(){
//             $(this).removeClass('focus');
//         });
        
//         $('#input_A').on('keyup', function() {
            
//             let inputValue = $(this).val().toLowerCase();
        
//             $('tbody tr').filter(function() {
//                 $(this).toggle( $(this).children(':nth-child(1)').text().toLowerCase().indexOf(inputValue) > -1 );
//             });
//         });

//         $('#input_B').on('keyup', function() {
            
//             let inputValue = $(this).val().toLowerCase();
        
//             $('tbody tr').filter(function() {
//                 $(this).toggle( $(this).children(':nth-child(2)').text().toLowerCase().indexOf(inputValue) > -1 );
//             });
//         });

//         $('#input_C').on('keyup', function() {
            
//             let inputValue = $(this).val().toLowerCase();
        
//             $('tbody tr').filter(function() {
//                 $(this).toggle( $(this).children(':nth-child(3)').text().toLowerCase().indexOf(inputValue) > -1 );
//             });
//         });
//     });
// });

// ============================================= //


// ===== Dumb variant ===== //

// $(document).ready(function() {
    
//     $.getJSON('test.json', function (data) {
//         let test = '';

//         $.each(data, function(key, value) {

//             test += '<tr>';
//             test += '<td class="A">' +
//                 value.company + '</td>';
//             test += '<td class="B">' +
//                 value.contact + '</td>';
//             test += '<td class="C">' +
//                 value.country + '</td>';
//             test += '</tr>';

//         });

//         $('#table tbody').append(test);
        
//         $('tbody tr').attr('id', function(index) {
//             return (index + 1) + 'c';
//         });

//         $('#input_A, #input_B, #input_C').on('focus', function(){
//             $(this).toggleClass('focus');
//         });

//         $('#input_A, #input_B, #input_C').on('blur', function(){
//             $(this).removeClass('focus');
//         });

//         $('#input_A').keyup(function() {
//             let inputValue_A = $('#input_A').val();

//             $('tbody tr').each(function(){
//                 $(this).css('visibility', 'hidden', 'opacity', '0');

//                 if (inputValue_A == $(this).attr('id')){
//                     $(this).children('td:nth-child(1)').css('visibility', 'visible', 'opacity', '1');
//                 } else if(!inputValue_A) {
//                     $(this).css('visibility', 'visible', 'opacity', '1');
//                 }
//             });
//         });

//         $('#input_B').keyup(function() {
//             let inputValue_B = $('#input_B').val();

//             $('tbody tr').each(function(){
//                 $(this).css('visibility', 'hidden', 'opacity', '0');

//                 if (inputValue_B == $(this).attr('id')){
//                     $(this).children('td:nth-child(2)').css('visibility', 'visible', 'opacity', '1');
//                 } else if(!inputValue_B) {
//                     $(this).css('visibility', 'visible', 'opacity', '1');
//                 }
//             });
//         });

//         $('#input_C').keyup(function() {
//             let inputValue_C = $('#input_C').val();

//             $('tbody tr').each(function(){
//                 $(this).css('visibility', 'hidden', 'opacity', '0');

//                 if (inputValue_C == $(this).attr('id')){
//                     $(this).children('td:nth-child(3)').css('visibility', 'visible', 'opacity', '1');
//                 } else if(!inputValue_C) {
//                     $(this).css('visibility', 'visible', 'opacity', '1');
//                 }
//             });
//         });
//     });
// });
