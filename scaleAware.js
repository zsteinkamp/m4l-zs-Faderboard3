inlets = 1;
outlets = 1;
autowatch = true;

var state = {
  startNote: 60,
  scaleAware: 1,
  noteIncr: 1
}

var scaleMeta = {
  notes: [],
  watchers: {
    root: null,
    int: null,
    mode: null,
  }
};


function updateScales() {
  if (!scaleMeta.watchers.root || !state.startNote) {
    return;
  }
  if (!state.scaleAware) {
    var outNotes = [];
    for (var i = 0; i < 10; i++) {
      var candidateNote = state.startNote + (state.noteIncr * i)
      if (candidateNote >= 0 && candidateNote <= 127) {
        outNotes.push(candidateNote)
      }
    }
    //post('OUTNOTES: ' + outNotes.join(","));
    outlet(0, 'scaleNotes', outNotes);
    return;
  }

  var api = new LiveAPI('live_set');
  var root = api.get('root_note');
  var intervals = api.get('scale_intervals');
  scaleMeta.notes = [];

  var root_note = root - 12;
  var note = root_note;

  while (note <= 127) {
    for (var i = 0; i < intervals.length; i++) {
      var interval = intervals[i];
      note = root_note + interval;
      if (note >= 0 && note <= 127) {
        scaleMeta.notes.push(note);
      }
    }
    root_note += 12;
    note = root_note;
  }

  var rootIdx = -1;
  var tryNote = state.startNote;
  while (rootIdx < 0 && tryNote >= 0) {
    rootIdx = scaleMeta.notes.indexOf(tryNote)
    if (rootIdx < 0) {
      tryNote -= 1;
    }
  }
  if (rootIdx < 0) {
    // error
    post('Error: No index for ' + tryNote + '\n');
    return;
  }
  var outArr = []
  for (var i = 0; i < 10; i++) {
    var note = scaleMeta.notes[rootIdx + (i * state.noteIncr)]
    if (note) {
      outArr.push(Math.max(0, Math.min(127, note)));
    }
  }
  outlet(0, 'scaleNotes', outArr);
}

function noteIncr(val) {
  state.noteIncr = val;
  updateScales();
}

function scaleAware(val) {
  state.scaleAware = val;
  updateScales();
}

function startNote(noteNum) {
  state.startNote = noteNum;
  updateScales();
}

function init() {
  if (!scaleMeta.watchers.root) {
    scaleMeta.watchers.root = new LiveAPI(updateScales, 'live_set')
    scaleMeta.watchers.root.property = 'root_note'

    scaleMeta.watchers.int = new LiveAPI(updateScales, 'live_set')
    scaleMeta.watchers.int.property = 'scale_intervals'

    scaleMeta.watchers.mode = new LiveAPI(updateScales, 'live_set')
    scaleMeta.watchers.mode.property = 'scale_mode'
  }
}

post('Reloaded scaleAware.js\n');
