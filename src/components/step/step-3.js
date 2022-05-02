import React from "react";

class StepThree extends React.Component {
  render() {
    return (
      <div className="multisteps-form__panel" data-animation="slideVert">
        <div className="inner pb-100">
          <div className="wizard-topper">
            <div className="wizard-progress">
              <span>3 de 3 Completo</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>
          <div className="wizard-content-item text-center">
            <h2>Partners</h2>
          </div>

          <div className="wizard-option-list wizard-content-form">
            <h2 className="mb-4">
              Formador/ Facilitador
            </h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Nome</th>
                  <th scope="col">Email</th>
                  <th scope="col">Nr. De telefone</th>
                  <th scope="col">Gênero</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="wizard-option-list wizard-content-form">
            <h2 className="mb-4">
              Organizações parceiras
            </h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Nome da organização</th>
                  <th scope="col">Tipo de organização</th>
                  <th scope="col">País</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Tipo de paarticipação (I/S/P)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="wizard-footer">
            <div className="wizard-imgbg">
              {/* <img src={require('../../assets/img/v3.png')} alt="" /> */}
            </div>
            <div className="actions">
              <ul>
                <li>
                  <span className="js-btn-prev" title="BACK">
                    <i className="fa fa-arrow-left"></i> BACK
                  </span>
                </li>
                <li>
                  <span className="js-btn-next" title="NEXT">
                    NEXT <i className="fa fa-arrow-right"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StepThree;
