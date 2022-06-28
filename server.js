//inicio api
const express = require ('express');

//
const cors = require ('cors');
   
//
const server = express();
server.use(express.json());
//

//
const app = express()

app.use(cors())

app.get('/', (req, res) =>{
    
    return res.json([ 
      
        //    
        { Motorista: 'fulano'},
        { carro:'Esportivo', cor:'azul', placa: 'XYZ'},
        //
        {data_de_inicio: ' data às horario'},
        {data_de_termino: 'data às horario'},
        //
        {motorista_que_utilizou: 'Fulano'},
        {automovel_utilizado:'Eportivo'}

    ])
    
    
})
app.listen("$port")
