gRecordData = {
    Status: "NotStarted",
    AssessmentScore: "4",
    VisitedNumberOfPages: "0",
    LastVisitedPage: "", // UserSelectedOptionId will be used to jump to the unattempted question
    RecordTitle: "How Does Barbara Corcoran Pick Her Investments on Shark Tank?",
    LandingPageURL: "record2_landing.htm",
    QuestionSequence: "Numbers", // this can be used later if different display style is required
    OptionSequence: "LowerAlphabets", // this can be used later if different display style is required
    RandomizeQuestions: true,
    RandomizeOptions: true,
    Questions: [
                    {
                        QuestionId: "1",
                        QuestionText: "How would you reply to an email message you’ve received that has multiple recipients, all of whom you would like to see your reply?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Click Reply All",
                                         "IsCorrect": true,
                                         "score": 2

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Click Forward",
                                         "IsCorrect": false,
                                         
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Click Reply",
                                         "IsCorrect": false
                                     }

                        ],
                        CorrectFeedback: "That’s right.",
                        IncorrectFeedback: "​That’s not right. You would click Reply All.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "2",
                        QuestionText: "When you wish to send an email message to multiple parties, you enter their addresses in the To: line separated by which of the following?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Tabs",
                                         "IsCorrect": false,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Periods",
                                         "IsCorrect": false,
                                         

                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Commas",
                                         "IsCorrect": true,
                                         score: 2,
                                     }

                        ],
                        IncorrectFeedback: "That’s not right. You would separate each address with a comma.",
                        CorrectFeedback: "That’s right.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "3",
                        QuestionText: "Which of the following characteristics of an email message should cause suspicion?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Multiple recipients",
                                         "IsCorrect": false
                                        
                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "No Subject line",
                                         "IsCorrect": true,
                                         score: 2
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Unknown sender",
                                         "IsCorrect": false,
                                        
                                     }

                        ],
                        IncorrectFeedback: "​That’s not right. Among other things, an email message with no Subject line should cause suspicion.",
                        CorrectFeedback: "That’s right.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "4",
                        QuestionText: "Where would you enter the email address for a person whom you do not want the recipient to know you are including with the message?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Cc: line",
                                         "IsCorrect": false
                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Bcc: line",
                                         "IsCorrect": true,
                                         score: 2
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Signature line",
                                         "IsCorrect": false,
                                        
                                     }

                        ],
                        IncorrectFeedback: "​That’s not right. Bcc stands for blind carbon copy, which you’d use in this case.​",
                        CorrectFeedback: "That’s right.​",
                        "UserSelectedOptionId": ""

                    }

    ]
}