function SurveyResult (surveyEntry) {
    this.name = surveyEntry.name;
    this.photo = surveyEntry.photo;

    if (typeof(surveyEntry.scores) === "string") {
        surveyEntry.scores = surveyEntry.scores.substring(1,surveyEntry.scores.length - 1);
        surveyEntry.scores = surveyEntry.scores.split(",");
        }
    this.scores = surveyEntry.scores;
}

dummyEntry = {
    name: "Matt",
    photo: "https://media.licdn.com/dms/image/C5603AQGotw1nQrNEMA/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=eo1Ih9chGY_hRsyUu4mATGm4j76QZck7YETRyAW5F1s",
    scores: "[4,1,1,3,5,4,3,3,1,3]"
}

surveyResultsArray = [new SurveyResult(dummyEntry)];

module.exports = {
    surveyResultsArray: surveyResultsArray,
    SurveyResult: SurveyResult
}

  