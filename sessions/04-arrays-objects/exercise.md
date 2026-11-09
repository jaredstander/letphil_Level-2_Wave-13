# Session 04 — exercise

_Due before the next session._

### 1. Parsons

```js
const weather = {
  city: "Lisbon",
  days: [
    { date: "Mon", condition: "Sunny" },
    { date: "Tue", condition: "Cloudy" },
  ],
};
```

Goal output: `Cloudy` — one step per line.

```
A   const days = weather.days;
B   const tuesday = days[1];
C   console.log(tuesday.condition);
X   console.log(days.condition);
Y   const tuesday = days[2];
```

### 2. Modify

> Add a function to your Make task that takes one object and **changes** it — for example, `markFavourite(song)` sets `isFavourite` to `true`. It shouldn't return anything.
>
> Before running it, predict: after `markFavourite(songs[2])`, what's `songs[2].isFavourite`?
>
> Then run it, and write one sentence: **why did this work, when `f(x)` in today's warm-up didn't change `x`?**

---

**Submit in `#lvl-2-homework-or-exercise-subm` before the next session.**

Stuck? _"I got stuck at \_\_\_ and here's what I tried"_ is a great question — post it.
