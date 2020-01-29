'use strict';

const fs = require('fs');
import { Selector } from 'testcafe';

let config;

fs.readFile('config.json', (err, data) => {
    if (err) throw err;
    config = JSON.parse(data);
});

fixture('bplaced.net :)').page('https://bplaced.net');

test('Log In bplaced.net', async t => {
    await t.wait(1000).click(Selector('.cellstyle.menu_link.whitetext.boldtext.menu_link_login'));
    await t.typeText(Selector('.hub_row_input.input_blue.bigtext17').withAttribute('name', 'credentials_user'), config.username)
        .wait(2000)
        .typeText(Selector('.hub_row_input.input_blue.bigtext17').withAttribute('name', 'credentials_pass'), config.password)
        .wait(2500)
        .click(Selector('.button.button_action.bigtext17').withExactText('Login'));
});
