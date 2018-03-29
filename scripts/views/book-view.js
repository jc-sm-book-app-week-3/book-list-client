'use strict';

var app = app || {};
(function (module){

  let bookView = {};

  bookView.initNewBookPage = (ctx) => {
    console.log(ctx);
    $('.container').hide();
    $('#book-form').show();
    $('#book-form').on('submit', bookView.submit);
  };
  bookView.initSingleBookPage = (ctx)=>{
    $('.container').hide();
    // $('#single-display').empty();
    $('#book-form').empty();
    let filtered= app.Book.all.filter(x=>x.book_id === ctx.params.book_id)[0];
    console.log(filtered);
    var template = Handlebars.compile($('#single-template').text());
    $('#single-display').append(template(filtered));
    $('#single-display').show();
  };
  bookView.submit = event => {
    console.log('now');
    //event.preventDefault();
    let book = new app.Book({
      title: $('#book-title').val(),
      author: $('#book-author').val(),
      isbn: $('#isbn').val(),
      img_url: $('#img-url').val(),
      description: $('#description').val()
    });
    //document.getElementById('#new-form').reset();
    book.insertRecord();
    //bookView.initIndexPage();

  };
  bookView.initIndexPage=()=>{
    $('.container').hide();
    $('#book-list').empty();
    $('#book-list').show();
    app.Book.all.map(book =>$('#book-list').append(book.toHtml()));
    //bookView.populateFilters();
    //bookView.handleAuthorFilter();
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
