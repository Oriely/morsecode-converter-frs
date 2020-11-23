
        //Model//
        let html = '';
        let _app = document.getElementById('oplegget');
        const bokstaver = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', 'æ', 'ø', 'å'];
        const morseKode = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
            '-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−']; //4 siste er space, æ ,ø og å

        updateView();

        //View//

        function updateView() {

            html = `
                                <label>Skriv inn det du vil oversette til morsekode</label>
                                <input id="nyString" type="text">
                                <button onclick="oversettOpplegget()">Oversett</button>

                                <p id="nyKode">Her kommer morsekoden.</p>

                                `;

            _app.innerHTML = html;
        }
        //Controller//

        function oversettOpplegget() {
            var nyTekst = document.getElementById("nyString").value;
            let nyKode = "";
            for (var i = 0; i < nyTekst.length; i++) {
                for (var j = 0; j < 30; j++) {
                    if (nyTekst[i].toLowerCase() == bokstaver[j]) {
                        nyKode += morseKode[j];
                        nyKode += " ";
                        break;
                    }
                }
            }
            document.getElementById("nyKode").innerHTML = nyKode;
        }

