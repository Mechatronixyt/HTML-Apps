
const c = new Audio ('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/C.wav')
const cs = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Cs.wav')
const d = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/D.wav')
const ds = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Ds.wav')
const e = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/E.wav')
const f = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002890/piano/F.wav')
const fs = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Fs.wav')
const g = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/G.wav')
const gs = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Gs.wav')
const a = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/A.wav')
const as = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/As.wav')
const b = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/B.wav')

function play (note) {
    if (note == C) {
        c.play()
        c.currentTime = 0;
    }
    else if (note == Cs) {
        cs.play();
        cs.currentTime = 0;
    }
    else if (note == D) {
        d.play();
        d.currentTime = 0;
    }
    else if (note == Ds) {
        ds.play();
        ds.currentTime = 0;
    }
    else if (note == E) {
        e.play();
        e.currentTime = 0;
    }
    else if (note == F) {
        f.play();
        f.currentTime = 0;
    }
    else if (note == Fs) {
        fs.play();
        fs.currentTime = 0;
    }
    else if (note == G) {
        g.play();
        g.currentTime = 0;
    }
    else if (note == Gs) {
        gs.play();
        gs.currentTime = 0;
    }
    else if (note == A) {
        a.play();
        a.currentTime = 0;
    }
    else if (note == As) {
        as.play();
        as.currentTime == 0;
    }
    else if (note == B) {
        b.play();
        b.currentTime == 0;
    }
}