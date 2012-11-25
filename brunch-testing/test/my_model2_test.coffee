my_model = require 'models/my_model'

describe "MyModel", ->
	describe "#value", ->
		it 'should return a value', ->
			expect(my_model.value()).to.equal(123)
		it 'should fail this test', ->
			expect(my_model.value()).to.equal(456)