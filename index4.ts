import {execFile} from 'node:child_process';
import {promisify} from 'node:util';

const pExecFile = promisify(execFile);

const result = await pExecFile('bun', ['run', 'dev']);
