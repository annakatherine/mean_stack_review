var express=require('express');
var app= express();
var path=require( 'path' );
var bodyParser=require('body-parser');
app.use( bodyParser.json() );
var mongoose=require( 'mongoose' );

app.get('/', function( req, res ){
  console.log( 'in base url' );
  res.sendFile( path.resolve( 'views/index.html' ));
});

app.listen( 8080, 'localhost', function( req, res ){
  console.log( 'server listening yo ' );
});

app.use( express.static( 'public' ));
