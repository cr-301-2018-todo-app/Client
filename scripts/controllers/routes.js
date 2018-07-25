/* globals: page */
'use strict';

page('/', () => app.Task.fetchAll(app.taskView.initIndexPage));

page('/tasks/add', () => app.taskView.initAddForm());

page('/tasks/:id', ctx => {
  app.Task.fetchOne(ctx.params.id, app.taskView.initDetailPage);
});

page('/tasks/:id/update', ctx => {
  app.Task.fetchOne(ctx.params.id, app.taskView.initUpdatePage);
});

page('/tasks/:id/delete', ctx => {
  let redirectHomeOnDelete = () => page('/');
  app.Task.deleteOne(ctx.params.id, redirectHomeOnDelete);
});

page();
