var React = require('react');

module.exports  = React.createClass({
    render: function () {
        return (
            <footer>
                <h6>I am {this.props.data.txt_footer}&nbsp;
                    <a href="#" target="_blank">Some link</a>.
                </h6>
            </footer>
        );
    }
});
