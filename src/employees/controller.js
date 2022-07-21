const QueryString = require('qs');
const pool = require('../../db');
const queries = require('./queries');


const getEmployees = (req,res) =>{
    //console.log('get employes');
    pool.query(queries.getEmployees,(error , results)=>{
if (error) throw error;
res.status(200).json(results.rows)
    })

};
const getEmployeesByid = ( req, res)=>{
    const eid = parseInt(req.params.eid);
    pool.query(queries.getEmployeesByid , [eid], (error, results)=>{
        if (error) throw error;
res.status(200).json(results.rows)
    
    })
}

const getEmpcountBydep = ( req, res)=>{
    const depid = parseInt(req.params.depid);
    pool.query(queries.getEmpcountBydep , [depid], (error, results)=>{
        if (error) throw error;
res.status(200).json(results.rows)
    
    })
}
const addemployees =(req,res)=>{
    const { name , number , department , depid} = req.body;

    pool.query(queries.checknumberexists , [number],(error, results)=>{
        if(results.rows.length){
            res.send("mobile number already exist");
        }

        pool.query(queries.addemployees, [name, number , department, depid], (error,results)=>{
            if(error) throw error ;
            res.status(201).send("employee has been added");
            console.log("new employee added");
        })
    })
}


module.exports ={
    getEmployees,
    getEmployeesByid,
    addemployees,
    getEmpcountBydep
}