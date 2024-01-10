let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  // Implemente seu código aqui
  let result = `Boas vindas, ${characterInfo.personagem}`;

  return result;
};

console.log(printMessage(info));

module.exports = { info, printMessage };