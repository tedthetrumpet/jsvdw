---
title: "Working on a new piece"
date: "2012-01-30"
tags:
  - supercollider
---

Here's how composing looks to me at the moment:

![](/blog/bass.png "bass")

```supercollider
(
a=[46!5,39!4,41!4,36!3,44!3,43!2,37!2,38,42].flat;
Pbind(\midinote, Pstutter(
Pwhite(5,17,inf), //min max number repeated notes
Pxrand(a,10) //get 10 pitches (actually 8???)
),
\dur, 0.25,
\legato, 0.5
).play;
)


```