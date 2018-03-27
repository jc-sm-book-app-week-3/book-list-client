'use strict';

var app = app || {};
(function (module){

  let bookView = {};

  bookView.initIndexPage=()=>{
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(book =>$('#book-list').append(book.toHtml()));

  };
  module.bookView=bookView;
})(app);



// var template = Handlebars.compile($('#book-template').text());
// // REVIEW: We use .forEach() here because we are relying on the side-effects of the callback function: appending to the DOM. The callback is not required to return anything.
// app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));