// import some new stuff
import React from 'react';
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server';
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router';
import routes from './modules/routes';

var express = require('express');
var path = require('path');

var app = express()

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, "./statics/chunkJs")));
app.use(express.static(path.join(__dirname, "./statics")));

// send all requests to index.html so browserHistory in React Router works
app.get('*', (req, res) => {
  // match the routes to the url
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // `RouterContext` is what the `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.
    const appHtml = renderToString(<RouterContext {...props}/>)

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
    res.send(renderPage(appHtml))
  })
 //  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
 //   if (error) {
 //     res.status(500).send(error.message)
 //   } else if (redirectLocation) {
 //     res.redirect(302, redirectLocation.pathname + redirectLocation.search)
 //   } else if (renderProps) {
 //     res.status(200).send(renderPage(renderToString(<RouterContext {...renderProps} />)))
 //   } else {
 //     res.status(404).send('Not found')
 //   }
 // })
})

function renderPage(appHtml) {
  return `
    <!doctype html public "storage">
    <html>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <title>My First React Router App</title>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}



var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
