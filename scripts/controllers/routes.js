/* globals: page */
'use strict';

page('/', () => app.Task.fetchAll(app.taskView.initIndexPage));
page('/tasks/add', ctx => app.taskView.initAddForm(ctx));
page('/tasks/:id', ctx => {
  app.Task.fetchOne(ctx.params.id, app.taskView.initDetailPage);
});

// TODO: figure out where error comes from!
page('/error', ctx => app.errorView.initErrorPage(ctx.err));

page();
