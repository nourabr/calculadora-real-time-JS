class CalcController{

    constructor(){// Onde ficam os parâmetros necessários para a classe funcionar e também é chamado automaticamente quando instanciamos a classe em um objeto

        // Quando tem _ por convenção é privado e não deve ser acessado diretamente, somente com get e set.
        this._locale = "pt-BR";

        // @@@ Elementos HTML

         // El no final da variável porque se refere ao elemento e não ao conteúdo
         this._displayCalcEl = document.querySelector("#display"); // É o texto principal do visor
         this._dateEl = document.querySelector("#data"); // É a elemento da data que fica no header do visor
         this._timeEl = document.querySelector("#hora"); // É o elemento da hora que fica no header do visor

        // Como o método construtor é executado quando instanciamos a classe, coloquei o metodo initialize para ser executado
        this.initialize();
    }


    // Método que quero que seja executado quando carregar o construtor
    initialize(){

        //  Mostra na tela a data e hora
        this.setDisplayDateTime();

        this.initButtonsEvents();
        
        /*
        setInterval() Me permite fazer com que algo(Uma funcao) rode a cada determinados milisegundos
        Todo inverval tem um id único, para eu saber qual é basta eu armazenar o id em uma variável
        */
       let interval = setInterval(()=>{
           this.setDisplayDateTime();
            
        }, 1000);


        /*  Função que executa algo só depois de determinado tempo
        setTimeout(()=>{
            clearInterval(interval); // interrompe um intervalo pelo id dele.
        },10000);
        */
    }

    // Método que set a Data e a Hora
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    // Método que mapeia os elementos dos botões e cria os eventos
    initButtonsEvents(){
        // Mapa dos elementos dos botões
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        // ForEach percorre os botões e coloca eventos nele
        buttons.forEach(btn =>{
            btn.addEventListener('click', ()=>{
            console.log(btn.className.baseVal.replace("btn-", ""));
            })
        })
        
    }


    //  Getters and Setters
    get displayDate(){
        return this._dateEl.innerHTML; //.innerHTML nos permite alterar o conteúdo das tags html
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }


    // Método GET para _displayCalc
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    // Método SET para _displayCalc
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    // _currentDate GET
    get currentDate(){
        return new Date();
    } 

    // _currentDate SET
    set currentDate(value){
        this._currentDate = value;
    }
    

}