import chalk from "chalk";
import ping from "ping";
// import axios from 'axios';

async function enviarInformacoes(hosts) {
  
  try {
    const array = [];
    console.log(chalk.white("________________________"));
    for (let atual = 0; atual < hosts.length; atual++) {
      let ipAnalise = atual;
      let ip = hosts[atual].ip;
      let res = await ping.promise.probe(ip);
     
      if (res.alive === true) { 
        array.push({ ip, status: 'up'})
        console.log(
          chalk.yellow(ipAnalise),
          chalk.whiteBright(ip),
          chalk.blueBright("up")
        );
      } else {
        array.push({ ip, status: 'down'})
        console.log(
          chalk.yellow(ipAnalise),
          chalk.whiteBright(ip),
          chalk.redBright("down")
        );
      }
    } return array
  } catch (error) {
    console.log(error);
  }
}

// setInterval(() => {
//   enviarInformacoes().catch((error) => {
//     console.error("Erro ao executar a função enviarInformacoes:", error);
//   });
// }, 1 * 10 * 1000);

export default enviarInformacoes;
