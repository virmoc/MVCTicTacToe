const {test} = QUnit;
let tomb = []
tictactoe = new Kiertekel(tomb);
QUnit.module('Vízszintes ellenőrzések Tesztelése', function(){
    // test('kiertekelesModel létezik', (assert)=> {
    //     assert.ok(tictactoe, "létezik");
    // });
    test('vizszintes ellenőrzés létezik', (assert)=> {
             assert.ok(tictactoe.getVizszintes, "létezik");
    });
    test('vizszintes ellenőrzés függvény-e', (assert)=> {
        assert.ok(typeof tictactoe.getVizszintes == "function", "függvény");
    });
    test('üres tictactoe', (assert)=> {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "---~---~---~");
    });
    test('első sor X', (assert)=> {
        let tomb = [
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "XXX~---~---~");
    });

    test('második sor X', (assert)=> {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "---~XXX~---~");
    });
    test('harmadik sor X', (assert)=> {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "---~---~XXX~");
    });
    test('vízszintesen véletlen szerű, nincs nyertes', (assert)=> {
        let tomb = [
            {ertek: "O"},
            {ertek: "X"},
            {ertek: "O"},
            {ertek: "X"},
            {ertek: "O"},
            {ertek: "X"},
            {ertek: "O"},
            {ertek: "X"},
            {ertek: "X"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "OXO~XOX~OXX~");
    });
    test('első sor végén X, kövi sor azzal kezdődik', (assert)=> {
        let tomb = [
            {ertek: "O"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "O"},
            {ertek: "X"},
            {ertek: "O"},
            {ertek: "X"},
            {ertek: "X"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getVizszintes(), "OXX~XOX~OXX~");
    });
});

QUnit.module('Függőleges ellenőrzések Tesztelése', function(){
    test('függőleges ellenőrzés létezik', (assert)=> {
        assert.ok(tictactoe.getFuggoleses, "létezik");
    });
    test('függőleges ellenőrzés függvény-e', (assert)=> {
        assert.ok(typeof tictactoe.getFuggoleses == "function", "függvény");
    });
    test('üres tictactoe', (assert)=> {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggoleses(), "---~---~---~");
    });
    test('eslő osztlop X', (assert)=> {
        let tomb = [
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggoleses(), "XXX~---~---~");
    });
    test('második osztlop X', (assert)=> {
        let tomb = [
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggoleses(), "---~XXX~---~");
    });
    test('harmadik osztlop X', (assert)=> {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggoleses(), "---~---~XXX~");
    });
    test('függőlegesen véletlen szerű, nincs nyertes', (assert)=> {
        let tomb = [
            {ertek: "O"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "O"},
            {ertek: "O"},
            {ertek: "O"},
            {ertek: "X"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggoleses(), "OXO~XXO~XOX~");
    });
    test('első oszlop végén X, kövi oszlop azzal kezdődik', (assert)=> {
        let tomb = [
            {ertek: "O"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "O"},
            {ertek: "X"},
            {ertek: "O"},
            {ertek: "X"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getFuggoleses(), "OXX~XXO~XOX~");
    });
    
});

QUnit.module('Átlós ellenőrzések Tesztelése', function(){
    test('átlós ellenőrzés létezik', (assert)=> {
        assert.ok(tictactoe.getAtlo, "létezik");
    });
    test('átlós ellenőrzés függvény-e', (assert)=> {
        assert.ok(typeof tictactoe.getAtlo == "function", "függvény");
    });
    test('üres tictactoe', (assert)=> {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getAtlo(), "---~---~");
    });
    test('balról jobra nyer az X', (assert)=> {
        let tomb = [
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"}
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getAtlo(), "XXX~-X-~");
    });
    test('jobrról balra nyer az X', (assert)=> {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"}
            
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getAtlo(), "-X-~XXX~");
    });
    test('döntetlen', (assert)=> {
        let tomb = [
            {ertek: "-"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "O"},
            {ertek: "-"},
            {ertek: "X"},
            {ertek: "-"},
            {ertek: "-"}
            
        ];
        let tictactoe = new Kiertekel(tomb);
        assert.equal(tictactoe.getAtlo(), "-O-~XOX~");
    });
});

QUnit.module('Ellenőrzések Tesztelése', function(){
    test('ellenőrzés létezik', (assert)=> {
        assert.ok(tictactoe.ellenorzes, "létezik");
    });
    test(' ellenőrzés függvény-e', (assert)=> {
        assert.ok(typeof tictactoe.ellenorzes == "function", "függvény");
    });
});