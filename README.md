# Vite (Rolldown) / React

This template provides a minimal setup to get React working in Vite with HMR.
It also include minimal setup for [Layed Architecture](https://whimsical.com/frontend-client-Y1bf92fMPRe9KufWDWT1tC) (View -> UI Layer -> DataLayer)
where reactivity is not lost and is provided by MobX.

MobX gives us freedom not to use useless wrappers like in Jotai, Zustand and
other inefficient tools. Just think about the data as if it was plain Vanilla Js.
The only downside of using MobX is `makeAutoObservable` (or similar) calls for the data.
This is the current state of the art in react world and I didn't see anywhere that
better is possible. In more advanced frameworks like `Vue` we got `reactive` built-in
which makes entire reactivity work just in one place when you initialize
`reactive(new Store())` or `reactive(new UILayer())`.

# Running

Just do `pnpm dev` in the project root.

# Showcase

On index page you can find quick demonstration that this setup is working and
provides much more efficient and plain ways of controlling and organizing data
or business logic.

### Simple reactivity (Counter)

Currently there is only one demo case presented. Simple counter with button
that increments the number.
