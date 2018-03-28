'use strict';

page('/new',(ctx) => app.bookView.initNewBookPage(ctx));
page('/books', app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/:thing1',app.bookView.initSingleBookPage);
//page('/about',app.);
page();