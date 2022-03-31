# Nautable

## Routes

- [Home](http://localhost:3869) &rarr; for NICK (index.js)
- [Search general](http://localhost:3869/search) &rarr; for NICK (search.js)
- [Country](http://localhost:3869/s/deutschland)
- [Region](http://localhost:3869/s/deutschland/mecklenburgische-seenplatte)
- [Location](http://localhost:3869/s/deutschland/mecklenburgische-seenplatte/mueritz)
- [Boat](http://localhost:3869/b/12-gruno-marco-860-ak) &rarr; for NICK (b/[slug].js)

## What to do?

Rebuild a copy of 3 zizoo.com pages:

1. Home [SEE IMAGE](docs/z1.png)
2. Search [SEE IMAGE](docs/z2.png)
3. Boat page [SEE IMAGE](docs/z3.png)

## Requirements

- NextJS
- Tailwind
- Reusable components
- Icons as SVG image in filesystem but INLINED
- Carefully look at mobile layout

### Index

Search form just fill real states to redirect to search with params in URL.

Slider should be an almost "nojs" slider. Please have a look at zizoo.com. Looks like a grid where the buttons below
translate the x of the grid. Mobile just scrolling left right. Pretty nice!

Data should be fetched via "api". This "api" should for now only return raw json data. Have a look at "reviews". Just
plain data as there does not exist a real api yet.

Please to the same for top destinations, reviews, sliders, search input (where the user wants to travel to)

### Search

[SEE IMAGE](docs/z2.png)

### Boat Page

[SEE IMAGE](docs/z3.png)

## Notice

DateRangePicker should "almost" look like the one on zizoo. Please be patient on mobile. User Experience on mobile is
important so the picker should feel pretty usable and intuitive like zizoo's one.

## Important

All that currently exist can be modified! If you dont like the "api" style change it!. Header, footer, other components
that I already copied have to be "tidied up". SVGs excluded. Maybe some mistakes have to be corrected.

`yarn build && yarn start` should work after all and no eslint errors should be detected anymore
