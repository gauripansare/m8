var hotspotclicked = false;;
var hotspot;
var touchend = false;
var touchend1 = false;
$(document).on("click", ".divHotSpot", function (event) {
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    }
    else {
        event.preventDefault();
        $(this).k_disable()
        if (hotspotclicked || _Navigator.IsAnswered())
            return;
        if ($(this).attr("eventname") != undefined && $(this).attr("eventname") && $(this).attr("eventname") == "noclick")
            return;

        $(this).addClass("hotspotclicked")
        hotspot = $(this);
        setTimeout(function () {
            hotspotclicked = false;
            _ModuleCommon.HotspotClick(hotspot, event);

        }, 400)

    }
});
$(document).on("dblclick", ".divHotSpotdbl", function (event) {
    if (_Navigator.IsPresenterMode()) {
        return;
    }
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    } else {
        event.preventDefault();

        $(this).k_disable()
        if (hotspotclicked || _Navigator.IsAnswered())
            return;
        $(this).addClass("hotspotclicked")
        hotspot = $(this);
        setTimeout(function () {
            hotspotclicked = false;
            _ModuleCommon.HotspotClick(hotspot, event);
        }, 400);

    }
});
$(document).on("keyup", ".divHotSpotdbl", function (event) {
    if (_Navigator.IsPresenterMode()) {
        return;
    }
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    } else {
        event.preventDefault();
        if (window.event) {
            key = window.event.keyCode;
        } else if (event) {
            key = event.keyCode;
        }
        if (key == 13) {
            $(this).k_disable()
            if (hotspotclicked || _Navigator.IsAnswered())
                return;
            $(this).addClass("hotspotclicked")
            hotspot = $(this);
            setTimeout(function () {
                hotspotclicked = false;
                _ModuleCommon.HotspotClick(hotspot, event);
            }, 400);
        }

    }
});
$(document).on("click", ".hintdoc", function (event) {
    if ($(this).hasClass("hintdoc")) {
        if ($(this).hasClass("expanded")) {
            $(this).removeClass("expanded")
            $(".hintcontainerdoc").hide();

            open = "close";
        }
        else {
            $(this).addClass("expanded")
            $(".hintcontainerdoc").show();

        }
    }
    if (touchend1) {
        $(this).mouseout();
        touchend1 = false;
    }
    event.preventDefault();
    return;
});
$(document).on("click", ".hintlink", function (event) {
    if ($(this).k_IsDisabled()) return;
    var open = "open;"
    if ($(this).hasClass("expanded")) {
        $(this).removeClass("expanded")
        $(this).attr("aria-expanded", "false")
        $(".hintcontainer").slideUp(100);
        $(".pageheading").focus();
        open = "close";
    }
    else {
        $(this).addClass("expanded");
        $(this).attr("aria-expanded", "true");
        $(".hintcontainer").slideDown(100, function () {

            $(".hintcontainer .hintcontent").find("p:first").attr("tabindex", "-1")
            if (iOS) {
                $(".hintcontainer .hintcontent").find("p:first").attr("role", "text")
            }
            $(".hintcontainer .hintcontent").find("p:first").focus();
        });
    }
    if (_Navigator.IsRevel()) {
        LifeCycleEvents.OnInteraction("Hint button click. Hint " + open)
    }
    if (touchend) {
        $(this).mouseout();
        touchend = false;
    }

});

$(document).on("click", ".closehintdoc", function (event) {
    if ($(this).k_IsDisabled()) return;
    $(".hintdoc").removeClass("expanded")
    $(".hintcontainerdoc").hide();

    if (_Navigator.IsRevel()) {
        LifeCycleEvents.OnInteraction("Hint button click. Hint closed")
    }
    event.preventDefault();
    return;

});
$(document).on("click", ".closehintlink", function (event) {
    if ($(this).k_IsDisabled()) return;
    $(".hintlink").removeClass("expanded")
    $(".hintlink").attr("aria-expanded", "false")
    $(".hintcontainer").slideUp(100, function () { $("h2.pageheading").focus(); });
    if (_Navigator.IsRevel()) {
        LifeCycleEvents.OnInteraction("Hint button click. Hint closed")
    }

});



$(window).resize(function () {
    _ModuleCommon.OrientationChange();
});


$(document).on('click', ".activityimg", function (event) {
    if ($(".divHotSpot").hasClass("disabled"))
        return;
    _ModuleCommon.AddEditPropertiesClick(event);
});


$(document).on('click', ".startbtn", function (event) {
    _Navigator.Next();
});
$(document).on('click', ".reviewsubmit", function (event) {
    _Navigator.Next();
});

$(document).on("click", "#continuebtn", function (event) {
    _ModuleCommon.OnContinue();
})
$(document).on("change", ".assessmentradio", function (event) {
    if ($(this).hasClass("disabled"))
        return;
    $(".assessmentSubmit").k_enable();
});
$(document).on("click", ".assessmentSubmit", function (event) {
    if (_Navigator.IsRevel()) {
        LifeCycleEvents.OnSubmit();
    }
    gRecordData.Questions[currentQuestionIndex].UserSelectedOptionId = $("input[type='radio']:checked").attr("id");
    gRecordData.Questions[currentQuestionIndex].IsAnswered = true;
    _Navigator.GetBookmarkData();
    _Navigator.Next();
});
$(document).on('click', ".inputcircle", function (event) {

    $(this).next(".inpputtext").trigger("click");
});
$(document).on("click", "#linkprevious", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Prev();
});
$(document).on("click", "#linknext", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Next();
});

$(document).on('touchstart', ".hintlink", function (event) {
    mouseenter($(this));
    touchend = false;
});

$(document).on('touchend ', ".hintlink", function (event) {
    mouseleave($(this));
    touchend = true;
});

$(document).on('touchstart', ".hintdoc", function (event) {
    mouseenter($(this));
    touchend1 = false;
});

$(document).on('touchend ', ".hintdoc", function (event) {
    mouseleave($(this));
    touchend1 = true;
});


$(document).on('mouseenter', ".hintlink", function (event) {
    mouseenter($(this));
});

$(document).on('mouseleave', ".hintlink", function (event) {
    mouseleave($(this));
});

$(document).on('mouseenter', ".hintdoc", function (event) {
    mouseenter($(this));
});

$(document).on('mouseleave', ".hintdoc", function (event) {
    mouseleave($(this));
});
function mouseenter(_ths) {
    _ths.find(".hintlinkspan").css({ "color": "#b22222", "border-bottom": "1px solid #b22222" })
    _ths.find("path").css({ "fill": "#b22222" })
}
function mouseleave(_ths) {
    _ths.find(".hintlinkspan").css({ "color": "#047a9c", "border-bottom": "1px solid #047a9c" })
    _ths.find("path").css({ "fill": "#047a9c" })
}
function emailclick() {
    $('#OutlookMail > tbody > tr#row1').addClass("disabled")
    $('#OutlookMail > tbody > tr#row1').k_disable()
    if (_Navigator.IsAnswered())
        return;
    $('#OutlookMail > tbody > tr#row1').addClass("hotspotclicked")
    setTimeout(function () {
        _ModuleCommon.Mailclick();
    }, 400);
}
var eventname = "dblclick";
if (iOS || isAndroid) {
    eventname = "click"
}
$(document).on(eventname , '#OutlookMail > tbody > tr#row1', function (event) {
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    }
    else {
        event.preventDefault();
        emailclick();
    }
});
$(document).on("touchend" , '#OutlookMail > tbody > tr#row1', function (event) {
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    }
    else {
        event.preventDefault();
        emailclick();
    }
});
$(document).on(eventname, '#OutlookMail > tbody > tr#row1 td', function (event) {
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    }
    else {
       $(this).closest("tr").trigger("click")
    }
});

$(document).on("keyup", "#OutlookMail > tbody > tr#row1", function (event) {
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    }
    if (window.event) {
        key = window.event.keyCode;
    } else if (event) {
        key = event.keyCode;
    }
    if (key == 13) {
        emailclick();
    }
});
window.onload = function () {
    _ScormUtility.Init();
}

window.onunload = function () {
    _ScormUtility.End();
}
window.addEventListener("scroll", function () {

    var currPage = _Navigator.GetCurrentPage();
    if(currPage == undefined)
        return;
    if (currPage.pageId == "p1")
        return;
    var target = $(".header-content-dock");

    if (window.pageYOffset > $("#header-content").height() - 10) {
        var width = $("#wrapper").width();
        target.css({ "visibility": "visible", "top": "0px", "width": width + "px" })
    }
    else if (window.pageYOffset < $("#header-content").height() - 10) {
        target.css({ "visibility": "hidden", "top": "-80px" })
        $(".hintcontainerdoc").hide();
        $(".hintdoc").removeClass("expanded")
        $(".header-content-dock").find(".presentationModeFooter").hide();

    }
    if (_Navigator.GetCurrentPage().pageId == _Navigator.GetQuizPageId() || currPage.hinturl ==undefined || currPage.hinturl == "" )
    {
        $(".hintdoc").parent().hide();
    }
    else
    {
        $(".hintdoc").parent().show();
    }
    if(_Navigator.IsPresenterMode() || _Navigator.IsReviewMode())
    {
        $(".header-content-dock").find(".presentationModeFooter").show();
        $(".header-content-dock .intro-content").css({"margin-top":"30px"})
    }

}, false);
