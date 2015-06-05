var React = require('react');
var Header = require('./Header.jsx');
var SomeContent = require('./SomeContent.jsx');
var Footer = require('./Footer.jsx');
var externalModule = require('./../externalModule.js');

module.exports = React.createClass({

    componentDidMount () {
        externalModule.Global.init("Hello from webpack react bootstrap!");
    },

    render () {
        return (
            <div>
                <Header data={this.props.data}/>
                <section>
                    <SomeContent data={this.props.data}/>
                    <Footer data={this.props.data}/>
                </section>
            </div>
        );
    }
});
