/**
 * Created by xiaoqiao on 2016/7/31.
 */
$(function(){
    $("#a").click(function(){
        $("body").css("font-size","12px");
    });
    $("#b").click(function(){
        $("body").css("font-size","14px");
    });
    $("#c").click(function(){
        $("body").css("font-size","16px");
    });
});
$(function(){
    $("#div11").mouseover(function(){
        $("#pause").hide();
        $("#resume").show();
    });
    $("#div11").mouseout(function(){
        $("#resume").hide();
        $("#pause").show();
        $("#divRight").css("margin-left","1px");
    });
});
$(function(){
   $("#find").mouseover(function(){
        $(".find").css(" background","#5bc0de");
       $("#find").click(function(){
           $("#btn02").hide();
           $("#btn03").hide();
           $("#btn01").show();
       });
    });
    $("#database").mouseover(function(){
        $(".database").css(" background","#5bc0de");
        $("#database").click(function(){
            $("#find").css(" background","#bce8f1;");
            $("#site").css(" background","#bce8f1;");

            //$(".database").css(" background","#5bc0de");
            $("#btn01").hide();
            $("#btn03").hide();
            $("#btn02").show();
        });
    });
    $("#site").mouseover(function(){
        $(".site").css(" background","red");
        $("#site").click(function(){
            $("#btn01").hide();
            $("#btn02").hide();
            $("#btn03").show();
        });
    });
});
$(function(){

});