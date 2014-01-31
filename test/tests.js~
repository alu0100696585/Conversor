var assert = chai.assert; // Linea para realizar los asertos correspondientes

suite('Conversor de Temperatura: Farenheit-Celsius', function() {
    test('23F = -5.0C', function() {
        original.value = "23 F";
        calculate();
        assert.deepEqual(converted.innerHTML, "-5.0C");
    });
    test('0C = 32.0F', function() {
        original.value = "0C";
        calculate();
        assert.deepEqual(converted.innerHTML, "32.0F");
    });
    test('25º = Wrong', function() {
        original.value = "25º";
        calculate();
        assert.match(converted.innerHTML, /Try/);
    });
});