const Reminders = require("../models/reminders.model");

const getLastReminderId = async () => {
  const lastReminder = await Reminders.findOne(
    {},
    {},
    { sort: { createdAt: -1 } }
  );
  return lastReminder ? lastReminder.id : null;
};

const createReminder = async (cuerpo) => {
  const reminder = new Reminders({ body: cuerpo });
  await reminder.save();

  return {
    success: true,
  };
};

const getAllReminders = async () => {
  const reminders = await Reminders.find();
  return {
    success: true,
    reminders,
  };
};

const getNewReminders = async (lastIdReminder) => {
  const lastId = lastIdReminder? mongoose.Types.ObjectId(lastIdReminder): null;
  const newReminders = await Reminders.find({ 
    id: { 
        $gt: lastId 
    } 
});

  return {
    success: true,
    reminders: newReminders,
  };
};

module.exports = {
  createReminder,
  getAllReminders,
  getNewReminders,
};
