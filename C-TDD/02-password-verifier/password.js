function verify(password)
{
    if(password !== null && password.length > 7 && password.match(/[A-Z]/) && password.match(/[0-9]/))
    {
        return "Password accepted";
    }

    return "Password rejected";
}

module.exports = verify;
