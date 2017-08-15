
function moveScroller() {
    var move = function () {
        
            var st = $(window).scrollTop();
            var ot = $(".42-jq-floating-box-position").offset().top;
            var s = $(".42-jq-floating-box");
            if (st > ot && photoObj.isMobile() == false) {
                s.css({
                    position: "fixed",
                    top: "0px",
                    width: 'inherit'
                });
            } else {
                if (st <= ot) {
                    s.css({
                        position: "relative",
                        top: ""
                    });
                }
            }
        
    };
    $(window).scroll(move);
    move();
}

$(function() {
    moveScroller();
});