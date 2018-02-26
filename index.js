const { spawn } = require("child_process")

/**
 * Play an audio file using sox
 * @param {string} file full path to the file to play
 */
const play = file => new Promise((resolve, reject) =>
{
    const child = spawn("play", [ file ])

    child.once("error", reject)
    child.once("close", resolve)
})

/**
 * Synthesize audio using picoTTS
 * @param {string} text text to synthesize
 * @param {string} lang language of `text`: fr-FR, en-US
 */
const say = (text, lang) => new Promise((resolve, reject) =>
{
    const child = spawn("bash", [ __dirname + "/say.sh", text, lang ])

    child.once("error", reject)
    child.once("close", resolve)
})


// TODO: auto format number into % string
/**
 * Change playback volume by a percentage
 * @param {string} change volume change ex `+2%`, `-25%`
 */
const volume = change => new Promise((resolve, reject) =>
{
    const child = spawn("pactl", [ "set-sink-volume", "@DEFAULT_SINK@", change ])

    child.once("error", reject)
    child.once("close", resolve)
})

module.exports = {
    play,
    say,
    volume,
}
