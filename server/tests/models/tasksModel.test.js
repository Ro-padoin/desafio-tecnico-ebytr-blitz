const { expect } = require('chai');
const sinon = require('sinon');
const tasksModel = require('../../src/models/tasksModel');
const connection = require('../../src/models/connection');

describe('ScheduleDatabase.tasks na Camada Models', () => {
  describe('Rota get', () => {
    describe('Quando não existir nenhuma task cadastrada', () => {
      before(() => {
          sinon.stub(connection, 'execute').resolves([[]]);
      })

      after(() => {
          connection.execute.restore();
      })

      it('Teste se retorna um array e se está vazio', async () => {
          const result = await tasksModel.getAllTasks();
          expect(result).to.be.an('array').that.is.empty;
      });
  });

  describe('Quando existir pelo menos uma task cadastrada', () => {
      before(() => {
          sinon.stub(connection, 'execute').resolves([[
              {
                  id: 1,
                  title: "Finalizar os testes de Backend",
                  description: "prazo 10 dias",
                  createdAt:  "2022-07-04 21:01:32",
                  updatedAt: "2022-07-04 21:01:32"
              }
          ]]);
      })

      after(() => {
          connection.execute.restore();
      })

      it('Teste se retorna um array', async () => {
          const result = await tasksModel.getAllTasks();
          expect(result).to.be.a('array').to.have.lengthOf(1);
      });

      it('Teste se o conteúdo do array é um objeto com as chaves id, name, quantity', async () => {
          const [result] = await await tasksModel.getAllTasks();
          expect(result).to.be.an('object').that.has.all.keys('id', 'title', 'description', 'createdAt', 'updatedAt');
      });
  });
  describe('Quando cadastrar uma task pelo id', () => {
    before(() => {
        sinon.stub(connection, "execute").resolves([[{
            id: 1,
            title: "Finalizar os testes de Backend",
            description: "prazo 10 dias",
            createdAt:  "2022-07-04 21:01:32",
            updatedAt: "2022-07-04 21:01:32"
        }]]);
    });

    after(() => {
        connection.execute.restore();
    })

      it('Teste se retorna o numero do id gerado', async () => {
          const [result] = await tasksModel.getTaskById(1);
          expect(result).to.be.an('object').that.has.all.keys('id', 'title', 'description', 'createdAt', 'updatedAt');
      });
  });
  })

  describe('Rota put', () => {
    describe('Quando atualizar uma task', () => {
      before(() => {
          sinon.stub(connection, "execute").resolves(true);
      });
    
      after(() => {
          connection.execute.restore();
      });
    
      it('Teste se retorna true', async () => {
          const result = await tasksModel.updateTask(1, {title: "estudar", description:"testes"});
          expect(result).to.be.true;
      });
    
    })

  })
  describe('Rota delete', () => {
    describe('Quando deletar uma task', () => {
      before(() => {
          sinon.stub(connection, "execute").resolves(true);
      });
    
      after(() => {
          connection.execute.restore();
      });
    
      it('Teste se retorna true', async () => {
          const result = await tasksModel.deleteTask(1);
          expect(result).to.be.true;
      });
    
    })

  })
})