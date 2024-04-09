import argon2 from "argon2";
import Admin from "../models/AdminModel.js";

export const getAdmin = async (req, res) => {
    try {
        const response = await Admin.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getAdminbyId = async (req, res) => {
    try {
        const response = await Admin.findAll({
            where : req.params.id
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createAdmin = async (req, res) => {
    const {
      id_admin,
      nama,
      username,
      password,
      confPassword,
    } = req.body;
    if (password !== confPassword)
      return res
        .status(400)
        .json({ msg: "Password dan confirm password tidak sama" });
    const hashPassword = await argon2.hash(password);
    try {
        await Admin.create({
            id_admin : id_admin,
            nama : nama,
            username : username,
            password : hashPassword
        });
        res.status(201).json({msg: "Admin Created"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteAdmin = async (req, res) => {
    const admin = await Admin.findOne({
        where: {
            id_admin: req.params.id
        }
    });
    if (!admin) return res.status(404).json({msg: "Admin tidak ditemukan"});
    try {
        await admin.destroy();
        res.status(200).json({msg: "Admin Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}