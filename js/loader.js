$(document).ready(function () {
$("#main").load('pages/band.html');
$("#bio").click(function(){
    $("#main").empty();
    $("#main").load('pages/band.html');
    });
$("#Anno").click(function(){
    $("#main").empty();
    console.log("test2");
    $("#main").load('pages/annotations.html');
    });    
});