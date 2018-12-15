class ListaNegociacao {

    constructor(){

        this._listanegociacao =  []
    }

    adiciona(negociacao){

        this._listanegociacao.push(negociacao);
    }

    get negociacoes(){

        return [].concat(this._listanegociacao);
    }
}