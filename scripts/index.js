'use strict';
var app = app || {};

(function (module) {

  let productionApiUrl = 'https://cr-301-2018-todo-app.herokuapp.com';
  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  console.log(module.ENVIRONMENT);

  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  };

  const templateCache = {};
  module.render = (templateId, dataToRender) => {
    // Try to find a cached template
    let template = templateCache[templateId];

    // If it doesn't exist...
    if(!template) {
      console.log(`Compiling template ${templateId}`)
      template = Handlebars.compile(document.getElementById(templateId).innerText);

      // Save compiled template for later...
      templateCache[templateId] = template;
    }

    return template(dataToRender);
  };
})(app);
