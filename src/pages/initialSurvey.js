import getUID from '../util/uidFetcher';

const InitialSurvey = () => {
    const uid = getUID();
    console.log(uid);
    return (
        <div>
            <div className="footer">
                <div className="initialsurveyTitle">Initial Survey</div>
            </div>
            <div className="initialsurveybody">
                {/* question here */}
                <div className="questionInitialSurvey">Question</div>
            </div>

        </div>
      );
}

export default InitialSurvey;