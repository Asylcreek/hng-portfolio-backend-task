const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Email = require('../utils/email');

exports.sendEmail = catchAsync(async(req, res, next) => {
    const { email, name, message } = req.body;

    if (!email || !name || !message)
        return next(new AppError('All fields are required', 400));

    try {
        await Promise.all([
            await new Email({
                name,
                email,
            }).sendSuccess(),
            await new Email({
                name: 'Boro',
                email: 'omokugbobr@gmail.com',
            }).sendSuccessAdmin({ email, name, message }),
        ]);
    } catch (err) {
        console.log(err);
        return next(new AppError('Are you sure your email is correct?', 400));
    }

    res
        .status(200)
        .json({ status: 'success', message: 'Email was sent successfully' });
});