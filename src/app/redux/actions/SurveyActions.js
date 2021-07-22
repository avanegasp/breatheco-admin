import bc from '../../services/breathecode';

export const GET_SURVEY_ANSWERS = 'GET_SURVEY_ANSWERS';
export const GET_SURVEY = 'GET_SURVEY';
export const LOADING = 'LOADING';
export const GET_ANSWERS_BY = 'GET_ANSWERS_BY';

export const getSurveyAnswers = (query) => (distpach) => {
    //Loading starts 
    distpach({
        type: LOADING
    });
    bc.feedback()
    .getAnswers(query)
    .then(res => {
        console.log(res.data)
        let overall_score = 0;
        let academy_score = {};
        let cohort_score = {};
        let answered = [];
        let mentors = {};
        let avg = 0;
        res.data.forEach(item => {
            //Only Answers
            if(item.score) answered.push(item);
            //Academy overall score
            if(item.academy && item.score){
               if(!academy_score.score && !academy_score.divider){ 
                    academy_score.score = 0;
                    academy_score.divider = 0;
               }
               academy_score.score += parseInt(item.score);
               academy_score.divider ++;
            }
            //Cohort overall score
            if(item.cohort && item.score){
                if(!cohort_score.score && !cohort_score.divider){ 
                    cohort_score.score = 0;
                    cohort_score.divider = 0;
                }
                cohort_score.score += parseInt(item.score);
                cohort_score.divider ++;
             }
            //Passing mentor name and score to mentors object
            if(item.mentor && item.score){
                let mentor = `${item.mentor.first_name} ${item.mentor.last_name}`;
                if(!mentors[mentor]) mentors[mentor] = {};
                if(!mentors[mentor].answered) mentors[mentor].answered = 0;
                if(!mentors[mentor].score) mentors[mentor].score = 0;
                mentors[mentor].score += parseInt(item.score);
                mentors[mentor].answered ++;
            }
        });
        let mentorsArray = Object.keys(mentors).map(item =>{ 
            avg += Math.round(mentors[item].score / mentors[item].answered);
            return { name: item, score: Math.round(mentors[item].score / mentors[item].answered) }
        });
        //Setting the sum of all scores
        overall_score = Math.round(cohort_score.score/cohort_score.divider) + Math.round(academy_score.score/academy_score.divider) + avg
        distpach({
        type: GET_SURVEY_ANSWERS,
        payload: {
            answers: res.data,
            avg_cohort_score: Math.round(cohort_score.score/cohort_score.divider),
            avg_academy_score: Math.round(academy_score.score/academy_score.divider),
            mentors: mentorsArray,
            answered: answered,
            overall_score: Math.round((Math.round(overall_score))/ (mentorsArray.length + 2)),
            is_loading:false,
        }
    })
});
};

export const getSurvey = (id) => (distpach) => {
    bc.feedback().getSurvey(id).then(res => {
        if(res.data) distpach({
            type: GET_SURVEY,
            payload: {
                survey: res.data,
            }
        });
    });
} 

export const getAnswersBy = (query) => (distpach) => {
    distpach({
        type: GET_ANSWERS_BY,
        payload: {
            query
        }
    })
}