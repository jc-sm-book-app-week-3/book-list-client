'use strict';
if(window.location.pathname !== '/') {
    page.base('/book-list-client');
}
var app = app || {};
page('/new',(ctx)=>app.bookView.initNewBookPage(ctx));
page('/books/:id',ctx=>app.Book.fetchOne(ctx,app.bookView.initSingleBookPage));
page('/', app.Book.fetchAll(app.bookView.initIndexPage));
//page('/about',app.);
page();