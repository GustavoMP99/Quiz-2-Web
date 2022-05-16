const jwt = require( 'jsonwebtoken' );

const generateAccesToken = ( Usuario ) => {
    return jwt.sign(
        { username: Usuario.username },
        process.env.JWT_KEY,
        { expiresIn: '24h' });
}

const authenticateJWT = ( req, res, next ) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_KEY, (err, Usuario) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.Usuario = Usuario;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = { generateAccesToken, authenticateJWT };