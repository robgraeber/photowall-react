/** @jsx React.DOM */
$(function(){
  var PhotoView = React.createClass({displayName: 'PhotoView',
    render: function(){
      return (
        React.DOM.img( {src:this.props.mediumUrl, className:"photoImg"} )
      );
    }
  });
  var PhotoWall = React.createClass({displayName: 'PhotoWall',
    render: function(){
      return (
        React.DOM.div( {className:"photoWall"}, 
          PhotoView( {mediumUrl:"http://pbs.twimg.com/media/BjXVRQZCEAAqzdR.png"})
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
