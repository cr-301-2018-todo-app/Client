'use strict';

var app = app || {};

(function(module) {
  const taskView = {};

  taskView.initIndexPage = () => {
    app.showOnly('.task-view');

    $('#task-list').empty();
    app.Task.getAll().forEach(task => $('#task-list').append(task.toHtml()));
  }

  taskView.initDetailPage = task => {
    app.showOnly('.task-detail');

    $('#task-detail').empty().append(task.toHtml());
  };

  taskView.initAddForm = () => {
    app.showOnly('.add-view');
  };

  $('#add-form').on('submit', function (event) {
    event.preventDefault();

    let task = {
      title: this.title.value,
      description: this.description.value,
      category: this.category.value,
    };

    app.Task.createTask(task, () => page('/'));
  });

  module.taskView = taskView;
})(app)
