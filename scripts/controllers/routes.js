/* globals: page */
'use strict';

page('/', () => app.Task.fetchAll(app.taskView.initIndexPage));
page('/tasks/add', ctx => app.taskView.initAddForm(ctx));

// TODO: figure out where error comes from!
page('/error', ctx => app.errorView.initErrorPage(ctx.err));

page();
