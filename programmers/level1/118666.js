function solution(survey, choices) {
    let surveyResult = new Map();
    const typeArray = ['RT', 'CF', 'JM', 'AN'];
    survey.map((question, index) => {
        const leftPosition = question.charAt(0);
        const rightPosition = question.charAt(1);
        if(choices[index] <= 4) {
            surveyResult.set(leftPosition,
                surveyResult.has(leftPosition) ? parseInt(surveyResult.get(leftPosition)) + (4 - choices[index]) : (4 - choices[index])
                );
        } else {
            surveyResult.set(rightPosition,
                surveyResult.has(rightPosition) ?  parseInt(surveyResult.get(rightPosition)) + choices[index] - 4 : choices[index] - 4
                );
        }
    });

    return typeArray.reduce((type, types) => {
        const leftPosition = types.charAt(0);
        const rightPosition = types.charAt(1);

        const leftPoint = surveyResult.has(leftPosition) ? surveyResult.get(leftPosition) : 0;
        const rightPoint = surveyResult.has(rightPosition) ?  surveyResult.get(rightPosition) : 0;

        type += leftPoint >= rightPoint ? leftPosition : rightPosition;
        return type;
    },'');
}