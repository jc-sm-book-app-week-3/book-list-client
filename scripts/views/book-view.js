'use strict';

var app = app || {};
(function (module){

  let bookView = {};
  bookView.populateFilters = () => {
    $('.book-display').each(function() {
      let val = $(this).find('h2').text();
      var optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        $('#author-filter').append(optionTag);
      }
      val = $(this).find('h1').text();
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#title-filter option[value="${val}"]`).length === 0) {
        $('#title-filter').append(optionTag);
      }
    });
  };
  bookView.handleAuthorFilter = () => {
    $('#author-filter').on('change', function() {
      if ($(this).val()) {
        $('.book-display').hide();
        console.log($(`.book-display`),$(this).val(),$(`#author-filter`));
        $(`#author-filter option[value="${$(this)}"]`).fadeIn();
      } else {
        $('.book-display').fadeIn();
      }
      $('#title-filter').val('');
    });
  };
  bookView.initIndexPage=()=>{
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(book =>$('#book-list').append(book.toHtml()));
    bookView.populateFilters();
    bookView.handleAuthorFilter();
  };
  module.bookView=bookView;
})(app);



