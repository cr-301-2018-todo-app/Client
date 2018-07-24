'use strict';

var app = app || {};

(function(module) {
  const taskView = {};

  taskView.initIndexPage = () => {
    app.showOnly('.task-view');

    app.Task.getAll().forEach(task => $('#task-list').append(task.toHtml()));
  }

  module.taskView = taskView;
})(app)
