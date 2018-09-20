export const requestTime = (options) => {
    return (req, res, next) => {
        const date = Date.now();
        let data = date;

        if (options.type === 'minutes') {
            data = date / 60;
        }

        req.requestTime = data;
        next();
    };
};