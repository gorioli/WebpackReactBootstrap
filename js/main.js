'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
//import React from 'react';
//import ReactDom from 'react-dom';
var data = require('./data.js');
var ContentBox = require('./components/ContentBox.jsx');


(function main() {

    ReactDOM.render(

        <ContentBox data={data}/>,
        document.getElementById('content')
    );
})();