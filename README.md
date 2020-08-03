# poor-text-editor

I have to say that the challenge was pretty hard to me as I never have implemented before rich text editors.
It was interesting and I have learned a lot from this topic. The most often advice I have read in different articles "Don't do this. Take one of the existing solutions". :D

Unfortunately commits' time doesn't represent the real time I spent on test task. I took time to time between commits long pauses. In sum it was around 6 hours.

## How to run
**Do you have `node` and `yarn` installed?**
You know what to do, if not.

**Run and play.**
`yarn && yarn start`

**You wanna see if tests are not failing?**
Then `yarn test`

Btw, old good `npm` is just fine.

## What is implemented:
- change caret position by clicking on text
- change caret position by arrow left/right
- typing
- deleting
- rendering result with preexisting formatting
- support of several carets to be rendered, but no UI imeplementation is done
- inserting/deleting part of text from outside by event

## What is not
- dynamic changing of styling position when user types. So if you type before `bold` text you will how it applies to the same position.
- applying style
- selection part of the text
- creating a new section from UI or keyboard
- removing a section
- joining sections when hit backspace on 1 char in section
- nice UI. I took a tailwind to implement something nice, but was more concentrated on the functionality rater than UI. It would took additional 1-2 hour to make it look good. (I wouldn't recommend tailwindcss though. It's ugly and non-maintainable approach)


## The Caret
My initial idea was to use `contendEditable` where I prevent almost all events + own formatting model. But as was discuss this is not an option and I have to implement editor without using any `contentEditable`.

Then I was thinking about hidden textarea and sync everythin with content in the div. This probably the best solution here as you will get typing/arrow navigation/selection right out of the box. But in order to make it work and make it consistent (sync states of 2 elements will be hard as a lot of stuff going around) would take probably a lot more that 6 hours.

So the last idea was just using simple div and try to implement caret movements, typing and so on. It was super hard to understand where user just have clicked and Selection and Range api doesn't provide you with that information out of the box and you have to do some calculcations. I cheated here. I keep the text as a pure `string` in the Model, but when I render I render every symbol in it's own `span`. So this gives a nice way to detect where the click has happened.

## The Section
Every paragraph is represented by Section model. The Model consist of `id`, `text` and `formatting` fields. Text is just a pure string, and all magic happens in formatting. So, whenever user apply any styling to the section we keep this information in formatting as an object with range in sybmols and a type of formatting.

As an example:
```js
{
  formatting: [
    {
      type: 'bold',
      start: 10,
      end: 20
    }
  ]
}
```

I tried to apply TDD but this didn't work out as the overal time would be much bigger that 6hrs then or I wouldn't implement some basic functionality. So I just covered some of the functionality.

## Problems
### Bugs?
There are.

### when many users work on the same document simultaneously
Biggest challenge here is to write a nice diff algo. Sometimes users can over-write each other.

### when the document becomes very large
Even though the current implementation re-render only changed dom section, we will run in to a perf problem when the section is huge. As you remember we have every symbol rendered in span. So re-rendering will be a bottleneck here.

### when you add more formatting options like italics and font properties, or objects like embedded images, tables etc
Italic is already supported, actually. Addint another styles shouldn't be a challenge as every span in the range will have it's own class name. If I took another approcah and render real tags like `<b>, <i>` it would be much harder to apply stylings and the resulted string would be constantly changing and finding right symbols could be a challenge.
Putting and image will require just creating a new section with image there.
Tables are harder of course.

### Cross-device support
Current implementation will probably not work on mobile devices, as keyboard won't be shown when user clicks on text, as this is not a real textarea. This could be done by introducing a hidden textarea, but as I stated before this approach could take much longer than 6 hours.

## Reference List
I have read following articles before starting a test:
- https://medium.engineering/why-contenteditable-is-terrible-122d8a40e480
- https://medium.com/content-uneditable/contenteditable-the-good-the-bad-and-the-ugly-261a38555e9c
- https://sudonull.com/post/10550-Text-editor-this-is-not-your-highest-mathematics-then-you-have-to-think
- https://ckeditor.com/blog/Lessons-learned-from-creating-a-rich-text-editor-with-real-time-collaboration/
