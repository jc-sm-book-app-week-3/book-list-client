'use strict';
var app = app || {};
let API_URL = 'http://localhost:3000';

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
  Book.prototype.insertRecord = function(callback) {
    $.post(`${API_URL}/api/v1/books`, {
      title: this.title,
      author: this.author,
      isbn: this.isbn,
      img_url: this.img_url,
      description: this.description
    })
      .then(data => {
        console.log(data);
        if (callback) callback();
      });
  };

  Book.loadAll = bookData => {
    bookData = bookData.sort((a,b)=> b.title - a.title);
    Book.all = bookData.map(ele => new Book(ele));
  };

  Book.fetchAll = (callback) => {
    $.getJSON(`${API_URL}/api/v1/books/`)
      .then(results => {
        Book.loadAll(results);
        callback();
      })
      .catch(app.errorView.initErrorPage);
  };
  Book.fetchOne = (ctx, callback) =>{
    console.log(ctx.params.book_id);
    debugger;
    $.getJSON(`${API_URL}/api/v1/books/${ctx.params.book_id}`)
      .then(results=>{
        Book.loadAll(results);
        callback(ctx);
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
//
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