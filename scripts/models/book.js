'use strict';

function Book (rawDataObj) {
    Object.keys(rawDataObj).forEach(key => {
      this[key] = rawDataObj[key]
    }, this);
  }
Book.all = [];

Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#book-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
    this.body = marked(this.body);

    return template(this);
};
Book.loadAll = bookData => {
    bookData.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)))

    bookData.forEach(bookObject => Book.all.push(new Book(bookObject)))
};
Book.fetchAll = callback => {
    $.get('/api/v1/books')
        .then(results => {
        Book.loadAll(results);
        callback();
        }
    )
};
Book.truncateTable = callback => {
    $.ajax({
      url: '/api/v1/books',
      method: 'DELETE',
    })
    .then(data => {
      console.log(data);
      if (callback) callback();
    });
};
Book.prototype.insertRecord = function(callback) {
    $.post('/api/v1/books', {
        // author: this.author, 
        // authorUrl: this.authorUrl, 
        // body: this.body, category: this.category, 
        // publishedOn: this.publishedOn, 
        // title: this.title
    })
    .then(data => {
      console.log(data);
      if (callback) callback();
    })
};
Book.prototype.deleteRecord = function(callback) {
    $.ajax({
      url: `/api/v1/books/${this.article_id}`,
      method: 'DELETE'
    })
    .then(data => {
      console.log(data);
      if (callback) callback();
    });
};
Book.prototype.updateRecord = function(callback) {
    $.ajax({
      url: `/api/v1/books/${this.article_id}`,
      method: 'PUT',
      data: {
        // author: this.author,
        // authorUrl: this.authorUrl,
        // body: this.body,
        // category: this.category,
        // publishedOn: this.publishedOn,
        // title: this.title,
        // author_id: this.author_id
      }
    })
    .then(data => {
      console.log(data);
      if (callback) callback();
    });
  };
