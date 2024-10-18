# zs-Faderboard3

This is a Max For Live device that seeks to replicate the functionality of the Vestax Faderboard. This device came to my attention via [Hainbach's Video](https://www.youtube.com/watch?v=E1Kr0EJwZ-c), and I was intrigued by the idea that the primary interface to a sampler would be a set of faders.

Overall, this is an 10-voice pitched sample-playback device. The sample is triggered for a voice when that voice's fader is moved off of its `-inf Db` position. As long as the fader is above "silent" then the sample will play/loop, with volume controlled by the fader. The sample loop start/end point is controlled globally, and if the start comes after the end, then the loop plays backward.

Each voice's pitch and pan position is controlled independently. The pitch played is relative to the global Sample Root.

![How it Looks](images/device.gif)

## Installation

[Download the newest .amxd file from the Releases page](https://github.com/zsteinkamp/m4l-zs-Faderboard3/releases) or clone this repository, and drag the `zs-Faderboard3.amxd` device into a MIDI track in Ableton Live.

## Changelog

- 2024-10-16 [v3](https://github.com/zsteinkamp/m4l-zs-Faderboard3/releases/download/v3/zs-Faderboard3-v3.amxd) - Revamped UI to consume less space. Thanks `Jessin Boumaza` for the idea and mockups! Added "Octaves" mode.
- 2024-08-05 [v2](https://github.com/zsteinkamp/m4l-zs-Faderboard3/releases/tag/v2.2) - Major changes under-the-hood to fix CPU usage, add presets, add loop start/end swap, and fix bugs related to having multiple Faderboard instances in one set. Thanks [Mordio](https://www.youtube.com/@mordiomusic) for the interest and problem report!
- 2022-03-25 Release 1.0.0 - Big under-the-hood update. Remove MIDI note control (was annoying). Frozen releases.
- 2022-02-17 Add scale presets + Add individual channel outputs + MIDI note control + pays attention to Live's transport.
- 2022-02-15 De-Click control to avoid clicks at loop boundaries.
- 2022-01-16 Allow for multiple instances of the device in one Live Set.
- 2022-01-15 Proper Push / Push2 integration.
- 2022-01-11 touchOSC definition file (zs-Faderboard3.tosc)
- 2022-01-10 Bugfix for mono files, Restart All button
- 2022-01-09 Implement loop start/end points (with the possibility of reverse if start > end).
- 2022-01-08 Initial release

## Usage

The device needs an audio file to play, so you will need to drag a file or an audio clip onto the section of the device labeled "Drop Audio Here".

Next, set the root note of the sample.

From there, you can move the faders to trigger playback of the audio at the pitch indicated above the fader.

Each voice can have its own pitch, or you can use the row of buttons across the top to set a scale. The choices correspond with what was on the original Faderbard, with the addition of "5ths" which is something I like. When you have a scale preset selected, only the first voice's pitch control has any effect.

You can also change the pan position of each voice with the horizontal slider below each fader.

To make fine adjustments of the loop points, hold down `Shift` while moving the knobs.

The "All Off" button will return all faders to the `-inf Db` position.

The "Restart All" button will force all playing loops to jump back to the beginning of the loop and continue playing.

The "Fade" knob will apply a fade at the beginning and end of the loop. The 100% setting can be interesting.

## Multi-Channel Output

The first two channels of the device's output are the stereo mix. It also has 10 additional pairs of outputs -- one for each voice. This allows you to process each voice independently, which opens a lot of creative doors.

To use the individual outputs, create an Audio track, set its monitoring mode to "In", and set its input to the Faderboard track, with the specific output selected. For example, output channels 3/4 correspond to Faderboard Voice 1, since output channels 1/2 are the stereo mix.

This image shows two audio tracks, outputting audio from Faderboard voices 1 and 2 respectively.

![Individual Channels](images/multichannel.png)

## Attention to Detail

- Works with any well designed theme.
- Good Push / Push2 integration.
- Includes a touchOSC device definition file.
- Fully automatable, with sensible and consistent automation names.

## TODO

- Timestretch control (global? per-voice?)
- Use Ableton global scale instead of Faderboard presets

## Contributing

I'd love it if others extended this device. If you would like to contribute, simply fork this repo, make your changes, and open a pull request and I'll have a look.
