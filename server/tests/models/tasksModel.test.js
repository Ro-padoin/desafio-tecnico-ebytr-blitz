const { expect } = require('chai');
const sinon = require('sinon');
const tasksModel = require('../../src/models/tasksModel');
const connection = require('../../src/models/connection');

describe('Buscar pelas tasks no BD ScheduleDatabase na Camada Models', () => {
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

  describe('Quando existir pelo menos ums task cadastrada', () => {
      before(() => {
          sinon.stub(connection, 'execute').resolves([[
              {
                  id: 1,
                  title: "Finalizar os testes de Backend",
                  description: "prazo 10 dias",
                  createdAt: "", 
              }
          ]]);
      })

      after(() => {
          connection.execute.restore();
      })

      it('Teste se retorna um array', async () => {
          const result = await productsModel.getAllProducts();
          expect(result).to.be.a('array').to.have.lengthOf(1);
      });

      it('Teste se o conteúdo do array é um objeto com as chaves id, name, quantity', async () => {
          const [result] = await productsModel.getAllProducts();
          expect(result).to.be.an('object').that.has.all.keys('id', 'name', 'quantity');
      });
  });
  })
})