"use strict";

(function(root, factory) {
  // AMD && CommonJS support
  if (typeof define === 'function' && define['amd']) {
    define(function() { return factory; });
  } else if (typeof module !== 'undefined' && module['exports']) {
    module['exports'] = factory;
  } else if (typeof root !== 'undefined') {
    root['responsiveTimeline'] = factory;
  }
})(this, function() {
  if (typeof window.TimelineMax === 'function') {
    var config = typeof arguments[0] === 'object' ? arguments[0] : null,
        build = config ? arguments[1] : arguments[0];

    var timeline = new window.TimelineMax(config || {});

    if (typeof build === 'function') {
      var refreshTimeline = function(timeline, build) {
        var progress = timeline.progress() || 0,
            isPaused = timeline.paused();

        if (!isPaused) {
          timeline.pause();
        }

        timeline.getChildren(true, true, false).forEach(function(tween) {
          window.TweenMax.set(tween.target, {clearProps: 'all'});
        });

        timeline.clear(true);
        build(timeline);
        timeline.progress(progress);

        if (!isPaused) {
          timeline.resume();
        }

        return timeline;
      };

      build(timeline);

      timeline.refresh = function() {
        refreshTimeline(timeline, build);
      };

      window.addEventListener('resize', timeline.refresh, false);
    }

    return timeline;   
  } else {
    console.error('GSAP TimelineMax not found');
  }
});
