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
    $('#update-form').hide();
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
    $('#update-button').on('submit',event=>bookView.initUpdateFormPage());
    
  };

  bookView.initUpdateFormPage = (ctx) => {
  console.log(ctx);
  console.log('We are inside Update Form');
    $('.container').hide();
    $('#book-form').empty();
    $('#update-form').show();
    var template = Handlebars.compile($('#update-button').text());
    $('#update-form').append(template(ctx.book));
    $('#submit-update').on('submit',ctx=>bookView.submitUpdate());
  };
  bookView.submitUpdate = (ctx, event) => {
    console.log('this is happening')
    //$('.container').show();
    //event.preventDefault();
    let book = new app.Book({
      book_id: ctx.params.book_id,
      title: $('#book-title').val(),
      author: $('#book-author').val(),
      isbn: $('#isbn').val(),
      img_url: $('#img-url').val(),
      description: $('#description').val()
    });
     book.updateRecord();
     console.log('we got through the weeds!');
  };
  module.bookView=bookView;
})(app);