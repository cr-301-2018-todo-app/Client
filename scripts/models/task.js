'use strict';

var app = app || {};

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Task(taskObject) {
    Object.keys(taskObject).forEach(key => this[key] = taskObject[key]);
  }

  Task.prototype.toHtml = function() {
    return app.render('task-template', this);
  }

  Task.all = [];

  const compareBy = (key) => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
  Task.loadAll = rows => {
    Task.all = rows.sort(compareBy('title')).map(task => new Task(task));
  }

  Task.fetchAll = callback =>
    $.get(`${app.ENVIRONMENT.apiUrl}/tasks`)
      .then(Task.loadAll)
      .then(callback)
      .catch(errorCallback);

  module.Task = Task;
})(app)
