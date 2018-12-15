class NegociacaoController {

    constructor() {


        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $('#valor');
        this._negociacoes =  new ListaNegociacao();
    }

    adiciona(event) {
        event.preventDefault();
        this._negociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        this._negociacoes.negociacoes.length = 0;
        console.log(this._negociacoes.negociacoes);
 
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHalper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario(){

        this._inputData.value="";
        this._inputQuantidade.value= 1;
        this._inputValor.value=0.0;
        this._inputData.focus();
    }
}