import React from "react";

class StepOne extends React.Component {
  render() {
    return (
      <div
        className="multisteps-form__panel js-active"
        data-animation="slideVert"
      >
        <div className="inner pb-100">
          <div className="wizard-topper">
            <div className="wizard-progress">
              <span>1 de 3 Completo</span>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="wizard-content-item text-center">
            <h2>Informação Geral</h2>
            <p>(*) Indica campos obrigatórios</p>
          </div>

          <div className="wizard-content-form">
            <div className="wizard-form-field">
              <div className="wizard-form-input position-relative form-group has-float-label">
                <input
                  type="text"
                  name="titulo_actividade"
                  className="form-control"
                  placeholder="Título da actividade *"
                />
                <label>Título da actividade *</label>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="label">Escritório responsável do Ipas *</label>
                </div>
                <div className="col-md-6">
                  <div className="wizard-form-input position-relative form-group has-float-label mt-0 n-select-option">
                    <select
                      id="country"
                      name="country"
                      className="form-control"
                    >
                      <option value="">Mozambique</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>País onde actividade é realizada *</label>
                </div>
                <div className="col-md-6">
                  <div className="wizard-form-input position-relative form-group has-float-label mt-0 n-select-option">
                    <select
                      id="country"
                      name="country"
                      className="form-control"
                    >
                      <option value="">Mozambique</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Região A (Estado/Província) *</label>
                </div>
                <div className="col-md-6">
                  <div className="wizard-form-input position-relative form-group has-float-label mt-0 n-select-option">
                    <select
                      id="country"
                      name="country"
                      className="form-control"
                    >
                      <option value="">Zambezia</option>
                      <option value="">Nampula</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Região B (Distrito)</label>
                </div>
                <div className="col-md-6">
                  <div className="wizard-form-input position-relative form-group has-float-label mt-0 n-select-option">
                    <select
                      id="country"
                      name="country"
                      className="form-control"
                    >
                      <option value="">Alto Molocue District</option>
                      <option value="">Angoche</option>
                      <option value="">Chinde District</option>
                      <option value="">Derre</option>
                      <option value="">Erati</option>
                      <option value="">Gurué District</option>
                      <option value="">Ile District</option>
                      <option value="">Ilha de Mozambique</option>
                      <option value="">Lalaua</option>
                      <option value="">Liupo</option>
                      <option value="">Lugela District</option>
                      <option value="">Maganja da Costa District</option>
                      <option value="">Malema</option>
                      <option value="">Meconta</option>
                      <option value="">Mecuburi</option>
                      <option value="">Memba</option>
                      <option value="">Milange District</option>
                      <option value="">Mocuba District</option>
                      <option value="">Modevala</option>
                      <option value="">Mogovolas</option>
                      <option value="">Molumbo District</option>
                      <option value="">Moma</option>
                      <option value="">Monapo</option>
                      <option value="">Mopeia District</option>
                      <option value="">Morrumbala District</option>
                      <option value="">Muecate</option>
                      <option value="">Murrupula</option>
                      <option value="">Nacala Porto</option>
                      <option value="">Nacala-a-Velha</option>
                      <option value="">Nacaroa</option>
                      <option value="">Namacurra District</option>
                      <option value="">Namarroi District</option>
                      <option value="">Nampula</option>
                      <option value="">Nicoadala District</option>
                      <option value="">Pebane District</option>
                      <option value="">Quelimane</option>
                      <option value="">Rapale</option>
                      <option value="">Ribaue</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Prêmio *</label>
                </div>
                <div className="col-md-6">
                  <div className="wizard-form-input position-relative form-group has-float-label mt-0 n-select-option">
                    <select
                      id="country"
                      name="country"
                      className="form-control"
                    >
                      <option value="Bergstrom SRH in Mozambique 1/1/19 to 3/31/22">
                        Bergstrom SRH in Mozambique 1/1/19 to 3/31/22
                      </option>
                      <option value="Sida Mozambique - Expanding Women's and Girls Access to Comprehensive Abortion and Contraceptive Care">
                        Sida Mozambique - Expanding Women's and Girls Access to
                        Comprehensive Abortion and Contraceptive Care
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Local da actividade</label>
                </div>
                <div className="col-md-6">
                  <div className="wizard-form-input position-relative form-group has-float-label mt-0 n-select-option">
                    <select
                      id="country"
                      name="country"
                      className="form-control"
                    >
                      <option value="">Centro de Saúde de Chinde sede</option>
                      <option value="">Centro de Saúde de Molumbu sede</option>
                      <option value="">Centro de Saúde de Mueria</option>
                      <option value="">Centro de Saúde Mocubela</option>
                      <option value="">Centro de Namocomua</option>
                      <option value="">Centro de saude Arijuane</option>
                      <option value="">Centro de saude de Jorge</option>
                      <option value="">
                        Centro de Saúde Urbano-Sede de Milange
                      </option>
                      <option value="">Centro de Saúde 17 de Setembro</option>
                      <option value="">Centro de Saúde 24 de Julho</option>
                      <option value="">Centro de Saúde 25 de Setembro</option>
                      <option value="">Centro de Saude Barragem</option>
                      <option value="">Centro de Saude Chipene</option>
                      <option value="">
                        Centro de Saúde da Ilha de Mozambique
                      </option>
                      <option value="">Centro de saude de Matilde</option>
                      <option value="">Centro de Saúde de Memba</option>
                      <option value="">Centro de Saude de Ampapa</option>
                      <option value="">Centro de Saúde de Coalane</option>
                      <option value="">Centro de Saúde de Derre- Sede</option>
                      <option value="">Centro de Saúde de Ile</option>
                      <option value="">Centro de Saúde de Lalaua</option>
                      <option value="">Centro de Saúde de Liupo</option>
                      <option value="">Centro de Saúde de Lugela</option>
                      <option value="">Centro de Saude de Lumbo</option>
                      <option value="">Centro de saude de Machindo</option>
                      <option value="">Centro de Saude de Macicate</option>
                      <option value="">Centro de saude de Madal</option>
                      <option value="">Centro de Saúde de Malema</option>
                      <option value="">Centro de Saude de Malite</option>
                      <option value="">Centro de saude de Maneia</option>
                      <option value="">Centro de Saude de Meconta</option>
                      <option value="">Centro de Saúde de Monapo</option>
                      <option value="">Centro de Saude de Muecate</option>
                      <option value="">Centro de Saude de Murrupula</option>
                      <option value="">Centro de Saude de Nacacane</option>
                      <option value="">Centro de Saude de Nahipa</option>
                      <option value="">Centro de saude de Naico</option>
                      <option value="">Centro de Saúde de Namacurra</option>
                      <option value="">Centro de saude de Namgoma</option>
                      <option value="">Centro de Saude de Quinga</option>
                      <option value="">Centro de Saúde de Rapale</option>
                      <option value="">Centro de Saude de Sangane</option>
                      <option value="">Centro de Saude Ger-Ger</option>
                      <option value="">Centro de saude Guerrissa</option>
                      <option value="">Centro de Saude Jajo</option>
                      <option value="">Centro de Saúde Mecuburi</option>
                      <option value="">Centro de saude Micaune</option>
                      <option value="">Centro de Saúde Mocuba- Sede</option>
                      <option value="">Centro de Saude Mualua</option>
                      <option value="">Centro de saúde Muhala-expansão</option>
                      <option value="">
                        Centro de Saúde Nacala-a-Velha sede
                      </option>
                      <option value="">Centro de Saude Nacaroa</option>
                      <option value="">Centro de Saude Namahaca</option>
                      <option value="">Centro de Saude Namalala</option>
                      <option value="">Centro de Saúde Namarroi Sede</option>
                      <option value="">Centro de Saude Namialo</option>
                      <option value="">Centro de Saude Namitil</option>
                      <option value="">Centro de Saude Popue</option>
                      <option value="">Centro de Saude Tebo</option>
                      <option value="">Centro de Saúde Urbano</option>
                      <option value="">Hospital Central de Nampula</option>
                      <option value="">Hospital Central de Quelimane</option>
                      <option value="">
                        Hospital Distrital de Maganja da Costa
                      </option>
                      <option value="">Hospital Distrital de memba</option>
                      <option value="">Hospital Distrital de Milange</option>
                      <option value="">Hospital Distrital de Molevala</option>
                      <option value="">Hospital Distrital de Moma</option>
                      <option value="">Hospital Distrital de Monapo</option>
                      <option value="">Hospital Distrital de Mopeia</option>
                      <option value="">Hospital Distrital de Morrumbala</option>
                      <option value="">
                        Hospital Distrital de Nacala Porto
                      </option>
                      <option value="">Hospital Distrital de Namapa</option>
                      <option value="">Hospital Distrital de Nicoadala</option>
                      <option value="">Hospital Distrital de Pebane</option>
                      <option value="">Hospital Geral de Quelimane</option>
                      <option value="">Hospital Rural de Alto Molocuev</option>
                      <option value="">Hospital Rural de Angoche</option>
                      <option value="">Hospital Rural de Gurue</option>
                      <option value="">Hospital Rural de Mocuba</option>
                      <option value="">Hospital Rural de Ribaué</option>
                      <option value="">
                        Instituto de Ciências de Saude de Nampula
                      </option>
                      <option value="">
                        Instituto de Ciências de Saúde de Quelimane
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="badge-selection">
              <label className="titulo">Tipo de actividade</label>
              <label className="col-md-12">
                <input type="radio" defaultChecked name="tipo_actividade" />
                <span className="checkmark">
                  Workshop / Treinamento / Orientação
                </span>
              </label>
              <label className="col-md-12">
                <input type="radio" name="tipo_actividade" />
                <span className="checkmark">Reunião / Colaboração</span>
              </label>
              <label className="col-md-12">
                <input type="radio" name="tipo_actividade" />
                <span className="checkmark">
                  Visita de estudo / Visita de intercâmbio
                </span>
              </label>
              <label className="col-md-12">
                <input type="radio" name="tipo_actividade" />
                <span className="checkmark">Divulgação comunitária</span>
              </label>
              <label className="col-md-12">
                <input type="radio" name="tipo_actividade" />
                <span className="checkmark">Pesquisa / Avaliação formal</span>
              </label>
              <label className="col-md-12">
                <input type="radio" name="tipo_actividade" />
                <span className="checkmark">
                  Evento público / Marcha / Comício
                </span>
              </label>
              <label className="col-md-12">
                <input type="radio" name="tipo_actividade" />
                <span className="checkmark">Mass media</span>
              </label>
              <label className="col-md-12">
                <input type="radio" name="tipo_actividade" />
                <span className="checkmark">Outro, especificar</span>
              </label>
            </div>
            <div className="wizard-form-field">
              <div className="wizard-form-input position-relative form-group has-float-label">
                <input
                  type="text"
                  name="titulo_actividade"
                  className="form-control"
                  placeholder="Número total de participantes *"
                />
                <label>Número total de participantes *</label>
              </div>
              <div className="wizard-form-input position-relative form-group has-float-label">
                <input
                  type="text"
                  name="titulo_actividade"
                  className="form-control"
                  placeholder="Número total de pessoas alcançadas *"
                />
                <label>Número total de pessoas alcançadas *</label>
              </div>
              <div className="row">
                <div className="col-md-1">Data de ínicio*</div>
                <div className="step-content-field col-md-5">
                  <div className="date-picker date datepicker">
                    <input type="text" name="date" className="form-control" autoComplete="off"/>
                    <div className="input-group-append">
                      <span>ADD TIME</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-1">Data de término*</div>
                <div className="step-content-field col-md-5">
                  <div className="date-picker date datepicker">
                    <input type="text" name="date" className="form-control" autoComplete="off"/>
                    <div className="input-group-append">
                      <span>ADD TIME</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wizard-form-input position-relative form-group has-float-label">
                <input
                  type="text"
                  name="titulo_actividade"
                  className="form-control"
                  placeholder="Objectivos da actividade *"
                />
                <label>Objectivos da actividade *</label>
              </div>
            </div>
          </div>
          
          <div className="badge-selection">
            <label>
              Algum objectivo da atividade é mudar conhecimentos ou atitudes?
            </label>
            <label className="col-md-12">
              <input type="radio" defaultChecked name="tipo_actividade" />
              <span className="checkmark">Sim</span>
            </label>
            <label className="col-md-12">
              <input type="radio" name="tipo_actividade" />
              <span className="checkmark">Não</span>
            </label>
          </div>
          
          <div className="badge-selection">
            <label>
              Algum objectivo da atividade é mudar conhecimentos ou atitudes?
            </label>
          </div>
          
          <div className="wizard-option-list wizard-content-form">
            <div className="taxable-area">
              <div className="row my-3">
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Aborto (geral)</span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Aborto (aborto médico)</span>
                  </label>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Educação sexual abrangente</span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Contracepção</span>
                  </label>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Questões legais / políticas e reforma</span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Melhoria da qualidade nos serviços de saúde</span>
                  </label>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Violência sexual baseada no gênero</span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Saúde e direitos sexuais e reprodutivos (SRHR)</span>
                  </label>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Padrões e diretrizes para o CAC / PAC</span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Redução de estigma</span>
                  </label>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Formação de formadores (TOT)</span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Clarificação de valores e transformação de atitudes (VCAT)</span>
                  </label>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Temas da juventude</span>
                  </label>
                </div>
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">Outro, especificar</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="wizard-footer">
            {/* <div className="wizard-imgbg">
              <img src={require("../../assets/img/v3.png")} alt="" />
            </div> */}
            <div className="actions">
              <ul>
                <li>
                  <span className="js-btn-next" title="NEXT">
                    Próximo <i className="fa fa-arrow-right"></i>
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

export default StepOne;
