'use strict';
(self.webpackChunkbooks = self.webpackChunkbooks || []).push([
  [496],
  {
    9496: (se, vt, h) => {
      h.r(vt), h.d(vt, { BookListModule: () => Vt });
      var e = h(6814),
        M = h(6140),
        Y = h(2566),
        it = h(5144),
        t = h(5879),
        et = h(95),
        B = h(4423),
        j = h(2461),
        dt = h(756),
        pt = h(342),
        L = h(1538),
        V = h(655),
        A = h(3561);
      let E = (() => {
          class u {}
          return (
            (u.ɵfac = function (i) {
              return new (i || u)();
            }),
            (u.ɵcmp = t.Xpm({
              type: u,
              selectors: [['ng-component']],
              hostAttrs: [1, 'tui-autofilled-styles'],
              decls: 0,
              vars: 0,
              template: function (i, l) {},
              styles: [
                '.tui-autofill input,input.tui-autofill{transition:box-shadow .01s}\n',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            u
          );
        })(),
        q = (() => {
          class u {
            constructor(i) {
              (this.autofilled = !1),
                (this.tuiAutofilledChange = new t.vpe()),
                i.addComponent(E);
            }
            transitionStartHandler({ propertyName: i, target: l }) {
              var g;
              i.includes('box-shadow') &&
                (null === (g = l) || void 0 === g
                  ? void 0
                  : g.matches('input')) &&
                ((this.autofilled = !this.autofilled),
                this.tuiAutofilledChange.emit(this.autofilled));
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(t.Y36(A.gH));
            }),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['', 'tuiAutofilledChange', '']],
              hostAttrs: [1, 'tui-autofill'],
              hostVars: 2,
              hostBindings: function (i, l) {
                1 & i &&
                  t.NdJ('transitionstart', function (_) {
                    return l.transitionStartHandler(_);
                  }),
                  2 & i && t.ekj('_autofilled', l.autofilled);
              },
              outputs: { tuiAutofilledChange: 'tuiAutofilledChange' },
            })),
            u
          );
        })(),
        at = (() => {
          class u {}
          return (
            (u.ɵfac = function (i) {
              return new (i || u)();
            }),
            (u.ɵmod = t.oAB({ type: u })),
            (u.ɵinj = t.cJS({})),
            u
          );
        })(),
        xt = (() => {
          class u {
            constructor() {
              this.focusable = !0;
            }
            get tabIndex() {
              return this.focusable ? 0 : -1;
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)();
            }),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['', 'tuiFocusable', '']],
              hostVars: 1,
              hostBindings: function (i, l) {
                2 & i && t.Ikx('tabIndex', l.tabIndex);
              },
              inputs: { focusable: ['tuiFocusable', 'focusable'] },
            })),
            u
          );
        })(),
        Et = (() => {
          class u {}
          return (
            (u.ɵfac = function (i) {
              return new (i || u)();
            }),
            (u.ɵmod = t.oAB({ type: u })),
            (u.ɵinj = t.cJS({})),
            u
          );
        })();
      var Kt = h(7995),
        Ut = h(1800),
        U = h(8937),
        Yt = h(7444),
        mt = h(6141),
        ut = h(6551),
        bt = h(8569),
        Pt = h(5213),
        Z = h(9315),
        ae = h(7904),
        Rt = h(6371),
        St = h(8542),
        ct = h(4862),
        kt = h(5863),
        ot = h(2549),
        At = h(4664),
        Ft = h(5177),
        It = h(9773),
        fe = h(6232),
        Nt = h(9360),
        Jt = h(8251),
        v = h(4829),
        x = h(4825);
      function D(u) {
        let i,
          a = 1 / 0;
        return (
          null != u &&
            ('object' == typeof u
              ? ({ count: a = 1 / 0, delay: i } = u)
              : (a = u)),
          a <= 0
            ? () => fe.E
            : (0, Nt.e)((l, g) => {
                let H,
                  _ = 0;
                const Q = () => {
                    if ((H?.unsubscribe(), (H = null), null != i)) {
                      const Zt =
                          'number' == typeof i ? (0, x.H)(i) : (0, v.Xf)(i(_)),
                        $t = (0, Jt.x)(g, () => {
                          $t.unsubscribe(), zt();
                        });
                      Zt.subscribe($t);
                    } else zt();
                  },
                  zt = () => {
                    let Zt = !1;
                    (H = l.subscribe(
                      (0, Jt.x)(g, void 0, () => {
                        ++_ < a ? (H ? Q() : (Zt = !0)) : g.complete();
                      })
                    )),
                      Zt && Q();
                  };
                zt();
              })
        );
      }
      var I = h(2181),
        F = h(7398),
        z = h(9397),
        _t = h(2420),
        qt = h(7921),
        te = h(3997),
        Xt = h(836),
        ge = h(8645),
        Ht = h(3019),
        ee = h(2096),
        xe = h(7328),
        Te = h(8103);
      function Wt(u, a) {
        1 & u && t._UZ(0, 'span', 1),
          2 & u && t.Q6J('innerHTML', a.polymorpheusOutlet, t.oJD);
      }
      const ke = (0, U.N1)(() => Fe),
        Bt = (0, U.JN)({
          direction: 'bottom-left',
          showDelay: 500,
          hideDelay: 200,
          appearance: '',
          icon: 'tuiIconHelpCircle',
        });
      let De = (() => {
          class u extends j.QJ {
            constructor(i) {
              super(),
                (this.options = i),
                (this.direction = this.options.direction),
                (this.appearance = this.options.appearance),
                (this.showDelay = this.options.showDelay),
                (this.hideDelay = this.options.hideDelay),
                (this.icon = this.options.icon);
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(t.Y36(Bt, 4));
            }),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['', 'tuiHintContent', '']],
              inputs: {
                content: ['tuiHintContent', 'content'],
                direction: ['tuiHintDirection', 'direction'],
                appearance: ['tuiHintAppearance', 'appearance'],
                showDelay: ['tuiHintShowDelay', 'showDelay'],
                hideDelay: ['tuiHintHideDelay', 'hideDelay'],
              },
              features: [
                t._Bn([{ provide: Bt, useExisting: (0, t.Gpc)(() => u) }]),
                t.qOj,
              ],
            })),
            u
          );
        })(),
        be = (() => {
          class u {
            constructor(i, l, g, _, H) {
              (this.el = i),
                (this.component = l),
                (this.hintService = g),
                (this.options = _),
                (this.activeZone = H),
                (this.tuiHintAppearance = null),
                (this.type = 'hint');
            }
            get appearance() {
              var i;
              return null !== (i = this.tuiHintAppearance) && void 0 !== i
                ? i
                : this.options.appearance;
            }
            ngOnChanges() {
              this.content || this.toggle(!1);
            }
            ngOnDestroy() {
              this.toggle(!1);
            }
            getClientRect() {
              return this.el.nativeElement.getBoundingClientRect();
            }
            toggle(i) {
              i && this.content
                ? this.hintService.add(this)
                : this.hintService.remove(this);
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(
                t.Y36(t.SBq),
                t.Y36(ot.Al),
                t.Y36(St.BN),
                t.Y36(Bt),
                t.Y36(B.e, 8)
              );
            }),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['', 'tuiHint', '', 5, 'ng-container']],
              inputs: {
                content: ['tuiHint', 'content'],
                context: ['tuiHintContext', 'context'],
                tuiHintAppearance: 'tuiHintAppearance',
              },
              features: [
                t._Bn([
                  (0, Z.Ic)(u),
                  (0, Z.Fe)(u),
                  { provide: ot.Al, deps: [ke, t.gxx], useClass: ot.Al },
                ]),
                t.TTD,
              ],
            })),
            u
          );
        })(),
        ie = (() => {
          class u extends Z.kk {
            constructor(i, l, g) {
              super((_) => this.stream$.subscribe(_)),
                (this.hovered$ = i),
                (this.options = l),
                (this.el = g),
                (this.visible = !1),
                (this.toggle$ = new ge.x()),
                (this.stream$ = (0, Ht.T)(
                  this.toggle$.pipe(
                    (0, At.w)((_) =>
                      (0, ee.of)(_).pipe((0, Ft.g)(_ ? 0 : this.hideDelay))
                    ),
                    (0, It.R)(this.hovered$),
                    D()
                  ),
                  this.hovered$.pipe(
                    (0, At.w)((_) =>
                      (0, ee.of)(_).pipe(
                        (0, Ft.g)(_ ? this.showDelay : this.hideDelay)
                      )
                    ),
                    (0, It.R)(this.toggle$),
                    D()
                  )
                ).pipe(
                  (0, I.h)(() => this.enabled),
                  (0, F.U)((_) => _ && !(0, kt.mn)(this.el.nativeElement)),
                  (0, z.b)((_) => {
                    this.visible = _;
                  })
                )),
                (this.showDelay = this.options.showDelay),
                (this.hideDelay = this.options.hideDelay),
                (this.type = 'hint'),
                (this.enabled = !0);
            }
            toggle(i = !this.visible) {
              this.toggle$.next(i);
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(t.Y36(Yt.gs), t.Y36(Bt), t.Y36(t.SBq));
            }),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['', 'tuiHint', '', 5, 'ng-container']],
              inputs: {
                showDelay: ['tuiHintShowDelay', 'showDelay'],
                hideDelay: ['tuiHintHideDelay', 'hideDelay'],
              },
              exportAs: ['tuiHintHover'],
              features: [t._Bn([(0, Z.UK)(u), Yt.gs]), t.qOj],
            })),
            u
          );
        })(),
        Ae = (() => {
          class u extends ie {
            constructor() {
              super(...arguments), (this.currentRect = mt.Jy);
            }
            onMove({ clientX: i, clientY: l }) {
              this.currentRect = (0, Kt.dD)(i, l);
            }
            getClientRect() {
              return this.currentRect;
            }
          }
          return (
            (u.ɵfac = (function () {
              let a;
              return function (l) {
                return (a || (a = t.n5z(u)))(l || u);
              };
            })()),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['', 'tuiHint', '', 'tuiHintPointer', '']],
              hostBindings: function (i, l) {
                1 & i &&
                  t.NdJ('mousemove.silent', function (_) {
                    return l.onMove(_);
                  });
              },
              features: [t._Bn([(0, Z.Ic)(u), (0, Z.UK)(u)]), t.qOj],
            })),
            u
          );
        })(),
        Fe = (() => {
          class u {
            constructor(i, l, g, _, H, Q, zt, Zt, $t, We, zn, Yi) {
              var Qe;
              (this.animation = _),
                (this.pointer = H),
                (this.accessor = Q),
                (this.el = zt),
                (this.polymorpheus = Zt),
                (this.hover = $t),
                (this.mode = We),
                (this.visualViewportService = zn),
                (this.viewport = Yi),
                (this.appearance =
                  this.polymorpheus.$implicit.appearance ||
                  (null === (Qe = this.mode) || void 0 === Qe
                    ? void 0
                    : Qe.mode)),
                l
                  .pipe(
                    (0, F.U)((Ke) => this.visualViewportService.correct(Ke)),
                    (0, It.R)(g)
                  )
                  .subscribe(([Ke, Gn]) => {
                    this.update(Ke, Gn);
                  }),
                i.pipe((0, It.R)(g)).subscribe((Ke) => this.hover.toggle(Ke));
            }
            get content() {
              return this.polymorpheus.$implicit.content;
            }
            get context() {
              return this.polymorpheus.$implicit.context;
            }
            onClick(i) {
              ((!this.el.nativeElement.contains(i) &&
                !this.hover.el.nativeElement.contains(i)) ||
                (0, kt.mn)(this.hover.el.nativeElement)) &&
                this.hover.toggle(!1);
            }
            update(i, l) {
              const { height: g, width: _ } =
                  this.el.nativeElement.getBoundingClientRect(),
                { style: H } = this.el.nativeElement,
                Q = this.accessor.getClientRect(),
                zt = this.viewport.getClientRect();
              if (Q === mt.Jy) return;
              const Zt = (0, ut.Ki)(l, 4, zt.width - _ - 4),
                [$t, We] = this.visualViewportService.correct([
                  Q.top + Q.height / 2 - i,
                  Q.left + Q.width / 2 - Zt,
                ]);
              (H.top = (0, bt.O)(i)),
                (H.left = (0, bt.O)(Zt)),
                H.setProperty('--top', (0, bt.O)((0, ut.Ki)($t, 0.5, g - 1))),
                H.setProperty('--left', (0, bt.O)((0, ut.Ki)(We, 0.5, _ - 1)));
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(
                t.Y36(Yt.gs),
                t.Y36(St.KG),
                t.Y36(A.a3, 2),
                t.Y36(ct.Pw),
                t.Y36(Ae, 8),
                t.Y36(Z.O4),
                t.Y36(t.SBq),
                t.Y36(ot.yf),
                t.Y36(ie),
                t.Y36(Rt.w, 8),
                t.Y36(St.Lp),
                t.Y36(ct.EO)
              );
            }),
            (u.ɵcmp = t.Xpm({
              type: u,
              selectors: [['tui-hint']],
              hostVars: 4,
              hostBindings: function (i, l) {
                1 & i &&
                  t.NdJ(
                    'click',
                    function (_) {
                      return l.onClick(_.target);
                    },
                    !1,
                    t.evT
                  ),
                  2 & i &&
                    (t.uIk('data-appearance', l.appearance),
                    t.d8E('@tuiFadeIn', l.animation),
                    t.ekj('_untouchable', l.pointer));
              },
              features: [
                t._Bn([
                  A.a3,
                  St.KG,
                  Yt.gs,
                  (0, Z.ei)('hint'),
                  (0, Z.Wk)('hint', be),
                ]),
              ],
              decls: 1,
              vars: 2,
              consts: [
                [
                  3,
                  'innerHTML',
                  4,
                  'polymorpheusOutlet',
                  'polymorpheusOutletContext',
                ],
                [3, 'innerHTML'],
              ],
              template: function (i, l) {
                1 & i && t.YNc(0, Wt, 1, 1, 'span', 0),
                  2 & i &&
                    t.Q6J('polymorpheusOutlet', l.content)(
                      'polymorpheusOutletContext',
                      l.context
                    );
              },
              dependencies: [ot.Li],
              styles: [
                '[_nghost-%COMP%]{position:absolute;max-width:18rem;min-height:var(--tui-height-m);padding:.75rem 1rem;background:var(--tui-primary);border-radius:var(--tui-radius-l);color:var(--tui-primary-text);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;word-wrap:break-word}[_nghost-%COMP%]:before{content:"";position:absolute;top:var(--top);left:var(--left);width:.5rem;height:.5rem;border-radius:.125rem;box-sizing:border-box;background:inherit;transform:translate(-50%,-50%) rotate(45deg)}[data-appearance=error][_nghost-%COMP%]{background:var(--tui-error-fill)}[data-appearance=onDark][_nghost-%COMP%]{background:var(--tui-elevation-02);color:var(--tui-text-01);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}[_nghost-%COMP%]:not([style*="top"]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}',
              ],
              data: { animation: [ae.QF] },
              changeDetection: 0,
            })),
            (0, V.gn)([Ut.UM], u.prototype, 'update', null),
            u
          );
        })(),
        He = (() => {
          class u extends Z.kk {
            constructor(i, l, g) {
              super((_) => this.stream$.subscribe(_)),
                (this.zone = i),
                (this.doc = l),
                (this.el = g),
                (this.id$ = new xe.t(1)),
                (this.stream$ = this.id$.pipe(
                  (0, Pt.Xd)(
                    () => (0, Pt.mL)(this.doc, 'keydown', { capture: !0 }),
                    U.Pc
                  ),
                  (0, At.w)(() =>
                    this.focused
                      ? (0, ee.of)(!1)
                      : (0, Ht.T)(
                          (0, Pt.mL)(this.doc, 'keyup'),
                          (0, Pt.mL)(this.element, 'blur')
                        ).pipe((0, F.U)(() => this.focused))
                  ),
                  (function _e(u) {
                    return (0, Nt.e)((a, i) => {
                      let l = !1,
                        g = null,
                        _ = null;
                      const H = () => {
                        if ((_?.unsubscribe(), (_ = null), l)) {
                          l = !1;
                          const Q = g;
                          (g = null), i.next(Q);
                        }
                      };
                      a.subscribe(
                        (0, Jt.x)(
                          i,
                          (Q) => {
                            _?.unsubscribe(),
                              (l = !0),
                              (g = Q),
                              (_ = (0, Jt.x)(i, H, _t.Z)),
                              (0, v.Xf)(u(Q)).subscribe(_);
                          },
                          () => {
                            H(), i.complete();
                          },
                          void 0,
                          () => {
                            g = _ = null;
                          }
                        )
                      );
                    });
                  })((_) => (_ ? (0, x.H)(1e3) : (0, ee.of)(null))),
                  (0, qt.O)(!1),
                  (0, te.x)(),
                  (0, Xt.T)(1),
                  (0, Pt.Yr)(this.zone)
                )),
                (this.tuiHintDescribe = ''),
                (this.type = 'hint');
            }
            ngOnChanges() {
              this.id$.next(this.tuiHintDescribe);
            }
            get focused() {
              return (0, dt.V8)(this.element);
            }
            get element() {
              return (
                this.doc.getElementById(this.tuiHintDescribe || '') ||
                this.el.nativeElement
              );
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(t.Y36(t.R0b), t.Y36(e.K0), t.Y36(t.SBq));
            }),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['', 'tuiHintDescribe', '']],
              inputs: { tuiHintDescribe: 'tuiHintDescribe' },
              features: [t._Bn([(0, Z.UK)(u)]), t.qOj, t.TTD],
            })),
            (0, V.gn)([Ut.UM], u.prototype, 'element', null),
            u
          );
        })(),
        Oe = (() => {
          class u extends Z.FP {
            constructor(i, l, g) {
              super(i, l, g), (this.type = 'hint');
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(t.Y36(A.a3, 2), t.Y36(Z.kk), t.Y36(Z.c2));
            }),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['', 'tuiHint', '']],
              features: [t._Bn([A.a3]), t.qOj],
            })),
            u
          );
        })(),
        X = (() => {
          class u extends Z.uG {
            constructor(i, l, g, _) {
              super(),
                (this.options = i),
                (this.viewport = l),
                (this.directive = g),
                (this.accessors = _),
                (this.points = Te.Fw.reduce(
                  (H, Q) =>
                    Object.assign(Object.assign({}, H), { [Q]: [0, 0] }),
                  {}
                )),
                (this.direction = this.options.direction),
                (this.type = 'hint');
            }
            getPosition({ width: i, height: l }) {
              var g, _;
              const H =
                  null !==
                    (_ =
                      null === (g = this.accessor) || void 0 === g
                        ? void 0
                        : g.getClientRect()) && void 0 !== _
                    ? _
                    : mt.Jy,
                Q = H.left + H.width / 2,
                zt = H.top + H.height / 2;
              if (
                ((this.points['top-left'][0] = H.top - l - 8),
                (this.points['top-left'][1] = Q - i + 22),
                (this.points.top[0] = this.points['top-left'][0]),
                (this.points.top[1] = Q - i / 2),
                (this.points['top-right'][0] = this.points['top-left'][0]),
                (this.points['top-right'][1] = Q - 22),
                (this.points['bottom-left'][0] = H.bottom + 8),
                (this.points['bottom-left'][1] = this.points['top-left'][1]),
                (this.points.bottom[0] = this.points['bottom-left'][0]),
                (this.points.bottom[1] = this.points.top[1]),
                (this.points['bottom-right'][0] =
                  this.points['bottom-left'][0]),
                (this.points['bottom-right'][1] = this.points['top-right'][1]),
                (this.points['left-top'][0] = zt - l + 22),
                (this.points['left-top'][1] = H.left - i - 8),
                (this.points.left[0] = zt - l / 2),
                (this.points.left[1] = this.points['left-top'][1]),
                (this.points['left-bottom'][0] = zt - 22),
                (this.points['left-bottom'][1] = this.points['left-top'][1]),
                (this.points['right-top'][0] = this.points['left-top'][0]),
                (this.points['right-top'][1] = H.right + 8),
                (this.points.right[0] = this.points.left[0]),
                (this.points.right[1] = this.points['right-top'][1]),
                (this.points['right-bottom'][0] =
                  this.points['left-bottom'][0]),
                (this.points['right-bottom'][1] = this.points['right-top'][1]),
                this.checkPosition(this.points[this.direction], i, l))
              )
                return this.points[this.direction];
              const Zt = Te.Fw.find(($t) =>
                this.checkPosition(this.points[$t], i, l)
              );
              return this.points[Zt || this.fallback];
            }
            get accessor() {
              return (0, Z.Sv)('hint')(this.accessors, this.directive);
            }
            get fallback() {
              return this.points.top[0] >
                this.viewport.getClientRect().bottom - this.points.bottom[0]
                ? 'top'
                : 'bottom';
            }
            checkPosition([i, l], g, _) {
              const H = this.viewport.getClientRect();
              return (
                i > 8 && l > 8 && i + _ < H.bottom - 8 && l + g < H.right - 8
              );
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(
                t.Y36(Bt),
                t.Y36(ct.EO),
                t.Y36(be),
                t.Y36(Z.O4)
              );
            }),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['', 'tuiHint', '', 3, 'tuiHintCustomPosition', '']],
              inputs: { direction: ['tuiHintDirection', 'direction'] },
              features: [t._Bn([(0, Z.P7)(u)]), t.qOj],
            })),
            (0, V.gn)([Ut.UM], u.prototype, 'accessor', null),
            u
          );
        })(),
        K = (() => {
          class u {}
          return (
            (u.ɵfac = function (i) {
              return new (i || u)();
            }),
            (u.ɵmod = t.oAB({ type: u })),
            (u.ɵinj = t.cJS({ imports: [[e.ez, ot.wq]] })),
            u
          );
        })();
      var W = h(9250),
        ht = h(5619),
        rt = h(2438),
        tt = h(7415),
        Mt = h(7241),
        st = h(1379),
        nt = h(1713);
      function Ot(u, a) {
        1 & u && t._UZ(0, 'tui-svg', 3),
          2 & u && t.Q6J('src', a.polymorpheusOutlet);
      }
      let Qt = (() => {
          class u extends De {
            constructor(i, l, g, _) {
              super(g),
                (this.isMobile = _),
                (this.mode = null),
                (this.describeId = ''),
                l.pipe((0, It.R)(i)).subscribe((H) => {
                  this.mode = H;
                });
            }
            get computedAppearance() {
              return this.appearance || this.mode || '';
            }
            stopOnMobile(i) {
              var l;
              this.isMobile && (i.preventDefault(), i.stopPropagation()),
                null === (l = this.driver$) || void 0 === l || l.toggle();
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(
                t.Y36(A.a3, 2),
                t.Y36(ct.Au),
                t.Y36(Bt),
                t.Y36(pt.fL)
              );
            }),
            (u.ɵcmp = t.Xpm({
              type: u,
              selectors: [['tui-tooltip']],
              viewQuery: function (i, l) {
                if ((1 & i && t.Gf(ie, 5), 2 & i)) {
                  let g;
                  t.iGM((g = t.CRH())) && (l.driver$ = g.first);
                }
              },
              hostVars: 1,
              hostBindings: function (i, l) {
                1 & i &&
                  t.NdJ('mousedown', function (_) {
                    return l.stopOnMobile(_);
                  }),
                  2 & i && t.uIk('data-appearance', l.computedAppearance);
              },
              inputs: {
                content: 'content',
                direction: 'direction',
                appearance: 'appearance',
                showDelay: 'showDelay',
                hideDelay: 'hideDelay',
                describeId: 'describeId',
                context: 'context',
              },
              features: [t._Bn([A.a3, st.CV]), t.qOj],
              decls: 4,
              vars: 11,
              consts: [
                [
                  'appearance',
                  'icon',
                  'automation-id',
                  'tui-tooltip__icon',
                  'tuiWrapper',
                  '',
                  1,
                  't-tooltip-icon',
                  3,
                  'hover',
                  'tuiHint',
                  'tuiHintAppearance',
                  'tuiHintContext',
                  'tuiHintDescribe',
                  'tuiHintDirection',
                  'tuiHintHideDelay',
                  'tuiHintShowDelay',
                ],
                ['driver', 'tuiHintHover'],
                [3, 'src', 4, 'polymorpheusOutlet'],
                [3, 'src'],
              ],
              template: function (i, l) {
                if (
                  (1 & i &&
                    (t.TgZ(0, 'span', 0, 1),
                    t.ALo(2, 'async'),
                    t.YNc(3, Ot, 1, 1, 'tui-svg', 2),
                    t.qZA()),
                  2 & i)
                ) {
                  const g = t.MAs(1);
                  t.Q6J('hover', t.lcZ(2, 9, g) || null)('tuiHint', l.content)(
                    'tuiHintAppearance',
                    l.computedAppearance
                  )('tuiHintContext', l.context)(
                    'tuiHintDescribe',
                    l.describeId
                  )('tuiHintDirection', l.direction)(
                    'tuiHintHideDelay',
                    l.hideDelay
                  )('tuiHintShowDelay', l.showDelay),
                    t.xp6(3),
                    t.Q6J('polymorpheusOutlet', l.icon);
                }
              },
              dependencies: [tt.PN, nt.o, be, Oe, ie, X, He, ot.Li, e.Ov],
              styles: [
                '[_nghost-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:inline-block;width:1.5rem;height:1.5rem;vertical-align:middle;font-size:0;line-height:0;pointer-events:auto;cursor:pointer;color:var(--tui-text-01)}[data-appearance=error][_nghost-%COMP%]{color:var(--tui-error-fill)}.t-tooltip-icon[_ngcontent-%COMP%]{display:inline-block;width:100%;height:100%;color:inherit}[tuiWrapper][data-appearance="textfield"][data-state="disabled"][_nghost-%COMP%]   .t-tooltip-icon[_ngcontent-%COMP%], [tuiWrapper][data-appearance="textfield"][data-state="disabled"]   [_nghost-%COMP%]   .t-tooltip-icon[_ngcontent-%COMP%]{opacity:1}',
              ],
              changeDetection: 0,
            })),
            u
          );
        })(),
        ne = (() => {
          class u {}
          return (
            (u.ɵfac = function (i) {
              return new (i || u)();
            }),
            (u.ɵmod = t.oAB({ type: u })),
            (u.ɵinj = t.cJS({ imports: [[e.ez, nt.W, tt.EI, K, ot.wq]] })),
            u
          );
        })(),
        Me = (() => {
          class u {}
          return (
            (u.ɵfac = function (i) {
              return new (i || u)();
            }),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['input', 'tuiMaskAccessor', '']],
              features: [
                t._Bn([
                  {
                    provide: et.JU,
                    deps: [[new t.FiY(), ct.sE], et.Fj],
                    multi: !0,
                    useFactory: (a, i) => (a ? a[0] : i),
                  },
                ]),
              ],
            })),
            u
          );
        })(),
        jt = (() => {
          class u {}
          return (
            (u.ɵfac = function (i) {
              return new (i || u)();
            }),
            (u.ɵmod = t.oAB({ type: u })),
            (u.ɵinj = t.cJS({})),
            u
          );
        })();
      const ue = ['pre'],
        we = ['focusableElement'];
      function _i(u, a) {
        1 & u && t.GkF(0);
      }
      function ti(u, a) {
        1 & u && t.GkF(0);
      }
      function ei(u, a) {
        1 & u && (t.TgZ(0, 'div', 17), t.Hsn(1, 2), t.qZA());
      }
      function Ti(u, a) {
        1 & u && t._UZ(0, 'tui-svg', 20),
          2 & u && t.Q6J('src', a.polymorpheusOutlet);
      }
      const lt = function (u) {
        return { $implicit: u };
      };
      function Ci(u, a) {
        if (
          (1 & u &&
            (t.TgZ(0, 'div', 18), t.YNc(1, Ti, 1, 1, 'tui-svg', 19), t.qZA()),
          2 & u)
        ) {
          const i = t.oxw();
          t.xp6(1),
            t.Q6J('polymorpheusOutlet', i.iconLeftContent)(
              'polymorpheusOutletContext',
              t.VKq(2, lt, i.size)
            );
        }
      }
      function Di(u, a) {
        if ((1 & u && (t.TgZ(0, 'label', 21), t.Hsn(1, 3), t.qZA()), 2 & u)) {
          const i = t.oxw();
          t.ekj('t-placeholder_raised', i.placeholderRaised),
            t.Q6J('for', i.computedId);
        }
      }
      function ve(u, a) {
        1 & u && t._UZ(0, 'tui-svg', 24),
          2 & u && t.Q6J('src', a.polymorpheusOutlet);
      }
      function Re(u, a) {
        if (
          (1 & u &&
            (t.TgZ(0, 'div', 22), t.YNc(1, ve, 1, 1, 'tui-svg', 23), t.qZA()),
          2 & u)
        ) {
          const i = t.oxw();
          t.xp6(1), t.Q6J('polymorpheusOutlet', i.controller.customContent);
        }
      }
      function ii(u, a) {
        1 & u && t._UZ(0, 'tui-svg', 27),
          2 & u && t.Q6J('src', a.polymorpheusOutlet);
      }
      function ni(u, a) {
        if (1 & u) {
          const i = t.EpF();
          t.TgZ(0, 'span', 25),
            t.NdJ('click.stop', function () {
              t.CHM(i);
              const g = t.oxw();
              return t.KtG(g.clear());
            }),
            t.YNc(1, ii, 1, 1, 'tui-svg', 26),
            t.qZA();
        }
        if (2 & u) {
          const i = t.oxw();
          t.xp6(1),
            t.Q6J(
              'polymorpheusOutlet',
              i.iconCleaner || i.controller.options.iconCleaner
            )('polymorpheusOutletContext', t.VKq(2, lt, i.size));
        }
      }
      function bi(u, a) {
        if ((1 & u && t._UZ(0, 'tui-tooltip', 28), 2 & u)) {
          const i = t.oxw();
          t.Q6J(
            'content',
            null == i.hintOptions ? null : i.hintOptions.content
          )('describeId', i.computedId);
        }
      }
      function Oi(u, a) {
        1 & u && t._UZ(0, 'tui-svg', 20),
          2 & u && t.Q6J('src', a.polymorpheusOutlet);
      }
      function oi(u, a) {
        if (
          (1 & u &&
            (t.TgZ(0, 'div', 29), t.YNc(1, Oi, 1, 1, 'tui-svg', 19), t.qZA()),
          2 & u)
        ) {
          const i = t.oxw();
          t.xp6(1),
            t.Q6J('polymorpheusOutlet', i.iconContent)(
              'polymorpheusOutletContext',
              t.VKq(2, lt, i.size)
            );
        }
      }
      const ce = [[['input']], [['select']], [['tuiContent']], '*'],
        Xi = ['input', 'select', 'tuiContent', '*'],
        Mi = ['tuiTextfield', ''];
      let ji = (() => {
        class u {
          constructor(i, l) {
            (this.textfield = i),
              (this.fontsReady$ = l),
              (this.prefix$ = new ht.X('')),
              (this.pre$ = (0, Ht.T)(this.fontsReady$, this.prefix$).pipe(
                (0, Ft.g)(0),
                (0, I.h)(() => {
                  var g;
                  return !(
                    null === (g = this.pre) ||
                    void 0 === g ||
                    !g.nativeElement.isConnected
                  );
                }),
                (0, F.U)(() => {
                  var g;
                  return (
                    (null === (g = this.pre) || void 0 === g
                      ? void 0
                      : g.nativeElement.offsetWidth) || 0
                  );
                }),
                (0, te.x)()
              ));
          }
          get isContextTable() {
            return this.textfield.appearance === Mt.Nm.Table;
          }
          get value() {
            return this.textfield.value;
          }
          get filler() {
            const {
              focused: i,
              placeholder: l,
              exampleText: g,
              value: _,
              textfield: H,
            } = this;
            return l && g ? '' : i ? g || H.filler.slice(_.length) : '';
          }
          get prefix() {
            return this.decorationsVisible ? this.textfield.prefix : '';
          }
          get postfix() {
            return this.decorationsVisible ? this.computedPostfix : '';
          }
          ngDoCheck() {
            this.prefix$.next(this.prefix);
          }
          get placeholder() {
            var i;
            return (
              (null === (i = this.textfield.nativeFocusableElement) ||
              void 0 === i
                ? void 0
                : i.placeholder) || ''
            );
          }
          get exampleText() {
            return !this.value && this.focused ? this.placeholder : '';
          }
          get decorationsVisible() {
            return !!this.value || (this.focused && !this.placeholder);
          }
          get focused() {
            return this.textfield.computedFocused && !this.textfield.readOnly;
          }
          get computedPostfix() {
            return this.textfield.postfix && (this.filler || this.value)
              ? ` ${this.textfield.postfix}`
              : this.textfield.postfix;
          }
        }
        return (
          (u.ɵfac = function (i) {
            return new (i || u)(t.Y36(pt.KZ), t.Y36(pt.tS));
          }),
          (u.ɵcmp = t.Xpm({
            type: u,
            selectors: [['tui-value-decoration']],
            viewQuery: function (i, l) {
              if ((1 & i && t.Gf(ue, 7, t.SBq), 2 & i)) {
                let g;
                t.iGM((g = t.CRH())) && (l.pre = g.first);
              }
            },
            hostVars: 4,
            hostBindings: function (i, l) {
              1 & i &&
                t.NdJ('animationstart', function () {
                  return l.ngDoCheck();
                }),
                2 & i && t.ekj('_table', l.isContextTable)('_filler', l.filler);
            },
            decls: 5,
            vars: 4,
            consts: [
              [1, 't-prefix', 3, 'textContent'],
              ['pre', ''],
              [1, 't-ghost', 3, 'textContent'],
              [1, 't-filler', 3, 'textContent'],
              [1, 't-postfix', 3, 'textContent'],
            ],
            template: function (i, l) {
              1 & i &&
                t._UZ(0, 'span', 0, 1)(2, 'span', 2)(3, 'span', 3)(
                  4,
                  'span',
                  4
                ),
                2 & i &&
                  (t.Q6J('textContent', l.prefix),
                  t.xp6(2),
                  t.Q6J('textContent', l.value),
                  t.xp6(1),
                  t.Q6J('textContent', l.filler),
                  t.xp6(1),
                  t.Q6J('textContent', l.postfix));
            },
            styles: [
              '[_nghost-%COMP%]{position:absolute;display:block;width:100%;line-height:var(--tui-height);margin-top:calc(var(--tui-height) / -2);box-sizing:content-box;color:var(--tui-text-03);animation:tuiPresent 1s;white-space:nowrap}._table[_nghost-%COMP%]{position:static;margin-top:0}._filler[_nghost-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}tui-primitive-textfield   [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]{color:var(--tui-text-03-night)}tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]{line-height:calc(var(--tui-height) - .25rem)}.t-ghost[_ngcontent-%COMP%]{visibility:hidden;white-space:pre;text-overflow:clip}.t-prefix[_ngcontent-%COMP%], .t-postfix[_ngcontent-%COMP%]{white-space:pre;color:var(--tui-text-01)}tui-primitive-textfield   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]   .t-prefix[_ngcontent-%COMP%], tui-primitive-textfield   [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]   .t-prefix[_ngcontent-%COMP%], tui-primitive-textfield   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]   .t-postfix[_ngcontent-%COMP%], tui-primitive-textfield   [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]   .t-postfix[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.t-filler[_ngcontent-%COMP%]{max-width:100%;white-space:nowrap}',
            ],
          })),
          u
        );
      })();
      const Gi = { s: 1.25, m: 1.75, l: 2.25 };
      let ri = (() => {
          class u extends j.Xn {
            constructor(i, l, g, _) {
              super(),
                (this.controller = i),
                (this.hintOptions = l),
                (this.options = g),
                (this.el = _),
                (this.editable = !0),
                (this.textfieldFiller = ''),
                (this.iconCleaner = this.options.iconCleaner),
                (this.readOnly = !1),
                (this.invalid = !1),
                (this.disabled = !1),
                (this.textfieldPrefix = ''),
                (this.textfieldPostfix = ''),
                (this.value = ''),
                (this.valueChange = new t.vpe()),
                (this.autofilled = !1);
            }
            get prefix() {
              return this.textfieldPrefix || this.controller.prefix;
            }
            get postfix() {
              return this.textfieldPostfix || this.controller.postfix;
            }
            get filler() {
              return this.textfieldFiller || this.controller.filler;
            }
            get nativeFocusableElement() {
              if (this.computedDisabled || !this.focusableElement) return null;
              const { nativeElement: i } = this.focusableElement;
              return i.previousElementSibling || i;
            }
            get focused() {
              return (0, dt.zb)(this.el.nativeElement);
            }
            get appearance() {
              return this.controller.appearance;
            }
            get size() {
              return this.controller.size;
            }
            get computedInvalid() {
              return !this.readOnly && !this.disabled && this.invalid;
            }
            get inputHidden() {
              var i;
              return !(
                null === (i = this.content) ||
                void 0 === i ||
                !i.length
              );
            }
            get hasValue() {
              return !!this.value;
            }
            get hasCleaner() {
              return (
                this.controller.cleaner &&
                this.hasValue &&
                !this.computedDisabled &&
                !this.readOnly
              );
            }
            get hasTooltip() {
              var i;
              return !(
                null === (i = this.hintOptions) ||
                void 0 === i ||
                !i.content ||
                this.computedDisabled
              );
            }
            get hasCustomContent() {
              return !!this.controller.customContent;
            }
            get placeholderVisible() {
              var i;
              const g =
                ((null === (i = this.nativeFocusableElement) || void 0 === i
                  ? void 0
                  : i.placeholder) ||
                  this.prefix ||
                  this.postfix ||
                  this.filler) &&
                !this.readOnly &&
                this.computedFocused;
              return !this.hasValue && !g;
            }
            get hasPlaceholder() {
              return this.placeholderRaisable || this.placeholderVisible;
            }
            get placeholderRaised() {
              return (
                this.placeholderRaisable &&
                ((this.computedFocused && !this.readOnly) ||
                  this.hasValue ||
                  this.autofilled)
              );
            }
            get borderStart() {
              return this.iconLeftContent ? this.iconPaddingLeft : 0;
            }
            get borderEnd() {
              return (0, kt._X)(
                !!this.iconContent,
                this.hasCleaner,
                this.hasTooltip,
                this.hasCustomContent,
                this.size
              );
            }
            get iconContent() {
              return this.controller.icon;
            }
            get iconLeftContent() {
              return this.controller.iconLeft;
            }
            get showHint() {
              var i;
              return (
                !(
                  null === (i = this.hintOptions) ||
                  void 0 === i ||
                  !i.content
                ) &&
                (this.options.hintOnDisabled || !this.computedDisabled)
              );
            }
            get name() {
              var i;
              return 'cc-exp' ===
                (null === (i = this.nativeFocusableElement) || void 0 === i
                  ? void 0
                  : i.autocomplete)
                ? 'ccexpiryyear'
                : null;
            }
            get computedId() {
              var i;
              return (
                (null === (i = this.nativeFocusableElement) || void 0 === i
                  ? void 0
                  : i.id) || ''
              );
            }
            onFocused(i) {
              this.updateFocused(i);
            }
            getIndent$(i) {
              return (0, rt.R)(i, 'scroll').pipe(
                (0, F.U)(() => -1 * Math.max(i.scrollLeft, 0))
              );
            }
            clear() {
              this.nativeFocusableElement &&
                (this.nativeFocusableElement.value = ''),
                this.updateValue('');
            }
            onMouseDown(i) {
              const { nativeFocusableElement: l } = this;
              !l || i.target === l || (i.preventDefault(), l.focus());
            }
            onModelChange(i) {
              this.updateValue(i);
            }
            onAutofilled(i) {
              this.updateAutofilled(i);
            }
            detectRetargetFromLabel(i) {
              (0, Kt.UP)(i) && i.stopImmediatePropagation();
            }
            get iconPaddingLeft() {
              return Gi[this.size];
            }
            get placeholderRaisable() {
              return 's' !== this.size && !this.controller.labelOutside;
            }
            updateAutofilled(i) {
              this.autofilled !== i && (this.autofilled = i);
            }
            updateValue(i) {
              (this.value = i), this.valueChange.emit(i);
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(
                t.Y36(W.Cs),
                t.Y36(De, 8),
                t.Y36(W.z1),
                t.Y36(t.SBq)
              );
            }),
            (u.ɵcmp = t.Xpm({
              type: u,
              selectors: [['tui-primitive-textfield']],
              contentQueries: function (i, l, g) {
                if ((1 & i && t.Suo(g, ot.Li, 5), 2 & i)) {
                  let _;
                  t.iGM((_ = t.CRH())) && (l.content = _);
                }
              },
              viewQuery: function (i, l) {
                if ((1 & i && t.Gf(we, 5), 2 & i)) {
                  let g;
                  t.iGM((g = t.CRH())) && (l.focusableElement = g.first);
                }
              },
              hostVars: 15,
              hostBindings: function (i, l) {
                1 & i &&
                  t.NdJ('focusin', function () {
                    return l.onFocused(!0);
                  })('focusout', function () {
                    return l.onFocused(!1);
                  }),
                  2 & i &&
                    (t.uIk('data-size', l.size),
                    t.Udp('--border-start', l.borderStart, 'rem')(
                      '--border-end',
                      l.borderEnd,
                      'rem'
                    ),
                    t.ekj('_autofilled', l.autofilled)(
                      '_label-outside',
                      l.controller.labelOutside
                    )('_readonly', l.readOnly)('_invalid', l.computedInvalid)(
                      '_hidden',
                      l.inputHidden
                    ));
              },
              inputs: {
                editable: 'editable',
                textfieldFiller: ['filler', 'textfieldFiller'],
                iconCleaner: 'iconCleaner',
                readOnly: 'readOnly',
                invalid: 'invalid',
                disabled: 'disabled',
                textfieldPrefix: ['prefix', 'textfieldPrefix'],
                textfieldPostfix: ['postfix', 'textfieldPostfix'],
                value: 'value',
              },
              outputs: { valueChange: 'valueChange' },
              features: [t._Bn([(0, pt.FT)(u), W.Y0]), t.qOj],
              ngContentSelectors: Xi,
              decls: 24,
              vars: 37,
              consts: [
                [4, 'ngIf'],
                [
                  'automation-id',
                  'tui-primitive-textfield__wrapper',
                  'tuiWrapper',
                  '',
                  3,
                  'active',
                  'appearance',
                  'disabled',
                  'focus',
                  'hover',
                  'invalid',
                  'readOnly',
                  'click.prevent.silent',
                  'mousedown',
                  'tuiAutofilledChange',
                ],
                [
                  'automation-id',
                  'tui-primitive-textfield__native-input',
                  'tuiMaskAccessor',
                  '',
                  1,
                  't-input',
                  3,
                  'disabled',
                  'id',
                  'ngModel',
                  'readOnly',
                  'tuiFocusable',
                  'ngModelChange',
                ],
                ['focusableElement', ''],
                [
                  'automation-id',
                  'tui-primitive-textfield__value',
                  'class',
                  't-input t-input_template',
                  4,
                  'ngIf',
                ],
                [1, 't-content'],
                ['class', 't-icon t-icon_left t-textfield-icon', 4, 'ngIf'],
                [1, 't-wrapper'],
                [
                  'automation-id',
                  'tui-primitive-textfield__placeholder',
                  'class',
                  't-placeholder',
                  3,
                  't-placeholder_raised',
                  'for',
                  4,
                  'ngIf',
                ],
                [1, 't-wrapper-value-decoration'],
                [
                  'aria-hidden',
                  'true',
                  'automation-id',
                  'tui-primitive-textfield__value-decoration',
                  1,
                  't-value-decoration',
                ],
                ['decor', ''],
                [1, 't-icons'],
                [
                  'automation-id',
                  'tui-primitive-textfield__custom-content',
                  'class',
                  't-custom-content',
                  4,
                  'ngIf',
                ],
                [
                  'appearance',
                  'icon',
                  'automation-id',
                  'tui-primitive-textfield__cleaner',
                  'tuiWrapper',
                  '',
                  'class',
                  't-cleaner',
                  3,
                  'click.stop',
                  4,
                  'ngIf',
                ],
                [
                  'automation-id',
                  'tui-primitive-textfield__tooltip',
                  'class',
                  't-tooltip',
                  3,
                  'content',
                  'describeId',
                  4,
                  'ngIf',
                ],
                ['class', 't-icon t-textfield-icon', 4, 'ngIf'],
                [
                  'automation-id',
                  'tui-primitive-textfield__value',
                  1,
                  't-input',
                  't-input_template',
                ],
                [1, 't-icon', 't-icon_left', 't-textfield-icon'],
                [
                  'appearance',
                  'icon',
                  'tuiWrapper',
                  '',
                  3,
                  'src',
                  4,
                  'polymorpheusOutlet',
                  'polymorpheusOutletContext',
                ],
                ['appearance', 'icon', 'tuiWrapper', '', 3, 'src'],
                [
                  'automation-id',
                  'tui-primitive-textfield__placeholder',
                  1,
                  't-placeholder',
                  3,
                  'for',
                ],
                [
                  'automation-id',
                  'tui-primitive-textfield__custom-content',
                  1,
                  't-custom-content',
                ],
                ['class', 't-custom-icon', 3, 'src', 4, 'polymorpheusOutlet'],
                [1, 't-custom-icon', 3, 'src'],
                [
                  'appearance',
                  'icon',
                  'automation-id',
                  'tui-primitive-textfield__cleaner',
                  'tuiWrapper',
                  '',
                  1,
                  't-cleaner',
                  3,
                  'click.stop',
                ],
                [
                  3,
                  'src',
                  4,
                  'polymorpheusOutlet',
                  'polymorpheusOutletContext',
                ],
                [3, 'src'],
                [
                  'automation-id',
                  'tui-primitive-textfield__tooltip',
                  1,
                  't-tooltip',
                  3,
                  'content',
                  'describeId',
                ],
                [1, 't-icon', 't-textfield-icon'],
              ],
              template: function (i, l) {
                if (
                  (1 & i &&
                    (t.F$t(ce),
                    t.YNc(0, _i, 1, 0, 'ng-container', 0),
                    t.ALo(1, 'async'),
                    t.YNc(2, ti, 1, 0, 'ng-container', 0),
                    t.ALo(3, 'async'),
                    t.TgZ(4, 'div', 1),
                    t.NdJ('click.prevent.silent', function (_) {
                      return l.detectRetargetFromLabel(_);
                    })('mousedown', function (_) {
                      return l.onMouseDown(_);
                    })('tuiAutofilledChange', function (_) {
                      return l.onAutofilled(_);
                    }),
                    t.ALo(5, 'async'),
                    t.Hsn(6),
                    t.Hsn(7, 1),
                    t.TgZ(8, 'input', 2, 3),
                    t.NdJ('ngModelChange', function (_) {
                      return l.onModelChange(_);
                    }),
                    t.qZA(),
                    t.YNc(10, ei, 2, 0, 'div', 4),
                    t.TgZ(11, 'div', 5),
                    t.YNc(12, Ci, 2, 4, 'div', 6),
                    t.TgZ(13, 'div', 7),
                    t.YNc(14, Di, 2, 3, 'label', 8),
                    t.TgZ(15, 'div', 9)(16, 'tui-value-decoration', 10, 11),
                    t.ALo(18, 'async'),
                    t.qZA()()(),
                    t.TgZ(19, 'div', 12),
                    t.YNc(20, Re, 2, 1, 'div', 13),
                    t.YNc(21, ni, 2, 4, 'span', 14),
                    t.YNc(22, bi, 1, 2, 'tui-tooltip', 15),
                    t.YNc(23, oi, 2, 4, 'div', 16),
                    t.qZA()()()),
                  2 & i)
                ) {
                  const g = t.MAs(9),
                    _ = t.MAs(17);
                  t.Q6J(
                    'ngIf',
                    t.lcZ(1, 29, null == l.content ? null : l.content.changes)
                  ),
                    t.xp6(2),
                    t.Q6J(
                      'ngIf',
                      t.lcZ(
                        3,
                        31,
                        null == l.hintOptions ? null : l.hintOptions.change$
                      )
                    ),
                    t.xp6(2),
                    t.Udp('--text-indent', t.lcZ(5, 33, _.pre$), 'px'),
                    t.Q6J('active', l.pseudoActive)('appearance', l.appearance)(
                      'disabled',
                      l.disabled
                    )('focus', l.computedFocused)('hover', l.pseudoHover)(
                      'invalid',
                      l.computedInvalid
                    )('readOnly', l.readOnly),
                    t.xp6(4),
                    t.Q6J('disabled', l.computedDisabled)('id', l.id)(
                      'ngModel',
                      l.value
                    )('readOnly', l.readOnly || !l.editable)(
                      'tuiFocusable',
                      l.computedFocusable
                    ),
                    t.uIk('aria-invalid', l.computedInvalid)('name', l.name),
                    t.xp6(2),
                    t.Q6J('ngIf', l.inputHidden),
                    t.xp6(2),
                    t.Q6J('ngIf', l.iconLeftContent),
                    t.xp6(2),
                    t.Q6J('ngIf', l.hasPlaceholder),
                    t.xp6(2),
                    t.Udp('text-indent', t.lcZ(18, 35, l.getIndent$(g)), 'px'),
                    t.ekj('t-has-value', l.value),
                    t.xp6(4),
                    t.Q6J('ngIf', l.hasCustomContent),
                    t.xp6(1),
                    t.Q6J('ngIf', l.hasCleaner),
                    t.xp6(1),
                    t.Q6J('ngIf', l.showHint),
                    t.xp6(1),
                    t.Q6J('ngIf', l.iconContent);
                }
              },
              dependencies: [
                tt.PN,
                ji,
                Qt,
                e.O5,
                nt.o,
                q,
                Me,
                et.Fj,
                et.JJ,
                et.On,
                xt,
                ot.Li,
                e.Ov,
              ],
              styles: [
                '[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:block;text-align:left;border-radius:var(--tui-radius-m);height:var(--tui-height);min-height:var(--tui-height);max-height:var(--tui-height)}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);font:var(--tui-font-text-m);line-height:1.25rem}.t-input[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}.t-input[_ngcontent-%COMP%]::-webkit-caps-lock-indicator, .t-input[_ngcontent-%COMP%]::-webkit-contacts-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credentials-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03);opacity:0}._focused[_nghost-%COMP%]:not(._readonly)   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder{opacity:1}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus, .t-input   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]:-webkit-autofill:focus, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01-night)!important;border-color:var(--tui-autofill-night);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill-night) inset!important}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, .t-input   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]::placeholder, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]::placeholder{color:var(--tui-text-03-night)}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="s"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="s"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="s"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="s"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="s"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="s"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="m"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="m"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="m"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="m"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="m"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="l"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="l"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="l"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="l"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="l"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], .t-input   tui-textarea._disabled[_nghost-%COMP%], tui-textarea._disabled   [_nghost-%COMP%], .t-input   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input.t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em;-webkit-user-select:none}.t-content[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;box-sizing:border-box;align-items:center;overflow:hidden}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-l)}.t-wrapper[_ngcontent-%COMP%]{flex:1;min-width:0;-webkit-padding-end:.25rem;padding-inline-end:.25rem}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-02);pointer-events:none;will-change:transform;transform:translateY(0)}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill)}._invalid[_nghost-%COMP%]:not(._focused)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill-night)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-03)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01)}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}._focused[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}[data-size=s][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{-webkit-margin-start:-.375rem;margin-inline-start:-.375rem}[data-size=m][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{-webkit-margin-start:-.125rem;margin-inline-start:-.125rem;-webkit-margin-end:.375rem;margin-inline-end:.375rem}[data-size=l][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{-webkit-margin-end:.75rem;margin-inline-end:.75rem}.t-icons[_ngcontent-%COMP%]{display:flex;align-items:center}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{-webkit-margin-end:-.125rem;margin-inline-end:-.125rem}[data-size=s][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{-webkit-margin-end:-.375rem;margin-inline-end:-.375rem}[_nghost-%COMP%]:not([data-size="s"])   .t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){-webkit-margin-start:.25rem;margin-inline-start:.25rem}._autofilled[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], ._autofilled._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], ._autofilled[_nghost-%COMP%]   .t-value-decoration[_ngcontent-%COMP%]:not(.t-has-value){visibility:hidden}.t-custom-content[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;min-width:2rem;height:2rem;pointer-events:none}.t-custom-icon[_ngcontent-%COMP%]{width:2rem;height:100%}.t-input[_ngcontent-%COMP%]:not(:first-child){display:none}[data-size][_nghost-%COMP%]   .t-input_template[_ngcontent-%COMP%]{display:flex;width:calc(100% - 1rem);max-width:calc(100% - 1rem);align-items:center;pointer-events:none;-webkit-padding-end:0;padding-inline-end:0}.t-text-template[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-wrapper-value-decoration[_ngcontent-%COMP%]{position:relative;pointer-events:none}',
              ],
              changeDetection: 0,
            })),
            (0, V.gn)([Ut.UM], u.prototype, 'getIndent$', null),
            u
          );
        })(),
        Pe = (() => {
          class u extends Z.D1 {
            constructor(i) {
              super(i), (this.textfield = i);
            }
            get readOnly() {
              return this.textfield.readOnly || !this.textfield.editable;
            }
            onValueChange(i) {
              this.textfield.onModelChange(i);
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(t.Y36(ri));
            }),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['tui-primitive-textfield']],
              features: [t._Bn([(0, ct.cp)(u)]), t.qOj],
            })),
            u
          );
        })(),
        xi = (() => {
          class u {
            constructor(i, l, g, _, H) {
              (this.host = i),
                (this.controller = l),
                (this.el = g),
                (this.idService = _),
                (this.legacyMask = H),
                this.host.process(this.el.nativeElement);
            }
            get id() {
              return this.el.nativeElement.id || this.idService.generate();
            }
            get inputMode() {
              return this.el.nativeElement.inputMode || this.host.inputMode;
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(
                t.Y36(ct.S0),
                t.Y36(W.Cs),
                t.Y36(t.SBq),
                t.Y36(A.ll),
                t.Y36(ct.sf, 8)
              );
            }),
            (u.ɵcmp = t.Xpm({
              type: u,
              selectors: [
                ['input', 'tuiTextfield', ''],
                ['textarea', 'tuiTextfield', ''],
              ],
              hostAttrs: ['type', 'text'],
              hostVars: 7,
              hostBindings: function (i, l) {
                1 & i &&
                  t.NdJ('input', function (_) {
                    return (
                      !l.legacyMask && l.host.onValueChange(_.target.value)
                    );
                  }),
                  2 & i &&
                    (t.Ikx('tabIndex', l.host.focusable ? 0 : -1)(
                      'readOnly',
                      l.host.readOnly
                    )('value', l.host.value),
                    t.uIk('id', l.id)('inputMode', l.inputMode)(
                      'aria-invalid',
                      l.host.invalid
                    )('disabled', l.host.disabled || null));
              },
              features: [t._Bn([W.Y0])],
              attrs: Mi,
              decls: 0,
              vars: 0,
              template: function (i, l) {},
              styles: [
                '[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}[_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]:-webkit-autofill:hover, [_nghost-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}[_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}[_nghost-%COMP%]::-webkit-caps-lock-indicator, [_nghost-%COMP%]::-webkit-contacts-auto-fill-button, [_nghost-%COMP%]::-webkit-credit-card-auto-fill-button, [_nghost-%COMP%]::-webkit-credentials-auto-fill-button, [_nghost-%COMP%]::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}[_nghost-%COMP%]::placeholder{color:var(--tui-text-03);opacity:0}._focused[_nghost-%COMP%]:not(._readonly)   [_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)   [_nghost-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)   [_nghost-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)   [_nghost-%COMP%]::placeholder{opacity:1}[tuiWrapper][data-mode=onDark]   [_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode=onDark]   [_nghost-%COMP%]:-webkit-autofill:hover, [_nghost-%COMP%]   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode=onDark]   [_nghost-%COMP%]:-webkit-autofill:focus, [_nghost-%COMP%]   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]:-webkit-autofill:focus, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01-night)!important;border-color:var(--tui-autofill-night);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill-night) inset!important}[tuiWrapper][data-mode=onDark]   [_nghost-%COMP%]::placeholder, [_nghost-%COMP%]   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]::placeholder, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]::placeholder{color:var(--tui-text-03-night)}[data-size=s][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="s"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="s"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size="s"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="s"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size="s"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="s"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="m"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size="m"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="m"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size="m"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="m"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="l"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size="l"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="l"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size="l"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="l"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], [_nghost-%COMP%]   tui-textarea._disabled[_nghost-%COMP%], tui-textarea._disabled   [_nghost-%COMP%], [_nghost-%COMP%]   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   [_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   [_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em;-webkit-user-select:none}textarea[_nghost-%COMP%]{white-space:pre-wrap}textarea[_nghost-%COMP%]   tui-textarea._ios[_nghost-%COMP%], tui-textarea._ios   [_nghost-%COMP%], textarea[_nghost-%COMP%]   tui-text-area._ios[_nghost-%COMP%], tui-text-area._ios   [_nghost-%COMP%]{padding-left:.8125rem}',
              ],
              changeDetection: 0,
            })),
            u
          );
        })(),
        Vi = (() => {
          class u {}
          return (
            (u.ɵfac = function (i) {
              return new (i || u)();
            }),
            (u.ɵmod = t.oAB({ type: u })),
            (u.ɵinj = t.cJS({
              imports: [[e.ez, et.u5, ot.wq, jt, Et, nt.W, tt.EI, ne, at]],
            })),
            u
          );
        })(),
        Ne = (() => {
          class u {}
          return (
            (u.ɵfac = function (i) {
              return new (i || u)();
            }),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['ng-template', 'tuiDataList', '']],
            })),
            u
          );
        })();
      var Ei = h(432),
        Lt = (h(7178), h(7344)),
        Be = h(7122);
      (0, U.JN)('DMY'), (0, U.JN)('.');
      class Tt {
        constructor(a) {
          this.year = a;
        }
        static isValidYear(a) {
          return Number.isInteger(a) && (0, ut.wf)(a, 0, 1e4);
        }
        static isLeapYear(a) {
          return a % 400 == 0 || (a % 4 == 0 && a % 100 != 0);
        }
        static getAbsoluteLeapYears(a) {
          return Math.ceil(a / 400) + (Math.ceil(a / 4) - Math.ceil(a / 100));
        }
        static lengthBetween(a, i) {
          return i.year - a.year;
        }
        static normalizeYearPart(a) {
          return (0, ut.G1)(a, 0, 9999);
        }
        get formattedYear() {
          return String(this.year).padStart(4, '0');
        }
        get isLeapYear() {
          return Tt.isLeapYear(this.year);
        }
        get absoluteLeapYears() {
          return Tt.getAbsoluteLeapYears(this.year);
        }
        yearBefore({ year: a }) {
          return this.year < a;
        }
        yearSameOrBefore({ year: a }) {
          return this.year <= a;
        }
        yearSame({ year: a }) {
          return this.year === a;
        }
        yearSameOrAfter({ year: a }) {
          return this.year >= a;
        }
        yearAfter({ year: a }) {
          return this.year > a;
        }
        append({ year: a = 0 }) {
          return new Tt(this.year + a);
        }
        toString() {
          return this.formattedYear;
        }
        valueOf() {
          return this.year;
        }
        [Symbol.toPrimitive](a) {
          return Date.prototype[Symbol.toPrimitive].call(this, a);
        }
        toJSON() {
          return this.formattedYear;
        }
      }
      class G extends Tt {
        constructor(a, i) {
          super(a), (this.month = i);
        }
        static isValidMonth(a, i) {
          return Tt.isValidYear(a) && G.isValidMonthPart(i);
        }
        static getMonthDaysCount(a, i) {
          switch (a) {
            case Lt.B.February:
              return i ? 29 : 28;
            case Lt.B.April:
            case Lt.B.June:
            case Lt.B.September:
            case Lt.B.November:
              return 30;
            default:
              return 31;
          }
        }
        static currentLocal() {
          const a = new Date();
          return new G(a.getFullYear(), a.getMonth());
        }
        static currentUtc() {
          const a = new Date();
          return new G(a.getUTCFullYear(), a.getUTCMonth());
        }
        static lengthBetween(a, i) {
          return i.month + 12 * i.year - (a.month + 12 * a.year);
        }
        static normalizeMonthPart(a) {
          return (0, ut.G1)(a, 0, 11);
        }
        static isValidMonthPart(a) {
          return Number.isInteger(a) && (0, ut.wf)(a, 0, 12);
        }
        get formattedMonthPart() {
          return String(this.month + 1).padStart(2, '0');
        }
        get daysCount() {
          return G.getMonthDaysCount(this.month, this.isLeapYear);
        }
        monthBefore(a) {
          return (
            this.yearBefore(a) || (this.yearSame(a) && this.month < a.month)
          );
        }
        monthSameOrBefore(a) {
          return (
            this.yearBefore(a) || (this.yearSame(a) && this.month <= a.month)
          );
        }
        monthSame(a) {
          return this.yearSame(a) && this.month === a.month;
        }
        monthSameOrAfter(a) {
          return (
            this.yearAfter(a) || (this.yearSame(a) && this.month >= a.month)
          );
        }
        monthAfter(a) {
          return (
            this.yearAfter(a) || (this.yearSame(a) && this.month > a.month)
          );
        }
        append({ year: a = 0, month: i = 0 }) {
          const l = 12 * (this.year + a) + this.month + i;
          return new G(Math.floor(l / 12), l % 12);
        }
        toString() {
          return `${this.formattedMonthPart}.${this.formattedYear}`;
        }
        valueOf() {
          return this.toLocalNativeDate().valueOf();
        }
        toJSON() {
          return `${super.toJSON()}-${this.formattedMonthPart}`;
        }
        toLocalNativeDate() {
          return new Date(this.year, this.month);
        }
        toUtcNativeDate() {
          return new Date(Date.UTC(this.year, this.month));
        }
      }
      class yt extends G {
        constructor(a, i, l) {
          super(a, i), (this.day = l);
        }
        static fromLocalNativeDate(a) {
          return new yt(a.getFullYear(), a.getMonth(), a.getDate());
        }
        static fromUtcNativeDate(a) {
          return new yt(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
        }
        static isValidDay(a, i, l) {
          return (
            G.isValidMonth(a, i) &&
            Number.isInteger(l) &&
            (0, ut.wf)(l, 1, G.getMonthDaysCount(i, Tt.isLeapYear(a)) + 1)
          );
        }
        static currentLocal() {
          const a = new Date(),
            i = a.getFullYear(),
            l = a.getMonth(),
            g = a.getDate();
          return new yt(i, l, g);
        }
        static currentUtc() {
          const a = new Date(),
            i = a.getUTCFullYear(),
            l = a.getUTCMonth(),
            g = a.getUTCDate();
          return new yt(i, l, g);
        }
        static normalizeOf(a, i, l) {
          const g = Tt.normalizeYearPart(a),
            _ = G.normalizeMonthPart(i),
            H = yt.normalizeDayPart(l, _, g);
          return new yt(g, _, H);
        }
        static lengthBetween(a, i) {
          return Math.round(
            (i.toLocalNativeDate().getTime() -
              a.toLocalNativeDate().getTime()) /
              864e5
          );
        }
        static parseRawDateString(a, i = 'DMY') {
          switch (i) {
            case 'YMD':
              return {
                day: parseInt(a.slice(8, 10), 10),
                month: parseInt(a.slice(5, 7), 10) - 1,
                year: parseInt(a.slice(0, 4), 10),
              };
            case 'MDY':
              return {
                day: parseInt(a.slice(3, 5), 10),
                month: parseInt(a.slice(0, 2), 10) - 1,
                year: parseInt(a.slice(6, 10), 10),
              };
            default:
              return {
                day: parseInt(a.slice(0, 2), 10),
                month: parseInt(a.slice(3, 5), 10) - 1,
                year: parseInt(a.slice(6, 10), 10),
              };
          }
        }
        static normalizeParse(a, i = 'DMY') {
          const { day: l, month: g, year: _ } = this.parseRawDateString(a, i);
          return yt.normalizeOf(_, g, l);
        }
        static jsonParse(a) {
          const {
            day: i,
            month: l,
            year: g,
          } = this.parseRawDateString(a, 'YMD');
          if (!Tt.isValidYear(g)) throw new Be.JY(g);
          if (!G.isValidMonth(g, l)) throw new Be.AM(l);
          if (
            !Number.isInteger(i) ||
            !(0, ut.wf)(i, 1, G.getMonthDaysCount(l, Tt.isLeapYear(g)) + 1)
          )
            throw new Be.I4(i);
          return new yt(g, l, i);
        }
        static normalizeDayPart(a, i, l) {
          const g = G.getMonthDaysCount(i, Tt.isLeapYear(l));
          return (0, ut.G1)(a, 1, g);
        }
        get formattedDayPart() {
          return String(this.day).padStart(2, '0');
        }
        get isWeekend() {
          const a = this.dayOfWeek(!1);
          return a === Lt.L.Saturday || a === Lt.L.Sunday;
        }
        dayOfWeek(a = !0) {
          const i = a
            ? this.toLocalNativeDate().getDay() - 1
            : this.toLocalNativeDate().getDay();
          return i < 0 ? 6 : i;
        }
        dayBefore(a) {
          return this.monthBefore(a) || (this.monthSame(a) && this.day < a.day);
        }
        daySameOrBefore(a) {
          return (
            this.monthBefore(a) || (this.monthSame(a) && this.day <= a.day)
          );
        }
        daySame(a) {
          return this.monthSame(a) && this.day === a.day;
        }
        daySameOrAfter(a) {
          return this.monthAfter(a) || (this.monthSame(a) && this.day >= a.day);
        }
        dayAfter(a) {
          return this.monthAfter(a) || (this.monthSame(a) && this.day > a.day);
        }
        dayLimit(a, i) {
          return null !== a && this.dayBefore(a)
            ? a
            : null !== i && this.dayAfter(i)
            ? i
            : this;
        }
        append({ year: a = 0, month: i = 0, day: l = 0 }) {
          const g = 12 * (this.year + a) + this.month + i;
          let _ = Math.floor(g / 12),
            H = g % 12,
            Q =
              Math.min(this.day, G.getMonthDaysCount(H, Tt.isLeapYear(_))) + l;
          for (; Q > G.getMonthDaysCount(H, Tt.isLeapYear(_)); )
            (Q -= G.getMonthDaysCount(H, Tt.isLeapYear(_))),
              H === Lt.B.December ? (_++, (H = Lt.B.January)) : H++;
          for (; Q < 1; )
            H === Lt.B.January ? (_--, (H = Lt.B.December)) : H--,
              (Q += G.getMonthDaysCount(H, Tt.isLeapYear(_)));
          return new yt(_, H, Q);
        }
        getFormattedDay(a, i) {
          const l = this.formattedDayPart,
            g = this.formattedMonthPart,
            _ = this.formattedYear;
          switch (a) {
            case 'YMD':
              return `${_}${i}${g}${i}${l}`;
            case 'MDY':
              return `${g}${i}${l}${i}${_}`;
            default:
              return `${l}${i}${g}${i}${_}`;
          }
        }
        toString(a = 'DMY', i = '.') {
          return this.getFormattedDay(a, i);
        }
        toJSON() {
          return `${super.toJSON()}-${this.formattedDayPart}`;
        }
        toLocalNativeDate() {
          return new Date(this.year, this.month, this.day);
        }
        toUtcNativeDate() {
          return new Date(Date.UTC(this.year, this.month, this.day));
        }
      }
      const Ye = new yt(0, 0, 1),
        dn = new yt(9999, 11, 31);
      Symbol;
      var p = h(8751),
        ft = h(7042);
      new t.OlP('[TUI_CALENDAR_DATE_STREAM]'),
        (0, U.JN)({
          [p.X.AD]: '+376###-###',
          [p.X.AE]: '+971-##-###-####',
          [p.X.AF]: '+93##-###-####',
          [p.X.AG]: '+1(268) ###-####',
          [p.X.AI]: '+1(264) ###-####',
          [p.X.AL]: '+355(###) ###-###',
          [p.X.AM]: '+374##-###-###',
          [p.X.AO]: '+244(###) ###-###',
          [p.X.AR]: '+54(###) ####-####',
          [p.X.AT]: '+43(###) ###-####',
          [p.X.AU]: '+61#-####-####',
          [p.X.AW]: '+297###-####',
          [p.X.AZ]: '+994##-###-##-##',
          [p.X.BA]: '+387 ###-####-##',
          [p.X.BB]: '+1(246) ###-####',
          [p.X.BD]: '+880##-###-###',
          [p.X.BE]: '+32(###) ###-###',
          [p.X.BF]: '+226##-##-####',
          [p.X.BG]: '+359(###) ###-###',
          [p.X.BH]: '+973####-####',
          [p.X.BI]: '+257##-##-####',
          [p.X.BJ]: '+229##-##-####',
          [p.X.BL]: '+590 ## ## ## ## ##',
          [p.X.BM]: '+1(441) ###-####',
          [p.X.BN]: '+673###-####',
          [p.X.BO]: '+591#-###-####',
          [p.X.BQ]: '+599-###-####',
          [p.X.BR]: '+55(##) ####-####',
          [p.X.BS]: '+1(242) ###-####',
          [p.X.BT]: '+975#-###-###',
          [p.X.BW]: '+267##-###-###',
          [p.X.BY]: '+375(##) ###-##-##',
          [p.X.BZ]: '+501###-####',
          [p.X.CA]: '+1(###) ###-####',
          [p.X.CD]: '+243(###) ###-###',
          [p.X.CF]: '+236-##-##-####',
          [p.X.CG]: '+242##-###-####',
          [p.X.CH]: '+41##-###-####',
          [p.X.CI]: '+225##-##-###-###',
          [p.X.CL]: '+56#-####-####',
          [p.X.CM]: '+237#####-####',
          [p.X.CN]: '+86(###) ####-####',
          [p.X.CO]: '+57(###) ###-####',
          [p.X.CR]: '+506####-####',
          [p.X.CU]: '+53#-###-####',
          [p.X.CV]: '+238(###) ##-##',
          [p.X.CW]: '+5999-###-####',
          [p.X.CY]: '+357##-###-###',
          [p.X.CZ]: '+420(###) ###-###',
          [p.X.DE]: '+49(###) ###-###-##',
          [p.X.DJ]: '+253##-##-##-##',
          [p.X.DK]: '+45##-##-##-##',
          [p.X.DM]: '+1(767) ###-####',
          [p.X.DO]: '+1(###) ###-####',
          [p.X.DZ]: '+213##-###-####',
          [p.X.EC]: '+593##-###-####',
          [p.X.EE]: '+372####-####',
          [p.X.EG]: '+20(###) ###-####',
          [p.X.ER]: '+291#-###-###',
          [p.X.ES]: '+34(###) ###-###',
          [p.X.ET]: '+251##-###-####',
          [p.X.FI]: '+358(###) ###-##-##',
          [p.X.FJ]: '+679##-#####',
          [p.X.FK]: '+500#####',
          [p.X.FM]: '+691###-####',
          [p.X.FR]: '+33 ## ## ## ## ##',
          [p.X.GA]: '+241##-##-##-##',
          [p.X.GB]: '+44##-####-####',
          [p.X.GD]: '+1(473) ###-####',
          [p.X.GE]: '+995(###) ###-###',
          [p.X.GF]: '+594 ## ## ## ## ##',
          [p.X.GH]: '+233(###) ###-###',
          [p.X.GI]: '+350###-#####',
          [p.X.GL]: '+299##-##-##',
          [p.X.GM]: '+220(###) ##-##',
          [p.X.GN]: '+224##-###-###',
          [p.X.GP]: '+590 ## ## ## ## ##',
          [p.X.GQ]: '+240##-###-####',
          [p.X.GR]: '+30(###) ###-####',
          [p.X.GT]: '+502#-###-####',
          [p.X.GW]: '+245#-######',
          [p.X.GY]: '+592###-####',
          [p.X.HK]: '+852####-####',
          [p.X.HN]: '+504####-####',
          [p.X.HR]: '+385##-###-####',
          [p.X.HT]: '+509##-##-####',
          [p.X.HU]: '+36(###) ###-###',
          [p.X.ID]: '+62(###) ###-##-###',
          [p.X.IE]: '+353(###) ###-###',
          [p.X.IL]: '+972##-###-####',
          [p.X.IN]: '+91(####) ###-###',
          [p.X.IQ]: '+964(###) ###-####',
          [p.X.IR]: '+98(###) ###-####',
          [p.X.IS]: '+354###-####',
          [p.X.IT]: '+39(###) ####-###',
          [p.X.JM]: '+1(876) ###-####',
          [p.X.JO]: '+962#-####-####',
          [p.X.JP]: '+81-##-####-####',
          [p.X.KE]: '+254###-######',
          [p.X.KG]: '+996(###) ###-###',
          [p.X.KH]: '+855##-###-###',
          [p.X.KM]: '+269##-#####',
          [p.X.KN]: '+1(869) ###-####',
          [p.X.KP]: '+850####-#############',
          [p.X.KR]: '+82##-###-####',
          [p.X.KW]: '+965####-####',
          [p.X.KY]: '+1(345) ###-####',
          [p.X.KZ]: '+7(###) ###-##-##',
          [p.X.LA]: '+856##-##-###-###',
          [p.X.LB]: '+961##-###-###',
          [p.X.LC]: '+1(758) ###-####',
          [p.X.LI]: '+423(###) ###-####',
          [p.X.LK]: '+94##-###-####',
          [p.X.LR]: '+231##-###-###',
          [p.X.LS]: '+266#-###-####',
          [p.X.LT]: '+370(###) ##-###',
          [p.X.LU]: '+352(###) ###-###',
          [p.X.LV]: '+371##-###-###',
          [p.X.LY]: '+218##-###-####',
          [p.X.MA]: '+212##-####-###',
          [p.X.MC]: '+377###-###-###',
          [p.X.MD]: '+373####-####',
          [p.X.ME]: '+382##-###-###',
          [p.X.MF]: '+590 ## ## ## ## ##',
          [p.X.MG]: '+261##-##-#####',
          [p.X.MK]: '+389##-###-###',
          [p.X.ML]: '+223##-##-####',
          [p.X.MM]: '+95##-###-###',
          [p.X.MN]: '+976##-##-####',
          [p.X.MO]: '+853####-####',
          [p.X.MQ]: '+596 ## ## ## ## ##',
          [p.X.MR]: '+222##-##-####',
          [p.X.MS]: '+1(664) ###-####',
          [p.X.MT]: '+356####-####',
          [p.X.MU]: '+230####-####',
          [p.X.MV]: '+960###-####',
          [p.X.MW]: '+265#-####-####',
          [p.X.MX]: '+52(###) ###-####',
          [p.X.MY]: '+60(###) ###-###',
          [p.X.MZ]: '+258##-###-###',
          [p.X.NA]: '+264##-###-####',
          [p.X.NC]: '+687 ### ###',
          [p.X.NE]: '+227##-##-####',
          [p.X.NG]: '+234(###) ###-####',
          [p.X.NI]: '+505####-####',
          [p.X.NL]: '+31##-###-####',
          [p.X.NO]: '+47(###) ##-###',
          [p.X.NP]: '+977##-###-###',
          [p.X.NZ]: '+64(###) ###-####',
          [p.X.OM]: '+968##-###-###',
          [p.X.PA]: '+507###-####',
          [p.X.PE]: '+51(###) ###-###',
          [p.X.PF]: '+689 ## ## ## ##',
          [p.X.PG]: '+675(###) ##-###',
          [p.X.PH]: '+63(###) ###-####',
          [p.X.PK]: '+92(###) ###-####',
          [p.X.PL]: '+48(###) ###-###',
          [p.X.PT]: '+351##-###-####',
          [p.X.PW]: '+680###-####',
          [p.X.PY]: '+595(###) ###-###',
          [p.X.QA]: '+974####-####',
          [p.X.RE]: '+262 ## ## ## ## ##',
          [p.X.RO]: '+40##-###-####',
          [p.X.RS]: '+381##-###-####',
          [p.X.RU]: '+7### ###-##-##',
          [p.X.RW]: '+250(###) ###-###',
          [p.X.SA]: '+966#-####-####',
          [p.X.SB]: '+677###-####',
          [p.X.SC]: '+248#-###-###',
          [p.X.SD]: '+249##-###-####',
          [p.X.SE]: '+46##-###-####',
          [p.X.SG]: '+65####-####',
          [p.X.SH]: '+290####',
          [p.X.SI]: '+386##-###-###',
          [p.X.SK]: '+421(###) ###-###',
          [p.X.SL]: '+232##-######',
          [p.X.SM]: '+378####-######',
          [p.X.SN]: '+221##-###-####',
          [p.X.SO]: '+252##-###-###',
          [p.X.SR]: '+597###-####',
          [p.X.ST]: '+239##-#####',
          [p.X.SV]: '+503##-##-####',
          [p.X.SX]: '+1(721) ###-####',
          [p.X.SY]: '+963##-####-###',
          [p.X.SZ]: '+268##-##-####',
          [p.X.TC]: '+1(649) ###-####',
          [p.X.TD]: '+235##-##-##-##',
          [p.X.TG]: '+228##-###-###',
          [p.X.TH]: '+66##-###-####',
          [p.X.TJ]: '+992##-###-####',
          [p.X.TL]: '+670###-#####',
          [p.X.TM]: '+993#-###-####',
          [p.X.TN]: '+216##-###-###',
          [p.X.TO]: '+676#####',
          [p.X.TR]: '+90(###) ###-####',
          [p.X.TT]: '+1(868) ###-####',
          [p.X.TW]: '+886#-####-####',
          [p.X.TZ]: '+255##-###-####',
          [p.X.UA]: '+380(##) ###-##-##',
          [p.X.UG]: '+256(###) ###-###',
          [p.X.US]: '+1(###) ###-####',
          [p.X.UY]: '+598#-###-##-##',
          [p.X.UZ]: '+998##-###-####',
          [p.X.VC]: '+1(784) ###-####',
          [p.X.VE]: '+58(###) ###-####',
          [p.X.VG]: '+1(284)###-####',
          [p.X.VN]: '+84(###) ####-###',
          [p.X.VU]: '+678##-#####',
          [p.X.WS]: '+685##-####',
          [p.X.XK]: '+383##-###-###',
          [p.X.YE]: '+967###-###-###',
          [p.X.YT]: '+262 ## ## ## ## ##',
          [p.X.ZA]: '+27##-###-####',
          [p.X.ZM]: '+260##-###-####',
          [p.X.ZW]: '+263#-######',
        }),
        new t.OlP('[TUI_DATE_VALUE_TRANSFORMER]'),
        new t.OlP('[TUI_DATE_RANGE_VALUE_TRANSFORMER]'),
        new t.OlP('[TUI_DATE_TIME_VALUE_TRANSFORMER]'),
        (0, U.N1)((0, ft.v)('prompt')),
        (0, U.N1)((0, ft.v)('cancel')),
        (0, U.N1)((0, ft.v)('done')),
        (0, U.N1)((0, ft.v)('more')),
        (0, U.N1)((0, ft.v)('hide')),
        (0, U.N1)((0, ft.v)('showAll')),
        (0, U.N1)((0, ft.v)('otherDate')),
        (0, U.N1)((0, ft.v)('mobileCalendarTexts')),
        (0, U.N1)((0, ft.v)('range')),
        (0, U.N1)((0, ft.v)('countTexts')),
        (0, U.N1)((0, ft.v)('time')),
        (0, U.N1)((0, ft.v)('dateTexts')),
        (0, U.N1)((0, ft.v)('digitalInformationUnits')),
        (0, U.N1)((0, ft.v)('copyTexts')),
        (0, U.N1)((0, ft.v)('passwordTexts')),
        (0, U.N1)((0, ft.v)('shortCalendarMonths')),
        (0, U.N1)((0, ft.v)('fileTexts')),
        (0, U.N1)((0, ft.v)('pagination')),
        (0, U.N1)((0, ft.v)('inputFileTexts')),
        (0, U.N1)((0, ft.v)('multiSelectTexts')),
        (0, U.N1)((0, ft.v)('countries'));
      (0, U.JN)({
        icon: ({ $implicit: u }) =>
          's' === u ? 'tuiIconCalendar' : 'tuiIconCalendarLarge',
        min: Ye,
        max: dn,
        nativePicker: !1,
      });
      (0, U.JN)({
        stringify: mt.yZ,
        identityMatcher: mt.bg,
        disabledItemHandler: mt.Iy,
      }),
        new t.OlP('[TUI_MOBILE_CALENDAR]'),
        new t.OlP('[TUI_MONTH_FORMATTER]'),
        (0, U.JN)(24),
        (0, U.JN)({});
      var Ge = h(2737);
      const $i = (0, Ei.fx)({ limitWidth: 'fixed', align: 'right' }),
        Ve = {
          provide: ct.sE,
          deps: [[new t.FiY(), new t.PiD(), et.JU]],
          useFactory: Ge.y,
        },
        Nn = ['*', [['input']]],
        Bn = ['*', 'input'];
      let Ln = (() => {
          class u extends j.M$ {
            constructor(i, l, g) {
              super(i, l), (this.textfieldSize = g), (this.open = !1);
            }
            get size() {
              return this.textfieldSize.size;
            }
            get nativeFocusableElement() {
              return this.computedDisabled || !this.textfield
                ? null
                : this.textfield.nativeFocusableElement;
            }
            get focused() {
              return (
                (0, dt.V8)(this.nativeFocusableElement) ||
                (!!this.hostedDropdown && this.hostedDropdown.focused)
              );
            }
            get canOpen() {
              return this.interactive && !!this.datalist;
            }
            onValueChange(i) {
              (this.value = i), (this.open = !0);
            }
            onActiveZone(i) {
              this.updateFocused(i);
            }
            handleOption(i) {
              this.setNativeValue(String(i)),
                this.focusInput(),
                (this.value = String(i)),
                (this.open = !1);
            }
            getFallbackValue() {
              return '';
            }
            focusInput(i = !1) {
              this.nativeFocusableElement &&
                this.nativeFocusableElement.focus({ preventScroll: i });
            }
            setNativeValue(i) {
              this.nativeFocusableElement &&
                (this.nativeFocusableElement.value = i);
            }
          }
          return (
            (u.ɵfac = function (i) {
              return new (i || u)(t.Y36(et.a5, 10), t.Y36(t.sBO), t.Y36(W.kI));
            }),
            (u.ɵcmp = t.Xpm({
              type: u,
              selectors: [['tui-input']],
              contentQueries: function (i, l, g) {
                if ((1 & i && t.Suo(g, Ne, 5, t.Rgc), 2 & i)) {
                  let _;
                  t.iGM((_ = t.CRH())) && (l.datalist = _.first);
                }
              },
              viewQuery: function (i, l) {
                if ((1 & i && (t.Gf(L.o1, 5), t.Gf(ri, 5)), 2 & i)) {
                  let g;
                  t.iGM((g = t.CRH())) && (l.hostedDropdown = g.first),
                    t.iGM((g = t.CRH())) && (l.textfield = g.first);
                }
              },
              hostVars: 1,
              hostBindings: function (i, l) {
                2 & i && t.uIk('data-size', l.size);
              },
              features: [
                t._Bn([Ve, (0, pt.FT)(u), (0, ct.oE)(u), (0, j.wB)(u)], [$i]),
                t.qOj,
              ],
              ngContentSelectors: Bn,
              decls: 4,
              vars: 11,
              consts: [
                [
                  1,
                  't-hosted',
                  3,
                  'canOpen',
                  'content',
                  'open',
                  'openChange',
                  'tuiActiveZoneChange',
                ],
                [
                  'automation-id',
                  'tui-input__textfield',
                  1,
                  't-textfield',
                  3,
                  'disabled',
                  'focusable',
                  'invalid',
                  'nativeId',
                  'pseudoFocus',
                  'pseudoHover',
                  'readOnly',
                  'value',
                  'valueChange',
                ],
              ],
              template: function (i, l) {
                1 & i &&
                  (t.F$t(Nn),
                  t.TgZ(0, 'tui-hosted-dropdown', 0),
                  t.NdJ('openChange', function (_) {
                    return (l.open = _);
                  })('tuiActiveZoneChange', function (_) {
                    return l.onActiveZone(_);
                  }),
                  t.TgZ(1, 'tui-primitive-textfield', 1),
                  t.NdJ('valueChange', function (_) {
                    return l.onValueChange(_);
                  }),
                  t.Hsn(2),
                  t.Hsn(3, 1, ['ngProjectAs', 'input', 5, ['input']]),
                  t.qZA()()),
                  2 & i &&
                    (t.Q6J('canOpen', l.canOpen)('content', l.datalist || '')(
                      'open',
                      l.open
                    ),
                    t.xp6(1),
                    t.Q6J('disabled', l.computedDisabled)(
                      'focusable',
                      l.computedFocusable
                    )('invalid', l.computedInvalid)('nativeId', l.nativeId)(
                      'pseudoFocus',
                      l.computedFocused
                    )('pseudoHover', l.pseudoHover)('readOnly', l.readOnly)(
                      'value',
                      l.value
                    ));
              },
              dependencies: [L.o1, ri, B.e, Pe],
              styles: [
                '[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}',
              ],
              changeDetection: 0,
            })),
            u
          );
        })(),
        Ze = (() => {
          class u extends Z.D1 {
            onValueChange(i) {
              this.host.onValueChange(i);
            }
          }
          return (
            (u.ɵfac = (function () {
              let a;
              return function (l) {
                return (a || (a = t.n5z(u)))(l || u);
              };
            })()),
            (u.ɵdir = t.lG2({
              type: u,
              selectors: [['tui-input']],
              features: [t._Bn([(0, ct.cp)(u)]), t.qOj],
            })),
            u
          );
        })(),
        Je = (() => {
          class u {}
          return (
            (u.ɵfac = function (i) {
              return new (i || u)();
            }),
            (u.ɵmod = t.oAB({ type: u })),
            (u.ɵinj = t.cJS({ imports: [[e.ez, B.A, Vi, L.jh]] })),
            u
          );
        })();
      var Se = h(3781),
        me = h(5710);
      let vi = (() => {
        class u {
          searchBooks(i, l) {
            return l.filter(
              (g) =>
                g.title.trim().toLowerCase().includes(i.trim().toLowerCase()) ||
                g.subtitle.trim().toLowerCase().includes(i.trim().toLowerCase())
            );
          }
          static #t = (this.ɵfac = function (l) {
            return new (l || u)();
          });
          static #e = (this.ɵprov = t.Yz7({
            token: u,
            factory: u.ɵfac,
            providedIn: 'root',
          }));
        }
        return u;
      })();
      var mi = h(1818);
      function Ui(u, a) {
        1 & u && (t.TgZ(0, 'th', 10), t._uU(1, '#'), t.qZA()),
          2 & u && t.Q6J('sorter', null);
      }
      function o(u, a) {
        1 & u &&
          (t.TgZ(0, 'th', 11),
          t._uU(1, '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435'),
          t.qZA());
      }
      function r(u, a) {
        1 & u &&
          (t.TgZ(0, 'th', 10),
          t._uU(
            1,
            '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e'
          ),
          t.qZA()),
          2 & u && t.Q6J('sorter', null);
      }
      function n(u, a) {
        1 & u &&
          (t.TgZ(0, 'th', 11), t._uU(1, '\u0426\u0435\u043d\u0430'), t.qZA());
      }
      function s(u, a) {
        1 & u &&
          (t.TgZ(0, 'th', 10),
          t._uU(1, '\u041a\u043e\u0440\u0437\u0438\u043d\u0430'),
          t.qZA()),
          2 & u && t.Q6J('sorter', null);
      }
      function c(u, a) {
        if ((1 & u && (t.TgZ(0, 'td', 17), t._uU(1), t.qZA()), 2 & u)) {
          const i = t.oxw().index;
          t.xp6(1), t.hij(' ', i + 1, ' ');
        }
      }
      function d(u, a) {
        if (
          (1 & u &&
            (t.TgZ(0, 'td', 17), t._UZ(1, 'img', 18), t._uU(2), t.qZA()),
          2 & u)
        ) {
          const i = t.oxw().$implicit;
          t.xp6(1),
            t.Q6J('src', i.image, t.LSH)('alt', i.title),
            t.xp6(1),
            t.hij(' ', i.title, ' ');
        }
      }
      function f(u, a) {
        if ((1 & u && (t.TgZ(0, 'td', 17), t._uU(1), t.qZA()), 2 & u)) {
          const i = t.oxw().$implicit;
          t.xp6(1),
            t.Oqu(
              i.subtitle ||
                '\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445'
            );
        }
      }
      function m(u, a) {
        if ((1 & u && (t.TgZ(0, 'td', 17), t._uU(1), t.qZA()), 2 & u)) {
          const i = t.oxw().$implicit;
          t.xp6(1), t.Oqu(i.price);
        }
      }
      function T(u, a) {
        if (
          (1 & u &&
            (t.TgZ(0, 'td', 19),
            t.NdJ('click', function (l) {
              return l.stopPropagation();
            }),
            t._UZ(1, 'cart-button', 20),
            t.qZA()),
          2 & u)
        ) {
          const i = t.oxw().$implicit;
          t.xp6(1), t.Q6J('book', i);
        }
      }
      function O(u, a) {
        if (1 & u) {
          const i = t.EpF();
          t.TgZ(0, 'tr', 14),
            t.NdJ('click', function () {
              const _ = t.CHM(i).$implicit,
                H = t.oxw(3);
              return t.KtG(H.toDetailPage(_.isbn13));
            }),
            t.YNc(1, c, 2, 1, 'td', 15),
            t.YNc(2, d, 3, 3, 'td', 15),
            t.YNc(3, f, 2, 1, 'td', 15),
            t.YNc(4, m, 2, 1, 'td', 15),
            t.YNc(5, T, 2, 1, 'td', 16),
            t.qZA();
        }
        2 & u &&
          (t.xp6(1),
          t.Q6J('tuiCell', 'number'),
          t.xp6(1),
          t.Q6J('tuiCell', 'title'),
          t.xp6(1),
          t.Q6J('tuiCell', 'subtitle'),
          t.xp6(1),
          t.Q6J('tuiCell', 'price'),
          t.xp6(1),
          t.Q6J('tuiCell', 'cart'));
      }
      function y(u, a) {
        if (
          (1 & u &&
            (t.TgZ(0, 'tbody', 12), t.YNc(1, O, 6, 5, 'tr', 13), t.qZA()),
          2 & u)
        ) {
          const i = a.tuiLet;
          t.Q6J('data', i), t.xp6(1), t.Q6J('ngForOf', i);
        }
      }
      function S(u, a) {
        if (1 & u) {
          const i = t.EpF();
          t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr')(3, 'th', 3)(
            4,
            'tui-input',
            null,
            4
          ),
            t._uU(6, ' \u041f\u043e\u0438\u0441\u043a '),
            t.TgZ(7, 'input', 5),
            t.NdJ('input', function () {
              t.CHM(i);
              const g = t.MAs(5),
                _ = t.oxw();
              return t.KtG(_.searchBooks(g.value));
            }),
            t.qZA()()()(),
            t.TgZ(8, 'tr', 6),
            t.YNc(9, Ui, 2, 1, 'th', 7),
            t.YNc(10, o, 2, 0, 'th', 8),
            t.YNc(11, r, 2, 1, 'th', 7),
            t.YNc(12, n, 2, 0, 'th', 8),
            t.YNc(13, s, 2, 1, 'th', 7),
            t.qZA()(),
            t.YNc(14, y, 2, 2, 'tbody', 9),
            t.ALo(15, 'tuiTableSort'),
            t.qZA();
        }
        if (2 & u) {
          const i = a.ngIf,
            l = t.oxw();
          t.Q6J('columns', l.columns),
            t.xp6(9),
            t.Q6J('tuiHead', 'number'),
            t.xp6(1),
            t.Q6J('tuiHead', 'title'),
            t.xp6(1),
            t.Q6J('tuiHead', 'subtitle'),
            t.xp6(1),
            t.Q6J('tuiHead', 'price'),
            t.xp6(1),
            t.Q6J('tuiHead', 'cart'),
            t.xp6(1),
            t.Q6J('tuiLet', t.lcZ(15, 7, i));
        }
      }
      let R = (() => {
        class u {
          constructor(i, l, g) {
            (this.dataService = i),
              (this.router = l),
              (this.searchService = g),
              (this.columns = ['number', 'title', 'subtitle', 'price', 'cart']),
              (this.books$ = this.dataService.books$);
          }
          ngOnInit() {
            this.dataService.getBooks$().subscribe();
          }
          searchBooks(i) {
            this.books$.next(
              this.searchService.searchBooks(
                i,
                this.dataService.allBooks$.value
              )
            );
          }
          toDetailPage(i) {
            i && this.router.navigate(['main', i]);
          }
          static #t = (this.ɵfac = function (l) {
            return new (l || u)(t.Y36(Se.s), t.Y36(me.F0), t.Y36(vi));
          });
          static #e = (this.ɵcmp = t.Xpm({
            type: u,
            selectors: [['app-book-list']],
            decls: 3,
            vars: 3,
            consts: [
              [1, 'books'],
              ['class', 'books-table', 'tuiTable', '', 3, 'columns', 4, 'ngIf'],
              ['tuiTable', '', 1, 'books-table', 3, 'columns'],
              ['tuiTh', '', 'colspan', '5'],
              ['inputElement', ''],
              [
                'placeholder',
                '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438',
                'tuiTextfield',
                '',
                3,
                'input',
              ],
              ['tuiThGroup', ''],
              ['tuiTh', '', 3, 'sorter', 4, 'tuiHead'],
              ['tuiTh', '', 4, 'tuiHead'],
              ['tuiTbody', '', 3, 'data', 4, 'tuiLet'],
              ['tuiTh', '', 3, 'sorter'],
              ['tuiTh', ''],
              ['tuiTbody', '', 3, 'data'],
              ['tuiTr', '', 3, 'click', 4, 'ngFor', 'ngForOf'],
              ['tuiTr', '', 3, 'click'],
              ['tuiTd', '', 4, 'tuiCell'],
              ['tuiTd', '', 3, 'click', 4, 'tuiCell'],
              ['tuiTd', ''],
              ['width', '30px', 3, 'src', 'alt'],
              ['tuiTd', '', 3, 'click'],
              [3, 'book'],
            ],
            template: function (l, g) {
              1 & l &&
                (t.TgZ(0, 'div', 0),
                t.YNc(1, S, 16, 9, 'table', 1),
                t.ALo(2, 'async'),
                t.qZA()),
                2 & l && (t.xp6(1), t.Q6J('ngIf', t.lcZ(2, 1, g.books$)));
            },
            dependencies: [
              e.sg,
              e.O5,
              Y.c4,
              Y.jY,
              Y.EE,
              Y.Ws,
              Y.Kt,
              Y.fu,
              Y.Bl,
              Y.DZ,
              it.Ls,
              Ln,
              Ze,
              xi,
              mi.d,
              e.Ov,
              Y.yS,
            ],
            styles: [
              '.books[_ngcontent-%COMP%]{margin:0 auto;padding:1.5rem;display:flex;align-items:center;justify-content:center;flex-direction:column;max-width:90rem}.books-table[_ngcontent-%COMP%]{margin:0 auto}.total-price[_ngcontent-%COMP%]{cursor:none;background-color:transparent}tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background-color:#faeee5;cursor:pointer}',
            ],
            changeDetection: 0,
          }));
        }
        return u;
      })();
      var $ = h(8180);
      function J(u, a) {
        if ((1 & u && (t.TgZ(0, 'p', 9), t._uU(1), t.qZA()), 2 & u)) {
          const i = t.oxw().ngIf;
          t.xp6(1),
            t.hij(
              '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e: ',
              i.subtitle,
              ''
            );
        }
      }
      function Ct(u, a) {
        if (1 & u) {
          const i = t.EpF();
          t.TgZ(0, 'div', 1)(1, 'button', 2),
            t.NdJ('click', function () {
              t.CHM(i);
              const g = t.oxw();
              return t.KtG(g.toBackPage());
            }),
            t._uU(2, ' \u041d\u0430\u0437\u0430\u0434 '),
            t.qZA(),
            t.TgZ(3, 'div'),
            t._UZ(4, 'img', 3),
            t.qZA(),
            t.TgZ(5, 'div', 4)(6, 'h1'),
            t._uU(7),
            t.qZA(),
            t.YNc(8, J, 2, 1, 'p', 5),
            t.TgZ(9, 'div', 6),
            t._uU(10),
            t.qZA(),
            t.TgZ(11, 'a', 7),
            t._uU(
              12,
              '\u041f\u043e\u043b\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f'
            ),
            t.qZA(),
            t.TgZ(13, 'div'),
            t._uU(14, ' \u041a\u043e\u0440\u0437\u0438\u043d\u0430: '),
            t._UZ(15, 'cart-button', 8),
            t.qZA()()();
        }
        if (2 & u) {
          const i = a.ngIf;
          t.xp6(4),
            t.Q6J('src', i.image, t.LSH)('alt', i.title),
            t.xp6(3),
            t.Oqu(i.title),
            t.xp6(1),
            t.Q6J('ngIf', i.subtitle),
            t.xp6(2),
            t.hij('\u0426\u0435\u043d\u0430: ', i.price, ''),
            t.xp6(1),
            t.Q6J('href', i.url, t.LSH),
            t.xp6(4),
            t.Q6J('book', i);
        }
      }
      const Dt = [
        { path: '', component: R },
        {
          path: ':id',
          component: (() => {
            class u {
              constructor(i, l, g, _) {
                (this.activatedRoute = i),
                  (this.booksDataService = l),
                  (this.router = g),
                  (this.location = _),
                  (this.book$ = this.booksDataService.book$);
              }
              ngOnInit() {
                this.activatedRoute.paramMap
                  .pipe(
                    (0, At.w)((i) => i.getAll('id')),
                    (0, z.b)((i) =>
                      this.booksDataService
                        .getBookFromId(i)
                        .pipe(
                          (0, z.b)((l) => {
                            l || this.router.navigate(['/main']);
                          })
                        )
                        .subscribe()
                    ),
                    (0, $.q)(1)
                  )
                  .subscribe();
              }
              toBackPage() {
                this.location.back();
              }
              static #t = (this.ɵfac = function (l) {
                return new (l || u)(
                  t.Y36(me.gz),
                  t.Y36(Se.s),
                  t.Y36(me.F0),
                  t.Y36(e.Ye)
                );
              });
              static #e = (this.ɵcmp = t.Xpm({
                type: u,
                selectors: [['app-detail-book']],
                decls: 2,
                vars: 3,
                consts: [
                  ['class', 'book', 4, 'ngIf'],
                  [1, 'book'],
                  [
                    'tuiButton',
                    '',
                    'appearance',
                    'flat',
                    'size',
                    'xs',
                    1,
                    'book-back-button',
                    3,
                    'click',
                  ],
                  [1, 'book-image', 3, 'src', 'alt'],
                  [1, 'book-block'],
                  ['class', 'book-subtitle', 4, 'ngIf'],
                  [1, 'book-price'],
                  ['target', '_blank', 1, 'book-full-info', 3, 'href'],
                  [3, 'book'],
                  [1, 'book-subtitle'],
                ],
                template: function (l, g) {
                  1 & l && (t.YNc(0, Ct, 16, 7, 'div', 0), t.ALo(1, 'async')),
                    2 & l && t.Q6J('ngIf', t.lcZ(1, 1, g.book$));
                },
                dependencies: [e.O5, M.v0, mi.d, e.Ov],
                styles: [
                  '.book[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:row;column-gap:1.5rem;padding:1.5rem}.book-back-button[_ngcontent-%COMP%]{align-self:start}.book-block[_ngcontent-%COMP%]{display:flex;align-items:start;justify-content:start;flex-direction:column;max-width:50%;row-gap:1rem}.book-image[_ngcontent-%COMP%]{max-height:22rem;max-width:19rem}.book-buy-button[_ngcontent-%COMP%]{width:300px;height:40px}',
                ],
                changeDetection: 0,
              }));
            }
            return u;
          })(),
        },
        { path: '**', redirectTo: '', pathMatch: 'full' },
      ];
      let Gt = (() => {
        class u {
          static #t = (this.ɵfac = function (l) {
            return new (l || u)();
          });
          static #e = (this.ɵmod = t.oAB({ type: u }));
          static #i = (this.ɵinj = t.cJS({
            imports: [me.Bz.forChild(Dt), me.Bz],
          }));
        }
        return u;
      })();
      var wt = h(5271);
      let Vt = (() => {
        class u {
          static #t = (this.ɵfac = function (l) {
            return new (l || u)();
          });
          static #e = (this.ɵmod = t.oAB({ type: u }));
          static #i = (this.ɵinj = t.cJS({
            providers: [Se.s],
            imports: [e.ez, Gt, M.fN, Y.jz, it.WD, Je, wt.n],
          }));
        }
        return u;
      })();
    },
    1818: (se, vt, h) => {
      h.d(vt, { d: () => pt });
      var e = h(9407),
        M = h(5879),
        Y = h(3414),
        it = h(6814),
        t = h(6140);
      function et(L, V) {
        if (1 & L) {
          const A = M.EpF();
          M.TgZ(0, 'button', 6),
            M.NdJ('click', function () {
              M.CHM(A);
              const q = M.oxw(2),
                at = M.MAs(2);
              return M.KtG(q.removeBookFromCart(q.book, at));
            }),
            M.qZA();
        }
      }
      function B(L, V) {
        if ((1 & L && (M.TgZ(0, 'div'), M._uU(1), M.qZA()), 2 & L)) {
          const A = M.oxw(2);
          M.xp6(1), M.Oqu(A.book.counterBooks);
        }
      }
      function j(L, V) {
        if (1 & L) {
          const A = M.EpF();
          M.TgZ(0, 'div', 2),
            M.YNc(1, et, 1, 0, 'button', 3),
            M.YNc(2, B, 2, 1, 'div', 4),
            M.TgZ(3, 'button', 5),
            M.NdJ('click', function () {
              M.CHM(A);
              const q = M.oxw();
              return M.KtG(q.addBookToCart(q.book));
            }),
            M.qZA()();
        }
        if (2 & L) {
          const A = M.oxw();
          M.xp6(1),
            M.Q6J('ngIf', A.book.counterBooks),
            M.xp6(1),
            M.Q6J('ngIf', A.book.counterBooks);
        }
      }
      function dt(L, V) {
        if (1 & L) {
          const A = M.EpF();
          M.TgZ(0, 'p'),
            M._uU(1),
            M.qZA(),
            M.TgZ(2, 'button', 7),
            M.NdJ('click', function () {
              const at = M.CHM(A).$implicit,
                xt = M.oxw();
              return M.KtG(xt.dialogRemoveBook(xt.book, at));
            }),
            M._uU(
              3,
              ' \u0414\u0430, \u0443\u0434\u0430\u043b\u0438\u0442\u044c! '
            ),
            M.qZA(),
            M.TgZ(4, 'button', 8),
            M.NdJ('click', function () {
              const at = M.CHM(A).$implicit;
              return M.KtG(at.complete());
            }),
            M._uU(5, ' \u041d\u0435\u0442 '),
            M.qZA();
        }
        if (2 & L) {
          const A = M.oxw();
          M.xp6(1),
            M.hij(
              '\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443 ',
              null == A.book ? null : A.book.title,
              '?'
            );
        }
      }
      let pt = (() => {
        class L {
          constructor(A, E) {
            (this.cartService = A), (this.dialogs = E), (this.book = null);
          }
          addBookToCart(A) {
            A.counterBooks ? A.counterBooks++ : (A.counterBooks = 1),
              this.cartService.addToCart(A);
          }
          removeBookFromCart(A, E) {
            A.counterBooks &&
              (A.counterBooks <= 1
                ? this.dialogs.open(E).subscribe()
                : A.counterBooks > 1 &&
                  (--A.counterBooks, this.cartService.removeFromCart(A)));
          }
          dialogRemoveBook(A, E) {
            (A.counterBooks = 0),
              this.cartService.removeFromCart(A),
              E.complete();
          }
          static #t = (this.ɵfac = function (E) {
            return new (E || L)(M.Y36(Y.N), M.Y36(e.RO));
          });
          static #e = (this.ɵcmp = M.Xpm({
            type: L,
            selectors: [['cart-button']],
            inputs: { book: 'book' },
            decls: 3,
            vars: 1,
            consts: [
              ['class', 'cart-button', 4, 'ngIf'],
              ['template', ''],
              [1, 'cart-button'],
              [
                'tuiIconButton',
                '',
                'title',
                '\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b',
                'size',
                's',
                'shape',
                'rounded',
                'appearance',
                'secondary-destructive',
                'icon',
                'tuiIconMinusCircle',
                3,
                'click',
                4,
                'ngIf',
              ],
              [4, 'ngIf'],
              [
                'tuiIconButton',
                '',
                'title',
                '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443',
                'size',
                's',
                'shape',
                'rounded',
                'appearance',
                'primary',
                'icon',
                'tuiIconPlusCircle',
                3,
                'click',
              ],
              [
                'tuiIconButton',
                '',
                'title',
                '\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b',
                'size',
                's',
                'shape',
                'rounded',
                'appearance',
                'secondary-destructive',
                'icon',
                'tuiIconMinusCircle',
                3,
                'click',
              ],
              [
                'size',
                'm',
                'tuiButton',
                '',
                'type',
                'button',
                'appearance',
                'secondary-destructive',
                1,
                'tui-space_right-3',
                3,
                'click',
              ],
              ['size', 'm', 'tuiButton', '', 'type', 'button', 3, 'click'],
            ],
            template: function (E, q) {
              1 & E &&
                (M.YNc(0, j, 4, 2, 'div', 0),
                M.YNc(1, dt, 6, 1, 'ng-template', null, 1, M.W1O)),
                2 & E && M.Q6J('ngIf', q.book);
            },
            dependencies: [it.O5, t.v0],
            styles: [
              '.cart-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:row;gap:7px}',
            ],
            changeDetection: 0,
          }));
        }
        return L;
      })();
    },
    5271: (se, vt, h) => {
      h.d(vt, { n: () => it });
      var e = h(6814),
        M = h(6140),
        Y = h(5879);
      let it = (() => {
        class t {
          static #t = (this.ɵfac = function (j) {
            return new (j || t)();
          });
          static #e = (this.ɵmod = Y.oAB({ type: t }));
          static #i = (this.ɵinj = Y.cJS({ imports: [e.ez, M.fN] }));
        }
        return t;
      })();
    },
    3781: (se, vt, h) => {
      h.d(vt, { s: () => j });
      var e = h(5619),
        M = h(7398),
        Y = h(9397),
        it = h(8180);
      const t = JSON.parse(
        '{"error":"0","total":"20","books":[{"title":"Architect Modern Web Applications with ASP.NET Core and Azure","subtitle":"","isbn13":"1001635859865","price":"$0.00","image":"https://itbook.store/img/books/1001635859865.png","url":"https://itbook.store/books/1001635859865"},{"title":"Graph-Powered Machine Learning","subtitle":"","isbn13":"9781617295645","price":"$49.99","image":"https://itbook.store/img/books/9781617295645.png","url":"https://itbook.store/books/9781617295645"},{"title":"Real-World Cryptography","subtitle":"","isbn13":"9781617296710","price":"$55.81","image":"https://itbook.store/img/books/9781617296710.png","url":"https://itbook.store/books/9781617296710"},{"title":"Deep Learning with Python, 2nd Edition","subtitle":"","isbn13":"9781617296864","price":"$53.99","image":"https://itbook.store/img/books/9781617296864.png","url":"https://itbook.store/books/9781617296864"},{"title":"Pandas in Action","subtitle":"","isbn13":"9781617297434","price":"$55.43","image":"https://itbook.store/img/books/9781617297434.png","url":"https://itbook.store/books/9781617297434"},{"title":"Pipeline as Code","subtitle":"Continuous Delivery with Jenkins, Kubernetes, and Terraform","isbn13":"9781617297540","price":"$53.75","image":"https://itbook.store/img/books/9781617297540.png","url":"https://itbook.store/books/9781617297540"},{"title":"Microservices in .NET, 2nd Edition","subtitle":"","isbn13":"9781617297922","price":"$59.99","image":"https://itbook.store/img/books/9781617297922.png","url":"https://itbook.store/books/9781617297922"},{"title":"Five Lines of Code","subtitle":"How and when to refactor","isbn13":"9781617298318","price":"$44.79","image":"https://itbook.store/img/books/9781617298318.png","url":"https://itbook.store/books/9781617298318"},{"title":"The Programmer\'s Brain","subtitle":"What every programmer needs to know about cognition","isbn13":"9781617298677","price":"$44.79","image":"https://itbook.store/img/books/9781617298677.png","url":"https://itbook.store/books/9781617298677"},{"title":"Spring Start Here","subtitle":"Learn what you need and learn it well","isbn13":"9781617298691","price":"$49.99","image":"https://itbook.store/img/books/9781617298691.png","url":"https://itbook.store/books/9781617298691"},{"title":"Conversational AI","subtitle":"Chatbots that work","isbn13":"9781617298837","price":"$44.80","image":"https://itbook.store/img/books/9781617298837.png","url":"https://itbook.store/books/9781617298837"},{"title":"HackSpace Magazine: Issue 47","subtitle":"October 2021","isbn13":"1001635431011","price":"$0.00","image":"https://itbook.store/img/books/1001635431011.png","url":"https://itbook.store/books/1001635431011"},{"title":"Beginning Excel 2019","subtitle":"","isbn13":"1001635431098","price":"$0.00","image":"https://itbook.store/img/books/1001635431098.png","url":"https://itbook.store/books/1001635431098"},{"title":"Hands-on Azure Functions with C#","subtitle":"Build Function as a Service (FaaS) Solutions","isbn13":"9781484271216","price":"$43.65","image":"https://itbook.store/img/books/9781484271216.png","url":"https://itbook.store/books/9781484271216"},{"title":"MERN Projects for Beginners","subtitle":"Create Five Social Web Apps Using MongoDB, Express.js, React, and Node","isbn13":"9781484271377","price":"$40.99","image":"https://itbook.store/img/books/9781484271377.png","url":"https://itbook.store/books/9781484271377"},{"title":"Pro Java Microservices with Quarkus and Kubernetes","subtitle":"A Hands-on Guide","isbn13":"9781484271698","price":"$43.29","image":"https://itbook.store/img/books/9781484271698.png","url":"https://itbook.store/books/9781484271698"},{"title":"Systematic Cloud Migration","subtitle":"A Hands-On Guide to Architecture, Design, and Technical Implementation","isbn13":"9781484272510","price":"$37.39","image":"https://itbook.store/img/books/9781484272510.png","url":"https://itbook.store/books/9781484272510"},{"title":"Performance Testing","subtitle":"An ISTQB Certified Tester Foundation Level Specialist Certification Review","isbn13":"9781484272541","price":"$44.74","image":"https://itbook.store/img/books/9781484272541.png","url":"https://itbook.store/books/9781484272541"},{"title":"Simple and Efficient Programming with C#","subtitle":"Skills to Build Applications with Visual Studio and .NET","isbn13":"9781484273210","price":"$37.74","image":"https://itbook.store/img/books/9781484273210.png","url":"https://itbook.store/books/9781484273210"},{"title":"Pro Azure Administration and Automation","subtitle":"A Comprehensive Guide to Successful Cloud Management","isbn13":"9781484273241","price":"$49.99","image":"https://itbook.store/img/books/9781484273241.png","url":"https://itbook.store/books/9781484273241"}]}'
      );
      var et = h.t(t, 2),
        B = h(5879);
      let j = (() => {
        class dt {
          constructor() {
            (this.cartKey = 'cart'),
              (this.responseBooks = et),
              (this.allBooks$ = new e.X(this.responseBooks.books)),
              (this.books$ = new e.X([])),
              (this.book$ = new e.X(void 0));
          }
          getBooks$() {
            let L = this.getCart();
            return this.allBooks$.pipe(
              (0, M.U)((V) =>
                V.map((A) => ({ ...A, counterBooks: L[A.isbn13] }))
              ),
              (0, Y.b)((V) => {
                this.books$.next(V), this.allBooks$.next(V);
              }),
              (0, it.q)(1)
            );
          }
          getBookFromId(L) {
            const V = this.getCart();
            return this.allBooks$.pipe(
              (0, M.U)((A) => A.find((E) => E.isbn13 === L)),
              (0, Y.b)((A) => {
                A &&
                  ((A.counterBooks = V[A.isbn13] ? V[A.isbn13] : void 0),
                  this.book$.next(A));
              }),
              (0, it.q)(1)
            );
          }
          getCart() {
            const L = localStorage.getItem(this.cartKey);
            return L ? JSON.parse(L) : {};
          }
          static #t = (this.ɵfac = function (V) {
            return new (V || dt)();
          });
          static #e = (this.ɵprov = B.Yz7({
            token: dt,
            factory: dt.ɵfac,
            providedIn: 'root',
          }));
        }
        return dt;
      })();
    },
    3414: (se, vt, h) => {
      h.d(vt, { N: () => it });
      var e = h(5619),
        M = h(8180),
        Y = h(5879);
      let it = (() => {
        class t {
          constructor() {
            (this.cartKey = 'cart'), (this.booksInCart$ = new e.X({}));
          }
          getBooksInCart() {
            const B = this.getCart();
            return (
              this.booksInCart$.next(B), this.booksInCart$.pipe((0, M.q)(1))
            );
          }
          addToCart(B) {
            this.addToLocalStorage(B);
            const j = this.getCart();
            this.booksInCart$.next(j);
          }
          removeFromCart(B) {
            this.removeFromLocalStorage(B.isbn13);
            const j = this.getCart();
            this.booksInCart$.next(j);
          }
          getCart() {
            const B = localStorage.getItem(this.cartKey);
            return B ? JSON.parse(B) : {};
          }
          addToLocalStorage(B) {
            if (!B) return;
            const j = this.getCart();
            j[B.isbn13] ? ++j[B.isbn13] : (j[B.isbn13] = 1),
              localStorage.setItem(this.cartKey, JSON.stringify(j));
          }
          removeFromLocalStorage(B) {
            if (!B) return;
            const j = this.getCart();
            j[B] <= 1 ? delete j[B] : --j[B],
              localStorage.setItem(this.cartKey, JSON.stringify(j));
          }
          static #t = (this.ɵfac = function (j) {
            return new (j || t)();
          });
          static #e = (this.ɵprov = Y.Yz7({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          }));
        }
        return t;
      })();
    },
    2566: (se, vt, h) => {
      h.d(vt, {
        Bl: () => fi,
        DZ: () => Ge,
        c4: () => re,
        jz: () => Ui,
        yS: () => Ze,
        jY: () => vi,
        Kt: () => Se,
        Ws: () => Ve,
        EE: () => mi,
        fu: () => me,
      });
      var e = h(5879),
        M = h(7398),
        Y = h(4664),
        it = h(3997),
        t = h(9773),
        et = h(7921),
        B = h(5592),
        j = h(3020),
        dt = h(229);
      const pt = new e.OlP('Root element for IntersectionObserver'),
        V = new e.OlP('rootMargin for IntersectionObserver', {
          providedIn: 'root',
          factory: () => '0px 0px 0px 0px',
        }),
        q = new e.OlP('threshold for IntersectionObserver', {
          providedIn: 'root',
          factory: () => 0,
        }),
        Yt = new e.OlP('Intersection Observer API support', {
          providedIn: 'root',
          factory: () => !!(0, e.f3M)(dt.m9).IntersectionObserver,
        });
      let mt = (() => {
        class o extends B.y {
          constructor({ nativeElement: n }, s, c, d, f) {
            return (
              super((m) => {
                if (!s)
                  return void m.error(
                    'IntersectionObserver is not supported in your browser'
                  );
                const T = new IntersectionObserver(
                  (O) => {
                    m.next(O);
                  },
                  { root: f?.nativeElement, rootMargin: c, threshold: d }
                );
                return (
                  T.observe(n),
                  () => {
                    T.disconnect();
                  }
                );
              }),
              this.pipe((0, j.B)())
            );
          }
        }
        return (
          (o.ɵfac = function (n) {
            return new (n || o)(
              e.LFG(e.SBq),
              e.LFG(Yt),
              e.LFG(V),
              e.LFG(q),
              e.LFG(pt, 8)
            );
          }),
          (o.ɵprov = e.Yz7({ token: o, factory: o.ɵfac })),
          o
        );
      })();
      var ut = h(2521),
        bt = h(8937),
        Pt = h(2461),
        Z = h(5213),
        ae = h(7122),
        Rt = h(1800),
        St = h(3561),
        ct = h(6141),
        kt = h(7415),
        ot = h(9250),
        At = h(7241),
        Ft = h(1379),
        It = h(4862);
      const ei = /[\\^$.*+?()[\]{}|]/g,
        Ti = new RegExp(ei.source);
      new RegExp(
        `[${[':', '.']
          .map(function lt(o) {
            return o && Ti.test(o) ? o.replace(ei, '\\$&') : o;
          })
          .join('')}]$`
      );
      const oe = (0, bt.JN)({
        icons: { up: 'tuiIconPlus', down: 'tuiIconMinus' },
        appearance: 'textfield',
        hideButtons: !1,
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
        step: 1,
        postfix: '',
      });
      var cn = h(5863),
        ln = h(1538),
        Tt = h(2549),
        G = h(6814);
      function yt(o, r) {
        1 & o && e._UZ(0, 'tui-svg', 2),
          2 & o && e.Q6J('src', r.polymorpheusOutlet);
      }
      function Ue(o, r) {
        1 & o && e.GkF(0);
      }
      const Ye = (0, bt.JN)({
          iconSmall: 'tuiIconChevronDown',
          iconLarge: 'tuiIconChevronDownLarge',
        }),
        p = new Tt.Al(
          (() => {
            class o {
              constructor(n, s, c) {
                (this.dropdown = n),
                  (this.textfieldSize = s),
                  (this.options = c);
              }
              get rotated() {
                return this.dropdown.open;
              }
              get arrowIcon() {
                return (0, cn.R9)(this.textfieldSize.size)
                  ? this.options.iconLarge
                  : this.options.iconSmall;
              }
            }
            return (
              (o.ɵfac = function (n) {
                return new (n || o)(e.Y36(ln.o1), e.Y36(ot.kI), e.Y36(Ye));
              }),
              (o.ɵcmp = e.Xpm({
                type: o,
                selectors: [['tui-arrow']],
                hostVars: 2,
                hostBindings: function (n, s) {
                  2 & n && e.ekj('_rotated', s.rotated);
                },
                decls: 3,
                vars: 4,
                consts: [
                  [3, 'src', 4, 'polymorpheusOutlet'],
                  [4, 'ngIf'],
                  [3, 'src'],
                ],
                template: function (n, s) {
                  1 & n &&
                    (e.YNc(0, yt, 1, 1, 'tui-svg', 0),
                    e.YNc(1, Ue, 1, 0, 'ng-container', 1),
                    e.ALo(2, 'async')),
                    2 & n &&
                      (e.Q6J('polymorpheusOutlet', s.arrowIcon),
                      e.xp6(1),
                      e.Q6J('ngIf', e.lcZ(2, 2, s.dropdown.openChange)));
                },
                dependencies: [kt.PN, Tt.Li, G.O5, G.Ov],
                styles: [
                  '[_nghost-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}._rotated[_nghost-%COMP%]{transform:rotate(180deg)}',
                ],
                changeDetection: 0,
              })),
              o
            );
          })()
        );
      (0, bt.JN)({ interactive: p, disabled: p });
      var hn = h(7328),
        Ni = h(655),
        fn = h(95);
      const gn = ['tuiTh', ''];
      function vn(o, r) {
        if (1 & o) {
          const n = e.EpF();
          e.TgZ(0, 'button', 3),
            e.NdJ('click', function () {
              e.CHM(n);
              const c = e.oxw();
              return e.KtG(c.updateSorterAndDirection());
            }),
            e.GkF(1, 4),
            e._uU(2),
            e.ALo(3, 'async'),
            e._UZ(4, 'tui-svg', 5),
            e.qZA();
        }
        if (2 & o) {
          const n = e.oxw(),
            s = e.MAs(2);
          e.ekj('t-sort_sorted', n.isCurrent),
            e.xp6(1),
            e.Q6J('ngTemplateOutlet', s),
            e.xp6(1),
            e.hij(' ', e.lcZ(3, 5, n.table.change$), ' '),
            e.xp6(2),
            e.Q6J('src', n.icon);
        }
      }
      function mn(o, r) {
        1 & o && e.Hsn(0);
      }
      function _n(o, r) {
        if (1 & o) {
          const n = e.EpF();
          e.TgZ(0, 'div', 6),
            e.NdJ('tuiResized', function (c) {
              e.CHM(n);
              const d = e.oxw();
              return e.KtG(d.onResized(c));
            }),
            e.qZA();
        }
      }
      const Xe = ['*'],
        Tn = ['tuiTd', ''],
        Cn = ['tuiTr', ''];
      function Dn(o, r) {
        if ((1 & o && (e.TgZ(0, 'td', 5), e._uU(1), e.qZA()), 2 & o)) {
          const n = r.ngIf,
            s = e.oxw(2).$implicit;
          e.xp6(1), e.hij(' ', n[s], ' ');
        }
      }
      function bn(o, r) {
        if (
          (1 & o && (e.YNc(0, Dn, 2, 1, 'td', 4), e.ALo(1, 'async')), 2 & o)
        ) {
          const n = e.oxw(3);
          e.Q6J('ngIf', e.lcZ(1, 1, n.item$));
        }
      }
      function On(o, r) {
        if (
          (1 & o &&
            (e.ynx(0, 2),
            e.YNc(1, bn, 2, 3, 'ng-template', null, 3, e.W1O),
            e.BQk()),
          2 & o)
        ) {
          const n = r.$implicit,
            s = e.MAs(2),
            c = e.oxw().ngIf;
          e.Q6J('ngTemplateOutlet', (null == c[n] ? null : c[n].template) || s);
        }
      }
      function Mn(o, r) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, On, 3, 1, 'ng-container', 1), e.BQk()),
          2 & o)
        ) {
          const n = e.oxw();
          e.xp6(1), e.Q6J('ngForOf', n.table.columns);
        }
      }
      const xn = ['tuiTbody', ''];
      function yn(o, r) {
        if ((1 & o && (e.ynx(0), e._uU(1), e.BQk()), 2 & o)) {
          const n = r.polymorpheusOutlet;
          e.xp6(1), e.hij(' ', n, ' ');
        }
      }
      function wn(o, r) {
        if (1 & o) {
          const n = e.EpF();
          e.TgZ(0, 'tr')(1, 'th', 1)(2, 'button', 2),
            e.NdJ('click', function () {
              e.CHM(n);
              const c = e.oxw();
              return e.KtG(c.onClick());
            }),
            e.TgZ(3, 'span', 3),
            e.YNc(4, yn, 2, 1, 'ng-container', 4),
            e.qZA(),
            e._UZ(5, 'tui-svg', 5),
            e.qZA()()();
        }
        if (2 & o) {
          const n = e.oxw();
          e.xp6(1),
            e.Q6J('colSpan', n.table.columns.length),
            e.xp6(3),
            e.Q6J('polymorpheusOutlet', n.heading),
            e.xp6(1),
            e.ekj('t-chevron_rotated', n.open),
            e.Q6J('src', n.arrowOptions.iconLarge);
        }
      }
      function Pn(o, r) {
        1 & o && (e.ynx(0), e.Hsn(1), e.BQk());
      }
      function In(o, r) {
        if ((1 & o && (e.GkF(0, 7), e.ALo(1, 'tuiMapper')), 2 & o)) {
          const n = r.$implicit,
            s = r.index,
            c = e.oxw(2);
          e.Q6J('ngTemplateOutlet', c.row.template)(
            'ngTemplateOutletContext',
            e.Dn7(1, 2, n, c.toContext, s)
          );
        }
      }
      function En(o, r) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, In, 2, 6, 'ng-container', 6), e.BQk()),
          2 & o)
        ) {
          const n = e.oxw();
          e.xp6(1), e.Q6J('ngForOf', n.sorted);
        }
      }
      const Sn = ['tuiThGroup', ''];
      function kn(o, r) {
        if ((1 & o && (e.TgZ(0, 'th', 5), e._uU(1), e.qZA()), 2 & o)) {
          const n = e.oxw(2).$implicit;
          e.xp6(1), e.hij(' ', n.toString(), ' ');
        }
      }
      function An(o, r) {
        if ((1 & o && e.YNc(0, kn, 2, 1, 'th', 4), 2 & o)) {
          const n = e.oxw(3);
          e.Q6J('ngIf', !n.th && !n.heads.length);
        }
      }
      function Fn(o, r) {
        if (
          (1 & o &&
            (e.ynx(0, 2),
            e.YNc(1, An, 1, 1, 'ng-template', null, 3, e.W1O),
            e.BQk()),
          2 & o)
        ) {
          const n = r.$implicit,
            s = e.MAs(2),
            c = e.oxw().ngIf;
          e.Q6J(
            'ngTemplateOutlet',
            (null == c[n.toString()] ? null : c[n.toString()].template) || s
          );
        }
      }
      function hi(o, r) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, Fn, 3, 1, 'ng-container', 1), e.BQk()),
          2 & o)
        ) {
          const n = e.oxw();
          e.xp6(1), e.Q6J('ngForOf', n.table.columns);
        }
      }
      let fi = (() => {
        class o {
          constructor(n) {
            (this.template = n), (this.tuiCell = '');
          }
        }
        return (
          (o.ɵfac = function (n) {
            return new (n || o)(e.Y36(e.Rgc));
          }),
          (o.ɵdir = e.lG2({
            type: o,
            selectors: [['', 'tuiCell', '']],
            inputs: { tuiCell: 'tuiCell' },
          })),
          o
        );
      })();
      const Bi = new e.OlP('[TUI_STUCK]'),
        gi = {
          provide: Bi,
          deps: [e.SBq, mt],
          useFactory: ({ nativeElement: o }, r) => {
            const n = r.pipe((0, M.U)(([{ intersectionRatio: s }]) => s < 1));
            return (o['$.class._stuck'] = n), n;
          },
        },
        Li = [
          { provide: V, useValue: '10000px 10000px 10000px 0px' },
          { provide: q, useValue: [0, 1] },
          {
            provide: ot.x_,
            useFactory: () => {
              const o = new ot.qc();
              return (o.appearance = At.Nm.Table), o;
            },
          },
          { provide: ot.rW, useValue: { labelOutside: !0 } },
          {
            provide: oe,
            deps: [[new e.tp0(), oe]],
            useFactory: (o) =>
              Object.assign(Object.assign({}, o), { hideButtons: !0 }),
          },
          { provide: ot.kI, useExisting: (0, e.Gpc)(() => re) },
          mt,
          Ft.CV,
          gi,
        ],
        je = (0, bt.JN)({
          sticky: !1,
          resizable: !1,
          open: !0,
          size: 'm',
          direction: 1,
          sortIcons: {
            asc: 'tuiIconSortAscending',
            desc: 'tuiIconSortDescending',
            off: 'tuiIconSortOff',
          },
        });
      let re = (() => {
          class o extends Pt.QJ {
            constructor(n, s, c, d, f) {
              super(),
                (this.entries$ = n),
                (this.mode$ = s),
                (this.stuck$ = c),
                (this.options = d),
                (this.cdr = f),
                (this.columns = []),
                (this.size = this.options.size),
                (this.direction = this.options.direction),
                (this.directionChange = new e.vpe()),
                (this.sorterChange = new e.vpe()),
                (this.sorter = () => 0);
            }
            updateSorterAndDirection(n) {
              this.sorter === n
                ? this.updateDirection(1 === this.direction ? -1 : 1)
                : (this.updateSorter(n), this.updateDirection(1));
            }
            ngAfterViewInit() {
              this.cdr.detectChanges();
            }
            updateSorter(n) {
              (this.sorter = n || (() => 0)),
                this.sorterChange.emit(this.sorter),
                this.change$.next();
            }
            updateDirection(n) {
              (this.direction = n),
                this.directionChange.emit(this.direction),
                this.change$.next();
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)(
                e.Y36(mt),
                e.Y36(It.Au),
                e.Y36(Bi),
                e.Y36(je),
                e.Y36(e.sBO)
              );
            }),
            (o.ɵdir = e.lG2({
              type: o,
              selectors: [['table', 'tuiTable', '']],
              hostAttrs: [2, 'border-collapse', 'separate'],
              hostVars: 1,
              hostBindings: function (n, s) {
                1 & n &&
                  e.NdJ('$.data-mode.attr', function () {
                    return s.mode$;
                  })('$.class._stuck', function () {
                    return s.stuck$;
                  }),
                  2 & n && e.uIk('data-size', s.size);
              },
              inputs: {
                columns: 'columns',
                size: 'size',
                direction: 'direction',
                sorter: 'sorter',
              },
              outputs: {
                directionChange: 'directionChange',
                sorterChange: 'sorterChange',
              },
              features: [e._Bn(Li), e.qOj],
            })),
            o
          );
        })(),
        Ge = (() => {
          class o {
            constructor(n) {
              this.template = n;
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)(e.Y36(e.Rgc));
            }),
            (o.ɵdir = e.lG2({
              type: o,
              selectors: [['', 'tuiHead', '']],
              inputs: { tuiHead: 'tuiHead' },
            })),
            o
          );
        })(),
        Rn = (() => {
          class o {
            constructor(n, s, c) {
              (this.doc = n),
                (this.el = s),
                (this.parentRef = c),
                (this.tuiResized = (0, Z.mL)(
                  this.el.nativeElement,
                  'mousedown'
                ).pipe(
                  (0, Z.mp)(),
                  (0, Y.w)(() => {
                    const { width: d, right: f } =
                      this.parentRef.nativeElement.getBoundingClientRect();
                    return (0, Z.mL)(this.doc, 'mousemove').pipe(
                      (0, it.x)(),
                      (0, M.U)(({ clientX: m }) => d + m - f),
                      (0, t.R)((0, Z.mL)(this.doc, 'mouseup'))
                    );
                  })
                ));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)(e.Y36(G.K0), e.Y36(e.SBq), e.Y36(It.zP));
            }),
            (o.ɵdir = e.lG2({
              type: o,
              selectors: [['', 'tuiResized', '']],
              outputs: { tuiResized: 'tuiResized' },
            })),
            o
          );
        })(),
        $i = (() => {
          class o {
            constructor(n) {
              (this.template = n), (this.tuiRowOf = []);
            }
            static ngTemplateContextGuard(n, s) {
              return !0;
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)(e.Y36(e.Rgc));
            }),
            (o.ɵdir = e.lG2({
              type: o,
              selectors: [['ng-template', 'tuiRow', '']],
              inputs: { tuiRowOf: 'tuiRowOf' },
            })),
            o
          );
        })(),
        Ve = (() => {
          class o {
            constructor(n, s, c) {
              (this.options = n),
                (this.head = s),
                (this.table = c),
                (this.sorter = this.head
                  ? (d, f) => (0, bt.A2)(d[this.key], f[this.key])
                  : null),
                (this.resizable = this.options.resizable),
                (this.sticky = this.options.sticky),
                (this.width = null);
            }
            get key() {
              if (!this.head) throw new ae.m2();
              return this.head.tuiHead;
            }
            get isCurrent() {
              return (
                !!this.sorter &&
                !!this.table &&
                this.sorter === this.table.sorter
              );
            }
            get icon() {
              var n;
              return this.isCurrent
                ? 1 ===
                  (null === (n = this.table) || void 0 === n
                    ? void 0
                    : n.direction)
                  ? this.options.sortIcons.desc
                  : this.options.sortIcons.asc
                : this.options.sortIcons.off;
            }
            updateSorterAndDirection() {
              var n;
              null === (n = this.table) ||
                void 0 === n ||
                n.updateSorterAndDirection(
                  this.isCurrentAndAscDirection ? null : this.sorter
                );
            }
            onResized(n) {
              this.width = n;
            }
            get isCurrentAndAscDirection() {
              var n, s;
              return (
                this.sorter ===
                  (null === (n = this.table) || void 0 === n
                    ? void 0
                    : n.sorter) &&
                -1 ===
                  (null === (s = this.table) || void 0 === s
                    ? void 0
                    : s.direction)
              );
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)(
                e.Y36(je),
                e.Y36(Ge, 8),
                e.Y36(
                  (0, e.Gpc)(() => re),
                  8
                )
              );
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['th', 'tuiTh', '']],
              hostVars: 4,
              hostBindings: function (n, s) {
                2 & n &&
                  (e.Udp('width', s.width, 'px'), e.ekj('_sticky', s.sticky));
              },
              inputs: {
                sorter: 'sorter',
                resizable: 'resizable',
                sticky: 'sticky',
              },
              features: [e._Bn([{ provide: It.zP, useExisting: e.SBq }])],
              attrs: gn,
              ngContentSelectors: Xe,
              decls: 4,
              vars: 3,
              consts: [
                [
                  'type',
                  'button',
                  'class',
                  't-sort',
                  3,
                  't-sort_sorted',
                  'click',
                  4,
                  'ngIf',
                  'ngIfElse',
                ],
                ['content', ''],
                ['class', 't-bar', 3, 'tuiResized', 4, 'ngIf'],
                ['type', 'button', 1, 't-sort', 3, 'click'],
                [3, 'ngTemplateOutlet'],
                [1, 't-sort-icon', 3, 'src'],
                [1, 't-bar', 3, 'tuiResized'],
              ],
              template: function (n, s) {
                if (
                  (1 & n &&
                    (e.F$t(),
                    e.YNc(0, vn, 5, 7, 'button', 0),
                    e.YNc(1, mn, 1, 0, 'ng-template', null, 1, e.W1O),
                    e.YNc(3, _n, 1, 0, 'div', 2)),
                  2 & n)
                ) {
                  const c = e.MAs(2);
                  e.Q6J('ngIf', s.sorter && s.table)('ngIfElse', c),
                    e.xp6(3),
                    e.Q6J('ngIf', s.resizable);
                }
              },
              dependencies: [kt.PN, G.O5, G.tP, Rn, G.Ov],
              styles: [
                '[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;font-weight:bold;color:var(--tui-text-02);background:var(--tui-base-01);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-base-04);transform:translate(0)}[_nghost-%COMP%]:not(:first-child){border-left:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-top:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:bold;padding:0 1rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:-webkit-sticky;position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}table[data-mode="onDark"][_nghost-%COMP%]:after, table[data-mode="onDark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table[data-mode="onDark"]   thead[tuiThead]._stuck[_nghost-%COMP%], table[data-mode="onDark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}table[data-mode="onDark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, table[data-mode="onDark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:bold;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-selection)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;width:3px;justify-self:flex-end;border-left:2px solid transparent;background:var(--tui-support-12);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}',
              ],
              changeDetection: 0,
            })),
            o
          );
        })(),
        Ze = (() => {
          class o {
            constructor(n) {
              this.table = n;
            }
            transform(n) {
              return this.sort(n, this.table.sorter, this.table.direction);
            }
            sort(n, s, c) {
              return [...n].sort((d, f) => c * s(d, f));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)(e.Y36(re, 16));
            }),
            (o.ɵpipe = e.Yjl({ name: 'tuiTableSort', type: o, pure: !1 })),
            (0, Ni.gn)([Rt.UM], o.prototype, 'sort', null),
            o
          );
        })();
      const Je = [
        St.a3,
        Ze,
        {
          provide: re,
          deps: [[new e.tp0(), re], e.sBO, St.a3],
          useFactory: Ft.wD,
        },
      ];
      let Se = (() => {
          class o {}
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [
                ['th', 'tuiTd', ''],
                ['td', 'tuiTd', ''],
              ],
              contentQueries: function (n, s, c) {
                if ((1 & n && e.Suo(c, fn.a5, 5), 2 & n)) {
                  let d;
                  e.iGM((d = e.CRH())) && (s.control = d.first);
                }
              },
              hostVars: 2,
              hostBindings: function (n, s) {
                2 & n && e.ekj('_editable', s.control);
              },
              attrs: Tn,
              ngContentSelectors: Xe,
              decls: 1,
              vars: 0,
              template: function (n, s) {
                1 & n && (e.F$t(), e.Hsn(0));
              },
              styles: [
                '[_nghost-%COMP%]{position:relative;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;padding:0 .75rem;background:var(--tui-base-01);border:1px solid var(--tui-base-04);border-top:none;box-sizing:border-box;transform:translate(0)}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-left:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0;vertical-align:top}th[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}table[data-mode="onDark"][_nghost-%COMP%]:after, table[data-mode="onDark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l);padding-left:1rem;padding-right:1rem}table[data-size="l"]._editable[_nghost-%COMP%], table[data-size="l"]   ._editable[_nghost-%COMP%]{padding:0}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}',
              ],
              changeDetection: 0,
            })),
            o
          );
        })(),
        me = (() => {
          class o {
            constructor(n, s) {
              (this.table = n),
                (this.body = s),
                (this.cells = ct.Mm),
                (this.contentReady$ = new hn.t(1)),
                (this.cells$ = this.contentReady$.pipe(
                  (0, Y.w)(() => (0, Z.ll)(this.cells)),
                  (0, M.U)((c) =>
                    c.reduce(
                      (d, f) =>
                        Object.assign(Object.assign({}, d), { [f.tuiCell]: f }),
                      {}
                    )
                  )
                )),
                (this.item$ = this.contentReady$.pipe(
                  (0, Y.w)(() => (0, Z.ll)(this.body.rows)),
                  (0, M.U)(
                    (c) => this.body.sorted[c.findIndex((d) => d === this)]
                  )
                ));
            }
            ngAfterContentInit() {
              return (0, Ni.mG)(this, void 0, void 0, function* () {
                yield Promise.resolve(), this.contentReady$.next(!0);
              });
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)(
                e.Y36((0, e.Gpc)(() => re)),
                e.Y36((0, e.Gpc)(() => vi))
              );
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['tr', 'tuiTr', '']],
              contentQueries: function (n, s, c) {
                if ((1 & n && e.Suo(c, fi, 4), 2 & n)) {
                  let d;
                  e.iGM((d = e.CRH())) && (s.cells = d);
                }
              },
              features: [e._Bn([Je])],
              attrs: Cn,
              decls: 2,
              vars: 3,
              consts: [
                [4, 'ngIf'],
                [3, 'ngTemplateOutlet', 4, 'ngFor', 'ngForOf'],
                [3, 'ngTemplateOutlet'],
                ['plain', ''],
                ['tuiTd', '', 4, 'ngIf'],
                ['tuiTd', ''],
              ],
              template: function (n, s) {
                1 & n &&
                  (e.YNc(0, Mn, 2, 1, 'ng-container', 0), e.ALo(1, 'async')),
                  2 & n && e.Q6J('ngIf', e.lcZ(1, 1, s.cells$));
              },
              dependencies: [Se, G.O5, G.sg, G.tP, G.Ov],
              encapsulation: 2,
              changeDetection: 0,
            })),
            o
          );
        })(),
        vi = (() => {
          class o {
            constructor(n, s, c, d) {
              (this.pipe = n),
                (this.options = s),
                (this.arrowOptions = c),
                (this.table = d),
                (this.data = []),
                (this.open = this.options.open),
                (this.openChange = new e.vpe()),
                (this.rows = ct.Mm),
                (this.toContext = (f, m) => ({ $implicit: f, index: m }));
            }
            get sorted() {
              return this.pipe.transform(this.data);
            }
            onClick() {
              (this.open = !this.open), this.openChange.emit(this.open);
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)(
                e.Y36(Ze),
                e.Y36(je),
                e.Y36(Ye),
                e.Y36((0, e.Gpc)(() => re))
              );
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['tbody', 'tuiTbody', '']],
              contentQueries: function (n, s, c) {
                if ((1 & n && (e.Suo(c, $i, 5), e.Suo(c, me, 4)), 2 & n)) {
                  let d;
                  e.iGM((d = e.CRH())) && (s.row = d.first),
                    e.iGM((d = e.CRH())) && (s.rows = d);
                }
              },
              inputs: { data: 'data', heading: 'heading', open: 'open' },
              outputs: { openChange: 'openChange' },
              features: [e._Bn(Je)],
              attrs: xn,
              ngContentSelectors: Xe,
              decls: 3,
              vars: 3,
              consts: [
                [4, 'ngIf'],
                [1, 't-heading', 3, 'colSpan'],
                ['type', 'button', 1, 't-expand', 3, 'click'],
                [1, 't-name'],
                [4, 'polymorpheusOutlet'],
                [1, 't-chevron', 3, 'src'],
                [
                  3,
                  'ngTemplateOutlet',
                  'ngTemplateOutletContext',
                  4,
                  'ngFor',
                  'ngForOf',
                ],
                [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
              ],
              template: function (n, s) {
                1 & n &&
                  (e.F$t(),
                  e.YNc(0, wn, 6, 5, 'tr', 0),
                  e.YNc(1, Pn, 2, 0, 'ng-container', 0),
                  e.YNc(2, En, 2, 1, 'ng-container', 0)),
                  2 & n &&
                    (e.Q6J('ngIf', s.heading),
                    e.xp6(1),
                    e.Q6J('ngIf', s.open),
                    e.xp6(1),
                    e.Q6J('ngIf', s.open && s.row));
              },
              dependencies: [kt.PN, G.O5, Tt.Li, G.sg, G.tP, ut.c],
              styles: [
                '[_nghost-%COMP%]{border-color:var(--tui-base-04)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;display:flex;width:100%;height:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:bold;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-selection)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:"";position:-webkit-sticky;position:sticky;height:100%;border-left:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-base-02);border-bottom:1px solid var(--tui-base-04);border-color:inherit}.t-heading[_ngcontent-%COMP%]:hover{background:var(--tui-base-03)}table[data-size="l"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;left:.75rem;display:inline-block}table[data-size="l"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:-webkit-sticky;position:sticky;right:.75rem;margin:0 .6875rem 0 auto}.t-chevron_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}',
              ],
              changeDetection: 0,
            })),
            o
          );
        })(),
        mi = (() => {
          class o {
            constructor(n) {
              (this.table = n), (this.heads = ct.Mm), (this.heads$ = null);
            }
            ngAfterContentInit() {
              this.heads$ = this.heads.changes.pipe(
                (0, et.O)(null),
                (0, M.U)(() =>
                  this.heads.reduce(
                    (n, s) =>
                      Object.assign(Object.assign({}, n), { [s.tuiHead]: s }),
                    {}
                  )
                )
              );
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)(e.Y36((0, e.Gpc)(() => re)));
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['tr', 'tuiThGroup', '']],
              contentQueries: function (n, s, c) {
                if ((1 & n && (e.Suo(c, Ve, 5), e.Suo(c, Ge, 4)), 2 & n)) {
                  let d;
                  e.iGM((d = e.CRH())) && (s.th = d.first),
                    e.iGM((d = e.CRH())) && (s.heads = d);
                }
              },
              features: [e._Bn([Je])],
              attrs: Sn,
              ngContentSelectors: Xe,
              decls: 3,
              vars: 3,
              consts: [
                [4, 'ngIf'],
                [3, 'ngTemplateOutlet', 4, 'ngFor', 'ngForOf'],
                [3, 'ngTemplateOutlet'],
                ['plain', ''],
                ['tuiTh', '', 4, 'ngIf'],
                ['tuiTh', ''],
              ],
              template: function (n, s) {
                1 & n &&
                  (e.F$t(),
                  e.Hsn(0),
                  e.YNc(1, hi, 2, 1, 'ng-container', 0),
                  e.ALo(2, 'async')),
                  2 & n && (e.xp6(1), e.Q6J('ngIf', e.lcZ(2, 1, s.heads$)));
              },
              dependencies: [Ve, G.O5, G.sg, G.tP, G.Ov],
              encapsulation: 2,
              changeDetection: 0,
            })),
            o
          );
        })(),
        Ui = (() => {
          class o {}
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵmod = e.oAB({ type: o })),
            (o.ɵinj = e.cJS({ imports: [[G.ez, Tt.wq, ut.I, kt.EI]] })),
            o
          );
        })();
    },
    7444: (se, vt, h) => {
      h.d(vt, { VE: () => A, co: () => V, gs: () => L });
      var e = h(5879),
        M = h(6141),
        Y = h(5213),
        it = h(7995),
        t = h(5592),
        et = h(3019),
        B = h(7398),
        j = h(2181),
        dt = h(3997);
      function pt({ currentTarget: E, relatedTarget: q }) {
        return !(0, it.ve)(q) || !(0, it.ve)(E) || !E.contains(q);
      }
      let L = (() => {
          class E extends t.y {
            constructor(at, xt) {
              super((Et) => this.stream$.subscribe(Et)),
                (this.el = at),
                (this.zone = xt),
                (this.stream$ = (0, et.T)(
                  (0, Y.mL)(this.el.nativeElement, 'mouseenter').pipe(
                    (0, B.U)(M.Ye)
                  ),
                  (0, Y.mL)(this.el.nativeElement, 'mouseleave').pipe(
                    (0, B.U)(M.Iy)
                  ),
                  (0, Y.mL)(this.el.nativeElement, 'mouseout').pipe(
                    (0, j.h)(pt),
                    (0, B.U)(M.Iy)
                  )
                ).pipe((0, dt.x)(), (0, Y.Yr)(this.zone)));
            }
          }
          return (
            (E.ɵfac = function (at) {
              return new (at || E)(e.LFG(e.SBq), e.LFG(e.R0b));
            }),
            (E.ɵprov = e.Yz7({ token: E, factory: E.ɵfac })),
            E
          );
        })(),
        V = (() => {
          class E {
            constructor(at) {
              this.tuiHoveredChange = at;
            }
          }
          return (
            (E.ɵfac = function (at) {
              return new (at || E)(e.Y36(L));
            }),
            (E.ɵdir = e.lG2({
              type: E,
              selectors: [['', 'tuiHoveredChange', '']],
              outputs: { tuiHoveredChange: 'tuiHoveredChange' },
              features: [e._Bn([L])],
            })),
            E
          );
        })(),
        A = (() => {
          class E {}
          return (
            (E.ɵfac = function (at) {
              return new (at || E)();
            }),
            (E.ɵmod = e.oAB({ type: E })),
            (E.ɵinj = e.cJS({})),
            E
          );
        })();
    },
    1538: (se, vt, h) => {
      h.d(vt, { o1: () => Nt, jh: () => Jt });
      var e = h(5879),
        M = h(9315),
        Y = h(5144),
        it = h(4423),
        t = h(5213),
        et = h(3561),
        B = h(8645),
        j = h(7398);
      let dt = (() => {
          class v {
            constructor(D, I) {
              this.enabled$ = new B.x();
              const F = I.pipe(
                (0, j.U)(
                  (z) =>
                    !!z && (!D || !z.length || z.every((_t) => !D.contains(_t)))
                )
              );
              this.tuiObscured = this.enabled$.pipe((0, t.Xd)(() => F));
            }
            set tuiObscuredEnabled(D) {
              this.enabled$.next(D);
            }
          }
          return (
            (v.ɵfac = function (D) {
              return new (D || v)(e.Y36(it.e, 8), e.Y36(et.AQ, 2));
            }),
            (v.ɵdir = e.lG2({
              type: v,
              selectors: [['', 'tuiObscured', '']],
              inputs: { tuiObscuredEnabled: 'tuiObscuredEnabled' },
              outputs: { tuiObscured: 'tuiObscured' },
              features: [e._Bn([et.AQ, et.b0, et.a3])],
            })),
            v
          );
        })(),
        pt = (() => {
          class v {}
          return (
            (v.ɵfac = function (D) {
              return new (D || v)();
            }),
            (v.ɵmod = e.oAB({ type: v })),
            (v.ɵinj = e.cJS({})),
            v
          );
        })();
      var L = h(756),
        V = h(7995),
        A = h(342),
        E = h(432),
        q = h(2181),
        at = h(9773),
        xt = h(836),
        Et = h(3997),
        Kt = h(5619),
        Ut = h(3019),
        U = h(6232),
        Yt = h(655),
        mt = h(5863),
        ut = h(9661),
        bt = h(2549),
        Pt = h(6814);
      const Z = ['wrapper'];
      function ae(v, x) {
        if ((1 & v && (e.ynx(0), e._uU(1), e.BQk()), 2 & v)) {
          const D = x.polymorpheusOutlet;
          e.xp6(1), e.hij(' ', D, ' ');
        }
      }
      const Rt = function (v, x) {
        return { $implicit: v, close: x };
      };
      function St(v, x) {
        if (1 & v) {
          const D = e.EpF();
          e.TgZ(0, 'div', 5, 6),
            e.NdJ('keydown', function (F) {
              e.CHM(D);
              const z = e.oxw(2);
              return e.KtG(z.onKeydown(F));
            }),
            e.YNc(2, ae, 2, 1, 'ng-container', 7),
            e.qZA(),
            e._UZ(3, 'div');
        }
        if (2 & v) {
          e.oxw();
          const D = e.MAs(1),
            I = e.oxw();
          e.xp6(2),
            e.Q6J('polymorpheusOutlet', I.content)(
              'polymorpheusOutletContext',
              e.WLB(2, Rt, D, I.close)
            );
        }
      }
      function ct(v, x) {
        if (1 & v) {
          const D = e.EpF();
          e.TgZ(0, 'div', 1, 2),
            e.NdJ('tuiActiveZoneChange', function (F) {
              e.CHM(D);
              const z = e.oxw();
              return e.KtG(z.onActiveZone(F));
            })('tuiObscured', function (F) {
              e.CHM(D);
              const z = e.oxw();
              return e.KtG(z.onHostObscured(F));
            }),
            e.Hsn(2),
            e.YNc(3, St, 4, 5, 'ng-template', 3, 4, e.W1O),
            e.qZA();
        }
        if (2 & v) {
          const D = x.tuiLet,
            I = e.MAs(4),
            F = e.oxw();
          e.Q6J('tuiDropdown', I)('tuiDropdownManual', D && F.canOpen)(
            'tuiDropdownSided',
            F.sided
          )('tuiObscuredEnabled', D),
            e.xp6(3),
            e.Q6J('polymorpheus', F.context);
        }
      }
      const kt = ['*'];
      let ot = (() => {
        class v extends M.uG {
          constructor() {
            super(...arguments), (this.type = 'dummy');
          }
          getPosition() {
            return [0, 0];
          }
        }
        return (
          (v.ɵfac = (function () {
            let x;
            return function (I) {
              return (x || (x = e.n5z(v)))(I || v);
            };
          })()),
          (v.ɵdir = e.lG2({
            type: v,
            selectors: [['', 'tuiAccessorProxy', '']],
            features: [
              e._Bn([
                {
                  provide: M.uG,
                  multi: !0,
                  deps: [[new e.FiY(), new e.tp0(), v], v],
                  useFactory: (x, D) => x || D,
                },
              ]),
              e.qOj,
            ],
          })),
          v
        );
      })();
      const At = new e.OlP('[TUI_HOSTED_DROPDOWN_COMPONENT]');
      let Ft = (() => {
          class v {
            constructor(D, I, F, z) {
              z?.tuiDropdownOpenChange
                .pipe(
                  (0, q.h)((_t) => _t && z.dropdown === F && !I.focused),
                  (0, at.R)(D)
                )
                .subscribe(() => {
                  var _t;
                  null === (_t = I.nativeFocusableElement) ||
                    void 0 === _t ||
                    _t.focus(),
                    I.updateOpen(!0);
                });
            }
          }
          return (
            (v.ɵfac = function (D) {
              return new (D || v)(
                e.Y36(et.a3, 2),
                e.Y36(At),
                e.Y36(E.td, 2),
                e.Y36(E.oH, 8)
              );
            }),
            (v.ɵdir = e.lG2({
              type: v,
              selectors: [['', 'tuiDropdownOpenMonitor', '']],
              features: [e._Bn([et.a3])],
            })),
            v
          );
        })(),
        It = (() => {
          class v {}
          return (
            (v.ɵfac = function (D) {
              return new (D || v)();
            }),
            (v.ɵdir = e.lG2({
              type: v,
              selectors: [['', 'tuiHostedDropdownHost', '']],
            })),
            v
          );
        })();
      function fe(v) {
        var x;
        return (
          'key' in v &&
          'escape' === v.key.toLowerCase() &&
          this.canOpen &&
          this.open &&
          !(
            null !== (x = this.dropdown) &&
            void 0 !== x &&
            x.nextElementSibling
          )
        );
      }
      let Nt = (() => {
          class v {
            constructor(D, I) {
              (this.hover$ = D),
                (this.el = I),
                (this.openChange = new Kt.X(!1)),
                (this.sided = !1),
                (this.canOpen = !0),
                (this.open$ = (0, Ut.T)(
                  this.openChange,
                  this.hover$ || U.E
                ).pipe((0, xt.T)(1), (0, Et.x)())),
                (this.focusedChange = new e.vpe()),
                (this.close = () => this.updateOpen(!1));
            }
            set open(D) {
              this.openChange.next(D);
            }
            get open() {
              return this.openChange.value;
            }
            get host() {
              var D;
              return (
                (null === (D = this.dropdownHost) || void 0 === D
                  ? void 0
                  : D.nativeElement) || this.el.nativeElement
              );
            }
            get computedHost() {
              var D;
              return (
                (null === (D = this.dropdownHost) || void 0 === D
                  ? void 0
                  : D.nativeElement) ||
                this.nativeFocusableElement ||
                this.el.nativeElement
              );
            }
            get dropdown() {
              var D, I;
              return null ===
                (I =
                  null === (D = this.dropdownDirective) || void 0 === D
                    ? void 0
                    : D.dropdownBoxRef) || void 0 === I
                ? void 0
                : I.location.nativeElement;
            }
            get nativeFocusableElement() {
              return (0, L.dT)(this.host)
                ? this.host
                : (0, L.BW)({
                    initial: this.host,
                    root: this.el.nativeElement,
                  });
            }
            get focused() {
              return (
                (0, L.zb)(this.host) ||
                (this.open &&
                  !!this.wrapper &&
                  (0, L.zb)(this.wrapper.nativeElement))
              );
            }
            onFocusIn(D) {
              this.computedHost.contains(D) || this.updateOpen(!1);
            }
            onClick(D) {
              var I;
              !this.hostEditable &&
                this.computedHost.contains(D) &&
                (null === (I = this.hover$) || void 0 === I || !I.hovered) &&
                this.updateOpen(!this.open);
            }
            onKeyDownEsc(D) {
              D.preventDefault(), this.closeDropdown();
            }
            onArrow(D, I) {
              this.focusDropdown(D, I);
            }
            onKeydown({ key: D, target: I, defaultPrevented: F }) {
              !F &&
                (0, mt.kL)(D) &&
                this.hostEditable &&
                (0, V.dW)(I) &&
                !(0, V.Hn)(I) &&
                this.focusHost();
            }
            onActiveZone(D) {
              this.updateFocused(D), D || this.updateOpen(!1);
            }
            onHostObscured(D) {
              D && this.closeDropdown();
            }
            updateOpen(D) {
              (!D || this.canOpen) && (this.open = D);
            }
            get hostEditable() {
              return (0, V.Hn)(this.computedHost);
            }
            focusDropdown(D, I) {
              const F = this.nativeFocusableElement;
              if (
                !(
                  F &&
                  (0, V.dW)(F) &&
                  (0, V.ve)(D.target) &&
                  F.contains(D.target)
                )
              )
                return;
              if (
                !(
                  this.wrapper &&
                  this.open &&
                  this.dropdown &&
                  (0, V.dW)(this.wrapper.nativeElement.nextElementSibling)
                )
              )
                return (
                  this.updateOpen(!0), void ((0, V.Hn)(F) || D.preventDefault())
                );
              const _t = (0, L.BW)({
                initial: I
                  ? this.wrapper.nativeElement
                  : this.wrapper.nativeElement.nextElementSibling,
                root: this.wrapper.nativeElement,
                previous: !I,
              });
              _t && (_t.focus(), D.preventDefault());
            }
            closeDropdown() {
              this.focused && this.focusHost(), this.updateOpen(!1);
            }
            focusHost() {
              const D = this.nativeFocusableElement;
              D && D.focus({ preventScroll: !0 });
            }
            updateFocused(D) {
              this.focusedChange.emit(D);
            }
          }
          return (
            (v.ɵfac = function (D) {
              return new (D || v)(e.Y36(E.E$, 10), e.Y36(e.SBq));
            }),
            (v.ɵcmp = e.Xpm({
              type: v,
              selectors: [['tui-hosted-dropdown']],
              contentQueries: function (D, I, F) {
                if ((1 & D && e.Suo(F, It, 5, e.SBq), 2 & D)) {
                  let z;
                  e.iGM((z = e.CRH())) && (I.dropdownHost = z.first);
                }
              },
              viewQuery: function (D, I) {
                if (
                  (1 & D && (e.Gf(Z, 5, e.SBq), e.Gf(E.td, 5), e.Gf(it.e, 5)),
                  2 & D)
                ) {
                  let F;
                  e.iGM((F = e.CRH())) && (I.wrapper = F.first),
                    e.iGM((F = e.CRH())) && (I.dropdownDirective = F.first),
                    e.iGM((F = e.CRH())) && (I.activeZone = F.first);
                }
              },
              hostVars: 2,
              hostBindings: function (D, I) {
                1 & D &&
                  e.NdJ('focusin', function (z) {
                    return I.onFocusIn(z.target);
                  })('click', function (z) {
                    return I.onClick(z.target);
                  })(
                    'keydown.silent.capture',
                    function (z) {
                      return I.onKeyDownEsc(z);
                    },
                    !1,
                    e.evT
                  )('keydown.arrowDown', function (z) {
                    return I.onArrow(z, !0);
                  })('keydown.arrowUp', function (z) {
                    return I.onArrow(z, !1);
                  }),
                  2 & D && e.ekj('_hosted_dropdown_focused', I.focused);
              },
              inputs: {
                content: 'content',
                sided: 'sided',
                canOpen: 'canOpen',
                open: 'open',
              },
              outputs: { open$: 'openChange', focusedChange: 'focusedChange' },
              features: [
                e._Bn([
                  (0, A.FT)(v),
                  {
                    provide: ot,
                    deps: [[new e.FiY(), new e.PiD(), M.uG]],
                    useFactory: (x) => x?.[0],
                  },
                  { provide: At, useExisting: v },
                ]),
              ],
              ngContentSelectors: kt,
              decls: 2,
              vars: 3,
              consts: [
                [
                  'tuiAccessorProxy',
                  '',
                  'tuiDropdownOpenMonitor',
                  '',
                  'class',
                  't-wrapper',
                  3,
                  'tuiDropdown',
                  'tuiDropdownManual',
                  'tuiDropdownSided',
                  'tuiObscuredEnabled',
                  'tuiActiveZoneChange',
                  'tuiObscured',
                  4,
                  'tuiLet',
                ],
                [
                  'tuiAccessorProxy',
                  '',
                  'tuiDropdownOpenMonitor',
                  '',
                  1,
                  't-wrapper',
                  3,
                  'tuiDropdown',
                  'tuiDropdownManual',
                  'tuiDropdownSided',
                  'tuiObscuredEnabled',
                  'tuiActiveZoneChange',
                  'tuiObscured',
                ],
                ['activeZone', 'tuiActiveZone'],
                [3, 'polymorpheus'],
                ['dropdown', 'polymorpheus'],
                [1, 't-dropdown', 3, 'keydown'],
                ['wrapper', ''],
                [4, 'polymorpheusOutlet', 'polymorpheusOutletContext'],
              ],
              template: function (D, I) {
                if (
                  (1 & D &&
                    (e.F$t(), e.YNc(0, ct, 5, 5, 'div', 0), e.ALo(1, 'async')),
                  2 & D)
                ) {
                  let F;
                  e.Q6J(
                    'tuiLet',
                    null !== (F = e.lcZ(1, 1, I.open$)) && void 0 !== F
                      ? F
                      : I.openChange.value
                  );
                }
              },
              dependencies: [
                Y.Ls,
                ot,
                Ft,
                E.td,
                E.VC,
                E.Tp,
                E.Cw,
                it.e,
                dt,
                bt.GL,
                bt.Li,
                Pt.Ov,
              ],
              styles: [
                '[_nghost-%COMP%]{display:inline-flex}.t-wrapper[_ngcontent-%COMP%]{border-radius:inherit;height:inherit;flex:1 1 auto;width:100%}.t-dropdown[_ngcontent-%COMP%]{height:100%}',
              ],
              changeDetection: 0,
            })),
            (0, Yt.gn)([(0, ut.uX)(fe)], v.prototype, 'onKeyDownEsc', null),
            v
          );
        })(),
        Jt = (() => {
          class v {}
          return (
            (v.ɵfac = function (D) {
              return new (D || v)();
            }),
            (v.ɵmod = e.oAB({ type: v })),
            (v.ɵinj = e.cJS({
              imports: [[Pt.ez, bt.wq, Y.WD, pt, it.A, E.dp]],
            })),
            v
          );
        })();
    },
    432: (se, vt, h) => {
      h.d(vt, {
        td: () => Xt,
        VC: () => be,
        E$: () => xe,
        Tp: () => Ae,
        dp: () => Oe,
        oH: () => te,
        Cw: () => Fe,
        fx: () => ke,
      });
      var e = h(5879),
        M = h(229),
        Y = h(4423),
        it = h(5157),
        t = h(7444),
        et = h(8937),
        B = h(3561),
        j = h(8124),
        dt = h(1800),
        pt = h(8569),
        L = h(756),
        V = h(2461),
        A = h(6141),
        E = h(9315),
        q = h(7904),
        at = h(1379),
        xt = h(8542),
        Et = h(4862),
        Kt = h(8753),
        Ut = h(9773),
        U = h(4664),
        Yt = h(5177),
        mt = h(9397),
        ut = h(3020),
        bt = h(7398),
        Pt = h(655),
        Z = h(2103),
        ae = h(5863),
        Rt = h(2549),
        St = h(8645),
        ct = h(3019),
        kt = h(2096),
        ot = h(5619),
        At = h(9999),
        Ft = h(2310),
        It = h(7995),
        fe = h(342),
        Nt = h(6814);
      function Jt(b, N) {
        1 & b && e._UZ(0, 'tui-scroll-controls', 2);
      }
      const v = ['*'];
      let F = (() => {
          class b {
            constructor(C, w, P, k) {
              (this.cssRef = C),
                (this.el = w),
                (this.userAgent = P),
                (this.isIos = k),
                (this.delegated = !1),
                (this.isLegacy =
                  !this.cssRef.supports('position', 'sticky') ||
                  ((0, Ft.oK)(this.userAgent) &&
                    !this.cssRef.supports('scrollbar-width', 'none'))),
                (this.hidden = !1),
                (this.browserScrollRef = new e.SBq(this.el.nativeElement));
            }
            get showScrollbars() {
              return (
                !this.hidden &&
                !this.isIos &&
                (!this.isLegacy || this.delegated)
              );
            }
            get showNative() {
              return this.isLegacy && !this.hidden && !this.delegated;
            }
            onScrollable(C) {
              (this.delegated = !0), (this.browserScrollRef.nativeElement = C);
            }
            scrollIntoView(C) {
              var w;
              if (this.delegated) return;
              const { nativeElement: P } = this.browserScrollRef,
                { offsetTop: k, offsetLeft: X } = (0, It.YX)(P, C),
                { clientHeight: K, clientWidth: W } = P,
                { offsetHeight: ht, offsetWidth: rt } = C;
              null === (w = P.scrollTo) ||
                void 0 === w ||
                w.call(P, X + rt / 2 - W / 2, k + ht / 2 - K / 2);
            }
          }
          return (
            (b.ɵfac = function (C) {
              return new (C || b)(
                e.Y36(M.ux),
                e.Y36(e.SBq),
                e.Y36(M.yZ),
                e.Y36(fe.FA)
              );
            }),
            (b.ɵcmp = e.Xpm({
              type: b,
              selectors: [['tui-scrollbar']],
              hostVars: 2,
              hostBindings: function (C, w) {
                1 & C &&
                  e.NdJ('tui-scrollable.stop', function (k) {
                    return w.onScrollable(k.detail);
                  })('tui-scroll-into-view.stop', function (k) {
                    return w.scrollIntoView(k.detail);
                  }),
                  2 & C && e.ekj('_legacy', w.showNative);
              },
              inputs: { hidden: 'hidden' },
              features: [
                e._Bn([
                  {
                    provide: fe.$_,
                    deps: [b],
                    useFactory: ({ browserScrollRef: N }) => N,
                  },
                ]),
              ],
              ngContentSelectors: v,
              decls: 3,
              vars: 1,
              consts: [
                ['class', 't-bars', 4, 'ngIf'],
                [1, 't-content'],
                [1, 't-bars'],
              ],
              template: function (C, w) {
                1 & C &&
                  (e.F$t(),
                  e.YNc(0, Jt, 1, 0, 'tui-scroll-controls', 0),
                  e.TgZ(1, 'div', 1),
                  e.Hsn(2),
                  e.qZA()),
                  2 & C && e.Q6J('ngIf', w.showScrollbars);
              },
              dependencies: [At.tZ, Nt.O5],
              styles: [
                '[_nghost-%COMP%]{position:relative;display:flex;isolation:isolate;overflow:auto}[_nghost-%COMP%]:not(._legacy){scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%]:not(._legacy)::-webkit-scrollbar, [_nghost-%COMP%]:not(._legacy)::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}._legacy[_nghost-%COMP%]{overflow:overlay}@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm){._legacy[_nghost-%COMP%]::-webkit-scrollbar, ._legacy[_nghost-%COMP%]::-webkit-scrollbar-thumb{width:1rem;height:1rem;border-radius:6.25rem;background-clip:padding-box;border:.375rem solid transparent}._legacy[_nghost-%COMP%]::-webkit-scrollbar{background-color:transparent}._legacy[_nghost-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--tui-clear-hover)}._legacy[_nghost-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--tui-clear-active)}._legacy[_nghost-%COMP%]::-webkit-scrollbar-thumb:active{background-color:var(--tui-text-03)}}.t-content[_ngcontent-%COMP%]{isolation:isolate;flex:1;flex-basis:auto;width:100%;height:-webkit-max-content;height:max-content}.t-bars[_ngcontent-%COMP%]{color:var(--tui-text-01)}',
              ],
              changeDetection: 0,
            })),
            b
          );
        })(),
        z = (() => {
          class b {}
          return (
            (b.ɵfac = function (C) {
              return new (C || b)();
            }),
            (b.ɵmod = e.oAB({ type: b })),
            (b.ɵinj = e.cJS({ imports: [[Nt.ez, At.eI]] })),
            b
          );
        })();
      function _t(b, N) {
        if ((1 & b && (e.TgZ(0, 'div', 4), e._uU(1), e.qZA()), 2 & b)) {
          const C = N.polymorpheusOutlet;
          e.xp6(1), e.hij(' ', C, ' ');
        }
      }
      const _e = function (b) {
          return { $implicit: b };
        },
        qt = (0, et.N1)(() => Bt);
      let te = (() => {
          class b {
            constructor() {
              this.tuiDropdownOpenChange = new e.vpe();
            }
            set tuiDropdownOpen(C) {
              var w;
              null === (w = this.dropdown) || void 0 === w || w.toggle(C);
            }
          }
          return (
            (b.ɵfac = function (C) {
              return new (C || b)();
            }),
            (b.ɵdir = e.lG2({
              type: b,
              selectors: [
                ['', 'tuiDropdownOpen', ''],
                ['', 'tuiDropdownOpenChange', ''],
              ],
              inputs: { tuiDropdownOpen: 'tuiDropdownOpen' },
              outputs: { tuiDropdownOpenChange: 'tuiDropdownOpenChange' },
            })),
            b
          );
        })(),
        Xt = (() => {
          class b {
            constructor(C, w, P, k, X, K) {
              (this.el = w),
                (this.dropdown = P),
                (this.injector = k),
                (this.dropdownService = X),
                (this.open = K),
                (this.refresh$ = new St.x()),
                (this.dropdownBoxRef = null),
                (this.type = 'dropdown'),
                (this.component = new Rt.Al(this.dropdown, this.injector)),
                this.open && !this.open.dropdown
                  ? (this.open.dropdown = this)
                  : (this.open = null),
                this.refresh$.pipe((0, Kt.p)(0), (0, Ut.R)(C)).subscribe(() => {
                  var W, ht;
                  null === (W = this.dropdownBoxRef) ||
                    void 0 === W ||
                    W.changeDetectorRef.detectChanges(),
                    null === (ht = this.dropdownBoxRef) ||
                      void 0 === ht ||
                      ht.changeDetectorRef.markForCheck();
                });
            }
            get position() {
              return (0, Z.qK)(this.el.nativeElement) ? 'fixed' : 'absolute';
            }
            ngAfterViewChecked() {
              this.refresh$.next();
            }
            ngOnChanges() {
              this.content || this.toggle(!1);
            }
            ngOnDestroy() {
              this.toggle(!1), this.open && (this.open.dropdown = void 0);
            }
            getClientRect() {
              return this.el.nativeElement.getBoundingClientRect();
            }
            toggle(C) {
              var w, P;
              C && this.content && !this.dropdownBoxRef
                ? ((this.dropdownBoxRef = this.dropdownService.add(
                    this.component
                  )),
                  null === (w = this.open) ||
                    void 0 === w ||
                    w.tuiDropdownOpenChange.emit(!0))
                : !C &&
                  this.dropdownBoxRef &&
                  (this.dropdownService.remove(this.dropdownBoxRef),
                  (this.dropdownBoxRef = null),
                  null === (P = this.open) ||
                    void 0 === P ||
                    P.tuiDropdownOpenChange.emit(!1));
            }
          }
          return (
            (b.ɵfac = function (C) {
              return new (C || b)(
                e.Y36(B.a3, 2),
                e.Y36(e.SBq),
                e.Y36(qt),
                e.Y36(e.gxx),
                e.Y36(j.ae),
                e.Y36(te, 8)
              );
            }),
            (b.ɵdir = e.lG2({
              type: b,
              selectors: [['', 'tuiDropdown', '', 5, 'ng-container']],
              inputs: { content: ['tuiDropdown', 'content'] },
              exportAs: ['tuiDropdown'],
              features: [e._Bn([B.a3, (0, E.Ic)(b), (0, E.Fe)(b)]), e.TTD],
            })),
            (0, Pt.gn)([dt.UM], b.prototype, 'position', null),
            b
          );
        })();
      const Ht = (0, et.JN)({ showDelay: 200, hideDelay: 500 });
      let xe = (() => {
        class b extends E.kk {
          constructor(C, w, P) {
            super((k) => this.stream$.subscribe(k)),
              (this.hovered$ = C),
              (this.options = w),
              (this.parentHover = P),
              (this.toggle$ = new St.x()),
              (this.stream$ = (0, ct.T)(this.toggle$, this.hovered$).pipe(
                (0, U.w)((k) =>
                  (0, kt.of)(k).pipe(
                    (0, Yt.g)(k ? this.showDelay : this.hideDelay)
                  )
                ),
                (0, mt.b)((k) => {
                  this.hovered = k;
                }),
                (0, ut.B)()
              )),
              (this.showDelay = this.options.showDelay),
              (this.hideDelay = this.options.hideDelay),
              (this.hovered = !1),
              (this.type = 'dropdown');
          }
          toggle(C) {
            var w;
            null === (w = this.parentHover) || void 0 === w || w.toggle(C),
              this.toggle$.next(C);
          }
        }
        return (
          (b.ɵfac = function (C) {
            return new (C || b)(e.Y36(t.gs), e.Y36(Ht), e.Y36(b, 12));
          }),
          (b.ɵdir = e.lG2({
            type: b,
            selectors: [['', 'tuiDropdownHover', '', 5, 'ng-container']],
            inputs: {
              showDelay: ['tuiDropdownShowDelay', 'showDelay'],
              hideDelay: ['tuiDropdownHideDelay', 'hideDelay'],
            },
            features: [e._Bn([(0, E.UK)(b), t.gs]), e.qOj],
          })),
          b
        );
      })();
      const Te = {
          align: 'left',
          direction: null,
          limitWidth: 'auto',
          maxHeight: 400,
          minHeight: 80,
          offset: 4,
          appearance: '',
        },
        Wt = (0, et.JN)(Te),
        ke = (b) => ({
          provide: Wt,
          deps: [
            [new e.FiY(), Ce],
            [new e.FiY(), new e.tp0(), Wt],
          ],
          useFactory: (0, ae.lp)(b, Te),
        });
      let Ce = (() => {
          class b {
            constructor(C) {
              (this.options = C),
                (this.align = this.options.align),
                (this.appearance = this.options.appearance),
                (this.direction = this.options.direction),
                (this.limitWidth = this.options.limitWidth),
                (this.minHeight = this.options.minHeight),
                (this.maxHeight = this.options.maxHeight),
                (this.offset = this.options.offset);
            }
          }
          return (
            (b.ɵfac = function (C) {
              return new (C || b)(e.Y36(Wt, 4));
            }),
            (b.ɵdir = e.lG2({
              type: b,
              selectors: [
                ['', 'tuiDropdownAlign', ''],
                ['', 'tuiDropdownAppearance', ''],
                ['', 'tuiDropdownDirection', ''],
                ['', 'tuiDropdownLimitWidth', ''],
                ['', 'tuiDropdownMinHeight', ''],
                ['', 'tuiDropdownMaxHeight', ''],
                ['', 'tuiDropdownOffset', ''],
              ],
              inputs: {
                align: ['tuiDropdownAlign', 'align'],
                appearance: ['tuiDropdownAppearance', 'appearance'],
                direction: ['tuiDropdownDirection', 'direction'],
                limitWidth: ['tuiDropdownLimitWidth', 'limitWidth'],
                minHeight: ['tuiDropdownMinHeight', 'minHeight'],
                maxHeight: ['tuiDropdownMaxHeight', 'maxHeight'],
                offset: ['tuiDropdownOffset', 'offset'],
              },
              features: [
                e._Bn([{ provide: Wt, useExisting: (0, e.Gpc)(() => b) }]),
              ],
            })),
            b
          );
        })(),
        Bt = (() => {
          class b {
            constructor(C, w, P, k, X, K, W, ht, rt, tt, Mt, st) {
              (this.directive = k),
                (this.animation = X),
                (this.el = K),
                (this.host = W),
                (this.accessor = ht),
                (this.win = rt),
                (this.mode$ = tt),
                (this.options = Mt),
                (this.hoverDirective = st),
                w
                  .pipe(
                    (0, bt.U)((nt) =>
                      'fixed' === this.directive.position ? C.correct(nt) : nt
                    ),
                    (0, Ut.R)(P)
                  )
                  .subscribe(([nt, Ot]) => {
                    this.update(nt, Ot);
                  }),
                this.updateWidth(this.accessor.getClientRect().width);
            }
            onHoveredChange(C) {
              this.hoverDirective && this.hoverDirective.toggle(C);
            }
            onTopFocus() {
              this.moveFocusOutside(!0);
            }
            onBottomFocus() {
              this.moveFocusOutside(!1);
            }
            update(C, w) {
              const { style: P } = this.el.nativeElement,
                { right: k } = this.el.nativeElement.getBoundingClientRect(),
                { maxHeight: X, offset: K } = this.options,
                { innerHeight: W } = this.win,
                { clientRect: ht } = this.host,
                { position: rt } = this.directive,
                tt = this.accessor.getClientRect(),
                st = 'fixed' === rt ? 0 : -ht.top;
              C += st;
              const Ot =
                (w += 'fixed' === rt ? 0 : -ht.left) < tt.right &&
                k > tt.left &&
                C < st + 2 * K
                  ? tt.top - 2 * K
                  : st + W - C - K;
              (P.position = rt),
                (P.top = (0, pt.O)(Math.max(C, st + K))),
                (P.left = (0, pt.O)(w)),
                (P.maxHeight = (0, pt.O)(Math.min(X, Ot))),
                (P.width = ''),
                (P.minWidth = ''),
                this.updateWidth(tt.width);
            }
            updateWidth(C) {
              const { style: w } = this.el.nativeElement;
              switch (this.options.limitWidth) {
                case 'min':
                  w.minWidth = (0, pt.O)(C);
                  break;
                case 'fixed':
                  w.width = (0, pt.O)(C);
              }
            }
            moveFocusOutside(C) {
              const { nativeElement: w } = this.directive.el,
                { ownerDocument: P } = w,
                k = P ? P.body : w;
              let X = (0, L.BW)({ initial: w, root: k, previous: C });
              for (; null !== X && w.contains(X); )
                X = (0, L.BW)({ initial: X, root: k, previous: C });
              X?.focus();
            }
          }
          return (
            (b.ɵfac = function (C) {
              return new (C || b)(
                e.Y36(xt.Lp),
                e.Y36(xt.KG),
                e.Y36(B.a3, 2),
                e.Y36(Xt),
                e.Y36(Et.Pw),
                e.Y36(e.SBq),
                e.Y36(V.Er),
                e.Y36(E.O4),
                e.Y36(M.m9),
                e.Y36(Et.Au),
                e.Y36(Wt),
                e.Y36(xe, 8)
              );
            }),
            (b.ɵcmp = e.Xpm({
              type: b,
              selectors: [['tui-dropdown']],
              hostVars: 2,
              hostBindings: function (C, w) {
                1 & C &&
                  e.NdJ('$.data-mode.attr', function () {
                    return w.mode$;
                  }),
                  2 & C &&
                    (e.uIk('data-appearance', w.options.appearance),
                    e.d8E('@tuiDropdownAnimation', w.animation));
              },
              features: [
                e._Bn([
                  B.a3,
                  xt.KG,
                  (0, E.ei)('dropdown'),
                  (0, E.Wk)('dropdown', Xt),
                  at.CV,
                ]),
              ],
              decls: 5,
              vars: 4,
              consts: [
                [
                  'tuiActiveZone',
                  '',
                  'tuiOverscroll',
                  'all',
                  1,
                  't-scroll',
                  3,
                  'tuiHoveredChange',
                ],
                ['activeZone', 'tuiActiveZone'],
                ['tabindex', '0', 3, 'focus'],
                [
                  'class',
                  't-primitive',
                  4,
                  'polymorpheusOutlet',
                  'polymorpheusOutletContext',
                ],
                [1, 't-primitive'],
              ],
              template: function (C, w) {
                if (
                  (1 & C &&
                    (e.TgZ(0, 'tui-scrollbar', 0, 1),
                    e.NdJ('tuiHoveredChange', function (k) {
                      return w.onHoveredChange(k);
                    }),
                    e.TgZ(2, 'div', 2),
                    e.NdJ('focus', function () {
                      return w.onTopFocus();
                    }),
                    e.qZA(),
                    e.YNc(3, _t, 2, 1, 'div', 3),
                    e.TgZ(4, 'div', 2),
                    e.NdJ('focus', function () {
                      return w.onBottomFocus();
                    }),
                    e.qZA()()),
                  2 & C)
                ) {
                  const P = e.MAs(1);
                  e.xp6(3),
                    e.Q6J('polymorpheusOutlet', w.directive.content)(
                      'polymorpheusOutletContext',
                      e.VKq(2, _e, P)
                    );
                }
              },
              dependencies: [F, Y.e, it.W, t.co, Rt.Li],
              styles: [
                '[_nghost-%COMP%]{box-shadow:0 1.5rem 1rem #00000008,0 .75rem .75rem #0000000a,0 .25rem .375rem #0000000d;position:absolute;display:flex;background:var(--tui-elevation-02);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-base-04);box-sizing:border-box;max-width:calc(100% - 8px);isolation:isolate;pointer-events:auto}.ng-animating[_nghost-%COMP%]{pointer-events:none}[_nghost-%COMP%]:not([style*="top"]){visibility:hidden}[data-mode=onDark][_nghost-%COMP%]{--tui-text-01: var(--tui-text-01-night);--tui-clear: var(--tui-clear-inverse);background:#222;border:1px solid #808080}.t-scroll[_ngcontent-%COMP%]{flex-grow:1;max-width:100%}.t-primitive[_ngcontent-%COMP%]{padding:1rem}',
              ],
              data: { animation: [q.i9] },
            })),
            b
          );
        })(),
        be = (() => {
          class b extends E.FP {
            constructor(C, w, P) {
              super(C, w, P), (this.type = 'dropdown');
            }
          }
          return (
            (b.ɵfac = function (C) {
              return new (C || b)(e.Y36(B.a3, 2), e.Y36(E.kk), e.Y36(E.c2));
            }),
            (b.ɵdir = e.lG2({
              type: b,
              selectors: [['', 'tuiDropdown', '']],
              features: [e._Bn([B.a3]), e.qOj],
            })),
            b
          );
        })(),
        Ae = (() => {
          class b extends E.kk {
            constructor() {
              super((C) => this.stream$.subscribe(C)),
                (this.stream$ = new ot.X(!1)),
                (this.tuiDropdownManual = !1),
                (this.type = 'dropdown');
            }
            ngOnChanges() {
              this.stream$.next(this.tuiDropdownManual);
            }
          }
          return (
            (b.ɵfac = function (C) {
              return new (C || b)();
            }),
            (b.ɵdir = e.lG2({
              type: b,
              selectors: [['', 'tuiDropdown', '', 'tuiDropdownManual', '']],
              inputs: { tuiDropdownManual: 'tuiDropdownManual' },
              features: [e._Bn([(0, E.UK)(b)]), e.qOj, e.TTD],
            })),
            b
          );
        })(),
        ye = (() => {
          class b extends E.uG {
            constructor(C, w, P, k) {
              super(),
                (this.options = C),
                (this.viewport = w),
                (this.accessors = P),
                (this.directive = k),
                (this.type = 'dropdown');
            }
            getPosition({ width: C, height: w }) {
              var P, k;
              !C && !w && (this.previous = void 0);
              const X =
                  null !==
                    (k =
                      null === (P = this.accessor) || void 0 === P
                        ? void 0
                        : P.getClientRect()) && void 0 !== k
                    ? k
                    : A.Jy,
                K = this.viewport.getClientRect(),
                {
                  minHeight: W,
                  align: ht,
                  direction: rt,
                  offset: tt,
                } = this.options,
                Mt = this.previous || rt || 'bottom',
                st = Math.max(X.right - C, tt),
                nt = {
                  top: X.top - 2 * tt - K.top,
                  bottom: K.bottom - X.bottom - 2 * tt,
                },
                Ot = {
                  top: X.top - tt - w,
                  bottom: X.bottom + tt,
                  right: st,
                  center:
                    X.left + X.width / 2 + C / 2 < K.right - tt
                      ? X.left + X.width / 2 - C / 2
                      : st,
                  left: X.left + C < K.right - tt ? X.left : st,
                },
                Qt = nt.top > nt.bottom ? 'top' : 'bottom';
              return (nt[Mt] > W && rt) || nt[Mt] > w
                ? [Ot[Mt], Ot[ht]]
                : ((this.previous = Qt), [Ot[Qt], Ot[ht]]);
            }
            get accessor() {
              return (0, E.Sv)('dropdown')(this.accessors, this.directive);
            }
          }
          return (
            (b.ɵfac = function (C) {
              return new (C || b)(
                e.Y36(Wt),
                e.Y36(Et.EO),
                e.Y36(E.O4),
                e.Y36(Xt)
              );
            }),
            (b.ɵdir = e.lG2({
              type: b,
              selectors: [
                [
                  '',
                  'tuiDropdown',
                  '',
                  3,
                  'tuiDropdownCustomPosition',
                  '',
                  3,
                  'tuiDropdownSided',
                  '',
                ],
              ],
              features: [e._Bn([(0, E.P7)(b)]), e.qOj],
            })),
            (0, Pt.gn)([dt.UM], b.prototype, 'accessor', null),
            b
          );
        })(),
        Fe = (() => {
          class b extends E.uG {
            constructor(C, w, P) {
              super(),
                (this.options = C),
                (this.viewport = w),
                (this.vertical = P),
                (this.previous = this.options.direction || 'bottom'),
                (this.tuiDropdownSided = ''),
                (this.tuiDropdownSidedOffset = 4),
                (this.type = 'dropdown');
            }
            getPosition(C) {
              var w, P;
              if (!1 === this.tuiDropdownSided)
                return this.vertical.getPosition(C);
              const { height: k, width: X } = C,
                K =
                  null !==
                    (P =
                      null === (w = this.vertical.accessor) || void 0 === w
                        ? void 0
                        : w.getClientRect()) && void 0 !== P
                    ? P
                    : A.Jy,
                W = this.viewport.getClientRect(),
                { direction: ht, minHeight: rt, offset: tt } = this.options,
                Mt =
                  'center' === this.options.align ? 'left' : this.options.align,
                st = {
                  top: K.bottom - W.top,
                  left: K.left - tt - W.left,
                  right: W.right - K.right - tt,
                  bottom: W.bottom - K.top,
                },
                nt = {
                  top: K.bottom - k + this.tuiDropdownSidedOffset + 1,
                  left: K.left - X - tt,
                  right: K.right + tt,
                  bottom: K.top - this.tuiDropdownSidedOffset - 1,
                },
                Ot = st.top > st.bottom ? 'top' : 'bottom',
                ne =
                  st[Mt] > X ? nt[Mt] : st.left > st.right ? nt.left : nt.right;
              return (st[this.previous] > rt && ht) || this.previous === Ot
                ? [nt[this.previous], ne]
                : ((this.previous = Ot), [nt[Ot], ne]);
            }
          }
          return (
            (b.ɵfac = function (C) {
              return new (C || b)(e.Y36(Wt), e.Y36(Et.EO), e.Y36(ye));
            }),
            (b.ɵdir = e.lG2({
              type: b,
              selectors: [['', 'tuiDropdownSided', '']],
              inputs: {
                tuiDropdownSided: 'tuiDropdownSided',
                tuiDropdownSidedOffset: 'tuiDropdownSidedOffset',
              },
              features: [e._Bn([ye, (0, E.P7)(b)]), e.qOj],
            })),
            b
          );
        })(),
        Oe = (() => {
          class b {}
          return (
            (b.ɵfac = function (C) {
              return new (C || b)();
            }),
            (b.ɵmod = e.oAB({ type: b })),
            (b.ɵinj = e.cJS({ imports: [[Rt.wq, Y.A, it.e, z, t.VE]] })),
            b
          );
        })();
    },
    9250: (se, vt, h) => {
      h.d(vt, {
        Y0: () => Jt,
        x_: () => xt,
        rW: () => Rt,
        z1: () => q,
        kI: () => Ft,
        Cs: () => Nt,
        qc: () => Et,
      });
      var e = h(8937),
        M = h(2461),
        Y = h(3561),
        it = h(5213),
        t = h(5879),
        et = h(4862),
        B = h(3019),
        j = h(5592),
        dt = h(2420);
      const pt = new j.y(dt.Z);
      var V = h(9773);
      class A {
        constructor(x, D, I, F, z, _t, _e, qt, te, Xt, ge, Ht, ee) {
          (this.change$ = x),
            (this.options = D),
            (this.legacyAppearance = I),
            (this.appearanceDirective = F),
            (this.cleanerDirective = z),
            (this.customContentDirective = _t),
            (this.iconDirective = _e),
            (this.iconLeftDirective = qt),
            (this.labelOutsideDirective = te),
            (this.sizeDirective = Xt),
            (this.prefixDirective = ge),
            (this.postfixDirective = Ht),
            (this.fillerDirective = ee);
        }
        get appearance() {
          return this.appearanceDirective.appearance || this.legacyAppearance;
        }
        get cleaner() {
          return this.cleanerDirective.cleaner;
        }
        get customContent() {
          return this.customContentDirective.customContent || '';
        }
        get icon() {
          return this.iconDirective.icon;
        }
        get iconLeft() {
          return this.iconLeftDirective.iconLeft;
        }
        get labelOutside() {
          return this.labelOutsideDirective.labelOutside;
        }
        get size() {
          return this.sizeDirective.size;
        }
        get prefix() {
          return this.prefixDirective.prefix;
        }
        get postfix() {
          return this.postfixDirective.postfix;
        }
        get filler() {
          return this.fillerDirective.filler;
        }
      }
      const q = (0, e.JN)({ iconCleaner: 'tuiIconClose', hintOnDisabled: !1 }),
        xt = (0, e.N1)(() => new Et());
      let Et = (() => {
        class v extends M.QJ {
          constructor() {
            super(...arguments), (this.appearance = '');
          }
        }
        return (
          (v.ɵfac = (function () {
            let x;
            return function (I) {
              return (x || (x = t.n5z(v)))(I || v);
            };
          })()),
          (v.ɵdir = t.lG2({
            type: v,
            selectors: [['', 'tuiTextfieldAppearance', '']],
            inputs: { appearance: ['tuiTextfieldAppearance', 'appearance'] },
            features: [
              t._Bn([{ provide: xt, useExisting: (0, t.Gpc)(() => v) }]),
              t.qOj,
            ],
          })),
          v
        );
      })();
      const Kt = (0, e.N1)(() => new Ut());
      let Ut = (() => {
        class v extends M.QJ {
          constructor() {
            super(...arguments), (this.cleaner = !1);
          }
        }
        return (
          (v.ɵfac = (function () {
            let x;
            return function (I) {
              return (x || (x = t.n5z(v)))(I || v);
            };
          })()),
          (v.ɵdir = t.lG2({
            type: v,
            selectors: [['', 'tuiTextfieldCleaner', '']],
            inputs: { cleaner: ['tuiTextfieldCleaner', 'cleaner'] },
            features: [
              t._Bn([{ provide: Kt, useExisting: (0, t.Gpc)(() => v) }]),
              t.qOj,
            ],
          })),
          v
        );
      })();
      const U = (0, e.N1)(() => new Yt());
      let Yt = (() => {
        class v extends M.QJ {}
        return (
          (v.ɵfac = (function () {
            let x;
            return function (I) {
              return (x || (x = t.n5z(v)))(I || v);
            };
          })()),
          (v.ɵdir = t.lG2({
            type: v,
            selectors: [['', 'tuiTextfieldCustomContent', '']],
            inputs: {
              customContent: ['tuiTextfieldCustomContent', 'customContent'],
            },
            features: [
              t._Bn([{ provide: U, useExisting: (0, t.Gpc)(() => v) }]),
              t.qOj,
            ],
          })),
          v
        );
      })();
      const mt = (0, e.N1)(() => new ut());
      let ut = (() => {
        class v extends M.QJ {
          constructor() {
            super(...arguments), (this.filler = '');
          }
        }
        return (
          (v.ɵfac = (function () {
            let x;
            return function (I) {
              return (x || (x = t.n5z(v)))(I || v);
            };
          })()),
          (v.ɵdir = t.lG2({
            type: v,
            selectors: [['', 'tuiTextfieldFiller', '']],
            inputs: { filler: ['tuiTextfieldFiller', 'filler'] },
            features: [
              t._Bn([{ provide: mt, useExisting: (0, t.Gpc)(() => v) }]),
              t.qOj,
            ],
          })),
          v
        );
      })();
      const bt = (0, e.N1)(() => new Pt());
      let Pt = (() => {
        class v extends M.QJ {}
        return (
          (v.ɵfac = (function () {
            let x;
            return function (I) {
              return (x || (x = t.n5z(v)))(I || v);
            };
          })()),
          (v.ɵdir = t.lG2({
            type: v,
            selectors: [['', 'tuiTextfieldIcon', '']],
            inputs: { icon: ['tuiTextfieldIcon', 'icon'] },
            features: [
              t._Bn([{ provide: bt, useExisting: (0, t.Gpc)(() => v) }]),
              t.qOj,
            ],
          })),
          v
        );
      })();
      const Z = (0, e.N1)(() => new ae());
      let ae = (() => {
        class v extends M.QJ {}
        return (
          (v.ɵfac = (function () {
            let x;
            return function (I) {
              return (x || (x = t.n5z(v)))(I || v);
            };
          })()),
          (v.ɵdir = t.lG2({
            type: v,
            selectors: [['', 'tuiTextfieldIconLeft', '']],
            inputs: { iconLeft: ['tuiTextfieldIconLeft', 'iconLeft'] },
            features: [
              t._Bn([{ provide: Z, useExisting: (0, t.Gpc)(() => v) }]),
              t.qOj,
            ],
          })),
          v
        );
      })();
      const Rt = (0, e.N1)(() => new St());
      let St = (() => {
        class v extends M.QJ {
          constructor() {
            super(...arguments), (this.labelOutside = !1);
          }
        }
        return (
          (v.ɵfac = (function () {
            let x;
            return function (I) {
              return (x || (x = t.n5z(v)))(I || v);
            };
          })()),
          (v.ɵdir = t.lG2({
            type: v,
            selectors: [['', 'tuiTextfieldLabelOutside', '']],
            inputs: {
              labelOutside: ['tuiTextfieldLabelOutside', 'labelOutside'],
            },
            features: [
              t._Bn([{ provide: Rt, useExisting: (0, t.Gpc)(() => v) }]),
              t.qOj,
            ],
          })),
          v
        );
      })();
      const ct = (0, e.N1)(() => new kt());
      let kt = (() => {
        class v extends M.QJ {
          constructor() {
            super(...arguments), (this.postfix = '');
          }
        }
        return (
          (v.ɵfac = (function () {
            let x;
            return function (I) {
              return (x || (x = t.n5z(v)))(I || v);
            };
          })()),
          (v.ɵdir = t.lG2({
            type: v,
            selectors: [['', 'tuiTextfieldPostfix', '']],
            inputs: { postfix: ['tuiTextfieldPostfix', 'postfix'] },
            features: [
              t._Bn([{ provide: ct, useExisting: (0, t.Gpc)(() => v) }]),
              t.qOj,
            ],
          })),
          v
        );
      })();
      const ot = (0, e.N1)(() => new At());
      let At = (() => {
        class v extends M.QJ {
          constructor() {
            super(...arguments), (this.prefix = '');
          }
        }
        return (
          (v.ɵfac = (function () {
            let x;
            return function (I) {
              return (x || (x = t.n5z(v)))(I || v);
            };
          })()),
          (v.ɵdir = t.lG2({
            type: v,
            selectors: [['', 'tuiTextfieldPrefix', '']],
            inputs: { prefix: ['tuiTextfieldPrefix', 'prefix'] },
            features: [
              t._Bn([{ provide: ot, useExisting: (0, t.Gpc)(() => v) }]),
              t.qOj,
            ],
          })),
          v
        );
      })();
      const Ft = (0, e.N1)(() => new It());
      let It = (() => {
        class v extends M.QJ {
          constructor() {
            super(...arguments), (this.size = 'l');
          }
        }
        return (
          (v.ɵfac = (function () {
            let x;
            return function (I) {
              return (x || (x = t.n5z(v)))(I || v);
            };
          })()),
          (v.ɵdir = t.lG2({
            type: v,
            selectors: [['', 'tuiTextfieldSize', '']],
            inputs: { size: ['tuiTextfieldSize', 'size'] },
            features: [
              t._Bn([{ provide: Ft, useExisting: (0, t.Gpc)(() => v) }]),
              t.qOj,
            ],
          })),
          v
        );
      })();
      const Nt = new t.OlP('[TUI_TEXTFIELD_WATCHED_CONTROLLER]'),
        Jt = [
          Y.a3,
          {
            provide: Nt,
            deps: [t.sBO, Y.a3, q, et.jt, xt, Kt, U, bt, Z, Rt, Ft, ot, ct, mt],
            useFactory: (v, x, D, I, ...F) => {
              const z = (0, B.T)(...F.map(({ change$: _t }) => _t || pt)).pipe(
                (0, it.NA)(v),
                (0, V.R)(x)
              );
              return z.subscribe(), new A(z, D, I, ...F);
            },
          },
        ];
    },
  },
]);
