---
title: "Sonifying IR spectroscopy data - 'chords'"
date: "2012-07-17"
tags:
  - supercollider
  - sonification
---

Finding the .resamp1 method in SuperCollider gave me an idea for reducing this rather large set of data into something perhaps more musically useful. Could I make something more like a tonal chord, with pitches repeated in every octave?

I first drastically resampled my data into just twelve points:

`f = ((f.flop[1] * -1) + 1).resamp1(12);`

![](/blog/glycinechord.png "glycinechord")

These would then be the probabilities of those twelve pitch classes appearing across a range of eight and a half octaves:

`f = (f++f++f++f++f++f++f++f++f[..7]); // 104 notes`

![](/blog/bigglycinechord.png "bigglycinechord")

Then what I did was to multiply this chordal structure by the original data, so that my final sound is the 'glycine chord' amplitude modulated (sort of) by the absorbtion data.

![](/blog/glycine02.png "glycine02")

Here's the final code:

```supercollider

( ~name = "glycine"; ~path = Document.current.dir.asString++"/"++ ~name ++".csv"; f = CSVFileReader.readInterpret(~path);
g = f;

f = ((f.flop[1] * -1) + 1).resamp1(12);
f = (f++f++f++f++f++f++f++f++f[..7]);
// 104 notes  g = ((g.flop[1] * -1) + 1).resamp1(104);
// 104 samples of orig graph  ~amps = f.cubed * g;
// combining two approaches ~amps = ~amps.normalize;
~amps.plot(~name, Rect(840,0,600,450)); 
~freqs = (25..128).midicps;

{ Splay.ar(Klank.ar(`[~freqs, ~amps, nil], PinkNoise.ar(0.01))) }.play; )

```

I used this approach to make the sound below, which crossfades from glycine to tyrosine to water, then back to glycine again.

<iframe width="100%" height="600" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/52370172&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

