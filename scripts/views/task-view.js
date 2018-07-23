'use strict';

var app = app || {};

(function(module) {
  const taskView = {};

  taskView.initIndexPage = () => {
    app.showOnly('.task-view');

    app.Task.all.forEach(task => $('#task-list').append(task.toHtml()));
  }

  module.taskView = taskView;
})(app)

$(function() {
  app.Task.fetchAll(app.taskView.initIndexPage);
})
