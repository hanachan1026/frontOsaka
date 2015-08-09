$(function() {
    // readmoreボタンを押すと要素が出てくる
    $('.content:not(.content:first-of-type)').css('display', 'none');
    $('.more').nextAll('.more').css('display', 'none');
    $('.more').on('click', function() {
        //ToDo 2個目以降のreadmoreボタンがcenterにこない
        // $('.more').css('text-align', 'center');
        $(this).css('display', 'none');
        $(this).next('.content').slideDown('fast');
        $(this).nextAll('.more:first').css('display', 'block');
    });
    var url = "https://qiita.com/api/v2/items?page=1&per_page=20&query=qiita+user%3Ayaotti";
    var xhr = $.get(url);
    console.log("done 実行前");
    xhr.done(function(data){
        console.log(data);
    });
    console.log("done 実行後");
});
