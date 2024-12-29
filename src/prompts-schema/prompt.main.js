import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.blue("Escolha a ferramenta, (1 - QRCODE ou 2 - SENHA)"),
        pattern : /^[1-2]+$/,
        message: chalk.red("Escolha apenas a opção 1 ou 2."),
        required: true,
    },
];

export default mainPrompt;