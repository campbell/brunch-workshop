my_model = require('models/my_model');

describe("MyModel", function(){
  describe("#value", function(){
    it('should return a value', function() {
      expect(my_model.value()).to.equal(123);
    });
    it('should fail this test', function() {
      expect(my_model.value()).to.equal(456);
    });
  });
});