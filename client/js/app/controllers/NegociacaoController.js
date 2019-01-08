class NegociacaoController {

    constructor() {


        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $('#valor');
        this._negociacoes =  new ListaNegociacao();
        
        this._negociacaoview = new NegociacaoView($("#negociacaoView"));
        this._negociacaoview.update(this._negociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagem'));
        this._mensagemView.update(this._mensagem);


        
        

    }

    adiciona(event) {
        event.preventDefault();

        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação adicionada com Sucessoo  !!!";
        this._mensagemViewg.update(this._mensagem);
        
        this._negociacaoview.update(this._negociacoes);
        this._limpaFormulario();
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