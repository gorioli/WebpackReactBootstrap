var React = require('react');
var img = require("file!./../../img/lemon.png");

module.exports = React.createClass({

    render: function () {
        return (
            <header>
                <br/>
                <img src={img}/>

                <h3>
                    I am {this.props.data.txt_header}
                </h3>
            </header>
        );
    }
});