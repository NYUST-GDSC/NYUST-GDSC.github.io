// you can see more info at https://github.com/tschaub/gh-pages
import path from 'path';
import ghpages from 'gh-pages';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/NYUST-GDSC/NYUST-GDSC.github.io.git' // project github repo
};
console.log('Current working directory:', process.cwd());

const callback = err => {
    if (err) {
        console.error(err);
    } else {
        console.log('publish success');
    }
};

ghpages.publish(path.join(process.cwd(),  '/dist'), options, callback);
