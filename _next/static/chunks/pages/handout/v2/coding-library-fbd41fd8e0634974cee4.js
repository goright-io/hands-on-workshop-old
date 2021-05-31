_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"5ZGu":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n("rePB"),r=n("Ff2n"),i=(n("q1tI"),n("7ljp")),a=n("LRTk");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={title:"Coding the library",path:"v2"},p={meta:l},b=a.a;function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(b,c(c(c({},p),n),{},{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As a developer, you are working on ",Object(i.b)("strong",{parentName:"p"},"version 1")," of your library. You\nalready have a product and it is functioning (kind of). But the interface\nthere is not componentized. Let's fix it."),Object(i.b)("p",null,"By this time, you should already have a list of components to implement, aligned with\nyour team.\n",Object(i.b)("strong",{parentName:"p"},"At this step, your final goal is to create a set of components for your\nfuture product"),". Focus on the Storybook, don't change the product yet.\nHowever, you can copy-paste the styles from the product."),Object(i.b)("h2",null,"Updating design tokens"),Object(i.b)("p",null,"If you want to sync with the design library, build Figma tokens.\nYou will use in components and product pages.\nThe tokens are exported from Figma in one click with\n",Object(i.b)("a",c({parentName:"p"},{href:"https://github.com/lukasoppermann/design-tokens"}),"Design Tokens plugin"),". Once\nyou got ",Object(i.b)("inlineCode",{parentName:"p"},"design-tokens.json")," file from your designer, put it to\n",Object(i.b)("inlineCode",{parentName:"p"},"design-system/tokens/design-tokens.json"),"."),Object(i.b)("h3",null,"Under the tokens' hood"),Object(i.b)("p",null,"The exported is not very convenient for development, so we process\nit with the help of ",Object(i.b)("a",c({parentName:"p"},{href:"https://amzn.github.io/style-dictionary/"}),"Style Dictionary"),".\nYou can see the result in ",Object(i.b)("inlineCode",{parentName:"p"},"design-system/src/tokens/dist/"),". These are the\nthe files that will be imported into the components. You don't have to change\nanything there, but it is good to know how\nthese things work."),Object(i.b)("h2",null,"Adding new component"),Object(i.b)("p",null,"Quickly add component template files:"),Object(i.b)("pre",null,Object(i.b)("code",c({parentName:"pre"},{}),"yarn add-component <ComponentName>\n")),Object(i.b)("p",null,"For example, if you run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn add-component CheckoutForm"),", a new folder with two new files will be created at ",Object(i.b)("inlineCode",{parentName:"p"},"design-system/src/components"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CheckoutForm/",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"index.js"),Object(i.b)("li",{parentName:"ul"},"CheckoutForm.stories.mdx")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),". When you add the component, it gets re-exported in the library index file,\nwhich is ",Object(i.b)("inlineCode",{parentName:"p"},"design-system/src/index.js"),". If you want to rename or remove a component,\ndon't forget also to change there."),Object(i.b)("h3",null,"What do I code?"),Object(i.b)("p",null,"Check ",Object(i.b)("a",c({parentName:"p"},{href:"https://component.gallery/"}),"https://component.gallery/")," to get ideas on how to fill your\ncomponent with code."),Object(i.b)("h2",null,"Creating visual references"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),". ",Object(i.b)("em",{parentName:"p"},"Creevey requires Docker to be installed.")),Object(i.b)("p",null,"To keep the system consistent, you should always provide visual references for your\ncomponents. This will make automatic testing work smoothly. This is how\nyou can do it:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run the testing UI with ",Object(i.b)("inlineCode",{parentName:"li"},"yarn test:creevey:ui")),Object(i.b)("li",{parentName:"ol"},"Run the tests and examine the results"),Object(i.b)("li",{parentName:"ol"},"Noticed the inconcistency? Fix and run the tests again."),Object(i.b)("li",{parentName:"ol"},"There is a change but you were expecting it? Approve.")),Object(i.b)("p",null,"If you created a new component, or visualy changed the existing one, it\nwill always go with the change of their visual references. Notice the changes\nfiles in ",Object(i.b)("inlineCode",{parentName:"p"},"design-system/tests/referenceImages"),", add them and commit. It is\na good habit to include your visual references in your pull request. And it\nensures the tests automation."))}u.isMDXComponent=!0},J8dU:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/handout/v2/coding-library",function(){return n("5ZGu")}])}},[["J8dU",0,1,2,3]]]);