import * as core from '@actions/core'
import * as exec from '@actions/exec'
import fs from 'fs'

async function run(): Promise<void> {
    try {
        const image = core.getInput('image')
        const config = core.getInput('config')

        if (configFile && !fs.existsSync(configFile)) {
            core.setFailed(`Dive configuration file ${config} doesn't exist!`)
            return
        }

        const dive = 'wagoodman/dive:v0.9.2'

        const runOptions = [
          '-e',
          'CI=true',
          '-e',
          'DOCKER_API_VERSION=1.37',
          '--rm',
          '-v',
          '/var/run/docker.sock:/var/run/docker.sock'
        ]

        const cmdOptions = []

        if (config) {
          runOptions.push('-v', `${config}:/.dive-ci`)
          cmdOptions.push('--config-file', '/.dive-ci')
        }

        await exec.exec('docker', ['pull', dive])

        const parameters = ['run', ...runOptions, diveImage, image, ...cmdOptions]

        // TODO Process output - https://github.com/yuichielectric/dive-action/blob/c4fc3636a0bc38cdc9a8ddcd2665affa59a6e732/src/main.ts#L80

        const exitCode = await exec.exec('docker', parameters, execOptions)
        if (exitCode === 0) {
          // success
          return
        }
        core.setFailed(`Scan failed (exit code: ${exitCode})`)
    } catch (error) {
        core.setFailed(error.message);
    }
}

run()