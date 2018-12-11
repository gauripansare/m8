ColorCodes = {
    black: "#00000",
    white: "#FFFFFF",
    red: "#B22222",
    green: "#01662C",
    blue: "#4E7092",
}

var _Settings = {
    dataRoot: "pagedata/",
    assetsRoot: "assets/",
    enableCache: true,
    topMargin: 144,
    minHeight: 437
}


var _PData = {

    "p2": {
        ImageHotSpots: {
            "Hotspots": [
                {
                    HotspotId: 1,
                    "width": "7.2864321608040195%",
                    "height": "10.887772194304858%",
                    "top": "0.16750418760469013%",
                    "left": "0.18844221105527637%",
                  
                    accessText: "Recycle bin",
                    eventname:"noclick"
                    
                },
                {
                    HotspotId: 2,
                    "width": "7.035175879396985%",
                    "height": "13.735343383584588%",
                    "top": "12.060301507537687%",
                    "left": "0.06281407035175879%",
                   
                    accessText: "Google chrome",
                    eventname: "noclick"
                   
                },
                {
                    HotspotId: 3,
                    width: "7.1608%",
                    height: "12.3953%",
                    left: "0.0628141%",
                    top: "26.4657%",
                  
                    eventname: "dblclick",
                    accessText: "Outlook",
                    action: "feedback",
                    feedbackurl: "feedbackp2.htm",
                    isCorrect: true
                },
                {
                    HotspotId: 4,
                    "width": "4.396984924623116%",
                    "height": "4.6%",
                    "top": "94.13735343383584%",
                    "left": "0.3%",
                   
                    accessText: "Start Menu",
                     eventname: "",
                    action: "customNext"
                   
                }
            ]
        }
    },
    "p17": {
        ImageHotSpots: {
            "Hotspots": [
                {
                    HotspotId: 1,
                    "width": "9.8%",
                    "height": "13%",
                    "top": "26%",
                    "left": "26%",                   
                     accessText:"Outlook",
                     action: "feedback",
                    feedbackurl: "feedbackp2.htm",
                }
            ]
        },

    },   
    "p4": {
        ImageHotSpots: {
            "Hotspots": [
                {
                    HotspotId: 1,
                    width: "11.4322%",
                    height: "3.18258%",
                    left: "28.4548%",
                    top: "69.3%",
                    action: "feedback",
                    feedbackurl : "feedbackp4.htm",
                    accessText:"Netiquette Project link"
                }
            ]
        }
    },
    "p5": {
        ImageHotSpots: {
            "Hotspots": [
                {
                    HotspotId: 1,
                    width: "4.9%",
                    height: "10%",
                    left: "0.8%",
                    top: "21.273%",                   
                    action: "inputcheck",
                    accessText: "send button"
                    
                }
            ]
        },
        correctfeedbackurl: "feedbackp5.htm",
        incorrectfeedbackurl:"feedbackicp5.htm",
        EmbedSettings: [{
            answerset: "pedersona@weaver.com",
            inputid: "input-to-addr",
            reviewid:"review-to",
            score: ""
        },
        {
            answerset: "jordanc@western.com",
            inputid: "input-cc-addr",
            reviewid:"review-cc",
            score: ""
        }]
    },
    "p6": {
        ImageHotSpots: {
            "Hotspots": [
                {
                  HotspotId: 1,
                  width: "3.9%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "11.49497487437186%",
                
                  action:"feedback",
                  feedbackurl:"feedbackicp6.htm",
                  accessText: "reply link",
                  eventname:"",
                  isCorrect:false,
                },
                {
                  "HotspotId": 2,
                  width: "3.6432160804020097%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "15.766331658291458%",
                 
                  action:"feedback",
                  feedbackurl:"feedbackp6.htm",
                  accessText: "reply all link",
                  eventname:"",
                  isCorrect:true,
                },
                {
                  HotspotId: 3,
                  width: "4.7%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "19.786432160804022%",
                  
                  action:"feedback",
                  feedbackurl:"feedbackicp6.htm",
                  accessText: "forward link",
                  eventname:"",
                  isCorrect:false
                }
              ]
        }
    },
    "p7": {
        ImageHotSpots: {
            "Hotspots": [
                {
                  HotspotId: 1,
                  width: "3.9%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "11.49497487437186%",
                 
                  action:"feedback",
                  feedbackurl:"feedbackicp7.htm",
                  accessText: "reply link", 
                  eventname:"",
                  isCorrect:false,
                },
                {
                  HotspotId: 2,
                  width: "3.6432160804020097%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "15.766331658291458%",
                 
                  action:"feedback",
                  feedbackurl:"feedbackicp7.htm",
                  accessText: "reply all link", 
                  eventname:"",
                  isCorrect:false,
                },
                {
                  HotspotId: 3,
                  width: "4.7%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "19.786432160804022%",
                
                  action:"feedback",
                  feedbackurl:"feedbackp7.htm",
                  accessText: "forward link", 
                  eventname:"",
                  isCorrect:true,
                }
              ]
        }
    },
    "p8": {
        ImageHotSpots: {
            "Hotspots": [
                {
                    HotspotId: 1,
                    width: "4.8995%",
                    height: "10.0503%",
                    left: "0.8%",
                    top: "21.4%",
                    opacity: "1",
                   
                    action: "inputcheck",
                    accessText: "send button"
                }
            ]
        },
        correctfeedbackurl: "feedbackp8.htm",
        incorrectfeedbackurl:"feedbackicp8.htm",
        EmbedSettings: [{
            answerset: "jordanc@western.com",
            inputid: "input-bcc-addr",
            reviewid:"review-bcc",
            score: ""
        },
        {
            answerset: "",
            inputid: "input-cc-addr",
            reviewid:"review-cc",
            score: ""
        }]
    },
    "p9": {
        ImageHotSpots: {
            "Hotspots": [
                {
                  HotspotId: 1,
                  width: "4.8995%",
                  height: "10.0503%",
                  left: "0.8%",
                  top: "21.4%",
                 
                  action:"inputcheck",
                  accessText: "send button"
                }
              ]
        },
        correctfeedbackurl: "feedbackp9.htm",
        incorrectfeedbackurl:"feedbackicp9.htm",
        EmbedSettings: [{
            answerset: "",
            inputid: "input-to-addr",
          //  reviewid:"review-to",
            score: ""
        },
        {
            answerset: "",
            inputid: "input-cc-addr",
           // reviewid:"review-cc",
            score: ""
        },
       {
        answerset: "Al_Blackwell@sedonia.net, connollyl@stenberg.com, elijha.buckingham@forester.com",
        inputid: "input-bcc-addr",
        reviewid:"review-bcc1",
        score: ""

       }
    
    
       ]
      
    },
    "p10": {
        ImageHotSpots: {
            "Hotspots": [
                {
                  HotspotId: 1,
                  width: "3.9%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "11.49497487437186%",
                  
                  action:"feedback",
                  feedbackurl:"feedbackp10.htm",
                  accessText: "reply link",
                  eventname:"",
                  isCorrect:true,
                },
                {
                  HotspotId: 2,
                  width: "3.6432160804020097%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "15.766331658291458%",
                 
                  action:"feedback",
                  feedbackurl:"feedbackicp10.htm",
                  accessText: "reply all link",
                  eventname:"",
                  isCorrect:false,
                },
                {
                  HotspotId: 3,
                  width: "4.7%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "19.786432160804022%",
                 
                  action:"feedback",
                  feedbackurl:"feedbackicp10.htm",
                  accessText: "forward link",
                  eventname:"",
                  isCorrect:false,
                }
              ]
        }
    },

    "p11": {
        ImageHotSpots: {
    
            "Hotspots": [
                {
                  HotspotId: 1,
                  width: "3.9%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "11.49497487437186%",
                 
                  action:"feedback",
                  feedbackurl:"feedbackicp11.htm",
                  accessText: "reply link",
                  eventname:"",
                  isCorrect: false,
                },
                {
                  HotspotId: 2,
                  width: "3.6432160804020097%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "15.766331658291458%",
                 
                  action:"feedback",
                  feedbackurl:"feedbackicp11.htm",
                  accessText: "reply all link",
                  eventname:"",
                  isCorrect:false,
                },
                {
                  HotspotId: 3,
                  width: "4.7%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "19.786432160804022%",
                 
                  action:"feedback",
                  feedbackurl:"feedbackicp11.htm",
                  accessText: "forward link",
                  eventname:"",
                  isCorrect:false,
                },
                {
                  HotspotId: 4,
                  width: "30.65326633165829%",
                  height: "4.1876046901172534%",
                  top: "24%",
                  left: "6.469849246231156%",
                 
                  action:"feedback",
                  feedbackurl:"feedbackp11.htm",
                  accessText: "Subject Line: THANK YOU ",
                  eventname:"",
                  isCorrect:true,
                }
              ]
          }
    },
    "p12": {
        ImageHotSpots: {
            "Hotspots": [
                {
                  HotspotId: 1,
                  width: "3.9%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "11.49497487437186%",
                
                  action:"feedback",
                  feedbackurl:"feedbackicp12.htm",
                  accessText: "reply link",
                  eventname:"",
                  isCorrect:false,
                },
                {
                  HotspotId: 2,
                  width: "3.6432160804020097%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "15.766331658291458%",
                 
                  action:"feedback",
                  feedbackurl:"feedbackicp12.htm",
                  accessText: "reply all link",
                  eventname:"",
                  isCorrect:false,
                },
                {
                  HotspotId: 3,
                  width: "4.7%",
                  height: "9.5%",
                  top: "7.537688442211055%",
                  left: "19.786432160804022%",
                  
                  action:"feedback",
                  feedbackurl:"feedbackicp12.htm",
                  accessText: "forward link",
                  eventname:"",
                  isCorrect:false,
                },
                {
                  HotspotId: 4,
                  width: "11.306532663316583%",
                  height: "4.1876046901172534%",
                  top: "24.120603015075375%",
                  left: "6.595477386934673%",
                 
                  action:"feedback",
                  feedbackurl:"feedbackp12.htm",
                  accessText: "Subject Line: NEXT FRIDAY!! ",
                  eventname:"",
                  isCorrect:true,
                }
              ]
        }
    },
    "p13": {
        ImageHotSpots: {
            "Hotspots": [
                {
                  HotspotId: 1,
                  width: "4.0201005025125625%",
                  height: "8.040201005025125%",
                  top: "7.537688442211055%",
                  left: "11.243718592964825%",
                  
                  action:"next",
                  accessText: "reply link",
                  eventname:"",
                  isCorrect:true
                },
                {
                  HotspotId: 2,
                  width: "2.8894472361809047%",
                  height: "4%",
                  top: "0.3%",
                  left: "96.0427135678392%",
                  
                  action:"customNext",
                  accessText: "RE: Scheduled Delivery message window close",
                  eventname:"",
                  isCorrect:true
                }
              ]
        }
    },
    "p14": {
        ImageHotSpots: {
            "Hotspots": [
                {
                  HotspotId: 1,
                  width: "4.0201005025125625%",
                  height: "9.212730318257957%",
                  top: "8.207705192629817%",
                  left: "0.18844221105527637%",
                 
                  action:"feedback",
                  feedbackurl:"feedbackp13.htm",
                  accessText: "New Email link"
                }
              ]
        }
    },
    "p15": {
        ImageHotSpots: {
            "Hotspots": [
                {
                  HotspotId: 1,
                  width: "4.899497487437186%",
                  height: "9.8%",
                  top: "21.5%",
                  left: "0.7%",
                  
                  action: "inputcheck",
                  accessText: "send button"
                }
              ]
        },
        correctfeedbackurl: "feedbackp14.htm",
        incorrectfeedbackurl:"feedbackicp14.htm",
        EmbedSettings: [{
            answerset: "Latest Product Line",
            inputid: "input-subj",
            reviewid:"review-subj",
            score: ""
        }]
    },
    "p16": {
        ImageHotSpots: {
            "Hotspots": [
                {
                  HotspotId: 1,
                  width: "7.537688442211055%",
                  height: "4.1876046901172534%",
                  top: "24.120603015075375%",
                  left: "6.469849246231156%",
                  
                  eventname:"",
                  accessText: "shipment - message",
                //   action:"feedback",
                //   feedbackurl:"feedbackp16_1.htm",
                    isCorrect:true
                },
                {
                  HotspotId: 2,
                  width: "10.552763819095476%",
                  height: "4.355108877721943%",
                  top: "32.1608040201005%",
                  left: "1.4447236180904524%",
                 
                  eventname:"",
                  accessText: "shipment - message",
                //   action:"feedback",
                //   feedbackurl:"feedbackp16_2.htm",
                   isCorrect:true
                },
                {
                  HotspotId: 3,
                  width: "1.6331658291457287%",
                  height: "3.5%",
                  top: "37.51825795644891%",
                  left: "18%",
                 
                  eventname:"",
                  accessText: "shipment - message",
                //   action:"feedback",
                //   feedbackurl:"feedbackp16_3.htm",
                   isCorrect:true,
                },
                {
                  HotspotId: 4,
                  width: "1.6331658291457287%",
                  height: "3.5%",
                  top: "37.35075376884423%",
                  left: "24%",
                
                  eventname:"",
                  accessText: "shipment - message",
                //   action:"feedback",
                //   feedbackurl:"feedbackp16_4.htm",
                   isCorrect:true,
                },
                {
                  HotspotId: 5,
                  width: "4.396984924623116%",
                  height: "3.5175879396984926%",
                  top: "37.52093802345058%",
                  left: "43.2%",
                 
                  eventname:"",
                  accessText: "shipment - message",
                //   action:"feedback",
                //   feedbackurl:"feedbackp16_5.htm",
                  isCorrect:true,
                },
                {
                  HotspotId: 6,
                  width: "3.2663316582914574%",
                  height: "3.5%",
                  top: "40.20100502512563%",
                  left: "9%",
                 
                  eventname:"",
                  accessText: "shipment - message",
                //   action:"feedback",
                //   feedbackurl:"feedbackp16_6.htm",
                   isCorrect:true,
                },
                {
                  HotspotId: 7,
                  width: "4.1457286432160805%",
                  height: "4.1876046901172534%",
                  top: "44.388609715242886%",
                  left: "1.5703517587939697%",
                  
                  eventname:"",
                  accessText: "shipment - message",
                //   action:"feedback",
                //   feedbackurl:"feedbackp16_1.htm",
                   isCorrect:true,
                }
              ]
        },
        hotspotclickcount : 0,
        correctfeedbackurl:"feedbackp16.htm",
    },

}

