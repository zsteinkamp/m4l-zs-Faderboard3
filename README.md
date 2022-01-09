# zs-Faderboard3

This is a Max For Live device that seeks to replicate the functionality of the Vestax Faderboard. This device came to my attention via [Hainbach's Video](https://www.youtube.com/watch?v=E1Kr0EJwZ-c), and I was intrigued by the idea that the primary interface to a sample would be a set of faders.

## Installation

Clone this repository, and drag the `zs-Faderboard3.amxd` device into a MIDI track in Ableton Live.

## Usage

The device needs an audio file to play, so you will need to either drag a file or an audio clip on to the section of the device labeled "Drop Audio Here".

Next, set the root note of the audio.

From there, you can move the faders to trigger playback of the audio at the pitch indicated above the fader.

You can also change the pan position of each voice with the horizontal slider below each fader.

## TODO

* Implement loop start/end points (with the possibility of reverse if start > end).
* Add optional looping.
* Musical scale presets.

## Contributing

I'd love it if others extended this device. If you would like to contribute, simply fork this repo, make your changes, and open a pull request and I'll have a look.
