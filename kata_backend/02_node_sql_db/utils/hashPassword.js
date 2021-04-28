import bcrypt from 'bcrypt';
const SALT_FACTOR = 10; // La salt ayuda a generar una string aleatoria

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(SALT_FACTOR);
    return bcrypt.hash(password, salt);
}

export const comparePasswords = bcrypt.compare;
