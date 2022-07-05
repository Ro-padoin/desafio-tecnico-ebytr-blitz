const chai= require('chai');
const chaiAsPromised = require('chai-as-promised')
const sinon = require('sinon');
const tasksModel = require('../../src/models/tasksModel');
const tasksService = require('../../src/services/tasksService');

chai.use(chaiAsPromised);

const { expect } = chai;

describe('ScheduleDatabase.tasks na Camada Services', () => {
  describe('Rota get', () => {
    describe('Quando não existir nenhuma task cadastrada', () => {
      before(() => {
        sinon.stub(tasksModel, 'getAllTasks').resolves([]);
    })

    after(() => {
        tasksModel.getAllTasks.restore();
    })

    it('Teste se lança um erro "status: 404, message: "Tasks not found"', () => {
      const message = { status: 404, message: 'Tasks not found'};
      const result = tasksService.getAllTasks();
      return expect(result).to.be.rejectedWith(message);

  });
  });

  describe('Quando existir pelo menos uma task cadastrada', () => {
    before(() => {
      sinon.stub(tasksModel, 'getAllTasks').resolves([{
        id: 1,
        title: "Finalizar os testes de Backend",
        description: "prazo 10 dias",
        createdAt:  "2022-07-04 21:01:32",
        updatedAt: "2022-07-04 21:01:32"
    }]);
  })

  after(() => {
      tasksModel.getAllTasks.restore();
  })

    it('Teste se retorna um array e não está vazio', async () => {
        const result = await tasksService.getAllTasks();
        expect(result).to.be.a('array').to.have.lengthOf(1);
    });

    it('Teste se o conteúdo do array é um objeto e se possui as chaves id, name e quantity', async () => {
        const [result] = await tasksService.getAllTasks();
        expect(result).to.be.an('object').that.has.all.keys('id', 'title', 'description', 'createdAt', 'updatedAt');
    });

})
})
// describe('Rota put', () => {

// after(() => {
//     tasksModel.updateTask.restore();
// })

//   it('Teste se retorna um array e não está vazio', async () => {
//       const result = await tasksService.getAllTasks();
//       expect(result).to.be.a('array').to.have.lengthOf(1);
//   });

//   it('Teste se o conteúdo do array é um objeto e se possui as chaves id, name e quantity', async () => {
//       const [result] = await tasksService.getAllTasks();
//       expect(result).to.be.an('object').that.has.all.keys('id', 'title', 'description', 'createdAt', 'updatedAt');
//   });

// })
})
