import userModel from "../models/user.model.js";

export const getUserById = async (req, res) => {
    try {
        const ID = req.params.id;
        const user = userModel.findOne(ID);
        res.json(user);
    
    } catch (error) {
        res.status(500).json({
            error: error.massage
        });
    }
};
export const getAllUser = async (req, res) => {
    try {
        const user = await userModel.find.populate();
        res.json(user);
    } catch (error) {
        console.error("hubo un problema en la obtencion de todos los usuarios ", error)
        res.status(500).json(error);
    }
};

export const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    // const existing = await user.findOne({ where: { email } });
    // if (existing) return res.status(400).json({ message: "Email ya registrado" });
    const user = await user.create({ username, email, password, role });
    res.status(201).json({ message: "Usuario creado", user });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const updateUser = async(req,res) => {
    try {
        const user = await user.findById(req.params.id);

        await user.update(req.body);
        res.status(user).json(); 

    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await user.findById(id);
    if (!user || user.isDeleted) return res.status(404).json({ message: 'Usuario no encontrado' });

    user.isDeleted = true;
    await user.save();
    res.status(200).json({ message: 'Usuario eliminado (lógico)' });
  } catch (error) {
    res.status(500).json({ message: 'Error eliminando usuario' });
  }
};