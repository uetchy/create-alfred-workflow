#!/usr/bin/env node

import {resolve} from 'path';
import {create} from 'create-whatever';

const caveat = `
$ make link - Link your workflow to Alfred.
$ make unlink - Unlink your workflow from Alfred.
$ make package - Create .alfredworkflow package for the production release.
`;

create('create-alfred-workflow', {
  templateRoot: resolve(__dirname, '../templates'),
  caveat,
  extra: {
    bundle_id: {
      type: 'input',
      describe: 'Alfred Workflow Bundle ID',
      prompt: 'if-no-arg',
    },
    webaddress: {
      type: 'input',
      describe: 'Website URL',
      prompt: 'if-no-arg',
    },
  },
});
