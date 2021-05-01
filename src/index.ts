import {Command, flags} from '@oclif/command'
import fs = require('fs')

class GovernessCli extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    spec: flags.string({char: 's', description: 'Filepath of the openAPI spec'}),
    // // flag with no value (-f, --force)
    // force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(GovernessCli)
    const spec = flags.spec!

    try {
      const data = fs.readFileSync(spec, 'utf8');
      this.log(data);
    }
    catch (err) {
      this.log(err);
    }

    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}

export = GovernessCli
