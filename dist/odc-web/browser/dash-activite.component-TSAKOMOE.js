import {
  BaseComponent,
  BgEvent,
  ContentContainer,
  DateComponent,
  DateProfileGenerator,
  DayCellContainer,
  DayHeader,
  DaySeriesModel,
  DayTableModel,
  ElementDragging,
  ElementScrollController,
  Emitter,
  EventContainer,
  EventImpl,
  FullCalendarComponent,
  FullCalendarModule,
  Interaction,
  MoreLinkContainer,
  NowIndicatorContainer,
  NowTimer,
  PositionCache,
  RefMap,
  ScrollController,
  Scroller,
  SegHierarchy,
  SimpleScrollGrid,
  Slicer,
  Splitter,
  StandardEvent,
  ViewContainer,
  ViewContextType,
  WeekNumberContainer,
  WindowScrollController,
  _,
  addDays,
  addDurations,
  addMs,
  addWeeks,
  allowContextMenu,
  allowSelection,
  applyMutationToEventStore,
  applyStyle,
  asRoughMs,
  binarySearch,
  buildEntryKey,
  buildEventApis,
  buildEventRangeKey,
  buildIsoString,
  buildNavLinkAttrs,
  buildSegTimeText,
  compareNumbers,
  computeEarliestSegStart,
  computeInnerRect,
  computeRect,
  config,
  constrainPoint,
  createDuration,
  createEmptyEventStore,
  createFormatter,
  createPlugin,
  d,
  diffDates,
  diffDays,
  diffPoints,
  diffWeeks,
  disableCursor,
  elementClosest,
  enableCursor,
  formatDayString,
  formatIsoMonthStr,
  formatIsoTimeString,
  getClippingParents,
  getDateMeta,
  getDayClassNames,
  getElSeg,
  getEntrySpanEnd,
  getEventTargetViaRoot,
  getRectCenter,
  getRelevantEvents,
  getSegAnchorAttrs,
  getSegMeta,
  getStickyFooterScrollbar,
  getStickyHeaderDates,
  getUniqueDomId,
  groupIntersectingEntries,
  hasBgRendering,
  hasCustomDayCellContent,
  identity,
  injectStyles,
  interactionSettingsStore,
  interactionSettingsToStore,
  intersectRanges,
  intersectRects,
  intersectSpans,
  isDateSelectionValid,
  isDateSpansEqual,
  isInteractionValid,
  isMultiDayRange,
  isPropsEqual,
  mapHash,
  memoize,
  multiplyDuration,
  pointInsideRect,
  preventContextMenu,
  preventSelection,
  rangeContainsMarker,
  rangeContainsRange,
  removeElement,
  renderFill,
  renderScrollShim,
  setRef,
  sliceEventStore,
  sortEventSegs,
  startOfDay,
  triggerDateSelect,
  whenTransitionDone,
  wholeDivideDurations,
  y
} from "./chunk-N2JNPUUS.js";
import {
  ToastrService
} from "./chunk-ZAPBGQMS.js";
import {
  NgbModal
} from "./chunk-OTYE7C6R.js";
import {
  GlobalService
} from "./chunk-MSIIP23R.js";
import {
  RouterLink
} from "./chunk-M24KWC6L.js";
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators
} from "./chunk-E4RPKPFV.js";
import "./chunk-OFRCR7EK.js";
import {
  BehaviorSubject,
  Component,
  DatePipe,
  HttpClient,
  HttpHeaders,
  Injectable,
  ViewChild,
  catchError,
  formatDate,
  setClassMetadata,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-FZBB7M2N.js";
import "./chunk-KBUIKKCC.js";

// src/app/calendar/calendar.model.ts
var Calendar = class {
  constructor(calendar) {
    {
      this.id = calendar.id || this.getRandomID();
      this.title = calendar.title || "";
      this.category = calendar.category || "";
      this.startDate = formatDate(/* @__PURE__ */ new Date(), "yyyy-MM-dd", "en") || "";
      this.endDate = formatDate(/* @__PURE__ */ new Date(), "yyyy-MM-dd", "en") || "";
      this.details = calendar.details || "";
    }
  }
  getRandomID() {
    const S4 = () => {
      return (1 + Math.random()) * 65536 | 0;
    };
    return S4() + S4();
  }
};

// node_modules/@fullcalendar/daygrid/internal.js
var TableView = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.headerElRef = d();
  }
  renderSimpleLayout(headerRowContent, bodyContent) {
    let {
      props,
      context
    } = this;
    let sections = [];
    let stickyHeaderDates = getStickyHeaderDates(context.options);
    if (headerRowContent) {
      sections.push({
        type: "header",
        key: "header",
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: headerRowContent
        }
      });
    }
    sections.push({
      type: "body",
      key: "body",
      liquid: true,
      chunk: {
        content: bodyContent
      }
    });
    return y(ViewContainer, {
      elClasses: ["fc-daygrid"],
      viewSpec: context.viewSpec
    }, y(SimpleScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      collapsibleWidth: props.forPrint,
      cols: [],
      sections
    }));
  }
  renderHScrollLayout(headerRowContent, bodyContent, colCnt, dayMinWidth) {
    let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
    if (!ScrollGrid) {
      throw new Error("No ScrollGrid implementation");
    }
    let {
      props,
      context
    } = this;
    let stickyHeaderDates = !props.forPrint && getStickyHeaderDates(context.options);
    let stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(context.options);
    let sections = [];
    if (headerRowContent) {
      sections.push({
        type: "header",
        key: "header",
        isSticky: stickyHeaderDates,
        chunks: [{
          key: "main",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: headerRowContent
        }]
      });
    }
    sections.push({
      type: "body",
      key: "body",
      liquid: true,
      chunks: [{
        key: "main",
        content: bodyContent
      }]
    });
    if (stickyFooterScrollbar) {
      sections.push({
        type: "footer",
        key: "footer",
        isSticky: true,
        chunks: [{
          key: "main",
          content: renderScrollShim
        }]
      });
    }
    return y(ViewContainer, {
      elClasses: ["fc-daygrid"],
      viewSpec: context.viewSpec
    }, y(ScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      forPrint: props.forPrint,
      collapsibleWidth: props.forPrint,
      colGroups: [{
        cols: [{
          span: colCnt,
          minWidth: dayMinWidth
        }]
      }],
      sections
    }));
  }
};
function splitSegsByRow(segs, rowCnt) {
  let byRow = [];
  for (let i = 0; i < rowCnt; i += 1) {
    byRow[i] = [];
  }
  for (let seg of segs) {
    byRow[seg.row].push(seg);
  }
  return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
  let byCol = [];
  for (let i = 0; i < colCnt; i += 1) {
    byCol[i] = [];
  }
  for (let seg of segs) {
    byCol[seg.firstCol].push(seg);
  }
  return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
  let byRow = [];
  if (!ui) {
    for (let i = 0; i < rowCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (let i = 0; i < rowCnt; i += 1) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (let seg of ui.segs) {
      byRow[seg.row].segs.push(seg);
    }
  }
  return byRow;
}
var DEFAULT_TABLE_EVENT_TIME_FORMAT = createFormatter({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: true,
  meridiem: "narrow"
});
function hasListItemDisplay(seg) {
  let {
    display
  } = seg.eventRange.ui;
  return display === "list-item" || display === "auto" && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol && // can't be multi-day
  seg.isStart && // "
  seg.isEnd;
}
var TableBlockEvent = class extends BaseComponent {
  render() {
    let {
      props
    } = this;
    return y(StandardEvent, Object.assign({}, props, {
      elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
      defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT,
      defaultDisplayEventEnd: props.defaultDisplayEventEnd,
      disableResizing: !props.seg.eventRange.def.allDay
    }));
  }
};
var TableListItemEvent = class extends BaseComponent {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      seg
    } = props;
    let timeFormat = options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
    let timeText = buildSegTimeText(seg, timeFormat, context, true, props.defaultDisplayEventEnd);
    return y(EventContainer, Object.assign({}, props, {
      elTag: "a",
      elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"],
      elAttrs: getSegAnchorAttrs(props.seg, context),
      defaultGenerator: renderInnerContent,
      timeText,
      isResizing: false,
      isDateSelecting: false
    }));
  }
};
function renderInnerContent(renderProps) {
  return y(_, null, y("div", {
    className: "fc-daygrid-event-dot",
    style: {
      borderColor: renderProps.borderColor || renderProps.backgroundColor
    }
  }), renderProps.timeText && y("div", {
    className: "fc-event-time"
  }, renderProps.timeText), y("div", {
    className: "fc-event-title"
  }, renderProps.event.title || y(_, null, "\xA0")));
}
var TableCellMoreLink = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.compileSegs = memoize(compileSegs);
  }
  render() {
    let {
      props
    } = this;
    let {
      allSegs,
      invisibleSegs
    } = this.compileSegs(props.singlePlacements);
    return y(MoreLinkContainer, {
      elClasses: ["fc-daygrid-more-link"],
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      allDayDate: props.allDayDate,
      moreCnt: props.moreCnt,
      allSegs,
      hiddenSegs: invisibleSegs,
      alignmentElRef: props.alignmentElRef,
      alignGridTop: props.alignGridTop,
      extraDateSpan: props.extraDateSpan,
      popoverContent: () => {
        let isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {};
        return y(_, null, allSegs.map((seg) => {
          let instanceId = seg.eventRange.instance.instanceId;
          return y("div", {
            className: "fc-daygrid-event-harness",
            key: instanceId,
            style: {
              visibility: isForcedInvisible[instanceId] ? "hidden" : ""
            }
          }, hasListItemDisplay(seg) ? y(TableListItemEvent, Object.assign({
            seg,
            isDragging: false,
            isSelected: instanceId === props.eventSelection,
            defaultDisplayEventEnd: false
          }, getSegMeta(seg, props.todayRange))) : y(TableBlockEvent, Object.assign({
            seg,
            isDragging: false,
            isResizing: false,
            isDateSelecting: false,
            isSelected: instanceId === props.eventSelection,
            defaultDisplayEventEnd: false
          }, getSegMeta(seg, props.todayRange))));
        }));
      }
    });
  }
};
function compileSegs(singlePlacements) {
  let allSegs = [];
  let invisibleSegs = [];
  for (let placement of singlePlacements) {
    allSegs.push(placement.seg);
    if (!placement.isVisible) {
      invisibleSegs.push(placement.seg);
    }
  }
  return {
    allSegs,
    invisibleSegs
  };
}
var DEFAULT_WEEK_NUM_FORMAT = createFormatter({
  week: "narrow"
});
var TableCell = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.rootElRef = d();
    this.state = {
      dayNumberId: getUniqueDomId()
    };
    this.handleRootEl = (el) => {
      setRef(this.rootElRef, el);
      setRef(this.props.elRef, el);
    };
  }
  render() {
    let {
      context,
      props,
      state,
      rootElRef
    } = this;
    let {
      options,
      dateEnv
    } = context;
    let {
      date,
      dateProfile
    } = props;
    const isMonthStart = props.showDayNumber && shouldDisplayMonthStart(date, dateProfile.currentRange, dateEnv);
    return y(DayCellContainer, {
      elTag: "td",
      elRef: this.handleRootEl,
      elClasses: ["fc-daygrid-day", ...props.extraClassNames || []],
      elAttrs: Object.assign(Object.assign(Object.assign({}, props.extraDataAttrs), props.showDayNumber ? {
        "aria-labelledby": state.dayNumberId
      } : {}), {
        role: "gridcell"
      }),
      defaultGenerator: renderTopInner,
      date,
      dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      isMonthStart,
      extraRenderProps: props.extraRenderProps
    }, (InnerContent, renderProps) => y("div", {
      ref: props.innerElRef,
      className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
      style: {
        minHeight: props.minHeight
      }
    }, props.showWeekNumber && y(WeekNumberContainer, {
      elTag: "a",
      elClasses: ["fc-daygrid-week-number"],
      elAttrs: buildNavLinkAttrs(context, date, "week"),
      date,
      defaultFormat: DEFAULT_WEEK_NUM_FORMAT
    }), !renderProps.isDisabled && (props.showDayNumber || hasCustomDayCellContent(options) || props.forceDayTop) ? y("div", {
      className: "fc-daygrid-day-top"
    }, y(InnerContent, {
      elTag: "a",
      elClasses: ["fc-daygrid-day-number", isMonthStart && "fc-daygrid-month-start"],
      elAttrs: Object.assign(Object.assign({}, buildNavLinkAttrs(context, date)), {
        id: state.dayNumberId
      })
    })) : props.showDayNumber ? (
      // for creating correct amount of space (see issue #7162)
      y("div", {
        className: "fc-daygrid-day-top",
        style: {
          visibility: "hidden"
        }
      }, y("a", {
        className: "fc-daygrid-day-number"
      }, "\xA0"))
    ) : void 0, y("div", {
      className: "fc-daygrid-day-events",
      ref: props.fgContentElRef
    }, props.fgContent, y("div", {
      className: "fc-daygrid-day-bottom",
      style: {
        marginTop: props.moreMarginTop
      }
    }, y(TableCellMoreLink, {
      allDayDate: date,
      singlePlacements: props.singlePlacements,
      moreCnt: props.moreCnt,
      alignmentElRef: rootElRef,
      alignGridTop: !props.showDayNumber,
      extraDateSpan: props.extraDateSpan,
      dateProfile: props.dateProfile,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      todayRange: props.todayRange
    }))), y("div", {
      className: "fc-daygrid-day-bg"
    }, props.bgContent)));
  }
};
function renderTopInner(props) {
  return props.dayNumberText || y(_, null, "\xA0");
}
function shouldDisplayMonthStart(date, currentRange, dateEnv) {
  const {
    start: currentStart,
    end: currentEnd
  } = currentRange;
  const currentEndIncl = addMs(currentEnd, -1);
  const currentFirstYear = dateEnv.getYear(currentStart);
  const currentFirstMonth = dateEnv.getMonth(currentStart);
  const currentLastYear = dateEnv.getYear(currentEndIncl);
  const currentLastMonth = dateEnv.getMonth(currentEndIncl);
  return !(currentFirstYear === currentLastYear && currentFirstMonth === currentLastMonth) && Boolean(
    // first date in current view?
    date.valueOf() === currentStart.valueOf() || // a month-start that's within the current range?
    dateEnv.getDay(date) === 1 && date.valueOf() < currentEnd.valueOf()
  );
}
function generateSegKey(seg) {
  return seg.eventRange.instance.instanceId + ":" + seg.firstCol;
}
function generateSegUid(seg) {
  return generateSegKey(seg) + ":" + seg.lastCol;
}
function computeFgSegPlacement(segs, dayMaxEvents, dayMaxEventRows, strictOrder, segHeights, maxContentHeight, cells) {
  let hierarchy = new DayGridSegHierarchy((segEntry) => {
    let segUid = segs[segEntry.index].eventRange.instance.instanceId + ":" + segEntry.span.start + ":" + (segEntry.span.end - 1);
    return segHeights[segUid] || 1;
  });
  hierarchy.allowReslicing = true;
  hierarchy.strictOrder = strictOrder;
  if (dayMaxEvents === true || dayMaxEventRows === true) {
    hierarchy.maxCoord = maxContentHeight;
    hierarchy.hiddenConsumes = true;
  } else if (typeof dayMaxEvents === "number") {
    hierarchy.maxStackCnt = dayMaxEvents;
  } else if (typeof dayMaxEventRows === "number") {
    hierarchy.maxStackCnt = dayMaxEventRows;
    hierarchy.hiddenConsumes = true;
  }
  let segInputs = [];
  let unknownHeightSegs = [];
  for (let i = 0; i < segs.length; i += 1) {
    let seg = segs[i];
    let segUid = generateSegUid(seg);
    let eventHeight = segHeights[segUid];
    if (eventHeight != null) {
      segInputs.push({
        index: i,
        span: {
          start: seg.firstCol,
          end: seg.lastCol + 1
        }
      });
    } else {
      unknownHeightSegs.push(seg);
    }
  }
  let hiddenEntries = hierarchy.addSegs(segInputs);
  let segRects = hierarchy.toRects();
  let {
    singleColPlacements,
    multiColPlacements,
    leftoverMargins
  } = placeRects(segRects, segs, cells);
  let moreCnts = [];
  let moreMarginTops = [];
  for (let seg of unknownHeightSegs) {
    multiColPlacements[seg.firstCol].push({
      seg,
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let col = seg.firstCol; col <= seg.lastCol; col += 1) {
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  for (let col = 0; col < cells.length; col += 1) {
    moreCnts.push(0);
  }
  for (let hiddenEntry of hiddenEntries) {
    let seg = segs[hiddenEntry.index];
    let hiddenSpan = hiddenEntry.span;
    multiColPlacements[hiddenSpan.start].push({
      seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
      moreCnts[col] += 1;
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  for (let col = 0; col < cells.length; col += 1) {
    moreMarginTops.push(leftoverMargins[col]);
  }
  return {
    singleColPlacements,
    multiColPlacements,
    moreCnts,
    moreMarginTops
  };
}
function placeRects(allRects, segs, cells) {
  let rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
  let singleColPlacements = [];
  let multiColPlacements = [];
  let leftoverMargins = [];
  for (let col = 0; col < cells.length; col += 1) {
    let rects = rectsByEachCol[col];
    let singlePlacements = [];
    let currentHeight = 0;
    let currentMarginTop = 0;
    for (let rect of rects) {
      let seg = segs[rect.index];
      singlePlacements.push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: true,
        isAbsolute: false,
        absoluteTop: rect.levelCoord,
        marginTop: rect.levelCoord - currentHeight
      });
      currentHeight = rect.levelCoord + rect.thickness;
    }
    let multiPlacements = [];
    currentHeight = 0;
    currentMarginTop = 0;
    for (let rect of rects) {
      let seg = segs[rect.index];
      let isAbsolute = rect.span.end - rect.span.start > 1;
      let isFirstCol = rect.span.start === col;
      currentMarginTop += rect.levelCoord - currentHeight;
      currentHeight = rect.levelCoord + rect.thickness;
      if (isAbsolute) {
        currentMarginTop += rect.thickness;
        if (isFirstCol) {
          multiPlacements.push({
            seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
            isVisible: true,
            isAbsolute: true,
            absoluteTop: rect.levelCoord,
            marginTop: 0
          });
        }
      } else if (isFirstCol) {
        multiPlacements.push({
          seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
          isVisible: true,
          isAbsolute: false,
          absoluteTop: rect.levelCoord,
          marginTop: currentMarginTop
          // claim the margin
        });
        currentMarginTop = 0;
      }
    }
    singleColPlacements.push(singlePlacements);
    multiColPlacements.push(multiPlacements);
    leftoverMargins.push(currentMarginTop);
  }
  return {
    singleColPlacements,
    multiColPlacements,
    leftoverMargins
  };
}
function groupRectsByEachCol(rects, colCnt) {
  let rectsByEachCol = [];
  for (let col = 0; col < colCnt; col += 1) {
    rectsByEachCol.push([]);
  }
  for (let rect of rects) {
    for (let col = rect.span.start; col < rect.span.end; col += 1) {
      rectsByEachCol[col].push(rect);
    }
  }
  return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
  if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
    return seg;
  }
  let eventRange = seg.eventRange;
  let origRange = eventRange.range;
  let slicedRange = intersectRanges(origRange, {
    start: cells[spanStart].date,
    end: addDays(cells[spanEnd - 1].date, 1)
  });
  return Object.assign(Object.assign({}, seg), {
    firstCol: spanStart,
    lastCol: spanEnd - 1,
    eventRange: {
      def: eventRange.def,
      ui: Object.assign(Object.assign({}, eventRange.ui), {
        durationEditable: false
      }),
      instance: eventRange.instance,
      range: slicedRange
    },
    isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(),
    isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf()
  });
}
var DayGridSegHierarchy = class extends SegHierarchy {
  constructor() {
    super(...arguments);
    this.hiddenConsumes = false;
    this.forceHidden = {};
  }
  addSegs(segInputs) {
    const hiddenSegs = super.addSegs(segInputs);
    const {
      entriesByLevel
    } = this;
    const excludeHidden = (entry) => !this.forceHidden[buildEntryKey(entry)];
    for (let level = 0; level < entriesByLevel.length; level += 1) {
      entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
    }
    return hiddenSegs;
  }
  handleInvalidInsertion(insertion, entry, hiddenEntries) {
    const {
      entriesByLevel,
      forceHidden
    } = this;
    const {
      touchingEntry,
      touchingLevel,
      touchingLateral
    } = insertion;
    if (this.hiddenConsumes && touchingEntry) {
      const touchingEntryId = buildEntryKey(touchingEntry);
      if (!forceHidden[touchingEntryId]) {
        if (this.allowReslicing) {
          const hiddenEntry = Object.assign(Object.assign({}, touchingEntry), {
            span: intersectSpans(touchingEntry.span, entry.span)
          });
          const hiddenEntryId = buildEntryKey(hiddenEntry);
          forceHidden[hiddenEntryId] = true;
          entriesByLevel[touchingLevel][touchingLateral] = hiddenEntry;
          hiddenEntries.push(hiddenEntry);
          this.splitEntry(touchingEntry, entry, hiddenEntries);
        } else {
          forceHidden[touchingEntryId] = true;
          hiddenEntries.push(touchingEntry);
        }
      }
    }
    super.handleInvalidInsertion(insertion, entry, hiddenEntries);
  }
};
var TableRow = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.cellElRefs = new RefMap();
    this.frameElRefs = new RefMap();
    this.fgElRefs = new RefMap();
    this.segHarnessRefs = new RefMap();
    this.rootElRef = d();
    this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    };
    this.handleResize = (isForced) => {
      if (isForced) {
        this.updateSizing(true);
      }
    };
  }
  render() {
    let {
      props,
      state,
      context
    } = this;
    let {
      options
    } = context;
    let colCnt = props.cells.length;
    let businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
    let bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
    let highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
    let mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
    let {
      singleColPlacements,
      multiColPlacements,
      moreCnts,
      moreMarginTops
    } = computeFgSegPlacement(sortEventSegs(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.segHeights, state.maxContentHeight, props.cells);
    let isForcedInvisible = (
      // TODO: messy way to compute this
      props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {}
    );
    return y("tr", {
      ref: this.rootElRef,
      role: "row"
    }, props.renderIntro && props.renderIntro(), props.cells.map((cell, col) => {
      let normalFgNodes = this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
      let mirrorFgNodes = this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
      return y(TableCell, {
        key: cell.key,
        elRef: this.cellElRefs.createRef(cell.key),
        innerElRef: this.frameElRefs.createRef(cell.key),
        dateProfile: props.dateProfile,
        date: cell.date,
        showDayNumber: props.showDayNumbers,
        showWeekNumber: props.showWeekNumbers && col === 0,
        forceDayTop: props.showWeekNumbers,
        todayRange: props.todayRange,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        extraRenderProps: cell.extraRenderProps,
        extraDataAttrs: cell.extraDataAttrs,
        extraClassNames: cell.extraClassNames,
        extraDateSpan: cell.extraDateSpan,
        moreCnt: moreCnts[col],
        moreMarginTop: moreMarginTops[col],
        singlePlacements: singleColPlacements[col],
        fgContentElRef: this.fgElRefs.createRef(cell.key),
        fgContent: (
          // Fragment scopes the keys
          y(_, null, y(_, null, normalFgNodes), y(_, null, mirrorFgNodes))
        ),
        bgContent: (
          // Fragment scopes the keys
          y(_, null, this.renderFillSegs(highlightSegsByCol[col], "highlight"), this.renderFillSegs(businessHoursByCol[col], "non-business"), this.renderFillSegs(bgEventSegsByCol[col], "bg-event"))
        ),
        minHeight: props.cellMinHeight
      });
    }));
  }
  componentDidMount() {
    this.updateSizing(true);
    this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(prevProps, prevState) {
    let currentProps = this.props;
    this.updateSizing(!isPropsEqual(prevProps, currentProps));
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  getHighlightSegs() {
    let {
      props
    } = this;
    if (props.eventDrag && props.eventDrag.segs.length) {
      return props.eventDrag.segs;
    }
    if (props.eventResize && props.eventResize.segs.length) {
      return props.eventResize.segs;
    }
    return props.dateSelectionSegs;
  }
  getMirrorSegs() {
    let {
      props
    } = this;
    if (props.eventResize && props.eventResize.segs.length) {
      return props.eventResize.segs;
    }
    return [];
  }
  renderFgSegs(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
    let {
      context
    } = this;
    let {
      eventSelection
    } = this.props;
    let {
      framePositions
    } = this.state;
    let defaultDisplayEventEnd = this.props.cells.length === 1;
    let isMirror = isDragging || isResizing || isDateSelecting;
    let nodes = [];
    if (framePositions) {
      for (let placement of segPlacements) {
        let {
          seg
        } = placement;
        let {
          instanceId
        } = seg.eventRange.instance;
        let isVisible = placement.isVisible && !isForcedInvisible[instanceId];
        let isAbsolute = placement.isAbsolute;
        let left = "";
        let right = "";
        if (isAbsolute) {
          if (context.isRtl) {
            right = 0;
            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
          } else {
            left = 0;
            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
          }
        }
        nodes.push(y("div", {
          className: "fc-daygrid-event-harness" + (isAbsolute ? " fc-daygrid-event-harness-abs" : ""),
          key: generateSegKey(seg),
          ref: isMirror ? null : this.segHarnessRefs.createRef(generateSegUid(seg)),
          style: {
            visibility: isVisible ? "" : "hidden",
            marginTop: isAbsolute ? "" : placement.marginTop,
            top: isAbsolute ? placement.absoluteTop : "",
            left,
            right
          }
        }, hasListItemDisplay(seg) ? y(TableListItemEvent, Object.assign({
          seg,
          isDragging,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd
        }, getSegMeta(seg, todayRange))) : y(TableBlockEvent, Object.assign({
          seg,
          isDragging,
          isResizing,
          isDateSelecting,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd
        }, getSegMeta(seg, todayRange)))));
      }
    }
    return nodes;
  }
  renderFillSegs(segs, fillType) {
    let {
      isRtl
    } = this.context;
    let {
      todayRange
    } = this.props;
    let {
      framePositions
    } = this.state;
    let nodes = [];
    if (framePositions) {
      for (let seg of segs) {
        let leftRightCss = isRtl ? {
          right: 0,
          left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
        } : {
          left: 0,
          right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
        };
        nodes.push(y("div", {
          key: buildEventRangeKey(seg.eventRange),
          className: "fc-daygrid-bg-harness",
          style: leftRightCss
        }, fillType === "bg-event" ? y(BgEvent, Object.assign({
          seg
        }, getSegMeta(seg, todayRange))) : renderFill(fillType)));
      }
    }
    return y(_, {}, ...nodes);
  }
  updateSizing(isExternalSizingChange) {
    let {
      props,
      state,
      frameElRefs
    } = this;
    if (!props.forPrint && props.clientWidth !== null) {
      if (isExternalSizingChange) {
        let frameEls = props.cells.map((cell) => frameElRefs.currentMap[cell.key]);
        if (frameEls.length) {
          let originEl = this.rootElRef.current;
          let newPositionCache = new PositionCache(
            originEl,
            frameEls,
            true,
            // isHorizontal
            false
          );
          if (!state.framePositions || !state.framePositions.similarTo(newPositionCache)) {
            this.setState({
              framePositions: new PositionCache(
                originEl,
                frameEls,
                true,
                // isHorizontal
                false
              )
            });
          }
        }
      }
      const oldSegHeights = this.state.segHeights;
      const newSegHeights = this.querySegHeights();
      const limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
      this.safeSetState({
        // HACK to prevent oscillations of events being shown/hidden from max-event-rows
        // Essentially, once you compute an element's height, never null-out.
        // TODO: always display all events, as visibility:hidden?
        segHeights: Object.assign(Object.assign({}, oldSegHeights), newSegHeights),
        maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
      });
    }
  }
  querySegHeights() {
    let segElMap = this.segHarnessRefs.currentMap;
    let segHeights = {};
    for (let segUid in segElMap) {
      let height = Math.round(segElMap[segUid].getBoundingClientRect().height);
      segHeights[segUid] = Math.max(segHeights[segUid] || 0, height);
    }
    return segHeights;
  }
  computeMaxContentHeight() {
    let firstKey = this.props.cells[0].key;
    let cellEl = this.cellElRefs.currentMap[firstKey];
    let fcContainerEl = this.fgElRefs.currentMap[firstKey];
    return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
  }
  getCellEls() {
    let elMap = this.cellElRefs.currentMap;
    return this.props.cells.map((cell) => elMap[cell.key]);
  }
};
TableRow.addStateEquality({
  segHeights: isPropsEqual
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
  if (!mirrorSegs.length) {
    return [];
  }
  let topsByInstanceId = buildAbsoluteTopHash(colPlacements);
  return mirrorSegs.map((seg) => ({
    seg,
    isVisible: true,
    isAbsolute: true,
    absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function buildAbsoluteTopHash(colPlacements) {
  let topsByInstanceId = {};
  for (let placements of colPlacements) {
    for (let placement of placements) {
      topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
    }
  }
  return topsByInstanceId;
}
var TableRows = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.splitBusinessHourSegs = memoize(splitSegsByRow);
    this.splitBgEventSegs = memoize(splitAllDaySegsByRow);
    this.splitFgEventSegs = memoize(splitSegsByRow);
    this.splitDateSelectionSegs = memoize(splitSegsByRow);
    this.splitEventDrag = memoize(splitInteractionByRow);
    this.splitEventResize = memoize(splitInteractionByRow);
    this.rowRefs = new RefMap();
  }
  render() {
    let {
      props,
      context
    } = this;
    let rowCnt = props.cells.length;
    let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
    let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
    let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
    let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
    let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
    let eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
    let cellMinHeight = rowCnt >= 7 && props.clientWidth ? props.clientWidth / context.options.aspectRatio / 6 : null;
    return y(NowTimer, {
      unit: "day"
    }, (nowDate, todayRange) => y(_, null, props.cells.map((cells, row) => y(TableRow, {
      ref: this.rowRefs.createRef(row),
      key: cells.length ? cells[0].date.toISOString() : row,
      showDayNumbers: rowCnt > 1,
      showWeekNumbers: props.showWeekNumbers,
      todayRange,
      dateProfile: props.dateProfile,
      cells,
      renderIntro: props.renderRowIntro,
      businessHourSegs: businessHourSegsByRow[row],
      eventSelection: props.eventSelection,
      bgEventSegs: bgEventSegsByRow[row],
      fgEventSegs: fgEventSegsByRow[row],
      dateSelectionSegs: dateSelectionSegsByRow[row],
      eventDrag: eventDragByRow[row],
      eventResize: eventResizeByRow[row],
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      cellMinHeight,
      forPrint: props.forPrint
    }))));
  }
  componentDidMount() {
    this.registerInteractiveComponent();
  }
  componentDidUpdate() {
    this.registerInteractiveComponent();
  }
  registerInteractiveComponent() {
    if (!this.rootEl) {
      const firstCellEl = this.rowRefs.currentMap[0].getCellEls()[0];
      const rootEl = firstCellEl ? firstCellEl.closest(".fc-daygrid-body") : null;
      if (rootEl) {
        this.rootEl = rootEl;
        this.context.registerInteractiveComponent(this, {
          el: rootEl,
          isHitComboAllowed: this.props.isHitComboAllowed
        });
      }
    }
  }
  componentWillUnmount() {
    if (this.rootEl) {
      this.context.unregisterInteractiveComponent(this);
      this.rootEl = null;
    }
  }
  // Hit System
  // ----------------------------------------------------------------------------------------------------
  prepareHits() {
    this.rowPositions = new PositionCache(
      this.rootEl,
      this.rowRefs.collect().map((rowObj) => rowObj.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      false,
      true
    );
    this.colPositions = new PositionCache(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      // cell els in first row
      true,
      // horizontal
      false
    );
  }
  queryHit(positionLeft, positionTop) {
    let {
      colPositions,
      rowPositions
    } = this;
    let col = colPositions.leftToIndex(positionLeft);
    let row = rowPositions.topToIndex(positionTop);
    if (row != null && col != null) {
      let cell = this.props.cells[row][col];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({
          range: this.getCellRange(row, col),
          allDay: true
        }, cell.extraDateSpan),
        dayEl: this.getCellEl(row, col),
        rect: {
          left: colPositions.lefts[col],
          right: colPositions.rights[col],
          top: rowPositions.tops[row],
          bottom: rowPositions.bottoms[row]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(row, col) {
    return this.rowRefs.currentMap[row].getCellEls()[col];
  }
  getCellRange(row, col) {
    let start = this.props.cells[row][col].date;
    let end = addDays(start, 1);
    return {
      start,
      end
    };
  }
};
function splitAllDaySegsByRow(segs, rowCnt) {
  return splitSegsByRow(segs.filter(isSegAllDay), rowCnt);
}
function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}
var Table = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.elRef = d();
    this.needsScrollReset = false;
  }
  render() {
    let {
      props
    } = this;
    let {
      dayMaxEventRows,
      dayMaxEvents,
      expandRows
    } = props;
    let limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
    if (limitViaBalanced && !expandRows) {
      limitViaBalanced = false;
      dayMaxEventRows = null;
      dayMaxEvents = null;
    }
    let classNames = [
      "fc-daygrid-body",
      limitViaBalanced ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      expandRows ? "" : "fc-daygrid-body-natural"
      // will height of one row depend on the others?
    ];
    return y("div", {
      ref: this.elRef,
      className: classNames.join(" "),
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, y("table", {
      role: "presentation",
      className: "fc-scrollgrid-sync-table",
      style: {
        width: props.clientWidth,
        minWidth: props.tableMinWidth,
        height: expandRows ? props.clientHeight : ""
      }
    }, props.colGroupNode, y("tbody", {
      role: "presentation"
    }, y(TableRows, {
      dateProfile: props.dateProfile,
      cells: props.cells,
      renderRowIntro: props.renderRowIntro,
      showWeekNumbers: props.showWeekNumbers,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      businessHourSegs: props.businessHourSegs,
      bgEventSegs: props.bgEventSegs,
      fgEventSegs: props.fgEventSegs,
      dateSelectionSegs: props.dateSelectionSegs,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      dayMaxEvents,
      dayMaxEventRows,
      forPrint: props.forPrint,
      isHitComboAllowed: props.isHitComboAllowed
    }))));
  }
  componentDidMount() {
    this.requestScrollReset();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.dateProfile !== this.props.dateProfile) {
      this.requestScrollReset();
    } else {
      this.flushScrollReset();
    }
  }
  requestScrollReset() {
    this.needsScrollReset = true;
    this.flushScrollReset();
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth) {
      const subjectEl = getScrollSubjectEl(this.elRef.current, this.props.dateProfile);
      if (subjectEl) {
        const originEl = subjectEl.closest(".fc-daygrid-body");
        const scrollEl = originEl.closest(".fc-scroller");
        const scrollTop = subjectEl.getBoundingClientRect().top - originEl.getBoundingClientRect().top;
        scrollEl.scrollTop = scrollTop ? scrollTop + 1 : 0;
      }
      this.needsScrollReset = false;
    }
  }
};
function getScrollSubjectEl(containerEl, dateProfile) {
  let el;
  if (dateProfile.currentRangeUnit.match(/year|month/)) {
    el = containerEl.querySelector(`[data-date="${formatIsoMonthStr(dateProfile.currentDate)}-01"]`);
  }
  if (!el) {
    el = containerEl.querySelector(`[data-date="${formatDayString(dateProfile.currentDate)}"]`);
  }
  return el;
}
var DayTableSlicer = class extends Slicer {
  constructor() {
    super(...arguments);
    this.forceDayIfListItem = true;
  }
  sliceRange(dateRange, dayTableModel) {
    return dayTableModel.sliceRange(dateRange);
  }
};
var DayTable = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.slicer = new DayTableSlicer();
    this.tableRef = d();
  }
  render() {
    let {
      props,
      context
    } = this;
    return y(Table, Object.assign({
      ref: this.tableRef
    }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), {
      dateProfile: props.dateProfile,
      cells: props.dayTableModel.cells,
      colGroupNode: props.colGroupNode,
      tableMinWidth: props.tableMinWidth,
      renderRowIntro: props.renderRowIntro,
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      showWeekNumbers: props.showWeekNumbers,
      expandRows: props.expandRows,
      headerAlignElRef: props.headerAlignElRef,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      forPrint: props.forPrint
    }));
  }
};
var DayTableView = class extends TableView {
  constructor() {
    super(...arguments);
    this.buildDayTableModel = memoize(buildDayTableModel);
    this.headerRef = d();
    this.tableRef = d();
  }
  render() {
    let {
      options,
      dateProfileGenerator
    } = this.context;
    let {
      props
    } = this;
    let dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
    let headerContent = options.dayHeaders && y(DayHeader, {
      ref: this.headerRef,
      dateProfile: props.dateProfile,
      dates: dayTableModel.headerDates,
      datesRepDistinctDays: dayTableModel.rowCnt === 1
    });
    let bodyContent = (contentArg) => y(DayTable, {
      ref: this.tableRef,
      dateProfile: props.dateProfile,
      dayTableModel,
      businessHours: props.businessHours,
      dateSelection: props.dateSelection,
      eventStore: props.eventStore,
      eventUiBases: props.eventUiBases,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      nextDayThreshold: options.nextDayThreshold,
      colGroupNode: contentArg.tableColGroupNode,
      tableMinWidth: contentArg.tableMinWidth,
      dayMaxEvents: options.dayMaxEvents,
      dayMaxEventRows: options.dayMaxEventRows,
      showWeekNumbers: options.weekNumbers,
      expandRows: !props.isHeightAuto,
      headerAlignElRef: this.headerElRef,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      forPrint: props.forPrint
    });
    return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
  }
};
function buildDayTableModel(dateProfile, dateProfileGenerator) {
  let daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
  return new DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}
var TableDateProfileGenerator = class extends DateProfileGenerator {
  // Computes the date range that will be rendered
  buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
    let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay);
    let {
      props
    } = this;
    return buildDayTableRenderRange({
      currentRange: renderRange,
      snapToWeek: /^(year|month)$/.test(currentRangeUnit),
      fixedWeekCount: props.fixedWeekCount,
      dateEnv: props.dateEnv
    });
  }
};
function buildDayTableRenderRange(props) {
  let {
    dateEnv,
    currentRange
  } = props;
  let {
    start,
    end
  } = currentRange;
  let endOfWeek;
  if (props.snapToWeek) {
    start = dateEnv.startOfWeek(start);
    endOfWeek = dateEnv.startOfWeek(end);
    if (endOfWeek.valueOf() !== end.valueOf()) {
      end = addWeeks(endOfWeek, 1);
    }
  }
  if (props.fixedWeekCount) {
    let lastMonthRenderStart = dateEnv.startOfWeek(dateEnv.startOfMonth(addDays(currentRange.end, -1)));
    let rowCnt = Math.ceil(
      // could be partial weeks due to hiddenDays
      diffWeeks(lastMonthRenderStart, end)
    );
    end = addWeeks(end, 6 - rowCnt);
  }
  return {
    start,
    end
  };
}
var css_248z = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
injectStyles(css_248z);

// node_modules/@fullcalendar/daygrid/index.js
var index = createPlugin({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: DayTableView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: "dayGrid",
      duration: {
        days: 1
      }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: {
        weeks: 1
      }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: {
        months: 1
      },
      fixedWeekCount: true
    },
    dayGridYear: {
      type: "dayGrid",
      duration: {
        years: 1
      }
    }
  }
});

// node_modules/@fullcalendar/timegrid/internal.js
var AllDaySplitter = class extends Splitter {
  getKeyInfo() {
    return {
      allDay: {},
      timed: {}
    };
  }
  getKeysForDateSpan(dateSpan) {
    if (dateSpan.allDay) {
      return ["allDay"];
    }
    return ["timed"];
  }
  getKeysForEventDef(eventDef) {
    if (!eventDef.allDay) {
      return ["timed"];
    }
    if (hasBgRendering(eventDef)) {
      return ["timed", "allDay"];
    }
    return ["allDay"];
  }
};
var DEFAULT_SLAT_LABEL_FORMAT = createFormatter({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: true,
  meridiem: "short"
});
function TimeColsAxisCell(props) {
  let classNames = ["fc-timegrid-slot", "fc-timegrid-slot-label", props.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
  return y(ViewContextType.Consumer, null, (context) => {
    if (!props.isLabeled) {
      return y("td", {
        className: classNames.join(" "),
        "data-time": props.isoTimeStr
      });
    }
    let {
      dateEnv,
      options,
      viewApi
    } = context;
    let labelFormat = (
      // TODO: fully pre-parse
      options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT : Array.isArray(options.slotLabelFormat) ? createFormatter(options.slotLabelFormat[0]) : createFormatter(options.slotLabelFormat)
    );
    let renderProps = {
      level: 0,
      time: props.time,
      date: dateEnv.toDate(props.date),
      view: viewApi,
      text: dateEnv.format(props.date, labelFormat)
    };
    return y(ContentContainer, {
      elTag: "td",
      elClasses: classNames,
      elAttrs: {
        "data-time": props.isoTimeStr
      },
      renderProps,
      generatorName: "slotLabelContent",
      customGenerator: options.slotLabelContent,
      defaultGenerator: renderInnerContent2,
      classNameGenerator: options.slotLabelClassNames,
      didMount: options.slotLabelDidMount,
      willUnmount: options.slotLabelWillUnmount
    }, (InnerContent) => y("div", {
      className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
    }, y(InnerContent, {
      elTag: "div",
      elClasses: ["fc-timegrid-slot-label-cushion", "fc-scrollgrid-shrink-cushion"]
    })));
  });
}
function renderInnerContent2(props) {
  return props.text;
}
var TimeBodyAxis = class extends BaseComponent {
  render() {
    return this.props.slatMetas.map((slatMeta) => y("tr", {
      key: slatMeta.key
    }, y(TimeColsAxisCell, Object.assign({}, slatMeta))));
  }
};
var DEFAULT_WEEK_NUM_FORMAT2 = createFormatter({
  week: "short"
});
var AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
var TimeColsView = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.allDaySplitter = new AllDaySplitter();
    this.headerElRef = d();
    this.rootElRef = d();
    this.scrollerElRef = d();
    this.state = {
      slatCoords: null
    };
    this.handleScrollTopRequest = (scrollTop) => {
      let scrollerEl = this.scrollerElRef.current;
      if (scrollerEl) {
        scrollerEl.scrollTop = scrollTop;
      }
    };
    this.renderHeadAxis = (rowKey, frameHeight = "") => {
      let {
        options
      } = this.context;
      let {
        dateProfile
      } = this.props;
      let range = dateProfile.renderRange;
      let dayCnt = diffDays(range.start, range.end);
      let navLinkAttrs = dayCnt === 1 ? buildNavLinkAttrs(this.context, range.start, "week") : {};
      if (options.weekNumbers && rowKey === "day") {
        return y(WeekNumberContainer, {
          elTag: "th",
          elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
          elAttrs: {
            "aria-hidden": true
          },
          date: range.start,
          defaultFormat: DEFAULT_WEEK_NUM_FORMAT2
        }, (InnerContent) => y("div", {
          className: ["fc-timegrid-axis-frame", "fc-scrollgrid-shrink-frame", "fc-timegrid-axis-frame-liquid"].join(" "),
          style: {
            height: frameHeight
          }
        }, y(InnerContent, {
          elTag: "a",
          elClasses: ["fc-timegrid-axis-cushion", "fc-scrollgrid-shrink-cushion", "fc-scrollgrid-sync-inner"],
          elAttrs: navLinkAttrs
        })));
      }
      return y("th", {
        "aria-hidden": true,
        className: "fc-timegrid-axis"
      }, y("div", {
        className: "fc-timegrid-axis-frame",
        style: {
          height: frameHeight
        }
      }));
    };
    this.renderTableRowAxis = (rowHeight) => {
      let {
        options,
        viewApi
      } = this.context;
      let renderProps = {
        text: options.allDayText,
        view: viewApi
      };
      return (
        // TODO: make reusable hook. used in list view too
        y(ContentContainer, {
          elTag: "td",
          elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
          elAttrs: {
            "aria-hidden": true
          },
          renderProps,
          generatorName: "allDayContent",
          customGenerator: options.allDayContent,
          defaultGenerator: renderAllDayInner,
          classNameGenerator: options.allDayClassNames,
          didMount: options.allDayDidMount,
          willUnmount: options.allDayWillUnmount
        }, (InnerContent) => y("div", {
          className: ["fc-timegrid-axis-frame", "fc-scrollgrid-shrink-frame", rowHeight == null ? " fc-timegrid-axis-frame-liquid" : ""].join(" "),
          style: {
            height: rowHeight
          }
        }, y(InnerContent, {
          elTag: "span",
          elClasses: ["fc-timegrid-axis-cushion", "fc-scrollgrid-shrink-cushion", "fc-scrollgrid-sync-inner"]
        })))
      );
    };
    this.handleSlatCoords = (slatCoords) => {
      this.setState({
        slatCoords
      });
    };
  }
  // rendering
  // ----------------------------------------------------------------------------------------------------
  renderSimpleLayout(headerRowContent, allDayContent, timeContent) {
    let {
      context,
      props
    } = this;
    let sections = [];
    let stickyHeaderDates = getStickyHeaderDates(context.options);
    if (headerRowContent) {
      sections.push({
        type: "header",
        key: "header",
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: headerRowContent
        }
      });
    }
    if (allDayContent) {
      sections.push({
        type: "body",
        key: "all-day",
        chunk: {
          content: allDayContent
        }
      });
      sections.push({
        type: "body",
        key: "all-day-divider",
        outerContent: (
          // TODO: rename to cellContent so don't need to define <tr>?
          y("tr", {
            role: "presentation",
            className: "fc-scrollgrid-section"
          }, y("td", {
            className: "fc-timegrid-divider " + context.theme.getClass("tableCellShaded")
          }))
        )
      });
    }
    sections.push({
      type: "body",
      key: "body",
      liquid: true,
      expandRows: Boolean(context.options.expandRows),
      chunk: {
        scrollerElRef: this.scrollerElRef,
        content: timeContent
      }
    });
    return y(ViewContainer, {
      elRef: this.rootElRef,
      elClasses: ["fc-timegrid"],
      viewSpec: context.viewSpec
    }, y(SimpleScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      collapsibleWidth: props.forPrint,
      cols: [{
        width: "shrink"
      }],
      sections
    }));
  }
  renderHScrollLayout(headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
    let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
    if (!ScrollGrid) {
      throw new Error("No ScrollGrid implementation");
    }
    let {
      context,
      props
    } = this;
    let stickyHeaderDates = !props.forPrint && getStickyHeaderDates(context.options);
    let stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(context.options);
    let sections = [];
    if (headerRowContent) {
      sections.push({
        type: "header",
        key: "header",
        isSticky: stickyHeaderDates,
        syncRowHeights: true,
        chunks: [{
          key: "axis",
          rowContent: (arg) => y("tr", {
            role: "presentation"
          }, this.renderHeadAxis("day", arg.rowSyncHeights[0]))
        }, {
          key: "cols",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: headerRowContent
        }]
      });
    }
    if (allDayContent) {
      sections.push({
        type: "body",
        key: "all-day",
        syncRowHeights: true,
        chunks: [{
          key: "axis",
          rowContent: (contentArg) => y("tr", {
            role: "presentation"
          }, this.renderTableRowAxis(contentArg.rowSyncHeights[0]))
        }, {
          key: "cols",
          content: allDayContent
        }]
      });
      sections.push({
        key: "all-day-divider",
        type: "body",
        outerContent: (
          // TODO: rename to cellContent so don't need to define <tr>?
          y("tr", {
            role: "presentation",
            className: "fc-scrollgrid-section"
          }, y("td", {
            colSpan: 2,
            className: "fc-timegrid-divider " + context.theme.getClass("tableCellShaded")
          }))
        )
      });
    }
    let isNowIndicator = context.options.nowIndicator;
    sections.push({
      type: "body",
      key: "body",
      liquid: true,
      expandRows: Boolean(context.options.expandRows),
      chunks: [{
        key: "axis",
        content: (arg) => (
          // TODO: make this now-indicator arrow more DRY with TimeColsContent
          y("div", {
            className: "fc-timegrid-axis-chunk"
          }, y("table", {
            "aria-hidden": true,
            style: {
              height: arg.expandRows ? arg.clientHeight : ""
            }
          }, arg.tableColGroupNode, y("tbody", null, y(TimeBodyAxis, {
            slatMetas
          }))), y("div", {
            className: "fc-timegrid-now-indicator-container"
          }, y(NowTimer, {
            unit: isNowIndicator ? "minute" : "day"
            /* hacky */
          }, (nowDate) => {
            let nowIndicatorTop = isNowIndicator && slatCoords && slatCoords.safeComputeTop(nowDate);
            if (typeof nowIndicatorTop === "number") {
              return y(NowIndicatorContainer, {
                elClasses: ["fc-timegrid-now-indicator-arrow"],
                elStyle: {
                  top: nowIndicatorTop
                },
                isAxis: true,
                date: nowDate
              });
            }
            return null;
          })))
        )
      }, {
        key: "cols",
        scrollerElRef: this.scrollerElRef,
        content: timeContent
      }]
    });
    if (stickyFooterScrollbar) {
      sections.push({
        key: "footer",
        type: "footer",
        isSticky: true,
        chunks: [{
          key: "axis",
          content: renderScrollShim
        }, {
          key: "cols",
          content: renderScrollShim
        }]
      });
    }
    return y(ViewContainer, {
      elRef: this.rootElRef,
      elClasses: ["fc-timegrid"],
      viewSpec: context.viewSpec
    }, y(ScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      forPrint: props.forPrint,
      collapsibleWidth: false,
      colGroups: [{
        width: "shrink",
        cols: [{
          width: "shrink"
        }]
      }, {
        cols: [{
          span: colCnt,
          minWidth: dayMinWidth
        }]
      }],
      sections
    }));
  }
  /* Dimensions
  ------------------------------------------------------------------------------------------------------------------*/
  getAllDayMaxEventProps() {
    let {
      dayMaxEvents,
      dayMaxEventRows
    } = this.context.options;
    if (dayMaxEvents === true || dayMaxEventRows === true) {
      dayMaxEvents = void 0;
      dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS;
    }
    return {
      dayMaxEvents,
      dayMaxEventRows
    };
  }
};
function renderAllDayInner(renderProps) {
  return renderProps.text;
}
var TimeColsSlatsCoords = class {
  constructor(positions, dateProfile, slotDuration) {
    this.positions = positions;
    this.dateProfile = dateProfile;
    this.slotDuration = slotDuration;
  }
  safeComputeTop(date) {
    let {
      dateProfile
    } = this;
    if (rangeContainsMarker(dateProfile.currentRange, date)) {
      let startOfDayDate = startOfDay(date);
      let timeMs = date.valueOf() - startOfDayDate.valueOf();
      if (timeMs >= asRoughMs(dateProfile.slotMinTime) && timeMs < asRoughMs(dateProfile.slotMaxTime)) {
        return this.computeTimeTop(createDuration(timeMs));
      }
    }
    return null;
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given date.
  // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
  computeDateTop(when, startOfDayDate) {
    if (!startOfDayDate) {
      startOfDayDate = startOfDay(when);
    }
    return this.computeTimeTop(createDuration(when.valueOf() - startOfDayDate.valueOf()));
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
  // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
  // Eventually allow computation with arbirary slat dates.
  computeTimeTop(duration) {
    let {
      positions,
      dateProfile
    } = this;
    let len = positions.els.length;
    let slatCoverage = (duration.milliseconds - asRoughMs(dateProfile.slotMinTime)) / asRoughMs(this.slotDuration);
    let slatIndex;
    let slatRemainder;
    slatCoverage = Math.max(0, slatCoverage);
    slatCoverage = Math.min(len, slatCoverage);
    slatIndex = Math.floor(slatCoverage);
    slatIndex = Math.min(slatIndex, len - 1);
    slatRemainder = slatCoverage - slatIndex;
    return positions.tops[slatIndex] + positions.getHeight(slatIndex) * slatRemainder;
  }
};
var TimeColsSlatsBody = class extends BaseComponent {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      slatElRefs
    } = props;
    return y("tbody", null, props.slatMetas.map((slatMeta, i) => {
      let renderProps = {
        time: slatMeta.time,
        date: context.dateEnv.toDate(slatMeta.date),
        view: context.viewApi
      };
      return y("tr", {
        key: slatMeta.key,
        ref: slatElRefs.createRef(slatMeta.key)
      }, props.axis && y(TimeColsAxisCell, Object.assign({}, slatMeta)), y(ContentContainer, {
        elTag: "td",
        elClasses: ["fc-timegrid-slot", "fc-timegrid-slot-lane", !slatMeta.isLabeled && "fc-timegrid-slot-minor"],
        elAttrs: {
          "data-time": slatMeta.isoTimeStr
        },
        renderProps,
        generatorName: "slotLaneContent",
        customGenerator: options.slotLaneContent,
        classNameGenerator: options.slotLaneClassNames,
        didMount: options.slotLaneDidMount,
        willUnmount: options.slotLaneWillUnmount
      }));
    }));
  }
};
var TimeColsSlats = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.rootElRef = d();
    this.slatElRefs = new RefMap();
  }
  render() {
    let {
      props,
      context
    } = this;
    return y("div", {
      ref: this.rootElRef,
      className: "fc-timegrid-slots"
    }, y("table", {
      "aria-hidden": true,
      className: context.theme.getClass("table"),
      style: {
        minWidth: props.tableMinWidth,
        width: props.clientWidth,
        height: props.minHeight
      }
    }, props.tableColGroupNode, y(TimeColsSlatsBody, {
      slatElRefs: this.slatElRefs,
      axis: props.axis,
      slatMetas: props.slatMetas
    })));
  }
  componentDidMount() {
    this.updateSizing();
  }
  componentDidUpdate() {
    this.updateSizing();
  }
  componentWillUnmount() {
    if (this.props.onCoords) {
      this.props.onCoords(null);
    }
  }
  updateSizing() {
    let {
      context,
      props
    } = this;
    if (props.onCoords && props.clientWidth !== null) {
      let rootEl = this.rootElRef.current;
      if (rootEl.offsetHeight) {
        props.onCoords(new TimeColsSlatsCoords(new PositionCache(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
      }
    }
  }
};
function collectSlatEls(elMap, slatMetas) {
  return slatMetas.map((slatMeta) => elMap[slatMeta.key]);
}
function splitSegsByCol(segs, colCnt) {
  let segsByCol = [];
  let i;
  for (i = 0; i < colCnt; i += 1) {
    segsByCol.push([]);
  }
  if (segs) {
    for (i = 0; i < segs.length; i += 1) {
      segsByCol[segs[i].col].push(segs[i]);
    }
  }
  return segsByCol;
}
function splitInteractionByCol(ui, colCnt) {
  let byRow = [];
  if (!ui) {
    for (let i = 0; i < colCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (let i = 0; i < colCnt; i += 1) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (let seg of ui.segs) {
      byRow[seg.col].segs.push(seg);
    }
  }
  return byRow;
}
var TimeColMoreLink = class extends BaseComponent {
  render() {
    let {
      props
    } = this;
    return y(MoreLinkContainer, {
      elClasses: ["fc-timegrid-more-link"],
      elStyle: {
        top: props.top,
        bottom: props.bottom
      },
      allDayDate: null,
      moreCnt: props.hiddenSegs.length,
      allSegs: props.hiddenSegs,
      hiddenSegs: props.hiddenSegs,
      extraDateSpan: props.extraDateSpan,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      popoverContent: () => renderPlainFgSegs(props.hiddenSegs, props),
      defaultGenerator: renderMoreLinkInner,
      forceTimed: true
    }, (InnerContent) => y(InnerContent, {
      elTag: "div",
      elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"]
    }));
  }
};
function renderMoreLinkInner(props) {
  return props.shortText;
}
function buildPositioning(segInputs, strictOrder, maxStackCnt) {
  let hierarchy = new SegHierarchy();
  if (strictOrder != null) {
    hierarchy.strictOrder = strictOrder;
  }
  if (maxStackCnt != null) {
    hierarchy.maxStackCnt = maxStackCnt;
  }
  let hiddenEntries = hierarchy.addSegs(segInputs);
  let hiddenGroups = groupIntersectingEntries(hiddenEntries);
  let web = buildWeb(hierarchy);
  web = stretchWeb(web, 1);
  let segRects = webToRects(web);
  return {
    segRects,
    hiddenGroups
  };
}
function buildWeb(hierarchy) {
  const {
    entriesByLevel
  } = hierarchy;
  const buildNode = cacheable((level, lateral) => level + ":" + lateral, (level, lateral) => {
    let siblingRange = findNextLevelSegs(hierarchy, level, lateral);
    let nextLevelRes = buildNodes(siblingRange, buildNode);
    let entry = entriesByLevel[level][lateral];
    return [
      Object.assign(Object.assign({}, entry), {
        nextLevelNodes: nextLevelRes[0]
      }),
      entry.thickness + nextLevelRes[1]
      // the pressure builds
    ];
  });
  return buildNodes(entriesByLevel.length ? {
    level: 0,
    lateralStart: 0,
    lateralEnd: entriesByLevel[0].length
  } : null, buildNode)[0];
}
function buildNodes(siblingRange, buildNode) {
  if (!siblingRange) {
    return [[], 0];
  }
  let {
    level,
    lateralStart,
    lateralEnd
  } = siblingRange;
  let lateral = lateralStart;
  let pairs = [];
  while (lateral < lateralEnd) {
    pairs.push(buildNode(level, lateral));
    lateral += 1;
  }
  pairs.sort(cmpDescPressures);
  return [
    pairs.map(extractNode),
    pairs[0][1]
    // first item's pressure
  ];
}
function cmpDescPressures(a, b) {
  return b[1] - a[1];
}
function extractNode(a) {
  return a[0];
}
function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
  let {
    levelCoords,
    entriesByLevel
  } = hierarchy;
  let subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
  let afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
  let levelCnt = levelCoords.length;
  let level = subjectLevel;
  for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1) ;
  for (; level < levelCnt; level += 1) {
    let entries = entriesByLevel[level];
    let entry;
    let searchIndex = binarySearch(entries, subjectEntry.span.start, getEntrySpanEnd);
    let lateralStart = searchIndex[0] + searchIndex[1];
    let lateralEnd = lateralStart;
    while (
      // loop through entries that horizontally intersect
      (entry = entries[lateralEnd]) && // but not past the whole seg list
      entry.span.start < subjectEntry.span.end
    ) {
      lateralEnd += 1;
    }
    if (lateralStart < lateralEnd) {
      return {
        level,
        lateralStart,
        lateralEnd
      };
    }
  }
  return null;
}
function stretchWeb(topLevelNodes, totalThickness) {
  const stretchNode = cacheable((node, startCoord, prevThickness) => buildEntryKey(node), (node, startCoord, prevThickness) => {
    let {
      nextLevelNodes,
      thickness
    } = node;
    let allThickness = thickness + prevThickness;
    let thicknessFraction = thickness / allThickness;
    let endCoord;
    let newChildren = [];
    if (!nextLevelNodes.length) {
      endCoord = totalThickness;
    } else {
      for (let childNode of nextLevelNodes) {
        if (endCoord === void 0) {
          let res = stretchNode(childNode, startCoord, allThickness);
          endCoord = res[0];
          newChildren.push(res[1]);
        } else {
          let res = stretchNode(childNode, endCoord, 0);
          newChildren.push(res[1]);
        }
      }
    }
    let newThickness = (endCoord - startCoord) * thicknessFraction;
    return [endCoord - newThickness, Object.assign(Object.assign({}, node), {
      thickness: newThickness,
      nextLevelNodes: newChildren
    })];
  });
  return topLevelNodes.map((node) => stretchNode(node, 0, 0)[1]);
}
function webToRects(topLevelNodes) {
  let rects = [];
  const processNode = cacheable((node, levelCoord, stackDepth) => buildEntryKey(node), (node, levelCoord, stackDepth) => {
    let rect = Object.assign(Object.assign({}, node), {
      levelCoord,
      stackDepth,
      stackForward: 0
    });
    rects.push(rect);
    return rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1;
  });
  function processNodes(nodes, levelCoord, stackDepth) {
    let stackForward = 0;
    for (let node of nodes) {
      stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
    }
    return stackForward;
  }
  processNodes(topLevelNodes, 0, 0);
  return rects;
}
function cacheable(keyFunc, workFunc) {
  const cache = {};
  return (...args) => {
    let key = keyFunc(...args);
    return key in cache ? cache[key] : cache[key] = workFunc(...args);
  };
}
function computeSegVCoords(segs, colDate, slatCoords = null, eventMinHeight = 0) {
  let vcoords = [];
  if (slatCoords) {
    for (let i = 0; i < segs.length; i += 1) {
      let seg = segs[i];
      let spanStart = slatCoords.computeDateTop(seg.start, colDate);
      let spanEnd = Math.max(
        spanStart + (eventMinHeight || 0),
        // :(
        slatCoords.computeDateTop(seg.end, colDate)
      );
      vcoords.push({
        start: Math.round(spanStart),
        end: Math.round(spanEnd)
        //
      });
    }
  }
  return vcoords;
}
function computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack) {
  let segInputs = [];
  let dumbSegs = [];
  for (let i = 0; i < segs.length; i += 1) {
    let vcoords = segVCoords[i];
    if (vcoords) {
      segInputs.push({
        index: i,
        thickness: 1,
        span: vcoords
      });
    } else {
      dumbSegs.push(segs[i]);
    }
  }
  let {
    segRects,
    hiddenGroups
  } = buildPositioning(segInputs, eventOrderStrict, eventMaxStack);
  let segPlacements = [];
  for (let segRect of segRects) {
    segPlacements.push({
      seg: segs[segRect.index],
      rect: segRect
    });
  }
  for (let dumbSeg of dumbSegs) {
    segPlacements.push({
      seg: dumbSeg,
      rect: null
    });
  }
  return {
    segPlacements,
    hiddenGroups
  };
}
var DEFAULT_TIME_FORMAT = createFormatter({
  hour: "numeric",
  minute: "2-digit",
  meridiem: false
});
var TimeColEvent = class extends BaseComponent {
  render() {
    return y(StandardEvent, Object.assign({}, this.props, {
      elClasses: ["fc-timegrid-event", "fc-v-event", this.props.isShort && "fc-timegrid-event-short"],
      defaultTimeFormat: DEFAULT_TIME_FORMAT
    }));
  }
};
var TimeCol = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.sortEventSegs = memoize(sortEventSegs);
  }
  // TODO: memoize event-placement?
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let isSelectMirror = options.selectMirror;
    let mirrorSegs = (
      // yuck
      props.eventDrag && props.eventDrag.segs || props.eventResize && props.eventResize.segs || isSelectMirror && props.dateSelectionSegs || []
    );
    let interactionAffectedInstances = (
      // TODO: messy way to compute this
      props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {}
    );
    let sortedFgSegs = this.sortEventSegs(props.fgEventSegs, options.eventOrder);
    return y(DayCellContainer, {
      elTag: "td",
      elRef: props.elRef,
      elClasses: ["fc-timegrid-col", ...props.extraClassNames || []],
      elAttrs: Object.assign({
        role: "gridcell"
      }, props.extraDataAttrs),
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      extraRenderProps: props.extraRenderProps
    }, (InnerContent) => y("div", {
      className: "fc-timegrid-col-frame"
    }, y("div", {
      className: "fc-timegrid-col-bg"
    }, this.renderFillSegs(props.businessHourSegs, "non-business"), this.renderFillSegs(props.bgEventSegs, "bg-event"), this.renderFillSegs(props.dateSelectionSegs, "highlight")), y("div", {
      className: "fc-timegrid-col-events"
    }, this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)), y("div", {
      className: "fc-timegrid-col-events"
    }, this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror), "mirror")), y("div", {
      className: "fc-timegrid-now-indicator-container"
    }, this.renderNowIndicator(props.nowIndicatorSegs)), hasCustomDayCellContent(options) && y(InnerContent, {
      elTag: "div",
      elClasses: ["fc-timegrid-col-misc"]
    })));
  }
  renderFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
    let {
      props
    } = this;
    if (props.forPrint) {
      return renderPlainFgSegs(sortedFgSegs, props);
    }
    return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey);
  }
  renderPositionedFgSegs(segs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
    let {
      eventMaxStack,
      eventShortHeight,
      eventOrderStrict,
      eventMinHeight
    } = this.context.options;
    let {
      date,
      slatCoords,
      eventSelection,
      todayRange,
      nowDate
    } = this.props;
    let isMirror = isDragging || isResizing || isDateSelecting;
    let segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
    let {
      segPlacements,
      hiddenGroups
    } = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack);
    return y(_, null, this.renderHiddenGroups(hiddenGroups, segs), segPlacements.map((segPlacement) => {
      let {
        seg,
        rect
      } = segPlacement;
      let instanceId = seg.eventRange.instance.instanceId;
      let isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
      let vStyle = computeSegVStyle(rect && rect.span);
      let hStyle = !isMirror && rect ? this.computeSegHStyle(rect) : {
        left: 0,
        right: 0
      };
      let isInset = Boolean(rect) && rect.stackForward > 0;
      let isShort = Boolean(rect) && rect.span.end - rect.span.start < eventShortHeight;
      return y("div", {
        className: "fc-timegrid-event-harness" + (isInset ? " fc-timegrid-event-harness-inset" : ""),
        key: forcedKey || instanceId,
        style: Object.assign(Object.assign({
          visibility: isVisible ? "" : "hidden"
        }, vStyle), hStyle)
      }, y(TimeColEvent, Object.assign({
        seg,
        isDragging,
        isResizing,
        isDateSelecting,
        isSelected: instanceId === eventSelection,
        isShort
      }, getSegMeta(seg, todayRange, nowDate))));
    }));
  }
  // will already have eventMinHeight applied because segInputs already had it
  renderHiddenGroups(hiddenGroups, segs) {
    let {
      extraDateSpan,
      dateProfile,
      todayRange,
      nowDate,
      eventSelection,
      eventDrag,
      eventResize
    } = this.props;
    return y(_, null, hiddenGroups.map((hiddenGroup) => {
      let positionCss = computeSegVStyle(hiddenGroup.span);
      let hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
      return y(TimeColMoreLink, {
        key: buildIsoString(computeEarliestSegStart(hiddenSegs)),
        hiddenSegs,
        top: positionCss.top,
        bottom: positionCss.bottom,
        extraDateSpan,
        dateProfile,
        todayRange,
        nowDate,
        eventSelection,
        eventDrag,
        eventResize
      });
    }));
  }
  renderFillSegs(segs, fillType) {
    let {
      props,
      context
    } = this;
    let segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight);
    let children = segVCoords.map((vcoords, i) => {
      let seg = segs[i];
      return y("div", {
        key: buildEventRangeKey(seg.eventRange),
        className: "fc-timegrid-bg-harness",
        style: computeSegVStyle(vcoords)
      }, fillType === "bg-event" ? y(BgEvent, Object.assign({
        seg
      }, getSegMeta(seg, props.todayRange, props.nowDate))) : renderFill(fillType));
    });
    return y(_, null, children);
  }
  renderNowIndicator(segs) {
    let {
      slatCoords,
      date
    } = this.props;
    if (!slatCoords) {
      return null;
    }
    return segs.map((seg, i) => y(
      NowIndicatorContainer,
      {
        // key doesn't matter. will only ever be one
        key: i,
        elClasses: ["fc-timegrid-now-indicator-line"],
        elStyle: {
          top: slatCoords.computeDateTop(seg.start, date)
        },
        isAxis: false,
        date
      }
    ));
  }
  computeSegHStyle(segHCoords) {
    let {
      isRtl,
      options
    } = this.context;
    let shouldOverlap = options.slotEventOverlap;
    let nearCoord = segHCoords.levelCoord;
    let farCoord = segHCoords.levelCoord + segHCoords.thickness;
    let left;
    let right;
    if (shouldOverlap) {
      farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
    }
    if (isRtl) {
      left = 1 - farCoord;
      right = nearCoord;
    } else {
      left = nearCoord;
      right = 1 - farCoord;
    }
    let props = {
      zIndex: segHCoords.stackDepth + 1,
      left: left * 100 + "%",
      right: right * 100 + "%"
    };
    if (shouldOverlap && !segHCoords.stackForward) {
      props[isRtl ? "marginLeft" : "marginRight"] = 10 * 2;
    }
    return props;
  }
};
function renderPlainFgSegs(sortedFgSegs, {
  todayRange,
  nowDate,
  eventSelection,
  eventDrag,
  eventResize
}) {
  let hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) || (eventResize ? eventResize.affectedInstances : null) || {};
  return y(_, null, sortedFgSegs.map((seg) => {
    let instanceId = seg.eventRange.instance.instanceId;
    return y("div", {
      key: instanceId,
      style: {
        visibility: hiddenInstances[instanceId] ? "hidden" : ""
      }
    }, y(TimeColEvent, Object.assign({
      seg,
      isDragging: false,
      isResizing: false,
      isDateSelecting: false,
      isSelected: instanceId === eventSelection,
      isShort: false
    }, getSegMeta(seg, todayRange, nowDate))));
  }));
}
function computeSegVStyle(segVCoords) {
  if (!segVCoords) {
    return {
      top: "",
      bottom: ""
    };
  }
  return {
    top: segVCoords.start,
    bottom: -segVCoords.end
  };
}
function compileSegsFromEntries(segEntries, allSegs) {
  return segEntries.map((segEntry) => allSegs[segEntry.index]);
}
var TimeColsContent = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.splitFgEventSegs = memoize(splitSegsByCol);
    this.splitBgEventSegs = memoize(splitSegsByCol);
    this.splitBusinessHourSegs = memoize(splitSegsByCol);
    this.splitNowIndicatorSegs = memoize(splitSegsByCol);
    this.splitDateSelectionSegs = memoize(splitSegsByCol);
    this.splitEventDrag = memoize(splitInteractionByCol);
    this.splitEventResize = memoize(splitInteractionByCol);
    this.rootElRef = d();
    this.cellElRefs = new RefMap();
  }
  render() {
    let {
      props,
      context
    } = this;
    let nowIndicatorTop = context.options.nowIndicator && props.slatCoords && props.slatCoords.safeComputeTop(props.nowDate);
    let colCnt = props.cells.length;
    let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
    let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
    let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
    let nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
    let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
    let eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
    let eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
    return y("div", {
      className: "fc-timegrid-cols",
      ref: this.rootElRef
    }, y("table", {
      role: "presentation",
      style: {
        minWidth: props.tableMinWidth,
        width: props.clientWidth
      }
    }, props.tableColGroupNode, y("tbody", {
      role: "presentation"
    }, y("tr", {
      role: "row"
    }, props.axis && y("td", {
      "aria-hidden": true,
      className: "fc-timegrid-col fc-timegrid-axis"
    }, y("div", {
      className: "fc-timegrid-col-frame"
    }, y("div", {
      className: "fc-timegrid-now-indicator-container"
    }, typeof nowIndicatorTop === "number" && y(NowIndicatorContainer, {
      elClasses: ["fc-timegrid-now-indicator-arrow"],
      elStyle: {
        top: nowIndicatorTop
      },
      isAxis: true,
      date: props.nowDate
    })))), props.cells.map((cell, i) => y(TimeCol, {
      key: cell.key,
      elRef: this.cellElRefs.createRef(cell.key),
      dateProfile: props.dateProfile,
      date: cell.date,
      nowDate: props.nowDate,
      todayRange: props.todayRange,
      extraRenderProps: cell.extraRenderProps,
      extraDataAttrs: cell.extraDataAttrs,
      extraClassNames: cell.extraClassNames,
      extraDateSpan: cell.extraDateSpan,
      fgEventSegs: fgEventSegsByRow[i],
      bgEventSegs: bgEventSegsByRow[i],
      businessHourSegs: businessHourSegsByRow[i],
      nowIndicatorSegs: nowIndicatorSegsByRow[i],
      dateSelectionSegs: dateSelectionSegsByRow[i],
      eventDrag: eventDragByRow[i],
      eventResize: eventResizeByRow[i],
      slatCoords: props.slatCoords,
      eventSelection: props.eventSelection,
      forPrint: props.forPrint
    }))))));
  }
  componentDidMount() {
    this.updateCoords();
  }
  componentDidUpdate() {
    this.updateCoords();
  }
  updateCoords() {
    let {
      props
    } = this;
    if (props.onColCoords && props.clientWidth !== null) {
      props.onColCoords(new PositionCache(
        this.rootElRef.current,
        collectCellEls(this.cellElRefs.currentMap, props.cells),
        true,
        // horizontal
        false
      ));
    }
  }
};
function collectCellEls(elMap, cells) {
  return cells.map((cell) => elMap[cell.key]);
}
var TimeCols = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.processSlotOptions = memoize(processSlotOptions);
    this.state = {
      slatCoords: null
    };
    this.handleRootEl = (el) => {
      if (el) {
        this.context.registerInteractiveComponent(this, {
          el,
          isHitComboAllowed: this.props.isHitComboAllowed
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
    this.handleScrollRequest = (request) => {
      let {
        onScrollTopRequest
      } = this.props;
      let {
        slatCoords
      } = this.state;
      if (onScrollTopRequest && slatCoords) {
        if (request.time) {
          let top = slatCoords.computeTimeTop(request.time);
          top = Math.ceil(top);
          if (top) {
            top += 1;
          }
          onScrollTopRequest(top);
        }
        return true;
      }
      return false;
    };
    this.handleColCoords = (colCoords) => {
      this.colCoords = colCoords;
    };
    this.handleSlatCoords = (slatCoords) => {
      this.setState({
        slatCoords
      });
      if (this.props.onSlatCoords) {
        this.props.onSlatCoords(slatCoords);
      }
    };
  }
  render() {
    let {
      props,
      state
    } = this;
    return y("div", {
      className: "fc-timegrid-body",
      ref: this.handleRootEl,
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, y(TimeColsSlats, {
      axis: props.axis,
      dateProfile: props.dateProfile,
      slatMetas: props.slatMetas,
      clientWidth: props.clientWidth,
      minHeight: props.expandRows ? props.clientHeight : "",
      tableMinWidth: props.tableMinWidth,
      tableColGroupNode: props.axis ? props.tableColGroupNode : null,
      onCoords: this.handleSlatCoords
    }), y(TimeColsContent, {
      cells: props.cells,
      axis: props.axis,
      dateProfile: props.dateProfile,
      businessHourSegs: props.businessHourSegs,
      bgEventSegs: props.bgEventSegs,
      fgEventSegs: props.fgEventSegs,
      dateSelectionSegs: props.dateSelectionSegs,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      todayRange: props.todayRange,
      nowDate: props.nowDate,
      nowIndicatorSegs: props.nowIndicatorSegs,
      clientWidth: props.clientWidth,
      tableMinWidth: props.tableMinWidth,
      tableColGroupNode: props.tableColGroupNode,
      slatCoords: state.slatCoords,
      onColCoords: this.handleColCoords,
      forPrint: props.forPrint
    }));
  }
  componentDidMount() {
    this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
  }
  componentDidUpdate(prevProps) {
    this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
  }
  componentWillUnmount() {
    this.scrollResponder.detach();
  }
  queryHit(positionLeft, positionTop) {
    let {
      dateEnv,
      options
    } = this.context;
    let {
      colCoords
    } = this;
    let {
      dateProfile
    } = this.props;
    let {
      slatCoords
    } = this.state;
    let {
      snapDuration,
      snapsPerSlot
    } = this.processSlotOptions(this.props.slotDuration, options.snapDuration);
    let colIndex = colCoords.leftToIndex(positionLeft);
    let slatIndex = slatCoords.positions.topToIndex(positionTop);
    if (colIndex != null && slatIndex != null) {
      let cell = this.props.cells[colIndex];
      let slatTop = slatCoords.positions.tops[slatIndex];
      let slatHeight = slatCoords.positions.getHeight(slatIndex);
      let partial = (positionTop - slatTop) / slatHeight;
      let localSnapIndex = Math.floor(partial * snapsPerSlot);
      let snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
      let dayDate = this.props.cells[colIndex].date;
      let time = addDurations(dateProfile.slotMinTime, multiplyDuration(snapDuration, snapIndex));
      let start = dateEnv.add(dayDate, time);
      let end = dateEnv.add(start, snapDuration);
      return {
        dateProfile,
        dateSpan: Object.assign({
          range: {
            start,
            end
          },
          allDay: false
        }, cell.extraDateSpan),
        dayEl: colCoords.els[colIndex],
        rect: {
          left: colCoords.lefts[colIndex],
          right: colCoords.rights[colIndex],
          top: slatTop,
          bottom: slatTop + slatHeight
        },
        layer: 0
      };
    }
    return null;
  }
};
function processSlotOptions(slotDuration, snapDurationOverride) {
  let snapDuration = snapDurationOverride || slotDuration;
  let snapsPerSlot = wholeDivideDurations(slotDuration, snapDuration);
  if (snapsPerSlot === null) {
    snapDuration = slotDuration;
    snapsPerSlot = 1;
  }
  return {
    snapDuration,
    snapsPerSlot
  };
}
var DayTimeColsSlicer = class extends Slicer {
  sliceRange(range, dayRanges) {
    let segs = [];
    for (let col = 0; col < dayRanges.length; col += 1) {
      let segRange = intersectRanges(range, dayRanges[col]);
      if (segRange) {
        segs.push({
          start: segRange.start,
          end: segRange.end,
          isStart: segRange.start.valueOf() === range.start.valueOf(),
          isEnd: segRange.end.valueOf() === range.end.valueOf(),
          col
        });
      }
    }
    return segs;
  }
};
var DayTimeCols = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.buildDayRanges = memoize(buildDayRanges);
    this.slicer = new DayTimeColsSlicer();
    this.timeColsRef = d();
  }
  render() {
    let {
      props,
      context
    } = this;
    let {
      dateProfile,
      dayTableModel
    } = props;
    let {
      nowIndicator,
      nextDayThreshold
    } = context.options;
    let dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
    return y(NowTimer, {
      unit: nowIndicator ? "minute" : "day"
    }, (nowDate, todayRange) => y(TimeCols, Object.assign({
      ref: this.timeColsRef
    }, this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), {
      forPrint: props.forPrint,
      axis: props.axis,
      dateProfile,
      slatMetas: props.slatMetas,
      slotDuration: props.slotDuration,
      cells: dayTableModel.cells[0],
      tableColGroupNode: props.tableColGroupNode,
      tableMinWidth: props.tableMinWidth,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      expandRows: props.expandRows,
      nowDate,
      nowIndicatorSegs: nowIndicator && this.slicer.sliceNowDate(nowDate, dateProfile, nextDayThreshold, context, dayRanges),
      todayRange,
      onScrollTopRequest: props.onScrollTopRequest,
      onSlatCoords: props.onSlatCoords
    })));
  }
};
function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
  let ranges = [];
  for (let date of dayTableModel.headerDates) {
    ranges.push({
      start: dateEnv.add(date, dateProfile.slotMinTime),
      end: dateEnv.add(date, dateProfile.slotMaxTime)
    });
  }
  return ranges;
}
var STOCK_SUB_DURATIONS = [{
  hours: 1
}, {
  minutes: 30
}, {
  minutes: 15
}, {
  seconds: 30
}, {
  seconds: 15
}];
function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
  let dayStart = /* @__PURE__ */ new Date(0);
  let slatTime = slotMinTime;
  let slatIterator = createDuration(0);
  let labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
  let metas = [];
  while (asRoughMs(slatTime) < asRoughMs(slotMaxTime)) {
    let date = dateEnv.add(dayStart, slatTime);
    let isLabeled = wholeDivideDurations(slatIterator, labelInterval) !== null;
    metas.push({
      date,
      time: slatTime,
      key: date.toISOString(),
      isoTimeStr: formatIsoTimeString(date),
      isLabeled
    });
    slatTime = addDurations(slatTime, slotDuration);
    slatIterator = addDurations(slatIterator, slotDuration);
  }
  return metas;
}
function computeLabelInterval(slotDuration) {
  let i;
  let labelInterval;
  let slotsPerLabel;
  for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
    labelInterval = createDuration(STOCK_SUB_DURATIONS[i]);
    slotsPerLabel = wholeDivideDurations(labelInterval, slotDuration);
    if (slotsPerLabel !== null && slotsPerLabel > 1) {
      return labelInterval;
    }
  }
  return slotDuration;
}
var DayTimeColsView = class extends TimeColsView {
  constructor() {
    super(...arguments);
    this.buildTimeColsModel = memoize(buildTimeColsModel);
    this.buildSlatMetas = memoize(buildSlatMetas);
  }
  render() {
    let {
      options,
      dateEnv,
      dateProfileGenerator
    } = this.context;
    let {
      props
    } = this;
    let {
      dateProfile
    } = props;
    let dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
    let splitProps = this.allDaySplitter.splitProps(props);
    let slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
    let {
      dayMinWidth
    } = options;
    let hasAttachedAxis = !dayMinWidth;
    let hasDetachedAxis = dayMinWidth;
    let headerContent = options.dayHeaders && y(DayHeader, {
      dates: dayTableModel.headerDates,
      dateProfile,
      datesRepDistinctDays: true,
      renderIntro: hasAttachedAxis ? this.renderHeadAxis : null
    });
    let allDayContent = options.allDaySlot !== false && ((contentArg) => y(DayTable, Object.assign({}, splitProps.allDay, {
      dateProfile,
      dayTableModel,
      nextDayThreshold: options.nextDayThreshold,
      tableMinWidth: contentArg.tableMinWidth,
      colGroupNode: contentArg.tableColGroupNode,
      renderRowIntro: hasAttachedAxis ? this.renderTableRowAxis : null,
      showWeekNumbers: false,
      expandRows: false,
      headerAlignElRef: this.headerElRef,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      forPrint: props.forPrint
    }, this.getAllDayMaxEventProps())));
    let timeGridContent = (contentArg) => y(DayTimeCols, Object.assign({}, splitProps.timed, {
      dayTableModel,
      dateProfile,
      axis: hasAttachedAxis,
      slotDuration: options.slotDuration,
      slatMetas,
      forPrint: props.forPrint,
      tableColGroupNode: contentArg.tableColGroupNode,
      tableMinWidth: contentArg.tableMinWidth,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      onSlatCoords: this.handleSlatCoords,
      expandRows: contentArg.expandRows,
      onScrollTopRequest: this.handleScrollTopRequest
    }));
    return hasDetachedAxis ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords) : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
  }
};
function buildTimeColsModel(dateProfile, dateProfileGenerator) {
  let daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
  return new DayTableModel(daySeries, false);
}
var css_248z2 = '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-arrow,.fc .fc-timegrid-now-indicator-line{pointer-events:none}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}';
injectStyles(css_248z2);

// node_modules/@fullcalendar/timegrid/index.js
var OPTION_REFINERS = {
  allDaySlot: Boolean
};
var index2 = createPlugin({
  name: "@fullcalendar/timegrid",
  initialView: "timeGridWeek",
  optionRefiners: OPTION_REFINERS,
  views: {
    timeGrid: {
      component: DayTimeColsView,
      usesMinMaxTime: true,
      allDaySlot: true,
      slotDuration: "00:30:00",
      slotEventOverlap: true
      // a bad name. confused with overlap/constraint system
    },
    timeGridDay: {
      type: "timeGrid",
      duration: {
        days: 1
      }
    },
    timeGridWeek: {
      type: "timeGrid",
      duration: {
        weeks: 1
      }
    }
  }
});

// node_modules/@fullcalendar/list/internal.js
var ListViewHeaderRow = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      textId: getUniqueDomId()
    };
  }
  render() {
    let {
      theme,
      dateEnv,
      options,
      viewApi
    } = this.context;
    let {
      cellId,
      dayDate,
      todayRange
    } = this.props;
    let {
      textId
    } = this.state;
    let dayMeta = getDateMeta(dayDate, todayRange);
    let text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : "";
    let sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : "";
    let renderProps = Object.assign({
      date: dateEnv.toDate(dayDate),
      view: viewApi,
      textId,
      text,
      sideText,
      navLinkAttrs: buildNavLinkAttrs(this.context, dayDate),
      sideNavLinkAttrs: buildNavLinkAttrs(this.context, dayDate, "day", false)
    }, dayMeta);
    return y(ContentContainer, {
      elTag: "tr",
      elClasses: ["fc-list-day", ...getDayClassNames(dayMeta, theme)],
      elAttrs: {
        "data-date": formatDayString(dayDate)
      },
      renderProps,
      generatorName: "dayHeaderContent",
      customGenerator: options.dayHeaderContent,
      defaultGenerator: renderInnerContent3,
      classNameGenerator: options.dayHeaderClassNames,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, (InnerContent) => (
      // TODO: force-hide top border based on :first-child
      y("th", {
        scope: "colgroup",
        colSpan: 3,
        id: cellId,
        "aria-labelledby": textId
      }, y(InnerContent, {
        elTag: "div",
        elClasses: ["fc-list-day-cushion", theme.getClass("tableCellShaded")]
      }))
    ));
  }
};
function renderInnerContent3(props) {
  return y(_, null, props.text && y("a", Object.assign({
    id: props.textId,
    className: "fc-list-day-text"
  }, props.navLinkAttrs), props.text), props.sideText && /* not keyboard tabbable */
  y("a", Object.assign({
    "aria-hidden": true,
    className: "fc-list-day-side-text"
  }, props.sideNavLinkAttrs), props.sideText));
}
var DEFAULT_TIME_FORMAT2 = createFormatter({
  hour: "numeric",
  minute: "2-digit",
  meridiem: "short"
});
var ListViewEventRow = class extends BaseComponent {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      seg,
      timeHeaderId,
      eventHeaderId,
      dateHeaderId
    } = props;
    let timeFormat = options.eventTimeFormat || DEFAULT_TIME_FORMAT2;
    return y(EventContainer, Object.assign({}, props, {
      elTag: "tr",
      elClasses: ["fc-list-event", seg.eventRange.def.url && "fc-event-forced-url"],
      defaultGenerator: () => renderEventInnerContent(seg, context),
      seg,
      timeText: "",
      disableDragging: true,
      disableResizing: true
    }), (InnerContent, eventContentArg) => y(_, null, buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId), y("td", {
      "aria-hidden": true,
      className: "fc-list-event-graphic"
    }, y("span", {
      className: "fc-list-event-dot",
      style: {
        borderColor: eventContentArg.borderColor || eventContentArg.backgroundColor
      }
    })), y(InnerContent, {
      elTag: "td",
      elClasses: ["fc-list-event-title"],
      elAttrs: {
        headers: `${eventHeaderId} ${dateHeaderId}`
      }
    })));
  }
};
function renderEventInnerContent(seg, context) {
  let interactiveAttrs = getSegAnchorAttrs(seg, context);
  return y("a", Object.assign({}, interactiveAttrs), seg.eventRange.def.title);
}
function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
  let {
    options
  } = context;
  if (options.displayEventTime !== false) {
    let eventDef = seg.eventRange.def;
    let eventInstance = seg.eventRange.instance;
    let doAllDay = false;
    let timeText;
    if (eventDef.allDay) {
      doAllDay = true;
    } else if (isMultiDayRange(seg.eventRange.range)) {
      if (seg.isStart) {
        timeText = buildSegTimeText(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
      } else if (seg.isEnd) {
        timeText = buildSegTimeText(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
      } else {
        doAllDay = true;
      }
    } else {
      timeText = buildSegTimeText(seg, timeFormat, context);
    }
    if (doAllDay) {
      let renderProps = {
        text: context.options.allDayText,
        view: context.viewApi
      };
      return y(ContentContainer, {
        elTag: "td",
        elClasses: ["fc-list-event-time"],
        elAttrs: {
          headers: `${timeHeaderId} ${dateHeaderId}`
        },
        renderProps,
        generatorName: "allDayContent",
        customGenerator: options.allDayContent,
        defaultGenerator: renderAllDayInner2,
        classNameGenerator: options.allDayClassNames,
        didMount: options.allDayDidMount,
        willUnmount: options.allDayWillUnmount
      });
    }
    return y("td", {
      className: "fc-list-event-time"
    }, timeText);
  }
  return null;
}
function renderAllDayInner2(renderProps) {
  return renderProps.text;
}
var ListView = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.computeDateVars = memoize(computeDateVars);
    this.eventStoreToSegs = memoize(this._eventStoreToSegs);
    this.state = {
      timeHeaderId: getUniqueDomId(),
      eventHeaderId: getUniqueDomId(),
      dateHeaderIdRoot: getUniqueDomId()
    };
    this.setRootEl = (rootEl) => {
      if (rootEl) {
        this.context.registerInteractiveComponent(this, {
          el: rootEl
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
  }
  render() {
    let {
      props,
      context
    } = this;
    let {
      dayDates,
      dayRanges
    } = this.computeDateVars(props.dateProfile);
    let eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
    return y(ViewContainer, {
      elRef: this.setRootEl,
      elClasses: ["fc-list", context.theme.getClass("table"), context.options.stickyHeaderDates !== false ? "fc-list-sticky" : ""],
      viewSpec: context.viewSpec
    }, y(Scroller, {
      liquid: !props.isHeightAuto,
      overflowX: props.isHeightAuto ? "visible" : "hidden",
      overflowY: props.isHeightAuto ? "visible" : "auto"
    }, eventSegs.length > 0 ? this.renderSegList(eventSegs, dayDates) : this.renderEmptyMessage()));
  }
  renderEmptyMessage() {
    let {
      options,
      viewApi
    } = this.context;
    let renderProps = {
      text: options.noEventsText,
      view: viewApi
    };
    return y(ContentContainer, {
      elTag: "div",
      elClasses: ["fc-list-empty"],
      renderProps,
      generatorName: "noEventsContent",
      customGenerator: options.noEventsContent,
      defaultGenerator: renderNoEventsInner,
      classNameGenerator: options.noEventsClassNames,
      didMount: options.noEventsDidMount,
      willUnmount: options.noEventsWillUnmount
    }, (InnerContent) => y(InnerContent, {
      elTag: "div",
      elClasses: ["fc-list-empty-cushion"]
    }));
  }
  renderSegList(allSegs, dayDates) {
    let {
      theme,
      options
    } = this.context;
    let {
      timeHeaderId,
      eventHeaderId,
      dateHeaderIdRoot
    } = this.state;
    let segsByDay = groupSegsByDay(allSegs);
    return y(NowTimer, {
      unit: "day"
    }, (nowDate, todayRange) => {
      let innerNodes = [];
      for (let dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
        let daySegs = segsByDay[dayIndex];
        if (daySegs) {
          let dayStr = formatDayString(dayDates[dayIndex]);
          let dateHeaderId = dateHeaderIdRoot + "-" + dayStr;
          innerNodes.push(y(ListViewHeaderRow, {
            key: dayStr,
            cellId: dateHeaderId,
            dayDate: dayDates[dayIndex],
            todayRange
          }));
          daySegs = sortEventSegs(daySegs, options.eventOrder);
          for (let seg of daySegs) {
            innerNodes.push(y(ListViewEventRow, Object.assign({
              key: dayStr + ":" + seg.eventRange.instance.instanceId,
              seg,
              isDragging: false,
              isResizing: false,
              isDateSelecting: false,
              isSelected: false,
              timeHeaderId,
              eventHeaderId,
              dateHeaderId
            }, getSegMeta(seg, todayRange, nowDate))));
          }
        }
      }
      return y("table", {
        className: "fc-list-table " + theme.getClass("table")
      }, y("thead", null, y("tr", null, y("th", {
        scope: "col",
        id: timeHeaderId
      }, options.timeHint), y("th", {
        scope: "col",
        "aria-hidden": true
      }), y("th", {
        scope: "col",
        id: eventHeaderId
      }, options.eventHint))), y("tbody", null, innerNodes));
    });
  }
  _eventStoreToSegs(eventStore, eventUiBases, dayRanges) {
    return this.eventRangesToSegs(sliceEventStore(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
  }
  eventRangesToSegs(eventRanges, dayRanges) {
    let segs = [];
    for (let eventRange of eventRanges) {
      segs.push(...this.eventRangeToSegs(eventRange, dayRanges));
    }
    return segs;
  }
  eventRangeToSegs(eventRange, dayRanges) {
    let {
      dateEnv
    } = this.context;
    let {
      nextDayThreshold
    } = this.context.options;
    let range = eventRange.range;
    let allDay = eventRange.def.allDay;
    let dayIndex;
    let segRange;
    let seg;
    let segs = [];
    for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
      segRange = intersectRanges(range, dayRanges[dayIndex]);
      if (segRange) {
        seg = {
          component: this,
          eventRange,
          start: segRange.start,
          end: segRange.end,
          isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
          isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
          dayIndex
        };
        segs.push(seg);
        if (!seg.isEnd && !allDay && dayIndex + 1 < dayRanges.length && range.end < dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
          seg.end = range.end;
          seg.isEnd = true;
          break;
        }
      }
    }
    return segs;
  }
};
function renderNoEventsInner(renderProps) {
  return renderProps.text;
}
function computeDateVars(dateProfile) {
  let dayStart = startOfDay(dateProfile.renderRange.start);
  let viewEnd = dateProfile.renderRange.end;
  let dayDates = [];
  let dayRanges = [];
  while (dayStart < viewEnd) {
    dayDates.push(dayStart);
    dayRanges.push({
      start: dayStart,
      end: addDays(dayStart, 1)
    });
    dayStart = addDays(dayStart, 1);
  }
  return {
    dayDates,
    dayRanges
  };
}
function groupSegsByDay(segs) {
  let segsByDay = [];
  let i;
  let seg;
  for (i = 0; i < segs.length; i += 1) {
    seg = segs[i];
    (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = [])).push(seg);
  }
  return segsByDay;
}
var css_248z3 = ':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}';
injectStyles(css_248z3);

// node_modules/@fullcalendar/list/index.js
var OPTION_REFINERS2 = {
  listDayFormat: createFalsableFormatter,
  listDaySideFormat: createFalsableFormatter,
  noEventsClassNames: identity,
  noEventsContent: identity,
  noEventsDidMount: identity,
  noEventsWillUnmount: identity
  // noEventsText is defined in base options
};
function createFalsableFormatter(input) {
  return input === false ? null : createFormatter(input);
}
var index3 = createPlugin({
  name: "@fullcalendar/list",
  optionRefiners: OPTION_REFINERS2,
  views: {
    list: {
      component: ListView,
      buttonTextKey: "list",
      listDayFormat: {
        month: "long",
        day: "numeric",
        year: "numeric"
      }
      // like "January 1, 2016"
    },
    listDay: {
      type: "list",
      duration: {
        days: 1
      },
      listDayFormat: {
        weekday: "long"
      }
      // day-of-week is all we need. full date is probably in headerToolbar
    },
    listWeek: {
      type: "list",
      duration: {
        weeks: 1
      },
      listDayFormat: {
        weekday: "long"
      },
      listDaySideFormat: {
        month: "long",
        day: "numeric",
        year: "numeric"
      }
    },
    listMonth: {
      type: "list",
      duration: {
        month: 1
      },
      listDaySideFormat: {
        weekday: "long"
      }
      // day-of-week is nice-to-have
    },
    listYear: {
      type: "list",
      duration: {
        year: 1
      },
      listDaySideFormat: {
        weekday: "long"
      }
      // day-of-week is nice-to-have
    }
  }
});

// node_modules/@fullcalendar/interaction/index.js
config.touchMouseIgnoreWait = 500;
var ignoreMouseDepth = 0;
var listenerCnt = 0;
var isWindowTouchMoveCancelled = false;
var PointerDragging = class {
  constructor(containerEl) {
    this.subjectEl = null;
    this.selector = "";
    this.handleSelector = "";
    this.shouldIgnoreMove = false;
    this.shouldWatchScroll = true;
    this.isDragging = false;
    this.isTouchDragging = false;
    this.wasTouchScroll = false;
    this.handleMouseDown = (ev) => {
      if (!this.shouldIgnoreMouse() && isPrimaryMouseButton(ev) && this.tryStart(ev)) {
        let pev = this.createEventFromMouse(ev, true);
        this.emitter.trigger("pointerdown", pev);
        this.initScrollWatch(pev);
        if (!this.shouldIgnoreMove) {
          document.addEventListener("mousemove", this.handleMouseMove);
        }
        document.addEventListener("mouseup", this.handleMouseUp);
      }
    };
    this.handleMouseMove = (ev) => {
      let pev = this.createEventFromMouse(ev);
      this.recordCoords(pev);
      this.emitter.trigger("pointermove", pev);
    };
    this.handleMouseUp = (ev) => {
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.handleMouseUp);
      this.emitter.trigger("pointerup", this.createEventFromMouse(ev));
      this.cleanup();
    };
    this.handleTouchStart = (ev) => {
      if (this.tryStart(ev)) {
        this.isTouchDragging = true;
        let pev = this.createEventFromTouch(ev, true);
        this.emitter.trigger("pointerdown", pev);
        this.initScrollWatch(pev);
        let targetEl = ev.target;
        if (!this.shouldIgnoreMove) {
          targetEl.addEventListener("touchmove", this.handleTouchMove);
        }
        targetEl.addEventListener("touchend", this.handleTouchEnd);
        targetEl.addEventListener("touchcancel", this.handleTouchEnd);
        window.addEventListener("scroll", this.handleTouchScroll, true);
      }
    };
    this.handleTouchMove = (ev) => {
      let pev = this.createEventFromTouch(ev);
      this.recordCoords(pev);
      this.emitter.trigger("pointermove", pev);
    };
    this.handleTouchEnd = (ev) => {
      if (this.isDragging) {
        let targetEl = ev.target;
        targetEl.removeEventListener("touchmove", this.handleTouchMove);
        targetEl.removeEventListener("touchend", this.handleTouchEnd);
        targetEl.removeEventListener("touchcancel", this.handleTouchEnd);
        window.removeEventListener("scroll", this.handleTouchScroll, true);
        this.emitter.trigger("pointerup", this.createEventFromTouch(ev));
        this.cleanup();
        this.isTouchDragging = false;
        startIgnoringMouse();
      }
    };
    this.handleTouchScroll = () => {
      this.wasTouchScroll = true;
    };
    this.handleScroll = (ev) => {
      if (!this.shouldIgnoreMove) {
        let pageX = window.scrollX - this.prevScrollX + this.prevPageX;
        let pageY = window.scrollY - this.prevScrollY + this.prevPageY;
        this.emitter.trigger("pointermove", {
          origEvent: ev,
          isTouch: this.isTouchDragging,
          subjectEl: this.subjectEl,
          pageX,
          pageY,
          deltaX: pageX - this.origPageX,
          deltaY: pageY - this.origPageY
        });
      }
    };
    this.containerEl = containerEl;
    this.emitter = new Emitter();
    containerEl.addEventListener("mousedown", this.handleMouseDown);
    containerEl.addEventListener("touchstart", this.handleTouchStart, {
      passive: true
    });
    listenerCreated();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown);
    this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
      passive: true
    });
    listenerDestroyed();
  }
  tryStart(ev) {
    let subjectEl = this.querySubjectEl(ev);
    let downEl = ev.target;
    if (subjectEl && (!this.handleSelector || elementClosest(downEl, this.handleSelector))) {
      this.subjectEl = subjectEl;
      this.isDragging = true;
      this.wasTouchScroll = false;
      return true;
    }
    return false;
  }
  cleanup() {
    isWindowTouchMoveCancelled = false;
    this.isDragging = false;
    this.subjectEl = null;
    this.destroyScrollWatch();
  }
  querySubjectEl(ev) {
    if (this.selector) {
      return elementClosest(ev.target, this.selector);
    }
    return this.containerEl;
  }
  shouldIgnoreMouse() {
    return ignoreMouseDepth || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    if (this.isDragging) {
      isWindowTouchMoveCancelled = true;
    }
  }
  // Scrolling that simulates pointermoves
  // ----------------------------------------------------------------------------------------------------
  initScrollWatch(ev) {
    if (this.shouldWatchScroll) {
      this.recordCoords(ev);
      window.addEventListener("scroll", this.handleScroll, true);
    }
  }
  recordCoords(ev) {
    if (this.shouldWatchScroll) {
      this.prevPageX = ev.pageX;
      this.prevPageY = ev.pageY;
      this.prevScrollX = window.scrollX;
      this.prevScrollY = window.scrollY;
    }
  }
  destroyScrollWatch() {
    if (this.shouldWatchScroll) {
      window.removeEventListener("scroll", this.handleScroll, true);
    }
  }
  // Event Normalization
  // ----------------------------------------------------------------------------------------------------
  createEventFromMouse(ev, isFirst) {
    let deltaX = 0;
    let deltaY = 0;
    if (isFirst) {
      this.origPageX = ev.pageX;
      this.origPageY = ev.pageY;
    } else {
      deltaX = ev.pageX - this.origPageX;
      deltaY = ev.pageY - this.origPageY;
    }
    return {
      origEvent: ev,
      isTouch: false,
      subjectEl: this.subjectEl,
      pageX: ev.pageX,
      pageY: ev.pageY,
      deltaX,
      deltaY
    };
  }
  createEventFromTouch(ev, isFirst) {
    let touches = ev.touches;
    let pageX;
    let pageY;
    let deltaX = 0;
    let deltaY = 0;
    if (touches && touches.length) {
      pageX = touches[0].pageX;
      pageY = touches[0].pageY;
    } else {
      pageX = ev.pageX;
      pageY = ev.pageY;
    }
    if (isFirst) {
      this.origPageX = pageX;
      this.origPageY = pageY;
    } else {
      deltaX = pageX - this.origPageX;
      deltaY = pageY - this.origPageY;
    }
    return {
      origEvent: ev,
      isTouch: true,
      subjectEl: this.subjectEl,
      pageX,
      pageY,
      deltaX,
      deltaY
    };
  }
};
function isPrimaryMouseButton(ev) {
  return ev.button === 0 && !ev.ctrlKey;
}
function startIgnoringMouse() {
  ignoreMouseDepth += 1;
  setTimeout(() => {
    ignoreMouseDepth -= 1;
  }, config.touchMouseIgnoreWait);
}
function listenerCreated() {
  listenerCnt += 1;
  if (listenerCnt === 1) {
    window.addEventListener("touchmove", onWindowTouchMove, {
      passive: false
    });
  }
}
function listenerDestroyed() {
  listenerCnt -= 1;
  if (!listenerCnt) {
    window.removeEventListener("touchmove", onWindowTouchMove, {
      passive: false
    });
  }
}
function onWindowTouchMove(ev) {
  if (isWindowTouchMoveCancelled) {
    ev.preventDefault();
  }
}
var ElementMirror = class {
  constructor() {
    this.isVisible = false;
    this.sourceEl = null;
    this.mirrorEl = null;
    this.sourceElRect = null;
    this.parentNode = document.body;
    this.zIndex = 9999;
    this.revertDuration = 0;
  }
  start(sourceEl, pageX, pageY) {
    this.sourceEl = sourceEl;
    this.sourceElRect = this.sourceEl.getBoundingClientRect();
    this.origScreenX = pageX - window.scrollX;
    this.origScreenY = pageY - window.scrollY;
    this.deltaX = 0;
    this.deltaY = 0;
    this.updateElPosition();
  }
  handleMove(pageX, pageY) {
    this.deltaX = pageX - window.scrollX - this.origScreenX;
    this.deltaY = pageY - window.scrollY - this.origScreenY;
    this.updateElPosition();
  }
  // can be called before start
  setIsVisible(bool) {
    if (bool) {
      if (!this.isVisible) {
        if (this.mirrorEl) {
          this.mirrorEl.style.display = "";
        }
        this.isVisible = bool;
        this.updateElPosition();
      }
    } else if (this.isVisible) {
      if (this.mirrorEl) {
        this.mirrorEl.style.display = "none";
      }
      this.isVisible = bool;
    }
  }
  // always async
  stop(needsRevertAnimation, callback) {
    let done = () => {
      this.cleanup();
      callback();
    };
    if (needsRevertAnimation && this.mirrorEl && this.isVisible && this.revertDuration && // if 0, transition won't work
    (this.deltaX || this.deltaY)) {
      this.doRevertAnimation(done, this.revertDuration);
    } else {
      setTimeout(done, 0);
    }
  }
  doRevertAnimation(callback, revertDuration) {
    let mirrorEl = this.mirrorEl;
    let finalSourceElRect = this.sourceEl.getBoundingClientRect();
    mirrorEl.style.transition = "top " + revertDuration + "ms,left " + revertDuration + "ms";
    applyStyle(mirrorEl, {
      left: finalSourceElRect.left,
      top: finalSourceElRect.top
    });
    whenTransitionDone(mirrorEl, () => {
      mirrorEl.style.transition = "";
      callback();
    });
  }
  cleanup() {
    if (this.mirrorEl) {
      removeElement(this.mirrorEl);
      this.mirrorEl = null;
    }
    this.sourceEl = null;
  }
  updateElPosition() {
    if (this.sourceEl && this.isVisible) {
      applyStyle(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }
  }
  getMirrorEl() {
    let sourceElRect = this.sourceElRect;
    let mirrorEl = this.mirrorEl;
    if (!mirrorEl) {
      mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true);
      mirrorEl.style.userSelect = "none";
      mirrorEl.style.webkitUserSelect = "none";
      mirrorEl.style.pointerEvents = "none";
      mirrorEl.classList.add("fc-event-dragging");
      applyStyle(mirrorEl, {
        position: "fixed",
        zIndex: this.zIndex,
        visibility: "",
        boxSizing: "border-box",
        width: sourceElRect.right - sourceElRect.left,
        height: sourceElRect.bottom - sourceElRect.top,
        right: "auto",
        bottom: "auto",
        margin: 0
      });
      this.parentNode.appendChild(mirrorEl);
    }
    return mirrorEl;
  }
};
var ScrollGeomCache = class extends ScrollController {
  constructor(scrollController, doesListening) {
    super();
    this.handleScroll = () => {
      this.scrollTop = this.scrollController.getScrollTop();
      this.scrollLeft = this.scrollController.getScrollLeft();
      this.handleScrollChange();
    };
    this.scrollController = scrollController;
    this.doesListening = doesListening;
    this.scrollTop = this.origScrollTop = scrollController.getScrollTop();
    this.scrollLeft = this.origScrollLeft = scrollController.getScrollLeft();
    this.scrollWidth = scrollController.getScrollWidth();
    this.scrollHeight = scrollController.getScrollHeight();
    this.clientWidth = scrollController.getClientWidth();
    this.clientHeight = scrollController.getClientHeight();
    this.clientRect = this.computeClientRect();
    if (this.doesListening) {
      this.getEventTarget().addEventListener("scroll", this.handleScroll);
    }
  }
  destroy() {
    if (this.doesListening) {
      this.getEventTarget().removeEventListener("scroll", this.handleScroll);
    }
  }
  getScrollTop() {
    return this.scrollTop;
  }
  getScrollLeft() {
    return this.scrollLeft;
  }
  setScrollTop(top) {
    this.scrollController.setScrollTop(top);
    if (!this.doesListening) {
      this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
      this.handleScrollChange();
    }
  }
  setScrollLeft(top) {
    this.scrollController.setScrollLeft(top);
    if (!this.doesListening) {
      this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
      this.handleScrollChange();
    }
  }
  getClientWidth() {
    return this.clientWidth;
  }
  getClientHeight() {
    return this.clientHeight;
  }
  getScrollWidth() {
    return this.scrollWidth;
  }
  getScrollHeight() {
    return this.scrollHeight;
  }
  handleScrollChange() {
  }
};
var ElementScrollGeomCache = class extends ScrollGeomCache {
  constructor(el, doesListening) {
    super(new ElementScrollController(el), doesListening);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return computeInnerRect(this.scrollController.el);
  }
};
var WindowScrollGeomCache = class extends ScrollGeomCache {
  constructor(doesListening) {
    super(new WindowScrollController(), doesListening);
  }
  getEventTarget() {
    return window;
  }
  computeClientRect() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }
  // the window is the only scroll object that changes it's rectangle relative
  // to the document's topleft as it scrolls
  handleScrollChange() {
    this.clientRect = this.computeClientRect();
  }
};
var getTime = typeof performance === "function" ? performance.now : Date.now;
var AutoScroller = class {
  constructor() {
    this.isEnabled = true;
    this.scrollQuery = [window, ".fc-scroller"];
    this.edgeThreshold = 50;
    this.maxVelocity = 300;
    this.pointerScreenX = null;
    this.pointerScreenY = null;
    this.isAnimating = false;
    this.scrollCaches = null;
    this.everMovedUp = false;
    this.everMovedDown = false;
    this.everMovedLeft = false;
    this.everMovedRight = false;
    this.animate = () => {
      if (this.isAnimating) {
        let edge = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
        if (edge) {
          let now = getTime();
          this.handleSide(edge, (now - this.msSinceRequest) / 1e3);
          this.requestAnimation(now);
        } else {
          this.isAnimating = false;
        }
      }
    };
  }
  start(pageX, pageY, scrollStartEl) {
    if (this.isEnabled) {
      this.scrollCaches = this.buildCaches(scrollStartEl);
      this.pointerScreenX = null;
      this.pointerScreenY = null;
      this.everMovedUp = false;
      this.everMovedDown = false;
      this.everMovedLeft = false;
      this.everMovedRight = false;
      this.handleMove(pageX, pageY);
    }
  }
  handleMove(pageX, pageY) {
    if (this.isEnabled) {
      let pointerScreenX = pageX - window.scrollX;
      let pointerScreenY = pageY - window.scrollY;
      let yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
      let xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
      if (yDelta < 0) {
        this.everMovedUp = true;
      } else if (yDelta > 0) {
        this.everMovedDown = true;
      }
      if (xDelta < 0) {
        this.everMovedLeft = true;
      } else if (xDelta > 0) {
        this.everMovedRight = true;
      }
      this.pointerScreenX = pointerScreenX;
      this.pointerScreenY = pointerScreenY;
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.requestAnimation(getTime());
      }
    }
  }
  stop() {
    if (this.isEnabled) {
      this.isAnimating = false;
      for (let scrollCache of this.scrollCaches) {
        scrollCache.destroy();
      }
      this.scrollCaches = null;
    }
  }
  requestAnimation(now) {
    this.msSinceRequest = now;
    requestAnimationFrame(this.animate);
  }
  handleSide(edge, seconds) {
    let {
      scrollCache
    } = edge;
    let {
      edgeThreshold
    } = this;
    let invDistance = edgeThreshold - edge.distance;
    let velocity = (
      // the closer to the edge, the faster we scroll
      invDistance * invDistance / (edgeThreshold * edgeThreshold) * // quadratic
      this.maxVelocity * seconds
    );
    let sign = 1;
    switch (edge.name) {
      case "left":
        sign = -1;
      // falls through
      case "right":
        scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
        break;
      case "top":
        sign = -1;
      // falls through
      case "bottom":
        scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
        break;
    }
  }
  // left/top are relative to document topleft
  computeBestEdge(left, top) {
    let {
      edgeThreshold
    } = this;
    let bestSide = null;
    let scrollCaches = this.scrollCaches || [];
    for (let scrollCache of scrollCaches) {
      let rect = scrollCache.clientRect;
      let leftDist = left - rect.left;
      let rightDist = rect.right - left;
      let topDist = top - rect.top;
      let bottomDist = rect.bottom - top;
      if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
        if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() && (!bestSide || bestSide.distance > topDist)) {
          bestSide = {
            scrollCache,
            name: "top",
            distance: topDist
          };
        }
        if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() && (!bestSide || bestSide.distance > bottomDist)) {
          bestSide = {
            scrollCache,
            name: "bottom",
            distance: bottomDist
          };
        }
        if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() && (!bestSide || bestSide.distance > leftDist)) {
          bestSide = {
            scrollCache,
            name: "left",
            distance: leftDist
          };
        }
        if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() && (!bestSide || bestSide.distance > rightDist)) {
          bestSide = {
            scrollCache,
            name: "right",
            distance: rightDist
          };
        }
      }
    }
    return bestSide;
  }
  buildCaches(scrollStartEl) {
    return this.queryScrollEls(scrollStartEl).map((el) => {
      if (el === window) {
        return new WindowScrollGeomCache(false);
      }
      return new ElementScrollGeomCache(el, false);
    });
  }
  queryScrollEls(scrollStartEl) {
    let els = [];
    for (let query of this.scrollQuery) {
      if (typeof query === "object") {
        els.push(query);
      } else {
        els.push(...Array.prototype.slice.call(scrollStartEl.getRootNode().querySelectorAll(query)));
      }
    }
    return els;
  }
};
var FeaturefulElementDragging = class extends ElementDragging {
  constructor(containerEl, selector) {
    super(containerEl);
    this.containerEl = containerEl;
    this.delay = null;
    this.minDistance = 0;
    this.touchScrollAllowed = true;
    this.mirrorNeedsRevert = false;
    this.isInteracting = false;
    this.isDragging = false;
    this.isDelayEnded = false;
    this.isDistanceSurpassed = false;
    this.delayTimeoutId = null;
    this.onPointerDown = (ev) => {
      if (!this.isDragging) {
        this.isInteracting = true;
        this.isDelayEnded = false;
        this.isDistanceSurpassed = false;
        preventSelection(document.body);
        preventContextMenu(document.body);
        if (!ev.isTouch) {
          ev.origEvent.preventDefault();
        }
        this.emitter.trigger("pointerdown", ev);
        if (this.isInteracting && // not destroyed via pointerdown handler
        !this.pointer.shouldIgnoreMove) {
          this.mirror.setIsVisible(false);
          this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY);
          this.startDelay(ev);
          if (!this.minDistance) {
            this.handleDistanceSurpassed(ev);
          }
        }
      }
    };
    this.onPointerMove = (ev) => {
      if (this.isInteracting) {
        this.emitter.trigger("pointermove", ev);
        if (!this.isDistanceSurpassed) {
          let minDistance = this.minDistance;
          let distanceSq;
          let {
            deltaX,
            deltaY
          } = ev;
          distanceSq = deltaX * deltaX + deltaY * deltaY;
          if (distanceSq >= minDistance * minDistance) {
            this.handleDistanceSurpassed(ev);
          }
        }
        if (this.isDragging) {
          if (ev.origEvent.type !== "scroll") {
            this.mirror.handleMove(ev.pageX, ev.pageY);
            this.autoScroller.handleMove(ev.pageX, ev.pageY);
          }
          this.emitter.trigger("dragmove", ev);
        }
      }
    };
    this.onPointerUp = (ev) => {
      if (this.isInteracting) {
        this.isInteracting = false;
        allowSelection(document.body);
        allowContextMenu(document.body);
        this.emitter.trigger("pointerup", ev);
        if (this.isDragging) {
          this.autoScroller.stop();
          this.tryStopDrag(ev);
        }
        if (this.delayTimeoutId) {
          clearTimeout(this.delayTimeoutId);
          this.delayTimeoutId = null;
        }
      }
    };
    let pointer = this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on("pointerdown", this.onPointerDown);
    pointer.emitter.on("pointermove", this.onPointerMove);
    pointer.emitter.on("pointerup", this.onPointerUp);
    if (selector) {
      pointer.selector = selector;
    }
    this.mirror = new ElementMirror();
    this.autoScroller = new AutoScroller();
  }
  destroy() {
    this.pointer.destroy();
    this.onPointerUp({});
  }
  startDelay(ev) {
    if (typeof this.delay === "number") {
      this.delayTimeoutId = setTimeout(() => {
        this.delayTimeoutId = null;
        this.handleDelayEnd(ev);
      }, this.delay);
    } else {
      this.handleDelayEnd(ev);
    }
  }
  handleDelayEnd(ev) {
    this.isDelayEnded = true;
    this.tryStartDrag(ev);
  }
  handleDistanceSurpassed(ev) {
    this.isDistanceSurpassed = true;
    this.tryStartDrag(ev);
  }
  tryStartDrag(ev) {
    if (this.isDelayEnded && this.isDistanceSurpassed) {
      if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
        this.isDragging = true;
        this.mirrorNeedsRevert = false;
        this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
        this.emitter.trigger("dragstart", ev);
        if (this.touchScrollAllowed === false) {
          this.pointer.cancelTouchScroll();
        }
      }
    }
  }
  tryStopDrag(ev) {
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
  }
  stopDrag(ev) {
    this.isDragging = false;
    this.emitter.trigger("dragend", ev);
  }
  // fill in the implementations...
  setIgnoreMove(bool) {
    this.pointer.shouldIgnoreMove = bool;
  }
  setMirrorIsVisible(bool) {
    this.mirror.setIsVisible(bool);
  }
  setMirrorNeedsRevert(bool) {
    this.mirrorNeedsRevert = bool;
  }
  setAutoScrollEnabled(bool) {
    this.autoScroller.isEnabled = bool;
  }
};
var OffsetTracker = class {
  constructor(el) {
    this.el = el;
    this.origRect = computeRect(el);
    this.scrollCaches = getClippingParents(el).map((scrollEl) => new ElementScrollGeomCache(scrollEl, true));
  }
  destroy() {
    for (let scrollCache of this.scrollCaches) {
      scrollCache.destroy();
    }
  }
  computeLeft() {
    let left = this.origRect.left;
    for (let scrollCache of this.scrollCaches) {
      left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
    }
    return left;
  }
  computeTop() {
    let top = this.origRect.top;
    for (let scrollCache of this.scrollCaches) {
      top += scrollCache.origScrollTop - scrollCache.getScrollTop();
    }
    return top;
  }
  isWithinClipping(pageX, pageY) {
    let point = {
      left: pageX,
      top: pageY
    };
    for (let scrollCache of this.scrollCaches) {
      if (!isIgnoredClipping(scrollCache.getEventTarget()) && !pointInsideRect(point, scrollCache.clientRect)) {
        return false;
      }
    }
    return true;
  }
};
function isIgnoredClipping(node) {
  let tagName = node.tagName;
  return tagName === "HTML" || tagName === "BODY";
}
var HitDragging = class {
  constructor(dragging, droppableStore) {
    this.useSubjectCenter = false;
    this.requireInitial = true;
    this.disablePointCheck = false;
    this.initialHit = null;
    this.movingHit = null;
    this.finalHit = null;
    this.handlePointerDown = (ev) => {
      let {
        dragging: dragging2
      } = this;
      this.initialHit = null;
      this.movingHit = null;
      this.finalHit = null;
      this.prepareHits();
      this.processFirstCoord(ev);
      if (this.initialHit || !this.requireInitial) {
        dragging2.setIgnoreMove(false);
        this.emitter.trigger("pointerdown", ev);
      } else {
        dragging2.setIgnoreMove(true);
      }
    };
    this.handleDragStart = (ev) => {
      this.emitter.trigger("dragstart", ev);
      this.handleMove(ev, true);
    };
    this.handleDragMove = (ev) => {
      this.emitter.trigger("dragmove", ev);
      this.handleMove(ev);
    };
    this.handlePointerUp = (ev) => {
      this.releaseHits();
      this.emitter.trigger("pointerup", ev);
    };
    this.handleDragEnd = (ev) => {
      if (this.movingHit) {
        this.emitter.trigger("hitupdate", null, true, ev);
      }
      this.finalHit = this.movingHit;
      this.movingHit = null;
      this.emitter.trigger("dragend", ev);
    };
    this.droppableStore = droppableStore;
    dragging.emitter.on("pointerdown", this.handlePointerDown);
    dragging.emitter.on("dragstart", this.handleDragStart);
    dragging.emitter.on("dragmove", this.handleDragMove);
    dragging.emitter.on("pointerup", this.handlePointerUp);
    dragging.emitter.on("dragend", this.handleDragEnd);
    this.dragging = dragging;
    this.emitter = new Emitter();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(ev) {
    let origPoint = {
      left: ev.pageX,
      top: ev.pageY
    };
    let adjustedPoint = origPoint;
    let subjectEl = ev.subjectEl;
    let subjectRect;
    if (subjectEl instanceof HTMLElement) {
      subjectRect = computeRect(subjectEl);
      adjustedPoint = constrainPoint(adjustedPoint, subjectRect);
    }
    let initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
    if (initialHit) {
      if (this.useSubjectCenter && subjectRect) {
        let slicedSubjectRect = intersectRects(subjectRect, initialHit.rect);
        if (slicedSubjectRect) {
          adjustedPoint = getRectCenter(slicedSubjectRect);
        }
      }
      this.coordAdjust = diffPoints(adjustedPoint, origPoint);
    } else {
      this.coordAdjust = {
        left: 0,
        top: 0
      };
    }
  }
  handleMove(ev, forceHandle) {
    let hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
    if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
      this.movingHit = hit;
      this.emitter.trigger("hitupdate", hit, false, ev);
    }
  }
  prepareHits() {
    this.offsetTrackers = mapHash(this.droppableStore, (interactionSettings) => {
      interactionSettings.component.prepareHits();
      return new OffsetTracker(interactionSettings.el);
    });
  }
  releaseHits() {
    let {
      offsetTrackers
    } = this;
    for (let id in offsetTrackers) {
      offsetTrackers[id].destroy();
    }
    this.offsetTrackers = {};
  }
  queryHitForOffset(offsetLeft, offsetTop) {
    let {
      droppableStore,
      offsetTrackers
    } = this;
    let bestHit = null;
    for (let id in droppableStore) {
      let component = droppableStore[id].component;
      let offsetTracker = offsetTrackers[id];
      if (offsetTracker && // wasn't destroyed mid-drag
      offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
        let originLeft = offsetTracker.computeLeft();
        let originTop = offsetTracker.computeTop();
        let positionLeft = offsetLeft - originLeft;
        let positionTop = offsetTop - originTop;
        let {
          origRect
        } = offsetTracker;
        let width = origRect.right - origRect.left;
        let height = origRect.bottom - origRect.top;
        if (
          // must be within the element's bounds
          positionLeft >= 0 && positionLeft < width && positionTop >= 0 && positionTop < height
        ) {
          let hit = component.queryHit(positionLeft, positionTop, width, height);
          if (hit && // make sure the hit is within activeRange, meaning it's not a dead cell
          rangeContainsRange(hit.dateProfile.activeRange, hit.dateSpan.range) && // Ensure the component we are querying for the hit is accessibly my the pointer
          // Prevents obscured calendars (ex: under a modal dialog) from accepting hit
          // https://github.com/fullcalendar/fullcalendar/issues/5026
          (this.disablePointCheck || offsetTracker.el.contains(offsetTracker.el.getRootNode().elementFromPoint(
            // add-back origins to get coordinate relative to top-left of window viewport
            positionLeft + originLeft - window.scrollX,
            positionTop + originTop - window.scrollY
          ))) && (!bestHit || hit.layer > bestHit.layer)) {
            hit.componentId = id;
            hit.context = component.context;
            hit.rect.left += originLeft;
            hit.rect.right += originLeft;
            hit.rect.top += originTop;
            hit.rect.bottom += originTop;
            bestHit = hit;
          }
        }
      }
    }
    return bestHit;
  }
};
function isHitsEqual(hit0, hit1) {
  if (!hit0 && !hit1) {
    return true;
  }
  if (Boolean(hit0) !== Boolean(hit1)) {
    return false;
  }
  return isDateSpansEqual(hit0.dateSpan, hit1.dateSpan);
}
function buildDatePointApiWithContext(dateSpan, context) {
  let props = {};
  for (let transform of context.pluginHooks.datePointTransforms) {
    Object.assign(props, transform(dateSpan, context));
  }
  Object.assign(props, buildDatePointApi(dateSpan, context.dateEnv));
  return props;
}
function buildDatePointApi(span, dateEnv) {
  return {
    date: dateEnv.toDate(span.range.start),
    dateStr: dateEnv.formatIso(span.range.start, {
      omitTime: span.allDay
    }),
    allDay: span.allDay
  };
}
var DateClicking = class extends Interaction {
  constructor(settings) {
    super(settings);
    this.handlePointerDown = (pev) => {
      let {
        dragging
      } = this;
      let downEl = pev.origEvent.target;
      dragging.setIgnoreMove(!this.component.isValidDateDownEl(downEl));
    };
    this.handleDragEnd = (ev) => {
      let {
        component
      } = this;
      let {
        pointer
      } = this.dragging;
      if (!pointer.wasTouchScroll) {
        let {
          initialHit,
          finalHit
        } = this.hitDragging;
        if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
          let {
            context
          } = component;
          let arg = Object.assign(Object.assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), {
            dayEl: initialHit.dayEl,
            jsEvent: ev.origEvent,
            view: context.viewApi || context.calendarApi.view
          });
          context.emitter.trigger("dateClick", arg);
        }
      }
    };
    this.dragging = new FeaturefulElementDragging(settings.el);
    this.dragging.autoScroller.isEnabled = false;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
    hitDragging.emitter.on("pointerdown", this.handlePointerDown);
    hitDragging.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
};
var DateSelecting = class extends Interaction {
  constructor(settings) {
    super(settings);
    this.dragSelection = null;
    this.handlePointerDown = (ev) => {
      let {
        component: component2,
        dragging: dragging2
      } = this;
      let {
        options: options2
      } = component2.context;
      let canSelect = options2.selectable && component2.isValidDateDownEl(ev.origEvent.target);
      dragging2.setIgnoreMove(!canSelect);
      dragging2.delay = ev.isTouch ? getComponentTouchDelay$1(component2) : null;
    };
    this.handleDragStart = (ev) => {
      this.component.context.calendarApi.unselect(ev);
    };
    this.handleHitUpdate = (hit, isFinal) => {
      let {
        context
      } = this.component;
      let dragSelection = null;
      let isInvalid = false;
      if (hit) {
        let initialHit = this.hitDragging.initialHit;
        let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
        }
        if (!dragSelection || !isDateSelectionValid(dragSelection, hit.dateProfile, context)) {
          isInvalid = true;
          dragSelection = null;
        }
      }
      if (dragSelection) {
        context.dispatch({
          type: "SELECT_DATES",
          selection: dragSelection
        });
      } else if (!isFinal) {
        context.dispatch({
          type: "UNSELECT_DATES"
        });
      }
      if (!isInvalid) {
        enableCursor();
      } else {
        disableCursor();
      }
      if (!isFinal) {
        this.dragSelection = dragSelection;
      }
    };
    this.handlePointerUp = (pev) => {
      if (this.dragSelection) {
        triggerDateSelect(this.dragSelection, pev, this.component.context);
        this.dragSelection = null;
      }
    };
    let {
      component
    } = settings;
    let {
      options
    } = component.context;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.touchScrollAllowed = false;
    dragging.minDistance = options.selectMinDistance || 0;
    dragging.autoScroller.isEnabled = options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
    hitDragging.emitter.on("pointerdown", this.handlePointerDown);
    hitDragging.emitter.on("dragstart", this.handleDragStart);
    hitDragging.emitter.on("hitupdate", this.handleHitUpdate);
    hitDragging.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
};
function getComponentTouchDelay$1(component) {
  let {
    options
  } = component.context;
  let delay = options.selectLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
  let dateSpan0 = hit0.dateSpan;
  let dateSpan1 = hit1.dateSpan;
  let ms = [dateSpan0.range.start, dateSpan0.range.end, dateSpan1.range.start, dateSpan1.range.end];
  ms.sort(compareNumbers);
  let props = {};
  for (let transformer of dateSelectionTransformers) {
    let res = transformer(hit0, hit1);
    if (res === false) {
      return null;
    }
    if (res) {
      Object.assign(props, res);
    }
  }
  props.range = {
    start: ms[0],
    end: ms[3]
  };
  props.allDay = dateSpan0.allDay;
  return props;
}
var EventDragging = class _EventDragging extends Interaction {
  constructor(settings) {
    super(settings);
    this.subjectEl = null;
    this.subjectSeg = null;
    this.isDragging = false;
    this.eventRange = null;
    this.relevantEvents = null;
    this.receivingContext = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
    this.handlePointerDown = (ev) => {
      let origTarget = ev.origEvent.target;
      let {
        component: component2,
        dragging: dragging2
      } = this;
      let {
        mirror
      } = dragging2;
      let {
        options: options2
      } = component2.context;
      let initialContext = component2.context;
      this.subjectEl = ev.subjectEl;
      let subjectSeg = this.subjectSeg = getElSeg(ev.subjectEl);
      let eventRange = this.eventRange = subjectSeg.eventRange;
      let eventInstanceId = eventRange.instance.instanceId;
      this.relevantEvents = getRelevantEvents(initialContext.getCurrentData().eventStore, eventInstanceId);
      dragging2.minDistance = ev.isTouch ? 0 : options2.eventDragMinDistance;
      dragging2.delay = // only do a touch delay if touch and this event hasn't been selected yet
      ev.isTouch && eventInstanceId !== component2.props.eventSelection ? getComponentTouchDelay(component2) : null;
      if (options2.fixedMirrorParent) {
        mirror.parentNode = options2.fixedMirrorParent;
      } else {
        mirror.parentNode = elementClosest(origTarget, ".fc");
      }
      mirror.revertDuration = options2.dragRevertDuration;
      let isValid = component2.isValidSegDownEl(origTarget) && !elementClosest(origTarget, ".fc-event-resizer");
      dragging2.setIgnoreMove(!isValid);
      this.isDragging = isValid && ev.subjectEl.classList.contains("fc-event-draggable");
    };
    this.handleDragStart = (ev) => {
      let initialContext = this.component.context;
      let eventRange = this.eventRange;
      let eventInstanceId = eventRange.instance.instanceId;
      if (ev.isTouch) {
        if (eventInstanceId !== this.component.props.eventSelection) {
          initialContext.dispatch({
            type: "SELECT_EVENT",
            eventInstanceId
          });
        }
      } else {
        initialContext.dispatch({
          type: "UNSELECT_EVENT"
        });
      }
      if (this.isDragging) {
        initialContext.calendarApi.unselect(ev);
        initialContext.emitter.trigger("eventDragStart", {
          el: this.subjectEl,
          event: new EventImpl(initialContext, eventRange.def, eventRange.instance),
          jsEvent: ev.origEvent,
          view: initialContext.viewApi
        });
      }
    };
    this.handleHitUpdate = (hit, isFinal) => {
      if (!this.isDragging) {
        return;
      }
      let relevantEvents = this.relevantEvents;
      let initialHit = this.hitDragging.initialHit;
      let initialContext = this.component.context;
      let receivingContext = null;
      let mutation = null;
      let mutatedRelevantEvents = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: createEmptyEventStore(),
        isEvent: true
      };
      if (hit) {
        receivingContext = hit.context;
        let receivingOptions = receivingContext.options;
        if (initialContext === receivingContext || receivingOptions.editable && receivingOptions.droppable) {
          mutation = computeEventMutation(initialHit, hit, this.eventRange.instance.range.start, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
          if (mutation) {
            mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
            interaction.mutatedEvents = mutatedRelevantEvents;
            if (!isInteractionValid(interaction, hit.dateProfile, receivingContext)) {
              isInvalid = true;
              mutation = null;
              mutatedRelevantEvents = null;
              interaction.mutatedEvents = createEmptyEventStore();
            }
          }
        } else {
          receivingContext = null;
        }
      }
      this.displayDrag(receivingContext, interaction);
      if (!isInvalid) {
        enableCursor();
      } else {
        disableCursor();
      }
      if (!isFinal) {
        if (initialContext === receivingContext && // TODO: write test for this
        isHitsEqual(initialHit, hit)) {
          mutation = null;
        }
        this.dragging.setMirrorNeedsRevert(!mutation);
        this.dragging.setMirrorIsVisible(!hit || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror"));
        this.receivingContext = receivingContext;
        this.validMutation = mutation;
        this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };
    this.handlePointerUp = () => {
      if (!this.isDragging) {
        this.cleanup();
      }
    };
    this.handleDragEnd = (ev) => {
      if (this.isDragging) {
        let initialContext = this.component.context;
        let initialView = initialContext.viewApi;
        let {
          receivingContext,
          validMutation
        } = this;
        let eventDef = this.eventRange.def;
        let eventInstance = this.eventRange.instance;
        let eventApi = new EventImpl(initialContext, eventDef, eventInstance);
        let relevantEvents = this.relevantEvents;
        let mutatedRelevantEvents = this.mutatedRelevantEvents;
        let {
          finalHit
        } = this.hitDragging;
        this.clearDrag();
        initialContext.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: eventApi,
          jsEvent: ev.origEvent,
          view: initialView
        });
        if (validMutation) {
          if (receivingContext === initialContext) {
            let updatedEventApi = new EventImpl(initialContext, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
            initialContext.dispatch({
              type: "MERGE_EVENTS",
              eventStore: mutatedRelevantEvents
            });
            let eventChangeArg = {
              oldEvent: eventApi,
              event: updatedEventApi,
              relatedEvents: buildEventApis(mutatedRelevantEvents, initialContext, eventInstance),
              revert() {
                initialContext.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: relevantEvents
                  // the pre-change data
                });
              }
            };
            let transformed = {};
            for (let transformer of initialContext.getCurrentData().pluginHooks.eventDropTransformers) {
              Object.assign(transformed, transformer(validMutation, initialContext));
            }
            initialContext.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, eventChangeArg), transformed), {
              el: ev.subjectEl,
              delta: validMutation.datesDelta,
              jsEvent: ev.origEvent,
              view: initialView
            }));
            initialContext.emitter.trigger("eventChange", eventChangeArg);
          } else if (receivingContext) {
            let eventRemoveArg = {
              event: eventApi,
              relatedEvents: buildEventApis(relevantEvents, initialContext, eventInstance),
              revert() {
                initialContext.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: relevantEvents
                });
              }
            };
            initialContext.emitter.trigger("eventLeave", Object.assign(Object.assign({}, eventRemoveArg), {
              draggedEl: ev.subjectEl,
              view: initialView
            }));
            initialContext.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: relevantEvents
            });
            initialContext.emitter.trigger("eventRemove", eventRemoveArg);
            let addedEventDef = mutatedRelevantEvents.defs[eventDef.defId];
            let addedEventInstance = mutatedRelevantEvents.instances[eventInstance.instanceId];
            let addedEventApi = new EventImpl(receivingContext, addedEventDef, addedEventInstance);
            receivingContext.dispatch({
              type: "MERGE_EVENTS",
              eventStore: mutatedRelevantEvents
            });
            let eventAddArg = {
              event: addedEventApi,
              relatedEvents: buildEventApis(mutatedRelevantEvents, receivingContext, addedEventInstance),
              revert() {
                receivingContext.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: mutatedRelevantEvents
                });
              }
            };
            receivingContext.emitter.trigger("eventAdd", eventAddArg);
            if (ev.isTouch) {
              receivingContext.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: eventInstance.instanceId
              });
            }
            receivingContext.emitter.trigger("drop", Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
              draggedEl: ev.subjectEl,
              jsEvent: ev.origEvent,
              view: finalHit.context.viewApi
            }));
            receivingContext.emitter.trigger("eventReceive", Object.assign(Object.assign({}, eventAddArg), {
              draggedEl: ev.subjectEl,
              view: finalHit.context.viewApi
            }));
          }
        } else {
          initialContext.emitter.trigger("_noEventDrop");
        }
      }
      this.cleanup();
    };
    let {
      component
    } = this;
    let {
      options
    } = component.context;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = _EventDragging.SELECTOR;
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsStore);
    hitDragging.useSubjectCenter = settings.useEventCenter;
    hitDragging.emitter.on("pointerdown", this.handlePointerDown);
    hitDragging.emitter.on("dragstart", this.handleDragStart);
    hitDragging.emitter.on("hitupdate", this.handleHitUpdate);
    hitDragging.emitter.on("pointerup", this.handlePointerUp);
    hitDragging.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  // render a drag state on the next receivingCalendar
  displayDrag(nextContext, state) {
    let initialContext = this.component.context;
    let prevContext = this.receivingContext;
    if (prevContext && prevContext !== nextContext) {
      if (prevContext === initialContext) {
        prevContext.dispatch({
          type: "SET_EVENT_DRAG",
          state: {
            affectedEvents: state.affectedEvents,
            mutatedEvents: createEmptyEventStore(),
            isEvent: true
          }
        });
      } else {
        prevContext.dispatch({
          type: "UNSET_EVENT_DRAG"
        });
      }
    }
    if (nextContext) {
      nextContext.dispatch({
        type: "SET_EVENT_DRAG",
        state
      });
    }
  }
  clearDrag() {
    let initialCalendar = this.component.context;
    let {
      receivingContext
    } = this;
    if (receivingContext) {
      receivingContext.dispatch({
        type: "UNSET_EVENT_DRAG"
      });
    }
    if (initialCalendar !== receivingContext) {
      initialCalendar.dispatch({
        type: "UNSET_EVENT_DRAG"
      });
    }
  }
  cleanup() {
    this.subjectSeg = null;
    this.isDragging = false;
    this.eventRange = null;
    this.relevantEvents = null;
    this.receivingContext = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
  }
};
EventDragging.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function computeEventMutation(hit0, hit1, eventInstanceStart, massagers) {
  let dateSpan0 = hit0.dateSpan;
  let dateSpan1 = hit1.dateSpan;
  let date0 = dateSpan0.range.start;
  let date1 = dateSpan1.range.start;
  let standardProps = {};
  if (dateSpan0.allDay !== dateSpan1.allDay) {
    standardProps.allDay = dateSpan1.allDay;
    standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
    if (dateSpan1.allDay) {
      date0 = startOfDay(eventInstanceStart);
    } else {
      date0 = eventInstanceStart;
    }
  }
  let delta = diffDates(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ? hit0.largeUnit : null);
  if (delta.milliseconds) {
    standardProps.allDay = false;
  }
  let mutation = {
    datesDelta: delta,
    standardProps
  };
  for (let massager of massagers) {
    massager(mutation, hit0, hit1);
  }
  return mutation;
}
function getComponentTouchDelay(component) {
  let {
    options
  } = component.context;
  let delay = options.eventLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
var EventResizing = class extends Interaction {
  constructor(settings) {
    super(settings);
    this.draggingSegEl = null;
    this.draggingSeg = null;
    this.eventRange = null;
    this.relevantEvents = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
    this.handlePointerDown = (ev) => {
      let {
        component: component2
      } = this;
      let segEl = this.querySegEl(ev);
      let seg = getElSeg(segEl);
      let eventRange = this.eventRange = seg.eventRange;
      this.dragging.minDistance = component2.context.options.eventDragMinDistance;
      this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(ev.origEvent.target) || ev.isTouch && this.component.props.eventSelection !== eventRange.instance.instanceId);
    };
    this.handleDragStart = (ev) => {
      let {
        context
      } = this.component;
      let eventRange = this.eventRange;
      this.relevantEvents = getRelevantEvents(context.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let segEl = this.querySegEl(ev);
      this.draggingSegEl = segEl;
      this.draggingSeg = getElSeg(segEl);
      context.calendarApi.unselect();
      context.emitter.trigger("eventResizeStart", {
        el: segEl,
        event: new EventImpl(context, eventRange.def, eventRange.instance),
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
    };
    this.handleHitUpdate = (hit, isFinal, ev) => {
      let {
        context
      } = this.component;
      let relevantEvents = this.relevantEvents;
      let initialHit = this.hitDragging.initialHit;
      let eventInstance = this.eventRange.instance;
      let mutation = null;
      let mutatedRelevantEvents = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: createEmptyEventStore(),
        isEvent: true
      };
      if (hit) {
        let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains("fc-event-resizer-start"), eventInstance.range);
        }
      }
      if (mutation) {
        mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
        interaction.mutatedEvents = mutatedRelevantEvents;
        if (!isInteractionValid(interaction, hit.dateProfile, context)) {
          isInvalid = true;
          mutation = null;
          mutatedRelevantEvents = null;
          interaction.mutatedEvents = null;
        }
      }
      if (mutatedRelevantEvents) {
        context.dispatch({
          type: "SET_EVENT_RESIZE",
          state: interaction
        });
      } else {
        context.dispatch({
          type: "UNSET_EVENT_RESIZE"
        });
      }
      if (!isInvalid) {
        enableCursor();
      } else {
        disableCursor();
      }
      if (!isFinal) {
        if (mutation && isHitsEqual(initialHit, hit)) {
          mutation = null;
        }
        this.validMutation = mutation;
        this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };
    this.handleDragEnd = (ev) => {
      let {
        context
      } = this.component;
      let eventDef = this.eventRange.def;
      let eventInstance = this.eventRange.instance;
      let eventApi = new EventImpl(context, eventDef, eventInstance);
      let relevantEvents = this.relevantEvents;
      let mutatedRelevantEvents = this.mutatedRelevantEvents;
      context.emitter.trigger("eventResizeStop", {
        el: this.draggingSegEl,
        event: eventApi,
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
      if (this.validMutation) {
        let updatedEventApi = new EventImpl(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
        context.dispatch({
          type: "MERGE_EVENTS",
          eventStore: mutatedRelevantEvents
        });
        let eventChangeArg = {
          oldEvent: eventApi,
          event: updatedEventApi,
          relatedEvents: buildEventApis(mutatedRelevantEvents, context, eventInstance),
          revert() {
            context.dispatch({
              type: "MERGE_EVENTS",
              eventStore: relevantEvents
              // the pre-change events
            });
          }
        };
        context.emitter.trigger("eventResize", Object.assign(Object.assign({}, eventChangeArg), {
          el: this.draggingSegEl,
          startDelta: this.validMutation.startDelta || createDuration(0),
          endDelta: this.validMutation.endDelta || createDuration(0),
          jsEvent: ev.origEvent,
          view: context.viewApi
        }));
        context.emitter.trigger("eventChange", eventChangeArg);
      } else {
        context.emitter.trigger("_noEventResize");
      }
      this.draggingSeg = null;
      this.relevantEvents = null;
      this.validMutation = null;
    };
    let {
      component
    } = settings;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = ".fc-event-resizer";
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = component.context.options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
    hitDragging.emitter.on("pointerdown", this.handlePointerDown);
    hitDragging.emitter.on("dragstart", this.handleDragStart);
    hitDragging.emitter.on("hitupdate", this.handleHitUpdate);
    hitDragging.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(ev) {
    return elementClosest(ev.subjectEl, ".fc-event");
  }
};
function computeMutation(hit0, hit1, isFromStart, instanceRange) {
  let dateEnv = hit0.context.dateEnv;
  let date0 = hit0.dateSpan.range.start;
  let date1 = hit1.dateSpan.range.start;
  let delta = diffDates(date0, date1, dateEnv, hit0.largeUnit);
  if (isFromStart) {
    if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
      return {
        startDelta: delta
      };
    }
  } else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
    return {
      endDelta: delta
    };
  }
  return null;
}
var UnselectAuto = class {
  constructor(context) {
    this.context = context;
    this.isRecentPointerDateSelect = false;
    this.matchesCancel = false;
    this.matchesEvent = false;
    this.onSelect = (selectInfo) => {
      if (selectInfo.jsEvent) {
        this.isRecentPointerDateSelect = true;
      }
    };
    this.onDocumentPointerDown = (pev) => {
      let unselectCancel = this.context.options.unselectCancel;
      let downEl = getEventTargetViaRoot(pev.origEvent);
      this.matchesCancel = !!elementClosest(downEl, unselectCancel);
      this.matchesEvent = !!elementClosest(downEl, EventDragging.SELECTOR);
    };
    this.onDocumentPointerUp = (pev) => {
      let {
        context: context2
      } = this;
      let {
        documentPointer: documentPointer2
      } = this;
      let calendarState = context2.getCurrentData();
      if (!documentPointer2.wasTouchScroll) {
        if (calendarState.dateSelection && // an existing date selection?
        !this.isRecentPointerDateSelect) {
          let unselectAuto = context2.options.unselectAuto;
          if (unselectAuto && (!unselectAuto || !this.matchesCancel)) {
            context2.calendarApi.unselect(pev);
          }
        }
        if (calendarState.eventSelection && // an existing event selected?
        !this.matchesEvent) {
          context2.dispatch({
            type: "UNSELECT_EVENT"
          });
        }
      }
      this.isRecentPointerDateSelect = false;
    };
    let documentPointer = this.documentPointer = new PointerDragging(document);
    documentPointer.shouldIgnoreMove = true;
    documentPointer.shouldWatchScroll = false;
    documentPointer.emitter.on("pointerdown", this.onDocumentPointerDown);
    documentPointer.emitter.on("pointerup", this.onDocumentPointerUp);
    context.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect);
    this.documentPointer.destroy();
  }
};
var OPTION_REFINERS3 = {
  fixedMirrorParent: identity
};
var LISTENER_REFINERS = {
  dateClick: identity,
  eventDragStart: identity,
  eventDragStop: identity,
  eventDrop: identity,
  eventResizeStart: identity,
  eventResizeStop: identity,
  eventResize: identity,
  drop: identity,
  eventReceive: identity,
  eventLeave: identity
};
config.dataAttrPrefix = "";
var index4 = createPlugin({
  name: "@fullcalendar/interaction",
  componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
  calendarInteractions: [UnselectAuto],
  elementDraggingImpl: FeaturefulElementDragging,
  optionRefiners: OPTION_REFINERS3,
  listenerRefiners: LISTENER_REFINERS
});

// node_modules/@fullcalendar/core/locales/fr.js
var l31 = {
  code: "fr",
  week: {
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: "Pr\xE9c\xE9dent",
    next: "Suivant",
    today: "Aujourd'hui",
    year: "Ann\xE9e",
    month: "Mois",
    week: "Semaine",
    day: "Jour",
    list: "Planning"
  },
  weekText: "Sem.",
  weekTextLong: "Semaine",
  allDayText: "Toute la journ\xE9e",
  moreLinkText: "en plus",
  noEventsText: "Aucun \xE9v\xE8nement \xE0 afficher"
};

// src/app/calendar/calendar.service.ts
var CalendarService = class _CalendarService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.API_URL = "assets/data/calendar.json";
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    this.dataChange = new BehaviorSubject([]);
  }
  get data() {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  getAllCalendars() {
    return this.httpClient.get(this.API_URL).pipe(catchError(this.errorHandler));
  }
  addUpdateCalendar(calendar) {
    this.dialogData = calendar;
  }
  deleteCalendar(calendar) {
    this.dialogData = calendar;
  }
  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}
Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  static {
    this.\u0275fac = function CalendarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CalendarService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/personnels/dash-activite/dash-activite.component.ts
var _c0 = ["calendar"];
var _c1 = ["activityDetailsModal"];
var _c2 = ["callAPIDialog"];
var _c3 = ["eventWindow"];
function DashActiviteComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "h4", 17);
    \u0275\u0275text(2, "D\xE9tails de l'activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 18);
    \u0275\u0275listener("click", function DashActiviteComponent_ng_template_20_Template_button_click_3_listener() {
      const modal_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(modal_r2.dismiss("cross"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 20)(20, "button", 21);
    \u0275\u0275listener("click", function DashActiviteComponent_ng_template_20_Template_button_click_20_listener() {
      const modal_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(modal_r2.close("Ok"));
    });
    \u0275\u0275text(21, "Fermer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Nom: ", ctx_r2.selectedActivityTitle, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("D\xE9but: ", \u0275\u0275pipeBind2(9, 6, ctx_r2.selectedActivityStart, "yyyy-MM-dd"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Fin: ", \u0275\u0275pipeBind2(12, 9, ctx_r2.selectedActivityEnd, "yyyy-MM-dd"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Description: ", ctx_r2.selectedActivityDescription, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Cr\xE9\xE9e par: ", ctx_r2.selectedActivityCreaded, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Dans la salle: ", ctx_r2.selectedActivitySalle, "");
  }
}
var DashActiviteComponent = class _DashActiviteComponent {
  constructor(fb, calendarService, modalService, toastr, globaleService) {
    this.fb = fb;
    this.calendarService = calendarService;
    this.modalService = modalService;
    this.toastr = toastr;
    this.globaleService = globaleService;
    this.selectedActivityDescription = "";
    this.selectedActivityTitle = "";
    this.selectedActivityCreaded = "";
    this.selectedActivitySalle = "";
    this.activiteList = [];
    this.filterOptions = "All";
    this.calendarEvents = [];
    this.calendarOptions = {
      plugins: [index, index2, index3, index4],
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
      },
      initialView: "dayGridMonth",
      weekends: true,
      editable: true,
      //PERMET DE SELECTIONNER UNE DATE DU CALENDRIER
      selectable: false,
      selectMirror: true,
      dayMaxEvents: true,
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this),
      // Définissez la locale sur le français
      locale: l31,
      events: this.calendarEvents
      // Liez le tableau d'événements ici
    };
    this.dialogTitle = "Add New Event";
    const blankObject = {};
    this.calendar = new Calendar(blankObject);
    this.calendarForm = this.createCalendarForm(this.calendar);
  }
  ngOnInit() {
    this.getAllActivite();
  }
  handleEventClicke(clickInfo) {
    this.selectedActivityDescription = clickInfo.event.extendedProps["description"];
  }
  handleEventClick(clickInfo) {
    console.log("D\xE9tails de l'activit\xE9 cliqu\xE9e :", clickInfo.event);
    this.selectedActivityTitle = clickInfo.event.title;
    this.selectedActivityCreaded = clickInfo.event.extendedProps["createdBy"];
    this.selectedActivitySalle = clickInfo.event.extendedProps["salleId"];
    this.selectedActivityStart = clickInfo.event.start;
    this.selectedActivityEnd = clickInfo.event.end;
    this.selectedActivityDescription = clickInfo.event.extendedProps["description"];
    this.modalService.open(this.activityDetailsModal, { ariaLabelledBy: "modal-basic-title" });
  }
  addDays(date, days) {
    const d2 = new Date(date);
    d2.setDate(d2.getDate() + days);
    return d2;
  }
  getAllActivite() {
    this.globaleService.get("activite").subscribe({
      next: (value) => {
        this.activiteList = value;
        console.log("Response Activite", this.activiteList);
        this.transformActivitiesToEvents();
        this.calendarOptions.events = this.calendarEvents;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  transformActivitiesToEvents() {
    this.calendarEvents = this.activiteList.map((activity) => {
      let color = "gray";
      switch (activity.statut) {
        case "En_Cours":
          color = "green";
          break;
        case "En_Attente":
          color = "blue";
          break;
        case "Termine":
          color = "red";
          break;
      }
      return {
        id: activity.id?.toString(),
        title: activity.nom,
        start: activity.dateDebut,
        //end: activity.dateFin ,
        end: this.addDays(activity.dateFin, 1),
        color,
        extendedProps: {
          description: activity.description,
          createdBy: activity.createdBy?.prenom + " " + activity.createdBy?.nom,
          // ou juste l'id si tu veux
          salleId: activity.salleId?.nom
          // Inclure la description ici
        }
        // Le type de extendedProps peut nécessiter un any pour la flexibilité
      };
    });
  }
  handleDateSelect(selectInfo) {
    this.eventWindowCall(selectInfo, "addEvent");
  }
  eventWindowCall(row, type) {
    if (type === "editEvent") {
      this.dialogTitle = row.event.title;
      this.isEditClick = true;
      this.calendarForm.setValue({
        id: row.event.id,
        title: row.event.title,
        category: row.event.groupId,
        startDate: formatDate(row.event.start, "yyyy-MM-dd", "fr") || "",
        endDate: formatDate(row.event.end, "yyyy-MM-dd", "fr") || "",
        details: row.event.extendedProps.details,
        userId: row.event.extendedProps.userId,
        salleId: row.event.extendedProps.salleId
      });
    } else {
      this.calendarForm.reset();
      this.isEditClick = false;
    }
    this.modalService.open(this.eventWindow, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
  }
  saveEvent(form) {
    this.calendarData = form.value;
    this.calendarEvents = this.calendarEvents.concat({
      id: this.randomIDGenerate(5, "abcdefghijklmnopqrstuvwxyz"),
      title: this.calendarData.title,
      start: this.calendarData.startDate,
      end: this.calendarData.endDate,
      className: this.getClassNameValue(this.calendarData.category),
      groupId: this.calendarData.category,
      details: this.calendarData.details,
      userId: this.calendarData.userId,
      salleId: this.calendarData.salleId
    });
    this.calendarOptions.events = this.calendarEvents;
    this.calendarForm.reset();
    this.modalService.dismissAll();
    this.showNotification("success", "Save Event Successfully...!!!", "top", "right");
  }
  eventClick(form) {
    this.calendarData = form.value;
    this.calendarEvents.forEach((element, index5) => {
      if (this.calendarData.id === element.id) {
        this.saveEditEvent(index5, this.calendarData);
      }
    }, this);
  }
  saveEditEvent(eventIndex, calendarData) {
    const calendarEvents = this.calendarEvents.slice();
    const singleEvent = Object.assign({}, calendarEvents[eventIndex]);
    singleEvent.id = calendarData.id;
    singleEvent.title = calendarData.title;
    singleEvent.start = calendarData.startDate;
    singleEvent.end = calendarData.endDate;
    singleEvent.className = this.getClassNameValue(calendarData.category);
    singleEvent.groupId = calendarData.category;
    singleEvent["details"] = calendarData.details;
    singleEvent["userId"] = calendarData.userId;
    singleEvent["salleId"] = calendarData.salleId;
    calendarEvents[eventIndex] = singleEvent;
    this.calendarEvents = calendarEvents;
    this.calendarOptions.events = calendarEvents;
    this.calendarForm.reset();
    this.modalService.dismissAll();
    this.showNotification("success", "Edit Event Successfully...!!!", "top", "right");
  }
  filterEvent(element) {
    const list = this.calendarEvents.filter((x) => element.map((y2) => y2).includes(x.groupId));
    this.calendarOptions.events = list;
  }
  handleEvents(events) {
  }
  createCalendarForm(calendar) {
    return this.fb.group({
      id: [calendar.id],
      title: [calendar.title, [Validators.required]],
      category: [calendar.category],
      startDate: [calendar.startDate, [Validators.required]],
      endDate: [calendar.endDate, [Validators.required]],
      details: [calendar.details]
    });
  }
  getClassNameValue(category) {
    let className = "";
    if (category === "work") {
      className = "fc-event-success";
    } else if (category === "personal") {
      className = "fc-event-warning";
    } else if (category === "important") {
      className = "fc-event-primary";
    } else if (category === "travel") {
      className = "fc-event-danger";
    } else if (category === "friends") {
      className = "fc-event-info";
    }
    return className;
  }
  randomIDGenerate(length, chars) {
    let result = "";
    for (let i = length; i > 0; --i) {
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    return result;
  }
  showNotification(eventType, message, ypos, xpos) {
    if (eventType === "success") {
      this.toastr.success(message, "", {
        positionClass: "toast-" + ypos + "-" + xpos
      });
    }
  }
  static {
    this.\u0275fac = function DashActiviteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashActiviteComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(CalendarService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashActiviteComponent, selectors: [["app-dash-activite"]], viewQuery: function DashActiviteComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.calendar = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.activityDetailsModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.callAPIDialog = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.eventWindow = _t.first);
      }
    }, decls: 22, vars: 1, consts: [["activityDetailsModal", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-home", "font-17"], [1, "section-body"], [1, "row"], [1, "col-md-12", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "col-md-2", "col-sm-12", "p-l-30"], [1, "panel-body"], [3, "options"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function DashActiviteComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 1)(1, "ul", 2)(2, "li", 3)(3, "h5", 4);
        \u0275\u0275text(4, "Calendrier");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 5)(6, "a", 6);
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 3);
        \u0275\u0275text(9, "Activiter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 9);
        \u0275\u0275element(16, "div", 13);
        \u0275\u0275elementStart(17, "div", 10)(18, "div", 14);
        \u0275\u0275element(19, "full-calendar", 15);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(20, DashActiviteComponent_ng_template_20_Template, 22, 12, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275property("options", ctx.calendarOptions);
      }
    }, dependencies: [
      FullCalendarModule,
      FullCalendarComponent,
      ReactiveFormsModule,
      RouterLink,
      DatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashActiviteComponent, [{
    type: Component,
    args: [{ selector: "app-dash-activite", imports: [
      FullCalendarModule,
      ReactiveFormsModule,
      RouterLink,
      DatePipe
    ], template: `<section class="main-content">\r
  <ul class="breadcrumb breadcrumb-style ">\r
    <li class="breadcrumb-item">\r
      <h5 class="page-title m-b-0">Calendrier</h5>\r
    </li>\r
    <li class="breadcrumb-item bcrumb-1">\r
      <a routerLink="/dashboardActivite">\r
        <i class="fas fa-home font-17"></i></a>\r
    </li>\r
    <li class="breadcrumb-item">Activiter</li>\r
  </ul>\r
  <div class="section-body">\r
    <div class="row">\r
      <div class="col-md-12 col-sm-12">\r
        <div class="card">\r
          <div class="card-body">\r
            <div class="row">\r
              <div class="col-md-2 col-sm-12 p-l-30">\r
<!--                <div class="m-b-25">-->\r
<!--                  <button class="btn btn-icon icon-left btn-primary" (click)="eventWindowCall($event, 'addEvent')"> Add-->\r
<!--                    Event</button>-->\r
<!--                </div>-->\r
<!--                <p>My Calendars</p>-->\r
<!--                <div class="filter-container">-->\r
<!--                  <ul class="filterCheck">-->\r
<!--                    @for (filter of filters; track filter; let i = $index) {-->\r
<!--                      <li>-->\r
<!--                        <input type="checkbox" name="filter{{i}}" [name]="calCheck" [value]="filter.value"-->\r
<!--                               [checked]="filter.checked === true" (change)="changeCategory($event, filter)" />-->\r
<!--                        {{filter.value}}-->\r
<!--                      </li>-->\r
<!--                    }-->\r
<!--                  </ul>-->\r
<!--                </div>-->\r
              </div>\r
              <div class="col-md-12 col-sm-12">\r
                <div class="panel-body">\r
                  <full-calendar [options]='calendarOptions'>\r
                  </full-calendar>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <ng-template #activityDetailsModal let-modal>\r
      <div class="modal-header">\r
        <h4 class="modal-title" id="modal-basic-title">D\xE9tails de l'activit\xE9</h4>\r
        <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('cross')"></button>\r
      </div>\r
      <div class="modal-body">\r
        <p>Nom: {{ selectedActivityTitle }}</p>\r
        <p>D\xE9but: {{ selectedActivityStart | date: 'yyyy-MM-dd' }}</p>\r
        <p>Fin: {{ selectedActivityEnd | date: 'yyyy-MM-dd' }}</p>\r
        <p>Description: {{ selectedActivityDescription }}</p>\r
        <p>Cr\xE9\xE9e par: {{ selectedActivityCreaded }}</p>\r
        <p>Dans la salle: {{ selectedActivitySalle }}</p>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-outline-dark" (click)="modal.close('Ok')">Fermer</button>\r
      </div>\r
    </ng-template>\r
\r
  </div>\r
</section>\r
` }]
  }], () => [{ type: UntypedFormBuilder }, { type: CalendarService }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }], { calendar: [{
    type: ViewChild,
    args: ["calendar", { static: false }]
  }], activityDetailsModal: [{
    type: ViewChild,
    args: ["activityDetailsModal"]
  }], callAPIDialog: [{
    type: ViewChild,
    args: ["callAPIDialog", { static: false }]
  }], eventWindow: [{
    type: ViewChild,
    args: ["eventWindow"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashActiviteComponent, { className: "DashActiviteComponent", filePath: "src/app/personnels/dash-activite/dash-activite.component.ts", lineNumber: 30 });
})();
export {
  DashActiviteComponent
};
//# sourceMappingURL=dash-activite.component-TSAKOMOE.js.map
