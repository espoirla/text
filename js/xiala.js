var Function = (function() {
    var params = {}

    function setparams(id) {
        params.$div = $("#" + id);
        params.$k = params.$div.find("k");
        params.$ul = params.$div.children("ul");
        params.state = "hide"
    }
    //参数处理函数
    function bind() {
        params.$div.on("click", function(ev) {
            ev.stopPropagation()
            state()
            var Otarget = ev.target;
            if (Otarget.nodeName == "LI") {
                params.$k.html(Otarget.innerHTML)
            }
        })
        $(document).on("click", function() {
            if (params.state == "show") {
                params.$ul.stop().slideUp(200, function() {
                    params.$div.removeClass("active")
                });
                params.state = "hide"

            }
        })
    }
    //事件函数
    function state() {
        if (params.state == "hide") {
            params.$div.addClass("active")
            params.$ul.stop().slideDown(200);
            params.state = "show"
        } else {
            params.$ul.stop().slideUp(200, function() {
                params.$div.removeClass("active")
            });
            params.state = "hide"
        }
    }
    //判断状态函数
    function inlimit() {
        params.$k.html(params.$ul.children().eq(0).html());
    }

    function int(id) {
        setparams(id)
        inlimit();
        bind();
    }
    return int;
})()