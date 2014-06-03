/** @jsx React.DOM */
$(function(){
  React.renderComponent(
    PhotoWall( {photoData:photos.data} ),
    document.getElementById('main_region')
  );
});
