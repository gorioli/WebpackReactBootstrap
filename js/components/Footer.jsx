var React = require('react');
var SelfIntro = require('./SelfIntro.jsx');

module.exports = React.createClass({
    render: function () {
        return (
            <footer>
                <h6>
                    <SelfIntro>Footer</SelfIntro>
                    <a href="./index.html">Refresh</a>.
                </h6>
            </footer>
        );
    }
});
