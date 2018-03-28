'use strict';

page('/new',(ctx) => app.bookView.initNewBookPage(ctx));
page('/books', app.Book.fetchAll(app.bookView.initIndexPage));
//page('/books/:book_id',app.);
//page('/about',app.);

page();