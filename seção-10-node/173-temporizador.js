const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * * * * *", function () {
  // | */5 * * * * * | segundo, minuto, hora, dia, mes, dia da semana
  console.log("Executando tarefa 1!", new Date().getSeconds());
});

setTimeout(function () {
  tarefa1.cancel();
  console.log("Cancelando tarefa 1!");
}, 20000);

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule();
// regra.dayOfWeek = [new schedule.Range(1, 5)]; // 0 = domingo | 6 = sábado
// regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log("Executando tarefa 2!", new Date().getSeconds());
});
