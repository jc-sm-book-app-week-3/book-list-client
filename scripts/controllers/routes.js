'use strict';
// if(window.location.pathname !== '/') {
//     page.base('/book-list-client');
// }
var app = app || {};
page('/',(ctx)=> app.Book.fetchAll(app.bookView.initIndexPage));
page('/new',(ctx)=>app.bookView.initNewBookPage(ctx));
page('/books/:book_id',ctx=>app.Book.fetchOne(ctx,app.bookView.initSingleBookPage));
//page('/about',app.);
page();