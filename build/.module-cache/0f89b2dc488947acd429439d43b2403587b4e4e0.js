/** @jsx React.DOM */
$(function(){
  var PhotoView = React.createClass({displayName: 'PhotoView',
    render: function(){
      return (
        React.DOM.img( {src:this.props.medium_url, className:"photoImg"} )
      );
    }
  });
  var PhotoWall = React.createClass({displayName: 'PhotoWall',
    render: function(){
      return (
        React.DOM.div( {className:"photoWall"}, 
          "Hello PhotoWall"
        )
      );
    }
  });
  React.renderComponent(
    PhotoWall(null ),
    document.getElementById('main_region')
  );
  console.log(photos.data);
});
