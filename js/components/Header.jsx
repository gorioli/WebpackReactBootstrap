var React = require('react');
//var img = require("file!./../../img/lemon.png");
//var img = require("file?name=img/[name].[ext]!./../../img/lemon.png");
var SelfIntro = require('./SelfIntro.jsx');

//<img src={img}/>

module.exports = React.createClass({

    render: function () {
        return (
            <header>
                <img src={this.props.data.img_header}/>
                <br/>

                <h3>
                    <SelfIntro>Header</SelfIntro>
                </h3>
            </header>
        );
    }
});