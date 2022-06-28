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
        { Motorista: 'João Silva'},
        { carro:'fiat agro', cor:'azul', placa: 'XYZ01'},
        //
        {data_de_inicio: ' 25/12/2022 às 13:00'},
        {data_de_termino: '25/12/2022 às 18:00'},
        //
        {motorista_que_utilizou: 'João Silva'},
        {automovel_utilizado:'Fiat Agro'}

    ])
    
    
})
app.listen("$port")
