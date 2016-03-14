# Responsive-timeline
Create a GreenSock Timeline able to refresh itself on page resizing.

It is necessary to include GSAP on your page. [http://greensock.com](http://greensock.com)

## Install

```sh
bower install responsive-timeline
```

## Use

```javascript
var timeline = responsiveTimeline(function(timeline) {
  timeline
    .to(elm, 1, {x: window.innerWidth});
});
```

```javascript
var timeline = responsiveTimeline({yoyo: true, repeat: -1}, function(timeline) {
  timeline
    .to(elm, 1, {x: window.innerWidth});
});
```
