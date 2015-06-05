'use strict';

var ContentBox = require('./components/ContentBox.jsx');
var React = require('react');

main();

function main() {
    var data = {
        //img_offer: "img/chrome_ask_toolbar.png",
        //img_header: "http://localhost:9080/img/icon_formatfactory.png",
        txt_header: "Header",
        txt_footer: "Footer",
        txt_mainConent: "Main Content"
    };

    React.render(
        <ContentBox data={data}/>,
        document.getElementById('content')
    );
};