const motivateNoticeEl = document.getElementById('motivate-notice');
const completedSessionEl = document.getElementById('session-count');

const motivateMsg = [
  'Keep up the good work πͺ',
  'You\'re almost there, keep going! πͺ',
  'Well, look at you go! π€',
  'Nothing can stop you now π',
  'You\'ve put in so much effort already, don\'t stop now π',
];

const shortBreakMsg = [
  'A short break sounds like a good idea β',
  'Shall we take a short break? π',
  'Let\'s pause for a short break π',
  'It might be a good time for a short break β',
  'A short break could be a good way to recharge π',
  'How about we take a short break? β',
];

const longBreakMsg = [
  'It\'s time for a well-deserved long break. Congratulations on getting this far!',
  'You deserve a long break after making it this far. Well done!',
  'Congratulations on making it this far! It\'s time to take a long break and relax',
  'You\'ve earned a long break after reaching this point. Well done',
  'Well done on making it this far! Let\'s take a well-deserved, extended break',
  'You\'ve worked hard and made it this far. It\'s time to take a much-needed long break',
];

const quotes = [
  'Either you run the day or the day runs you. β Jim Rohn',
  'Opportunity is missed by most people because it is dressed in overalls and looks like work. β Thomas Edison',
  'Donβt judge each day by the harvest you reap but by the seeds that you plant. β Robert Louis Stevenson',
  'Whether you think you can, or you think you canβt β youβre right β Henry Ford',
  'I am not a product of my circumstances. I am a product of my decisions. β Stephen R. Covey',
  'Iβm a greater believer in luck, and I find the harder I work the more I have of it. β Thomas Jefferson',
  'Just one small positive thought in the morning can change your whole day. β Dalai Lama',
];

const generateQuote = () => {
  const random = Math.floor(Math.random() * quotes.length);
  completedSessionEl.textContent = `${quotes[random]}`;
};

const updateLongBreakMsg = () => {
  const random = Math.floor(Math.random() * longBreakMsg.length);
  completedSessionEl.textContent = `${longBreakMsg[random]} π`;
};

const updateShortBreakMsg = () => {
  const random = Math.floor(Math.random() * shortBreakMsg.length);
  completedSessionEl.textContent = shortBreakMsg[random];
};

const updateEncouragingMsg = () => {
  const random = Math.floor(Math.random() * motivateMsg.length);
  motivateNoticeEl.textContent = motivateMsg[random];
};

const removeEncouragingMsg = () => {
  motivateNoticeEl.textContent = '';
};

export {
  updateEncouragingMsg, updateShortBreakMsg, updateLongBreakMsg, removeEncouragingMsg,
  generateQuote,
};