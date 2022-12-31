#!/usr/bin/env node
var WebSocketServer = require('websocket').server;
var http = require('http');
const puppeteer = require('puppeteer');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
var dataShip = "";
server.listen(7899, function() {
    (async () => {
        const browser = await puppeteer.launch({'headless': true});
        const page = await browser.newPage();
         await page.goto('https://web.telegram.org/z/#-1577104307',{timeout: 0});
        await page.evaluate(() => {
          localStorage.setItem("dc2_auth_key", "7eb592f91cc54ea5d218a6eb61c1e17b24146764a527299d77c14a64c9e6724bcfbc20d439ee5a1791837af6a95d4868b815c1a20d4407f96dbd185a1c0487a90dc9e7e38b6095ed0718bb03a33472b3bd5e8b3be5015e31157297472849e1b71cba2917ab385a36b42679d66dc45199ef9a003f9053f67230f45aee3f9d540df5f4591c1204c6a8327023bee60aa67dbbf882b5807bd25d3f29fbf0003fe49481659ea8bfe8fc59db4d5ac39655dc9e11551e3a8e2eb6f4f409895a6ad719c8830b9904e6a1db74724d072c10271f13ba6d3bb39a3d61bb33933eb596a3a2bcb53f11c71c5345696d1d26d9f5f94e01b5093255cc62c88fb54638f5843cb0d7");
          localStorage.setItem("dc5_auth_key", "7eb592f91cc54ea5d218a6eb61c1e17b24146764a527299d77c14a64c9e6724bcfbc20d439ee5a1791837af6a95d4868b815c1a20d4407f96dbd185a1c0487a90dc9e7e38b6095ed0718bb03a33472b3bd5e8b3be5015e31157297472849e1b71cba2917ab385a36b42679d66dc45199ef9a003f9053f67230f45aee3f9d540df5f4591c1204c6a8327023bee60aa67dbbf882b5807bd25d3f29fbf0003fe49481659ea8bfe8fc59db4d5ac39655dc9e11551e3a8e2eb6f4f409895a6ad719c8830b9904e6a1db74724d072c10271f13ba6d3bb39a3d61bb33933eb596a3a2bcb53f11c71c5345696d1d26d9f5f94e01b5093255cc62c88fb54638f5843cb0d7");
          localStorage.setItem("tgme_sync", "{'canRedirect':true,'ts':1667615862}");
          localStorage.setItem("dc2_hash", "a4ff10b68d54844c84d65abdeca167b1c665a77a");
          localStorage.setItem("dc1_auth_key", "210fd9c0f424da5b7ffb2bbc985979744fa0b5e20548ac8d8abbf0506ce17f10d81ca9ca64f2d641cbc683c61982cdeeaa867b47dc51b9f64ae1d87d6f70eaa35921024d20834479df402572b363af3afe130a8cb2d0abeb7557eeaa308c3d17f006425957822b4ff510371c876ffb89bfce6dddf4db2a6296348ffeda565b0a06853f40e1efe02663327232eae857eb7b816dcda7bf8b7297b439ad73c867fa34188f7fc79e5073b83dd1491d8c7ec4cf4ecd18328bd0c8d0abeff30f5f8604996fa28ee34404ae66d92c2e9d5eeabf2b85074251a6de96073fdfa2899450f2a9eb576b1f69b91fd8e87e0f7e16831d832786b788e82bcd6c0ba312125baa25");
          localStorage.setItem("user_auth", "{'dcID':5,'id':'5307276147'}");
          localStorage.setItem("dc", "5");
          localStorage.setItem("dc5_hash", "a4ff10b68d54844c84d65abdeca167b1c665a77a");
          localStorage.setItem("tt-active-tab", "1667615903942.219");
          localStorage.setItem("dc4_auth_key", "0ee3b8fd7969114d3c3c6b4a1252cf53b19e5e4a3f57739d0172c645b1246249eb91abeb2fdf8819d2493d4f6c2012663426c2b035575c0f9e11dc494f98388de2831748f02ec1f51a24646c8ef51fd3de19d7eda982ce95719e7f52461660fc021e9607ff8aa97a526fc45cc6abfcb1b82b609055a8201617ddce8f69f1ba88259d08ec84d11160b0ef9bac7277cdf4aaa43d2b0dbc582ba0884ffa941e4fe06fd08d27ace6d769091a153f66a95b57526ecb4c30ecddaed3defae4c3430542d914f5b70d67372d46f66ab688245c55ba08c61c0715055e72e25ddf3f3c2aba8af26bd55bfeaa750901a370438fa03cb3e73b01a4214ade00baf8e43956e509");
          localStorage.setItem("dc4_hash", "1d569c62f533cee7b193fc18bc2030a89c331f82");
        });
        await page.goto('https://web.telegram.org/k/#@teleshipdn',{timeout: 100000});  //ĐỢi trang tải xong
        await	page.waitForNavigation();
        setTimeout(()=>{
          //console.log("Bắt đầu chạy!")
          var oldPost = ''
          setInterval(async () => {
              const elementHandle = await page.$$eval(".bubble-content-wrapper", els => {
              elementHandle = els.map(el => {
                let contentPost = el.querySelector('.reply-markup')
                let allChilContentPost = contentPost.querySelectorAll(":scope > reply-markup-row"); 
                return {
                  name: el.querySelector('.spoilers-container a').innerText,
                  idFB: el.querySelectorAll('.spoilers-container a')[1].innerText,
                  idPostFB: el.querySelectorAll('.reply-markup .reply-markup-row a')[1].getAttribute('href'),
                  khoangCach: el.querySelector('.reply-markup > .reply-markup-row:nth-child(1)').innerText,
                  map: el.querySelector('.reply-markup-row a').getAttribute('href'),
                  detail: el.innerText
                }
              })
              return elementHandle;
            })
            let sortNewPost = elementHandle.length - 1
            let newPost = elementHandle[sortNewPost]
            if (JSON.stringify(oldPost) !== JSON.stringify(newPost)) {
                dataShip = oldPost = newPost
            } 
        }
        , 1000);
        },4000)
      })();
    console.log((new Date()) + ' Server is listening on port 8080');
});

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    var connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            connection.sendUTF(JSON.stringify(dataShip));
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});
