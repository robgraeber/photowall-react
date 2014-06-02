/** @jsx React.DOM */
$(function(){
  var PhotoWall = React.createClass({displayName: 'PhotoWall',
    render: function(){
      return (
        React.DOM.div( {className:"photoWall"}, 
          "Hello PhotoWall"
        )
      );
    }
  })
  React.renderComponent(
    PhotoWall(null ),
    document.getElementById('main_region')
  );
  console.log(photos.data);
});
