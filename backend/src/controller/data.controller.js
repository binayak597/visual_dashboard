import DataModel from "../model/data.schema.js";


export default class DataController{


    getData = async(req, res, next) => {

        try {
    
            const data = await DataModel.find({}).limit(30);
            res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    addData = async (req, res, next) => {
        try {
            const result = req.body;
            console.log(result);
            console.log(result.length);

            const newData = await DataModel.insertMany(result);
            // const newData = new DataModel(req.body);
            // const savedData = await newData.save();
            res.status(201).json(newData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }

    }
}