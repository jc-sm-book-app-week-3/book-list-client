'use strict';
// if(window.location.pathname !== '/') {
//     page.base('/book-list-client');
// }
var app = app || {};
page('/',(ctx)=> app.Book.fetchAll(app.bookView.initIndexPage));
page('/new',(ctx)=>app.bookView.initNewBookPage(ctx));
page('/books/:book_id',ctx=>app.Book.fetchOne(ctx,app.bookView.initSingleBookPage));
page('/books/:book_id/update', 
    (ctx, next)=>app.Book.fetchOne(ctx,next),
    ctx=>app.bookView.initUpdateFormPage(ctx));
//page('/about',app.);
page();