
import React from 'react';
import Step1 from './step/step-1';
import Step2 from './step/step-2';
import Step3 from './step/step-3';
// import Step4 from './step/step-4';
// import Step5 from './step/step-5';

class VersionTwo extends React.Component {
    render() {
        return (
            <div className="wrapper clearfix">
                <div className="wizard-part-title">
                    <h3>Actividade Geral</h3>
                </div>
                <div className="multisteps-form">
                    <div className="row">
                        <div className="col-12 col-lg-12 ml-auto mr-auto mb-5 mt-5">
                            <div className="multisteps-form__progress">
                                <button className="multisteps-form__progress-btn js-active">Informação Geral</button>
                                <button className="multisteps-form__progress-btn">Participantes</button>
                                <button className="multisteps-form__progress-btn">Indentity card</button>
                                {/* <button className="multisteps-form__progress-btn">Investability </button>
                                <button className="multisteps-form__progress-btn">Review </button> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-12 m-auto">
                            <form className="multisteps-form__form clearfix" action="#" method="post" id="wizard">
                                <Step1 />
                                <Step2 />
                                <Step3 />
                                {/* <Step4 />
                                <Step5 /> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default VersionTwo;

