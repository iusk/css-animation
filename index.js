$(document).ready(function() {    
    $("#ball").click(function() {
        switch($("#ball").attr("rel")) {
             case "expand":
                expand();
                break;
            case "contract":
                contract();
                break;
            case "explode":
                explode();
                break;
            case "ballup":
                ballup();
                break;
            case "bounce":
                bounce();
                break;
            case "rollRight":
                rollRight();
                break;
            case "rollLeft":
                rollLeft();
                break;
        }
    });
    
    $("#expand").click(function() {
        stop();
        expand();
    });
    $("#contract").click(function() {
        stop();
        contract();
    });
    $("#explode").click(function() {
        stop();
        explode();
    });
    $("#ballup").click(function() {
        stop();
        ballup();
    });
    $("#bounce").click(function() {
        stop();
        bounce();
    });        
    $("#rollRight").click(function() {
        stop();
        rollRight();
    });
    $("#rollLeft").click(function() {
        stop();
        rollLeft();
    });
    $("#play").click(play);
});

var timeouts = []; // for the "Play" feature

function expand() {
    const longLength = getComputedStyle(document.documentElement).getPropertyValue('--LongLength');
    const shortLength = getComputedStyle(document.documentElement).getPropertyValue('--shortLength');
    const expandedBlueLeftLong = getComputedStyle(document.documentElement).getPropertyValue('--expandedBlueLeftLong');
    const expandedBlueLeftShort = getComputedStyle(document.documentElement).getPropertyValue('--expandedBlueLeftShort');
    const expandedGreenTopLong = getComputedStyle(document.documentElement).getPropertyValue('--expandedGreenTopLong');
    const expandedGreenTopShort = getComputedStyle(document.documentElement).getPropertyValue('--expandedGreenTopShort');
    const ballLeftDefault = getComputedStyle(document.documentElement).getPropertyValue('--ballLeftDefault');
    const ballTopDefault = getComputedStyle(document.documentElement).getPropertyValue('--ballTopDefault');
    const ballSizeDefault = getComputedStyle(document.documentElement).getPropertyValue('--ballSizeDefault');
    $("#ball").css("transition", "0.4s");
    $("#wrapper").fadeIn();
    $("#ball").css("transform", "rotate(0deg)");
    $("#ball").css({'animation':'none'});

    $("#blueLong").css({'width':longLength, 'left':expandedBlueLeftLong});
    $("#blueShort").css({'width':shortLength, 'left':expandedBlueLeftShort});
    $("#greenLong").css({'height':longLength, 'top':expandedGreenTopLong});
    $("#greenShort").css({'height':shortLength, 'top':expandedGreenTopShort});
    $("#yellowShort").css('width', shortLength);
    $("#yellowLong").css('width', longLength);
    $("#redShort").css('height', shortLength);
    $("#redLong").css('height', longLength);
    $("#ball").css({'grid-gap':'15px', 'left':ballLeftDefault, 'top':ballTopDefault, 'height':ballSizeDefault, 'width':ballSizeDefault});
    $("#ball").css('grid-gap', '0px');
    $("#ball").attr("rel", "contract"); // next
}

function contract() {
    const contractedLength = getComputedStyle(document.documentElement).getPropertyValue('--contractedLength');
    const contractedBlueLeftLong = getComputedStyle(document.documentElement).getPropertyValue('--contractedBlueLeftLong');
    const contractedBlueLeftShort = getComputedStyle(document.documentElement).getPropertyValue('--contractedBlueLeftShort');
    const contractedGreenTopLong = getComputedStyle(document.documentElement).getPropertyValue('--contractedGreenTopLong');
    const contractedGreenTopShort = getComputedStyle(document.documentElement).getPropertyValue('--contractedGreenTopShort');
    const ballLeftDefault = getComputedStyle(document.documentElement).getPropertyValue('--ballLeftDefault');
    const ballTopDefault = getComputedStyle(document.documentElement).getPropertyValue('--ballTopDefault');
    const ballSizeDefault = getComputedStyle(document.documentElement).getPropertyValue('--ballSizeDefault');
    $("#ball").css("transition", "0.4s");
    $("#wrapper").fadeIn();
    $("#ball").css("transform", "rotate(0deg)");
    $("#ball").css({'animation':'none'});

    $("#blueLong").css({'width':contractedLength, 'left':contractedBlueLeftLong});
    $("#blueShort").css({'width':contractedLength, 'left':contractedBlueLeftShort});
    $("#greenLong").css({'height':contractedLength, 'top':contractedGreenTopLong});
    $("#greenShort").css({'height':contractedLength, 'top':contractedGreenTopShort});
    $("#yellowShort").css('width', contractedLength);
    $("#yellowLong").css('width', contractedLength);
    $("#redShort").css('height', contractedLength);
    $("#redLong").css('height', contractedLength);
    $("#ball").css({'grid-gap':'15px', 'left':ballLeftDefault, 'top':ballTopDefault, 'height':ballSizeDefault, 'width':ballSizeDefault});
    $("#ball").attr("rel", "explode"); // next
}

function explode() {
    const contractedLength = getComputedStyle(document.documentElement).getPropertyValue('--contractedLength');
    const contractedBlueLeftLong = getComputedStyle(document.documentElement).getPropertyValue('--contractedBlueLeftLong');
    const contractedBlueLeftShort = getComputedStyle(document.documentElement).getPropertyValue('--contractedBlueLeftShort');
    const contractedGreenTopLong = getComputedStyle(document.documentElement).getPropertyValue('--contractedGreenTopLong');
    const contractedGreenTopShort = getComputedStyle(document.documentElement).getPropertyValue('--contractedGreenTopShort');
    const ballTopExploded = getComputedStyle(document.documentElement).getPropertyValue('--ballTopExploded');
    $("#ball").css("transition", "0.4s");
    $("#wrapper").fadeIn();
    $("#ball").css("transform", "rotate(0deg)");
    $("#ball").css({'animation':'none'});

    $("#blueLong").css({'width':contractedLength, 'left':contractedBlueLeftLong});
    $("#blueShort").css({'width':contractedLength, 'left':contractedBlueLeftShort});
    $("#greenLong").css({'height':contractedLength, 'top':contractedGreenTopLong});
    $("#greenShort").css({'height':contractedLength, 'top':contractedGreenTopShort});
    $("#yellowShort").css('width', contractedLength);
    $("#yellowLong").css('width', contractedLength);
    $("#redShort").css('height', contractedLength);
    $("#redLong").css('height', contractedLength);
    $("#ball").css({'grid-gap':'70px', 'width':'250px', 'height':'250px', 'left':'680px', 'top':ballTopExploded});
    $("#ball").attr("rel", "ballup"); // next
}

function ballup() {
    $("#ball").css("transition", "0.4s");
    $("#wrapper").fadeOut();
    $("#ball").css("transform", "rotate(0deg)");
    
    $("#ball").css({'animation':'none'});
    $("#ball").css('grid-gap', '0px');
    $("#ball").attr("rel", "bounce"); // next
}

function bounce() {
    $("#wrapper").fadeOut();
    $("#ball").css("transform", "rotate(0deg)");
                
    $("#ball").css({'animation':'bounce 2s'});
    $("#ball").css("top", "480px");
    $("#ball").attr("rel", "rollRight"); // next
}

function rollRight() {
    $("#ball").css("transition", "2s");
    $("#wrapper").fadeOut();
    $("#ball").css({'animation':'none'});

    $("#ball").css("left", "1100px");
    $("#ball").css("transform", "rotate(360deg)");
    $("#ball").attr("rel", "rollLeft"); // next
}

function rollLeft() {
    $("#ball").css("transition", "2s");
    $("#wrapper").fadeOut();
    $("#ball").css({'animation':'none'});

    $("#ball").css("left", "20px");
    $("#ball").css("transform", "rotate(-360deg)");
    $("#ball").attr("rel", "rollRight"); // next
}

function play() {
    expand();
    timeouts.push(setTimeout(() => contract(), 400));
    timeouts.push(setTimeout(() => explode(), 800));
    timeouts.push(setTimeout(() => ballup(), 1200));
    timeouts.push(setTimeout(() => bounce(), 1600));
    for (let i = 3600; i <= 23600; i+=4000) {
        timeouts.push(setTimeout(() => rollRight(), i));
        timeouts.push(setTimeout(() => rollLeft(), i+2000));
    }
}

function stop() {
    for (let i=0; i<timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
}