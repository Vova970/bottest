import { Telegraf } from 'telegraf';
import { InlineKeyboardButton } from 'telegraf/typings/core/types/typegram';

// Используем переменную окружения для токена
const botToken = process.env.BOT_TOKEN;
if (!botToken) {
  throw new Error('7831712123:AAFtheqis8u1pjry9ryPOTXmYYIKkZjixgA');
}

const bot = new Telegraf(botToken);

// URL вашего Web App (замените на URL, который вы получите после деплоя Web App на Render)
const webAppUrl = 'https://testss-1.onrender.com';

// Обработка команды /start
bot.start((ctx) => {
  const keyboard: InlineKeyboardButton[][] = [[
    { text: 'Open Shop', web_app: { url: webAppUrl } }
  ]];

  ctx.reply('Welcome to My Shop! Click the button to open the store.', {
    reply_markup: { inline_keyboard: keyboard }
  });
});

// Запуск бота
bot.launch()
  .then(() => console.log('Bot is running'))
  .catch((err) => console.error('Error starting bot:', err));

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));