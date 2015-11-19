var React = require('react');
var SomeContent = require('./SomeContent.jsx');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var externalModule = require('./../externalModule.js');

module.exports = React.createClass({

    componentDidMount () {
        externalModule.Global.init("Hello from webpack react bootstrap!");
    },

    render () {
        return (
            <div>
                <Header {...this.props}/>
                <section>
                    <SomeContent {...this.props}/>
                    <Footer {...this.props}/>
                </section>
            </div>
        );
    }
});
