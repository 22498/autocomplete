class autocomplete {
    constructor() {
        this.minimNumOfChar = 2;
        this.field = 0;
        this.helper = document.createElement('div');
        this.helperId = 'helping';
        this.source = 0;
        document.body.appendChild(this.helper);
    }

    volgInvoer(input) {
        if (input.length >= this.minimNumOfChar) {
            console.log(input);
            this.helper.style.display = 'block';
            this.helper.id = 'helper';
            this.vergelijk(input);
        } else {
            console.log('verbergen');
            this.verbergHelper();
        }
    }

    vergelijk(input) {
        console.log(input);
        var list = [];
        this.helper.innerHTML = '';
        for (var i = 0; i < this.source.length; i++) {
            if (input.toLowerCase() == this.source[i].substr(0, input.length).toLowerCase()) {
                list.push(this.source[i]);
            }
        }
        if (list.length >= 1) {
            this.toon(list);
        }
        console.log(list);
    }
    toon(arr) {
        console.log(arr);
        this.helper.innerHTML = '';
        for (let i = 0; i < arr.length; i++) {
            var hyperlink = document.createElement('span');
            hyperlink.innerHTML = arr[i];
            this.helper.appendChild(hyperlink);
            hyperlink.addEventListener('click', () => {
                this.voorWaardeIn(arr[i]);
            });
        }
        this.positioneerHelper(this.helper);
    }
    positioneerHelper(el) {
        var element = this.field;
        el.style.width = element.offsetWidth - 42 + 'px';
        el.style.left = element.offsetLeft + 12 + 'px';
        el.style.top = element.offsetTop + element.offsetHeight + 'px';
    }
    voorWaardeIn(country) {
        this.field.value = country;
        this.verbergHelper();
    }

    verbergHelper() {
        this.helper.style.display = 'none';
    }

    init(fieldId, source) {
        this.source = source;
        this.field = document.getElementById(fieldId);
        this.field.onkeyup = () => {
            this.volgInvoer(this.field.value);
        };
        this.field.addEventListener('blur', () => {
            setTimeout(() => this.verbergHelper(), 1000);
        });
    }
}
