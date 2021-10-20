import { App} from './config/index';

async function main() {
    const app = new App(7000);
    await app.listen();
}

main();