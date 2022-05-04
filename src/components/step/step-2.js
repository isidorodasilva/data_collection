import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../version-two";

function StepTwo() {
  const { a9, setA9 } = useContext(HeaderContext);
  
  return (
    <div className="multisteps-form__panel" data-animation="slideVert">
      <div className="inner pb-100">
        <div className="wizard-topper">
          <div className="wizard-progress">
            <span>2 de 3 Completo</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: "68%" }}></div>
            </div>
          </div>
        </div>

        <div className="wizard-content-item text-center">
          <h2>Participantes</h2>
        </div>

        <div className="wizard-option-list wizard-content-form">
          {Number(a9)<=6 ? <><h2 className="mb-4">
            Digite o número de participantes, por idade e sexo.
          </h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Mulheres</th>
                <th scope="col">Homens</th>
                <th scope="col">Gênero desconhecido</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">19 e mais jovens</th>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
              </tr>
              <tr>
                <th scope="row">20 e mais</th>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
              </tr>
              <tr>
                <th scope="row">A idade é desconhecida</th>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
              </tr>
              <tr>
                <th scope="row">Total</th>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
                <td>
                  <input type="text" defaultValue={0}></input>
                </td>
              </tr>
            </tbody>
          </table> </>: null}

          {Number(a9)<=3 ?<div className="wizard-option-list wizard-content-form">
            <div className="taxable-area">
              <h2 className="mb-4 mt-4">
                Insira cada participante como apenas um tipo
              </h2>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      className="tax-check"
                      value="Taxable in the US?"
                    />
                    <span className="checkbo-box-border"></span>
                    <span className="texable-option">
                      1. Agentes comunitários de saúde / voluntários
                    </span>
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
                    <span className="texable-option">15. Farmacêuticos</span>
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
                    <span className="texable-option">
                      2. Lideres comunitários
                    </span>
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
                    <span className="texable-option">
                      16. Provedor - Clínicos Gerais
                    </span>
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
                    <span className="texable-option">
                      3. Membros da comunidade/Público em geral
                    </span>
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
                    <span className="texable-option">
                      17. Provedores - Nível médio / Enfermeiros
                    </span>
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
                    <span className="texable-option">
                      4. Educadores/Professores/Formadores
                    </span>
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
                    <span className="texable-option">
                      18. Fornecedor - parteiras
                    </span>
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
                    <span className="texable-option">
                      5. Funcionários eleitos / funcionários do governo
                    </span>
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
                    <span className="texable-option">
                      19. Fornecedor - Especialistas
                    </span>
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
                    <span className="texable-option">
                      6. Pessoal não clínico da instituição de saúde
                    </span>
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
                    <span className="texable-option">
                      20. Líderes religosos
                    </span>
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
                    <span className="texable-option">7. Jornalistas</span>
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
                    <span className="texable-option">21. Pesquisadores</span>
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
                    <span className="texable-option">
                      8. Aplicação da lei / pessoal militar
                    </span>
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
                    <span className="texable-option">
                      22. Estudantes secundários
                    </span>
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
                    <span className="texable-option">
                      9. Advogados / Profissionais Jurídicos / Lobistas
                    </span>
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
                    <span className="texable-option">
                      23. Assistente social
                    </span>
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
                    <span className="texable-option">
                      10. Media / Relações Públicas
                    </span>
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
                    <span className="texable-option">
                      24. Equipe de logística de suprimentos
                    </span>
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
                    <span className="texable-option">
                      11. Estudantes / estagiários médicos / clínicos
                    </span>
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
                    <span className="texable-option">
                      25. Jovens líderes / defensores
                    </span>
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
                    <span className="texable-option">
                      12. Vendedores de medicamentos
                    </span>
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
                    <span className="texable-option">
                      26. Estudantes universitários
                    </span>
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
                    <span className="texable-option">
                      13. Pessoal de ONG / OCB (internacional, regional ou
                      local)
                    </span>
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
                    <span className="texable-option">
                      27. Outros, especificar
                    </span>
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
                    <span className="texable-option">
                      14. Educadores de pares
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>:null}
        </div>

        <div className="wizard-footer">
          <div className="actions">
            <ul>
              <li>
                <span className="js-btn-prev" title="BACK">
                  <i className="fa fa-arrow-left"></i> Voltar
                </span>
              </li>
              <li>
                {/* <span className="js-btn-prev" title="NEXT">
                    Salvar <i className="fas fa-save"></i>
                  </span> */}
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

export default StepTwo;
