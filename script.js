//###-------------- Prática 1
/* const verificaDependente = (idade) => {

     if (idade === 13) {
      console.log(`Cartão de crédito vinculado disponível.`);
    } else if (idade === 14) {
      console.log(`Cartão de crédito vinculado disponível.`);
    } else if (idade === 15) {
      console.log(`Seu dependente já pode ter um cartão de crédito vinculado ao seu..`);
    } else if (idade === 16) {
      console.log(`Seu dependente já pode ter um cartão de crédito vinculado ao seu..`);
    } else if (idade === 17) {
      console.log(`Seu dependente já pode ter um cartão de crédito vinculado ao seu..`);
    } else {
      console.log(`Consulte outas possibilidades do labank.`);
    } 

  if ((idade >= 13) && (idade <= 17)) {
    console.log(`Seu dependente já pode ter um cartão de crédito vinculado ao seu.`);
  } else {
    console.log(`Consulte outas possibilidades do labank.`);
  }
}
verificaDependente(15); */

//###-------------- Prática 2
/* const verificaDependente = (idade) => {
  const resp1 = confirm(`Já possui conta no Labank?`);
  resp1 ? console.log(`Bem vindo!`) : console.log(`Abra uma conta!`);

    if ((idade >= 13) && (idade <= 17)) {
      console.log(`Seu dependente já pode ter um cartão de crédito vinculado ao seu.`);
    } else {
      console.log(`Consulte outas possibilidades do labank.`);
    } 
}
verificaDependente(16); */

//###-------------- Prática 3

const escolhaCartao = (ramal) => {

  switch (ramal) {
    case 1:
      console.log(`Cartão Fácil`);
      break;
    case 2:
      console.log(`Cartão Black`);
      break;
    case 3:
      console.log(`Cartão Platinum`);
      break;
    case 4:
      console.log(`Cartão Master Gold`);
      break;
    default:
      console.log(`Escolha uma das quatro opções!`);
  }


}

escolhaCartao(2);