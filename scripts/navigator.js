﻿//This api will contain navigation logic and page load.
//It will also handle the question navigation if the page is having multiple questions.
var _Navigator = (function () {
    var packageType = "presenter";//presenter/scorm/revel
    var _currentPageId = "";
    var _currentPageObject = {};
    var progressLevels = [22];
    var totalsimscore = 18;
    //var presentermode = false;
    var bookmarkpageid = "";
    var quizpageid = "p18";
    var _NData = {
        "p1": {
            pageId: "p1",
            prevPageId: "",
            nextPageId: "p2",
            dataurl: "p1.htm",           
            isStartPage: true,
            isAnswered: true,
            accessText:"Windows 10 Desktop",
        },
        "p17": {
            pageId: "p17",
            prevPageId: "p2",
            nextPageId: "p3",
            dataurl: "p17.htm",
            hinturl: "hintp16.htm",
            hasActivity: true,
            accessText:"Windows 10 Desktop with Start window open",

        },
        "p2": {
            pageId: "p2",
            prevPageId: "p1",
            nextPageId: "p3",
            dataurl: "p2.htm",
            hinturl: "hintp2.htm",
            hasActivity: true,
            customNext: "p17",
            customReviewNext:"p17",
            accessText:"Windows 10 Desktop with Start window open",  
        },
        "p3": {
            pageId: "p3",
            prevPageId: "p2",
            nextPageId: "p4",
            dataurl: "p3.htm",
            hinturl: "hintp3.htm",
            hasActivity: true,
            customPrevPage:"p17",
            accessText:"inbox - sylvia russo (russos@western.com) - Microsoft outlook",

        },
        "p4": {
            pageId: "p4",
            prevPageId: "p3",
            nextPageId: "p5",
            dataurl: "p4.htm",
            hinturl: "hintp4.htm",
            hasActivity: true,
            accessText:"Email format and concerns- message",

        },
        "p5": {
            pageId: "p5",
            prevPageId: "p4",
            nextPageId: "p6",
            dataurl: "p5.htm",
            hinturl: "hintp5.htm",
            hasActivity: true,
            accessText:"untitled - message (html)",
            
        },
        "p6": {
            pageId: "p6",
            prevPageId: "p5",
            nextPageId: "p7",
            dataurl: "p6.htm",
            hinturl: "hintp6.htm",
            hasActivity: true,
            accessText:"cell phone policies - message",

        },
        "p7": {
            pageId: "p7",
            prevPageId: "p6",
            nextPageId: "p8",
            dataurl: "p7.htm",
            hinturl: "hintp7.htm",
            hasActivity: true,
            accessText:"last friday's shipment - message",

        },
        "p8": {
            pageId: "p8",
            prevPageId: "p7",
            nextPageId: "p9",
            dataurl: "p8.htm",
            hinturl: "hintp8.htm",
            hasActivity: true,
            accessText:"reply: we need to talk! - message (html)",

        },
        "p9": {
            pageId: "p9",
            prevPageId: "p8",
            nextPageId: "p10",
            dataurl: "p9.htm",
            hinturl: "hintp9.htm",
            hasActivity: true,
            accessText:"latest product flyer - message",

        },
        "p10": {
            pageId: "p10",
            prevPageId: "p9",
            nextPageId: "p11",
            dataurl: "p10.htm",
            hinturl: "hintp10.htm",
            hasActivity: true,
            accessText:"email protocol - message",

        },
        "p11": {
            pageId: "p11",
            prevPageId: "p10",
            nextPageId: "p12",
            dataurl: "p11.htm",
            hinturl: "hintp11.htm",
            hasActivity: true,
            accessText:"message",

        },
        "p12": {
            pageId: "p12",
            prevPageId: "p11",
            nextPageId: "p13",
            dataurl: "p12.htm",
            hinturl: "hintp12.htm",
            hasActivity: true,
            accessText:"next friday!! - message",

        },
        "p13": {
            pageId: "p13",
            prevPageId: "p12",
            nextPageId: "p15",
            dataurl: "p13.htm",
            hinturl: "hintp13.htm",
            hasActivity: true,
            customNext: "p14",
            customReviewNext:"p14",
            accessText:"Reply: scheduled delivery - message", 
        },
        "p14": {
            pageId: "p14",
            prevPageId: "p13",
            nextPageId: "p16",
            dataurl: "p14.htm",
            hinturl: "hintp14.htm",
            hasActivity: true,
            accessText:"inbox - sylvia russo (russos@western.com) - microsoft outlook",
          

        },
        "p15": {
            pageId: "p15",
            prevPageId: "p13",
            nextPageId: "p16",
            dataurl: "p15.htm",
            hinturl: "hintp15.htm",
            hasActivity: true,
            accessText:"Reply: scheduled delivery - message",
           

        },
        "p16": {
            pageId: "p16",
            prevPageId: "p15",
            nextPageId: "p18",
            dataurl: "p16.htm",
           // hinturl: "hintp16.htm",
            hasActivity: true,
            customPrevPage:"p14",
            accessText:"shipment - message",
            
        },
        
        "p18":{
            pageId: "p18",
            prevPageId: "p16",
            nextPageId: "",
            dataurl: "p18.htm",
            hasActivity: true,
            isLastPage:true,
            isAssessment:true,
            hideHint:true,
        }
    }
    var _StateData = {}

    function OnPageLoad() {

        $(".hintcontainer").hide()
        $(".hintlink").removeClass("expanded");
        $(".hintlink").attr("aria-expanded", "false")
        $("#header-title h1").show()
        $("#header-title").removeClass("startpage");
        if (_currentPageObject.isStartPage != undefined && _currentPageObject.isStartPage) {
            $("#header-title h1").hide()
            $("#header-title").addClass("startpage");
        }
        _ModuleCommon.AppendCss();
        if (_currentPageObject.accessText != undefined) {
            $(".activityimg").attr("alt", _currentPageObject.accessText);
        }
        _ModuleCommon.OnPageLoad();
        if (_Navigator.IsPresenterMode()) {
            $("#linknext").k_enable();
            $(".start-btn").k_disable();
        }
        
    }
    return {
        Get: function () {
            return _NData;
        },
        Start: function () {
            this.LoadPage("p1");
            if (this.IsPresenterMode()) {
                _ModuleCommon.AppendFooter();
            }
        },
        LoadPage: function (pageId, jsonObj) {
             $(".hintcontainer").hide()
             $(".header-content-dock").css({"visibility":"hidden"});
            if (_Navigator.IsRevel() && _currentPageId !=undefined && _currentPageId !="") {
               LifeCycleEvents.OnUnloadFromPlayer()
            }
            bookmarkpageid = pageId;
            if (jsonObj == undefined) {
                jsonObj = {};
            }
            _currentPageId = pageId;           
            _currentPageObject = _NData[_currentPageId]
            if(_currentPageObject.hasActivity == undefined || _currentPageObject.hasActivity == false){
                this.SetPageStatus(true);
            }
            this.UpdateProgressBar();
            _currentPageObject = _NData[_currentPageId]
            $("#header-progress").show();
            $("#header-title").show();
            $("footer").show();
             if(_currentPageId == "p4"){
                _NData["p17"].isAnswered=true;
               
             }
             if(_currentPageId == "p17"){
                _NData["p2"].isAnswered=true;
               
             }
             if(_currentPageId == "p14") {
                _NData["p13"].isAnswered=true;
            
             }
             if(_currentPageId == "p16") {
                _NData["p14"].isAnswered=true;
                _NData["p15"].isAnswered=true;
             }
             
            if (_currentPageObject.isStartPage != undefined && _currentPageObject.isStartPage) {
                $("#linkprevious").k_disable();
                $("#linknext").k_enable();
                $("footer").hide();
                $("#header-progress").hide();
                if (this.IsPresenterMode())
                    _ModuleCommon.AppendFooter();

            }

            if (_currentPageObject.hasActivity != undefined && _currentPageObject.hasActivity && !this.IsAnswered()) {
                $("#linknext").k_disable();
            }
            if (this.IsAnswered()) {
                $("#linknext").k_enable();

            }
            if (_currentPageObject.isLastPage != undefined && _currentPageObject.isLastPage) {
                $("#linknext").k_disable();
            }
           

            _currentPageObject.isVisited = true;

            var pageUrl = _Settings.dataRoot + _currentPageObject.dataurl + _Caching.GetUrlExtension();
            if (_currentPageObject.pageId == "p5") { // temporary fix
                $("#progressdiv").css("margin-left", "-20px")
            }
            else
            {
                $("#progressdiv").css("margin-left", "-15px")
            }
            if (_currentPageObject.isStartPage) {
                $(".main-content").load(pageUrl, function () {
                    OnPageLoad();
                    //setReader("header1");
                    $("#header1").focus();
                });
            } else {
                $(".main-content").fadeTo(250, 0.25, function () {
                    $(".main-content").load(pageUrl, function () {
                        $(this).fadeTo(600, 1)
                        if ($(".activityimg").length > 0) {
                            $('.activityimg').load(function () {
                                OnPageLoad();
                                //console.log("loaded"+_currentPageId)
                              
                                if (_Navigator.IsPresenterMode()) {
                                    _ModuleCommon.PresenterMode();
                                }
                               
                                /*if (_currentPageId != quizpageid) {   
                                    if(!_Navigator.IsAnswered() && _PData[_currentPageId].EmbedSettings !=undefined
                                    )
                                    {
                                        $("input[type='text']").focus()
                                    }
                                    else if(isAndroid)
                                    {
                                        window.location.hash = '#progressdiv'
                                    }
                                    else
                                    {
                                        if(isiPhone)
                                        {
                                            $("#progressdiv").attr("role","text")
                                        }
                                        $("#progressdiv").focus();
                                    }
                                   
                                }*/
                                if (_currentPageObject.pageId == "p2") {
                                    $("#titleheader").focus();
                                }
                                else {
                                    if (_currentPageId != quizpageid) {
                                        if(isChrome){
                                            $("#titleheader").focus();
                                        }
                                        else{
                                            if(isiPhone){
                                                $("#progressdiv").attr("role","text")
                                            }
                                            $("#progressdiv").focus();
                                        }
                                    }
                                    else {
                                        $("#Questioninfo").focus();
                                    }
                                }
                                event.preventDefault();

                            });
                        }
                        else
                        {
                            OnPageLoad();
                           
                        }

                        if (_currentPageId == quizpageid)//  change to assessment id
                        {
                            _Assessment.ShowQuestion();
                        }
                       
                        $("#hintdiv").show();
                        if (_currentPageObject.hideHint != undefined && _currentPageObject.hideHint) {
                            $("#hintdiv").hide();
                        }
                        if( _currentPageObject.hinturl !=undefined)
                        {
                            $(".hintlink").k_enable();
                            $(".hintcontent").load("pagedata/hintdata/" + _currentPageObject.hinturl, function () { });
                        }
                        else
                        {
                            $(".hintlink").k_disable();
                        }

                        if ((/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))) {
                            $('#footer-navigation').css('display', 'table');
                        }

                        _Navigator.GetBookmarkData();
                        if (_currentPageObject.pageId == "p2") {
                            $("#titleheader").focus();
                        }
                    });
                })
            }

            if (_Navigator.IsRevel()) {
                LifeCycleEvents.OnLoadFromPlayer()
             }

        },
        LoadDefaultQuestion: function () {
            if (_currentPageObject.questions.length > 0) {
                _questionId = 0;
                _currentPageObject.questions[0].isQuestionVisit = true;
                for (var i = 0; i < _currentPageObject.questions.length; i++) {
                    if (_currentPageObject.questions[i].isCurrent) {
                        _questionId = i;
                    }
                }
                //second parameter is to disable question effect.
                _Question.Load(_currentPageObject.questions[_questionId], {
                    disableEffect: true
                });
            }
        },
        Prev: function () {
            if (_Navigator.IsRevel()) {
                LifeCycleEvents.OnInteraction("Previous link click.")
            }
            if (_currentPageObject.pageId == quizpageid && typeof (currentQuestionIndex) != 'undefined' && currentQuestionIndex > 0) {
                $("#ReviewIns").hide();
                $(".intro-content-question").show();
                $("#Questioninfo").show();
                currentQuestionIndex  = currentQuestionIndex - 1;
                $("#Summary").empty();
                $("#Summary").hide();
                _Assessment.ShowQuestion();
            }
            else if((_currentPageObject.customPrevPage != undefined && _ModuleCommon.checkP14visited()) ||(_currentPageObject.customPrevPage != undefined && _ModuleCommon.checkP17visited() && _currentPageObject.pageId != "p16"))
             {

                this.LoadPage(_currentPageObject.customPrevPage);

            }
            else{
                this.LoadPage(_currentPageObject.prevPageId);
            }

        },
        Next: function () {
            if (_Navigator.IsRevel()) {
                LifeCycleEvents.OnInteraction("Next link click.")
            }
            $("#linkprevious").k_enable();
            
            if (_currentPageObject.pageId == quizpageid) {

                if (typeof (currentQuestionIndex) != 'undefined' && typeof (gRecordData.Questions) != 'undefined' && (currentQuestionIndex + 1) < gRecordData.Questions.length) {
                    currentQuestionIndex = currentQuestionIndex + 1
                    $("#Questioninfo").show();
                    _Assessment.ShowQuestion()
                    if (gRecordData.Status != "Completed" && !this.IsPresenterMode()) {
                        $("#linknext").k_disable();
                        $("#linkprevious").k_disable();
                    }

                }

              else  if ( typeof(currentQuestionIndex) !='undefined' && typeof(gRecordData.Questions) !='undefined'  && (currentQuestionIndex +1) == gRecordData.Questions.length ) {
                    //this.UpdateProgressBar();
                    // Show review instruction
                    
                        $(".intro-content-question").hide();
                        $(".questionwrapper").hide();
                        currentQuestionIndex  = currentQuestionIndex + 1;
                        $("#Summary").show();
                        $("#Questioninfo").hide();
				        $("#Summary").load("pagedata/Summary.htm",function(){
                        _Assessment.ShowSummary()
                            $("#linkprevious").k_enable();
                            
                        })
                        $("#climate-deal").css("margin-left","23%");
                        $("#linknext").k_disable();
                        

                }                
        }
        else {
                if((_currentPageObject.pageId == "p13" && _currentPageObject.customNext != undefined &&  _NData["p15"].isAnswered)&&((_currentPageObject.pageId == "p2" && _currentPageObject.customNext != undefined)))
                {

                    this.LoadPage(_currentPageObject.customNext);
                }
                else if((_currentPageObject.customReviewNext != undefined && _ModuleCommon.checkP14visited())||(_currentPageObject.customReviewNext != undefined && _ModuleCommon.checkP17visited() && _currentPageObject.pageId != "p13"))
                {
                    this.LoadPage(_currentPageObject.customReviewNext);
                           
                }
                else{
                this.LoadPage(_currentPageObject.nextPageId);
                }
            }
        },
        GetProgressData: function () {
            var visitpage = 0;
            for (var i in _NData) {
                if (_NData[i].isAnswered != undefined && (_NData[i].isAnswered == true)) {
                    visitpage++;
                }
            }
            visitpage += this.GetAnswerCount() ;
            return visitpage;
        },
        GetCustomNext:function(){
              if(_currentPageObject.customNext != undefined){

                this.LoadPage(_currentPageObject.customNext);
              }

        },
        GetAnswerCount:function(){
          var cnt =  (gRecordData.Questions.filter(function (item) {
                return item.IsAnswered;
            }).length  ) 
            cnt+= gRecordData.Status == "Completed" ? 1:0;
            return cnt;
        },
        UpdateProgressBar: function () {
            var progData = this.GetProgressData();
            var lprog_pecent = (progData * 100 / progressLevels[0]).toFixed(0);
            $(".progressdiv").text("Progress: " + lprog_pecent + "%");
            $(".progressFg").css("width", lprog_pecent + "%");


        },
        GetCurrentPage: function () {
            return _currentPageObject;
        },
        CompletePage: function (extendedJson) {
            _currentPageObject.IsComplete = true;
            _currentPageObject = $.extend(true, _currentPageObject, extendedJson)
            _StateData[_currentPageObject.pageId] = $.extend(true, {}, _currentPageObject);
        },
        GetTotalScore: function () {
            var ObtainPoint = 0;

            for (var i in _NData) {
                if (_NData[i].points > 0) {
                    ObtainPoint += _NData[i].points
                }
            }
            var score = (ObtainPoint / totalsimscore) * 100;
            return score.toFixed(0);
        },
        UpdateScore: function () {
            var percScore = this.GetTotalScore()
            $("#scorediv").html("Score: " + percScore + "%");
        },
        SetPageScore: function (points) {
            if (!_currentPageObject.isAnswered) {
                _NData[_currentPageId].points = points;
                this.UpdateScore();
            }
        },
        SetPageStatus: function (isAnswered) {
            if (isAnswered) {
                _NData[_currentPageObject.pageId].isAnswered = true;
                this.UpdateProgressBar();
            }
        },
        IsAnswered: function () {
            if (_currentPageObject.isAnswered != undefined && _currentPageObject.isAnswered)
                return true;

            return false;

        },
        IsLoaded: function () {
            if (_currentPageObject.isLoaded != undefined && _currentPageObject.isLoaded)
                return true;

            return false;

        },
        SetPresenterMode:function(val){
            presentermode = val;
        },
        IsPresenterMode: function () {
            if(packageType == "presenter"){
                return true;
            }
            else{
                return false;
            }
        },
      
        SetBookmarkData: function () {
            var bookmarkdata;
            if(this.IsScorm())
            {
                bookmarkdata = _ScormUtility.GetSuspendData();
            }
            else if(this.IsRevel())
            {
                bookmarkdata = JSON.stringify(k_Revel.get_StateData())
            }
            
            if (bookmarkdata != undefined && bookmarkdata != "") {
                bookmarkdata = JSON.parse(bookmarkdata);
                bookmarkpageid = bookmarkdata.BMPageId;
                this.SetNavigatorBMData(bookmarkdata.VisistedPages)
                progressLevels = bookmarkdata.ProgressLevels;
                _ModuleCommon.SetReviewData(bookmarkdata.ReviewData)
                _Assessment.Setbookmarkdata(bookmarkdata.AssessmentData)
            }
        },
        GetBookmarkData: function () {
            if (!this.IsScorm() && !this.IsRevel())
                return;
            var bookmarkobj = {}
            bookmarkobj.BMPageId = bookmarkpageid;
            bookmarkobj.VisistedPages = this.GetNavigatorBMData();
            bookmarkobj.ProgressLevels = progressLevels;
            bookmarkobj.ReviewData = _ModuleCommon.GetReviewData();
            bookmarkobj.AssessmentData = _Assessment.Getbookmarkdata();
            if (this.IsRevel()) {
                if (k_Revel.get_LaunchData().mode == LaunchModes.do) {
                    var suspend_data = JSON.stringify(bookmarkobj);
                    k_Revel.set_StateData(JSON.parse(suspend_data))
                    k_Revel.PostData(gRecordData.Score, gRecordData.AssessmentScore);
                }
            }
            else if (this.IsScorm()) {
                _ScormUtility.SetSuspendData(JSON.stringify(bookmarkobj))
            }

        },
        GetNavigatorBMData: function () {
            var gVisistedPages = [];
            for (var i in _NData) {
                if (_NData[i].isAnswered) {
                    gVisistedPages.push(_NData[i].pageId)
                }
            }
            return gVisistedPages;
        },
        SetNavigatorBMData: function (gVisistedPages) {

            for (var i = 0; i < gVisistedPages.length; i++) {
                _NData[gVisistedPages[i]].isAnswered = true;
            }
        },
       
        SetBookMarkPage: function () {
            if (this.IsScorm()) {
                _ScormUtility.SetBookMark(bookmarkpageid);
            }
            else if (this.IsRevel()) {
                this.GetBookmarkData();
            }
        },
        GetBookMarkPage: function () {
            return bookmarkpageid;
        },
        Initialize: function () {
            if (packageType == "scorm") {
                _ScormUtility.Init();
                _Navigator.SetBookmarkData();
                //bookmarkpageid = _ScormUtility.GetBookMark();
                this.GotoBookmarkPage();
            }
            else if (packageType == "revel") {
                g_tempIntv = setInterval(function () {
                    if ((typeof piSession != 'undefined' && typeof piSession.currentToken() != 'undefined' && piSession.currentToken() != null)) {
                        clearInterval(g_tempIntv);
                        g_tempIntv = null;
                        //The rest of the code will go here.
                        LifeCycleEvents.InitParams();
                        LifeCycleEvents.OnLoad();
                        if (!k_Revel.isLaunchInitialize()) {
                            k_Revel.InitLaunch()
                            var suspend_data = JSON.stringify(k_Revel.get_StateData());
                            if (suspend_data != "" && suspend_data != "{}") {
                                var isTrue = this.SetBookmarkData();
                                if (isTrue && k_Revel.get_LaunchData().mode == "do") {
                                    this.GotoBookmarkPage();
                                } else {
                                    k_Revel.set_StateData(JSON.parse(suspend_data))
                                }
                            }
                        }
                        if (k_Revel.get_LaunchData().mode == "review") {
                            var suspend_data = JSON.stringify(k_Revel.get_StateData());
                            if (suspend_data != "" && suspend_data != "{}") {
                                this.SetBookmarkData(suspend_data);
                                isReview = true;
                            }
                        }
                    }
                }, 100);

            }
            else
            {
                _Navigator.Start();
            }
        },
        GotoBookmarkPage: function () {
           
            if (bookmarkpageid != undefined && bookmarkpageid != "") {
                _Navigator.LoadPage(bookmarkpageid)
            }
            else {
                _Navigator.Start();
            }
        },
        IsScorm: function () {
            if (packageType == "scorm")
                return true;

            return false;

        },
        IsRevel: function () {
            if (packageType == "revel")
                return true;
            return false;
        },
        GetPackageType: function () {
            return packageType;
        },
        GetQuizPageId:function(){
            return quizpageid;
        }
    };
})();



function setReader(idToStartReading) {
    $('#hiddenAnchor').attr("href", "#" + idToStartReading)
    $('#hiddenAnchor')[0].click()
}


function removeCSS(cssFileToRemove) {
	for(var w=0; w < document.styleSheets.length; w++ ){
		if(document.styleSheets[w].href.indexOf(cssFileToRemove) != -1 ) {
			document.styleSheets[w].disabled = true;
		}
	}
}
function addCSS(cssFileToAdd) {
	var isCSSAlreadyAdded = false;
	for(var w=0; w < document.styleSheets.length; w++ ){
		if(document.styleSheets[w].href.indexOf(cssFileToAdd) != -1 ) {
			isCSSAlreadyAdded = false;
		}
	}
	console.log(isCSSAlreadyAdded + " --")
	if(! isCSSAlreadyAdded){
		var newlink = document.createElement("link");
		newlink.setAttribute("rel", "stylesheet");
		newlink.setAttribute("type", "text/css");
		newlink.setAttribute("href", cssFileToAdd);
		document.getElementsByTagName("head").item(0).appendChild(newlink);
	}
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
