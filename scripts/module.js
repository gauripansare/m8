var userAgentCustom = window.navigator.userAgent;
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;
var isIE11version = !!navigator.userAgent.match(/Trident.*rv\:11\./);
var isIOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var CurClientWidth = window.innerWidth;
var Macbrowser = navigator.userAgent.indexOf('Chrome');
var Macos = navigator.userAgent.indexOf('Mac');
var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var ipad = !!navigator.platform && /iPad|iPod/.test(navigator.platform);
var isiPhone = !!navigator.platform && /iPhone/.test(navigator.platform);
var isIE11version = !!navigator.userAgent.match(/Trident.*rv\:11\./);
var isSafari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
var isIEEdge = /Edge/.test(navigator.userAgent);
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
var isFirefox = /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent);
jQuery.fn.extend({
    k_enable: function () {
        return this.removeClass('disabled').attr("aria-disabled", "false").removeAttr("disabled");
    },
    k_disable: function () {
        this.addClass('disabled').attr("aria-disabled", "true").attr("disabled", "disabled");
        if (isIE11version) {
            if ($(this).attr("type") != undefined && $(this).attr("type") == "radio")
                return;
            $(this).removeAttr("disabled")
        }
        return;
    },
    link_k_disable: function() {
        return this.addClass('disabled').attr("aria-disabled","true");
    },
    k_IsDisabled: function () {
        if (this.hasClass('disabled')) { return true; } else { return false; }
    }
});
var _ModuleCommon = (function () {
    var reviewData = [];
    var pagesDataArray = [];
    return {
        EnableNext: function () {
            var currentPageData = _Navigator.GetCurrentPage();
            if (currentPageData.nextPageId != undefined && currentPageData.nextPageId != "") {
                $("#linknext").k_enable();
            }
        },
        GetPageReviewData: function () {
            var currentPageData = _Navigator.GetCurrentPage();
            if (reviewData != undefined && reviewData.length > 0) {
                for (var i = 0; i < reviewData.length; i++) {
                    if (reviewData[i].pageId == currentPageData.pageId) {
                        return reviewData[i];
                    }
                }
            }

        },
        GetPageDataArray: function () {
            return pagesDataArray;
        },
        GetReviewData: function () {
            return reviewData;
        },
        SetReviewData: function (rData) {
            reviewData = rData;
        },
        GetPageDetailData: function () {
            var currentPageData = _Navigator.GetCurrentPage();
            var pageData = _PData[currentPageData.pageId];
            return pageData;
        },
        ShowFeedbackReviewMode: function () {
            var pageData = this.GetPageDetailData();
            var currPage = _Navigator.GetCurrentPage();
            var fdkurl = "";
            if (pageData != undefined) {
                if (pageData.EmbedSettings != undefined) {
                    fdkurl = pageData.correctfeedbackurl;
                }
                else {
                    if (pageData.ImageHotSpots != undefined) {
                        for (var i = 0; i < pageData.ImageHotSpots.Hotspots.length; i++) {
                            if (pageData.ImageHotSpots.Hotspots[i].isCorrect != undefined && pageData.ImageHotSpots.Hotspots[i].isCorrect) {
                                fdkurl = pageData.ImageHotSpots.Hotspots[i].feedbackurl;
                            }
                            else {
                                if (pageData.ImageHotSpots.Hotspots[i].feedbackurl != undefined && pageData.ImageHotSpots.Hotspots[i].isCorrect == undefined)
                                    fdkurl = pageData.ImageHotSpots.Hotspots[i].feedbackurl;

                            }

                        }
                    }
                }
                if (fdkurl != undefined && fdkurl != "") {
                    if (currPage.pageId == "p2" && _Navigator.GetPageFromId("p17").isLoaded != undefined && _Navigator.GetPageFromId("p17").isLoaded)
                        return;
                    fdkurl = _Settings.dataRoot + "feedbackdata/" + fdkurl;
                    $("#div_feedback").show();
                    $("#div_feedback").css("display", "inline-block");
                    $("#div_feedback .div_fdkcontent").load(fdkurl, function () {
                        // $("body").animate({
                        //     scrollTop: $(document).height()
                        // }, 1000);
                        $("#div_feedback p:first").attr("tabindex", "-1")
                        if (iOS) {
                            $("#div_feedback p:first").attr("role", "text")
                        }
                    });
                }
                else if (currPage.pageId == "p16") {
                    fdkurl = pageData.correctfeedbackurl;
                    fdkurl = _Settings.dataRoot + "feedbackdata/" + fdkurl;
                    $("#div_feedback").show();
                    $("#div_feedback").css("display", "inline-block");
                    $("#div_feedback .div_fdkcontent").load(fdkurl, function () {
                        $("#div_feedback p:first").attr("tabindex", "-1")
                        if (iOS) {
                            $("#div_feedback p:first").attr("role", "text")
                        }
                        // window.scrollTo(0, document.body.scrollHeight)
                        //$("#div_feedback p:first").focus();
                    });
                }
            }

            $(".divHotSpotCommon").k_disable();
        },
        DisplayInstructorReviewMode: function () {
            $(".reviewDiv").remove();
            var pageDetailData = this.GetPageDetailData();
            var currentPageData = _Navigator.GetCurrentPage();
            if (pageDetailData != undefined && pageDetailData.EmbedSettings != undefined && ((["p5", "p8", "p9", "p15"].indexOf(currentPageData.pageId) < 0))) {
                this.InstructorReviewModeForTextEntry();

            }
            else {
                var reviewData = this.GetPageReviewData();
                var currentPage = _Navigator.GetCurrentPage();
                if (reviewData != undefined && reviewData.Positions != undefined && reviewData.Positions.length > 0) {
                    for (var i = 0; i < reviewData.Positions.length; i++) {
                        var posObj = reviewData.Positions[i];
                        if (currentPage.pageId == "p3") {
                            var appendImage = $('#OutlookMail > tbody > tr#row1');
                            var ht = appendImage.width();
                            var ht1 = appendImage.height();

                        }
                        else {
                            var appendImage = $(".wrapperimage");
                            var ht = appendImage.width();
                            var ht1 = appendImage.height();
                            if (ht1 < 597) {
                                ht1 = 597;
                            }
                            while ((posObj.posX + 40) > ht) {
                                posObj.posX = posObj.posX - 2;
                            }
                            while ((posObj.posY + 40) > ht1) {
                                posObj.posY = posObj.posY - 2;
                            }
                        }
                        if (posObj.isCorrect) {
                            var _div = "<div class='reviewDiv Correct' style='z-index:5;width:39px;height:39px;position:absolute;left:" + posObj.posX + "px;top:" + posObj.posY + "px;'><img src='assets/images/review-correct.png' style='width:39px;height:35px;' /></div>";
                            appendImage.append(_div);
                        } else {
                            var _divI = "<div class='reviewDiv InCorrect' style='z-index:5;width:39px;height:35px;position:absolute;left:" + posObj.posX + "px;top:" + posObj.posY + "px;'><img src='assets/images/review-incorrect.png' style='width:39px;height:35px;' /></div>";
                            appendImage.append(_divI);
                        }
                    }
                }
            }
            this.ShowFeedbackReviewMode();
            $(".divHotSpotCommon").addClass("disabled")
            $(".divHotSpotCommon").attr("aria-disabled", "true");
            $(".divHotSpotCommon").attr("disabled", "true");
            $('#OutlookMail > tbody > tr#row1').addClass("disabled")
        },
        InstructorReviewModeForTextEntry: function () {
            $(".EmbededElement").hide();
            var reviewData = this.GetPageReviewData();
            var pageDetailData = this.GetPageDetailData();
            if (reviewData != undefined && reviewData.textEntry != undefined && reviewData.textEntry.length > 0) {
                var p = "";
                for (i = 0; i < reviewData.textEntry.length; i++) {
                    if (reviewData.textEntry[i] != undefined && reviewData.textEntry[i] != "") {
                        var tEntry = reviewData.textEntry[i].toLowerCase();
                        if (pageDetailData.EmbedSettings.validatearray.indexOf(tEntry) >= 0) {
                            if (reviewData.isCorrect && i == 0) {
                                $(".textentryreview1").html("<span class='OpenSansFont' style='color:green;font-weight:bold;font-size: 13px; '>" + reviewData.textEntry[i] + "</span>")
                                $(".textentryaccessibility").text("Correct url entered " + reviewData.textEntry[i])
                            }
                            else {
                                $(".textentryreview2").html("<span class='OpenSansFont'  style='color:green;font-weight:bold;font-size: 13px;padding-left:5px; '>" + reviewData.textEntry[i] + "</span>");
                                $(".textentryreview2").show();
                            }
                        }
                        else {
                            $(".textentryreview1").html("<span class='OpenSansFont'  style='color:red;font-weight:bold;font-size: 13px; '>" + reviewData.textEntry[i] + "</span>")
                            $(".textentryaccessibility").text("Incorrect url entered " + reviewData.textEntry[0] + " Correct url " + reviewData.textEntry[1])
                        }
                    }

                }
                $(".textentryreview1").show();
                $(".textentryaccessibility").show();
            }
        },
        DisplayUserReviewMode: function () {
            $(".reviewDiv").remove();
            var pageDetailData = this.GetPageDetailData();
            if (pageDetailData != undefined && pageDetailData.EmbedSettings != undefined) {

                this.DisplayReviewModeForTextEntry();
            }
            else {
                var reviewData = this.GetPageReviewData();
                if (reviewData != undefined && reviewData.Positions != undefined && reviewData.Positions.length > 0) {
                    var posObj = reviewData.Positions[reviewData.Positions.length - 1];
                    var appendImage = $(".wrapperimage");
                    var ht = appendImage.height();
                    while ((posObj.posY + 40) > ht) {
                        posObj.posY = posObj.posY - 2;
                    }
                    if (posObj.isCorrect) {
                        var _div = "<div class='reviewDiv Correct' style='z-index:5;width:39px;height:39px;position:absolute;left:" + posObj.posX + "px;top:" + posObj.posY + "px;'><img src='assets/images/review-correct.png' style='width:39px;height:35px;' /></div>";
                        appendImage.append(_div);
                    } else {
                        var _divI = "<div class='reviewDiv InCorrect' style='z-index:5;width:39px;height:35px;position:absolute;left:" + posObj.posX + "px;top:" + posObj.posY + "px;'><img src='assets/images/review-incorrect.png' style='width:39px;height:35px;' /></div>";
                        appendImage.append(_divI);
                    }

                }
            }
            this.ShowFeedbackReviewMode();


        },
        DisplayReviewModeForTextEntry: function () {
            $(".EmbededElement").hide();
            var reviewData = this.GetPageReviewData();
            var pageDetailData = this.GetPageDetailData();
            if (reviewData != undefined && reviewData.textEntry != undefined && reviewData.textEntry.length > 0) {
                var p = "";

                if (reviewData.textEntry[reviewData.textEntry.length - 1] != undefined && reviewData.textEntry[reviewData.textEntry.length - 1] != "") {
                    var tEntry = reviewData.textEntry[reviewData.textEntry.length - 1].toLowerCase();
                    if (pageDetailData.EmbedSettings.validatearray.indexOf(tEntry) >= 0) {
                        $(".textentryreview1").html("<span class='OpenSansFont' style='color:green;font-weight:bold;font-size: 13px; '>" + reviewData.textEntry[reviewData.textEntry.length - 1] + "</span>")
                    }

                }
                $(".textentryreview1").show();
            }
        },
        AddHotspotClick: function (hotspotObj, event, isCorrect) {

            //$(".divHotSpot").remove();
            if (_Navigator.IsAnswered()) {
                return;
            }
            var imgObj = $(".activityimg");
            var posX = imgObj.offset().left;
            var posY = imgObj.offset().top;
            var found = false;

            var rposX;
            var rposY;
            if (event != undefined && event.pageX != undefined) {
                rposX = (event.pageX - posX);
                rposY = (event.pageY - posY);
            }
            if (rposX < 0 || rposY < 0 || rposX == undefined || rposY == undefined) {//gp if module is attmpted using accessibility
                rposX = hotspotObj.position().left + 20;
                rposY = hotspotObj.position().top + 20;
            }
            var currentPageData = _Navigator.GetCurrentPage();
            var page = this.GetPageDetailData();
            if (page.EmbedSettings != undefined && page.ImageHotSpots.Hotspots == undefined) {
                return;
            }
            for (var r = 0; r < reviewData.length; r++) {
                if (reviewData[r].pageId == currentPageData.pageId) {
                    var sameclick = false;
                    var posindex = 0;
                    if (reviewData[r].Positions != undefined) {
                        for (var i = 0; i < reviewData[r].Positions.length; i++) {
                            if (reviewData[r].Positions[i].posX == rposX && reviewData[r].Positions[i].posY == rposY) {
                                sameclick = true;
                                posindex = i;
                                break;
                            }
                        }
                        if (!sameclick) {
                            var position = { posX: rposX, posY: rposY, isCorrect: isCorrect };

                            if (reviewData[r].Positions.length < 3) {
                                reviewData[r].Positions.push(position);
                            }
                            else {
                                if (currentPageData.pageId == "p16") {
                                    if (reviewData[r].Positions.length < 4) {


                                    }
                                    else {
                                        reviewData[r].Positions.splice(0, 1);

                                    }
                                } else {
                                    reviewData[r].Positions.splice(0, 1);
                                }
                                reviewData[r].Positions.push(position);
                            }
                        }
                        else {
                            if (reviewData[r].Positions[posindex].isCorrect == undefined || reviewData[r].Positions[posindex].isCorrect == false) {
                                reviewData[r].Positions[posindex].isCorrect = isCorrect;
                            }
                        }
                    }
                    else {
                        var position = { posX: rposX, posY: rposY, isCorrect: isCorrect };
                        reviewData[r].Positions = [position]
                    }

                    found = true;
                }
            }

            if (!found) {
                var _obj = {};
                _obj.pageId = currentPageData.pageId;
                if (isCorrect == undefined) {
                    isCorrect = true

                }
                var position = { posX: rposX, posY: rposY, isCorrect: isCorrect };
                _obj.Positions = [position]
                reviewData.push(_obj);

            }

        },
        AddEditPropertiesClick: function (event) {
            if (_Navigator.IsAnswered()) {
                return;
            }
            var pageDetailData = this.GetPageDetailData();
            if (pageDetailData.EmbedSettings != undefined)
                return;
            var imgObj = $(".activityimg");
            var posX = imgObj.offset().left;
            var posY = imgObj.offset().top;
            var found = false;

            var rposX = (event.pageX - posX);
            var rposY = (event.pageY - posY);
            if (isNaN(rposX) || isNaN(rposY))
                return;

            var currentPageData = _Navigator.GetCurrentPage();
            for (var r = 0; r < reviewData.length; r++) {
                if (reviewData[r].pageId == currentPageData.pageId) {
                    var sameclick = false;
                    if (reviewData[r].Positions != undefined) {
                        for (var i = 0; i < reviewData[r].Positions.length; i++) {
                            if (reviewData[r].Positions[i].posX == rposX && reviewData[r].Positions[i].posy == rposY) {
                                sameclick = true;
                                break;
                            }
                        }
                        if (!sameclick) {
                            var position = { posX: rposX, posY: rposY, isCorrect: false };
                            if (reviewData[r].Positions.length < 3) {
                                reviewData[r].Positions.push(position);
                            }
                            else {
                                reviewData[r].Positions.splice(0, 1);
                                reviewData[r].Positions.push(position);
                            }
                        }
                    }
                    else {
                        var position = { posX: rposX, posY: rposY, isCorrect: false };
                        reviewData[r].Positions = [position]
                    }

                    found = true;
                }
            }

            if (!found) {
                var _obj = {};
                _obj.pageId = currentPageData.pageId;
                var position = { posX: rposX, posY: rposY, isCorrect: false };
                _obj.Positions = [position]
                reviewData.push(_obj);
            }

        },
        OnPageLoad: function () {
            var currentPageData = _Navigator.GetCurrentPage();
            var pageData = this.GetPageDetailData();
            this.LoadHotSpot();
            this.InitPageData();
            this.ApplycontainerWidth();
            $("#div_feedback").hide();
            if (currentPageData.pageId == "p16") {
                if (pageData.hotspotclickcount < 4) {

                    pageData.hotspotclickcount = 0;
                }
            }
            if (_Navigator.IsAnswered()) {

                if ((["p5", "p8", "p9", "p15"].indexOf(currentPageData.pageId) >= 0)) {
                    this.ViewTextEntryInReviewMode();
                }

                this.DisplayInstructorReviewMode();

                // this.AddReviewData();
            }
            $("h2.pageheading").attr("tabindex", "-1");


        },

        LoadHotSpot: function () {

            var currentPageData = _Navigator.GetCurrentPage();
            var pageData = _PData[currentPageData.pageId];
            var aceessTextforImg = currentPageData.accessText;
            $(".activityimg").attr("alt", aceessTextforImg)
            if (pageData != undefined) {

                var hotspotdata = pageData.ImageHotSpots;
                var htmlForDivHotspotImage = "";
                if (pageData.ImageHotSpots != undefined) {
                    for (var i = 0; i < hotspotdata.Hotspots.length; i++) {
                        var currImg = $("img")
                        var orw = currImg.width();
                        var orh = currImg.height();

                        var hsId = hotspotdata.Hotspots[i].HotspotId;

                        var pwdth = hotspotdata.Hotspots[i].width;
                        var phight = hotspotdata.Hotspots[i].height;
                        var pleft = hotspotdata.Hotspots[i].left;
                        var ptop = hotspotdata.Hotspots[i].top;
                        var accessText = hotspotdata.Hotspots[i].accessText;
                        if ((hotspotdata.Hotspots[i].left + "").indexOf("px") != -1) {
                            pleft = getPerc(Number(hotspotdata.Hotspots[i].left.replace("px", "").replace("%", "")), orw) + "%";
                            ptop = getPerc(Number(hotspotdata.Hotspots[i].top.replace("px", "").replace("%", "")), orh) + "%";
                        }

                        var eventname = hotspotdata.Hotspots[i].eventname;

                        if (eventname != undefined && eventname == "dblclick" && !isAndroid && !isIOS) {
                            htmlForDivHotspotImage += "<button type='button' hsId='" + hsId + "'  id='divHotspots" + i + "_" + hsId + "' class='divHotSpotdbl divHotSpotCommon' style=' width:" + pwdth + ";height:" + phight + ";left:" + pleft + ";top:" + ptop + ";' action='" + hotspotdata.Hotspots[i].action + "' role='button' aria-label='" + accessText + "' eventname='" + eventname + "'/>";
                        }
                        else if (hotspotdata.Hotspots[i].eventname == "noclick") {

                            htmlForDivHotspotImage += "<button type='button' hsId='" + hsId + "'  id='divHotspots" + i + "_" + hsId + "' class='noHotSpot divHotSpotCommon' style=' width:" + pwdth + ";height:" + phight + ";left:" + pleft + ";top:" + ptop + ";' action='" + hotspotdata.Hotspots[i].action + "' role='button' aria-label='" + accessText + "' eventname='" + eventname + "'/>"
                        }
                        else {
                            htmlForDivHotspotImage += "<button type='button' hsId='" + hsId + "'  id='divHotspots" + i + "_" + hsId + "' class='divHotSpot divHotSpotCommon' style=' width:" + pwdth + ";height:" + phight + ";left:" + pleft + ";top:" + ptop + ";' action='" + hotspotdata.Hotspots[i].action + "' role='button' aria-label='" + accessText + "'/>";
                        }


                    }
                    $(".wrapperimage").append(htmlForDivHotspotImage)
                }

            }
        },
        PresenterMode: function () {
/*
            if ($("#div_feedback").length > 0) {
                $("#div_feedback").hide();

            }
            var currentPageData = _Navigator.GetCurrentPage();
            var pageData = this.GetPageDetailData();
            var appendImage = $(".wrapperimage");
            isCorrect = true;
            var getArray = [];
            var getidArray = [];
            if (currentPageData.pageId != _Navigator.GetQuizPageId()) {
                _Navigator.SetPageStatus(true);
            }
            $(".divHotSpotCommon").each(function () {

                getArray.push($(this).attr("hsid"))


            })
            if (currentPageData.pageId == "p3") {
                appendImage = $('#OutlookMail > tbody > tr#row1');
                $('#OutlookMail > tbody > tr#row1').addClass("hotspotclicked");
                $('#OutlookMail > tbody > tr#row1').addClass("disabled")
                var posObj = $('#OutlookMail > tbody > tr#row1').position();
                var _div = "<div class='reviewDiv Correct' style='z-index:5;width:39px;height:39px;position:absolute;left:" + posObj.left + ";top:" + posObj.top + ";'><img src='assets/images/review-correct.png' style='width:39px;height:35px;' /></div>";
                appendImage.append(_div);
            }

            if ((currentPageData.pageId == "p5" || currentPageData.pageId == "p8" || currentPageData.pageId == "p9" || currentPageData.pageId == "p15") && pageData.EmbedSettings != undefined) {
                $("input[type='text']").addClass("greenspan");
                if (pageData.EmbedSettings.length >= 1) {

                    for (var i = 0; i < pageData.EmbedSettings.length; i++) {

                        $("#" + pageData.EmbedSettings[i].inputid).val(pageData.EmbedSettings[i].answerset);
                    }
                }

                $("input[type='text']").k_disable();

            }
            if (pageData.ImageHotSpots != undefined) {
                for (var i = 0; i < pageData.ImageHotSpots.Hotspots.length; i++) {
                    for (var j = 0; j < getArray.length; j++) {
                        if (pageData.ImageHotSpots.Hotspots[i].HotspotId == getArray[j]) {
                            if (pageData.ImageHotSpots.Hotspots[i].isCorrect != undefined) {
                                isCorrect = pageData.ImageHotSpots.Hotspots[i].isCorrect;
                            }
                            // if (isCorrect) {
                            //     if (pageData.ImageHotSpots.Hotspots.length == 3) {
                            //         if (getArray[j] == "1") {
                            //             $("#divHotspots0_1").addClass("hotspotclicked")
                            //         } else if (getArray[j] == "2") {
                            //             $("#divHotspots1_2").addClass("hotspotclicked")
                            //         }
                            //         else {
                            //             $("#divHotspots2_3").addClass("hotspotclicked")
                            //         }
                            //     }
                            //     else if (pageData.ImageHotSpots.Hotspots.length == 4) {
                            //         if (getArray[j] == "1") {
                            //             $("#divHotspots0_1").addClass("hotspotclicked")
                            //         } else if (getArray[j] == "2") {
                            //             $("#divHotspots1_2").addClass("hotspotclicked")
                            //         }
                            //         else if (getArray[j] == "3") {
                            //             $("#divHotspots2_3").addClass("hotspotclicked")
                            //         }
                            //         else {
                            //             $("#divHotspots3_4").addClass("hotspotclicked")
                            //         }
                            //     }
                            //     else {
                            //         $(".divHotSpotCommon").addClass("hotspotclicked");
                            //     }
                            // }
                            // break;
                        }
                    }
                    if (pageData.ImageHotSpots.Hotspots.length == 1) {
                        var posObj = pageData.ImageHotSpots.Hotspots[0];
                        $("#divHotspots"+i+"_"+getArray[i]).addClass("hotspotclicked")
                        var _div = "<div class='reviewDiv Correct' style='z-index:5;width:39px;height:39px;position:absolute;left:" + posObj.left + ";top:" + posObj.top + ";'><img src='assets/images/review-correct.png' style='width:39px;height:35px;' /></div>";
                        appendImage.append(_div);
                    }
                    else if (pageData.ImageHotSpots.Hotspots[i].isCorrect == true && pageData.ImageHotSpots.Hotspots.length > 1) {
                        var posObj = pageData.ImageHotSpots.Hotspots[i];
                        $("#divHotspots"+i+"_"+getArray[i]).addClass("hotspotclicked")
                        var _div = "<div class='reviewDiv Correct' style='z-index:5;width:39px;height:39px;position:absolute;left:" + posObj.left + ";top:" + posObj.top + ";'><img src='assets/images/review-correct.png' style='width:39px;height:35px;' /></div>";
                        appendImage.append(_div);
                    }

                }
            }
            this.ShowFeedbackReviewMode();
            $(".divHotSpotCommon").addClass("disabled");
            //$(".divHotSpotCommon").addClass("hotspotclicked");
            $(".divHotSpotCommon").k_disable();
            */
            $("#linknext").k_enable();
        },
        ApplycontainerWidth: function () {

            var innerWidth = $(window).width();

            $("#header-title img").attr("src", "assets/images/logo.png")

            if (innerWidth < 850) {
                if ($(".activityContainer").find(".activityimg").length > 0) {
                    var marginleft = $(".intro-content:first").css("margin-left");
                    marginleft = marginleft.substring(0, marginleft.indexOf("px"))

                    var imgcntwidth = innerWidth - (marginleft * 2);
                    $(".activity").css({ "width": imgcntwidth + "px" })
                }
                if (innerWidth <= 500) {
                    $("#header-title img").attr("src", "assets/images/pearson-logo-v1.png")
                }
            }
            else {
                $(".activity").css({ "width": "auto" })
            }

        },
        OrientationChange: function () {

            this.ApplycontainerWidth();
            var target = $(".header-content-dock");
            target.css({ "visibility": "hidden","top": "-80px"})
        },
        HotspotClick: function (_hotspot, event) {
            if (_Navigator.IsRevel()) {
                LifeCycleEvents.OnInteraction("Hotspot click.")
            }
            if (_Navigator.IsAnswered())
                return;
            var action = _hotspot.attr("action")
            // this.AddHotspotClick(_hotspot, event);
            var score = 0;
            var pageData = this.GetPageDetailData();
            var currentPageid = _Navigator.GetCurrentPage().pageId;
            isCorrect = true;


            for (var i = 0; i < pageData.ImageHotSpots.Hotspots.length; i++) {
                if (pageData.ImageHotSpots.Hotspots[i].HotspotId == _hotspot.attr("hsid")) {
                    //score = parseInt(pageData.ImageHotSpots.Hotspots[i].score);
                    if (pageData.ImageHotSpots.Hotspots[i].isCorrect != undefined) {
                        isCorrect = pageData.ImageHotSpots.Hotspots[i].isCorrect;
                    }
                }
            }

            this.AddHotspotClick(_hotspot, event, isCorrect);
            if (currentPageid == "p16") {
                pageData.hotspotclickcount = pageData.hotspotclickcount + 1;
                if (pageData.hotspotclickcount >= 4) {
                    this.HotspotFeedback();
                    _Navigator.SetPageStatus(true);
                    $("#linknext").k_enable();
                    $(".divHotSpot").addClass("disabled");
                    $(".divHotSpot").removeClass("hotspotclicked");

                }
            }
            _Navigator.SetPageScore(score)
            switch (action) {
                case "next":
                    _Navigator.SetPageStatus(true);
                    _Navigator.GetBookmarkData();
                    this.HotspotNext();
                    break;
                case "feedback":
                    this.HotspotFeedback(_hotspot, isCorrect);
                    if (isCorrect) {
                        _Navigator.SetPageStatus(true);
                        _Navigator.GetBookmarkData();
                    }
                    break;
                case "inputcheck":
                    _ModuleCommon.InputEnter($("input.EmbededElement"));
                    break;
                case "customNext":
                    _Navigator.GetCustomNext();
                    //_Navigator.LoadPage("p17")
                    break;
                default:
                    break;
            }
        },
        Mailclick: function () {

            this.AddOutLookClick($("#OutlookMail"), true)
            _Navigator.SetPageStatus(true);
            this.HotspotNext();

        },
        AddOutLookClick: function (imgObj, isDifferentImage) {
            var found = false;
            // console.log(gCurrPageObj.PageId);
            ImageId = "OutlookMail";
            //   var reviewData = this.GetPageReviewData();
            var currentPageData = _Navigator.GetCurrentPage();
            var pageReviewData;
            if (reviewData != undefined) {
                for (var r = 0; r < reviewData.length; r++) {
                    if (reviewData[r].pageId == currentPageData.pageId) {
                        var position = { posX: 0, posY: 0, isCorrect: true, imageId: ImageId, isOutlookClick: true, isHotspotClick: false };
                        if (reviewData[r].Positions.length < 5) {
                            reviewData[r].Positions.push(position);
                        }
                        else {
                            reviewData[r].Positions.splice(0, 1);
                            reviewData[r].Positions.push(position);
                        }

                        pageReviewData = reviewData[r];
                        found = true;
                    }
                }
            }
            if (!found) {
                var _obj = {};
                _obj.pageId = currentPageData.pageId;
                var position = { posX: 0, posY: 0, isCorrect: true, imageId: ImageId, isOutlookClick: true, isHotspotClick: false };
                _obj.Positions = [position]
                pageReviewData = _obj;
                reviewData.push(_obj);
            }

        },
        SetFeedbackTop: function () {
            var ptop = Number($("#div_feedback").position().top);
            var pheight = Number($("#div_feedback").outerHeight());
            var pdiff = (_Settings.minHeight + _Settings.topMargin) - (ptop + pheight);
            if (pdiff > 0) {
                $("#div_feedback").css("margin-top", (pdiff + 35) + "px");
            }
        },
        InputFeedback: function () {

            if (_Navigator.IsRevel()) {
                LifeCycleEvents.OnFeedback()
            }
            var pageData = this.GetPageDetailData();
            var fdbkUrl = _Settings.dataRoot + "feedbackdata/" + pageData.EmbedSettings.feedbackurl;
            $("#div_feedback").show();
            $("#div_feedback").css("display", "inline-block");
            $("#div_feedback .div_fdkcontent").load(fdbkUrl, function () {

                $("#div_feedback p:first").attr("tabindex", "-1")
                if (iOS) {
                    $("#div_feedback p:first").attr("role", "text")
                }
                //$('html,body').animate({ scrollTop: document.body.scrollHeight }, delay, function () {
                window.scrollTo(0, document.body.scrollHeight)
                $("#div_feedback p:first").focus();
                //});
            });
            $("input").k_disable();
            this.EnableNext();
        },
        HotspotFeedback: function (_hotspot) {
            if (_Navigator.IsRevel()) {
                LifeCycleEvents.OnFeedback()
            }
            var pageData = this.GetPageDetailData();
            var currentPageData = _Navigator.GetCurrentPage();
            var url = "";
            if (currentPageData.pageId == "p16") {
                url = pageData.correctfeedbackurl;
            }
            else {
                // if (pageData.ImageHotSpots != undefined) {
                for (var i = 0; i < pageData.ImageHotSpots.Hotspots.length; i++) {
                    if (pageData.ImageHotSpots.Hotspots[i].HotspotId == _hotspot.attr("hsid")) {
                        url = pageData.ImageHotSpots.Hotspots[i].feedbackurl;
                    }
                }
            }
            var fdbkUrl = _Settings.dataRoot + "feedbackdata/" + url;
            $("#div_feedback").show();
            $("#div_feedback").css("display", "inline-block");

            $("#div_feedback .div_fdkcontent").load(fdbkUrl, function () {

                $("#div_feedback p:first").attr("tabindex", "-1")
                if (iOS) {
                    $("#div_feedback p:first").attr("role", "text")
                }

                window.scrollTo(0, document.body.scrollHeight)
                $("#div_feedback p:first").focus();
            });


            if (isCorrect) {
                this.EnableNext();
            }
            $(".divHotSpotCommon").addClass("disabled");
            $(".divHotSpotCommon").attr("aria-disabled", "true");
        },
        AddReviewData: function (textentryObjId, isCorrect) {
            var found = false;
            var pageReviewData;
            var textentryObj = $("input#" + textentryObjId)
            var str = textentryObj.val();
            var objId = textentryObjId;

            //  reviewData = this.GetReviewData();
            if (reviewData != undefined && reviewData.length > 0) {
                for (var r = 0; r < reviewData.length; r++) {

                    if (reviewData[r].pageId == _Navigator.GetCurrentPage().pageId && objId == reviewData[r].objId) {
                        var sameText = false;
                        if (reviewData[r].textEntry != undefined) {
                            for (var i = 0; i < reviewData[r].textEntry.length; i++) {
                                if (reviewData[r].textEntry[i] == str) {
                                    sameText = true;
                                    break;
                                }
                            }
                            if (!sameText) {
                                if (reviewData[r].textEntry.length < 3) {
                                    reviewData[r].textEntry.push(str);
                                }
                                else {
                                    reviewData[r].textEntry.splice(0, 1);
                                    reviewData[r].textEntry.push(str);
                                }
                            }
                        }
                        else {
                            reviewData[r].textEntry = [str];
                        }
                        found = true;
                    }
                }
            }

            if (!found) {
                var _obj = {};
                _obj.pageId = _Navigator.GetCurrentPage().pageId;
                _obj.textEntry = [str];
                _obj.isCorrect = isCorrect;
                _obj.objId = objId;
                reviewData.push(_obj);
            }
            /*ITSimModule.SetReviewData(reviewData)
            if (isCorrect) {
              fSetScoreForReviewMode();
            }*/
        },
        GetReviewData: function () {
            return reviewData;
        },
        ViewTextEntryInReviewMode: function () {
            //  var reviewData = this.GetPageReviewData();
            // var settings = PageSettings[gCurrPageObj.PageId];
            // var embedSettings = settings.EmbedSettings;
            $("input[type='text']").k_disable();
            var currentPageData = _Navigator.GetCurrentPage();
            var pageData = _ModuleCommon.GetPageDetailData();
            if (reviewData != undefined) {
                for (var i = 0; i < reviewData.length; i++) {
                    var rData = reviewData[i];
                    if (rData.pageId == _Navigator.GetCurrentPage().pageId) {
                        if (pageData.EmbedSettings != undefined) {
                            for (j = 0; j < pageData.EmbedSettings.length; j++) {

                                if (rData.objId == pageData.EmbedSettings[j].inputid) {
                                    var txtObj = $("#" + pageData.EmbedSettings[j].reviewid);

                                    for (k = 0; k < rData.textEntry.length; k++) {

                                        var tEntry = rData.textEntry[k];
                                        if (k == 0) {
                                            if (rData.isCorrect) {
                                                $("#" + rData.objId).val(rData.textEntry[k]).css({ "color": ColorCodes.green, "font-weight": "bold" });
                                                if (rData.objId == "input-to-addr" && rData.textEntry[k] != "")
                                                    $(".textentryaccessibility-to-addr").text("Correct to address " + rData.textEntry[k]);
                                                if (rData.objId == "input-cc-addr" && rData.textEntry[k] != "")
                                                    $(".textentryaccessibility-cc-addr").text("Correct cc address " + rData.textEntry[k])
                                                if (rData.objId == "input-bcc-addr" && rData.textEntry[k] != "")
                                                    $(".textentryaccessibility-bcc-addr").text("Correct bcc address " + rData.textEntry[k])
                                                if (rData.objId == "input-subj" && rData.textEntry[k] != "")
                                                    $(".textentryaccessibility-input-subj").text("Correct subject line " + rData.textEntry[k])
                                                $("#" + rData.objId).attr("aria-hidden", "true")
                                            }
                                            else {
                                                $("#" + rData.objId).val(rData.textEntry[k]).css({ "color": ColorCodes.red, "font-weight": "bold" });
                                                if (rData.objId == "input-to-addr" && rData.textEntry[k] != "")
                                                    $(".textentryaccessibility-to-addr").text("Incorrect to address " + rData.textEntry[k]);
                                                if (rData.objId == "input-cc-addr" && rData.textEntry[k] != "")
                                                    $(".textentryaccessibility-cc-addr").text("Incorrect cc address " + rData.textEntry[k])
                                                if (rData.objId == "input-bcc-addr" && rData.textEntry[k] != "")
                                                    $(".textentryaccessibility-bcc-addr").text("Incorrect bcc address " + rData.textEntry[k])
                                                if (rData.objId == "input-subj" && rData.textEntry[k] != "")
                                                    $(".textentryaccessibility-input-subj").text("Incorrect subject line " + rData.textEntry[k])
                                                $("#" + rData.objId).attr("aria-hidden", "true")
                                            }
                                        }
                                        if (k == 1) {
                                            //  txtObj.html("<p style='color:green;font-weight:bold;font-size: 12px; font-family: Arial;'>" + rData.textEntry[k] + "</p>");
                                            if ($(txtObj).attr("id") == "review-bcc1") {
                                                $(txtObj).text(rData.textEntry[k]).css({ "color": ColorCodes.green, "font-weight": "bold" });
                                                $(".textentryaccessibility-bcc-addr").text("Incorrect bcc address " + rData.textEntry[0] + " Correct bcc address " + rData.textEntry[1])
                                                $(txtObj).attr("aria-hidden", "true")
                                            }
                                            else {
                                                $(txtObj).val(rData.textEntry[k]).css({ "color": ColorCodes.green, "font-weight": "bold" });
                                                if (rData.objId == "input-to-addr")
                                                    $(".textentryaccessibility-to-addr").text("Incorrect to address " + rData.textEntry[0] + " Correct to address " + rData.textEntry[1]);
                                                if (rData.objId == "input-cc-addr")
                                                    $(".textentryaccessibility-cc-addr").text("Incorrect cc address " + rData.textEntry[0] + " Correct cc address " + rData.textEntry[1])
                                                if (rData.objId == "input-bcc-addr")
                                                    $(".textentryaccessibility-bcc-addr").text("Incorrect bcc address " + rData.textEntry[0] + " Correct bcc address " + rData.textEntry[1])
                                                if (rData.objId == "input-subj")
                                                    $(".textentryaccessibility-input-subj").text("Incorrect subject line " + rData.textEntry[0] + " Correct subject line " + rData.textEntry[1])
                                                $(txtObj).attr("aria-hidden", "true")
                                            }
                                            if (rData.textEntry[k] != "" && rData.textEntry[k] != undefined) {
                                                txtObj.show();
                                                $(".textentryaccessibility-to-addr").show();
                                                $(".textentryaccessibility-cc-addr").show();
                                                $(".textentryaccessibility-bcc-addr").show();
                                                $(".textentryaccessibility-input-subj").show();
                                            }
                                            else
                                                txtObj.hide();
                                        }
                                    }
                                    break;
                                }
                            }


                        }
                    }
                }
            }
            $(".divHostSpotCommon").addClass("disabled")
        },
        InitPageData: function () {
            var currentPageData = _Navigator.GetCurrentPage();
            if (_Navigator.IsAnswered()) {
                return;
            }
            for (var i = 0; i < pagesDataArray.length; i++) {
                if (currentPageData.pageId == pagesDataArray[i].PageID) {
                    return;
                }
            }
            var obj = {};
            obj.PageID = currentPageData.pageId;

            pagesDataArray.push(obj);
        },
        checkP14visited: function () {
            var cnt = 0;
            pageArray = [];
            for (var i = 0; i < pagesDataArray.length; i++) {
                if (["p13", "p14"].indexOf(pagesDataArray[i].PageID) >= 0 && pageArray.indexOf(pagesDataArray[i].PageID) < 0) {
                    cnt++;
                    pageArray.push(pagesDataArray[i].PageID);
                }
            }
            if (cnt == 2) {
                return true;
            }
            return false;
        },
        checkP17visited: function () {
            var cnt = 0;
            pageArray = [];
            for (var i = 0; i < pagesDataArray.length; i++) {
                if (["p3", "p17"].indexOf(pagesDataArray[i].PageID) >= 0 && pageArray.indexOf(pagesDataArray[i].PageID) < 0) {
                    cnt++;
                    pageArray.push(pagesDataArray[i].PageID);
                }
            }
            if (cnt == 2) {
                return true;
            }
            return false;
        },
        OnContinue: function () {

            $("input").k_enable();
            $("input").val("");
            $("#div_feedback .div_fdkcontent").html("");
            $("#div_feedback").hide();
            $(".divHotSpotCommon").removeClass("disabled");
            $(".divHotSpot").removeClass("hotspotclicked");
            $(".divHotSpot").each(function () { $(this).k_enable(); });
            // $('html,body').animate({ scrollTop: document.body.scrollHeight }, 500, function () { });
            $('html,body').scrollTop(0);        //.animate({ scrollTop: document.body.scrollHeight }, 500, function () { });
            $("h2").focus();
        },
        HotspotNext: function () {
            _Navigator.Next();
        },
        InputNext: function () {
            _Navigator.Next();
        },
        InputEnter: function () {

            $("input").k_disable();
            if (_Navigator.IsAnswered())
                return;
            {
                var pageData = this.GetPageDetailData();
                var currentPage = _Navigator.GetCurrentPage();
                var obj = [];
                //var vtextarr = pageData.EmbedSettings.validatearray;
                var isVRequired = false;
                var isAllCorrect = true;

                for (var i = 0; i < pageData.EmbedSettings.length; i++) {
                    var trimmed_str = $.trim((pageData.EmbedSettings[i].answerset).toLowerCase());
                    if (trimmed_str.indexOf(',') > -1)
                        trimmed_str = trimmed_str.replace(", ", ',');
                    if (trimmed_str.lastIndexOf(',') > -1)
                        trimmed_str = trimmed_str.replace(", ", ',');
                    // for(var j=0;j<pageData.EmbedSettings[i].answerset.length;j++){
                    if (($.trim($("#" + pageData.EmbedSettings[i].inputid).val().toLowerCase()) == $.trim((pageData.EmbedSettings[i].answerset).toLowerCase())) || ($.trim($("#" + pageData.EmbedSettings[i].inputid).val().toLowerCase()) == trimmed_str)) {
                        this.AddReviewData(pageData.EmbedSettings[i].inputid, true)
                    }
                    else {
                        this.AddReviewData(pageData.EmbedSettings[i].inputid, false)
                        isAllCorrect = false;
                    }


                }
                if (currentPage.pageId == "p15" && isAllCorrect == false) {
                    $("input").k_enable();
                    $(".divHotSpot").removeClass("hotspotclicked")
                    $(".divHotSpot").removeClass("disabled")
                    $(".divHotSpot").removeAttr("disabled")
                    $(".divHotSpot").removeAttr("aria-disabled")
                    return;

                } else {
                    if (isAllCorrect) {
                        fdbkurl = _Settings.dataRoot + "feedbackdata/" + pageData.correctfeedbackurl;
                        //_currentPageObject.isAnswered;
                        _Navigator.SetPageStatus(true);
                        _Navigator.GetBookmarkData();
                        $("#linknext").k_enable();
                    }
                    else {
                        fdbkurl = _Settings.dataRoot + "feedbackdata/" + pageData.incorrectfeedbackurl;
                        // $(".divHotSpot").removeClass("disabled");
                        $(".divHotSpot").addClass("hotspotclicked");
                        $("#linknext").k_disable();
                    }
                    $("#div_feedback").show();
                    $("#div_feedback").css("display", "inline-block");
                    $("#div_feedback .div_fdkcontent").load(fdbkurl, function () {
                        $("#div_feedback p:first").attr("tabindex", "-1")
                        if (iOS) {
                            $("#div_feedback p:first").attr("role", "text")
                        }
                        //$('html,body').animate({ scrollTop: document.body.scrollHeight }, delay, function () {
                        window.scrollTo(0, document.body.scrollHeight)
                        $("#div_feedback p:first").focus();
                        //});
                    });



                }
            }
        },
        AppendFooter: function () {           
                $("#header-progress .presentationModeFooter").show();             
                
                $("footer").show();
                $("#linknext").k_enable();           
            
        },
        AppendScormReviewFooter: function () {
            $(".presentationModeFooter").html('Review Mode');
            $("#header-progress .presentationModeFooter").show();           
                
                $("footer").show();
                $("#linknext").k_enable();   
            /*
            if ($(".ScormReviewFooter").length == 0) {
                var str = '<div class="ScormReviewFooter"> Review Mode</div>';
                $("footer").append($(str));
                $("footer").show();
                $("#linknext").k_enable();
            }*/
            
        },
        AppendCss: function () {
            if (isIE11version) {
                $(".hintDiv").css("width", "70px")

            }
            if (isAndroid || iOS) {
                $("#footer-navigation ").css("display", "");

            }
        }
    }
})();
$(document).ready(function () {

    _Navigator.Initialize();

    $('body').attr({ "id": "thebody", "onmousedown": "document.getElementById('thebody').classList.add('no-focus');", "onkeydown": "document.getElementById('thebody').classList.remove('no-focus');" })
});










