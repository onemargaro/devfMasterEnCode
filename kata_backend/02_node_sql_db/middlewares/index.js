import jwt from 'jsonwebtoken';

export const showTime = (req, _, next) => {
    console.log('Timestamp: ', Date.now());
    console.log(req.method, req.url);
    next();

}

export const verifyToken = (req, res, next) => {
    const { headers: { authorization } } = req;
    const [secret, token] = authorization.split(' ');
    if (secret != process.env.JWT_SECRET) {
        return res.status(401).send({ message: "No authorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_GENERATOR);
    req.user = decoded;
    next();
}

export const checkRole = (role) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.send(401).send({ message: 'No authorized' });
        }
        const { user: { role: userRole } } = req;
        if (userRole !== role) {
            return res.status(403).send({ message: "Forbiden, VIP Only" });
        }
        return next();
    }
}
