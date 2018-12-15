class DateHalper {

    constructor() {

        throw new Error('DateHelper não pode ser instanciada');

    }

    static textoParaData(texto) {

       
     if(!/\d{4}-\d{2}-\d{2}/.test(texto)) {

        throw new Error("deve tá no formato yyyy-mm-dd");
     }
        
     return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }

    static dataParaTExto(data) {


        return `${data.getDate()}
        + '/' + ${(data.getMonth() + 1)}
        + '/' + ${data.getFullYear()}`;

    }


}