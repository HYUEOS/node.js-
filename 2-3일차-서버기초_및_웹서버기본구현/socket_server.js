/// 서버
var net = require('net');
// 새로운 TCP 혹은 IPC 서버 생성
// 주의 : 소켓을 만드는 것이 아니다. 소켓을 감싸 언제든 상대편 소켓을 받을 수 있는 서버를 만드는 것이다.
// 콜백함수의 인자인 client 는 client socket 을 말하며,
// 연결된 client 에게 행할 기능들을 정의하는 용도로 사용된다.
var server = net.createServer( function(client){
    // client 로부터 data 가 write 됐을 때
    client.on('data', function(data) {
        console.log('client: ' + data.toString().trim());
    });

    // client 가 connection 을 종료했을 때
    client.on('end', function() {
        console.log('client disconnected');
        // 기본 모드에서는 클라이언트가 연결을 끊으면 client.end() 가 자동 호출된다.
    });

    console.log('client:' + client.address().address + ':' + client.address().port + 'is connected');

    // client 로 data write 하기
    client.write('hello client. I am server');


}).on('error', function(err) {
    throw err;
});

// 서버를 열고, client 의 연결을 기다린다.
server.listen( {
    host: 'local',  // 주소
    port: 80,
    exclusive: true
}, function() {
    console.log('opened server on', server.address());
});
