$(document).ready(function(){
    //날씨조정
    $.ajax({
    type: "GET",
    url: "http://spartacodingclub.shop/sparta_api/weather/seoul",
    data: {},
    success: function(response){
        $('#temp').text(response['temp'])
        }
    });

    //앨범 클릭
    let s1 =""; //썸네일이미지주소 src
    let a1 =""; //썸네일이미지 대체글 alt
    $("#album button").click(function(){
        s1 = $(this).children().attr("src");
        a1 = $(this).children().attr("alt");
        console.log(s1 + "..." + a1);
        
        const s2 = s1.replace(".","_hover.")
        console.log(s2);
        $("#popup img").attr("src",s2);
        $("#popup h2").text(a1);
        
        $("#popup").fadeIn();
    });
    
    //팝업 닫기
    $("#popup button").click(function(){
        $("#popup").fadeOut();
    });




});
//응원하기 버튼 클릭시
function open_box(){
    $('#post-box').show();
}
//닫기 버튼 클릭시
function close_box(){
    $('#post-box').hide();
};