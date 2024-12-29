import prompt from "prompt";
import promptQrcode from "../../prompts-schema/prompt.qrcode.js";
import handle from "./handle.js";

async function createQrcode() {
    prompt.get(promptQrcode, handle);

    prompt.start();
};

export default createQrcode;