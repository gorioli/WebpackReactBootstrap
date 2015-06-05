var React = require('react');
var externalModule = require('./../externalModule.js');

module.exports = React.createClass({

    countFailure: 0,

    addNow: function (e) {
        e.preventDefault();

        externalModule.Global.printStatus();

        var disableAddNowBtn = function () {
            var btnClickMe = React.findDOMNode(this.refs.btnClickMe);

            btnClickMe.setAttribute("data-class", "disabled, disabled--font-color");
            btnClickMe.disabled = true;
        };

        if (this.countFailure == 1) {
            disableAddNowBtn().bind(this);
        }
        this.countFailure++;
        React.findDOMNode(this.refs.btnClickMe).value = 'One more time'

        return;
    },

    render: function () {
        return (
            <article>
                <br/>
                I am {this.props.data.txt_mainConent}
                <br/><br/>
                <input ref="btnClickMe" type="button" value="Click me" onClick={this.addNow} />

            </article>
        );
    }
});