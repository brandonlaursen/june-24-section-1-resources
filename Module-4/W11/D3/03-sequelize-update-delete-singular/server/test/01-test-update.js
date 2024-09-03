const { setupBefore, setupChai, removeTestDB, runSQLQuery } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;
  
describe('Update a puppy by id', () => {
  let DB_TEST_FILE, models, server;
  before(async () => ({ server, models, DB_TEST_FILE } = await setupBefore(__filename)));
  after(async () => await removeTestDB(DB_TEST_FILE));

  it('should update the puppy information and match the API specs for a seeded puppy', async () => {
    let id = 7
    const reqBody = {
      ageYrs: 1.5,
      weightLbs: 26
    };
    await chai.request(server)
      .put(`/puppies/${id}`)
      .send(reqBody)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object')
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('puppy');
        expect(res.body.puppy.name).to.eq("Callie");
        expect(res.body.puppy.ageYrs).to.eq(1.5);
        expect(res.body.puppy.breed).to.eq("Corgi");
        expect(res.body.puppy.weightLbs).to.eq(26);
        expect(res.body.puppy.microchipped).to.eq(false);
      });
    const [callie] = await runSQLQuery(`SELECT * FROM 'Puppies' WHERE id = ${id}`, DB_TEST_FILE);
    expect(callie).to.be.an('object');
    expect(callie.name).to.eq('Callie');
    expect(callie.ageYrs).to.eq(1.5);
    expect(callie.breed).to.eq("Corgi");
    expect(callie.weightLbs).to.eq(26);
    expect(callie.microchipped).to.eq(0);
  });

  it('should update the puppy information and match the API specs for a newly created puppy', async () => {
    const test = await models.Puppy.create({id: 99, name: 'Test', ageYrs: 1, breed: 'Labrador', weightLbs: 2, microchipped: false})
    let id = test.id;
    const reqBody = {
      ageYrs: 50,
      weightLbs: 23,
      microchipped: true
    };
    await chai.request(server)
      .put(`/puppies/${id}`)
      .send(reqBody)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object')
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('puppy');
        expect(res.body.puppy.name).to.eq("Test");
        expect(res.body.puppy.ageYrs).to.eq(50);
        expect(res.body.puppy.breed).to.eq("Labrador");
        expect(res.body.puppy.weightLbs).to.eq(23);
        expect(res.body.puppy.microchipped).to.eq(true);
      });
    const [testPup] = await runSQLQuery(`SELECT * FROM 'Puppies' WHERE id = ${id}`, DB_TEST_FILE);
    expect(testPup).to.be.an('object');
    expect(testPup.name).to.eq('Test');
    expect(testPup.ageYrs).to.eq(50);
    expect(testPup.breed).to.eq("Labrador");
    expect(testPup.weightLbs).to.eq(23);
    expect(testPup.microchipped).to.eq(1);
  });
});