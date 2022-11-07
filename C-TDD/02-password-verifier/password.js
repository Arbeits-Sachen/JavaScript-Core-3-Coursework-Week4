function verify(password)
{
    if(password.length > 7 && password !== null && password.match(/[A-Z]/) && password.match(/[0-9]/))
    {
        return "Password accepted";
    }

    return "Password rejected";
}

module.exports = verify;