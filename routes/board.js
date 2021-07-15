var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "intermd-t-rds.cwh0ikkrvw81.ap-northeast-2.rds.amazonaws.com",
    port: 3306,          // DB와 연결할 포트번호
    user: 'VDT10T',        // 계정이름
    password: 'v-dt10T!!',    // 계정 비밀번호
    database: 'VDT10T'    // 데이터베이스 이름
});


router.get("/", function (req, res, next) {
    var query = connection.query('select * from TB_MRLINK_BOARD_DETAIL',function(err,rows){
        if(err) console.log(err)        // 만약 에러값이 존재한다면 로그에 표시합니다.
        console.log('rows :' +  rows);
        res.render('board/list', { title:'Board List',rows: rows }); // view 디렉토리에 있는 list 파일로 이동합니다.
    });
});

router.get("/post", function (req, res, next) {
    res.render("board/post");
});
/* GET home page.

router.get('/list', function(req, res, next) {
    res.redirect('/board/1');
});
router.get('/list/:page', function (req,res,next){
    var query = connection.query('select * from TB_MRLINK_BOARD_DETAIL',function(err,rows){
        if(err) console.log(err)        // 만약 에러값이 존재한다면 로그에 표시합니다.
        console.log('rows :' +  rows);
        res.render('list', { title:'Board List',rows: rows }); // view 디렉토리에 있는 list 파일로 이동합니다.
    });
});
*/
module.exports = router;
