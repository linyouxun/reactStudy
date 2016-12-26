/* eslint-disable no-console, no-use-before-define */
import "babel-polyfill";
import path from 'path';
import fs from 'fs';
import Express from 'express';

import Index from './routes/index';
import Users from './routes/users';

import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = new Express();
const port = 9800;

if(process.env.NODE_ENV == "dev"){
  // Use this middleware to set up hot module reloading via webpack.
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {noInfo: true,publicPath: webpackConfig.output.publicPath}));
  app.use(webpackHotMiddleware(compiler));
}

app.set('views', path.join(__dirname, '../../statics'));
app.set('view engine', 'ejs');
app.use(Express.static(path.join(__dirname, "../../statics")));


app.use("/",Index);
app.use("/user",Users);

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
});
