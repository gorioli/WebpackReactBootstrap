var React = require('react');
var SomeContent = require('./SomeContent.jsx');
var externalModule = require('./../externalModule.js');

module.exports = React.createClass({

    componentDidMount () {
        externalModule.Global.init("Hello from webpack react bootstrap!");
    },

    render () {
        var { txt_mainConent, ...other } = this.props.data;
        return (
            <div>
                <section>
                    {txt_mainConent}
                    <SomeContent {...other}/>
                </section>
            </div>
        );
    }
});
