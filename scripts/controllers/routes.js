/* globals: page */
'use strict';

page('/', () => app.Task.fetchAll(app.taskView.initIndexPage));

page();
