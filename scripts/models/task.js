'use strict';

var app = app || {};

(function(module) {
  function errorCallback(err) {
    console.error(err);

    // REVIEW: Should this be `module` or `app` (see toHtml below)?
    // Use app to reference external module stuff
    // Use module to refernce/set stuff specific to this module
    app.errorView.initErrorPage(err);
  }

  // Accept object instead of list of params: function Task(title, description, dueDate)
  function Task(taskObject) {
    Object.keys(taskObject).forEach(key => this[key] = taskObject[key]);
  }

  Task.prototype.toHtml = function() {
    return app.render('task-template', this);
  }

  const all = [];
  Task.getAll = () => all;

  // REVIEW: This is a higher-order function: a function that returns a function!
  // Currying for sum: (a) => (b) => a + b
  const compareBy = (key) => {
    return (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
  };
  // REVIEW: Changing this to a module-scoped (private) variable hides from the outside world
  const loadAll = rows => {
    // Have to change from map to forEach due to `const all`; can't replace the all value
    rows.sort(compareBy('title')).forEach(task => all.push(new Task(task)));
  }

  Task.fetchAll = callback =>
    $.get(`${app.ENVIRONMENT.apiUrl}/tasks`)
      // REVIEW: `then` returns another Deferred (Promise), so you can chain another `then`, `catch`, etc
      .then(loadAll)
      .then(callback)
      .catch(errorCallback);

  module.Task = Task;
})(app)
