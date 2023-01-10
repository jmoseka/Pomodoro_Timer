const motivateNoticeEl = document.getElementById('motivate-notice');
const completedSessionEl = document.getElementById('session-count');

const motivateMsg = [
  'Keep up the good work 💪',
  'You\'re almost there, keep going! 💪',
  'Well, look at you go! 🤗',
  'Nothing can stop you now 👏',
  'You\'ve put in so much effort already, don\'t stop now 😊',
];

const shortBreakMsg = [
  'A short break sounds like a good idea ☕',
  'Shall we take a short break? 😊',
  'Let\'s pause for a short break 😊',
  'It might be a good time for a short break ☕',
  'A short break could be a good way to recharge 🔋',
  'How about we take a short break? ☕',
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
  'Either you run the day or the day runs you. — Jim Rohn',
  'Opportunity is missed by most people because it is dressed in overalls and looks like work. — Thomas Edison',
  'Don’t judge each day by the harvest you reap but by the seeds that you plant. — Robert Louis Stevenson',
  'Whether you think you can, or you think you can’t – you’re right — Henry Ford',
  'I am not a product of my circumstances. I am a product of my decisions. — Stephen R. Covey',
  'I’m a greater believer in luck, and I find the harder I work the more I have of it. — Thomas Jefferson',
  'Just one small positive thought in the morning can change your whole day. — Dalai Lama',
];

const generateQuote = () => {
  const random = Math.floor(Math.random() * quotes.length);
  completedSessionEl.textContent = `${quotes[random]}`;
};

const updateLongBreakMsg = () => {
  const random = Math.floor(Math.random() * longBreakMsg.length);
  completedSessionEl.textContent = `${longBreakMsg[random]} 🎉`;
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