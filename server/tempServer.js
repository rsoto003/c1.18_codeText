var fs = require('fs');
const express = require('express');

const ws = express();
ws.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  


ws.get('/threads', function(req, res){
    res.send( JSON.stringify( getDataByField(req.query.field)));
})

ws.listen(3001, function(){
    console.log('server is ready');
})


function getDataByField(field){
    var sorted = [];
    var threadKeys = Object.keys(threadData);
    switch(field){

        case 'newest':
            while(threadKeys.length>0){
                var least = threadData[threadKeys[0]].id;
                var leastIndex = 0;
                for(var i=1; i<threadKeys.length; i++){
                    if( threadData[threadKeys[i]].id < least){
                        least = threadData[threadKeys[i]].id;
                        leastIndex = i;
                    }
                }
                sorted.push( threadData[threadKeys[leastIndex]] );
                threadKeys.splice(leastIndex, 1);
            }
            break;
        case 'oldest':
            while(threadKeys.length>0){
                var most = threadData[threadKeys[0]].id;
                var mostIndex = 0;
                for(var i=1; i<threadKeys.length; i++){
                    if( threadData[threadKeys[i]].id > most){
                        most = threadData[threadKeys[i]].id;
                        mostIndex = i;
                    }
                }
                sorted.push( threadData[threadKeys[mostIndex]] );
                threadKeys.splice(mostIndex, 1);
            }
            break;
        case 'comments':
        case 'popular':
        case 'hot':
        default: 

            while(threadKeys.length>0){
                var least = threadData[threadKeys[0]].rating;
                var leastIndex = 0;
                for(var i=1; i<threadKeys.length; i++){
                    if( threadData[threadKeys[i]].rating < least){
                        least = threadData[threadKeys[i]].rating;
                        leastIndex = i;
                    }
                }
                sorted.push( threadData[threadKeys[leastIndex]] );
                threadKeys.splice(leastIndex, 1);
            }
            
    }
    return sorted
}

var threadData = {
    1522892314240:{
        id:1522892314240,
        author: 'og poster',
        rating: 2.3,
        title: 'When you see this message, slack the group. april 5th, 5:25pm',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti accusantium obcaecati eveniet soluta nihil, architecto, eius autem placeat, voluptatibus ducimus officia sed doloribus delectus nemo quam. Laudantium, atque non Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti accusantium obcaecati eveniet soluta nihil, architecto, eius autem placeat, voluptatibus ducimus officia sed doloribus delectus nemo quam. Laudantium, atque non .",
        jsbin: 'http://jsbin.com/goxeyi/6/edit?html,output',
        // jsbin:'https://codesandbox.io/s/lz04yqr79',
        comments:[
            {
                name: 'John Doe',
                comment: 'I DON\'T KNOW!!!'
            },
            {
                name: "Ryan Soto",
                comment: "why am I here"
            },
            {
                name: "Ryan Soto",
                comment: "why am I here"
            },
            {
                name: "Ryan Soto",
                comment: "why am I here"
            }
        ]
    },
    1522892314242:{
        id:1522892314242,
        author: 'og poster',
        rating: 3.3,
        title: 'Make sure you are pushing every 15 minutes',
        description: 'someone help me understand what this means?!?! LMAO NFADJKNAJKKK RAWR XD',
        jsbin: 'http://jsbin.com/sogunar/1/edit?html,output',
        comments:[
            {
                name: 'John Doe',
                comment: 'I DON\'T KNOW!!!'
            }
        ]
    },
    1522892314243:{
        id:1522892314243,
        author: 'og poster',
        rating: 1.3,
        title: 'RANDMON CONTENT WHEEEE',
        description: 'someone help me understand what this means?!?! LMAO NFADJKNAJKKK RAWR XD',
        jsbin:'http://jsbin.com/zijokep/edit?html,js,output',
        comments:[
            {
                name: 'John Doe',
                comment: 'I DON\'T KNOW!!!'
            }
        ]
    },
    1522892314244:{
        id:1522892314244,
        author: 'og poster',
        rating: 4.3,
        title: 'RANDMON CONTENT WHEEEE',
        description: 'someone help me understand what this means?!?! LMAO NFADJKNAJKKK RAWR XD',
        jsbin:null,
        comments:[
            {
                name: 'John Doe',
                comment: 'I DON\'T KNOW!!!'
            }
        ]
    }
}