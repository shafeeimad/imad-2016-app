var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
'article-one': {
title:'Article one | shafeeq',
heading:' Article one',
date:'oct 10,2016',
content:`   <p>
                    THis is the content my first article THis is the content my first articleTHis is the content my first article
                    THis is the content my first article THis is the content my first articleTHis is the content my first article
                </p>
                <p>
                    THis is the content my first article THis is the content my first articleTHis is the content my first article
                    THis is the content my first article THis is the content my first articleTHis is the content my first article
                </p>
                <p>
                    THis is the content my first article THis is the content my first articleTHis is the content my first article
                    THis is the content my first article THis is the content my first articleTHis is the content my first article
                </p>`


},
'article-two':{title:'Article two | shafeeq',
heading:' Article two',
date:'oct 10,2016',
content:`   <p>
                    THis is the content my second article 
                    </p>`

},
'article-three':{title:'Article three | shafeeq',
heading:' Article three',
date:'oct 11,2016',
content:`   <p>
                    THis is the content my third article 
                    </p>`}
};
function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmltemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
       
        </head>
        <body>
         <div class="container">
            <div>
                <a href="/">home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
             ${content}
                
            </div>
            </div>
        </body>
</html>
`;
return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename', function (req, res){
    //articlename == article-one
    //articles[articlename] == {} content object for artice one
    var articlename= req.params.articlename;
    res.send(createtemplate(articles[articlename]));
});
app.get('/article-two', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
