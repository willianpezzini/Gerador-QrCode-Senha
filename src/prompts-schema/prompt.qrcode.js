import chalk from "chalk";


const promptQrcode = [
    {
        name: "link",
        description: chalk.blue("Digite o link para qual você que gerar o QRcode"),
    },

    {
        name: "type",
        description: chalk.blue("Escolha como o QRcode será exibido: (1- Como Imagem, ou 2- No Terminal."),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre as opções 1 e 2"),
        required: true,
    },
];

export default promptQrcode;
