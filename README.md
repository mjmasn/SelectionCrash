# React Native `TextInput` selection issues

**Update:** Possible workaround: https://github.com/mjmasn/SelectionCrash/pull/1

Repro steps:

1. Clone this repo
2. Run `yarn`
3. Run `yarn start` and `npx react-native run-android`
4. Type in the text box
5. You'll see that the selection is all over the place while typing, causing letters to be inserted in the wrong location
6. You'll see that pressing backspace from the end of the text crashes the app

You can tap the emojis to insert one at the current cursor position. The emojis are not really relevant to the issue, but just to show something similar to our use case where we have an emoji picker and a mentions library that can insert text and modify the selection.
