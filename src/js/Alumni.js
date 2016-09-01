/**
 * Created by xiaoqiao on 2016/7/30.
 */
//window.onload=function(){
//    var over=document.getElementById("over");
//    var share=document.getElementById("share");
//    over.onmouseover=function(){
//       share.style.display="block";
//        share.onmouseover=function(){
//            share.style.display="block";
//        };
//    };
//    over.onmouseout=function(){
//        share.style.display="none";
//        share.onmouseout=function(){
//            share.style.display="none";
//        };
//    };
//
//};
$(document).ready(function(){
    $("#over").mouseover(function(){
        $("#share").show();
        $("#share").mouseover(function(){
            $("#share").show();
        });
    });

    $("#over").mouseout(function(){
       $("#share").hide();
        $("#share").mouseout(function(){
            $("#share").hide();
        });
    });
});
