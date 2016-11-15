$(document).ready(function () {
	$(window).resize(function (){
		$("#profilePic").height($("#profilePic").width());
		$("#main-pic").height($("#main-pic").width());
		$("#friendsCircle").height($("#main-pic").height());
		$("#friendCercle1").height($("#friendCercle1").width());
		$("#friendCercle2").height($("#friendCercle2").width());
		$("#friendCercle3").height($("#friendCercle3").width());
		$("#friendCercle4").height($("#friendCercle4").width());
		$("#friendCercle5").height($("#friendCercle5").width());
		$(".imgCercle").height($(".imgCercle").width());
		$(".matchs").height($(".imgCercle").height());
	});
	$(".checkMarks div").click(function () {
		if ($(this).hasClass("greenCercle")) {
			$(".checkMarks div").css("background","transparent");
			$(this).css("background","green");
		} else if ($(this).hasClass("purpleCercle")) {
			$(".checkMarks div").css("background","transparent");
			$(this).css("background","red");
		} else {
			$(".checkMarks div").css("background","transparent");
			$(this).css("background","grey");
		}
	});
	$(".lgCercle").height($(".lgCercle").width());
	$(".mdCercle").height($(".mdCercle").width());
	$(".smCercle").height($(".smCercle").width());
	$(".xsCercle").height($(".xsCercle").width());
	$("#profilePic").height($("#profilePic").width());
	$("#main-pic").height($("#main-pic").width());
	$("#friendsCircle").height($("#main-pic").height());
	$("#friendCercle1").height($("#friendCercle1").width());
	$("#friendCercle2").height($("#friendCercle2").width());
	$("#friendCercle3").height($("#friendCercle3").width());
	$("#friendCercle4").height($("#friendCercle4").width());
	$("#friendCercle5").height($("#friendCercle5").width());
	$(".imgCercle").height($(".imgCercle").width());
	$(".matchs").height($(".imgCercle").height());
});