'use strict';

var app = app || {};
(function (module){
  let errorView = {};
  errorView.initErrorPage = (err)=>{
    console.log(err);
    $('.container').hide();
    $('.errorView').show();
    $('#error-message').empty();
    let templateError = Handlebars.compile($('.error-template').text());
    $('.errorView').append(templateError(err));
  };

  module.errorView=errorView;
})(app);