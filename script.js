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

        // $('#myInput').on('keyup', function(){
        //     let value = $(this).val().toLowerCase();
        //     $('tbody tr').filter(function(){
        //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        //     });
        // });


        $(document).ready(function() {
            $('.search').keyup(function() {
              let search1 = $('.search').eq(0).val().toLowerCase();
              let search2 = $('.search').eq(1).val().toLowerCase();
              $('.s-table tr.data').each(function(i, el) {
                let val1 = $(el).find('td').eq(0).text().trim().toLowerCase()
                let val2 = $(el).find('td').eq(1).text().trim().toLowerCase()
                let ok = (search1 && val1.indexOf(search1) !== -1) || (search2 && val2.indexOf(search2) !== -1)
                if (ok) $(el).closest('tr').show();
                else $(el).closest('tr').hide();
              })
              return
            });
          });

        // $('.option__list li').attr('data-index', function(index) {
        //     return index + 1;
        // });

        // $('.option__list li').attr('id', function(index) {
        //     return (index + 1) + 'c';
        // });

        // $('tbody tr td').attr('id', function(index) {
        //     return (index + 1) + 'c';
        // });


        // $('li#1c').on('click', function(){
        //     $('td').each(function(){

        //         let $td = $(this).attr('id');
        //         if ($td == 'td#1c') {
        //             $(this).css('visibility', 'hidden', 'opacity', '0');
        //         }


        //         // if($('td#1c')){
        //         //     $('td#1c').css('visibility', 'visible', 'opacity', '1');
        //         // } else {
        //         //     $(this).css('visibility', 'hidden', 'opacity', '0');
        //         // }
        //     });
        // });

    });

});




// let $button = $('li');
//     let $char = $('td');

//     console.log($char[1]);
//     console.log($button[1]);


    

//     console.log( $('h2').length );
    
//     $('.btn').on('click', function(){
//         let $x = $('.block');
//         $x.prop('color', '#ff0000');
//         $x.append('This color property: ' + $x.prop('color'));
//         $x.removeProp('color');
//     });

//     // $('.li').attr('id', function(index, valueAttr){
//     //     if (valueAttr === undefined) {
//     //         return 'item-' + (index + 1);
//     //     }
//     // });

//     $('li').attr('data-index', function(index){
//         return index + 1;
//     });

    // let valCheckedColor = $('input[type="radio"][name="color"]:checked').val();
    // console.log(valCheckedColor);


    // let brands = $('#brands').val();
    // let output = brands.join(', ')
    // console.log(output);

    //  $('.block').hover(
    //     function(){
    //     $(this).addClass('block_hover');
    //  },
    //     function(){
    //         $(this).removeClass('block_hover');
    // });



    // let lists = $(' li ');
    // for (let i = 0, length = lists.length; i < length; i++) {
    //     let list = lists[i];
    //     console.log(list.textContent);
    // }

    // let elements = $(' li ');
    // let lastElement = elements.get();
    // console.log(lastElement);
    
    // let listButtons = document.getElementsByTagName('li');
    
    // let countLi = $('li').length;
    // alert(countLi);

    // let countTd = $('td').length;
    // alert(countTd);

    // let numbers = [-1, -3, 2, 0, -4, 3, -5, 6];

    // $.each(numbers, function(index, value) {
    //     if (value > 0) {
    //         alert([value]);
    //     }
    // });

    // let myPlainObject = {key1: 'value1', key2: 'value2', key3: 'value3'};
    // let $myPlainObject = $(myPlainObject);

    // $myPlainObject.prop('key1', 'volume');
    // $myPlainObject.prop('key4', 'value4');

    // $myPlainObject.on('eventName', function() {
    //     console.log('eventName was called');
    // })

    // $myPlainObject.triggerHandler('eventName');

    



    

    // $('.column_B .option__list li').filter(':nth-child(1)').on('click', function() {
    //     $('tbody tr td').each(function() { 
    //         if($(this).attr('class') == 'B') {
    //             $(this).css('visibility', 'hidden', 'opacity', '0');
    //         } else {
    //             // alert('Remove');
    //         }
    //     });
    // });

    // $('.column_C .option__list li').filter(':nth-child(1)').on('click', function() {
    //     $('tbody tr td').each(function() { 
    //         if($(this).attr('class') == 'C') {
    //             $(this).css('visibility', 'hidden', 'opacity', '0');
    //         } else {
    //             // alert('Remove');
    //         }
    //     });
    // });

    // function getRows(override, value) {
    //     var filter = "table tbody tr td";
    //     $("#A,#B,#C").each(function() {
    //         var test = this === override ? value : $(this).val();
    //         if (test !== "Toate") filter += ":contains(" + test + ")"; 
    //     });
    //     return $(filter).parent();
    // }
    
    // $('#A,#B,#C').on('change', function() {
    //     $('table tbody tr').hide();
    //     getRows().show();
    //     $('#A,#B,#C').each(function (i, select) {
    //         $('option', this).each(function () {
    //             $(this).toggle(getRows(select, $(this).text()).length > 0);
    //         });
    //     });
    // });

    

    // $(document).ready(function($) {
    //     var rows = $('table tr').each(function() {
    //         var row = $(this);
    //         var columns = row.children('td');
    
    //         row.data('name-chars', [
    //             columns.eq(0).html()[0].toUpperCase(),
    //             columns.eq(1).html()[0].toUpperCase(),
    //         ]);
    //     });
    
    //     $('select').change(function() {
    //         var char = $(this).val().toUpperCase();
    
    //         rows.each(function() {
    //             var row = $(this);
    //             var chars_to_match = row.data('name-chars');
    //             if($.inArray(char, chars_to_match) > -1) {
    //                 row.show();
    //             }
    //             else {
    //                 row.hide();
    //             }
    //         });
    //     });
    // });


// ====== How to display content from object ===== //

// const PHONE_NUMBER = {
//     'Fire Team': [
//         ['Number 1', '101'],
//         ['Number 2', '112'],
//         ['Number 3', '01']
//     ],
//     'Police': [
//         ['Number 1', '102'],
//         ['Number 2', '112']
//     ],
//     'Ambulence': [
//         ['Number 1', '103'],
//         ['Number 2', '911']
//     ]
// }

// document.querySelector('.content').innerHTML = `<table class="phone"></table>`;

// for(key in PHONE_NUMBER) {
//     let row = document.createElement('tr');
//     row.innerHTML = `<td colspan="2"> ${key} </td>`;
//     document.querySelector('.phone').appendChild(row);

//     for(i = 0; i<PHONE_NUMBER[key].length; i++) {
//         let row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${PHONE_NUMBER[key][i][0]}</td>
//             <td>${PHONE_NUMBER[key][i][1]}</td>
//         `;
//         document.querySelector('.phone').appendChild(row);
//     }
// }


// Выбираем всех детей из document.body

// for (let i = 0; i < document.body.childNodes; i++) {
//     alert(document.body.childNodes[i]);

//     elem.childNodes[0] === elem.firstChild;
//     elem.childNodes[elem.childNodes.length - 1] === elem.lastChild;
// }
