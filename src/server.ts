import { App} from './config/index';

async function main() {
    const app = new App(8000);
    await app.listen();
}

main();