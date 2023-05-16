const validate = (req, res, next) => {
    const { image, name, weight, height, life_span, temperament } = req.body;
    
    if (!image) return res.status(400).json({ error: "Missing image." });
    if (!name) return res.status(400).json({ error: "Missing name." });
    if (!weight) return res.status(400).json({ error: "Weight info is required." });
    if (!height) return res.status(400).json({ error: "Height info is required." });
    if (!life_span) return res.status(400).json({ error: "Life span info is required." });
    if (!temperament) return res.status(400).json({ error: "Temperament info is required." });

    next();

  };

module.exports = validate;

//CREAR MAS VALIDACIONES Y UTILIZAR LOS HANDLERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!