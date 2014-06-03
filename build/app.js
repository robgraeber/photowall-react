/** @jsx React.DOM */
$(function(){
  var isScrolledIntoView = function(el){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(el).offset().top;
    var elemBottom = elemTop + $(el).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  };
  var animateCheck = function(el){
    if(isScrolledIntoView(el)){
      TweenMax.from(el, 1.2, {rotationY:500, scale:0.1, ease:Power1.easeOut});
    }
  };
  var PhotoView = React.createClass({displayName: 'PhotoView',
    imgError:function(e){
      e.target.style.display = 'none';
    },
    componentDidMount: function() {
      animateCheck(this.getDOMNode());
    },
    render: function(){
      return (
        React.DOM.img( {src:this.props.mediumUrl, className:"photoImg", onError:this.imgError})
      );
    }
  });

  var PhotoWall = React.createClass({displayName: 'PhotoWall',
    render: function(){
      var photoItems = {};
      _.each(photos.data.slice(0,30), function(item, index){
        photoItems["photo-"+index] = PhotoView( {mediumUrl:item.medium_url} );
      });
      return (
        React.DOM.div( {className:"photos"}, 
          photoItems
        )
      );
    }
  });

  React.renderComponent(
    PhotoWall(null ),
    document.getElementById('main_region')
  );
  // console.log(photos.data);
});
