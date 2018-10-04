var count=0;

// $(document).on('click', ".unread", function (event) {
//     _Navigator.Next();
// });

// s
$(document).on('click', "#continuebtn", function (event) {
    _ModuleCommon.OnContinue();
});

$(document).on("mouseover", ".qheight", function (event) {
    $(this).css({
        "font-weight": "bold"
    });
    $(this).children(".question_icon").children("span").css({
        "background-color": "#003058",
        "color": "#F9FF00"
    });

});
$(document).on("mouseout", ".qheight", function (event) {
    $(this).css({
        "font-weight": "normal"
    });
    $(this).children(".question_icon").children("span").css({
        "background-color": "#007AA2",
        "color": "#FFF"
    });
});
$(document).on("click", ".qheight", function (event) {
    $(".qheight").removeClass("optionselected");

    $(this).addClass("optionselected");

});
var hotspotclicked = false;;
var hotspot;
$(document).on("click", ".divHotSpot", function (event) {
    debugger;
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    }
    else {
        var currentPageData = _Navigator.GetCurrentPage();
        var pageData = _PData[currentPageData.pageId];

        if (pageData != undefined) {

            var hotspotdata = pageData.ImageHotSpots;
        }
        var htmlForDivHotspotImage = "";

        //if (pageData.ImageHotSpots != undefined) {
        if (_PData[currentPageData.pageId].ImageHotSpots["Hotspots"].length > 1) {

            if (_PData[currentPageData.pageId].ImageHotSpots["Hotspots"][0].eventname != 'undefined' || _PData[currentPageData.pageId].ImageHotSpots["Hotspots"][1].eventname != 'undefined' || _PData[currentPageData.pageId].ImageHotSpots["Hotspots"][2].eventname != 'undefined') {
                if (_PData[currentPageData.pageId].ImageHotSpots["Hotspots"][0].eventname == 'noclick' || _PData[currentPageData.pageId].ImageHotSpots["Hotspots"][0].eventname == 'noclick') {
                    if (_PData[currentPageData.pageId].ImageHotSpots["Hotspots"][3].eventname != 'noclick') {

                        event.preventDefault();
                        $(this).k_disable()
                        if (hotspotclicked || _Navigator.IsAnswered())
                            return;
                        if ($(this).hasClass('noHotSpot')) {

                            //dont add hotspotclicked
                        }
                        else {
                            $(this).addClass("hotspotclicked")
                        }
                        hotspot = $(this);
                        setTimeout(function () {
                            hotspotclicked = false;
                            _ModuleCommon.HotspotClick(hotspot, event);

                        }, 400)
                    }
                    else {
                        return;
                    }
                }
                else {
                    event.preventDefault();
                    $(this).k_disable()
                    if (hotspotclicked || _Navigator.IsAnswered())
                        return;
                    $(this).addClass("hotspotclicked")
                    hotspot = $(this);
                    setTimeout(function () {
                        hotspotclicked = false;
                        _ModuleCommon.HotspotClick(hotspot, event);

                    }, 400)
                }
            }
            
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

            }, 400)
        }


    }



    //   }
    // }
});



$(document).on("click", ".divHotSpotDbl", function (event) {
    debugger;
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    }
    else {
        event.preventDefault();
        count++;
        if(count == 2){
        $(this).k_disable()
        if (hotspotclicked || _Navigator.IsAnswered())
            return;
        $(this).addClass("hotspotclicked")
        hotspot = $(this);
        setTimeout(function () {
            hotspotclicked = false;
            _ModuleCommon.HotspotClick(hotspot, event);
        }, 400);
        count = 0;
    }
    }
});

//$(document).on("dblclick", ".divHotSpot", function (event) {
//    return;

//});


$(document).on("click", ".hintlink", function (event) {
    debugger;
    if ($(this).hasClass("expanded")) {
        $(".hintlink").removeClass("expanded")
        $(".hintlink").attr("aria-expanded", "false")
        $(".hintcontainer").slideUp(100);
    }
    else {
        $(".hintcontainer").slideDown(100, function () {
            $(".hintlink").addClass("expanded");
            $(".hintlink").attr("aria-expanded", "true");
        });
    }

});
$(document).on("click", ".closehintlink", function (event) {

    $(".hintlink").removeClass("expanded")
    $(".hintlink").attr("aria-expanded", "false")
    $(".hintcontainer").slideUp(100);


});
// $(document).on("keydown", "input.EmbededElement", function (event) {
//     if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
//         event.preventDefault();
//         return;
//     }
//     if (window.event) {
//         key = window.event.keyCode;
//     } else if (event) {
//         key = event.keyCode;
//     }
//     if (key == 13) {
//         _ModuleCommon.InputEnter($(this));
//     }
// });

$(window).resize(function () {
    _ModuleCommon.OrientationChange();
});

$(window).resize(function () {
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
$(document).on('mouseover', ".hintlink", function (event) {
    $(".hintlink .hintlinkspan").css({ "color": "#b22222", "border-bottom": "1px solid #b22222" })
    $(this).find("path").css({ "fill": "#b22222" })
});

$(document).on('mouseout', ".hintlink", function (event) {
    $(".hintlink .hintlinkspan").css({ "color": "#047a9c", "border-bottom": "1px solid #047a9c" })
    $(this).find("path").css({ "fill": "#047a9c" })
});

$(document).on("change", ".assessmentradio", function (event) {
    $(".assessmentSubmit").k_enable();

});
$(document).on("click", ".assessmentSubmit", function (event) {
    gRecordData.Questions[currentQuestionIndex].UserSelectedOptionId = $("input[type='radio']:checked").attr("id");
    gRecordData.Questions[currentQuestionIndex].IsAnswered = true;
    _Navigator.Next();
});
$(document).on("click", "#linkprevious", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Prev();
});
$(document).on("click", "#linknext", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Next();
});

$(document).on('dblclick', '#OutlookMail > tbody > tr#row1', function (event) {
    debugger;
    event.preventDefault();
    $('#OutlookMail > tbody > tr#row1').addClass("disabled")
    $(this).k_disable()
    if (_Navigator.IsAnswered())
        return;
    $('#OutlookMail > tbody > tr#row1').addClass("hotspotclicked")
    setTimeout(function () {
        _ModuleCommon.Mailclick();
    }, 400);


});