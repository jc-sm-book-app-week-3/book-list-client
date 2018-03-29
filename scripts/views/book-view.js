'use strict';

var app = app || {};
(function (module){

  let bookView = {};
  bookView.initIndexPage=()=>{
    $('.container').hide();
    $('#book-list').empty();
    $('#book-list').show();
    app.Book.all.map(book =>$('#book-list').append(book.toHtml()));
    //bookView.populateFilters();
    //bookView.handleAuthorFilter();
  };
  bookView.initNewBookPage = () => {
    $('.container').hide();
    //$('#book-form').empty();
    $('#book-form').show();
    $('#single-display').hide();
    ('#update-form').hide();
    $('#book-form').on('submit', bookView.submit);
  };
  bookView.submit = event => {
    event.preventDefault();
    let book = new app.Book({
      title: $('#book-title').val(),
      author: $('#book-author').val(),
      isbn: $('#isbn').val(),
      img_url: $('#img-url').val(),
      description: $('#description').val()
    });
    book.insertRecord();
  };

  bookView.initSingleBookPage = (book)=>{
    console.log(book);
    $('.container').hide();
    $('#single-display').empty();
    $('#book-form').hide();
    $('#update-form').hide();
    var template = Handlebars.compile($('#single-template').text());
    $('#single-display').append(template(book));
    $('#single-display').show();
    //bookView.initUpdateFormPage(book);
    $('#update-button').on('click',()=>$(`#update-form`).show());
    $('#submit-update').on('click',()=>bookView.submitUpdate(book) );
  };

  // bookView.initUpdateFormPage = (book) => {
  //   console.log(book);
  //   //   //$('.container').hide();
  //   // //   $('#book-form').empty();
  //   // //   $('#update-form').show();
  //   // //  $('#single-display').hide();
  //   //   var template = Handlebars.compile($('#update-button').text());
  //   //   var book_id = $(template).attr('data-id');
  //   //   console.log(book_id);
  //   //
  // };
  bookView.submitUpdate = (event) => {
    event.preventDefault();
    console.log(book);
    console.log('update');
  //   //let book_id= data property;
  //   let book = new app.Book({
  //     title: $('#book-title').val(),
  //     author: $('#book-author').val(),
  //     isbn: $('#isbn').val(),
  //     img_url: $('#img-url').val(),
  //     description: $('#description').val()
  //   });
  //   book.updateRecord(book_id);
  };


  module.bookView=bookView;
})(app);


// bookView.populateFilters = () => {
//   $('.book-display').each(function() {
//     let val = $(this).find('h2').text();
//     var optionTag = `<option value="${val}">${val}</option>`;
//     if ($(`#author-filter option[value="${val}"]`).length === 0) {
//       $('#author-filter').append(optionTag);
//     }
//     val = $(this).find('h1').text();
//     optionTag = `<option value="${val}">${val}</option>`;
//     if ($(`#title-filter option[value="${val}"]`).length === 0) {
//       $('#title-filter').append(optionTag);
//     }
//   });
// };
// bookView.handleAuthorFilter = () => {
//   $('#author-filter').on('change', function() {
//     if ($(this).val()) {
//       $('.book-display').hide();
//       console.log($(`.book-display`),$(this).val(),$(`#author-filter`));
//       $(`#author-filter option[value="${$(this)}"]`).fadeIn();
//     } else {
//       $('.book-display').fadeIn();
//     }
//     $('#title-filter').val('');
//   });
// };
