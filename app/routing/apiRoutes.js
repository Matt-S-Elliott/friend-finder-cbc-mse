const path = require("path");
const friends = require("../data/friends");

module.exports = app => {
    app.get("/api/friends", (req, res) => {
        res.json(friends.surveyResultsArray);
    })

    app.post("/api/friends", (req, res) => {
        let newSurveyResult = new friends.SurveyResult(req.body);
        let mostCompatibleFriend = findBestFriend(newSurveyResult);
        friends.surveyResultsArray.push(newSurveyResult);
        res.json({
            message: "Survey results added!",
            compatibleFriend: mostCompatibleFriend
        })
    })
}


//This is probably much more complicated than it needs to be, but at least it works....
function findBestFriend(newSurveyResult) {
    let newScores = newSurveyResult.scores;
    let totalDifferenceArray = [];
    friends.surveyResultsArray.forEach(item => {
        let totalDifference = 0;
        item.scores.forEach((score, index) => {
            totalDifference += Math.abs(parseInt(score) - newScores[index]);
        })
        totalDifferenceArray.push(totalDifference);
    });
    let lowestNumber = 110;
    let lowestNumberIndex = 0;
    for (let i in totalDifferenceArray) {
        if (totalDifferenceArray[i] < lowestNumber) {
            lowestNumber = totalDifferenceArray[i];
            lowestNumberIndex = i;
        }
    }
    return friends.surveyResultsArray[lowestNumberIndex];
}