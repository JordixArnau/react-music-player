const db = require("../models");

async function signIn(req, res, next) {
  const { uid, email } = req.user;
  const { firstName, lastName } = req.body.user;
  try {
    const user = await db.User.findOne({ email: email });

    if (user) {
      return res.sendStatus(200);
    }

    const newUser = await db.User.create({
      firebase_id: uid,
      email: email,
      firstName: firstName || "",
      lastName: lastName || "",
    });

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
  }
}

async function updateUser(req, res, next) {
  const { id: userId } = req.params;
  const { firstName, lastName, email } = req.body;

  try {
    const updatedUser = db.User.findOneAndUpdate(
      { firebase_id: userId },
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
      }
    );

    res.status(200).send({
      data: updateUser,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  signIn: signIn,
  updateUser: updateUser,
};
