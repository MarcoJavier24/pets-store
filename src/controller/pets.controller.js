import { pool } from '../db.js'


//SELECT * FROM pet; 
export const getPets = async (req, res) => {
    try{
    const [rows] = await pool.query('SELECT * FROM pet')
    res.json(rows)
    }catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

//SELECT * FROM pet WHERE id = ?; ? = AL ID A BUSCAR (1,2,3,4,etc.)
export const getPet = async (req, res) => {
    try{
    const [rows] = await pool.query('SELECT * FROM pet WHERE id = ?', [req.params.id])

    if(rows.length <= 0) return res.status(404).json({
        message: 'pet not found'
    })
    console.log(rows)
    res.send(rows[0])
    } catch (error){
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

//INSERT INTO pet (name, tag) VALUES (?, ?); INSERTAR LOS VALORES DEL NUEVO 'pet' ('Nino', 'Pedro 123-435-1436')
export const createPets = async(req, res) => {
    const {name, tag} = req.body
    const [rows] = await pool.query('INSERT INTO pet(name, tag) VALUES (?, ?)', [name, tag])
    res.send({
        id: rows.insertId,
        name,
        tag,
    })
};
