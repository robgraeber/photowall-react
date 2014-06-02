/** @jsx React.DOM */
$(function(){
  React.renderComponent(
    React.DOM.h1(null, "Hello, world!"),
    document.getElementById('main_region')
  );
  console.log(photos.data);
});
