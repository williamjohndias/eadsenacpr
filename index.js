const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')

const bot = new Telegraf("5369686987:AAFOCo3aeiVfhM2RqQsItNOY3qGyKZ40tok");


const menuprincipal = require("./menuprincipal");
const cursoSoftskills = require("./softskills/cursosoftskills");
const verificadia2 = require("./softskills/verificadia");

const dia2 = require("./softskills/dia2");
const dia3 = require("./softskills/dia3");
const dia4 = require("./softskills/dia4");
const dia5 = require("./softskills/dia5");
const dia6 = require("./softskills/dia6");
const dia7 = require("./softskills/dia7");
const dia8 = require("./softskills/dia8");
const dia9 = require("./softskills/dia9");
const dia10 = require("./softskills/dia10");




const stage = new Stage([menuprincipal, cursoSoftskills, verificadia2, dia2, dia3, dia4, dia5, dia6, dia7, dia8, dia9, dia10])
bot.use(session())
bot.use(stage.middleware())

bot.command('start', Stage.enter('menuprincipal'));

bot.on('message', async (ctx, next) => {
    nome = ctx.update.message.from.first_name
    console.log(nome)
    await ctx.reply(`Olá, Aluno(a)! \nSou o chatbot aqui do Senac.`)
    await ctx.reply(`Para entrar ao menu clique aqui → /start`)
    await next() 
})

// start bot
bot.startPolling()

// app.listen(process.env.PORT || 3000, () => {
//     console.log('Server rodando na porta 3000')
// })