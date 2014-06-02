/** @jsx React.DOM */
$(function(){
  var PhotoView = React.createClass({
    render: function(){
      return (
        <img src={this.props.mediumUrl} className="photoImg" />
      );
    }
  });
  var PhotoWall = React.createClass({
    render: function(){
      return (
        <div className="photoWall">
          <PhotoView mediumUrl="http://pbs.twimg.com/media/BjXVRQZCEAAqzdR.png"/>
        </div>
      );
    }
  });
  React.renderComponent(
    <PhotoWall />,
    document.getElementById('main_region')
  );
  console.log(photos.data);
});
