import mustache from 'mustache';
import { readFile, writeFileSync } from 'fs';

const ReadmeMustacheTemplate = './main.mustache';
const DATA = {};

// Refresh date
const now = new Date();
const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
};

DATA.refresh_date = now.toLocaleDateString('en-US', options);

async function generateReadMe() {
  await readFile(ReadmeMustacheTemplate, (err, data) => {
    if (err) throw err;
    const output = mustache.render(data.toString(), DATA);
    writeFileSync('README.md', output);
  });
}

async function action() {
  //  Other functions if required.
  /**
   * Generate README
   */
  await generateReadMe();
}

action();
