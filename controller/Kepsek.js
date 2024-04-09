import Kepsek from "../models/KepsekModal.js";

export const getKepsek = async (req, res) => {
    try {
        const response = await Kepsek.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

