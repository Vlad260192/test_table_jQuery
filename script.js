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
        
        $('#company, #contact, #country').on('focus', function() {
            $(this).toggleClass('focus');
        });

        $('#company, #contact, #country').on('blur', function() {
            $(this).removeClass('focus');
        });
        
        $('tbody tr').each(function(){
            $(this).children(':nth-child(1)').attr('data-input', 'company');
            $(this).children(':nth-child(2)').attr('data-input', 'contact');
            $(this).children(':nth-child(3)').attr('data-input', 'country');
        });

        let $filterRows = $('#table tbody').find('tr');
        let $inputs = $('#company, #contact, #country');
        
        $inputs.on('keyup', function(){
            
            $filterRows.hide().filter(function(){
                return $(this).find('td').filter(function() {

                    let tdText = $(this).text().toLowerCase();
                    let inputValue = $('#' + $(this).data('input')).val().toLowerCase();

                return tdText.indexOf(inputValue) != -1;

                }).length == $(this).find('td').length;
            }).show();
        });
    });
});

