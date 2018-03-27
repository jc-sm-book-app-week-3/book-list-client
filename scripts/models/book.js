'use strict';
var app = app || {};
(function (module){
  function Book(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => {
      this[key] = rawDataObj[key];
    }, this);
  }
  Book.all = [];
  Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#book-list-template').text());
    return template(this);

  };
  Book.loadAll = bookData => {

    Book.all = bookData.map(ele => new Book(ele));
    Book.all.map(book=> book.title).sort();
  };
  Book.fetchAll = callback => {
    $.getJSON('http://localhost:3000/api/v1/books')
      .then(results => {
        Book.loadAll(results);
        callback();
      })
      .catch(app.errorView.initErrorPage);
  };

  module.Book=Book;
})(app);






// Book.truncateTable = callback => {
//   $.ajax({
//     url: '/api/v1/books',
//     method: 'DELETE',
//   })
//     .then(data => {
//       console.log(data);
//       if (callback) callback();
//     });
// };
// Book.prototype.insertRecord = function(callback) {
//   $.post('/api/v1/books', {
//     // author: this.author,
//     // authorUrl: this.authorUrl,
//     // body: this.body, category: this.category,
//     // publishedOn: this.publishedOn,
//     // title: this.title
//   })
//     .then(data => {
//       console.log(data);
//       if (callback) callback();
//     });
// };
// Book.prototype.deleteRecord = function(callback) {
//   $.ajax({
//     url: `/api/v1/books/${this.article_id}`,
//     method: 'DELETE'
//   })
//     .then(data => {
//       console.log(data);
//       if (callback) callback();
//     });
// };
// Book.prototype.updateRecord = function(callback) {
//   $.ajax({
//     url: `/api/v1/books/${this.article_id}`,
//     method: 'PUT',
//     data: {
//       // author: this.author,
//       // authorUrl: this.authorUrl,
//       // body: this.body,
//       // category: this.category,
//       // publishedOn: this.publishedOn,
//       // title: this.title,
//       // author_id: this.author_id
//     }
//   })
//     .then(data => {
//       console.log(data);
//       if (callback) callback();
//     });
// };