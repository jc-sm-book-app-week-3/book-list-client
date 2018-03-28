'use strict';

page('/new',(ctx) => app.bookView.initNewBookPage(ctx));
page('/books/:book_id', app.Book.fetchOne(app.bookView.initSingleBookPage));
page('/books', app.Book.fetchAll(app.bookView.initIndexPage));
//page('/about',app.);
page();